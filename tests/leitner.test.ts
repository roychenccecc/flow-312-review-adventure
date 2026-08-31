import assert from 'node:assert/strict';
import test from 'node:test';

import { questions } from '@/content/questions';
import {
  dueKnowledgePointIds,
  emptyMastery,
  masteryPercent,
  recordAnswer,
  updateMastery,
} from '@/src/lib/leitner';
import { createDefaultSave } from '@/src/lib/save';

test('a wrong answer returns to box zero and is due in the same run', () => {
  const now = new Date('2026-08-31T12:00:00.000Z');
  const state = updateMastery(undefined, false, 'wrong-attribution', now);
  assert.equal(state.box, 0);
  assert.equal(state.correctStreak, 0);
  assert.deepEqual(state.misconceptionTags, ['wrong-attribution']);
  const save = createDefaultSave(now);
  save.mastery.example = state;
  assert.deepEqual(dueKnowledgePointIds(save, now), ['example']);
});

test('successful retrieval advances through 1, 3 and 7 day boxes', () => {
  const now = new Date('2026-08-31T12:00:00.000Z');
  const box1 = updateMastery(undefined, true, 'unused', now);
  const box2 = updateMastery(box1, true, 'unused', now);
  const box3 = updateMastery(box2, true, 'unused', now);
  assert.deepEqual([box1.box, box2.box, box3.box], [1, 2, 3]);
  const hours = [box1, box2, box3].map(
    (state) => (new Date(state.nextReviewAt!).getTime() - now.getTime()) / 3_600_000,
  );
  assert.ok(hours[0] > 0 && hours[0] <= 24);
  assert.ok(hours[1] > 48 && hours[1] <= 72);
  assert.ok(hours[2] > 144 && hours[2] <= 168);
});

test('recordAnswer is immutable and mastery percentage reflects boxes', () => {
  const save = createDefaultSave(new Date('2026-08-31T12:00:00.000Z'));
  const question = questions[0];
  const answered = recordAnswer(save, question, question.answerIndex, new Date('2026-08-31T12:05:00.000Z'));
  assert.equal(save.attempts.length, 0);
  assert.equal(answered.attempts.length, 1);
  assert.equal(answered.mastery[question.knowledgePointId].box, 1);
  assert.equal(masteryPercent(answered), 33);
  assert.deepEqual(emptyMastery().misconceptionTags, []);
});

test('a later error resets the box and does not duplicate misconception tags', () => {
  const now = new Date('2026-08-31T12:00:00.000Z');
  const strong = updateMastery(updateMastery(undefined, true, 'tag', now), true, 'tag', now);
  const wrong1 = updateMastery(strong, false, 'tag', now);
  const wrong2 = updateMastery(wrong1, false, 'tag', now);
  assert.equal(wrong2.box, 0);
  assert.deepEqual(wrong2.misconceptionTags, ['tag']);
});
