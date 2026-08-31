import type { SubjectKey } from './content';

export type Protagonist = 'female' | 'male' | null;

export interface MasteryState {
  box: 0 | 1 | 2 | 3;
  attempts: number;
  correct: number;
  correctStreak: number;
  lastSeenAt: string | null;
  nextReviewAt: string | null;
  misconceptionTags: string[];
}

export interface AttemptRecord {
  id: string;
  questionId: string;
  nodeId: string;
  knowledgePointId: string;
  personId: string;
  subjects: SubjectKey[];
  selectedIndex: number;
  correct: boolean;
  answeredAt: string;
}

export interface CaseProgress {
  caseId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  currentIndex: number;
  selectedVariantIds: string[];
  retryQuestionIds: string[];
  correctFirstTry: number;
  totalAnswered: number;
  startedAt: string | null;
  completedAt: string | null;
}

export interface FlowSettings {
  soundEnabled: boolean;
  reducedMotion: boolean;
}

export interface FlowSave {
  schemaVersion: 'flow-save-v1';
  contentVersion: string;
  protagonist: Protagonist;
  createdAt: string;
  updatedAt: string;
  settings: FlowSettings;
  unlockedPersonIds: string[];
  mastery: Record<string, MasteryState>;
  attempts: AttemptRecord[];
  cases: Record<string, CaseProgress>;
}

export interface BackupEnvelope {
  format: 'flow-backup';
  exportedAt: string;
  save: FlowSave;
}
