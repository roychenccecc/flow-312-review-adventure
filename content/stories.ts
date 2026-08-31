import type {
  ExperimentStory,
  SourceRef,
  TheoryLineage,
} from '@/src/types/content';

/**
 * Evidence-backed story material for Flow's theory-lineage archive and
 * interactive experiment-design episodes.  A chapter describes a documented
 * scholarly relationship, not an invented mentor/successor relationship.
 */
export const storySources: SourceRef[] = [
  {
    id: 'story-apa-fechner-law',
    title: 'APA 心理学词典：费希纳定律',
    titleEn: "APA Dictionary of Psychology: Fechner's law",
    url: 'https://dictionary.apa.org/fechners-law',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-ncbi-psychophysics-history',
    title: 'NCBI：感觉与奖赏简史——费希纳与韦伯',
    titleEn:
      'NCBI: A Brief History of Sensation and Reward — Fechner and Weber',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK92791/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-stevens-1957',
    title: '论心理物理定律',
    titleEn: 'On the psychophysical law',
    url: 'https://pubmed.ncbi.nlm.nih.gov/13441853/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-ncbi-psychophysical-methods',
    title: 'NCBI：视觉心理物理学',
    titleEn: 'NCBI: Psychophysics of Vision',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK11513/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-ebbinghaus-1885',
    title: '《记忆：实验心理学的贡献》第七章',
    titleEn: 'Memory: A Contribution to Experimental Psychology, Chapter VII',
    url: 'https://psychclassics.yorku.ca/Ebbinghaus/memory7.htm',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-bartlett-remembering',
    title: '《记忆》：连续再现实验',
    titleEn: 'Remembering: Experiments on Serial Reproduction',
    url: 'https://www.cambridge.org/core/books/abs/remembering/experiments-on-remembering-e-the-method-of-serial-reproduction-ii-picture-material/5400E0397B109083D1DF5978B257013B',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-baddeley-hitch-1974',
    title: '工作记忆',
    titleEn: 'Working Memory',
    url: 'https://doi.org/10.1016/S0079-7421(08)60452-1',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-piaget-archive',
    title: '日内瓦大学皮亚杰档案：守恒概念的发生',
    titleEn:
      'University of Geneva Piaget Archives: The Genesis of Conservation',
    url: 'https://www.unige.ch/piaget/piaget1936a04',
    kind: 'university',
    authority: 'A',
  },
  {
    id: 'story-vygotsky-piaget-review',
    title: '维果茨基《思维与言语》末章导读',
    titleEn:
      "A Reader's Guide to the Final Chapter of Vygotsky's Thinking and Speech",
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6084348/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-conservation-accidents',
    title: '守恒意外',
    titleEn: 'Conservation accidents',
    url: 'https://www.sciencedirect.com/science/article/pii/0010027774900031',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-tolman-1948',
    title: '大鼠与人的认知地图',
    titleEn: 'Cognitive maps in rats and men',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18870876/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-latent-learning-audit',
    title: '行为主义、潜伏学习与认知地图：教材叙述审计',
    titleEn:
      'Behaviorism, Latent Learning, and Cognitive Maps: Needed Revisions in Textbooks',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2223150/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-bandura-bobo-1961',
    title: '通过模仿攻击性榜样传递攻击行为',
    titleEn:
      'Transmission of aggression through imitation of aggressive models',
    url: 'https://pubmed.ncbi.nlm.nih.gov/13864605/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-weiner-attribution-2020',
    title: '动机的归因理论',
    titleEn: 'An attributional theory of motivation',
    url: 'https://doi.org/10.1016/j.cedpsych.2020.101861',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-spearman-1904',
    title: '“一般智力”：客观测定与测量',
    titleEn: 'General Intelligence, Objectively Determined and Measured',
    url: 'https://psychclassics.yorku.ca/Spearman/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-ncbi-intelligence-assessment',
    title: 'NCBI：智力评估的作用',
    titleEn: 'NCBI: The Role of Intellectual Assessment',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK207539/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-intelligence-review',
    title: '智力理论综述',
    titleEn: 'Intelligence: New Findings and Theoretical Developments',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3341646/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-james-emotion-1884',
    title: '什么是情绪？',
    titleEn: 'What Is an Emotion?',
    url: 'https://psychclassics.yorku.ca/James/emotion.htm',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-cannon-emotion-1927',
    title: '詹姆斯—兰格情绪理论：批判性检验与替代理论',
    titleEn:
      'The James–Lange Theory of Emotions: A Critical Examination and an Alternative Theory',
    url: 'https://doi.org/10.2307/1415404',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-schachter-singer-1962',
    title: '情绪状态的认知、社会与生理决定因素',
    titleEn:
      'Cognitive, social, and physiological determinants of emotional state',
    url: 'https://pubmed.ncbi.nlm.nih.gov/14497895/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-zajonc-1980',
    title: '感受与思考：偏好不必依赖推断',
    titleEn: 'Feeling and thinking: Preferences need no inferences',
    url: 'https://doi.org/10.1037/0003-066X.35.2.151',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-apa-attention',
    title: 'APA《注意》样章',
    titleEn: 'APA Attention Sample Pages',
    url: 'https://www.apa.org/pubs/books/attention-sample-pages.pdf',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-attention-review',
    title: '注意、不确定性与自由能：选择模型回顾',
    titleEn:
      'Attention, Uncertainty, and Free-Energy: A Review of Selection Models',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3001758/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-attention-load',
    title: '注意负荷与注意促进：数据与理论综述',
    titleEn:
      'Attentional Load and Attentional Boost: A Review of Data and Theory',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3657623/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-apa-intelligence-testing',
    title: 'APA：智力与成就测验',
    titleEn: 'APA: Intelligence and Achievement Testing',
    url: 'https://www.apa.org/topics/intelligence/testing',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-apa-stanford-binet',
    title: 'APA 心理学词典：斯坦福—比奈智力量表',
    titleEn: 'APA Dictionary: Stanford–Binet Intelligence Scale',
    url: 'https://dictionary.apa.org/stanford-binet-intelligence-scale',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-wechsler-history',
    title: '从比奈—西蒙到韦克斯勒—贝尔维尤',
    titleEn: 'From the Binet–Simon to the Wechsler–Bellevue',
    url: 'https://pubmed.ncbi.nlm.nih.gov/11992219/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-apa-intelligent-testing',
    title: 'APA：更聪明地理解智力测验',
    titleEn: 'APA: Intelligent Intelligence Testing',
    url: 'https://www.apa.org/monitor/feb03/intelligent.html',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-standardized-testing-ctt-irt',
    title: '标准化测验、经典测验理论与项目反应理论入门',
    titleEn: 'A Primer on Standardized Testing, CTT, IRT, and Equating',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6759012/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-ctt-irt-overview',
    title: '经典测验理论与项目反应理论概述',
    titleEn: 'Overview of Classical Test Theory and Item Response Theory',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4096146/',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-rescorla-1968',
    title: '恐惧条件作用中CS出现与缺席时的电击概率',
    titleEn:
      'Probability of shock in the presence and absence of CS in fear conditioning',
    url: 'https://pubmed.ncbi.nlm.nih.gov/5672628/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-conditioning-review',
    title: '巴甫洛夫条件作用：配对、相依性与预测',
    titleEn: 'Pavlovian Conditioning: Pairing, Contingency, and Prediction',
    url: 'https://cshperspectives.cshlp.org/content/early/2015/11/09/cshperspect.a021717.full.pdf',
    kind: 'reference',
    authority: 'A',
  },
  {
    id: 'story-rescorla-1988',
    title: '巴甫洛夫条件作用：并非如你所想',
    titleEn: "Pavlovian conditioning: It's not what you think it is",
    url: 'https://web.stanford.edu/class/psych227/RESCORLA%20%281988%29.pdf',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-festinger-carlsmith-1959',
    title: '强迫服从的认知后果',
    titleEn: 'Cognitive consequences of forced compliance',
    url: 'https://pubmed.ncbi.nlm.nih.gov/13640824/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-bem-1967',
    title: '自我知觉：对认知失调现象的替代解释',
    titleEn:
      'Self-perception: An alternative interpretation of cognitive dissonance phenomena',
    url: 'https://pubmed.ncbi.nlm.nih.gov/5342882/',
    kind: 'original_research',
    authority: 'A',
  },
  {
    id: 'story-apa-dissonance',
    title: 'APA《认知失调：重新审视心理学关键理论》样章',
    titleEn:
      'APA Cognitive Dissonance: Reexamining a Pivotal Theory in Psychology',
    url: 'https://www.apa.org/pubs/books/Cognitive-Dissonance-Intro-Sample.pdf',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-apa-ethics',
    title: 'APA 心理学家伦理原则与行为规范',
    titleEn: 'APA Ethical Principles of Psychologists and Code of Conduct',
    url: 'https://www.apa.org/ethics/code2002.html',
    kind: 'professional_association',
    authority: 'A',
  },
  {
    id: 'story-arrive-2',
    title: 'ARRIVE 2.0 动物研究报告指南',
    titleEn: 'ARRIVE Guidelines 2.0',
    url: 'https://arriveguidelines.org/arrive-guidelines',
    kind: 'professional_association',
    authority: 'A',
  },
];

export const theoryLineages: TheoryLineage[] = [
  {
    id: 'lineage-psychophysics',
    title: '感觉刻度之争',
    titleEn: 'The Contest over the Sensory Scale',
    theme: '从差别阈限到对数律与幂律：同一批感觉数据可以支持不同的测量假设。',
    themeEn:
      'From difference thresholds to logarithmic and power laws: the same sensory domain can support different measurement assumptions.',
    subjects: ['general', 'experiment', 'measurement'],
    chapters: [
      {
        id: 'lineage-psychophysics-weber',
        year: '1834–1846',
        personIds: ['ernst-weber'],
        relationKind: 'foundation',
        title: '韦伯的差别阈限',
        titleEn: "Weber's Difference Threshold",
        description:
          '韦伯发现，在一定刺激范围内，刚刚可觉的增量更接近基础刺激的固定比例，而不是固定绝对值。它描述的是刺激可辨性，尚不是完整的主观感觉量表。',
        descriptionEn:
          'Weber found that, over a limited range, a just-noticeable increment is closer to a constant fraction of the baseline than to a constant absolute amount. This concerns discriminability, not yet a full scale of subjective magnitude.',
        examCue: '韦伯定律：ΔI/I≈k；注意适用范围。',
        examCueEn: "Weber's law: ΔI/I≈k; mind its limited range.",
        sourceIds: ['story-ncbi-psychophysics-history'],
      },
      {
        id: 'lineage-psychophysics-fechner',
        year: '1860',
        personIds: ['gustav-fechner'],
        relationKind: 'extension',
        title: '费希纳把阈限累积成量表',
        titleEn: 'Fechner Accumulates Thresholds into a Scale',
        description:
          '费希纳在韦伯规律上加入“相等JND对应相等感觉增量”等假设，推导出感觉量随刺激量对数增长。他扩展了韦伯的发现，而不是简单换了一个公式。',
        descriptionEn:
          'Fechner added assumptions such as equal JNDs representing equal increments in sensation and derived logarithmic growth of sensation with stimulus intensity. He extended Weber rather than merely swapping formulas.',
        examCue: '费希纳定律：Ψ=k log S；推导含额外心理测量假设。',
        examCueEn:
          "Fechner's law: Ψ=k log S; the derivation adds psychophysical assumptions.",
        sourceIds: [
          'story-apa-fechner-law',
          'story-ncbi-psychophysics-history',
        ],
      },
      {
        id: 'lineage-psychophysics-stevens',
        year: '1957',
        personIds: ['stanley-stevens'],
        relationKind: 'revision',
        title: '史蒂文斯改用直接数量估计',
        titleEn: 'Stevens Turns to Direct Magnitude Estimation',
        description:
          '史蒂文斯的直接量表研究提出Ψ=kSⁿ，不同感觉通道具有不同指数。这是对费希纳量表的经验修正与竞争解释，并不意味着任何情形下都只剩幂律。',
        descriptionEn:
          "Stevens's direct-scaling studies proposed Ψ=kSⁿ, with exponents varying by modality. This empirically revised and competed with Fechnerian scaling without making the power law uniquely correct in every setting.",
        examCue: '区分韦伯比例、费希纳对数律、史蒂文斯幂律。',
        examCueEn:
          "Distinguish Weber's fraction, Fechner's logarithm, and Stevens's power law.",
        sourceIds: ['story-stevens-1957'],
      },
    ],
  },
  {
    id: 'lineage-memory',
    title: '记忆是痕迹、仓库，还是重构？',
    titleEn: 'Is Memory a Trace, a Store, or a Reconstruction?',
    theme:
      '记忆研究从受控遗忘曲线，扩展到有意义材料、信息存储架构和多成分工作系统。',
    themeEn:
      'Memory research moved from controlled forgetting curves to meaningful material, information-store architectures, and multicomponent working systems.',
    subjects: ['general', 'experiment'],
    chapters: [
      {
        id: 'lineage-memory-ebbinghaus',
        year: '1885',
        personIds: ['hermann-ebbinghaus'],
        relationKind: 'foundation',
        title: '艾宾浩斯控制意义',
        titleEn: 'Ebbinghaus Controls Meaning',
        description:
          '艾宾浩斯用无意义音节、统一掌握标准和重学节省量，使保持间隔与遗忘可以定量研究；代价是单被试和人工材料限制了生态效度。',
        descriptionEn:
          'Ebbinghaus used nonsense syllables, a fixed mastery criterion, and relearning savings to quantify retention over time; the tradeoff was a single participant and artificial material.',
        examCue: '节省法即重学所节省的时间或次数，不等同自由回忆。',
        examCueEn:
          'Savings measures work avoided during relearning; it is not free recall.',
        sourceIds: ['story-ebbinghaus-1885'],
      },
      {
        id: 'lineage-memory-bartlett',
        year: '1932',
        personIds: ['frederic-bartlett'],
        relationKind: 'alternative',
        title: '巴特利特让意义回到实验',
        titleEn: 'Bartlett Returns Meaning to the Experiment',
        description:
          '巴特利特以故事和连续、重复再现研究记忆怎样被既有图式改写。他提供的是与艾宾浩斯受控材料互补的重构视角，不是直接师承关系。',
        descriptionEn:
          'Bartlett used stories and serial or repeated reproduction to study how schemas reshape remembering. This was a complementary reconstructive alternative to Ebbinghaus, not a mentor–successor line.',
        examCue: '图式使记忆具有选择、合理化与重构特征。',
        examCueEn:
          'Schemas make remembering selective, rationalized, and reconstructive.',
        sourceIds: ['story-bartlett-remembering'],
      },
      {
        id: 'lineage-memory-modal',
        year: '1968',
        personIds: ['richard-atkinson', 'richard-shiffrin'],
        relationKind: 'extension',
        title: '多存储模型画出信息路径',
        titleEn: 'The Modal Model Charts Information Flow',
        description:
          '阿特金森和希夫林把问题扩展为感觉登记、短时存储、长时存储及控制过程之间的信息流，提供了可检验的系统架构。',
        descriptionEn:
          'Atkinson and Shiffrin expanded the question into information flow among sensory registers, short-term and long-term stores, and control processes.',
        examCue: '存储结构与复述等控制过程要分开。',
        examCueEn:
          'Separate structural stores from control processes such as rehearsal.',
        sourceIds: ['story-baddeley-hitch-1974'],
      },
      {
        id: 'lineage-memory-working',
        year: '1974',
        personIds: ['alan-baddeley', 'graham-hitch'],
        relationKind: 'revision',
        title: '双任务拆开单一短时仓库',
        titleEn: 'Dual Tasks Split the Unitary Short-Term Store',
        description:
          '巴德利和希奇用推理、理解、学习与并发记忆负荷的证据，把单一短时存储修正为容量有限、具有可分成分的工作记忆系统。',
        descriptionEn:
          'Baddeley and Hitch used concurrent-memory-load evidence from reasoning, comprehension, and learning to revise a unitary short-term store into a limited-capacity, multicomponent working-memory system.',
        examCue: '工作记忆不是短时记忆的简单同义词。',
        examCueEn:
          'Working memory is not merely a synonym for short-term memory.',
        sourceIds: ['story-baddeley-hitch-1974'],
      },
    ],
  },
  {
    id: 'lineage-cognitive-development',
    title: '孩子不会，还是问题问错了？',
    titleEn: 'Can the Child Not Reason, or Was the Question Misread?',
    theme: '阶段性结构、社会语言功能与任务要求共同塑造儿童在实验中的可见表现。',
    themeEn:
      "Stage-like structures, social functions of speech, and task demands jointly shape children's visible performance.",
    subjects: ['development', 'education', 'experiment'],
    chapters: [
      {
        id: 'lineage-development-piaget',
        year: '1920s–1970s',
        personIds: ['jean-piaget'],
        relationKind: 'foundation',
        title: '皮亚杰的建构与阶段',
        titleEn: "Piaget's Construction and Stages",
        description:
          '皮亚杰以图式、同化、顺应和平衡解释认知建构，并用守恒等任务表现前运算与具体运算思维的差异。',
        descriptionEn:
          'Piaget explained cognitive construction through schemas, assimilation, accommodation, and equilibration, using tasks such as conservation to contrast preoperational and concrete-operational thought.',
        examCue: '集中化、不可逆与守恒失败属于前运算期典型解释。',
        examCueEn:
          'Centration, irreversibility, and conservation failure are classic preoperational explanations.',
        sourceIds: ['story-piaget-archive'],
      },
      {
        id: 'lineage-development-vygotsky',
        year: '1934',
        personIds: ['lev-vygotsky', 'jean-piaget'],
        relationKind: 'alternative',
        title: '自我中心言语没有消失',
        titleEn: 'Egocentric Speech Does Not Simply Vanish',
        description:
          '维果茨基明确批评皮亚杰对自我中心言语的解释，主张这种言语具有自我调节功能并逐渐内化。该争论只证明两人对言语功能的解释不同，不能扩大成“维果茨基推翻全部阶段论”。',
        descriptionEn:
          "Vygotsky explicitly criticized Piaget's account of egocentric speech, arguing that it regulates action and becomes internalized. This concerns the function of speech, not a wholesale refutation of Piagetian development.",
        examCue: '皮亚杰侧重认知去中心化；维果茨基侧重社会言语的内化与调节。',
        examCueEn:
          'Piaget emphasizes decentration; Vygotsky emphasizes internalized social speech and self-regulation.',
        sourceIds: ['story-vygotsky-piaget-review'],
      },
      {
        id: 'lineage-development-task-demand',
        year: '1974',
        personIds: ['jean-piaget'],
        relationKind: 'revision',
        title: '“意外变化”改写守恒成绩',
        titleEn:
          'An Accidental Transformation Changes Conservation Performance',
        description:
          '麦加里格尔和唐纳森发现，当材料变化看似偶然、而不是实验者有意重排后再重复提问时，年幼儿童更常给出守恒判断，说明语用线索会掩盖能力。',
        descriptionEn:
          'McGarrigle and Donaldson found more conservation responses when the transformation appeared accidental rather than an intentional rearrangement followed by a repeated question, showing that pragmatic cues can mask competence.',
        examCue:
          '任务成绩受语言、实验者意图和材料影响；一次失败不等于概念完全不存在。',
        examCueEn:
          'Language, experimenter intent, and materials affect performance; one failure does not prove total absence of the concept.',
        sourceIds: ['story-conservation-accidents'],
      },
    ],
  },
  {
    id: 'lineage-learning',
    title: '没有奖励，也会学习吗？',
    titleEn: 'Can Learning Occur without Reward?',
    theme:
      '行为变化、潜在知识和观察获得不是同一个问题；理论争论迫使研究者把学习与表现分开。',
    themeEn:
      'Behavior change, latent knowledge, and observational acquisition are not the same question; the debate forced a distinction between learning and performance.',
    subjects: ['general', 'education', 'experiment', 'social'],
    chapters: [
      {
        id: 'lineage-learning-behavior',
        year: '1913–1950s',
        personIds: ['john-watson', 'bf-skinner'],
        relationKind: 'foundation',
        title: '把学习锚定在可观察行为',
        titleEn: 'Anchoring Learning in Observable Behavior',
        description:
          '行为主义把研究重点放到可观察的刺激、反应与环境后果。华生和斯金纳的理论并不相同，不能把所有行为主义者压成“只有一种S-R联结”。',
        descriptionEn:
          'Behaviorism centered observable stimuli, responses, and environmental consequences. Watson and Skinner did not offer identical theories, so behaviorism must not be flattened into one simple S–R claim.',
        examCue: '区分经典条件作用、操作性条件作用及其理论代表。',
        examCueEn:
          'Distinguish classical conditioning, operant conditioning, and their theorists.',
        sourceIds: ['story-latent-learning-audit'],
      },
      {
        id: 'lineage-learning-tolman',
        year: '1930–1948',
        personIds: ['edward-tolman'],
        relationKind: 'alternative',
        title: '奖励揭示了地图，而非制造地图',
        titleEn: 'Reward Reveals the Map Rather than Necessarily Creating It',
        description:
          '托尔曼的潜伏学习和认知地图把已获得的空间知识与是否立即表现分开，并以目的和中介变量解释行为。',
        descriptionEn:
          'Tolman separated acquired spatial knowledge from its immediate performance through latent learning and cognitive maps, explaining behavior with goals and intervening variables.',
        examCue: '潜伏学习核心是学习—表现区分；不是“奖励永远无作用”。',
        examCueEn:
          'Latent learning hinges on learning versus performance, not on reward never mattering.',
        sourceIds: ['story-tolman-1948', 'story-latent-learning-audit'],
      },
      {
        id: 'lineage-learning-bandura',
        year: '1961–1977',
        personIds: ['albert-bandura'],
        relationKind: 'revision',
        title: '观察者不必亲自受强化',
        titleEn: 'The Observer Need Not Be Directly Reinforced',
        description:
          '班杜拉及合作者显示，儿童可仅观察榜样而获得新的模仿行为；后来社会认知理论进一步区分获得、表现动机、自我效能与交互决定。',
        descriptionEn:
          'Bandura and colleagues showed that children could acquire novel imitative behavior through observation alone; social cognitive theory later distinguished acquisition, performance motivation, self-efficacy, and reciprocal determination.',
        examCue:
          '观察学习含注意、保持、动作再现、动机；强化可影响表现而非必然决定获得。',
        examCueEn:
          'Observational learning involves attention, retention, reproduction, and motivation; reinforcement may affect performance without being necessary for acquisition.',
        sourceIds: ['story-bandura-bobo-1961'],
      },
      {
        id: 'lineage-learning-boundary',
        year: '现代回顾',
        personIds: ['edward-tolman', 'albert-bandura'],
        relationKind: 'limitation',
        title: '不能编成一条简单继承链',
        titleEn: 'Not a Simple Line of Succession',
        description:
          '托尔曼与班杜拉从不同实验路线扩大了学习解释；没有证据支持“托尔曼把理论直接传给班杜拉”。潜伏学习史也没有由单个实验无争议地终结行为主义。',
        descriptionEn:
          'Tolman and Bandura broadened learning theory through different experimental routes; there is no basis for a direct inheritance story, and latent learning did not uncontroversially end behaviorism in one experiment.',
        examCue: '把关系标为竞争解释或经验修正，而非虚构师承。',
        examCueEn:
          'Code the relation as an alternative or empirical revision, not an invented mentorship.',
        sourceIds: ['story-latent-learning-audit'],
      },
    ],
  },
  {
    id: 'lineage-attribution',
    title: '行为背后的原因侦探',
    titleEn: 'Detectives of the Causes behind Behavior',
    theme: '归因研究从日常因果区分，分化为人格推断、协变分析与成就动机模型。',
    themeEn:
      'Attribution research developed from everyday causal distinctions into dispositional inference, covariation analysis, and achievement-motivation models.',
    subjects: ['social', 'education', 'general'],
    chapters: [
      {
        id: 'lineage-attribution-heider',
        year: '1958',
        personIds: ['fritz-heider'],
        relationKind: 'foundation',
        title: '海德的朴素心理学',
        titleEn: "Heider's Naive Psychology",
        description:
          '海德把人视为日常因果推断者，强调个人内部原因与环境外部原因的区分，为后来多条归因路线提供共同问题。',
        descriptionEn:
          'Heider treated people as everyday causal reasoners and distinguished person-centered from environmental causes, supplying a common problem for later attribution programs.',
        examCue: '内部归因与外部归因是基础框架，不等于具体偏差名称。',
        examCueEn:
          'Internal versus external attribution is a foundational frame, not itself the name of every attribution bias.',
        sourceIds: ['story-weiner-attribution-2020'],
      },
      {
        id: 'lineage-attribution-correspondence',
        year: '1965',
        personIds: ['edward-jones', 'keith-davis'],
        relationKind: 'extension',
        title: '何时从行为推断稳定人格？',
        titleEn: 'When Does an Act Reveal a Stable Disposition?',
        description:
          '琼斯和戴维斯把海德的广泛问题具体化为对应推断：当行为具有选择性、非共同效果和低社会赞许等线索时，观察者更可能推断稳定倾向。',
        descriptionEn:
          "Jones and Davis developed Heider's broad problem into correspondent inference: choice, noncommon effects, and low social desirability make dispositional inference more likely.",
        examCue: '对应推断关注由行为到特质，不是凯利三维协变。',
        examCueEn:
          "Correspondent inference moves from act to disposition; it is not Kelley's covariation cube.",
        sourceIds: ['story-weiner-attribution-2020'],
      },
      {
        id: 'lineage-attribution-kelley',
        year: '1967–1973',
        personIds: ['harold-kelley'],
        relationKind: 'extension',
        title: '凯利用三类信息协变',
        titleEn: 'Kelley Covaries Three Kinds of Information',
        description:
          '凯利用共同性、区别性和一致性说明观察者怎样比较人、刺激与时间来归因，使“为什么”成为一组可组合的信息线索。',
        descriptionEn:
          'Kelley used consensus, distinctiveness, and consistency to explain how observers compare persons, stimuli, and occasions when assigning causes.',
        examCue: '共同性看别人，区别性看其他对象，一致性看跨时间情境。',
        examCueEn:
          'Consensus compares others, distinctiveness compares targets, and consistency compares occasions.',
        sourceIds: ['story-weiner-attribution-2020'],
      },
      {
        id: 'lineage-attribution-weiner',
        year: '1970s–2020',
        personIds: ['bernard-weiner'],
        relationKind: 'extension',
        title: '韦纳把原因连接到情绪与努力',
        titleEn: 'Weiner Links Causes to Emotion and Effort',
        description:
          '韦纳把成败原因组织为归因部位、稳定性和可控性，并推导期望、情绪与后续行为。其本人强调归因领域是一组相关理论，而非唯一统一模型。',
        descriptionEn:
          'Weiner organized achievement causes by locus, stability, and controllability and linked them to expectancy, emotion, and later action. He also stresses that attribution is a family of approaches, not one unified theory.',
        examCue: '稳定性主要影响未来期望，可控性与责任、愤怒或内疚密切相关。',
        examCueEn:
          'Stability chiefly affects expectancy; controllability bears on responsibility, anger, and guilt.',
        sourceIds: ['story-weiner-attribution-2020'],
      },
    ],
  },
  {
    id: 'lineage-intelligence-structure',
    title: '一束光，还是一片星座？',
    titleEn: 'One Beam of Light or a Constellation?',
    theme:
      '智力结构研究在共同因素、能力群、层级分化和广义能力观之间持续竞争与整合。',
    themeEn:
      'The structure of intelligence remains a contest and partial synthesis among general factors, ability clusters, hierarchies, and broader conceptions of competence.',
    subjects: ['general', 'statistics', 'measurement'],
    chapters: [
      {
        id: 'lineage-intelligence-spearman',
        year: '1904',
        personIds: ['charles-spearman'],
        relationKind: 'foundation',
        title: '正相关群与g因素',
        titleEn: 'The Positive Manifold and g',
        description:
          '斯皮尔曼从多项任务普遍正相关出发，提出每项表现同时包含一般因素g和特殊因素s，并推动因素分析与测量误差校正。',
        descriptionEn:
          'Spearman began with the positive correlations among diverse tasks, proposing that each reflects a general factor g and a task-specific factor s, while advancing factor analysis and error correction.',
        examCue: '二因素理论中的“二”指g与每项任务的s，不是固定两个能力。',
        examCueEn:
          'The two factors are g and a task-specific s, not two fixed abilities.',
        sourceIds: ['story-spearman-1904'],
      },
      {
        id: 'lineage-intelligence-thurstone',
        year: '1938',
        personIds: ['louis-thurstone'],
        relationKind: 'alternative',
        title: '瑟斯顿的基本心理能力',
        titleEn: "Thurstone's Primary Mental Abilities",
        description:
          '瑟斯顿强调若干基本心理能力，而非只用一个g描述差异；但这些能力之间的相关后来又允许二阶一般因素，因此两种观点可在层级模型中部分协调。',
        descriptionEn:
          'Thurstone emphasized several primary mental abilities instead of describing variation with g alone; their correlations later permitted a second-order general factor, allowing partial reconciliation in hierarchical models.',
        examCue: '群因素论是竞争结构，不等于证明任务之间完全不相关。',
        examCueEn:
          'Primary abilities form a competing structure, not proof that tasks are wholly unrelated.',
        sourceIds: ['story-ncbi-intelligence-assessment'],
      },
      {
        id: 'lineage-intelligence-cattell',
        year: '1943 onward',
        personIds: ['raymond-cattell'],
        relationKind: 'extension',
        title: '一般能力分成流体与晶体',
        titleEn:
          'General Ability Differentiates into Fluid and Crystallized Intelligence',
        description:
          '雷蒙德·卡特尔将一般能力区分为流体推理与由文化学习积累的晶体知识，后来与霍恩、卡罗尔的层级研究共同形成整合框架。',
        descriptionEn:
          'Raymond Cattell distinguished fluid reasoning from culturally acquired crystallized knowledge; later Horn and Carroll work contributed to a hierarchical synthesis.',
        examCue: '流体智力重在新问题推理，晶体智力重在经验知识。',
        examCueEn:
          'Fluid intelligence concerns novel reasoning; crystallized intelligence concerns acquired knowledge.',
        sourceIds: ['story-intelligence-review'],
      },
      {
        id: 'lineage-intelligence-broad',
        year: '1980s onward',
        personIds: ['robert-sternberg', 'howard-gardner'],
        relationKind: 'alternative',
        title: '把智力带出传统测验',
        titleEn: 'Taking Intelligence beyond Traditional Tests',
        description:
          '斯滕伯格强调分析、创造和实践能力，加德纳提出多元智能；二者扩大“有价值能力”的范围，但不能叙述为已在心理测量证据上取代g。',
        descriptionEn:
          'Sternberg emphasized analytical, creative, and practical abilities, while Gardner proposed multiple intelligences. Both broaden valued competence, but neither can be presented as having psychometrically displaced g.',
        examCue: '理论名称、能力构成与证据类型要分别掌握。',
        examCueEn:
          'Keep theory names, proposed abilities, and evidence types distinct.',
        sourceIds: ['story-intelligence-review'],
      },
    ],
  },
  {
    id: 'lineage-emotion',
    title: '情绪在身体之前，还是之后？',
    titleEn: 'Does Emotion Come before the Body, or after It?',
    theme:
      '身体变化、中枢过程、情境标签和认知评价对情绪的作用，被不同理论排成了不同因果顺序。',
    themeEn:
      'Competing theories place bodily change, central processes, contextual labels, and appraisal in different causal orders.',
    subjects: ['general', 'experiment', 'social'],
    chapters: [
      {
        id: 'lineage-emotion-james',
        year: '1884–1885',
        personIds: ['william-james'],
        relationKind: 'foundation',
        title: '先有身体变化，再体验情绪',
        titleEn: 'Bodily Change before Felt Emotion',
        description:
          '威廉·詹姆斯与卡尔·兰格分别提出相近观点：事件引发身体变化，对这些变化的感觉构成情绪体验。两人不是共同实验室里的合著者。',
        descriptionEn:
          'William James and Carl Lange independently proposed related views: an event elicits bodily changes, and feeling those changes constitutes emotional experience. They were not coauthors in one laboratory.',
        examCue: '詹姆斯—兰格：情境→生理反应→情绪体验。',
        examCueEn:
          'James–Lange: situation → physiological response → emotional experience.',
        sourceIds: ['story-james-emotion-1884'],
      },
      {
        id: 'lineage-emotion-cannon-bard',
        year: '1927 onward',
        personIds: ['walter-cannon', 'philip-bard'],
        relationKind: 'revision',
        title: '坎农直接挑战外周反馈的充分性',
        titleEn:
          'Cannon Directly Challenges the Sufficiency of Peripheral Feedback',
        description:
          '坎农明确批评内脏变化过慢、过于相似且切断反馈后情绪仍可出现；与巴德的研究发展出中枢过程使体验与身体反应可并行发生的解释。',
        descriptionEn:
          'Cannon explicitly argued that visceral changes were too slow and nonspecific and that emotion could remain after disrupted feedback; work associated with Bard supported central processes that can generate experience and bodily response in parallel.',
        examCue:
          '坎农—巴德不是“完全没有生理反应”，而是反对由外周变化单向造成情绪。',
        examCueEn:
          'Cannon–Bard does not remove physiology; it rejects a one-way causal route from peripheral change to emotion.',
        sourceIds: ['story-cannon-emotion-1927'],
      },
      {
        id: 'lineage-emotion-two-factor',
        year: '1962',
        personIds: ['stanley-schachter', 'jerome-singer'],
        relationKind: 'extension',
        title: '同样的唤醒需要情境标签',
        titleEn: 'The Same Arousal Needs a Contextual Label',
        description:
          '沙赫特与辛格把生理唤醒和可用的情境认知结合起来：没有明确解释的唤醒更可能按周围线索被标记成特定情绪。',
        descriptionEn:
          'Schachter and Singer combined physiological arousal with available contextual cognition: unexplained arousal is more likely to be labeled using surrounding cues.',
        examCue: '二因素是生理唤醒＋认知标签，不等同坎农—巴德的并行。',
        examCueEn:
          'The two factors are arousal plus a cognitive label, not Cannon–Bard parallelism.',
        sourceIds: ['story-schachter-singer-1962'],
      },
      {
        id: 'lineage-emotion-appraisal',
        year: '1980s',
        personIds: ['richard-lazarus', 'robert-zajonc'],
        relationKind: 'alternative',
        title: '评价优先，还是情感可先行？',
        titleEn: 'Does Appraisal Lead, or Can Affect Come First?',
        description:
          '拉扎勒斯强调认知评价对情绪意义的作用；扎荣茨主张某些情感偏好无需先有充分认知推断。这是关于必要加工条件的竞争解释，并非一方终结另一方。',
        descriptionEn:
          'Lazarus emphasized cognitive appraisal of significance, whereas Zajonc argued that some affective preferences need not await extensive inference. This is a dispute over necessary processing, not a final victory by either side.',
        examCue: '识别各理论的因果顺序，不把“认知”笼统当成同一环节。',
        examCueEn:
          'Identify each causal sequence instead of treating every kind of cognition as the same step.',
        sourceIds: ['story-zajonc-1980'],
      },
    ],
  },
  {
    id: 'lineage-selective-attention',
    title: '注意闸门究竟在哪里？',
    titleEn: 'Where Is the Attentional Gate?',
    theme:
      '双耳分听中的反例推动过滤器从全或无、到衰减、再到会随负荷变化的选择机制。',
    themeEn:
      'Counterexamples from dichotic listening moved selection from an all-or-none filter to attenuation and load-dependent gating.',
    subjects: ['general', 'experiment'],
    chapters: [
      {
        id: 'lineage-attention-broadbent',
        year: '1958',
        personIds: ['donald-broadbent'],
        relationKind: 'foundation',
        title: '早期过滤器保护有限通道',
        titleEn: 'An Early Filter Protects a Limited Channel',
        description:
          '布罗德本特根据双耳分听提出早期选择：输入的基本物理特征可并行登记，但过滤器在充分语义识别前选择通道。',
        descriptionEn:
          'From dichotic listening, Broadbent proposed early selection: basic physical features are registered in parallel, but a filter selects a channel before full semantic recognition.',
        examCue: '早期选择按物理特征过滤，瓶颈位于意义识别之前。',
        examCueEn:
          'Early selection filters by physical features before semantic recognition.',
        sourceIds: ['story-apa-attention', 'story-attention-review'],
      },
      {
        id: 'lineage-attention-treisman',
        year: '1960–1964',
        personIds: ['anne-treisman'],
        relationKind: 'revision',
        title: '未注意信息只是被调暗',
        titleEn: 'Unattended Information Is Dimmed, Not Deleted',
        description:
          '特雷斯曼用未注意通道中的姓名和意义效应修正全或无过滤器：衰减器降低信号强度，低阈限的重要信息仍可能进入后续加工。',
        descriptionEn:
          'Treisman used name and meaning effects in unattended channels to revise the all-or-none filter: an attenuator weakens signals, while important low-threshold items may still proceed.',
        examCue: '衰减模型仍属较早选择，但不是彻底阻断。',
        examCueEn:
          'Attenuation remains relatively early selection without complete exclusion.',
        sourceIds: ['story-apa-attention', 'story-attention-review'],
      },
      {
        id: 'lineage-attention-late',
        year: '1963',
        personIds: [],
        relationKind: 'alternative',
        title: '多伊奇夫妇把选择移到晚期',
        titleEn: 'Deutsch and Deutsch Move Selection Later',
        description:
          '多伊奇与多伊奇提出竞争解释：多路输入可先得到较充分的语义加工，选择主要发生在意识或反应阶段。当前人物库尚无两人独立档案，因此本章不绑定虚构人物ID。',
        descriptionEn:
          'Deutsch and Deutsch proposed a competing account in which inputs receive fuller semantic analysis before selection at awareness or response. They have no current roster entries, so this chapter intentionally binds no invented person IDs.',
        examCue: '晚期选择的过滤位置在意义识别之后。',
        examCueEn:
          'Late selection places the filter after semantic recognition.',
        sourceIds: ['story-apa-attention', 'story-attention-review'],
      },
      {
        id: 'lineage-attention-load',
        year: '1973–1990s',
        personIds: ['daniel-kahneman'],
        relationKind: 'extension',
        title: '容量与负荷让闸门移动',
        titleEn: 'Capacity and Load Make the Gate Move',
        description:
          '卡尼曼的有限容量观与后来的负荷理论把早期—晚期结果放进条件框架：知觉负荷高时较早排除干扰，剩余资源多时干扰可获得更深加工。',
        descriptionEn:
          "Kahneman's capacity view and later load theory place early and late findings in a conditional frame: high perceptual load promotes earlier exclusion, whereas spare capacity permits deeper distractor processing.",
        examCue: '早晚选择不是固定解剖位置，可受任务负荷调节。',
        examCueEn:
          'Early versus late selection is not a fixed anatomical site; task load can modulate it.',
        sourceIds: ['story-attention-load'],
      },
    ],
  },
  {
    id: 'lineage-intelligence-testing',
    title: '一份测验跨越国家与年龄',
    titleEn: 'A Test Crosses Nations and Age Groups',
    theme:
      '智力测验从教育支持工具，经过本土化、重新常模化和成人临床评估，功能与风险不断变化。',
    themeEn:
      'Intelligence tests evolved from educational support tools through localization, renorming, and adult clinical assessment, changing both function and risk.',
    subjects: ['measurement', 'development', 'general'],
    chapters: [
      {
        id: 'lineage-testing-binet-simon',
        year: '1905–1911',
        personIds: ['alfred-binet', 'theodore-simon'],
        relationKind: 'foundation',
        title: '为需要帮助的儿童寻找合适任务',
        titleEn: 'Finding Appropriate Tasks for Children Who Need Support',
        description:
          '比奈与西蒙以多种较复杂任务识别在普通教学中需要额外支持的儿童。原始目的偏向教育诊断，并非给人格贴永久等级标签。',
        descriptionEn:
          'Binet and Simon used varied, relatively complex tasks to identify children needing extra educational support. The original purpose was educational diagnosis, not a permanent rank of human worth.',
        examCue: '比奈—西蒙量表与心理年龄；牢记原始教育用途。',
        examCueEn:
          'Binet–Simon and mental age; remember the original educational purpose.',
        sourceIds: ['story-apa-intelligence-testing'],
      },
      {
        id: 'lineage-testing-terman',
        year: '1916 onward',
        personIds: ['lewis-terman'],
        relationKind: 'extension',
        title: '特曼进行美国化修订与常模化',
        titleEn: 'Terman Revises and Renorms for the United States',
        description:
          '特曼在斯坦福修订比奈—西蒙量表，进行翻译、项目调整和常模化并扩大使用。扩展应用同时带来跨文化误用和把分数本质化的历史风险。',
        descriptionEn:
          'Terman revised the Binet–Simon scale at Stanford through translation, item changes, and norming, broadening its use while also exposing risks of cultural misuse and reifying scores.',
        examCue: '斯坦福—比奈是修订与扩展，不是与比奈—西蒙无关的新测验。',
        examCueEn:
          'Stanford–Binet is a revision and extension, not an unrelated new test.',
        sourceIds: ['story-apa-stanford-binet'],
      },
      {
        id: 'lineage-testing-wechsler',
        year: '1939 onward',
        personIds: ['david-wechsler'],
        relationKind: 'extension',
        title: '韦克斯勒面向成人与能力剖面',
        titleEn: 'Wechsler Turns to Adults and Ability Profiles',
        description:
          '韦克斯勒—贝尔维尤量表面向成人临床评估，组织言语和操作性分测验，并发展年龄常模下的离差智商。它扩展了评估对象和解释方式。',
        descriptionEn:
          'The Wechsler–Bellevue scale targeted adult clinical assessment, organized verbal and performance subtests, and advanced age-normed deviation IQ, expanding both population and interpretation.',
        examCue: '离差智商比较同年龄常模；分数含义依赖常模与版本。',
        examCueEn:
          'Deviation IQ compares age peers; meaning depends on the norm group and edition.',
        sourceIds: ['story-wechsler-history', 'story-apa-intelligent-testing'],
      },
    ],
  },
  {
    id: 'lineage-ctt-irt',
    title: '从总分误差到每道题的概率',
    titleEn: 'From Total-Score Error to Item-Level Probability',
    theme:
      '经典测验理论与项目反应理论处理不同层级的问题，后者扩大了题库、等值与自适应测验能力。',
    themeEn:
      'Classical test theory and item response theory operate at different levels; IRT extends item banking, equating, and adaptive testing.',
    subjects: ['measurement', 'statistics'],
    chapters: [
      {
        id: 'lineage-ctt-foundation',
        year: '1904 onward',
        personIds: ['charles-spearman'],
        relationKind: 'foundation',
        title: '经典测验理论分开真分数与误差',
        titleEn: 'Classical Test Theory Separates True Score and Error',
        description:
          '斯皮尔曼早期信度研究奠定观察分数由真分数和误差构成的传统，使整份测验的信度和测量误差可以估计。',
        descriptionEn:
          "Spearman's early reliability work helped establish the tradition that observed scores contain true score and error, allowing reliability and test-level measurement error to be estimated.",
        examCue: 'X=T+E是理论分解；单次观察不能直接看见真分数。',
        examCueEn:
          'X=T+E is a theoretical decomposition; a true score is not directly visible in one observation.',
        sourceIds: ['story-standardized-testing-ctt-irt'],
      },
      {
        id: 'lineage-ctt-limitation',
        year: '20世纪中期',
        personIds: ['charles-spearman'],
        relationKind: 'limitation',
        title: '一份总分难以稳定描述每道题',
        titleEn: 'A Total Score Cannot Fully Stabilize Every Item',
        description:
          'CTT中的项目难度、区分度和个体分数较依赖特定样本与特定测验，整卷信度也不能直接给出潜在能力与项目反应的概率关系。',
        descriptionEn:
          'In CTT, item difficulty, discrimination, and person scores are relatively tied to a particular sample and test, while test reliability does not directly specify response probability from latent ability and item properties.',
        examCue: '这是适用层级限制，不表示CTT“错误”。',
        examCueEn:
          'This is a limitation of level and purpose, not proof that CTT is wrong.',
        sourceIds: ['story-ctt-irt-overview'],
      },
      {
        id: 'lineage-irt-extension',
        year: '1950s–1968 onward',
        personIds: ['georg-rasch', 'frederic-lord'],
        relationKind: 'extension',
        title: '拉施与洛德转向项目反应函数',
        titleEn: 'Rasch and Lord Turn to Item Response Functions',
        description:
          '拉施、洛德及诺维克等将潜在特质和项目参数连接到作答概率，为题库、等值、项目功能差异和自适应测验提供模型；代价是更强的维度、独立性与拟合假设。',
        descriptionEn:
          'Rasch, Lord, Novick, and others linked latent traits and item parameters to response probability, enabling item banks, equating, DIF analysis, and adaptive testing at the cost of stronger dimensionality, independence, and fit assumptions.',
        examCue: '区分1PL、2PL、3PL参数含义，并先检查模型假设。',
        examCueEn:
          'Distinguish 1PL, 2PL, and 3PL parameters and check model assumptions first.',
        sourceIds: [
          'story-standardized-testing-ctt-irt',
          'story-ctt-irt-overview',
        ],
      },
    ],
  },
  {
    id: 'lineage-conditioning',
    title: '一起出现，还不够',
    titleEn: 'Mere Pairing Is Not Enough',
    theme: '经典条件作用从时空接近转向相依性、信息和预测误差。',
    themeEn:
      'Classical conditioning moved from simple contiguity toward contingency, information, and prediction error.',
    subjects: ['general', 'experiment'],
    chapters: [
      {
        id: 'lineage-conditioning-pavlov',
        year: '1890s–1920s',
        personIds: ['ivan-pavlov'],
        relationKind: 'foundation',
        title: '巴甫洛夫建立可控配对范式',
        titleEn: 'Pavlov Establishes a Controlled Pairing Paradigm',
        description:
          '巴甫洛夫系统研究条件刺激与无条件刺激的配对、获得、消退、泛化和分化，为联结变化提供可控制的实验语言。',
        descriptionEn:
          'Pavlov systematically studied pairings of conditioned and unconditioned stimuli, acquisition, extinction, generalization, and discrimination, creating a controlled language for associative change.',
        examCue: '掌握CS、US、CR、UR及获得—消退等基本过程。',
        examCueEn:
          'Master CS, US, CR, UR, and processes such as acquisition and extinction.',
        sourceIds: ['story-conditioning-review'],
      },
      {
        id: 'lineage-conditioning-rescorla',
        year: '1968',
        personIds: [],
        relationKind: 'revision',
        title: '雷斯科拉比较CS在场与不在场的结果概率',
        titleEn:
          'Rescorla Compares Outcome Probability with and without the CS',
        description:
          '当电击在声音CS出现与不出现时概率相同，即使两者多次相邻也很少形成条件反应；当CS真正提高US概率时才有明显学习。当前人物库没有雷斯科拉档案，因此不绑定虚构ID。',
        descriptionEn:
          'When shock was equally probable with and without the tone CS, repeated contiguity produced little conditioning; substantial learning occurred when the CS genuinely increased US probability. Rescorla has no current roster entry, so no invented ID is bound.',
        examCue: '相依性比较P(US|CS)与P(US|¬CS)，不是只数配对次数。',
        examCueEn:
          'Contingency compares P(US|CS) with P(US|¬CS), not just the number of pairings.',
        sourceIds: ['story-rescorla-1968', 'story-rescorla-1988'],
      },
      {
        id: 'lineage-conditioning-rw',
        year: '1972 onward',
        personIds: [],
        relationKind: 'extension',
        title: '雷斯科拉—瓦格纳用惊讶更新联结',
        titleEn: 'Rescorla–Wagner Updates Association by Surprise',
        description:
          '雷斯科拉—瓦格纳模型用实际结果与所有线索总预测之间的误差更新联结强度，可解释阻断和过度预期等现象；它仍不能完整处理时间和构型学习。',
        descriptionEn:
          'The Rescorla–Wagner model updates associative strength from the error between the actual outcome and the summed prediction of all cues, explaining blocking and overexpectation while remaining limited for timing and configural learning.',
        examCue: '预测已充分时新线索学习少；关键是预测误差而非单纯重复。',
        examCueEn:
          'A new cue learns little when the outcome is already predicted; prediction error, not repetition alone, drives updating.',
        sourceIds: ['story-conditioning-review'],
      },
    ],
  },
  {
    id: 'lineage-dissonance-self-perception',
    title: '我改变了态度，还是从行为推断了态度？',
    titleEn: 'Did I Change My Attitude, or Infer It from My Behavior?',
    theme: '同一诱导服从结果可由失调驱力或自我观察解释，需要区分机制的证据。',
    themeEn:
      'The same induced-compliance result can reflect dissonance motivation or self-observation, so evidence must distinguish mechanisms.',
    subjects: ['social', 'experiment'],
    chapters: [
      {
        id: 'lineage-dissonance-festinger',
        year: '1957',
        personIds: ['leon-festinger'],
        relationKind: 'foundation',
        title: '不一致产生减轻失调的动机',
        titleEn: 'Inconsistency Motivates Dissonance Reduction',
        description:
          '费斯廷格提出，彼此不协调的认知可产生令人不适的失调，个体会改变认知、增加协调认知或改变行为来减轻它。',
        descriptionEn:
          'Festinger proposed that incompatible cognitions create aversive dissonance, motivating changes in cognition or behavior or the addition of consonant cognitions.',
        examCue: '失调大小与认知重要性、比例及可用理由有关。',
        examCueEn:
          'Dissonance depends on importance, proportion, and available justification.',
        sourceIds: ['story-apa-dissonance'],
      },
      {
        id: 'lineage-dissonance-compliance',
        year: '1959',
        personIds: ['leon-festinger'],
        relationKind: 'extension',
        title: '低报酬反而带来更大态度变化',
        titleEn: 'The Smaller Reward Produces Greater Attitude Change',
        description:
          '费斯廷格与卡尔史密斯让参与者完成枯燥任务后反称任务有趣；一美元提供的外部理由较少，随后私下评价比二十美元组更正面。',
        descriptionEn:
          'Festinger and Carlsmith had participants complete dull tasks and then call them interesting; one dollar supplied less external justification, and later private ratings were more positive than in the twenty-dollar condition.',
        examCue: '诱导服从要求反态度行为、选择感与不足的外部理由。',
        examCueEn:
          'Induced compliance requires counterattitudinal behavior, perceived choice, and insufficient external justification.',
        sourceIds: ['story-festinger-carlsmith-1959'],
      },
      {
        id: 'lineage-dissonance-bem',
        year: '1967',
        personIds: ['daryl-bem', 'leon-festinger'],
        relationKind: 'alternative',
        title: '贝姆提出不需要厌恶性驱力的解释',
        titleEn: 'Bem Offers an Account without an Aversive Drive',
        description:
          '贝姆认为，人也可像外部观察者一样根据自己的行为和情境线索推断态度，因而无需假定失调不适就能解释部分结果。这是竞争机制，不是费斯廷格指定的继承者。',
        descriptionEn:
          'Bem argued that people can infer attitudes from their own behavior and situational cues much like outside observers, explaining some findings without aversive arousal. This is a competing mechanism, not an appointed successor to Festinger.',
        examCue: '同一结果不等于同一机制；需要原有态度、唤醒和选择等区分证据。',
        examCueEn:
          'The same outcome need not imply the same mechanism; prior attitude, arousal, and choice can discriminate accounts.',
        sourceIds: ['story-bem-1967', 'story-apa-dissonance'],
      },
    ],
  },
];

export const experimentStories: ExperimentStory[] = [
  {
    id: 'experiment-ebbinghaus-savings',
    personIds: ['hermann-ebbinghaus'],
    subjects: ['general', 'experiment'],
    title: '把遗忘变成可测量的曲线',
    titleEn: 'Turning Forgetting into a Measurable Curve',
    summary:
      '艾宾浩斯以自己为单一被试，用无意义音节和节省法追踪不同保持间隔后的再学习；故事重点是他如何压低材料意义、时间与疲劳带来的噪声。',
    summaryEn:
      'Using himself as a single participant, Ebbinghaus tracked relearning after different retention intervals with nonsense syllables and the savings method; the story centers on reducing noise from meaning, time, and fatigue.',
    stages: [
      {
        phase: 'question',
        title: '问题：记忆痕迹怎样随时间改变？',
        titleEn: 'Question: How Does a Memory Trace Change over Time?',
        detail:
          '即使材料已经不能完整背出，是否仍留下可以通过较快再学习检测到的记忆？',
        detailEn:
          'Even when material can no longer be recited perfectly, does a residue remain that can be detected through faster relearning?',
      },
      {
        phase: 'hypothesis',
        title: '假设：先快后慢的遗忘',
        titleEn: 'Hypothesis: Forgetting Is Fast, Then Slows',
        detail:
          '保持间隔越长，再学习所需次数越多、节省量越小；早期下降应比后期陡。',
        detailEn:
          'Longer retention intervals should require more relearning and yield less savings, with a steeper early than late decline.',
      },
      {
        phase: 'operationalization',
        title: '操作化：无意义音节与节省法',
        titleEn: 'Operationalization: Nonsense Syllables and Savings',
        detail:
          '学习辅音—元音—辅音音节串至连续两次无误背诵；延迟后再学到同一标准，以初学与再学所需时间或重复次数之差表示节省。',
        detailEn:
          'Consonant–vowel–consonant lists were learned to two errorless recitations, then relearned to the same criterion after a delay; the reduction in time or repetitions indexed savings.',
      },
      {
        phase: 'variables',
        title: '变量：间隔是自变量，节省量是因变量',
        titleEn: 'Variables: Interval as IV, Savings as DV',
        detail:
          '自变量是从学习到再学习的保持间隔；因变量是再学习节省。材料长度、呈现节奏、掌握标准、时段与被试尽量固定。',
        detailEn:
          'The IV was the retention interval and the DV was relearning savings. List length, presentation rhythm, learning criterion, time of day, and participant were held as constant as possible.',
      },
      {
        phase: 'obstacle',
        title: '障碍：熟悉意义、练习与疲劳会伪装成记忆差异',
        titleEn:
          'Obstacle: Meaning, Practice, and Fatigue Can Masquerade as Memory Effects',
        detail:
          '真实词语会唤起不等量的旧联想；同一人反复实验还会受到练习、注意和疲劳波动影响。',
        detailEn:
          'Real words evoke unequal prior associations, while repeated self-testing is vulnerable to practice, attention, and fatigue fluctuations.',
      },
      {
        phase: 'solution',
        title: '办法：标准化材料、标准化标准并重复测量',
        titleEn: 'Solution: Standardize Materials and Criterion, Then Repeat',
        detail:
          '采用尽量无意义的音节、固定学习节奏和掌握标准，并在大量、分散的系列中重复同类间隔，以平均偶然波动。',
        detailEn:
          'He used minimally meaningful syllables, fixed the learning rhythm and criterion, and repeated comparable delays across many distributed series to average random fluctuation.',
      },
      {
        phase: 'result',
        title: '结果：无法背出不等于完全遗忘',
        titleEn: 'Result: Failure to Recall Is Not Total Loss',
        detail:
          '节省量随间隔延长迅速下降，之后下降趋缓；延迟很久仍可出现再学习优势。',
        detailEn:
          'Savings dropped rapidly as the delay increased and then declined more slowly; relearning advantages could remain after overt recall failed.',
      },
      {
        phase: 'boundary',
        title: '边界：一名成人和人工材料不能代表所有记忆',
        titleEn:
          'Boundary: One Adult and Artificial Material Do Not Represent All Memory',
        detail:
          '这是高度控制的单被试自我实验；曲线会随材料意义、任务、睡眠、干扰和个体差异改变，不能当作人人固定的遗忘公式。',
        detailEn:
          'This was a highly controlled single-participant self-study; meaning, task, sleep, interference, and individual differences can change the curve, so it is not a fixed law for everyone.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：用模拟数据复原，不让玩家过度疲劳',
        titleEn: 'Modern Reminder: Reconstruct with Simulation, Not Exhaustion',
        detail:
          '现代课堂复现应告知负担、允许退出并限制重复量；游戏只模拟音节、时钟与节省计算，不要求长时间剥夺休息。',
        detailEn:
          'A modern classroom replication should disclose burden, allow withdrawal, and limit repetitions; the game simulates syllables, timing, and savings rather than imposing prolonged fatigue.',
      },
    ],
    sourceIds: ['story-ebbinghaus-1885', 'story-apa-ethics'],
  },
  {
    id: 'experiment-piaget-conservation',
    personIds: ['jean-piaget'],
    subjects: ['development', 'experiment'],
    title: '杯子变高，水真的变多了吗？',
    titleEn: 'The Glass Grew Taller—Did the Water Increase?',
    summary:
      '皮亚杰用守恒任务考察儿童能否跨越知觉外观进行可逆推理；后续任务改造揭示，提问方式和转化意图也会改变表现。',
    summaryEn:
      'Piaget used conservation tasks to test whether children could reason reversibly beyond perceptual appearance; later task redesigns showed that wording and the apparent intention of the transformation also affect performance.',
    stages: [
      {
        phase: 'question',
        title: '问题：儿童何时理解数量不随外形改变？',
        titleEn:
          'Question: When Do Children Understand That Quantity Survives a Change in Appearance?',
        detail:
          '把等量液体从矮宽杯倒入高窄杯后，儿童能否判断数量仍相等，并解释为什么？',
        detailEn:
          'After equal liquid is poured from a short wide glass into a tall narrow one, can a child judge that the amount is unchanged and explain why?',
      },
      {
        phase: 'hypothesis',
        title: '假设：可逆运算支持守恒',
        titleEn: 'Hypothesis: Reversible Operations Support Conservation',
        detail:
          '达到具体运算水平的儿童更可能同时协调杯高与杯宽，并用可逆性或补偿解释守恒。',
        detailEn:
          'Children capable of concrete operations should better coordinate height and width and justify conservation through reversibility or compensation.',
      },
      {
        phase: 'operationalization',
        title: '操作化：判断加理由，而不只问“哪个更多”',
        titleEn:
          'Operationalization: Judgment Plus Reason, Not Just “Which Has More?”',
        detail:
          '先让儿童确认两杯等量，再公开完成转化；记录转化后的相等判断和理由，把“倒回去仍一样”等理由作为可逆思维证据。',
        detailEn:
          'Children first confirm equality, then watch the transformation; both the post-transformation judgment and justification are recorded, with “it would be the same if poured back” indexing reversibility.',
      },
      {
        phase: 'variables',
        title: '变量：年龄与转化情境不是同一种自变量',
        titleEn:
          'Variables: Age and Transformation Context Are Different Kinds of Predictors',
        detail:
          '年龄是被试变量，不能随机操纵；可操纵的是杯形、提问方式或转化是否显得故意。因变量为判断正确性和理由类型，液体初始量与展示过程需控制。',
        detailEn:
          'Age is a participant variable, not a randomized IV; manipulable factors include glass shape, wording, and whether the transformation appears intentional. DVs are judgment accuracy and justification, with starting amount and demonstration controlled.',
      },
      {
        phase: 'obstacle',
        title: '障碍：重复提问可能暗示第一次答案错了',
        titleEn:
          'Obstacle: Repeated Questions May Imply the First Answer Was Wrong',
        detail:
          '成人先问一次、倒水后再问一次，儿童可能把第二次提问理解为成人故意改变了数量，而非单纯测试逻辑。',
        detailEn:
          'When an adult asks once before and again after pouring, children may infer that the adult intentionally changed the amount rather than merely testing logic.',
      },
      {
        phase: 'solution',
        title: '办法：意外转化与中性提问拆开能力和任务需求',
        titleEn:
          'Solution: Accidental Transformation and Neutral Wording Separate Competence from Task Demand',
        detail:
          '后续研究让转化看似由“淘气熊”意外造成，或减少重复暗示并核查理由；儿童表现可改善，说明任务需求必须作为竞争解释。',
        detailEn:
          'Later work made the transformation appear accidental, for example through a “naughty teddy,” reduced repeated-question cues, and checked explanations; improved performance made task demand a necessary competing account.',
      },
      {
        phase: 'result',
        title: '结果：经典年龄差异存在，但并非只由逻辑结构决定',
        titleEn:
          'Result: Classic Age Differences Appear, but Logic Is Not the Only Determinant',
        detail:
          '年长儿童通常更稳定地作出守恒判断；改变语境和语言后，一些年幼儿童也能成功。',
        detailEn:
          'Older children usually conserve more consistently, yet some younger children succeed when context and language are redesigned.',
      },
      {
        phase: 'boundary',
        title: '边界：一道任务不能直接等同于整个认知阶段',
        titleEn: 'Boundary: One Task Is Not an Entire Cognitive Stage',
        detail:
          '液体、数量、长度等守恒任务难度不同；失败可能来自注意、语言、记忆或社会推断，成功也不证明所有具体运算均已形成。',
        detailEn:
          'Liquid, number, and length conservation differ in difficulty; failure may reflect attention, language, memory, or social inference, while success does not prove mastery of every concrete operation.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：取得监护同意和儿童同意，不把错误变成羞耻',
        titleEn:
          'Modern Reminder: Obtain Guardian Permission and Child Assent without Shaming Errors',
        detail:
          '真实研究须使用适龄说明、允许随时停止并保护影像与身份；游戏用虚构儿童角色演示，不给儿童贴“前运算、能力低”等标签。',
        detailEn:
          'Real studies require age-appropriate explanation, guardian permission, child assent, withdrawal rights, and privacy; the game uses fictional children and never turns a response into a stigmatizing ability label.',
      },
    ],
    sourceIds: [
      'story-piaget-archive',
      'story-conservation-accidents',
      'story-apa-ethics',
    ],
  },
  {
    id: 'experiment-bandura-bobo',
    personIds: ['albert-bandura'],
    subjects: ['social', 'development', 'education', 'experiment'],
    title: '孩子是在发泄，还是在模仿榜样？',
    titleEn: 'Are Children Venting, or Imitating a Model?',
    summary:
      '班杜拉的充气娃娃研究用榜样条件、性别条件和行为编码检验观察学习；关键设计难题是把一般唤醒与对特定榜样动作的模仿区分开。',
    summaryEn:
      'Bandura’s inflatable-doll study tested observational learning with model conditions, sex conditions, and coded behavior; its central design challenge was separating general arousal from imitation of specific modeled acts.',
    stages: [
      {
        phase: 'question',
        title: '问题：未获直接强化也会学会攻击行为吗？',
        titleEn:
          'Question: Can Aggression Be Learned without Direct Reinforcement?',
        detail:
          '儿童仅仅观察成人榜样攻击充气娃娃，之后是否会在榜样离场时重现这些行为？',
        detailEn:
          'After merely watching an adult attack an inflatable doll, will children reproduce those acts when the model is absent?',
      },
      {
        phase: 'hypothesis',
        title: '假设：攻击榜样提高匹配性模仿',
        titleEn: 'Hypothesis: An Aggressive Model Increases Matched Imitation',
        detail:
          '攻击榜样组应比非攻击榜样组和无榜样组表现出更多与示范相匹配的身体、言语攻击。',
        detailEn:
          'Children exposed to an aggressive model should show more physically and verbally matched aggression than nonaggressive-model and no-model controls.',
      },
      {
        phase: 'operationalization',
        title: '操作化：把特定示范动作预先写进编码表',
        titleEn:
          'Operationalization: Predefine Specific Modeled Acts in a Coding Sheet',
        detail:
          '榜样展示击打、锤击和特定攻击语句；观察阶段把行为区分为模仿性身体攻击、模仿性言语攻击以及非模仿攻击。',
        detailEn:
          'Models demonstrated hitting, mallet use, and distinctive aggressive phrases; observation codes separated imitative physical aggression, imitative verbal aggression, and nonimitative aggression.',
      },
      {
        phase: 'variables',
        title: '变量：榜样行为是主自变量，编码行为是因变量',
        titleEn: 'Variables: Model Behavior as the Main IV, Coded Acts as DVs',
        detail:
          '主要自变量为攻击榜样、非攻击榜样或无榜样，并考察榜样与儿童性别；因变量为各类行为频次。研究者按基线攻击性匹配分组，并控制场景、玩具和观察时长。',
        detailEn:
          'The main IV was aggressive, nonaggressive, or no model, with model and child sex also examined; DVs were coded behavior frequencies. Groups were matched on baseline aggression, with setting, toys, and exposure duration controlled.',
      },
      {
        phase: 'obstacle',
        title: '障碍：一般挫折或兴奋也可能增加攻击',
        titleEn:
          'Obstacle: General Frustration or Arousal Could Also Raise Aggression',
        detail:
          '如果只记录总攻击，儿童可能因新环境或玩具受限而更活跃，无法证明其学到了榜样的行为形式。',
        detailEn:
          'If only total aggression were counted, greater activity from a novel setting or restricted toys could be mistaken for learning the model’s behavioral form.',
      },
      {
        phase: 'solution',
        title: '办法：加入对照组并寻找榜样特有行为',
        titleEn: 'Solution: Add Controls and Look for Model-Specific Acts',
        detail:
          '非攻击榜样与无榜样组提供基线；独特动作和语句使“与示范匹配的模仿”可与一般攻击分开计分，并用独立观察者核对编码。',
        detailEn:
          'Nonaggressive-model and no-model groups supplied baselines; distinctive acts and phrases separated matched imitation from general aggression, with independent observers checking the coding.',
      },
      {
        phase: 'result',
        title: '结果：儿童重现了榜样特有的攻击形式',
        titleEn: 'Result: Children Reproduced Model-Specific Aggression',
        detail:
          '攻击榜样组表现出更多模仿性攻击，证明直接奖赏并非获得此类行为的必要条件。',
        detailEn:
          'The aggressive-model group displayed more imitative aggression, showing that direct reward was not necessary for acquiring these acts.',
      },
      {
        phase: 'boundary',
        title: '边界：短时玩具室行为不等于长期现实暴力',
        titleEn:
          'Boundary: Brief Playroom Behavior Is Not Long-Term Real-World Violence',
        detail:
          '结果支持观察学习和即时表现，却不能单独推出稳定人格、长期伤害行为或所有媒介暴力效应；充气娃娃也天然邀请击打。',
        detailEn:
          'The findings support observational learning and immediate performance, but do not by themselves establish stable personality, long-term harmful violence, or every media-violence effect; the inflatable doll also affords hitting.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：不再让儿童接受可模仿的攻击示范',
        titleEn:
          'Modern Reminder: Do Not Re-expose Children to Imitable Aggression',
        detail:
          '儿童、诱导攻击和缺乏长期去影响程序带来伦理争议；游戏只让玩家审查历史录像脚本和匿名计数，不招募儿童复演。',
        detailEn:
          'Children, induced aggression, and limited long-term debriefing create ethical concerns; the game uses scripted archival scenes and anonymous counts rather than recruiting children to reenact the study.',
      },
    ],
    sourceIds: ['story-bandura-bobo-1961', 'story-apa-ethics'],
  },
  {
    id: 'experiment-festinger-forced-compliance',
    personIds: ['leon-festinger'],
    subjects: ['social', 'experiment'],
    title: '一美元为何比二十美元更能改变态度？',
    titleEn: 'Why Did One Dollar Change Attitudes More Than Twenty?',
    summary:
      '费斯廷格与卡尔史密斯让参与者为枯燥任务说好话，以一美元与二十美元制造不同的外部理由；玩家要识别随机分派、欺骗、隐藏测量与竞争解释。',
    summaryEn:
      'Festinger and Carlsmith had participants praise a dull task, using one versus twenty dollars to vary external justification; players must identify assignment, deception, concealed measurement, and competing explanations.',
    stages: [
      {
        phase: 'question',
        title: '问题：说了违心的话后，报酬怎样影响私下态度？',
        titleEn:
          'Question: After Counterattitudinal Advocacy, How Does Payment Affect Private Attitude?',
        detail:
          '完成枯燥任务并向下一位“参与者”说任务有趣后，人会不会改变自己对任务的评价？',
        detailEn:
          'After completing dull tasks and telling the next “participant” that they were interesting, would people alter their own evaluation?',
      },
      {
        phase: 'hypothesis',
        title: '假设：理由不足时更需要调整态度',
        titleEn:
          'Hypothesis: Insufficient Justification Produces More Attitude Change',
        detail:
          '一美元不足以充分解释反态度言行，因而比二十美元产生更大失调和更正面的后测评价。',
        detailEn:
          'One dollar supplies insufficient justification for the counterattitudinal act, so it should create more dissonance and a more favorable later rating than twenty dollars.',
      },
      {
        phase: 'operationalization',
        title: '操作化：枯燥任务、诱导陈述与分离的后测',
        titleEn:
          'Operationalization: Dull Tasks, Induced Advocacy, and a Separate Posttest',
        detail:
          '参与者长时间转动线轴和木钉，再领取一或二十美元说服等候者；随后由看似独立的访谈者询问任务有趣程度。',
        detailEn:
          'Participants spent a long period turning spools and pegs, received one or twenty dollars to persuade a waiting person, and were then asked by an apparently separate interviewer how enjoyable the task was.',
      },
      {
        phase: 'variables',
        title: '变量：报酬条件是自变量，私下评价是因变量',
        titleEn: 'Variables: Payment Condition as IV, Private Rating as DV',
        detail:
          '自变量为一美元、二十美元或未进行诱导陈述的控制条件；因变量包括任务有趣程度等评价。任务时长、说服脚本和后测问题保持一致。',
        detailEn:
          'The IV was one dollar, twenty dollars, or a no-advocacy control; DVs included enjoyment ratings. Task duration, advocacy script, and posttest questions were standardized.',
      },
      {
        phase: 'obstacle',
        title: '障碍：参与者可能只是在迎合实验者',
        titleEn:
          'Obstacle: Participants May Simply Comply with the Experimenter',
        detail:
          '如果同一实验者直接询问态度，正面回答可能是角色扮演、礼貌或猜到目的，而非内在态度变化。',
        detailEn:
          'If the same experimenter asks for the rating, a positive answer may reflect role-playing, politeness, or hypothesis guessing rather than internal attitude change.',
      },
      {
        phase: 'solution',
        title: '办法：分派条件、固定脚本并伪装独立测量',
        titleEn:
          'Solution: Assign Conditions, Standardize the Script, and Disguise the Measure as Independent',
        detail:
          '研究把报酬设为条件、用统一说法诱导行为，并让后测看起来与前一任务分离；控制组帮助估计任务原本评价。',
        detailEn:
          'The study treated payment as an assigned condition, standardized the advocacy request, and made the posttest appear separate; the control group estimated the task’s baseline evaluation.',
      },
      {
        phase: 'result',
        title: '结果：一美元组比二十美元组评价更正面',
        titleEn: 'Result: The One-Dollar Group Rated the Task More Favorably',
        detail:
          '较小报酬没有带来较小态度变化，反而与“不足理由”预测一致；这是失调理论的经典反直觉证据。',
        detailEn:
          'The smaller payment did not produce smaller attitude change; instead, the pattern matched insufficient justification, becoming classic counterintuitive evidence for dissonance theory.',
      },
      {
        phase: 'boundary',
        title: '边界：结果不是失调机制的唯一证明',
        titleEn:
          'Boundary: The Result Does Not Uniquely Prove a Dissonance Mechanism',
        detail:
          '选择感、原有态度、公开承诺和后果会调节效应；贝姆的自我知觉理论能解释部分相同模式，故结果与机制不能画等号。',
        detailEn:
          'Choice, prior attitude, public commitment, and consequences moderate the effect; Bem’s self-perception account can explain part of the same pattern, so outcome and mechanism are not identical.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：欺骗必须必要、低风险并充分事后说明',
        titleEn:
          'Modern Reminder: Deception Must Be Necessary, Low-Risk, and Fully Debriefed',
        detail:
          '虚构等候者和隐藏真实目的属于欺骗；现代研究需伦理审查、允许撤回数据并及时解释。游戏明确标记历史欺骗，只模拟决策。',
        detailEn:
          'The fictitious waiting participant and concealed purpose are deception; modern work requires review, data-withdrawal options, and prompt debriefing. The game labels the historical deception and simulates only the decision.',
      },
    ],
    sourceIds: [
      'story-festinger-carlsmith-1959',
      'story-bem-1967',
      'story-apa-ethics',
    ],
  },
  {
    id: 'experiment-fechner-thresholds',
    personIds: ['gustav-fechner'],
    subjects: ['general', 'experiment'],
    title: '看不见的感觉，怎样用选择测出来？',
    titleEn: 'How Can an Invisible Sensation Be Measured through Choices?',
    summary:
      '费希纳把物理刺激与主观判断接到同一张表上，用极限法、恒定刺激法和调整法估计阈限；故事把顺序误差与抽样精度做成校准谜题。',
    summaryEn:
      'Fechner connected physical stimulation to subjective judgment using limits, constant stimuli, and adjustment to estimate thresholds; the story turns order error and sampling precision into calibration puzzles.',
    stages: [
      {
        phase: 'question',
        title: '问题：主观感觉能否有客观量尺？',
        titleEn: 'Question: Can Subjective Sensation Have an Objective Scale?',
        detail:
          '在重量、亮度或声音逐渐变化时，观察者最小能可靠觉察多大差异？感觉增长与物理量增长有何关系？',
        detailEn:
          'As weight, brightness, or sound changes, what is the smallest difference an observer can reliably detect, and how does sensation growth relate to physical growth?',
      },
      {
        phase: 'hypothesis',
        title: '假设：差别阈限与基准刺激成比例',
        titleEn:
          'Hypothesis: The Difference Threshold Scales with the Standard',
        detail:
          '在适用范围内，恰可觉差与标准刺激之比近似恒定；把连续恰可觉差累加，可建立费希纳的对数关系。',
        detailEn:
          'Within an applicable range, the just-noticeable difference should be an approximately constant proportion of the standard; summing successive JNDs yields Fechner’s logarithmic relation.',
      },
      {
        phase: 'operationalization',
        title: '操作化：把“感觉到”改写成可重复选择',
        titleEn:
          'Operationalization: Translate “Feeling” into Repeatable Choices',
        detail:
          '观察者在标准与比较刺激间报告更强、相同或刚能觉察；极限法找转折点，恒定刺激法估计反应概率曲线，调整法让观察者自行匹配。',
        detailEn:
          'Observers report whether comparison and standard are stronger, equal, or just discriminable; limits locate transition points, constant stimuli estimate a response curve, and adjustment lets observers match the stimulus.',
      },
      {
        phase: 'variables',
        title: '变量：物理强度是自变量，判断概率或阈限是因变量',
        titleEn:
          'Variables: Physical Intensity as IV, Judgment Probability or Threshold as DV',
        detail:
          '自变量是比较刺激的强度或与标准的差值；因变量为“更强”反应比例、主观相等点或差别阈限。标准刺激、环境、时长与距离需固定。',
        detailEn:
          'The IV is comparison intensity or its difference from the standard; DVs are the proportion of “stronger” responses, point of subjective equality, or difference threshold. Standard, environment, duration, and distance require control.',
      },
      {
        phase: 'obstacle',
        title: '障碍：知道刺激在变强会产生预期与习惯误差',
        titleEn:
          'Obstacle: Knowing the Direction Creates Expectation and Habituation Errors',
        detail:
          '只做递增系列时，观察者可能等得太久才报告变化；只做递减系列又可能因预期过早报告，阈限因顺序而偏移。',
        detailEn:
          'In ascending-only series, observers may wait too long to report a change; in descending-only series, expectation may prompt an early response, shifting the threshold with order.',
      },
      {
        phase: 'solution',
        title: '办法：交替方向、随机呈现并重复估计',
        titleEn:
          'Solution: Alternate Direction, Randomize Presentation, and Repeat Estimates',
        detail:
          '极限法交替递增与递减并平均转折点；恒定刺激法随机化多个强度、重复呈现，以反应比例拟合阈限并检查遗漏与误报。',
        detailEn:
          'The method of limits alternates ascending and descending series and averages transitions; constant stimuli randomize repeated intensities to fit a threshold from response proportions and inspect misses and false alarms.',
      },
      {
        phase: 'result',
        title: '结果：物理量与感觉之间出现可检验函数',
        titleEn:
          'Result: A Testable Function Links Physical Magnitude and Sensation',
        detail:
          '韦伯比例和费希纳对数关系在若干感觉范围提供近似描述，使阈限与心理量表进入实验研究。',
        detailEn:
          'Weber proportions and Fechner’s logarithmic relation approximately described several sensory ranges, bringing thresholds and psychological scaling into experimental study.',
      },
      {
        phase: 'boundary',
        title: '边界：不是所有感觉和强度范围都服从对数律',
        titleEn:
          'Boundary: Not Every Modality or Intensity Range Follows a Log Law',
        detail:
          '阈限受适应、背景和判定标准影响；史蒂文斯的直接数量估计支持幂律等竞争描述，不能把费希纳定律当成无条件真理。',
        detailEn:
          'Thresholds depend on adaptation, context, and decision criterion; Stevens’s direct magnitude estimation supported competing power functions, so Fechner’s law is not unconditional.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：限定安全刺激并保护感觉差异隐私',
        titleEn:
          'Modern Reminder: Cap Stimuli Safely and Protect Sensory-Difference Privacy',
        detail:
          '声音、亮度、压力和重量必须低于安全上限并允许立即停止；游戏用屏幕与虚拟砝码校准，不把表现解释为医学诊断。',
        detailEn:
          'Sound, light, pressure, and weight must remain below safety limits with immediate withdrawal available; the game uses screen and virtual-weight calibration and never treats performance as a medical diagnosis.',
      },
    ],
    sourceIds: [
      'story-apa-fechner-law',
      'story-ncbi-psychophysics-history',
      'story-ncbi-psychophysical-methods',
      'story-stevens-1957',
    ],
  },
  {
    id: 'experiment-spearman-positive-manifold',
    personIds: ['charles-spearman'],
    subjects: ['statistics', 'measurement'],
    title: '没有操纵的研究，如何从相关矩阵寻找共同因素？',
    titleEn:
      'How Can a Non-Manipulative Study Find a Common Factor in a Correlation Matrix?',
    summary:
      '斯皮尔曼比较多种能力测验和外部评定的相关结构，据正相关汇聚提出一般因素与特殊因素；这是测量性的相关研究，绝不是操纵自变量的因果实验。',
    summaryEn:
      'Spearman compared correlations among ability measures and external ratings, using their positive convergence to propose general and specific factors; this is correlational measurement research, never a causal experiment with a manipulated IV.',
    stages: [
      {
        phase: 'question',
        title: '问题：不同心智能力为何往往一起提高？',
        titleEn:
          'Question: Why Do Different Mental Abilities Tend to Rise Together?',
        detail:
          '学校成绩、感觉辨别和多种能力任务之间的正相关，能否由某种共同成分与各任务特有成分共同解释？',
        detailEn:
          'Can positive correlations among school performance, sensory discrimination, and ability tasks be explained by a common component plus task-specific components?',
      },
      {
        phase: 'hypothesis',
        title: '假设：每项成绩含一般因素与特殊因素',
        titleEn: 'Hypothesis: Each Score Contains General and Specific Factors',
        detail:
          '若存在一般因素g，多种任务应形成正相关汇聚；扣除共同成分后，剩余差异主要反映任务特殊因素s与误差。',
        detailEn:
          'If a general factor g exists, diverse tasks should form a positive manifold; after the common component is removed, remaining variance should mainly reflect task-specific factors s and error.',
      },
      {
        phase: 'operationalization',
        title: '操作化：测验分数、等级评定与相关矩阵',
        titleEn:
          'Operationalization: Test Scores, Ratings, and a Correlation Matrix',
        detail:
          '让同一批人完成多项任务，收集分数和独立评定，计算成对相关并检查相关结构能否由共同因素近似重建。',
        detailEn:
          'The same participants complete multiple tasks; scores and independent ratings are collected, pairwise correlations computed, and the structure tested for approximate reconstruction by a common factor.',
      },
      {
        phase: 'variables',
        title: '变量：没有被操纵的自变量，也没有随机实验条件',
        titleEn:
          'Variables: No Manipulated IV and No Randomized Experimental Conditions',
        detail:
          '任务分数、年龄、教育机会等都是测得的变量或协变量；核心结果是相关和因子载荷。此设计只能描述协变结构，不能把任何变量认定为g的原因。',
        detailEn:
          'Task scores, age, and educational opportunity are measured variables or covariates; correlations and factor loadings are the central outcomes. The design describes covariance and cannot identify any variable as a cause of g.',
      },
      {
        phase: 'obstacle',
        title: '障碍：测量误差与共同背景会扭曲相关',
        titleEn:
          'Obstacle: Measurement Error and Shared Background Distort Correlations',
        detail:
          '低信度会压低相关；相似题型、练习、年龄、学校机会或文化语言背景又可能人为抬高某些相关。',
        detailEn:
          'Low reliability attenuates correlations, while similar item formats, practice, age, schooling opportunity, or cultural and language background can inflate selected relationships.',
      },
      {
        phase: 'solution',
        title: '办法：校正信度、扩大任务取样并比较竞争模型',
        titleEn:
          'Solution: Correct for Reliability, Broaden Task Sampling, and Compare Rival Models',
        detail:
          '使用可重复测量估计信度并审慎校正衰减，记录背景变量，扩大能力与样本范围，再把单一g模型与多因素、层级模型比较。',
        detailEn:
          'Estimate reliability with repeatable measures and correct attenuation cautiously, record background variables, broaden task and sample coverage, and compare a single-g account with multifactor and hierarchical models.',
      },
      {
        phase: 'result',
        title: '结果：正相关汇聚支持共同因素的统计表征',
        titleEn:
          'Result: The Positive Manifold Supports a Statistical Common Factor',
        detail:
          '斯皮尔曼据多项任务的共同变异提出g，并以s表示任务特殊性；这一结果奠定因素分析与智力结构争论的重要起点。',
        detailEn:
          'From common variance across tasks, Spearman proposed g and used s for task specificity, establishing an important starting point for factor analysis and debates over intelligence structure.',
      },
      {
        phase: 'boundary',
        title: '边界：因素是模型表征，不是已定位的单一器官或因果实体',
        titleEn:
          'Boundary: A Factor Is a Model Representation, Not a Located Organ or Proven Cause',
        detail:
          '因子数和含义随任务取样、样本、方法与旋转而变；早期样本和评定有限，瑟斯顿及后来的层级模型能给出不同但部分兼容的结构。',
        detailEn:
          'Factor number and meaning vary with task sampling, population, method, and rotation; early samples and ratings were limited, and Thurstonean or later hierarchical models offer different yet partly compatible structures.',
      },
      {
        phase: 'ethics',
        title: '现代提醒：测验分数不能脱离机会、公平与不确定性使用',
        titleEn:
          'Modern Reminder: Scores Must Be Used with Opportunity, Fairness, and Uncertainty in View',
        detail:
          '历史术语和群体比较需放回时代语境并明确批判；现代评估须验证适用人群、保护数据、报告误差，绝不能凭相关分数给人贴固定价值标签。',
        detailEn:
          'Historical terminology and group comparisons require contextual critique; modern assessment must validate populations, protect data, report error, and never turn correlational scores into fixed labels of human worth.',
      },
    ],
    sourceIds: [
      'story-spearman-1904',
      'story-ncbi-intelligence-assessment',
      'story-apa-ethics',
    ],
  },
];
