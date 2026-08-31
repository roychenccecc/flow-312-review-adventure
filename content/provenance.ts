/**
 * Content-scope audit recorded during the v1 build.
 * The user-held syllabus artifact remains read-only and is not bundled into the app.
 */
export const contentProvenance = {
  auditedAt: '2026-08-31',
  targetExamYear: 2027,
  localBaseline: {
    examYear: 2026,
    displayedTitle: '2026年考研心理学专业基础考试大纲（科目：心理学）',
    nodeCount: 563,
    verificationStatus: 'FROZEN_WITH_EXPLICIT_EVIDENCE_LIMITS',
    authorityConfidence: 'C',
    readOnly: true,
  },
  officialOutlineCheck: {
    url: 'https://yankao.neea.edu.cn/xhtml1/category/1509/6235-1.htm',
    result: 'NO_2027_PSYCHOLOGY_OUTLINE_LISTED',
    latestPsychologyOutlineVisible: 2022,
  },
  teachingModules: [
    '普通心理学',
    '社会心理学',
    '发展心理学',
    '教育心理学',
    '实验心理学',
    '心理统计学',
    '心理测量学',
  ],
} as const;
