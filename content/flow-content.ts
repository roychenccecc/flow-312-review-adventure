import { firstCase, people, relations, sources } from './core';
import { questions } from './questions';
import { rosterPeople, rosterRelations, rosterSources } from './roster';
import { experimentStories, storySources, theoryLineages } from './stories';
import type { FlowContent } from '@/src/types/content';

export const flowContent: FlowContent = {
  schemaVersion: 'flow-content-v1',
  contentVersion: '2026.08-v1',
  generatedAt: '2026-08-31',
  sources: [...sources, ...rosterSources, ...storySources],
  people: [...people, ...rosterPeople],
  relations: [...relations, ...rosterRelations],
  questions,
  cases: [firstCase],
  lineages: theoryLineages,
  experiments: experimentStories,
};
