import assert from 'node:assert/strict';
import test from 'node:test';

import {
  CONTENT_VERSION,
  createBackup,
  createDefaultSave,
  migrateSave,
  validateBackup,
} from '@/src/lib/save';

test('default save and backup use stable versioned envelopes', () => {
  const now = new Date('2026-08-31T12:00:00.000Z');
  const save = createDefaultSave(now);
  const backup = createBackup(save, now);
  assert.equal(save.schemaVersion, 'flow-save-v1');
  assert.equal(save.contentVersion, CONTENT_VERSION);
  assert.equal(backup.format, 'flow-backup');
  assert.deepEqual(validateBackup(structuredClone(backup)), backup);
});

test('migration keeps progress while upgrading the content version', () => {
  const save = createDefaultSave();
  save.contentVersion = 'older-content';
  save.unlockedPersonIds.push('hermann-ebbinghaus');
  const migrated = migrateSave(save);
  assert.equal(migrated.contentVersion, CONTENT_VERSION);
  assert.deepEqual(migrated.unlockedPersonIds, ['hermann-ebbinghaus']);
  assert.ok(migrated.cases['misfiled-scholars']);
});

test('corrupt, incomplete and incompatible backups are rejected', () => {
  const valid = createBackup(createDefaultSave());
  assert.throws(() => validateBackup({ nope: true }), /不是 Flow/);

  const incompatible = structuredClone(valid) as any;
  incompatible.save.schemaVersion = 'flow-save-v0';
  assert.throws(() => validateBackup(incompatible), /版本不兼容/);

  const badMastery = structuredClone(valid) as any;
  badMastery.save.mastery.x = { box: 99 };
  assert.throws(() => validateBackup(badMastery), /内容不完整/);

  const badAttempt = structuredClone(valid) as any;
  badAttempt.save.attempts.push({ selectedIndex: 'A' });
  assert.throws(() => validateBackup(badAttempt), /学习记录格式错误/);

  const badCase = structuredClone(valid) as any;
  badCase.save.cases['misfiled-scholars'].currentIndex = -1;
  assert.throws(() => validateBackup(badCase), /学习记录格式错误/);
});
