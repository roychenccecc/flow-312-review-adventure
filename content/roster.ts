import type {
  KnowledgeRelation,
  PersonProfile,
  RelationType,
  SourceRef,
  SubjectKey,
} from '@/src/types/content';

/**
 * Candidate archive for the wider 312 cast.
 *
 * These records are intentionally kept separate from the six first-case actors in
 * core.ts.  They may appear in the archive and relationship map, but only a
 * separately audited QuestionVariant should promote a relation into a scored item.
 */
export type RosterPersonProfile = PersonProfile & {
  identityEn: string;
  epithetEn: string;
  summaryEn: string;
  examAnchor: string;
  examAnchorEn: string;
};

export type RosterKnowledgeRelation = KnowledgeRelation & {
  claimEn: string;
};

export const rosterSources: SourceRef[] = [
  {
    id: 'roster-openstax-psychology',
    title: 'OpenStax Psychology 2e',
    url: 'https://openstax.org/details/books/psychology-2e',
    kind: 'reference',
    authority: 'B',
  },
  {
    id: 'roster-apa-dictionary',
    title: 'APA Dictionary of Psychology',
    url: 'https://dictionary.apa.org/',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'roster-york-classics',
    title: 'Classics in the History of Psychology — York University',
    url: 'https://psychclassics.yorku.ca/',
    kind: 'university',
    authority: 'A',
  },
  {
    id: 'roster-apa-social-lesson',
    title: 'APA TOPSS Social Psychology Teaching Module',
    url: 'https://www.apa.org/ed/precollege/topss/lessons/social-psychology.pdf',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'roster-noba-psychology',
    title: 'Noba Psychology Modules',
    url: 'https://nobaproject.com/modules',
    kind: 'university',
    authority: 'B',
  },
  {
    id: 'roster-nist-statistics',
    title: 'NIST/SEMATECH e-Handbook of Statistical Methods',
    url: 'https://www.itl.nist.gov/div898/handbook/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'roster-ets-research',
    title: 'ETS Research: Psychometrics, Statistics and Data Sciences',
    url: 'https://www.ets.org/research/topics/psychometrics-statistics-data-sciences.html',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'roster-ncme-testing-standards',
    title: 'Standards for Educational and Psychological Testing',
    url: 'https://www.testingstandards.net/open-access-files.html',
    kind: 'professional_association',
    authority: 'A',
  },
];

type ScholarSeed = {
  id: string;
  zh: string;
  en: string;
  aliases?: string[];
  identity: string;
  identityEn: string;
  lifetime: string;
  subjects: SubjectKey[];
  anchor: string;
  anchorEn: string;
  knowledgePointId: string;
  relationType: RelationType;
  sourceId: string;
  tier?: PersonProfile['tier'];
  confusionWith?: string[];
};

const seeds: ScholarSeed[] = [
  // Foundations, learning, motivation and major schools
  { id: 'wilhelm-wundt', zh: '威廉·冯特', en: 'Wilhelm Wundt', aliases: ['冯特'], identity: '德国心理学家、生理学家', identityEn: 'German psychologist and physiologist', lifetime: '1832–1920', subjects: ['general', 'experiment'], anchor: '心理学实验室与实验内省法', anchorEn: 'the psychology laboratory and experimental introspection', knowledgePointId: 'history.wundt.laboratory-introspection', relationType: 'developed', sourceId: 'roster-york-classics', tier: 'secondary' },
  { id: 'ernst-weber', zh: '恩斯特·韦伯', en: 'Ernst Heinrich Weber', aliases: ['韦伯', 'E. H. Weber'], identity: '德国医生、解剖学家和生理学家', identityEn: 'German physician, anatomist, and physiologist', lifetime: '1795–1878', subjects: ['general', 'experiment'], anchor: '差别阈限与韦伯定律', anchorEn: "difference thresholds and Weber's law", knowledgePointId: 'sensation.weber.difference-threshold', relationType: 'experimented', sourceId: 'roster-york-classics', tier: 'secondary', confusionWith: ['马克斯·韦伯', '费希纳的对数定律'] },
  { id: 'william-james', zh: '威廉·詹姆斯', en: 'William James', aliases: ['詹姆斯', 'W. James'], identity: '美国心理学家、哲学家', identityEn: 'American psychologist and philosopher', lifetime: '1842–1910', subjects: ['general'], anchor: '机能主义与意识流', anchorEn: 'functionalism and the stream of consciousness', knowledgePointId: 'history.james.functionalism-consciousness', relationType: 'developed', sourceId: 'roster-york-classics', tier: 'secondary' },
  { id: 'john-watson', zh: '约翰·华生', en: 'John B. Watson', aliases: ['华生', 'J. B. Watson'], identity: '美国心理学家、行为主义奠基者', identityEn: 'American psychologist and founder of behaviorism', lifetime: '1878–1958', subjects: ['general', 'development', 'experiment'], anchor: '行为主义与小阿尔伯特研究', anchorEn: 'behaviorism and the Little Albert study', knowledgePointId: 'learning.watson.behaviorism-little-albert', relationType: 'developed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'ivan-pavlov', zh: '伊万·巴甫洛夫', en: 'Ivan Pavlov', aliases: ['巴甫洛夫'], identity: '俄国生理学家、医生', identityEn: 'Russian physiologist and physician', lifetime: '1849–1936', subjects: ['general', 'experiment'], anchor: '经典条件作用', anchorEn: 'classical conditioning', knowledgePointId: 'learning.pavlov.classical-conditioning', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary', confusionWith: ['操作性条件作用'] },
  { id: 'edward-thorndike', zh: '爱德华·桑代克', en: 'Edward L. Thorndike', aliases: ['桑代克'], identity: '美国心理学家、教育测量先驱', identityEn: 'American psychologist and educational measurement pioneer', lifetime: '1874–1949', subjects: ['general', 'education', 'experiment'], anchor: '尝试错误学习与效果律', anchorEn: 'trial-and-error learning and the law of effect', knowledgePointId: 'learning.thorndike.law-of-effect', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'bf-skinner', zh: '伯尔赫斯·斯金纳', en: 'B. F. Skinner', aliases: ['斯金纳', 'Burrhus Frederic Skinner'], identity: '美国心理学家、激进行为主义代表', identityEn: 'American psychologist and radical behaviorist', lifetime: '1904–1990', subjects: ['general', 'education', 'experiment'], anchor: '操作性条件作用与强化程序', anchorEn: 'operant conditioning and schedules of reinforcement', knowledgePointId: 'learning.skinner.operant-conditioning', relationType: 'developed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'edward-tolman', zh: '爱德华·托尔曼', en: 'Edward C. Tolman', aliases: ['托尔曼'], identity: '美国心理学家、新行为主义代表', identityEn: 'American psychologist and neobehaviorist', lifetime: '1886–1959', subjects: ['general', 'experiment'], anchor: '潜伏学习与认知地图', anchorEn: 'latent learning and cognitive maps', knowledgePointId: 'learning.tolman.latent-learning-map', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'wolfgang-kohler', zh: '沃尔夫冈·苛勒', en: 'Wolfgang Köhler', aliases: ['苛勒', '柯勒'], identity: '德国心理学家、格式塔学派代表', identityEn: 'German psychologist and Gestalt theorist', lifetime: '1887–1967', subjects: ['general', 'experiment'], anchor: '顿悟学习', anchorEn: 'insight learning', knowledgePointId: 'learning.kohler.insight', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'max-wertheimer', zh: '马克斯·韦特海默', en: 'Max Wertheimer', aliases: ['韦特海默'], identity: '德裔美国心理学家、格式塔学派创始人', identityEn: 'German-American psychologist and founder of Gestalt psychology', lifetime: '1880–1943', subjects: ['general', 'experiment'], anchor: '似动现象与格式塔心理学', anchorEn: 'the phi phenomenon and Gestalt psychology', knowledgePointId: 'perception.wertheimer.phi-gestalt', relationType: 'experimented', sourceId: 'roster-york-classics', tier: 'secondary' },
  { id: 'sigmund-freud', zh: '西格蒙德·弗洛伊德', en: 'Sigmund Freud', aliases: ['弗洛伊德'], identity: '奥地利神经科医生、精神分析创始人', identityEn: 'Austrian neurologist and founder of psychoanalysis', lifetime: '1856–1939', subjects: ['general', 'development'], anchor: '精神分析、人格结构与心理性欲发展', anchorEn: 'psychoanalysis, personality structure, and psychosexual development', knowledgePointId: 'personality.freud.psychoanalysis', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'carl-rogers', zh: '卡尔·罗杰斯', en: 'Carl Rogers', aliases: ['罗杰斯'], identity: '美国心理学家、人本主义代表', identityEn: 'American psychologist and humanistic theorist', lifetime: '1902–1987', subjects: ['general', 'education'], anchor: '以人为中心与无条件积极关注', anchorEn: 'person-centered theory and unconditional positive regard', knowledgePointId: 'personality.rogers.person-centered', relationType: 'developed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'abraham-maslow', zh: '亚伯拉罕·马斯洛', en: 'Abraham Maslow', aliases: ['马斯洛'], identity: '美国心理学家、人本主义代表', identityEn: 'American psychologist and humanistic theorist', lifetime: '1908–1970', subjects: ['general', 'education'], anchor: '需要层次与自我实现', anchorEn: 'the hierarchy of needs and self-actualization', knowledgePointId: 'motivation.maslow.hierarchy-of-needs', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'clark-hull', zh: '克拉克·赫尔', en: 'Clark L. Hull', aliases: ['赫尔'], identity: '美国心理学家、新行为主义代表', identityEn: 'American psychologist and neobehaviorist', lifetime: '1884–1952', subjects: ['general', 'experiment'], anchor: '驱力降低理论', anchorEn: 'drive-reduction theory', knowledgePointId: 'motivation.hull.drive-reduction', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'david-mcclelland', zh: '戴维·麦克利兰', en: 'David McClelland', aliases: ['麦克利兰'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1917–1998', subjects: ['general', 'education'], anchor: '成就需要理论', anchorEn: 'need for achievement theory', knowledgePointId: 'motivation.mcclelland.achievement-need', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'john-atkinson', zh: '约翰·阿特金森', en: 'John W. Atkinson', aliases: ['J. W. 阿特金森'], identity: '美国心理学家、动机研究者', identityEn: 'American psychologist and motivation researcher', lifetime: '1923–2003', subjects: ['general', 'education'], anchor: '成就动机的期望—价值模型', anchorEn: 'the expectancy-value model of achievement motivation', knowledgePointId: 'motivation.atkinson.expectancy-value', relationType: 'developed', sourceId: 'roster-apa-dictionary', confusionWith: ['理查德·阿特金森'] },
  { id: 'julian-rotter', zh: '朱利安·罗特', en: 'Julian B. Rotter', aliases: ['罗特'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1916–2014', subjects: ['general', 'social'], anchor: '社会学习理论与控制点', anchorEn: 'social learning theory and locus of control', knowledgePointId: 'personality.rotter.locus-of-control', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'walter-mischel', zh: '沃尔特·米歇尔', en: 'Walter Mischel', aliases: ['米歇尔'], identity: '美籍心理学家、人格研究者', identityEn: 'American psychologist and personality researcher', lifetime: '1930–2018', subjects: ['general', 'development'], anchor: '人格的认知—情感系统与延迟满足', anchorEn: 'the cognitive-affective personality system and delay of gratification', knowledgePointId: 'personality.mischel.caps-delay', relationType: 'developed', sourceId: 'roster-openstax-psychology' },
  { id: 'carl-jung', zh: '卡尔·荣格', en: 'Carl Gustav Jung', aliases: ['荣格'], identity: '瑞士精神科医生、分析心理学创始人', identityEn: 'Swiss psychiatrist and founder of analytical psychology', lifetime: '1875–1961', subjects: ['general'], anchor: '分析心理学与集体无意识', anchorEn: 'analytical psychology and the collective unconscious', knowledgePointId: 'personality.jung.analytical-psychology', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'alfred-adler', zh: '阿尔弗雷德·阿德勒', en: 'Alfred Adler', aliases: ['阿德勒'], identity: '奥地利医生、个体心理学创始人', identityEn: 'Austrian physician and founder of individual psychology', lifetime: '1870–1937', subjects: ['general'], anchor: '个体心理学与自卑感', anchorEn: 'individual psychology and feelings of inferiority', knowledgePointId: 'personality.adler.individual-psychology', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },

  // Sensation, perception, memory, thinking, emotion and personality
  { id: 'hermann-helmholtz', zh: '赫尔曼·冯·亥姆霍兹', en: 'Hermann von Helmholtz', aliases: ['亥姆霍兹'], identity: '德国医生、物理学家和生理学家', identityEn: 'German physician, physicist, and physiologist', lifetime: '1821–1894', subjects: ['general', 'experiment'], anchor: '神经传导速度与无意识推理', anchorEn: 'nerve conduction speed and unconscious inference', knowledgePointId: 'perception.helmholtz.unconscious-inference', relationType: 'developed', sourceId: 'roster-york-classics' },
  { id: 'thomas-young', zh: '托马斯·杨', en: 'Thomas Young', aliases: ['杨'], identity: '英国医生、物理学家和博学家', identityEn: 'British physician, physicist, and polymath', lifetime: '1773–1829', subjects: ['general'], anchor: '三色视觉理论的早期提出', anchorEn: 'the early trichromatic theory of color vision', knowledgePointId: 'sensation.young.trichromatic', relationType: 'proposed', sourceId: 'roster-apa-dictionary', confusionWith: ['赫尔姆霍兹的后续发展'] },
  { id: 'ewald-hering', zh: '埃瓦尔德·赫林', en: 'Ewald Hering', aliases: ['赫林'], identity: '德国生理学家', identityEn: 'German physiologist', lifetime: '1834–1918', subjects: ['general'], anchor: '颜色视觉对立过程理论', anchorEn: 'opponent-process theory of color vision', knowledgePointId: 'sensation.hering.opponent-process', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'james-gibson', zh: '詹姆斯·吉布森', en: 'James J. Gibson', aliases: ['吉布森'], identity: '美国心理学家、知觉研究者', identityEn: 'American psychologist and perception researcher', lifetime: '1904–1979', subjects: ['general'], anchor: '知觉的生态理论与直接知觉', anchorEn: 'the ecological approach and direct perception', knowledgePointId: 'perception.gibson.ecological', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'donald-broadbent', zh: '唐纳德·布罗德本特', en: 'Donald Broadbent', aliases: ['布罗德本特'], identity: '英国实验心理学家', identityEn: 'British experimental psychologist', lifetime: '1926–1993', subjects: ['general', 'experiment'], anchor: '注意的早期选择过滤器模型', anchorEn: 'the early-selection filter model of attention', knowledgePointId: 'attention.broadbent.filter', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'anne-treisman', zh: '安妮·特瑞斯曼', en: 'Anne Treisman', aliases: ['特瑞斯曼'], identity: '英裔美国认知心理学家', identityEn: 'British-American cognitive psychologist', lifetime: '1935–2018', subjects: ['general', 'experiment'], anchor: '衰减模型与特征整合理论', anchorEn: 'attenuation theory and feature integration theory', knowledgePointId: 'attention.treisman.attenuation-feature', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'daniel-kahneman', zh: '丹尼尔·卡尼曼', en: 'Daniel Kahneman', aliases: ['卡尼曼'], identity: '以色列裔美国心理学家、行为经济学研究者', identityEn: 'Israeli-American psychologist and behavioral-economics researcher', lifetime: '1934–2024', subjects: ['general', 'experiment'], anchor: '注意资源模型与判断启发式', anchorEn: 'the capacity model of attention and judgment heuristics', knowledgePointId: 'cognition.kahneman.capacity-heuristics', relationType: 'developed', sourceId: 'roster-noba-psychology', tier: 'secondary' },
  { id: 'richard-atkinson', zh: '理查德·阿特金森', en: 'Richard C. Atkinson', aliases: ['R. C. 阿特金森'], identity: '美国心理学家、认知与记忆研究者', identityEn: 'American psychologist and memory researcher', lifetime: '1929–', subjects: ['general', 'experiment'], anchor: '多存储记忆模型', anchorEn: 'the multi-store model of memory', knowledgePointId: 'memory.atkinson.multi-store', relationType: 'co_tested', sourceId: 'roster-openstax-psychology', confusionWith: ['约翰·阿特金森'] },
  { id: 'richard-shiffrin', zh: '理查德·希弗林', en: 'Richard M. Shiffrin', aliases: ['希弗林'], identity: '美国认知心理学家', identityEn: 'American cognitive psychologist', lifetime: '1942–', subjects: ['general', 'experiment'], anchor: '多存储记忆模型', anchorEn: 'the multi-store model of memory', knowledgePointId: 'memory.shiffrin.multi-store', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'alan-baddeley', zh: '艾伦·巴德利', en: 'Alan Baddeley', aliases: ['巴德利'], identity: '英国认知心理学家', identityEn: 'British cognitive psychologist', lifetime: '1934–', subjects: ['general', 'experiment'], anchor: '工作记忆模型', anchorEn: 'the working-memory model', knowledgePointId: 'memory.baddeley.working-memory', relationType: 'developed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'graham-hitch', zh: '格雷厄姆·希奇', en: 'Graham Hitch', aliases: ['希奇'], identity: '英国认知心理学家', identityEn: 'British cognitive psychologist', lifetime: '1946–', subjects: ['general', 'experiment'], anchor: '工作记忆模型', anchorEn: 'the working-memory model', knowledgePointId: 'memory.hitch.working-memory', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'endel-tulving', zh: '恩德尔·图尔文', en: 'Endel Tulving', aliases: ['图尔文'], identity: '爱沙尼亚裔加拿大认知神经科学家', identityEn: 'Estonian-Canadian cognitive neuroscientist', lifetime: '1927–2023', subjects: ['general', 'experiment'], anchor: '情景记忆与语义记忆', anchorEn: 'episodic and semantic memory', knowledgePointId: 'memory.tulving.episodic-semantic', relationType: 'proposed', sourceId: 'roster-apa-dictionary', tier: 'secondary' },
  { id: 'frederic-bartlett', zh: '弗雷德里克·巴特利特', en: 'Frederic C. Bartlett', aliases: ['巴特利特'], identity: '英国心理学家', identityEn: 'British psychologist', lifetime: '1886–1969', subjects: ['general', 'experiment'], anchor: '图式与记忆重构', anchorEn: 'schemas and reconstructive memory', knowledgePointId: 'memory.bartlett.schema-reconstruction', relationType: 'experimented', sourceId: 'roster-york-classics' },
  { id: 'george-miller', zh: '乔治·米勒', en: 'George A. Miller', aliases: ['米勒', 'G. A. Miller'], identity: '美国认知心理学家', identityEn: 'American cognitive psychologist', lifetime: '1920–2012', subjects: ['general', 'experiment'], anchor: '短时记忆广度与组块', anchorEn: 'short-term memory span and chunking', knowledgePointId: 'memory.miller.span-chunking', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'george-sperling', zh: '乔治·斯珀林', en: 'George Sperling', aliases: ['斯珀林'], identity: '美国认知心理学家', identityEn: 'American cognitive psychologist', lifetime: '1934–', subjects: ['general', 'experiment'], anchor: '部分报告法与图像记忆', anchorEn: 'the partial-report method and iconic memory', knowledgePointId: 'memory.sperling.partial-report', relationType: 'experimented', sourceId: 'roster-apa-dictionary', confusionWith: ['查尔斯·斯皮尔曼'] },
  { id: 'john-stroop', zh: '约翰·斯特鲁普', en: 'John Ridley Stroop', aliases: ['斯特鲁普'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1897–1973', subjects: ['general', 'experiment'], anchor: '斯特鲁普效应与认知控制', anchorEn: 'the Stroop effect and cognitive control', knowledgePointId: 'attention.stroop.interference', relationType: 'experimented', sourceId: 'roster-york-classics' },
  { id: 'roger-shepard', zh: '罗杰·谢泼德', en: 'Roger N. Shepard', aliases: ['谢泼德'], identity: '美国认知科学家', identityEn: 'American cognitive scientist', lifetime: '1929–2022', subjects: ['general', 'experiment'], anchor: '心理旋转', anchorEn: 'mental rotation', knowledgePointId: 'thinking.shepard.mental-rotation', relationType: 'experimented', sourceId: 'roster-apa-dictionary' },
  { id: 'elizabeth-loftus', zh: '伊丽莎白·洛夫特斯', en: 'Elizabeth Loftus', aliases: ['洛夫特斯'], identity: '美国认知心理学家、记忆研究者', identityEn: 'American cognitive psychologist and memory researcher', lifetime: '1944–', subjects: ['general', 'experiment'], anchor: '误导信息效应与错误记忆', anchorEn: 'the misinformation effect and false memory', knowledgePointId: 'memory.loftus.misinformation', relationType: 'experimented', sourceId: 'roster-openstax-psychology' },
  { id: 'walter-cannon', zh: '沃尔特·坎农', en: 'Walter B. Cannon', aliases: ['坎农'], identity: '美国生理学家、医生', identityEn: 'American physiologist and physician', lifetime: '1871–1945', subjects: ['general'], anchor: '坎农—巴德情绪理论', anchorEn: 'the Cannon–Bard theory of emotion', knowledgePointId: 'emotion.cannon.cannon-bard', relationType: 'developed', sourceId: 'roster-openstax-psychology' },
  { id: 'philip-bard', zh: '菲利普·巴德', en: 'Philip Bard', aliases: ['巴德'], identity: '美国生理学家', identityEn: 'American physiologist', lifetime: '1898–1977', subjects: ['general'], anchor: '坎农—巴德情绪理论', anchorEn: 'the Cannon–Bard theory of emotion', knowledgePointId: 'emotion.bard.cannon-bard', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'stanley-schachter', zh: '斯坦利·沙赫特', en: 'Stanley Schachter', aliases: ['沙赫特'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1922–1997', subjects: ['general', 'social', 'experiment'], anchor: '情绪二因素理论', anchorEn: 'the two-factor theory of emotion', knowledgePointId: 'emotion.schachter.two-factor', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'jerome-singer', zh: '杰罗姆·辛格', en: 'Jerome E. Singer', aliases: ['辛格'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1934–2010', subjects: ['general', 'social', 'experiment'], anchor: '情绪二因素实验', anchorEn: 'the two-factor emotion experiment', knowledgePointId: 'emotion.singer.two-factor', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'richard-lazarus', zh: '理查德·拉扎勒斯', en: 'Richard Lazarus', aliases: ['拉扎勒斯'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1922–2002', subjects: ['general'], anchor: '情绪的认知评价理论', anchorEn: 'cognitive appraisal theory of emotion', knowledgePointId: 'emotion.lazarus.appraisal', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'paul-ekman', zh: '保罗·埃克曼', en: 'Paul Ekman', aliases: ['埃克曼'], identity: '美国心理学家、情绪研究者', identityEn: 'American psychologist and emotion researcher', lifetime: '1934–', subjects: ['general', 'social'], anchor: '基本情绪与面部表情', anchorEn: 'basic emotions and facial expressions', knowledgePointId: 'emotion.ekman.basic-emotions', relationType: 'experimented', sourceId: 'roster-openstax-psychology' },
  { id: 'gordon-allport', zh: '戈登·奥尔波特', en: 'Gordon Allport', aliases: ['奥尔波特'], identity: '美国人格与社会心理学家', identityEn: 'American personality and social psychologist', lifetime: '1897–1967', subjects: ['general', 'social'], anchor: '人格特质理论', anchorEn: 'trait theory of personality', knowledgePointId: 'personality.allport.traits', relationType: 'developed', sourceId: 'roster-openstax-psychology' },
  { id: 'hans-eysenck', zh: '汉斯·艾森克', en: 'Hans Eysenck', aliases: ['艾森克'], identity: '德裔英国心理学家', identityEn: 'German-British psychologist', lifetime: '1916–1997', subjects: ['general', 'measurement'], anchor: '人格的三因素模型', anchorEn: 'the three-factor model of personality', knowledgePointId: 'personality.eysenck.p-e-n', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'paul-costa', zh: '保罗·科斯塔', en: 'Paul T. Costa Jr.', aliases: ['科斯塔'], identity: '美国人格心理学家', identityEn: 'American personality psychologist', lifetime: '1942–', subjects: ['general', 'measurement'], anchor: '人格五因素模型与 NEO 量表', anchorEn: 'the Five-Factor Model and NEO inventories', knowledgePointId: 'personality.costa.big-five', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'robert-mccrae', zh: '罗伯特·麦克雷', en: 'Robert R. McCrae', aliases: ['麦克雷'], identity: '美国人格心理学家', identityEn: 'American personality psychologist', lifetime: '1949–', subjects: ['general', 'measurement'], anchor: '人格五因素模型与 NEO 量表', anchorEn: 'the Five-Factor Model and NEO inventories', knowledgePointId: 'personality.mccrae.big-five', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'howard-gardner', zh: '霍华德·加德纳', en: 'Howard Gardner', aliases: ['加德纳'], identity: '美国发展心理学家', identityEn: 'American developmental psychologist', lifetime: '1943–', subjects: ['general', 'education'], anchor: '多元智力理论', anchorEn: 'the theory of multiple intelligences', knowledgePointId: 'intelligence.gardner.multiple', relationType: 'proposed', sourceId: 'roster-openstax-psychology' },
  { id: 'joy-guilford', zh: '乔伊·吉尔福特', en: 'J. P. Guilford', aliases: ['吉尔福特'], identity: '美国心理学家、心理测量学家', identityEn: 'American psychologist and psychometrician', lifetime: '1897–1987', subjects: ['general', 'measurement'], anchor: '智力结构模型与发散思维', anchorEn: 'the structure-of-intellect model and divergent thinking', knowledgePointId: 'intelligence.guilford.structure', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'robert-sternberg', zh: '罗伯特·斯腾伯格', en: 'Robert J. Sternberg', aliases: ['斯腾伯格'], identity: '美国认知心理学家', identityEn: 'American cognitive psychologist', lifetime: '1949–', subjects: ['general', 'education'], anchor: '智力三元理论', anchorEn: 'the triarchic theory of intelligence', knowledgePointId: 'intelligence.sternberg.triarchic', relationType: 'proposed', sourceId: 'roster-openstax-psychology' },
  { id: 'noam-chomsky', zh: '诺姆·乔姆斯基', en: 'Noam Chomsky', aliases: ['乔姆斯基'], identity: '美国语言学家、认知科学家', identityEn: 'American linguist and cognitive scientist', lifetime: '1928–', subjects: ['general', 'development'], anchor: '生成语法与语言获得机制', anchorEn: 'generative grammar and language acquisition mechanisms', knowledgePointId: 'language.chomsky.generative-grammar', relationType: 'proposed', sourceId: 'roster-openstax-psychology' },

  // Social psychology
  { id: 'kurt-lewin', zh: '库尔特·勒温', en: 'Kurt Lewin', aliases: ['勒温'], identity: '德裔美国心理学家、社会心理学先驱', identityEn: 'German-American psychologist and social psychology pioneer', lifetime: '1890–1947', subjects: ['social', 'experiment'], anchor: '场论与群体动力学', anchorEn: 'field theory and group dynamics', knowledgePointId: 'social.lewin.field-group', relationType: 'developed', sourceId: 'roster-apa-social-lesson', tier: 'secondary' },
  { id: 'norman-triplett', zh: '诺曼·特里普利特', en: 'Norman Triplett', aliases: ['特里普利特'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1861–1934', subjects: ['social', 'experiment'], anchor: '社会促进的早期实验', anchorEn: 'the early social-facilitation experiment', knowledgePointId: 'social.triplett.facilitation', relationType: 'experimented', sourceId: 'roster-apa-social-lesson' },
  { id: 'muzafer-sherif', zh: '穆扎费尔·谢里夫', en: 'Muzafer Sherif', aliases: ['谢里夫'], identity: '土耳其裔美国社会心理学家', identityEn: 'Turkish-American social psychologist', lifetime: '1906–1988', subjects: ['social', 'experiment'], anchor: '规范形成与现实冲突理论', anchorEn: 'norm formation and realistic conflict theory', knowledgePointId: 'social.sherif.norm-conflict', relationType: 'experimented', sourceId: 'roster-apa-social-lesson', tier: 'secondary' },
  { id: 'solomon-asch', zh: '所罗门·阿希', en: 'Solomon Asch', aliases: ['阿希'], identity: '波兰裔美国社会心理学家', identityEn: 'Polish-American social psychologist', lifetime: '1907–1996', subjects: ['social', 'experiment'], anchor: '从众线段判断实验', anchorEn: 'the line-judgment conformity experiments', knowledgePointId: 'social.asch.conformity', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'stanley-milgram', zh: '斯坦利·米尔格拉姆', en: 'Stanley Milgram', aliases: ['米尔格拉姆'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1933–1984', subjects: ['social', 'experiment'], anchor: '服从权威实验', anchorEn: 'obedience-to-authority experiments', knowledgePointId: 'social.milgram.obedience', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'philip-zimbardo', zh: '菲利普·津巴多', en: 'Philip Zimbardo', aliases: ['津巴多'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1933–2024', subjects: ['social', 'experiment'], anchor: '斯坦福监狱研究及其伦理争议', anchorEn: 'the Stanford prison study and its ethical controversies', knowledgePointId: 'social.zimbardo.prison-ethics', relationType: 'experimented', sourceId: 'roster-apa-social-lesson' },
  { id: 'fritz-heider', zh: '弗里茨·海德', en: 'Fritz Heider', aliases: ['海德'], identity: '奥地利裔美国心理学家', identityEn: 'Austrian-American psychologist', lifetime: '1896–1988', subjects: ['social'], anchor: '朴素心理学与归因理论', anchorEn: 'naive psychology and attribution theory', knowledgePointId: 'social.heider.attribution', relationType: 'proposed', sourceId: 'roster-apa-dictionary', tier: 'secondary' },
  { id: 'harold-kelley', zh: '哈罗德·凯利', en: 'Harold H. Kelley', aliases: ['哈罗德·凯利'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1921–2003', subjects: ['social'], anchor: '归因的共变模型', anchorEn: 'the covariation model of attribution', knowledgePointId: 'social.harold-kelley.covariation', relationType: 'proposed', sourceId: 'roster-apa-dictionary', confusionWith: ['临床心理学家乔治·凯利'] },
  { id: 'edward-jones', zh: '爱德华·琼斯', en: 'Edward E. Jones', aliases: ['E. E. 琼斯'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1926–1993', subjects: ['social'], anchor: '对应推断理论', anchorEn: 'correspondent inference theory', knowledgePointId: 'social.jones.correspondent-inference', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'keith-davis', zh: '基思·戴维斯', en: 'Keith E. Davis', aliases: ['K. E. 戴维斯'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1936–', subjects: ['social'], anchor: '对应推断理论', anchorEn: 'correspondent inference theory', knowledgePointId: 'social.davis.correspondent-inference', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'lee-ross', zh: '李·罗斯', en: 'Lee Ross', aliases: ['罗斯', 'Lee D. Ross'], identity: '加拿大裔美国社会心理学家', identityEn: 'Canadian-American social psychologist', lifetime: '1942–2021', subjects: ['social', 'experiment'], anchor: '基本归因错误与朴素现实主义', anchorEn: 'the fundamental attribution error and naive realism', knowledgePointId: 'social.ross.fundamental-attribution-error', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'daryl-bem', zh: '达里尔·贝姆', en: 'Daryl Bem', aliases: ['贝姆'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1938–', subjects: ['social'], anchor: '自我知觉理论', anchorEn: 'self-perception theory', knowledgePointId: 'social.bem.self-perception', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'carl-hovland', zh: '卡尔·霍夫兰', en: 'Carl Hovland', aliases: ['霍夫兰'], identity: '美国心理学家、态度与说服研究者', identityEn: 'American psychologist and persuasion researcher', lifetime: '1912–1961', subjects: ['social', 'experiment'], anchor: '耶鲁态度改变研究', anchorEn: 'the Yale studies of attitude change', knowledgePointId: 'social.hovland.persuasion', relationType: 'experimented', sourceId: 'roster-apa-social-lesson' },
  { id: 'richard-petty', zh: '理查德·佩蒂', en: 'Richard E. Petty', aliases: ['佩蒂'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1951–', subjects: ['social'], anchor: '精细加工可能性模型', anchorEn: 'the elaboration likelihood model', knowledgePointId: 'social.petty.elm', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'john-cacioppo', zh: '约翰·卡乔波', en: 'John T. Cacioppo', aliases: ['卡乔波'], identity: '美国心理学家、社会神经科学家', identityEn: 'American psychologist and social neuroscientist', lifetime: '1951–2018', subjects: ['social'], anchor: '精细加工可能性模型', anchorEn: 'the elaboration likelihood model', knowledgePointId: 'social.cacioppo.elm', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'icek-ajzen', zh: '艾塞克·阿津', en: 'Icek Ajzen', aliases: ['阿津'], identity: '社会心理学家', identityEn: 'Social psychologist', lifetime: '1942–', subjects: ['social'], anchor: '计划行为理论', anchorEn: 'the theory of planned behavior', knowledgePointId: 'social.ajzen.planned-behavior', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'martin-fishbein', zh: '马丁·菲什拜因', en: 'Martin Fishbein', aliases: ['菲什拜因'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1936–2009', subjects: ['social'], anchor: '合理行动理论', anchorEn: 'the theory of reasoned action', knowledgePointId: 'social.fishbein.reasoned-action', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'henri-tajfel', zh: '亨利·塔杰菲尔', en: 'Henri Tajfel', aliases: ['塔杰菲尔'], identity: '波兰裔英国社会心理学家', identityEn: 'Polish-British social psychologist', lifetime: '1919–1982', subjects: ['social', 'experiment'], anchor: '最小群体范式与社会认同理论', anchorEn: 'the minimal-group paradigm and social identity theory', knowledgePointId: 'social.tajfel.identity', relationType: 'developed', sourceId: 'roster-apa-social-lesson', tier: 'secondary' },
  { id: 'john-turner', zh: '约翰·特纳', en: 'John C. Turner', aliases: ['J. C. 特纳'], identity: '英国社会心理学家', identityEn: 'British social psychologist', lifetime: '1947–2011', subjects: ['social'], anchor: '社会认同与自我分类理论', anchorEn: 'social identity and self-categorization theory', knowledgePointId: 'social.turner.self-categorization', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'john-darley', zh: '约翰·达利', en: 'John M. Darley', aliases: ['达利'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1938–2018', subjects: ['social', 'experiment'], anchor: '旁观者效应与助人决策模型', anchorEn: 'the bystander effect and helping-decision model', knowledgePointId: 'social.darley.bystander', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'bibb-latane', zh: '比布·拉塔内', en: 'Bibb Latané', aliases: ['拉塔内'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1937–', subjects: ['social', 'experiment'], anchor: '旁观者效应与责任分散', anchorEn: 'the bystander effect and diffusion of responsibility', knowledgePointId: 'social.latane.bystander', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'irving-janis', zh: '欧文·贾尼斯', en: 'Irving Janis', aliases: ['贾尼斯'], identity: '美国研究心理学家', identityEn: 'American research psychologist', lifetime: '1918–1990', subjects: ['social'], anchor: '群体思维', anchorEn: 'groupthink', knowledgePointId: 'social.janis.groupthink', relationType: 'proposed', sourceId: 'roster-apa-dictionary' },
  { id: 'robert-zajonc', zh: '罗伯特·扎荣茨', en: 'Robert Zajonc', aliases: ['扎荣茨'], identity: '波兰裔美国社会心理学家', identityEn: 'Polish-American social psychologist', lifetime: '1923–2008', subjects: ['social', 'experiment'], anchor: '单纯曝光效应与社会促进的唤醒解释', anchorEn: 'the mere-exposure effect and arousal account of social facilitation', knowledgePointId: 'social.zajonc.exposure-facilitation', relationType: 'experimented', sourceId: 'roster-apa-dictionary' },
  { id: 'serge-moscovici', zh: '塞尔日·莫斯科维奇', en: 'Serge Moscovici', aliases: ['莫斯科维奇'], identity: '罗马尼亚裔法国社会心理学家', identityEn: 'Romanian-French social psychologist', lifetime: '1925–2014', subjects: ['social', 'experiment'], anchor: '少数派影响', anchorEn: 'minority influence', knowledgePointId: 'social.moscovici.minority-influence', relationType: 'experimented', sourceId: 'roster-apa-dictionary' },
  { id: 'daniel-batson', zh: '丹尼尔·巴特森', en: 'C. Daniel Batson', aliases: ['巴特森'], identity: '美国社会心理学家', identityEn: 'American social psychologist', lifetime: '1943–', subjects: ['social', 'experiment'], anchor: '共情—利他假说', anchorEn: 'the empathy–altruism hypothesis', knowledgePointId: 'social.batson.empathy-altruism', relationType: 'experimented', sourceId: 'roster-apa-dictionary' },

  // Development and education
  { id: 'lev-vygotsky', zh: '列夫·维果茨基', en: 'Lev Vygotsky', aliases: ['维果茨基'], identity: '苏联心理学家', identityEn: 'Soviet psychologist', lifetime: '1896–1934', subjects: ['development', 'education'], anchor: '社会文化理论与最近发展区', anchorEn: 'sociocultural theory and the zone of proximal development', knowledgePointId: 'development.vygotsky.zpd', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'erik-erikson', zh: '埃里克·埃里克森', en: 'Erik Erikson', aliases: ['埃里克森'], identity: '德裔美国发展心理学家、精神分析学家', identityEn: 'German-American developmental psychologist and psychoanalyst', lifetime: '1902–1994', subjects: ['development', 'general'], anchor: '心理社会发展八阶段', anchorEn: 'the eight stages of psychosocial development', knowledgePointId: 'development.erikson.psychosocial-stages', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'arnold-gesell', zh: '阿诺德·格塞尔', en: 'Arnold Gesell', aliases: ['格塞尔'], identity: '美国心理学家、儿科医生', identityEn: 'American psychologist and pediatrician', lifetime: '1880–1961', subjects: ['development'], anchor: '成熟势力说与双生子爬梯研究', anchorEn: 'maturational theory and the twin stair-climbing study', knowledgePointId: 'development.gesell.maturation', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'urie-bronfenbrenner', zh: '尤里·布朗芬布伦纳', en: 'Urie Bronfenbrenner', aliases: ['布朗芬布伦纳'], identity: '俄裔美国发展心理学家', identityEn: 'Russian-American developmental psychologist', lifetime: '1917–2005', subjects: ['development', 'education'], anchor: '生态系统理论', anchorEn: 'ecological systems theory', knowledgePointId: 'development.bronfenbrenner.ecological-systems', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'john-bowlby', zh: '约翰·鲍尔比', en: 'John Bowlby', aliases: ['鲍尔比'], identity: '英国精神科医生、精神分析学家', identityEn: 'British psychiatrist and psychoanalyst', lifetime: '1907–1990', subjects: ['development'], anchor: '依恋理论', anchorEn: 'attachment theory', knowledgePointId: 'development.bowlby.attachment', relationType: 'proposed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'mary-ainsworth', zh: '玛丽·安斯沃思', en: 'Mary Ainsworth', aliases: ['安斯沃思'], identity: '美籍加拿大发展心理学家', identityEn: 'American-Canadian developmental psychologist', lifetime: '1913–1999', subjects: ['development', 'experiment'], anchor: '陌生情境与依恋类型', anchorEn: 'the Strange Situation and attachment classifications', knowledgePointId: 'development.ainsworth.strange-situation', relationType: 'experimented', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'harry-harlow', zh: '哈里·哈洛', en: 'Harry Harlow', aliases: ['哈洛'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1905–1981', subjects: ['development', 'experiment'], anchor: '恒河猴依恋与接触安慰研究', anchorEn: 'rhesus-monkey attachment and contact-comfort studies', knowledgePointId: 'development.harlow.contact-comfort', relationType: 'experimented', sourceId: 'roster-openstax-psychology' },
  { id: 'lawrence-kohlberg', zh: '劳伦斯·科尔伯格', en: 'Lawrence Kohlberg', aliases: ['科尔伯格'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1927–1987', subjects: ['development', 'education'], anchor: '道德推理三水平六阶段', anchorEn: 'the three-level, six-stage theory of moral reasoning', knowledgePointId: 'development.kohlberg.moral-stages', relationType: 'developed', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'jerome-bruner', zh: '杰罗姆·布鲁纳', en: 'Jerome Bruner', aliases: ['布鲁纳'], identity: '美国心理学家、教育理论家', identityEn: 'American psychologist and educational theorist', lifetime: '1915–2016', subjects: ['education', 'development'], anchor: '发现学习、表征系统与螺旋课程', anchorEn: 'discovery learning, representational systems, and spiral curriculum', knowledgePointId: 'education.bruner.discovery-spiral', relationType: 'developed', sourceId: 'roster-apa-dictionary', tier: 'secondary' },
  { id: 'david-ausubel', zh: '戴维·奥苏贝尔', en: 'David Ausubel', aliases: ['奥苏贝尔'], identity: '美国心理学家、教育理论家', identityEn: 'American psychologist and educational theorist', lifetime: '1918–2008', subjects: ['education'], anchor: '有意义接受学习与先行组织者', anchorEn: 'meaningful reception learning and advance organizers', knowledgePointId: 'education.ausubel.meaningful-learning', relationType: 'proposed', sourceId: 'roster-apa-dictionary', tier: 'secondary' },
  { id: 'robert-gagne', zh: '罗伯特·加涅', en: 'Robert M. Gagné', aliases: ['加涅'], identity: '美国教育心理学家', identityEn: 'American educational psychologist', lifetime: '1916–2002', subjects: ['education'], anchor: '学习结果分类与教学事件', anchorEn: 'categories of learning outcomes and events of instruction', knowledgePointId: 'education.gagne.learning-outcomes', relationType: 'developed', sourceId: 'roster-apa-dictionary' },
  { id: 'bernard-weiner', zh: '伯纳德·韦纳', en: 'Bernard Weiner', aliases: ['韦纳'], identity: '美国社会与教育心理学家', identityEn: 'American social and educational psychologist', lifetime: '1935–', subjects: ['education', 'social'], anchor: '成败归因的三维模型', anchorEn: 'the three-dimensional model of achievement attribution', knowledgePointId: 'education.weiner.attribution', relationType: 'developed', sourceId: 'roster-apa-dictionary', confusionWith: ['数学家诺伯特·维纳'] },

  // Psychometrics, statistics and assessment — identities are kept explicit.
  { id: 'francis-galton', zh: '弗朗西斯·高尔顿', en: 'Francis Galton', aliases: ['高尔顿'], identity: '英国博学家、统计学先驱', identityEn: 'British polymath and statistical pioneer', lifetime: '1822–1911', subjects: ['statistics', 'measurement', 'general'], anchor: '个体差异、相关与回归思想', anchorEn: 'individual differences, correlation, and regression', knowledgePointId: 'statistics.galton.correlation-regression', relationType: 'developed', sourceId: 'roster-york-classics', tier: 'secondary' },
  { id: 'james-mckeen-cattell', zh: '詹姆斯·麦基恩·卡特尔', en: 'James McKeen Cattell', aliases: ['J. M. 卡特尔'], identity: '美国心理学家、心理测验先驱', identityEn: 'American psychologist and mental-testing pioneer', lifetime: '1860–1944', subjects: ['measurement', 'experiment'], anchor: '“心理测验”概念与感觉运动测验', anchorEn: 'the term mental test and sensorimotor testing', knowledgePointId: 'measurement.jm-cattell.mental-test', relationType: 'instrument_created', sourceId: 'roster-york-classics', confusionWith: ['雷蒙德·卡特尔'] },
  { id: 'louis-thurstone', zh: '路易斯·瑟斯顿', en: 'L. L. Thurstone', aliases: ['瑟斯顿'], identity: '美国心理测量学家', identityEn: 'American psychometrician', lifetime: '1887–1955', subjects: ['statistics', 'measurement', 'general'], anchor: '群因素论、比较判断法则与态度量表', anchorEn: 'primary mental abilities, comparative judgment, and attitude scaling', knowledgePointId: 'measurement.thurstone.factor-scaling', relationType: 'developed', sourceId: 'roster-ets-research', tier: 'secondary' },
  { id: 'raymond-cattell', zh: '雷蒙德·卡特尔', en: 'Raymond B. Cattell', aliases: ['R. B. 卡特尔', '雷蒙德·卡特尔'], identity: '英裔美国心理学家、心理测量研究者', identityEn: 'British-American psychologist and psychometric researcher', lifetime: '1905–1998', subjects: ['general', 'statistics', 'measurement'], anchor: '流体—晶体智力与 16PF', anchorEn: 'fluid–crystallized intelligence and the 16PF', knowledgePointId: 'intelligence.rb-cattell.fluid-crystallized', relationType: 'developed', sourceId: 'roster-apa-dictionary', tier: 'secondary', confusionWith: ['詹姆斯·麦基恩·卡特尔'] },
  { id: 'alfred-binet', zh: '阿尔弗雷德·比奈', en: 'Alfred Binet', aliases: ['比奈'], identity: '法国心理学家', identityEn: 'French psychologist', lifetime: '1857–1911', subjects: ['measurement', 'development'], anchor: '比奈—西蒙智力量表与心理年龄', anchorEn: 'the Binet–Simon scale and mental age', knowledgePointId: 'measurement.binet.intelligence-scale', relationType: 'instrument_created', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'theodore-simon', zh: '西奥多·西蒙', en: 'Théodore Simon', aliases: ['西蒙'], identity: '法国医生、心理测验研究者', identityEn: 'French physician and mental-testing researcher', lifetime: '1873–1961', subjects: ['measurement', 'development'], anchor: '比奈—西蒙智力量表', anchorEn: 'the Binet–Simon intelligence scale', knowledgePointId: 'measurement.simon.intelligence-scale', relationType: 'co_tested', sourceId: 'roster-openstax-psychology' },
  { id: 'lewis-terman', zh: '刘易斯·推孟', en: 'Lewis Terman', aliases: ['推孟', '特曼'], identity: '美国心理学家、心理测量学家', identityEn: 'American psychologist and psychometrician', lifetime: '1877–1956', subjects: ['measurement', 'development'], anchor: '斯坦福—比奈量表', anchorEn: 'the Stanford–Binet intelligence scale', knowledgePointId: 'measurement.terman.stanford-binet', relationType: 'instrument_created', sourceId: 'roster-openstax-psychology' },
  { id: 'david-wechsler', zh: '戴维·韦克斯勒', en: 'David Wechsler', aliases: ['韦克斯勒'], identity: '罗马尼亚裔美国心理学家、心理测量学家', identityEn: 'Romanian-American psychologist and psychometrician', lifetime: '1896–1981', subjects: ['measurement', 'general'], anchor: '韦氏智力量表与离差智商', anchorEn: 'Wechsler intelligence scales and deviation IQ', knowledgePointId: 'measurement.wechsler.scales-deviation-iq', relationType: 'instrument_created', sourceId: 'roster-openstax-psychology', tier: 'secondary' },
  { id: 'lee-cronbach', zh: '李·克隆巴赫', en: 'Lee J. Cronbach', aliases: ['克隆巴赫'], identity: '美国教育心理学家、心理测量学家', identityEn: 'American educational psychologist and psychometrician', lifetime: '1916–2001', subjects: ['statistics', 'measurement'], anchor: '克隆巴赫 α 系数与效度观', anchorEn: "Cronbach's alpha and validity theory", knowledgePointId: 'measurement.cronbach.alpha', relationType: 'statistical_method_created', sourceId: 'roster-ets-research', tier: 'secondary' },
  { id: 'karl-pearson', zh: '卡尔·皮尔逊', en: 'Karl Pearson', aliases: ['皮尔逊', 'K. Pearson'], identity: '英国数学家、生物统计学家', identityEn: 'British mathematician and biostatistician', lifetime: '1857–1936', subjects: ['statistics'], anchor: '积差相关与卡方检验', anchorEn: 'product-moment correlation and the chi-square test', knowledgePointId: 'statistics.pearson.correlation-chi-square', relationType: 'statistical_method_created', sourceId: 'roster-nist-statistics', tier: 'secondary' },
  { id: 'ronald-fisher', zh: '罗纳德·费希尔', en: 'Ronald A. Fisher', aliases: ['费希尔', 'R. A. Fisher'], identity: '英国统计学家、遗传学家', identityEn: 'British statistician and geneticist', lifetime: '1890–1962', subjects: ['statistics', 'experiment'], anchor: '方差分析、显著性检验与随机化设计', anchorEn: 'analysis of variance, significance testing, and randomized design', knowledgePointId: 'statistics.fisher.anova-randomization', relationType: 'statistical_method_created', sourceId: 'roster-nist-statistics', tier: 'secondary' },
  { id: 'william-gosset', zh: '威廉·戈塞特', en: 'William Sealy Gosset', aliases: ['戈塞特', 'Student'], identity: '英国统计学家、酿酒化学家', identityEn: 'British statistician and brewing chemist', lifetime: '1876–1937', subjects: ['statistics'], anchor: 'Student t 分布与 t 检验', anchorEn: "Student's t distribution and t tests", knowledgePointId: 'statistics.gosset.t-test', relationType: 'statistical_method_created', sourceId: 'roster-nist-statistics', confusionWith: ['Student 是笔名，不是另一位统计学家'] },
  { id: 'jerzy-neyman', zh: '耶日·奈曼', en: 'Jerzy Neyman', aliases: ['奈曼'], identity: '波兰裔美国数学家、统计学家', identityEn: 'Polish-American mathematician and statistician', lifetime: '1894–1981', subjects: ['statistics', 'experiment'], anchor: '置信区间与奈曼—皮尔逊假设检验框架', anchorEn: 'confidence intervals and the Neyman–Pearson testing framework', knowledgePointId: 'statistics.neyman.confidence-testing', relationType: 'statistical_method_created', sourceId: 'roster-nist-statistics' },
  { id: 'george-kuder', zh: '乔治·库德', en: 'G. Frederic Kuder', aliases: ['库德'], identity: '美国心理学家、心理测量学家', identityEn: 'American psychologist and psychometrician', lifetime: '1903–2000', subjects: ['measurement', 'statistics'], anchor: '库德—理查森信度公式', anchorEn: 'the Kuder–Richardson reliability formulas', knowledgePointId: 'measurement.kuder.kr-reliability', relationType: 'co_tested', sourceId: 'roster-ets-research' },
  { id: 'marion-richardson', zh: '马里恩·理查森', en: 'Marion W. Richardson', aliases: ['理查森'], identity: '美国教育心理学与测量研究者', identityEn: 'American educational psychology and measurement researcher', lifetime: '1900–1984', subjects: ['measurement', 'statistics'], anchor: '库德—理查森信度公式', anchorEn: 'the Kuder–Richardson reliability formulas', knowledgePointId: 'measurement.richardson.kr-reliability', relationType: 'co_tested', sourceId: 'roster-ets-research' },
  { id: 'georg-rasch', zh: '格奥尔格·拉施', en: 'Georg Rasch', aliases: ['拉施', 'Rasch'], identity: '丹麦数学家、统计学家', identityEn: 'Danish mathematician and statistician', lifetime: '1901–1980', subjects: ['measurement', 'statistics'], anchor: '拉施模型', anchorEn: 'the Rasch measurement model', knowledgePointId: 'measurement.rasch.model', relationType: 'statistical_method_created', sourceId: 'roster-ets-research' },
  { id: 'frederic-lord', zh: '弗雷德里克·洛德', en: 'Frederic M. Lord', aliases: ['洛德'], identity: '美国心理测量学家', identityEn: 'American psychometrician', lifetime: '1912–2000', subjects: ['measurement', 'statistics'], anchor: '项目反应理论', anchorEn: 'item response theory', knowledgePointId: 'measurement.lord.irt', relationType: 'developed', sourceId: 'roster-ets-research' },
  { id: 'john-raven', zh: '约翰·瑞文', en: 'John C. Raven', aliases: ['瑞文'], identity: '英国心理学家、心理测量学家', identityEn: 'British psychologist and psychometrician', lifetime: '1902–1970', subjects: ['measurement', 'general'], anchor: '瑞文渐进矩阵', anchorEn: "Raven's Progressive Matrices", knowledgePointId: 'measurement.raven.matrices', relationType: 'instrument_created', sourceId: 'roster-apa-dictionary' },
  { id: 'hermann-rorschach', zh: '赫尔曼·罗夏', en: 'Hermann Rorschach', aliases: ['罗夏'], identity: '瑞士精神科医生、精神分析学家', identityEn: 'Swiss psychiatrist and psychoanalyst', lifetime: '1884–1922', subjects: ['measurement', 'general'], anchor: '罗夏墨迹测验', anchorEn: 'the Rorschach inkblot test', knowledgePointId: 'measurement.rorschach.inkblot', relationType: 'instrument_created', sourceId: 'roster-apa-dictionary' },
  { id: 'henry-murray', zh: '亨利·默里', en: 'Henry A. Murray', aliases: ['默里'], identity: '美国心理学家', identityEn: 'American psychologist', lifetime: '1893–1988', subjects: ['measurement', 'general'], anchor: '主题统觉测验与人格需要理论', anchorEn: 'the Thematic Apperception Test and personology', knowledgePointId: 'measurement.murray.tat', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'starke-hathaway', zh: '斯塔克·哈撒韦', en: 'Starke R. Hathaway', aliases: ['哈撒韦'], identity: '美国临床心理学家、心理测量研究者', identityEn: 'American clinical psychologist and psychometric researcher', lifetime: '1903–1984', subjects: ['measurement'], anchor: '明尼苏达多相人格调查表（MMPI）', anchorEn: 'the Minnesota Multiphasic Personality Inventory', knowledgePointId: 'measurement.hathaway.mmpi', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'charney-mckinley', zh: '查恩利·麦金利', en: 'J. Charnley McKinley', aliases: ['麦金利'], identity: '美国神经科医生', identityEn: 'American neurologist', lifetime: '1891–1950', subjects: ['measurement'], anchor: '明尼苏达多相人格调查表（MMPI）', anchorEn: 'the Minnesota Multiphasic Personality Inventory', knowledgePointId: 'measurement.mckinley.mmpi', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
  { id: 'rensis-likert', zh: '伦西斯·李克特', en: 'Rensis Likert', aliases: ['李克特'], identity: '美国社会心理学家、组织研究者', identityEn: 'American social psychologist and organizational researcher', lifetime: '1903–1981', subjects: ['measurement', 'social'], anchor: '李克特式量表', anchorEn: 'Likert-type scaling', knowledgePointId: 'measurement.likert.scale', relationType: 'instrument_created', sourceId: 'roster-apa-dictionary' },
  { id: 'stanley-stevens', zh: '斯坦利·史蒂文斯', en: 'S. S. Stevens', aliases: ['史蒂文斯'], identity: '美国实验心理学家、心理物理学家', identityEn: 'American experimental psychologist and psychophysicist', lifetime: '1906–1973', subjects: ['measurement', 'experiment', 'general'], anchor: '测量尺度分类与幂定律', anchorEn: 'levels of measurement and the psychophysical power law', knowledgePointId: 'measurement.stevens.scales-power-law', relationType: 'developed', sourceId: 'roster-apa-dictionary', tier: 'secondary' },
  { id: 'john-swets', zh: '约翰·斯韦茨', en: 'John A. Swets', aliases: ['斯韦茨'], identity: '美国心理学家、信号检测研究者', identityEn: 'American psychologist and signal-detection researcher', lifetime: '1928–2016', subjects: ['experiment', 'statistics'], anchor: '信号检测论与 ROC 分析', anchorEn: 'signal detection theory and ROC analysis', knowledgePointId: 'experiment.swets.signal-detection', relationType: 'co_tested', sourceId: 'roster-apa-dictionary' },
];

const subjectMotif: Record<SubjectKey, string> = {
  general: '认知棱镜',
  social: '群体罗盘',
  development: '成长年轮',
  education: '学习书页',
  experiment: '实验量表',
  statistics: '数据星图',
  measurement: '测量刻度',
};

const subjectAccent: Record<SubjectKey, string> = {
  general: '#a78bfa',
  social: '#fb7185',
  development: '#34d399',
  education: '#fbbf24',
  experiment: '#f59e0b',
  statistics: '#38bdf8',
  measurement: '#60a5fa',
};

export const rosterPeople: RosterPersonProfile[] = seeds.map((seed) => ({
  id: seed.id,
  canonicalNameZh: seed.zh,
  canonicalNameEn: seed.en,
  aliases: seed.aliases ?? [],
  identity: seed.identity,
  identityEn: seed.identityEn,
  lifetime: seed.lifetime,
  tier: seed.tier ?? 'archive',
  subjects: seed.subjects,
  epithet: `「${seed.anchor}」档案持有者`,
  epithetEn: `Archive keeper: ${seed.anchorEn}`,
  summary: `与 312 考纲中的“${seed.anchor}”直接相关；正式出题前仍须逐条复核具体命题措辞。`,
  summaryEn: `Directly tied to ${seed.anchorEn}; exact scored-item wording still requires relation-level review.`,
  examAnchor: seed.anchor,
  examAnchorEn: seed.anchorEn,
  motifs: [subjectMotif[seed.subjects[0]], seed.anchor],
  accent: subjectAccent[seed.subjects[0]],
  verified: true,
}));

export const rosterRelations: RosterKnowledgeRelation[] = seeds.map((seed) => ({
  id: `rel-roster-${seed.id}`,
  personId: seed.id,
  knowledgePointId: seed.knowledgePointId,
  subjects: seed.subjects,
  relationType: seed.relationType,
  examRole: seed.relationType === 'co_tested' ? 'co_tested' : 'primary',
  claim: `${seed.zh}与“${seed.anchor}”存在直接、可命题的学术关系。`,
  claimEn: `${seed.en} has a direct, testable scholarly relationship to ${seed.anchorEn}.`,
  sourceIds: [seed.sourceId],
  confusionWith: seed.confusionWith,
}));

export const rosterStats = {
  people: rosterPeople.length,
  relations: rosterRelations.length,
  verifiedPeople: rosterPeople.filter((person) => person.verified).length,
} as const;
