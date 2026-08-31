import type {
  QuestionType,
  QuestionVariant,
  SubjectKey,
} from '@/src/types/content';
import { KNOWLEDGE_POINT_EN, KNOWLEDGE_POINT_ZH, QUESTION_EN } from './bilingual';

interface VariantSeed {
  type: QuestionType;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  misconceptionTag: string;
  sourceUrl: string;
}

interface NodeSeed {
  id: string;
  knowledgePointId: string;
  personId: string;
  subjects: SubjectKey[];
  relationId: string;
  variants: VariantSeed[];
}

const nodes: NodeSeed[] = [
  {
    id: 'node-01',
    knowledgePointId: 'memory.ebbinghaus.savings-method',
    personId: 'hermann-ebbinghaus',
    subjects: ['general', 'experiment'],
    relationId: 'rel-ebbinghaus-savings',
    variants: [
      {
        type: 'theory-attribution',
        prompt:
          '第一次学会一组材料后，隔一段时间重新学习，以第二次比第一次少用的时间或次数表示保持量。这是哪种方法？',
        options: ['节省法（重学法）', '再认法', '自由回忆法', '部分报告法'],
        answerIndex: 0,
        explanation: '艾宾浩斯用初学与重学所需时间或次数之差来量化保持，又称重学法。',
        misconceptionTag: 'savings-vs-recall',
        sourceUrl: 'https://dictionary.apa.org/savings-method',
      },
      {
        type: 'calculation',
        prompt:
          '某材料初学至标准需要120秒，隔日重学至同一标准需要72秒。按节省率计算，保持量是多少？',
        options: ['20%', '40%', '60%', '72%'],
        answerIndex: 1,
        explanation: '节省率＝(120−72)÷120＝40%。',
        misconceptionTag: 'savings-formula-direction',
        sourceUrl: 'https://psychclassics.yorku.ca/Ebbinghaus/memory7.htm',
      },
      {
        type: 'scenario-judgment',
        prompt:
          '一名被试说自己完全想不起昨天的无意义音节，但今天重学同一组音节明显更快。最恰当的解释是？',
        options: [
          '节省法仍检测到保持',
          '材料已被完全遗忘',
          '这只能证明再认发生',
          '重学变快必定来自智力提高',
        ],
        answerIndex: 0,
        explanation: '即使不能有意识回忆，重学时间缩短仍可表现先前学习留下的保持量。',
        misconceptionTag: 'no-recall-equals-no-memory',
        sourceUrl: 'https://dictionary.apa.org/savings-method',
      },
    ],
  },
  {
    id: 'node-02',
    knowledgePointId: 'memory.ebbinghaus.nonsense-syllables-forgetting',
    personId: 'hermann-ebbinghaus',
    subjects: ['general', 'experiment'],
    relationId: 'rel-ebbinghaus-forgetting',
    variants: [
      {
        type: 'experiment-design',
        prompt: '艾宾浩斯在记忆研究中使用无意义音节，最主要的设计目的是什么？',
        options: [
          '尽量减少既有意义和联想的影响',
          '使材料更接近真实文章',
          '让所有音节绝对等难',
          '专门测量语音辨别阈限',
        ],
        answerIndex: 0,
        explanation:
          '无意义音节旨在提高材料控制程度，降低既有知识和语义联系的干扰，但不意味着每个音节绝对等难。',
        misconceptionTag: 'nonsense-syllables-purpose',
        sourceUrl:
          'https://www.psychologicalscience.org/observer/recalling-psychologys-past-the-memory-drum',
      },
      {
        type: 'curve-interpretation',
        prompt: '按艾宾浩斯的经典结果，未经复习时遗忘随时间变化的总体特点是？',
        options: ['先快后慢', '先慢后快', '始终匀速', '保持量先下降后自动恢复'],
        answerIndex: 0,
        explanation: '保持量在学习后的早期下降较快，随后下降速度趋缓。',
        misconceptionTag: 'forgetting-linear',
        sourceUrl: 'https://psychclassics.yorku.ca/Ebbinghaus/memory7.htm',
      },
      {
        type: 'variable-control',
        prompt: '要复现艾宾浩斯式遗忘研究，下列哪组变量最符合其核心设计？',
        options: [
          '自变量为保持间隔，因变量为重学节省量',
          '自变量为节省量，因变量为保持间隔',
          '自变量为智力，因变量为人格',
          '自变量为再认选项数，因变量为感觉阈限',
        ],
        answerIndex: 0,
        explanation: '研究改变学习与重学之间的时间，并通过重学节省量考察保持。',
        misconceptionTag: 'forgetting-iv-dv-reversal',
        sourceUrl: 'https://psychclassics.yorku.ca/Ebbinghaus/memory7.htm',
      },
    ],
  },
  {
    id: 'node-03',
    knowledgePointId: 'development.piaget.four-stages',
    personId: 'jean-piaget',
    subjects: ['development'],
    relationId: 'rel-piaget-stages',
    variants: [
      {
        type: 'sequence',
        prompt: '皮亚杰认知发展阶段的正确顺序是？',
        options: [
          '感知运动—前运算—具体运算—形式运算',
          '前运算—感知运动—形式运算—具体运算',
          '感知运动—具体运算—前运算—形式运算',
          '具体运算—前运算—感知运动—形式运算',
        ],
        answerIndex: 0,
        explanation: '四阶段依次为感知运动、前运算、具体运算和形式运算。',
        misconceptionTag: 'piaget-stage-order',
        sourceUrl: 'https://openstax.org/books/psychology-2e/pages/9-2-lifespan-theories',
      },
      {
        type: 'scenario-judgment',
        prompt: '一个9岁儿童能理解液体换到不同形状的杯子后体积不变。按皮亚杰理论，这最符合哪个阶段？',
        options: ['感知运动阶段', '前运算阶段', '具体运算阶段', '形式运算阶段'],
        answerIndex: 2,
        explanation: '守恒是具体运算阶段的典型能力。',
        misconceptionTag: 'conservation-stage',
        sourceUrl: 'https://openstax.org/books/psychology-2e/pages/9-2-lifespan-theories',
      },
      {
        type: 'scenario-judgment',
        prompt: '学生能系统检验“如果改变摩擦力，摆动时间会怎样”的多个假设。这种抽象假设推理最符合？',
        options: ['感知运动阶段', '前运算阶段', '具体运算阶段', '形式运算阶段'],
        answerIndex: 3,
        explanation: '形式运算阶段能够进行抽象、假设和系统推理。',
        misconceptionTag: 'formal-vs-concrete-operation',
        sourceUrl: 'https://openstax.org/books/psychology-2e/pages/9-2-lifespan-theories',
      },
    ],
  },
  {
    id: 'node-04',
    knowledgePointId: 'development.piaget.assimilation-accommodation',
    personId: 'jean-piaget',
    subjects: ['development', 'education'],
    relationId: 'rel-piaget-assimilation',
    variants: [
      {
        type: 'scenario-judgment',
        prompt: '儿童已经有“鸟”的图式，第一次看到麻雀时直接把它纳入原有鸟类图式。这属于？',
        options: ['同化', '顺应', '消退', '替代强化'],
        answerIndex: 0,
        explanation: '新信息可以按原有图式理解时，发生同化。',
        misconceptionTag: 'assimilation-vs-accommodation',
        sourceUrl:
          'https://openstax.org/books/lifespan-development/pages/3-4-cognition-and-memory-in-infants-and-toddlers',
      },
      {
        type: 'scenario-judgment',
        prompt: '儿童原以为“所有鸟都会飞”，看到企鹅后修改了自己的鸟类图式。这属于？',
        options: ['同化', '顺应', '泛化', '负强化'],
        answerIndex: 1,
        explanation: '当新信息不能纳入旧图式而必须修改或新建图式时，发生顺应。',
        misconceptionTag: 'accommodation-means-acceptance',
        sourceUrl:
          'https://openstax.org/books/lifespan-development/pages/3-4-cognition-and-memory-in-infants-and-toddlers',
      },
      {
        type: 'concept-matching',
        prompt: '下列关于同化和顺应的配对，哪项正确？',
        options: [
          '同化：以旧图式解释新经验；顺应：修改图式适应新经验',
          '同化：修改图式；顺应：拒绝新经验',
          '同化：行为强化；顺应：行为消退',
          '同化：形成条件反射；顺应：解除条件反射',
        ],
        answerIndex: 0,
        explanation: '两者都是皮亚杰所说的图式适应过程，但改变图式的是顺应。',
        misconceptionTag: 'assimilation-accommodation-definition-swap',
        sourceUrl: 'https://openstax.org/books/psychology-2e/pages/9-2-lifespan-theories',
      },
    ],
  },
  {
    id: 'node-05',
    knowledgePointId: 'development.piaget.conservation-centration',
    personId: 'jean-piaget',
    subjects: ['development', 'experiment'],
    relationId: 'rel-piaget-conservation',
    variants: [
      {
        type: 'scenario-judgment',
        prompt: '两杯水原本一样多，把其中一杯倒入细高杯后，儿童仍判断水量相等。这说明儿童掌握了？',
        options: ['客体永久性', '守恒', '自我效能', '社会比较'],
        answerIndex: 1,
        explanation: '守恒是理解物质外观改变并不改变其质量、数量或体积。',
        misconceptionTag: 'conservation-vs-object-permanence',
        sourceUrl:
          'https://openstax.org/books/lifespan-development/pages/5-3-cognition-in-early-childhood',
      },
      {
        type: 'misconception-diagnosis',
        prompt: '儿童只注意细高杯中液面的高度，因此判断它的水更多。该错误最直接体现了？',
        options: ['集中化', '去中心化', '延迟模仿', '形式推理'],
        answerIndex: 0,
        explanation: '集中化指前运算儿童只关注情境的一个显著维度，如液面高度。',
        misconceptionTag: 'centration-vs-egocentrism',
        sourceUrl:
          'https://openstax.org/books/lifespan-development/pages/5-3-cognition-in-early-childhood',
      },
      {
        type: 'variable-control',
        prompt: '液体守恒任务中，研究者应采用哪种操作才能检验儿童是否受外观变化影响？',
        options: [
          '保持液体实际体积不变，只改变容器形状',
          '同时改变液体体积和容器形状',
          '保持容器不变并增加液体',
          '只询问儿童喜欢哪只杯子',
        ],
        answerIndex: 0,
        explanation: '只有保持实际数量不变而改变外观，才能把守恒判断与真实数量变化区分开。',
        misconceptionTag: 'conservation-confounded-design',
        sourceUrl:
          'https://openstax.org/books/lifespan-development/pages/5-3-cognition-in-early-childhood',
      },
    ],
  },
  {
    id: 'node-06',
    knowledgePointId: 'education.bandura.modeling-processes',
    personId: 'albert-bandura',
    subjects: ['education', 'general'],
    relationId: 'rel-bandura-modeling',
    variants: [
      {
        type: 'sequence',
        prompt: '班杜拉所述观察学习过程的正确顺序是？',
        options: [
          '注意—保持—动作再现—动机',
          '保持—注意—动机—动作再现',
          '动机—强化—消退—泛化',
          '注意—顺应—保持—守恒',
        ],
        answerIndex: 0,
        explanation: '成功的榜样学习依次涉及注意、保持、动作再现和动机。',
        misconceptionTag: 'modeling-process-order',
        sourceUrl:
          'https://openstax.org/books/psychology-2e/pages/6-4-observational-learning-modeling',
      },
      {
        type: 'scenario-judgment',
        prompt: '学生看懂并记住了体操动作，却因尚未掌握身体协调而无法做出来。主要受阻的是？',
        options: ['注意过程', '保持过程', '动作再现过程', '动机过程'],
        answerIndex: 2,
        explanation: '已经注意并记住，但缺乏执行行为的能力，问题位于动作再现。',
        misconceptionTag: 'retention-vs-reproduction',
        sourceUrl:
          'https://openstax.org/books/psychology-2e/pages/6-4-observational-learning-modeling',
      },
      {
        type: 'scenario-judgment',
        prompt: '儿童看到榜样因整理房间受到表扬，随后更愿意模仿整理行为。该信息主要影响观察学习的哪个过程？',
        options: ['注意；刺激泛化', '保持；反应消退', '动机；替代性强化', '动作再现；经典条件作用'],
        answerIndex: 2,
        explanation: '看到榜样受到奖励会通过替代性强化提高模仿动机。',
        misconceptionTag: 'vicarious-reinforcement-is-direct',
        sourceUrl:
          'https://openstax.org/books/psychology-2e/pages/6-4-observational-learning-modeling',
      },
    ],
  },
  {
    id: 'node-07',
    knowledgePointId: 'experiment.bandura.bobo-doll',
    personId: 'albert-bandura',
    subjects: ['experiment', 'education', 'social'],
    relationId: 'rel-bandura-bobo',
    variants: [
      {
        type: 'researcher-attribution',
        prompt: '1961年《通过模仿攻击性榜样传递攻击行为》的署名研究者是？',
        options: [
          'Albert Bandura、Dorothea Ross、Sheila Ross',
          'Albert Bandura一人',
          'Leon Festinger、James Carlsmith',
          'Jean Piaget、Bärbel Inhelder',
        ],
        answerIndex: 0,
        explanation: '经典研究由班杜拉、Dorothea Ross 和 Sheila Ross 共同完成，不能删去两位 Ross。',
        misconceptionTag: 'bobo-bandura-only',
        sourceUrl: 'https://doi.org/10.1037/h0045925',
      },
      {
        type: 'variable-control',
        prompt: '在1961年波波玩偶研究的核心比较中，哪组自变量和因变量最恰当？',
        options: [
          '自变量为榜样条件，因变量为儿童随后表现的攻击行为',
          '自变量为儿童攻击行为，因变量为榜样条件',
          '自变量为智力分数，因变量为记忆节省率',
          '自变量为感觉阈限，因变量为社会比较',
        ],
        answerIndex: 0,
        explanation: '研究操纵榜样条件，随后记录儿童的模仿性等攻击行为。',
        misconceptionTag: 'bobo-iv-dv-reversal',
        sourceUrl: 'https://doi.org/10.1037/h0045925',
      },
      {
        type: 'evidence-interpretation',
        prompt: '对1961年波波玩偶实验结果最谨慎、准确的概括是？',
        options: [
          '观察攻击性成人榜样的儿童在后续实验情境中表现出更多类似攻击行为',
          '任何观看攻击行为的儿童终生都会暴力',
          '实验仅说明直接奖励才能产生学习',
          '研究证明遗传对攻击行为没有作用',
        ],
        answerIndex: 0,
        explanation: '实验支持观察和模仿影响行为，不能推出必然、终生或排除其他因素的结论。',
        misconceptionTag: 'bobo-overgeneralization',
        sourceUrl: 'https://doi.org/10.1037/h0045925',
      },
    ],
  },
  {
    id: 'node-08',
    knowledgePointId: 'education.bandura.self-efficacy',
    personId: 'albert-bandura',
    subjects: ['education', 'general'],
    relationId: 'rel-bandura-efficacy',
    variants: [
      {
        type: 'concept-definition',
        prompt: '班杜拉所说的自我效能最接近哪一种判断？',
        options: [
          '我相信自己能完成这项具体任务',
          '我总体上是一个有价值的人',
          '完成任务一定会得到奖励',
          '我的实际智力高于所有同伴',
        ],
        answerIndex: 0,
        explanation: '自我效能是个体对自己在特定情境中执行行为或达成结果能力的主观判断。',
        misconceptionTag: 'self-efficacy-vs-self-esteem',
        sourceUrl: 'https://dictionary.apa.org/self-efficacy',
      },
      {
        type: 'concept-exclusion',
        prompt: '下列哪项不属于班杜拉1977年列出的自我效能信息来源？',
        options: ['亲身成败经验', '替代性经验', '言语劝说', '固定的先天智力等级'],
        answerIndex: 3,
        explanation: '成败经验、替代经验、言语劝说和生理状态等是效能信息来源。',
        misconceptionTag: 'self-efficacy-source',
        sourceUrl: 'https://doi.org/10.1037/0033-295X.84.2.191',
      },
      {
        type: 'scenario-judgment',
        prompt: '两名能力相近的学生面对难题时，高自我效能学生更可能表现出什么？',
        options: [
          '更愿意开始并投入努力，受挫后坚持更久',
          '无需练习便保证成功',
          '只提高自尊而不影响行动',
          '自动降低任务难度',
        ],
        answerIndex: 0,
        explanation: '效能预期会影响行为是否启动、努力量以及面对障碍时的坚持。',
        misconceptionTag: 'self-efficacy-guarantees-outcome',
        sourceUrl: 'https://doi.org/10.1037/0033-295X.84.2.191',
      },
    ],
  },
  {
    id: 'node-09',
    knowledgePointId: 'social.festinger.cognitive-dissonance',
    personId: 'leon-festinger',
    subjects: ['social'],
    relationId: 'rel-festinger-dissonance',
    variants: [
      {
        type: 'scenario-judgment',
        prompt: '一个人相信吸烟危害健康，却仍持续吸烟，并因信念与行为冲突感到不适。该状态最符合？',
        options: ['认知失调', '社会助长', '去个体化', '感觉适应'],
        answerIndex: 0,
        explanation: '认知、态度或行为不一致所产生的不适状态称为认知失调。',
        misconceptionTag: 'dissonance-vs-being-wrong',
        sourceUrl: 'https://dictionary.apa.org/cognitive-dissonance-theory',
      },
      {
        type: 'theory-attribution',
        prompt: '认知失调理论最初由谁提出？',
        options: ['Leon Festinger', 'Albert Bandura', 'Jean Piaget', 'Charles Spearman'],
        answerIndex: 0,
        explanation: '费斯廷格提出认知失调理论，后续学者发展了不同变式与替代理论。',
        misconceptionTag: 'dissonance-theorist',
        sourceUrl: 'https://dictionary.apa.org/cognitive-dissonance-theory',
      },
      {
        type: 'scenario-judgment',
        prompt: '学生一方面认为“诚实很重要”，另一方面考试作弊。哪种行为最直接通过恢复信念与行为的一致来降低失调？',
        options: [
          '停止作弊并按规则考试',
          '同时维持两种冲突认知且不作改变',
          '增加与考试无关的娱乐时间',
          '改用另一支笔答题',
        ],
        answerIndex: 0,
        explanation: '改变冲突行为，使其与原有信念一致，是降低失调的直接方式。',
        misconceptionTag: 'dissonance-reduction-irrelevant-action',
        sourceUrl: 'https://openstax.org/books/psychology-2e/pages/12-3-attitudes-and-persuasion',
      },
    ],
  },
  {
    id: 'node-10',
    knowledgePointId: 'social.festinger.forced-compliance',
    personId: 'leon-festinger',
    subjects: ['social', 'experiment'],
    relationId: 'rel-festinger-compliance',
    variants: [
      {
        type: 'result-interpretation',
        prompt:
          '在费斯廷格与卡尔史密斯的经典实验中，被试完成枯燥任务后受雇告诉他人“任务很有趣”。哪一组后来通常把任务评价得更有趣？',
        options: ['获得1美元的组', '获得20美元的组', '未说谎的控制组必然最高', '两组完全相同'],
        answerIndex: 0,
        explanation: '1美元不足以充分外部解释说谎行为，因而产生更大失调和更多态度改变。',
        misconceptionTag: 'larger-reward-means-more-dissonance-change',
        sourceUrl: 'https://psychclassics.yorku.ca/Festinger/',
      },
      {
        type: 'variable-control',
        prompt: '在1美元与20美元条件的核心比较中，主要自变量和因变量分别是？',
        options: [
          '报酬金额；被试后来对任务趣味性的评价',
          '任务评价；报酬金额',
          '智力水平；说谎次数',
          '保持间隔；重学时间',
        ],
        answerIndex: 0,
        explanation: '实验操纵为不一致行为提供的外部报酬，并测量随后报告的态度。',
        misconceptionTag: 'forced-compliance-iv-dv',
        sourceUrl: 'https://psychclassics.yorku.ca/Festinger/',
      },
      {
        type: 'researcher-attribution',
        prompt: '1959年《强迫服从的认知后果》由谁共同发表？',
        options: [
          'Leon Festinger 与 James Carlsmith',
          'Leon Festinger一人',
          'Albert Bandura 与两位Ross',
          'Charles Spearman 与 William Brown',
        ],
        answerIndex: 0,
        explanation: '该实验论文由费斯廷格和卡尔史密斯共同署名。',
        misconceptionTag: 'forced-compliance-festinger-only',
        sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/13640824/',
      },
    ],
  },
  {
    id: 'node-11',
    knowledgePointId: 'social.festinger.social-comparison',
    personId: 'leon-festinger',
    subjects: ['social'],
    relationId: 'rel-festinger-comparison',
    variants: [
      {
        type: 'concept-definition',
        prompt: '费斯廷格1954年社会比较理论的核心动机是？',
        options: ['评价自己的意见和能力', '通过惩罚消除所有模仿', '测量感觉绝对阈限', '用重学时间测量记忆'],
        answerIndex: 0,
        explanation: '原理论从个体评价自身意见与能力的驱力出发讨论社会比较。',
        misconceptionTag: 'social-comparison-purpose',
        sourceUrl: 'https://journals.sagepub.com/doi/10.1177/001872675400700202',
      },
      {
        type: 'scenario-judgment',
        prompt: '哪种情形最符合费斯廷格所说的借助他人进行社会比较？',
        options: [
          '没有客观标准时，通过同伴表现判断自己的能力',
          '用精确温度计读取室温',
          '按统一答案核对一道算术题',
          '通过重学次数计算保持量',
        ],
        answerIndex: 0,
        explanation: '缺乏客观评价手段时，人们更会借助他人的意见或能力评价自己。',
        misconceptionTag: 'comparison-with-objective-standard',
        sourceUrl: 'https://journals.sagepub.com/doi/10.1177/001872675400700202',
      },
      {
        type: 'scenario-judgment',
        prompt: '为较准确判断自己的短跑水平，一名普通学生最可能优先选择谁作为比较对象？',
        options: ['水平与自己相近的同学', '奥运冠军', '刚学会走路的幼儿', '没有成绩信息的人'],
        answerIndex: 0,
        explanation: '相近他人通常比极端不同的对象更具评价信息。',
        misconceptionTag: 'social-comparison-extreme-target',
        sourceUrl: 'https://journals.sagepub.com/doi/10.1177/001872675400700202',
      },
    ],
  },
  {
    id: 'node-12',
    knowledgePointId: 'sensation.fechner.weber-fechner-law',
    personId: 'gustav-fechner',
    subjects: ['general', 'experiment'],
    relationId: 'rel-fechner-law',
    variants: [
      {
        type: 'concept-matching',
        prompt: '下列关于韦伯和费希纳贡献的配对，哪项最准确？',
        options: [
          '韦伯：差别阈限与标准刺激成比例；费希纳：由此推导感觉量与刺激量的对数关系',
          '韦伯：提出对数关系；费希纳：发现操作性条件作用',
          '韦伯：提出g因素；费希纳：提出秩相关',
          '二人共同提出认知失调理论',
        ],
        answerIndex: 0,
        explanation: '韦伯提供差别阈限比例关系，费希纳结合阈限假设建立对数公式。',
        misconceptionTag: 'weber-fechner-attribution-swap',
        sourceUrl: 'https://psychclassics.yorku.ca/Fechner/',
      },
      {
        type: 'calculation',
        prompt: '若同一感觉通道近似符合韦伯—费希纳关系，刺激由10增至11与由100增至110有何共同点？',
        options: [
          '两次相对增幅相同，预测感觉增量近似相同',
          '第二次绝对增量更大，所以感觉增量必为十倍',
          '第一次低于阈限，第二次必高于阈限',
          '两次感觉增量都为零',
        ],
        answerIndex: 0,
        explanation: '两次都增加10%；韦伯关系强调相对刺激增量。',
        misconceptionTag: 'absolute-vs-relative-stimulus-change',
        sourceUrl: 'https://psychclassics.yorku.ca/Fechner/',
      },
      {
        type: 'curve-interpretation',
        prompt: '按费希纳的对数公式，在其他条件相同时，对刺激增加相同的绝对量，通常会怎样？',
        options: [
          '基线越高，产生的感觉增量越小',
          '基线越高，感觉增量按同样绝对量增加',
          '感觉量与刺激量始终一比一',
          '感觉变化与刺激基线完全无关',
        ],
        answerIndex: 0,
        explanation: '对数函数意味着相同绝对刺激增量在较高基线处对应较小感觉增量。',
        misconceptionTag: 'fechner-is-linear',
        sourceUrl: 'https://psychclassics.yorku.ca/Fechner/',
      },
    ],
  },
  {
    id: 'node-13',
    knowledgePointId: 'experiment.fechner.classical-psychophysical-methods',
    personId: 'gustav-fechner',
    subjects: ['experiment'],
    relationId: 'rel-fechner-methods',
    variants: [
      {
        type: 'method-identification',
        prompt: '实验者按递增和递减系列逐级改变刺激，记录反应类别的转折点。这是哪种方法？',
        options: ['极限法', '恒定刺激法', '调整法', '节省法'],
        answerIndex: 0,
        explanation: '极限法以递增、递减刺激系列逼近反应类别的转换位置。',
        misconceptionTag: 'limits-vs-constant-stimuli',
        sourceUrl:
          'https://psychologie.lw.uni-leipzig.de/wundt/opera/fechner/elemnte1/EPsyph08/EPsyph08.htm',
      },
      {
        type: 'method-identification',
        prompt: '实验者预先选定若干刺激强度，以随机次序反复呈现，统计各强度被觉察的比例。这是哪种方法？',
        options: ['极限法', '恒定刺激法', '调整法', '自由回忆法'],
        answerIndex: 1,
        explanation: '恒定刺激法使用一组固定强度，并通常打乱呈现顺序以估计反应概率。',
        misconceptionTag: 'constant-stimuli-means-single-stimulus',
        sourceUrl:
          'https://psychologie.lw.uni-leipzig.de/wundt/opera/fechner/elemnte1/EPsyph08/EPsyph08.htm',
      },
      {
        type: 'method-identification',
        prompt: '被试亲自改变比较刺激，直到它与标准刺激看起来相等。这是哪种方法？',
        options: ['极限法', '恒定刺激法', '调整法', '节省法'],
        answerIndex: 2,
        explanation: '调整法让观察者操纵刺激，直至达到指定的感觉判断标准。',
        misconceptionTag: 'adjustment-vs-limits',
        sourceUrl:
          'https://psychologie.lw.uni-leipzig.de/wundt/opera/fechner/elemnte1/EPsyph08/EPsyph08.htm',
      },
    ],
  },
  {
    id: 'node-14',
    knowledgePointId: 'intelligence.spearman.g-s-factors',
    personId: 'charles-spearman',
    subjects: ['general', 'measurement'],
    relationId: 'rel-spearman-intelligence',
    variants: [
      {
        type: 'concept-matching',
        prompt: '按斯皮尔曼的二因素理论，一项智力测验成绩包含哪两类成分？',
        options: [
          '所有智力活动共有的g因素与该任务特有的s因素',
          '流体智力与晶体智力',
          '七种基本心理能力',
          '八种彼此独立的多元智能',
        ],
        answerIndex: 0,
        explanation: '斯皮尔曼用共同的一般因素g和测验特有因素s解释不同智力任务的表现。',
        misconceptionTag: 'spearman-vs-cattell-thurstone-gardner',
        sourceUrl: 'https://dictionary.apa.org/spearmans-g',
      },
      {
        type: 'evidence-interpretation',
        prompt: '多种不同认知测验之间普遍存在正相关。按斯皮尔曼理论，这一“正相关汇聚”主要支持什么？',
        options: ['存在共同的一般因素g', '每项测验完全相互独立', '所有测验只测同一个s因素', '智力无法通过测验研究'],
        answerIndex: 0,
        explanation: '不同认知任务普遍正相关，是提出共同g因素的重要依据。',
        misconceptionTag: 'positive-manifold',
        sourceUrl: 'https://www.apa.org/pubs/journals/releases/rev-1091116.pdf',
      },
      {
        type: 'theory-attribution',
        prompt: '下列哪组“人物—智力理论”配对正确？',
        options: [
          '斯皮尔曼—g与s二因素理论',
          '卡特尔—七种基本心理能力',
          '瑟斯顿—流体与晶体智力',
          '加德纳—单一g因素',
        ],
        answerIndex: 0,
        explanation: '流体—晶体理论关联卡特尔，基本心理能力关联瑟斯顿，多元智能关联加德纳。',
        misconceptionTag: 'intelligence-theorist-swap',
        sourceUrl: 'https://dictionary.apa.org/psychometric-theories-of-intelligence',
      },
    ],
  },
  {
    id: 'node-15',
    knowledgePointId: 'statistics.spearman.rank-correlation',
    personId: 'charles-spearman',
    subjects: ['statistics'],
    relationId: 'rel-spearman-rank',
    variants: [
      {
        type: 'method-selection',
        prompt: '两名评委分别把10件作品从第1名排到第10名。要衡量两组名次的一致程度，优先考虑？',
        options: ['斯皮尔曼等级相关', '独立样本t检验', '卡方拟合优度检验', '方差齐性检验'],
        answerIndex: 0,
        explanation: '两个变量都是等级次序时，斯皮尔曼等级相关可评估单调关联。',
        misconceptionTag: 'rank-data-use-pearson-only',
        sourceUrl: 'https://dictionary.apa.org/spearman-correlation-coefficient',
      },
      {
        type: 'calculation',
        prompt: '无并列等级，n＝5，两个排名之差平方和Σd²＝2。用ρ＝1−6Σd²/[n(n²−1)]计算，ρ是多少？',
        options: ['0.10', '0.50', '0.90', '1.20'],
        answerIndex: 2,
        explanation: 'ρ＝1−12/[5×24]＝1−0.10＝0.90。',
        misconceptionTag: 'spearman-rho-formula',
        sourceUrl: 'https://www.itl.nist.gov/div898/software/dataplot/refman2/ch2/rankcorr.pdf',
      },
      {
        type: 'property-judgment',
        prompt: '把变量X的每个数值都作严格单调递增变换，但对象的名次完全不变。斯皮尔曼相关会怎样？',
        options: ['保持不变', '必定变成0', '必定变成1', '必定改变符号'],
        answerIndex: 0,
        explanation: '斯皮尔曼相关基于等级；严格单调递增变换不改变等级。',
        misconceptionTag: 'rank-correlation-scale-values',
        sourceUrl: 'https://dictionary.apa.org/spearman-correlation-coefficient',
      },
    ],
  },
  {
    id: 'node-16',
    knowledgePointId: 'measurement.spearman-brown-prophecy',
    personId: 'charles-spearman',
    subjects: ['measurement', 'statistics'],
    relationId: 'rel-spearman-brown',
    variants: [
      {
        type: 'method-purpose',
        prompt: '斯皮尔曼—布朗公式的主要用途是？',
        options: ['预测测验长度改变后的信度', '计算两均数差异的显著性', '估计感觉绝对阈限', '测量认知失调程度'],
        answerIndex: 0,
        explanation: '该公式描述测验长度变化与预计信度之间的关系，也常用于分半信度校正。',
        misconceptionTag: 'spearman-brown-purpose',
        sourceUrl: 'https://academic.oup.com/book/62485/chapter/557469863',
      },
      {
        type: 'calculation',
        prompt: '某半长测验的信度为0.60，将长度加倍。按r′＝2r/(1+r)，预计全长信度为？',
        options: ['0.60', '0.70', '0.75', '1.20'],
        answerIndex: 2,
        explanation: 'r′＝1.20÷1.60＝0.75；信度不会因简单相加而超过1。',
        misconceptionTag: 'spearman-brown-double-length',
        sourceUrl:
          'https://pages.mtu.edu/~shanem/psy5220/daily/Day06Psychometrics/psychometrics.html',
      },
      {
        type: 'researcher-attribution',
        prompt: '关于“斯皮尔曼—布朗公式”的历史归属，哪项最准确？',
        options: [
          'Spearman与William Brown在1910年分别发表相关推导，并非合写同一篇论文',
          '二人共同署名一篇论文首次提出',
          '完全由Pearson提出',
          '由Cronbach为α系数命名',
        ],
        answerIndex: 0,
        explanation: '两人的名字后来共同用于公式，但二人分别发表了相关工作。',
        misconceptionTag: 'spearman-brown-coauthor-myth',
        sourceUrl: 'https://academic.oup.com/book/62485/chapter/557469863',
      },
    ],
  },
];

export const questions: QuestionVariant[] = nodes.flatMap((node) =>
  node.variants.map((variant, index) => {
    const id = `${node.id}-${String.fromCharCode(97 + index)}`;
    const english = QUESTION_EN[id as keyof typeof QUESTION_EN];
    const knowledgePoint = node.knowledgePointId as keyof typeof KNOWLEDGE_POINT_EN;
    if (!english || !KNOWLEDGE_POINT_EN[knowledgePoint] || !KNOWLEDGE_POINT_ZH[knowledgePoint]) {
      throw new Error(`Missing bilingual copy for ${id}`);
    }
    return {
      ...variant,
      ...english,
      optionsEn: [...english.optionsEn],
      id,
      nodeId: node.id,
      nodeTitle: KNOWLEDGE_POINT_ZH[knowledgePoint],
      nodeTitleEn: KNOWLEDGE_POINT_EN[knowledgePoint],
      knowledgePointId: node.knowledgePointId,
      personId: node.personId,
      subjects: node.subjects,
      relationId: node.relationId,
    };
  }),
);

export function selectCaseQuestions(seed = new Date().toISOString().slice(0, 10)): QuestionVariant[] {
  const seedValue = Array.from(seed).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return nodes.map((node, index) => {
    const variantIndex = (seedValue + index * 7) % node.variants.length;
    const id = `${node.id}-${String.fromCharCode(97 + variantIndex)}`;
    const question = questions.find((item) => item.id === id);
    if (!question) throw new Error(`Missing question ${id}`);
    return question;
  });
}

export function questionsForKnowledgePoint(knowledgePointId: string): QuestionVariant[] {
  return questions.filter((question) => question.knowledgePointId === knowledgePointId);
}
