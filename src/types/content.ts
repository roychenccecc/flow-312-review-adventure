export type SubjectKey =
  | 'general'
  | 'social'
  | 'development'
  | 'education'
  | 'experiment'
  | 'statistics'
  | 'measurement';

export type PersonTier = 'core' | 'secondary' | 'archive';

export type RelationType =
  | 'proposed'
  | 'developed'
  | 'experimented'
  | 'instrument_created'
  | 'statistical_method_created'
  | 'co_tested'
  | 'secondary_context';

export type ExamRole = 'primary' | 'co_tested' | 'secondary';

export type SourceKind =
  | 'official_outline'
  | 'publisher'
  | 'university'
  | 'professional_association'
  | 'original_research'
  | 'reference';

export interface SourceRef {
  id: string;
  title: string;
  titleEn?: string;
  url: string;
  kind: SourceKind;
  authority: 'A' | 'B' | 'C';
}

export interface PersonProfile {
  id: string;
  canonicalNameZh: string;
  canonicalNameEn: string;
  aliases: string[];
  identity: string;
  identityEn: string;
  lifetime: string;
  tier: PersonTier;
  subjects: SubjectKey[];
  epithet: string;
  epithetEn: string;
  summary: string;
  summaryEn: string;
  motifs: string[];
  accent: string;
  portraitIndex?: number;
  verified: boolean;
}

export interface KnowledgeRelation {
  id: string;
  personId: string;
  knowledgePointId: string;
  subjects: SubjectKey[];
  relationType: RelationType;
  examRole: ExamRole;
  claim: string;
  claimEn: string;
  sourceIds: string[];
  confusionWith?: string[];
}

export type QuestionType =
  | 'theory-attribution'
  | 'calculation'
  | 'scenario-judgment'
  | 'experiment-design'
  | 'curve-interpretation'
  | 'variable-control'
  | 'sequence'
  | 'concept-matching'
  | 'misconception-diagnosis'
  | 'researcher-attribution'
  | 'evidence-interpretation'
  | 'concept-definition'
  | 'concept-exclusion'
  | 'result-interpretation'
  | 'method-identification'
  | 'method-selection'
  | 'property-judgment'
  | 'method-purpose';

export interface QuestionVariant {
  id: string;
  nodeId: string;
  knowledgePointId: string;
  personId: string;
  subjects: SubjectKey[];
  relationId: string;
  type: QuestionType;
  nodeTitle: string;
  nodeTitleEn: string;
  prompt: string;
  promptEn: string;
  options: string[];
  optionsEn: string[];
  answerIndex: number;
  explanation: string;
  explanationEn: string;
  misconceptionTag: string;
  sourceUrl: string;
}

export interface CaseDefinition {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  estimatedMinutes: number;
  nodeIds: string[];
  castIds: string[];
  synopsis: string;
  synopsisEn: string;
}

export type LineageRelationKind =
  | 'foundation'
  | 'limitation'
  | 'revision'
  | 'extension'
  | 'alternative';

export interface LineageChapter {
  id: string;
  year: string;
  personIds: string[];
  relationKind: LineageRelationKind;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  examCue: string;
  examCueEn: string;
  sourceIds: string[];
}

export interface TheoryLineage {
  id: string;
  title: string;
  titleEn: string;
  theme: string;
  themeEn: string;
  subjects: SubjectKey[];
  chapters: LineageChapter[];
}

export type ExperimentPhase =
  | 'question'
  | 'hypothesis'
  | 'operationalization'
  | 'variables'
  | 'obstacle'
  | 'solution'
  | 'result'
  | 'boundary'
  | 'ethics';

export interface ExperimentStage {
  phase: ExperimentPhase;
  title: string;
  titleEn: string;
  detail: string;
  detailEn: string;
}

export interface ExperimentStory {
  id: string;
  personIds: string[];
  subjects: SubjectKey[];
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  stages: ExperimentStage[];
  sourceIds: string[];
}

export interface FlowContent {
  schemaVersion: 'flow-content-v1';
  contentVersion: string;
  generatedAt: string;
  sources: SourceRef[];
  people: PersonProfile[];
  relations: KnowledgeRelation[];
  questions: QuestionVariant[];
  cases: CaseDefinition[];
  lineages: TheoryLineage[];
  experiments: ExperimentStory[];
}

export const SUBJECT_LABELS: Record<SubjectKey, string> = {
  general: '普通心理学',
  social: '社会心理学',
  development: '发展心理学',
  education: '教育心理学',
  experiment: '实验心理学',
  statistics: '心理统计学',
  measurement: '心理测量学',
};

export const SUBJECT_SHORT_LABELS: Record<SubjectKey, string> = {
  general: '普心',
  social: '社心',
  development: '发展',
  education: '教育',
  experiment: '实验',
  statistics: '统计',
  measurement: '测量',
};

export const SUBJECT_LABELS_EN: Record<SubjectKey, string> = {
  general: 'General Psychology',
  social: 'Social Psychology',
  development: 'Developmental Psychology',
  education: 'Educational Psychology',
  experiment: 'Experimental Psychology',
  statistics: 'Psychological Statistics',
  measurement: 'Psychometrics',
};
