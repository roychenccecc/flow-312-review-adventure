import type { QuestionVariant } from '@/src/types/content';
import type { AttemptRecord, FlowSave, MasteryState } from '@/src/types/save';

export const BOX_INTERVAL_DAYS = [0, 1, 3, 7] as const;

export function emptyMastery(): MasteryState {
  return {
    box: 0,
    attempts: 0,
    correct: 0,
    correctStreak: 0,
    lastSeenAt: null,
    nextReviewAt: null,
    misconceptionTags: [],
  };
}

function addDays(now: Date, days: number): string {
  const next = new Date(now);
  next.setDate(next.getDate() + days);
  next.setHours(4, 0, 0, 0);
  return next.toISOString();
}

export function updateMastery(
  current: MasteryState | undefined,
  isCorrect: boolean,
  misconceptionTag: string,
  now = new Date(),
): MasteryState {
  const previous = current ?? emptyMastery();
  const nextBox = isCorrect
    ? (Math.min(3, previous.box + 1) as MasteryState['box'])
    : 0;

  return {
    box: nextBox,
    attempts: previous.attempts + 1,
    correct: previous.correct + (isCorrect ? 1 : 0),
    correctStreak: isCorrect ? previous.correctStreak + 1 : 0,
    lastSeenAt: now.toISOString(),
    nextReviewAt: addDays(now, BOX_INTERVAL_DAYS[nextBox]),
    misconceptionTags: isCorrect
      ? previous.misconceptionTags
      : Array.from(new Set([...previous.misconceptionTags, misconceptionTag])),
  };
}

export function recordAnswer(
  save: FlowSave,
  question: QuestionVariant,
  selectedIndex: number,
  now = new Date(),
): FlowSave {
  const isCorrect = selectedIndex === question.answerIndex;
  const attempt: AttemptRecord = {
    id: `${question.id}-${now.getTime()}`,
    questionId: question.id,
    nodeId: question.nodeId,
    knowledgePointId: question.knowledgePointId,
    personId: question.personId,
    subjects: question.subjects,
    selectedIndex,
    correct: isCorrect,
    answeredAt: now.toISOString(),
  };

  return {
    ...save,
    updatedAt: now.toISOString(),
    mastery: {
      ...save.mastery,
      [question.knowledgePointId]: updateMastery(
        save.mastery[question.knowledgePointId],
        isCorrect,
        question.misconceptionTag,
        now,
      ),
    },
    attempts: [...save.attempts, attempt].slice(-800),
  };
}

export function dueKnowledgePointIds(save: FlowSave, now = new Date()): string[] {
  const nowMs = now.getTime();
  return Object.entries(save.mastery)
    .filter(([, mastery]) => {
      if (!mastery.nextReviewAt) return false;
      return new Date(mastery.nextReviewAt).getTime() <= nowMs;
    })
    .sort(([, a], [, b]) => {
      return (
        new Date(a.nextReviewAt ?? 0).getTime() -
        new Date(b.nextReviewAt ?? 0).getTime()
      );
    })
    .map(([knowledgePointId]) => knowledgePointId);
}

export function masteryPercent(save: FlowSave): number {
  const entries = Object.values(save.mastery);
  if (entries.length === 0) return 0;
  const value = entries.reduce((sum, item) => sum + item.box / 3, 0);
  return Math.round((value / entries.length) * 100);
}
