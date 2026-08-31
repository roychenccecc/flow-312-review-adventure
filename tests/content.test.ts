import assert from 'node:assert/strict';
import test from 'node:test';

import { flowContent } from '@/content/flow-content';
import { selectCaseQuestions } from '@/content/questions';
import type { SubjectKey } from '@/src/types/content';

const allSubjects: SubjectKey[] = [
  'general',
  'social',
  'development',
  'education',
  'experiment',
  'statistics',
  'measurement',
];

test('flow-content-v1 has a unique 120-person bilingual roster', () => {
  assert.equal(flowContent.schemaVersion, 'flow-content-v1');
  assert.equal(flowContent.people.length, 120);
  assert.equal(new Set(flowContent.people.map((person) => person.id)).size, 120);
  assert.equal(new Set(flowContent.people.map((person) => person.canonicalNameEn)).size, 120);
  for (const person of flowContent.people) {
    assert.ok(person.canonicalNameZh && person.canonicalNameEn);
    assert.ok(person.identity && person.identityEn);
    assert.ok(person.summary && person.summaryEn);
    assert.ok(person.epithet && person.epithetEn);
    assert.equal(person.verified, true);
  }
  assert.ok(flowContent.people.filter((person) => person.subjects.includes('social')).length >= 30);
});

test('first case contains 16 nodes with three bilingual static variants each', () => {
  assert.equal(flowContent.cases.length, 1);
  assert.equal(flowContent.cases[0].nodeIds.length, 16);
  assert.equal(flowContent.questions.length, 48);
  const grouped = Map.groupBy(flowContent.questions, (question) => question.nodeId);
  assert.equal(grouped.size, 16);
  for (const variants of grouped.values()) {
    assert.equal(variants.length, 3);
    for (const question of variants) {
      assert.ok(question.nodeTitle && question.nodeTitleEn);
      assert.ok(question.prompt && question.promptEn);
      assert.equal(question.options.length, 4);
      assert.equal(question.optionsEn.length, 4);
      assert.ok(question.explanation && question.explanationEn);
      assert.ok(question.answerIndex >= 0 && question.answerIndex < 4);
      assert.match(question.sourceUrl, /^https:\/\//);
    }
  }
  assert.equal(selectCaseQuestions('fixed-seed').length, 16);
});

test('all seven teaching modules have scored coverage', () => {
  const covered = new Set(flowContent.questions.flatMap((question) => question.subjects));
  assert.deepEqual([...allSubjects].sort(), [...covered].sort());
});

test('people, relations, sources and formal questions have no dangling references', () => {
  const personIds = new Set(flowContent.people.map((person) => person.id));
  const relationIds = new Set(flowContent.relations.map((relation) => relation.id));
  const sourceIds = new Set(flowContent.sources.map((source) => source.id));
  assert.equal(sourceIds.size, flowContent.sources.length);
  for (const relation of flowContent.relations) {
    assert.ok(personIds.has(relation.personId), relation.id);
    assert.ok(relation.claim && relation.claimEn, relation.id);
    assert.ok(relation.sourceIds.length > 0, relation.id);
    relation.sourceIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), sourceId));
  }
  for (const question of flowContent.questions) {
    assert.ok(personIds.has(question.personId), question.id);
    assert.ok(relationIds.has(question.relationId), question.id);
    assert.equal(flowContent.people.find((person) => person.id === question.personId)?.verified, true);
  }
});

test('theory lineage and experiment stories preserve evidence boundaries', () => {
  assert.ok(flowContent.lineages.length >= 10);
  assert.equal(flowContent.experiments.length, 6);
  const personIds = new Set(flowContent.people.map((person) => person.id));
  const sourceIds = new Set(flowContent.sources.map((source) => source.id));
  for (const lineage of flowContent.lineages) {
    assert.ok(lineage.title && lineage.titleEn && lineage.chapters.length >= 2);
    for (const chapter of lineage.chapters) {
      chapter.personIds.forEach((personId) => assert.ok(personIds.has(personId), personId));
      chapter.sourceIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), sourceId));
      assert.ok(chapter.examCue && chapter.examCueEn);
    }
  }
  for (const experiment of flowContent.experiments) {
    const phases = new Set(experiment.stages.map((stage) => stage.phase));
    for (const phase of ['question', 'hypothesis', 'operationalization', 'variables', 'obstacle', 'solution', 'result', 'boundary', 'ethics']) {
      assert.ok(phases.has(phase as never), `${experiment.id}: ${phase}`);
    }
    experiment.personIds.forEach((personId) => assert.ok(personIds.has(personId), personId));
    experiment.sourceIds.forEach((sourceId) => assert.ok(sourceIds.has(sourceId), sourceId));
  }
});
