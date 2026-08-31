import type { BackupEnvelope, CaseProgress, FlowSave, Protagonist } from '@/src/types/save';

export const SAVE_SCHEMA_VERSION = 'flow-save-v1' as const;
export const CONTENT_VERSION = '2026.08-v1';

export function createCaseProgress(caseId: string): CaseProgress {
  return {
    caseId,
    status: 'not_started',
    currentIndex: 0,
    selectedVariantIds: [],
    retryQuestionIds: [],
    correctFirstTry: 0,
    totalAnswered: 0,
    startedAt: null,
    completedAt: null,
  };
}

export function createDefaultSave(now = new Date()): FlowSave {
  const timestamp = now.toISOString();
  return {
    schemaVersion: SAVE_SCHEMA_VERSION,
    contentVersion: CONTENT_VERSION,
    protagonist: null,
    createdAt: timestamp,
    updatedAt: timestamp,
    settings: {
      soundEnabled: false,
      reducedMotion: false,
    },
    unlockedPersonIds: [],
    mastery: {},
    attempts: [],
    cases: {
      'misfiled-scholars': createCaseProgress('misfiled-scholars'),
    },
  };
}

export function withProtagonist(save: FlowSave, protagonist: Protagonist): FlowSave {
  return { ...save, protagonist, updatedAt: new Date().toISOString() };
}

export function createBackup(save: FlowSave, now = new Date()): BackupEnvelope {
  return { format: 'flow-backup', exportedAt: now.toISOString(), save };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isIsoDateOrNull(value: unknown): boolean {
  return value === null || (typeof value === 'string' && !Number.isNaN(Date.parse(value)));
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isNonNegativeInteger(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) >= 0;
}

function validateMasteryMap(value: Record<string, unknown>): boolean {
  return Object.entries(value).every(([knowledgePointId, item]) => {
    if (!knowledgePointId || !isRecord(item)) return false;
    return (
      isNonNegativeInteger(item.box) &&
      Number(item.box) <= 3 &&
      isNonNegativeInteger(item.attempts) &&
      isNonNegativeInteger(item.correct) &&
      Number(item.correct) <= Number(item.attempts) &&
      isNonNegativeInteger(item.correctStreak) &&
      isIsoDateOrNull(item.lastSeenAt) &&
      isIsoDateOrNull(item.nextReviewAt) &&
      isStringArray(item.misconceptionTags)
    );
  });
}

function validateAttempts(value: unknown[]): boolean {
  return value.every((attempt) => {
    if (!isRecord(attempt)) return false;
    return (
      ['id', 'questionId', 'nodeId', 'knowledgePointId', 'personId'].every(
        (key) => typeof attempt[key] === 'string' && attempt[key] !== '',
      ) &&
      isStringArray(attempt.subjects) &&
      isNonNegativeInteger(attempt.selectedIndex) &&
      Number(attempt.selectedIndex) <= 3 &&
      typeof attempt.correct === 'boolean' &&
      typeof attempt.answeredAt === 'string' &&
      !Number.isNaN(Date.parse(attempt.answeredAt))
    );
  });
}

function validateCases(value: Record<string, unknown>): boolean {
  return Object.entries(value).every(([caseId, item]) => {
    if (!caseId || !isRecord(item)) return false;
    return (
      item.caseId === caseId &&
      ['not_started', 'in_progress', 'completed'].includes(String(item.status)) &&
      isNonNegativeInteger(item.currentIndex) &&
      isStringArray(item.selectedVariantIds) &&
      isStringArray(item.retryQuestionIds) &&
      isNonNegativeInteger(item.correctFirstTry) &&
      isNonNegativeInteger(item.totalAnswered) &&
      isIsoDateOrNull(item.startedAt) &&
      isIsoDateOrNull(item.completedAt)
    );
  });
}

export function validateBackup(value: unknown): BackupEnvelope {
  if (
    !isRecord(value) ||
    value.format !== 'flow-backup' ||
    typeof value.exportedAt !== 'string' ||
    Number.isNaN(Date.parse(value.exportedAt)) ||
    !isRecord(value.save)
  ) {
    throw new Error('这不是 Flow 备份文件。');
  }

  if (value.save.schemaVersion !== SAVE_SCHEMA_VERSION) {
    throw new Error('备份版本不兼容。');
  }

  if (
    typeof value.save.contentVersion !== 'string' ||
    ![null, 'female', 'male'].includes(value.save.protagonist as null | string) ||
    typeof value.save.createdAt !== 'string' ||
    Number.isNaN(Date.parse(value.save.createdAt)) ||
    typeof value.save.updatedAt !== 'string' ||
    Number.isNaN(Date.parse(value.save.updatedAt)) ||
    !isRecord(value.save.settings) ||
    typeof value.save.settings.soundEnabled !== 'boolean' ||
    typeof value.save.settings.reducedMotion !== 'boolean' ||
    !isStringArray(value.save.unlockedPersonIds) ||
    !isRecord(value.save.mastery) ||
    !validateMasteryMap(value.save.mastery)
  ) {
    throw new Error('备份内容不完整。');
  }

  if (
    !Array.isArray(value.save.attempts) ||
    !validateAttempts(value.save.attempts) ||
    !isRecord(value.save.cases) ||
    !validateCases(value.save.cases)
  ) {
    throw new Error('备份中的学习记录格式错误。');
  }

  return value as unknown as BackupEnvelope;
}

export function migrateSave(value: FlowSave): FlowSave {
  return {
    ...value,
    contentVersion: CONTENT_VERSION,
    settings: {
      soundEnabled: value.settings?.soundEnabled ?? false,
      reducedMotion: value.settings?.reducedMotion ?? false,
    },
    cases: {
      'misfiled-scholars':
        value.cases?.['misfiled-scholars'] ?? createCaseProgress('misfiled-scholars'),
      ...value.cases,
    },
  };
}
