'use client';

import {
  Archive,
  ArrowLeft,
  Beaker,
  BookOpenCheck,
  BrainCircuit,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CloudOff,
  Download,
  ExternalLink,
  FlaskConical,
  Home,
  Languages,
  Network,
  Play,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
  Upload,
  UserRound,
  Volume2,
  X,
  XCircle,
} from 'lucide-react';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { flowContent } from '@/content/flow-content';
import { contentProvenance } from '@/content/provenance';
import { questionsForKnowledgePoint, selectCaseQuestions } from '@/content/questions';
import { playTone, setAmbientEnabled } from '@/src/lib/audio';
import { loadSave, persistSave, replaceSave } from '@/src/lib/db';
import { dueKnowledgePointIds, masteryPercent, recordAnswer } from '@/src/lib/leitner';
import {
  createBackup,
  createCaseProgress,
  validateBackup,
} from '@/src/lib/save';
import type {
  PersonProfile,
  QuestionVariant,
  SubjectKey,
} from '@/src/types/content';
import {
  SUBJECT_LABELS,
  SUBJECT_LABELS_EN,
  SUBJECT_SHORT_LABELS,
} from '@/src/types/content';
import type { FlowSave, Protagonist } from '@/src/types/save';

import { ScholarPortrait } from './scholar-portrait';

type View = 'home' | 'case' | 'archive' | 'lineage' | 'experiments' | 'review' | 'settings';

interface AnswerFeedback {
  question: QuestionVariant;
  selectedIndex: number;
  correct: boolean;
  context: 'case' | 'review';
}

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const navItems: Array<{
  view: Exclude<View, 'case'>;
  label: string;
  labelEn: string;
  icon: typeof Home;
}> = [
  { view: 'home', label: '首页', labelEn: 'Home', icon: Home },
  { view: 'archive', label: '学者档案', labelEn: 'Archive', icon: Archive },
  { view: 'lineage', label: '理论演进', labelEn: 'Lineage', icon: Network },
  { view: 'experiments', label: '实验手账', labelEn: 'Lab Notes', icon: FlaskConical },
  { view: 'review', label: '今日复习', labelEn: 'Review', icon: BookOpenCheck },
  { view: 'settings', label: '设置', labelEn: 'Settings', icon: Settings },
];

const subjectOrder: SubjectKey[] = [
  'general',
  'social',
  'development',
  'education',
  'experiment',
  'statistics',
  'measurement',
];

function Bilingual({ zh, en, className = '' }: { zh: string; en: string; className?: string }) {
  return (
    <span className={`bilingual ${className}`}>
      <span>{zh}</span>
      <small lang="en">{en}</small>
    </span>
  );
}

function personById(id: string): PersonProfile | undefined {
  return flowContent.people.find((person) => person.id === id);
}

function questionById(id: string): QuestionVariant | undefined {
  return flowContent.questions.find((question) => question.id === id);
}

function sourceById(id: string) {
  return flowContent.sources.find((source) => source.id === id);
}

function actForIndex(index: number) {
  if (index < 4) return ['第一幕 · 记忆与发展', 'Act I · Memory and Development'];
  if (index < 8) return ['第二幕 · 观察与证据', 'Act II · Observation and Evidence'];
  if (index < 12) return ['第三幕 · 社会张力与感觉刻度', 'Act III · Social Tension and Sensory Scales'];
  return ['第四幕 · 方法与测量', 'Act IV · Methods and Measurement'];
}

export function FlowApp() {
  const [save, setSave] = useState<FlowSave | null>(null);
  const [view, setView] = useState<View>('home');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [protagonistOpen, setProtagonistOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PersonProfile | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [reviewQueue, setReviewQueue] = useState<string[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewRunning, setReviewRunning] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);
  const saveReadyRef = useRef(false);

  useEffect(() => {
    let active = true;
    void loadSave()
      .then((value) => {
        if (!active) return;
        setSave(value);
        saveReadyRef.current = true;
      })
      .catch(() => {
        if (!active) return;
        setSave(null);
        setNotice('本地存档暂时无法读取，请刷新后重试。 / Local save unavailable.');
      });

    if ('serviceWorker' in navigator) {
      void navigator.serviceWorker.register(new URL('./sw.js', window.location.href)).catch(() => undefined);
    }

    const onInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', onInstall);
    return () => {
      active = false;
      window.removeEventListener('beforeinstallprompt', onInstall);
    };
  }, []);

  useEffect(() => {
    if (!save || !saveReadyRef.current) return;
    void persistSave(save).catch(() => {
      setNotice('自动保存失败，请先导出备份。 / Autosave failed; export a backup.');
    });
    setAmbientEnabled(save.settings.soundEnabled);
    document.documentElement.dataset.reducedMotion = save.settings.reducedMotion ? 'true' : 'false';
  }, [save]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 3600);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const firstCase = flowContent.cases[0];
  const caseProgress = save?.cases[firstCase.id];
  const dueIds = useMemo(() => (save ? dueKnowledgePointIds(save) : []), [save]);
  const mastery = save ? masteryPercent(save) : 0;

  const go = (nextView: Exclude<View, 'case'>) => {
    setView(nextView);
    setFeedback(null);
    setSelectedIndex(null);
    setReviewRunning(false);
    window.scrollTo({ top: 0, behavior: save?.settings.reducedMotion ? 'auto' : 'smooth' });
  };

  const initializeCase = (current: FlowSave, forceNew = false): FlowSave => {
    const existing = current.cases[firstCase.id] ?? createCaseProgress(firstCase.id);
    if (!forceNew && existing.status === 'in_progress' && existing.selectedVariantIds.length) {
      return current;
    }

    const seed = `${current.createdAt}-${Date.now()}`;
    const selected = selectCaseQuestions(seed).map((question) => question.id);
    return {
      ...current,
      updatedAt: new Date().toISOString(),
      cases: {
        ...current.cases,
        [firstCase.id]: {
          ...createCaseProgress(firstCase.id),
          status: 'in_progress',
          selectedVariantIds: selected,
          startedAt: new Date().toISOString(),
        },
      },
    };
  };

  const beginCase = (forceNew = false) => {
    if (!save) return;
    if (!save.protagonist) {
      setProtagonistOpen(true);
      return;
    }
    setSave((current) => (current ? initializeCase(current, forceNew) : current));
    setSelectedIndex(null);
    setFeedback(null);
    setView('case');
    if (save.settings.soundEnabled) playTone('open');
  };

  const chooseProtagonist = (protagonist: Exclude<Protagonist, null>) => {
    setSave((current) => {
      if (!current) return current;
      return initializeCase(
        { ...current, protagonist, updatedAt: new Date().toISOString() },
        current.cases[firstCase.id]?.status === 'completed',
      );
    });
    setProtagonistOpen(false);
    setView('case');
    playTone('open');
  };

  const submitCaseAnswer = (question: QuestionVariant) => {
    if (selectedIndex === null || !save || !caseProgress) return;
    const correct = selectedIndex === question.answerIndex;
    setSave((current) => {
      if (!current) return current;
      const currentProgress = current.cases[firstCase.id];
      const afterAnswer = recordAnswer(current, question, selectedIndex);
      const isFirstPass = currentProgress.currentIndex < currentProgress.selectedVariantIds.length;
      const retryQuestionIds = correct
        ? currentProgress.retryQuestionIds
        : [...currentProgress.retryQuestionIds, question.id];
      const nextIndex = currentProgress.currentIndex + 1;
      const completed =
        correct && nextIndex >= currentProgress.selectedVariantIds.length + retryQuestionIds.length;
      return {
        ...afterAnswer,
        unlockedPersonIds: correct
          ? Array.from(new Set([...afterAnswer.unlockedPersonIds, question.personId]))
          : afterAnswer.unlockedPersonIds,
        cases: {
          ...afterAnswer.cases,
          [firstCase.id]: {
            ...currentProgress,
            status: completed ? 'completed' : 'in_progress',
            currentIndex: nextIndex,
            retryQuestionIds,
            correctFirstTry:
              currentProgress.correctFirstTry + (correct && isFirstPass ? 1 : 0),
            totalAnswered: currentProgress.totalAnswered + 1,
            completedAt: completed ? new Date().toISOString() : null,
          },
        },
      };
    });
    setFeedback({ question, selectedIndex, correct, context: 'case' });
    setSelectedIndex(null);
    if (save.settings.soundEnabled) playTone(correct ? 'correct' : 'wrong');
  };

  const closeFeedback = () => {
    const wasComplete = feedback?.context === 'case' && save?.cases[firstCase.id]?.status === 'completed';
    setFeedback(null);
    if (wasComplete) {
      if (save?.settings.soundEnabled) playTone('unlock');
      setView('home');
    }
  };

  const startReview = () => {
    const pool = dueIds.length
      ? dueIds
      : Object.keys(save?.mastery ?? {}).filter((knowledgePointId) =>
          questionsForKnowledgePoint(knowledgePointId).length,
        );
    const fallback = flowContent.questions
      .filter((question, index, all) => all.findIndex((item) => item.nodeId === question.nodeId) === index)
      .slice(0, 5)
      .map((question) => question.knowledgePointId);
    const knowledgePoints = pool.length ? pool : fallback;
    const ids = knowledgePoints
      .map((knowledgePointId, index) => {
        const variants = questionsForKnowledgePoint(knowledgePointId);
        return variants[index % variants.length]?.id;
      })
      .filter((id): id is string => Boolean(id));
    setReviewQueue(ids);
    setReviewIndex(0);
    setReviewRunning(true);
    setSelectedIndex(null);
    setFeedback(null);
  };

  const submitReviewAnswer = (question: QuestionVariant) => {
    if (selectedIndex === null || !save) return;
    const correct = selectedIndex === question.answerIndex;
    setSave((current) => (current ? recordAnswer(current, question, selectedIndex) : current));
    setFeedback({ question, selectedIndex, correct, context: 'review' });
    setSelectedIndex(null);
    if (save.settings.soundEnabled) playTone(correct ? 'correct' : 'wrong');
  };

  const nextReview = () => {
    setFeedback(null);
    if (reviewIndex + 1 >= reviewQueue.length) {
      setReviewRunning(false);
      setNotice('今日复习完成。 / Review complete.');
      return;
    }
    setReviewIndex((index) => index + 1);
  };

  const exportBackup = () => {
    if (!save) return;
    const blob = new Blob([JSON.stringify(createBackup(save), null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `flow-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice('备份已导出。 / Backup exported.');
  };

  const importBackup = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      const envelope = validateBackup(parsed);
      const confirmed = window.confirm(
        '恢复会覆盖本机现有进度，是否继续？\nRestoring will replace the current local save. Continue?',
      );
      if (!confirmed) return;
      await replaceSave(envelope.save);
      setSave(envelope.save);
      setNotice('存档已恢复。 / Save restored.');
    } catch (error) {
      const message = error instanceof Error ? error.message : '备份文件损坏。';
      setNotice(`${message} / Import rejected.`);
    } finally {
      if (importRef.current) importRef.current.value = '';
    }
  };

  const requestInstall = async () => {
    if (!installPrompt) {
      setNotice('iPhone：Safari 分享 → 添加到主屏幕。 / Safari: Share → Add to Home Screen.');
      return;
    }
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === 'accepted') setInstallPrompt(null);
  };

  if (!save) {
    return (
      <main className="flow-loading-screen">
        <img src="./assets/icons/icon-512.png" alt="Flow 误区精灵" />
        <Bilingual zh="正在开启心境档案馆…" en="Opening the Mind Archive…" />
      </main>
    );
  }

  return (
    <div className="flow-app-shell">
      <AppHeader view={view} go={go} dueCount={dueIds.length} />

      {view === 'home' && (
        <HomeScreen
          save={save}
          mastery={mastery}
          dueCount={dueIds.length}
          beginCase={beginCase}
          go={go}
          onPerson={setSelectedPerson}
        />
      )}
      {view === 'case' && caseProgress && (
        <CaseScreen
          progress={caseProgress}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          submit={submitCaseAnswer}
          exit={() => go('home')}
        />
      )}
      {view === 'archive' && <ArchiveScreen onPerson={setSelectedPerson} />}
      {view === 'lineage' && <LineageScreen />}
      {view === 'experiments' && <ExperimentsScreen />}
      {view === 'review' && (
        <ReviewScreen
          save={save}
          dueIds={dueIds}
          running={reviewRunning}
          queue={reviewQueue}
          index={reviewIndex}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          start={startReview}
          submit={submitReviewAnswer}
        />
      )}
      {view === 'settings' && (
        <SettingsScreen
          save={save}
          setSave={setSave}
          exportBackup={exportBackup}
          importRef={importRef}
          importBackup={importBackup}
          requestInstall={requestInstall}
        />
      )}

      <MobileNav view={view} go={go} dueCount={dueIds.length} />

      <Dialog open={protagonistOpen} onOpenChange={setProtagonistOpen}>
        <DialogContent className="flow-dialog protagonist-dialog">
          <DialogHeader>
            <div className="dialog-kicker"><UserRound /> PLAYER / 调查员</div>
            <DialogTitle>
              <Bilingual zh="选择你的档案映像" en="Choose your archive reflection" />
            </DialogTitle>
            <DialogDescription>
              中文为主字幕，English 始终显示为辅助字幕。主角选择只影响称呼，不影响题目难度。
            </DialogDescription>
          </DialogHeader>
          <div className="protagonist-grid">
            <button type="button" onClick={() => chooseProtagonist('female')}>
              <span className="protagonist-orb female">澜</span>
              <Bilingual zh="女主角 · 澜" en="Lan · Female Lead" />
            </button>
            <button type="button" onClick={() => chooseProtagonist('male')}>
              <span className="protagonist-orb male">朔</span>
              <Bilingual zh="男主角 · 朔" en="Shuo · Male Lead" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <PersonDialog person={selectedPerson} onOpenChange={(open) => !open && setSelectedPerson(null)} />

      <Dialog open={Boolean(feedback)} onOpenChange={(open) => !open && closeFeedback()}>
        {feedback && (
          <FeedbackDialog
            feedback={feedback}
            onNext={feedback.context === 'review' ? nextReview : closeFeedback}
            finalCase={feedback.context === 'case' && save.cases[firstCase.id]?.status === 'completed'}
          />
        )}
      </Dialog>

      {notice && (
        <div className="flow-toast" role="status">
          <ShieldCheck /> {notice}
          <button type="button" onClick={() => setNotice(null)} aria-label="关闭提示"><X /></button>
        </div>
      )}
    </div>
  );
}

function AppHeader({
  view,
  go,
  dueCount,
}: {
  view: View;
  go: (view: Exclude<View, 'case'>) => void;
  dueCount: number;
}) {
  return (
    <header className="flow-app-header">
      <button className="flow-logo" type="button" onClick={() => go('home')}>
        <span className="flow-logo-mark"><BrainCircuit /></span>
        <span>FLOW<small>312 心境档案 / MIND ARCHIVE</small></span>
      </button>
      <nav aria-label="主导航 / Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = view === item.view || (view === 'case' && item.view === 'home');
          return (
            <button
              key={item.view}
              type="button"
              className={active ? 'is-active' : ''}
              onClick={() => go(item.view)}
            >
              <Icon />
              <Bilingual zh={item.label} en={item.labelEn} />
              {item.view === 'review' && dueCount > 0 && <i>{dueCount}</i>}
            </button>
          );
        })}
      </nav>
      <div className="offline-pill"><CloudOff /> 本机存档 <small>LOCAL ONLY</small></div>
    </header>
  );
}

function MobileNav({
  view,
  go,
  dueCount,
}: {
  view: View;
  go: (view: Exclude<View, 'case'>) => void;
  dueCount: number;
}) {
  return (
    <nav className="flow-mobile-nav" aria-label="移动端导航 / Mobile navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.view}
            type="button"
            className={view === item.view || (view === 'case' && item.view === 'home') ? 'is-active' : ''}
            onClick={() => go(item.view)}
          >
            <span><Icon />{item.view === 'review' && dueCount > 0 && <i>{dueCount}</i>}</span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

function HomeScreen({
  save,
  mastery,
  dueCount,
  beginCase,
  go,
  onPerson,
}: {
  save: FlowSave;
  mastery: number;
  dueCount: number;
  beginCase: (forceNew?: boolean) => void;
  go: (view: Exclude<View, 'case'>) => void;
  onPerson: (person: PersonProfile) => void;
}) {
  const firstCase = flowContent.cases[0];
  const progress = save.cases[firstCase.id];
  const completed = progress?.status === 'completed';
  const inProgress = progress?.status === 'in_progress';

  return (
    <main>
      <section className="flow-hero">
        <img src="./assets/flow-hero.png" alt="两位调查员进入悬浮于云海中的心理档案馆" />
        <div className="flow-hero-overlay" />
        <div className="flow-hero-copy">
          <div className="eyebrow"><Sparkles /> CASE 01 · 第一案已开放</div>
          <h1>把错位的理论，<br />送回正确的人。</h1>
          <p className="hero-title-en" lang="en">Return every theory to its rightful mind.</p>
          <p>沿着“提出—局限—修正—新证据”的线索破案，并亲手解决实验设计中的混淆、操作化与伦理难题。</p>
          <p className="hero-copy-en" lang="en">Trace each idea from proposal to limitation and revision—then repair the experiment that made the evidence possible.</p>
          <div className="hero-actions">
            <Button className="flow-cta" onClick={() => beginCase(completed)}>
              {completed ? <RotateCcw /> : <Play />}
              <Bilingual
                zh={completed ? '以新变式重玩' : inProgress ? '继续第一案' : '开始第一案'}
                en={completed ? 'Replay with new variants' : inProgress ? 'Continue Case One' : 'Begin Case One'}
              />
              <ChevronRight />
            </Button>
            <button className="text-link" type="button" onClick={() => go('lineage')}>
              查看理论演进 <span>Explore lineages</span> <ChevronRight />
            </button>
          </div>
        </div>
        <div className="case-ticket">
          <span>CASE / 01</span>
          <Bilingual zh={firstCase.title} en={firstCase.titleEn} />
          <small><Clock3 /> 15–20 分钟 · 16 节点 · 七科</small>
        </div>
      </section>

      <section className="dashboard-grid page-width">
        <article className="mastery-card panel-card">
          <div className="card-heading">
            <div><span className="eyebrow">LOCAL PROGRESS</span><h2>本机复习概况</h2><small>Local review overview</small></div>
            <Trophy />
          </div>
          <div className="mastery-ring" style={{ '--progress': `${mastery * 3.6}deg` } as React.CSSProperties}>
            <strong>{mastery}%</strong><small>掌握度<br />MASTERY</small>
          </div>
          <div className="metric-row">
            <span><strong>{save.attempts.length}</strong><small>作答 / ANSWERS</small></span>
            <span><strong>{save.unlockedPersonIds.length}</strong><small>卡牌 / CARDS</small></span>
            <span><strong>{dueCount}</strong><small>到期 / DUE</small></span>
          </div>
        </article>

        <article className="case-card panel-card">
          <div className="case-card-top"><Badge variant="outline">强化阶段 · RETRIEVAL</Badge><span>FLOW-C01</span></div>
          <Bilingual zh={firstCase.title} en={firstCase.titleEn} className="case-title" />
          <p>{firstCase.synopsis}</p>
          <p className="en-copy" lang="en">{firstCase.synopsisEn}</p>
          <div className="case-meta-grid">
            <span><strong>16 × 3</strong><small>静态变式<br />STATIC VARIANTS</small></span>
            <span><strong>6</strong><small>核心学者<br />CORE SCHOLARS</small></span>
            <span><strong>1 · 3 · 7</strong><small>复习间隔<br />REVIEW DAYS</small></span>
          </div>
          <Button className="case-card-button" onClick={() => beginCase(completed)}>
            {inProgress ? '继续调查' : completed ? '重新调查' : '进入档案馆'}
            <span lang="en">{inProgress ? 'Continue investigation' : completed ? 'Investigate again' : 'Enter the archive'}</span>
            <ChevronRight />
          </Button>
        </article>
      </section>

      <section className="page-section page-width">
        <div className="section-heading">
          <div><span className="eyebrow">SEVEN DOMAINS</span><h2>七科不是七座孤岛</h2><p>每条证据可以跨科连接，但人物档案始终唯一。</p></div>
          <Languages />
        </div>
        <div className="subject-grid">
          {subjectOrder.map((subject, index) => (
            <button key={subject} type="button" onClick={() => go('archive')}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Bilingual zh={SUBJECT_LABELS[subject]} en={SUBJECT_LABELS_EN[subject]} />
              <ChevronRight />
            </button>
          ))}
        </div>
      </section>

      <section className="page-section page-width scholar-section">
        <div className="section-heading">
          <div><span className="eyebrow">CORE CAST</span><h2>首案登场学者</h2><p>真实贡献，经幻想化视觉编码；点击查看人物—理论—证据链。</p></div>
          <button className="text-link" type="button" onClick={() => go('archive')}>全部档案 <span>All profiles</span> <ChevronRight /></button>
        </div>
        <div className="scholar-strip">
          {flowContent.people.filter((person) => person.tier === 'core').map((person) => (
            <button key={person.id} type="button" onClick={() => onPerson(person)}>
              <ScholarPortrait person={person} />
              <Bilingual zh={person.canonicalNameZh} en={person.canonicalNameEn} />
              <small>{person.epithet}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="story-duo page-width">
        <button type="button" className="story-card lineage-card" onClick={() => go('lineage')}>
          <span className="story-icon"><Network /></span>
          <span className="eyebrow">THEORY LINEAGE</span>
          <Bilingual zh="理论不是突然出现的" en="Ideas have histories" />
          <p>从韦伯到费希纳，从行为主义到社会认知：看见局限如何催生新问题。</p>
          <span className="story-arrow">进入演进图谱 <ChevronRight /></span>
        </button>
        <button type="button" className="story-card experiment-card" onClick={() => go('experiments')}>
          <span className="story-icon"><Beaker /></span>
          <span className="eyebrow">DESIGN WORKSHOP</span>
          <Bilingual zh="好结论先要过设计关" en="Evidence begins with design" />
          <p>问题、假设、操作化、变量、混淆、修补、结果边界与伦理，一步都不能跳。</p>
          <span className="story-arrow">翻开实验手账 <ChevronRight /></span>
        </button>
      </section>
    </main>
  );
}

function CaseScreen({
  progress,
  selectedIndex,
  setSelectedIndex,
  submit,
  exit,
}: {
  progress: FlowSave['cases'][string];
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  submit: (question: QuestionVariant) => void;
  exit: () => void;
}) {
  const queue = [...progress.selectedVariantIds, ...progress.retryQuestionIds];
  const question = questionById(queue[progress.currentIndex]);
  const person = question ? personById(question.personId) : undefined;
  const relation = question
    ? flowContent.relations.find((item) => item.id === question.relationId)
    : undefined;
  const total = Math.max(queue.length, 16);
  const act = actForIndex(Math.min(progress.currentIndex, 15));

  if (!question || !person || !relation) {
    return (
      <main className="case-complete page-width">
        <div className="completion-emblem"><Trophy /></div>
        <Bilingual zh="第一案已归档" en="Case One archived" />
        <p>本局错题已经进入 1 · 3 · 7 天复习队列。</p>
        <Button onClick={exit}>返回档案馆 / Return home</Button>
      </main>
    );
  }

  const experiment = flowContent.experiments.find((item) =>
    item.personIds.includes(question.personId),
  );

  return (
    <main className="case-screen">
      <header className="case-toolbar page-width">
        <button type="button" onClick={exit}><ArrowLeft /> 暂离案件 <small>Exit case</small></button>
        <div className="case-progress-copy">
          <Bilingual zh={act[0]} en={act[1]} />
          <span>{Math.min(progress.currentIndex + 1, total)} / {total}</span>
        </div>
      </header>
      <Progress className="case-progress" value={(progress.currentIndex / total) * 100} />

      <div className="case-layout page-width">
        <aside className="case-witness">
          <ScholarPortrait person={person} />
          <div className="witness-name">
            <span>WITNESS / 学者映像</span>
            <Bilingual zh={person.canonicalNameZh} en={person.canonicalNameEn} />
            <small>{person.lifetime} · {person.identity}</small>
          </div>
          <blockquote>
            “{relation.claim}”
            <small lang="en">“{relation.claimEn}”</small>
          </blockquote>
          {experiment && (
            <div className="design-clue">
              <FlaskConical />
              <span><strong>实验手账已关联</strong><small>{experiment.titleEn}</small></span>
            </div>
          )}
        </aside>

        <section className="evidence-question">
          <div className="question-meta">
            <span>NODE {question.nodeId.slice(-2)}</span>
            {question.subjects.map((subject) => <Badge key={subject} variant="outline">{SUBJECT_SHORT_LABELS[subject]}</Badge>)}
            {progress.currentIndex >= progress.selectedVariantIds.length && <Badge>重测 / RETRY</Badge>}
          </div>
          <Bilingual zh={question.nodeTitle} en={question.nodeTitleEn} className="node-title" />
          <h1>{question.prompt}</h1>
          <p className="question-en" lang="en">{question.promptEn}</p>

          <div className="answer-grid">
            {question.options.map((option, index) => (
              <button
                type="button"
                key={`${option}-${index}`}
                className={selectedIndex === index ? 'is-selected' : ''}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                <span><strong>{option}</strong><small lang="en">{question.optionsEn[index]}</small></span>
                <i>{selectedIndex === index && <Check />}</i>
              </button>
            ))}
          </div>
          <div className="submit-row">
            <span><ShieldCheck /> 所有解析均附可核验来源 <small>Source-backed explanations</small></span>
            <Button disabled={selectedIndex === null} onClick={() => submit(question)}>
              提交证据 <small>SUBMIT</small> <ChevronRight />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

function ArchiveScreen({ onPerson }: { onPerson: (person: PersonProfile) => void }) {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState<SubjectKey | 'all'>('all');
  const filtered = flowContent.people.filter((person) => {
    const haystack = [
      person.canonicalNameZh,
      person.canonicalNameEn,
      ...person.aliases,
      person.identity,
      person.identityEn,
      person.summary,
      person.summaryEn,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(query.toLowerCase()) && (subject === 'all' || person.subjects.includes(subject));
  });

  return (
    <main className="page-width inner-page">
      <PageHero
        eyebrow="SCHOLAR ARCHIVE · 规范人物库"
        title="一个人，一份档案，多条贡献关系"
        titleEn="One person, one profile, many verified relations"
        description={`现收录 ${flowContent.people.length} 位可命题人物与相关学者；身份、别名、提出者、发展者与实验者严格分开。`}
        icon={<Archive />}
      />
      <div className="archive-tools">
        <label><Search /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索姓名、别名或理论 / Search" /></label>
        <div className="filter-scroll">
          <button type="button" className={subject === 'all' ? 'is-active' : ''} onClick={() => setSubject('all')}>全部 <small>ALL</small></button>
          {subjectOrder.map((item) => (
            <button key={item} type="button" className={subject === item ? 'is-active' : ''} onClick={() => setSubject(item)}>
              {SUBJECT_SHORT_LABELS[item]} <small>{SUBJECT_LABELS_EN[item].split(' ')[0]}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="archive-count">显示 {filtered.length} / {flowContent.people.length} · SHOWING VERIFIED CANDIDATES</div>
      <div className="archive-grid">
        {filtered.map((person) => {
          const relationCount = flowContent.relations.filter((relation) => relation.personId === person.id).length;
          return (
            <button key={person.id} type="button" className={`archive-person tier-${person.tier}`} onClick={() => onPerson(person)}>
              <ScholarPortrait person={person} compact={person.tier !== 'core'} />
              <span className="person-tier">{person.tier === 'core' ? 'CORE' : person.tier === 'secondary' ? 'SECONDARY' : 'ARCHIVE'}</span>
              <Bilingual zh={person.canonicalNameZh} en={person.canonicalNameEn} />
              <small>{person.identity}</small>
              <p>{person.summary}</p>
              <span className="archive-card-footer"><span>{relationCount} 条关系 / RELATIONS</span><ChevronRight /></span>
            </button>
          );
        })}
      </div>
    </main>
  );
}

function LineageScreen() {
  return (
    <main className="page-width inner-page">
      <PageHero
        eyebrow="THEORY LINEAGE · 理论演进"
        title="新理论，往往从旧理论解释不了的地方长出来"
        titleEn="New theories grow where earlier explanations run out"
        description="时间线明确区分直接批评、经验修正、扩展与替代理论；没有证据时，不把“后来出现”写成“推翻前人”。"
        icon={<Network />}
      />
      <div className="lineage-list">
        {flowContent.lineages.map((lineage, lineageIndex) => (
          <article className="lineage-panel" key={lineage.id}>
            <header>
              <span>{String(lineageIndex + 1).padStart(2, '0')} / {lineage.subjects.map((item) => SUBJECT_SHORT_LABELS[item]).join(' · ')}</span>
              <Bilingual zh={lineage.title} en={lineage.titleEn} />
              <p>{lineage.theme}</p><p className="en-copy" lang="en">{lineage.themeEn}</p>
            </header>
            <div className="timeline">
              {lineage.chapters.map((chapter) => (
                <section key={chapter.id} className={`timeline-node kind-${chapter.relationKind}`}>
                  <div className="timeline-year">{chapter.year}</div>
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <Badge variant="outline">{chapter.relationKind.toUpperCase()}</Badge>
                    <Bilingual zh={chapter.title} en={chapter.titleEn} />
                    <div className="timeline-people">
                      {chapter.personIds.map((personId) => personById(personId)).filter(Boolean).map((person) => (
                        <span key={person!.id}>{person!.canonicalNameZh}<small>{person!.canonicalNameEn}</small></span>
                      ))}
                    </div>
                    <p>{chapter.description}</p>
                    <p className="en-copy" lang="en">{chapter.descriptionEn}</p>
                    <div className="exam-cue"><BookOpenCheck /><span><strong>考场辨析</strong>{chapter.examCue}<small lang="en">{chapter.examCueEn}</small></span></div>
                    <SourceLinks ids={chapter.sourceIds} />
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function ExperimentsScreen() {
  const [active, setActive] = useState(flowContent.experiments[0]?.id ?? '');
  const selected = flowContent.experiments.find((experiment) => experiment.id === active);

  return (
    <main className="page-width inner-page">
      <PageHero
        eyebrow="LAB NOTEBOOK · 实验设计手账"
        title="证据不是“做了实验”就自动成立"
        titleEn="An experiment becomes evidence only through its design"
        description="逐步重建研究问题、假设、操作化、变量控制、中途障碍、修补方案、结论边界与伦理。"
        icon={<FlaskConical />}
      />
      <div className="experiment-layout">
        <aside className="experiment-tabs">
          {flowContent.experiments.map((experiment, index) => (
            <button key={experiment.id} type="button" className={active === experiment.id ? 'is-active' : ''} onClick={() => setActive(experiment.id)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Bilingual zh={experiment.title} en={experiment.titleEn} />
              <ChevronRight />
            </button>
          ))}
        </aside>
        {selected && (
          <article className="lab-notebook">
            <header>
              <div><span className="eyebrow">RECONSTRUCTED DESIGN</span><Bilingual zh={selected.title} en={selected.titleEn} /></div>
              <Beaker />
            </header>
            <p>{selected.summary}</p><p className="en-copy" lang="en">{selected.summaryEn}</p>
            <div className="lab-stage-list">
              {selected.stages.map((stage, index) => (
                <section key={`${stage.phase}-${index}`} className={`lab-stage phase-${stage.phase}`}>
                  <span className="stage-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="stage-phase">{stage.phase.toUpperCase()}</span>
                    <Bilingual zh={stage.title} en={stage.titleEn} />
                    <p>{stage.detail}</p><p className="en-copy" lang="en">{stage.detailEn}</p>
                  </div>
                </section>
              ))}
            </div>
            <SourceLinks ids={selected.sourceIds} />
          </article>
        )}
      </div>
    </main>
  );
}

function ReviewScreen({
  save,
  dueIds,
  running,
  queue,
  index,
  selectedIndex,
  setSelectedIndex,
  start,
  submit,
}: {
  save: FlowSave;
  dueIds: string[];
  running: boolean;
  queue: string[];
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  start: () => void;
  submit: (question: QuestionVariant) => void;
}) {
  const current = running ? questionById(queue[index]) : undefined;
  if (running && current) {
    return (
      <main className="page-width inner-page review-run">
        <div className="review-run-top"><Bilingual zh="今日提取练习" en="Today’s retrieval run" /><span>{index + 1} / {queue.length}</span></div>
        <Progress value={((index + 1) / queue.length) * 100} />
        <section className="review-question panel-card">
          <div className="question-meta">{current.subjects.map((subject) => <Badge key={subject} variant="outline">{SUBJECT_SHORT_LABELS[subject]}</Badge>)}</div>
          <Bilingual zh={current.nodeTitle} en={current.nodeTitleEn} className="node-title" />
          <h1>{current.prompt}</h1><p className="question-en" lang="en">{current.promptEn}</p>
          <div className="answer-grid compact">
            {current.options.map((option, optionIndex) => (
              <button type="button" key={`${option}-${optionIndex}`} className={selectedIndex === optionIndex ? 'is-selected' : ''} onClick={() => setSelectedIndex(optionIndex)}>
                <span className="answer-letter">{String.fromCharCode(65 + optionIndex)}</span>
                <span><strong>{option}</strong><small lang="en">{current.optionsEn[optionIndex]}</small></span>
              </button>
            ))}
          </div>
          <Button disabled={selectedIndex === null} onClick={() => submit(current)}>确认答案 / Check answer <ChevronRight /></Button>
        </section>
      </main>
    );
  }

  const attempted = Object.keys(save.mastery).length;
  return (
    <main className="page-width inner-page">
      <PageHero
        eyebrow="LEITNER REVIEW · 四级箱"
        title={dueIds.length ? `今天有 ${dueIds.length} 个知识点到期` : '今天的到期队列已经清空'}
        titleEn={dueIds.length ? `${dueIds.length} knowledge points are due today` : 'Today’s due queue is clear'}
        description="答错当局回到队尾；答对后按 1、3、7 天进入下一次提取。所有记录只留在本机。"
        icon={<CalendarClock />}
      />
      <section className="review-dashboard">
        <div className="review-boxes">
          {[0, 1, 2, 3].map((box, boxIndex) => {
            const count = Object.values(save.mastery).filter((item) => item.box === box).length;
            const label = ['当局重测', '1 天', '3 天', '7 天'][boxIndex];
            const labelEn = ['Same run', '1 day', '3 days', '7 days'][boxIndex];
            return <div key={box}><span>BOX {box}</span><strong>{count}</strong><Bilingual zh={label} en={labelEn} /></div>;
          })}
        </div>
        <article className="review-launch panel-card">
          <BookOpenCheck />
          <Bilingual zh={dueIds.length ? '开始到期复习' : attempted ? '进行一次随机巩固' : '先体验五题热身'} en={dueIds.length ? 'Start due review' : attempted ? 'Run a reinforcement set' : 'Warm up with five items'} />
          <p>题目来自静态、已审校的变式库；运行时不会联网生成。</p>
          <Button onClick={start}><Play /> 开始 / START</Button>
        </article>
      </section>
      {dueIds.length > 0 && (
        <div className="due-list">
          {dueIds.map((knowledgePointId) => {
            const question = questionsForKnowledgePoint(knowledgePointId)[0];
            const masteryState = save.mastery[knowledgePointId];
            return question && (
              <div key={knowledgePointId}>
                <span>{question.nodeTitle}<small>{question.nodeTitleEn}</small></span>
                <span>BOX {masteryState.box} · {masteryState.correct}/{masteryState.attempts}</span>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

function SettingsScreen({
  save,
  setSave,
  exportBackup,
  importRef,
  importBackup,
  requestInstall,
}: {
  save: FlowSave;
  setSave: React.Dispatch<React.SetStateAction<FlowSave | null>>;
  exportBackup: () => void;
  importRef: React.RefObject<HTMLInputElement | null>;
  importBackup: (file: File) => Promise<void>;
  requestInstall: () => Promise<void>;
}) {
  const updateSetting = (key: 'soundEnabled' | 'reducedMotion', value: boolean) => {
    setSave((current) => current ? {
      ...current,
      updatedAt: new Date().toISOString(),
      settings: { ...current.settings, [key]: value },
    } : current);
  };

  return (
    <main className="page-width inner-page settings-page">
      <PageHero
        eyebrow="LOCAL SETTINGS · 本机设置"
        title="离线、安静、由你掌控"
        titleEn="Offline, quiet, and under your control"
        description="无账号、无后端、无云同步。导出的备份只含稳定 ID 与学习进度。"
        icon={<Settings />}
      />
      <div className="settings-grid">
        <section className="settings-panel panel-card">
          <header><Volume2 /><div><h2>声音与动态</h2><small>SOUND & MOTION</small></div></header>
          <label>
            <span><Bilingual zh="原创环境音与反馈音" en="Original ambient & feedback sound" /><small>默认关闭；使用本机生成的轻量音色。</small></span>
            <Switch checked={save.settings.soundEnabled} onCheckedChange={(checked) => updateSetting('soundEnabled', checked)} />
          </label>
          <label>
            <span><Bilingual zh="减少动态效果" en="Reduce motion" /><small>关闭漂浮、呼吸与过渡动画。</small></span>
            <Switch checked={save.settings.reducedMotion} onCheckedChange={(checked) => updateSetting('reducedMotion', checked)} />
          </label>
        </section>

        <section className="settings-panel panel-card">
          <header><ShieldCheck /><div><h2>存档与备份</h2><small>SAVE & BACKUP</small></div></header>
          <p>恢复前会校验格式并要求覆盖确认；损坏或版本不兼容的文件会被拒绝。</p>
          <div className="settings-actions">
            <Button variant="outline" onClick={exportBackup}><Download /> 导出备份 / EXPORT</Button>
            <Button variant="outline" onClick={() => importRef.current?.click()}><Upload /> 恢复备份 / RESTORE</Button>
            <input
              ref={importRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void importBackup(file);
              }}
            />
          </div>
        </section>

        <section className="settings-panel install-panel panel-card">
          <header><Download /><div><h2>安装到设备</h2><small>INSTALL PWA</small></div></header>
          <p>首次从 HTTPS 页面完整加载后，可作为单机应用离线打开。iPhone 请使用 Safari 的“添加到主屏幕”。</p>
          <Button onClick={() => void requestInstall()}><Download /> 安装 Flow / INSTALL</Button>
        </section>

        <section className="settings-panel panel-card compliance-panel">
          <header><CloudOff /><div><h2>隐私与素材</h2><small>PRIVACY & ASSETS</small></div></header>
          <ul>
            <li><Check /> 学习数据不上传，不含账号与广告。</li>
            <li><Check /> 角色与场景为原创幻想设定。</li>
            <li><Check /> 未使用或复刻任何《原神》官方素材。</li>
            <li><Check /> 资料链接保留在人物关系与题目解析中。</li>
            <li><Check /> 范围基线：{contentProvenance.localBaseline.examYear} 冻结结构；2027 官方版待发布后再做差异更新。</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

function PersonDialog({
  person,
  onOpenChange,
}: {
  person: PersonProfile | null;
  onOpenChange: (open: boolean) => void;
}) {
  if (!person) return <Dialog open={false} />;
  const relations = flowContent.relations.filter((relation) => relation.personId === person.id);
  return (
    <Dialog open={Boolean(person)} onOpenChange={onOpenChange}>
      <DialogContent className="flow-dialog person-dialog">
        <div className="person-dialog-hero">
          <ScholarPortrait person={person} />
          <div>
            <span className="eyebrow">{person.tier.toUpperCase()} PROFILE</span>
            <Bilingual zh={person.canonicalNameZh} en={person.canonicalNameEn} />
            <p>{person.lifetime} · {person.identity}</p><p className="en-copy" lang="en">{person.identityEn}</p>
          </div>
        </div>
        <div className="person-summary"><strong>{person.epithet}</strong><small>{person.epithetEn}</small><p>{person.summary}</p><p className="en-copy" lang="en">{person.summaryEn}</p></div>
        <div className="person-subjects">{person.subjects.map((subject) => <Badge key={subject} variant="outline">{SUBJECT_LABELS[subject]} · {SUBJECT_LABELS_EN[subject]}</Badge>)}</div>
        <div className="relation-list">
          <h3>可命题关系 <small>VERIFIED EXAM RELATIONS</small></h3>
          {relations.map((relation) => (
            <article key={relation.id}>
              <div><Badge>{relation.examRole}</Badge><span>{relation.relationType}</span></div>
              <p>{relation.claim}</p><p className="en-copy" lang="en">{relation.claimEn}</p>
              {relation.confusionWith?.length ? <small>易混 / CONFUSABLE: {relation.confusionWith.join(' · ')}</small> : null}
              <SourceLinks ids={relation.sourceIds} />
            </article>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FeedbackDialog({
  feedback,
  onNext,
  finalCase,
}: {
  feedback: AnswerFeedback;
  onNext: () => void;
  finalCase: boolean;
}) {
  const person = personById(feedback.question.personId);
  const relation = flowContent.relations.find((item) => item.id === feedback.question.relationId);
  return (
    <DialogContent className={`flow-dialog feedback-dialog ${feedback.correct ? 'is-correct' : 'is-wrong'}`} showCloseButton={false}>
      <DialogHeader>
        <div className="feedback-status">
          {feedback.correct ? <CheckCircle2 /> : <XCircle />}
          <Bilingual
            zh={feedback.correct ? '证据吻合' : '发现一处误区'}
            en={feedback.correct ? 'Evidence matched' : 'Misconception detected'}
          />
        </div>
        <DialogTitle>
          {feedback.correct ? '这页档案已回到正确位置。' : '先修好证据链，稍后本局会再次提取。'}
        </DialogTitle>
      </DialogHeader>
      {!feedback.correct && (
        <div className="answer-contrast">
          <span><small>你的选择 / YOUR CHOICE</small>{feedback.question.options[feedback.selectedIndex]}<em lang="en">{feedback.question.optionsEn[feedback.selectedIndex]}</em></span>
          <span><small>正确答案 / CORRECT</small>{feedback.question.options[feedback.question.answerIndex]}<em lang="en">{feedback.question.optionsEn[feedback.question.answerIndex]}</em></span>
        </div>
      )}
      <div className="feedback-explanation">
        <h3>为什么 / WHY</h3>
        <p>{feedback.question.explanation}</p>
        <p className="en-copy" lang="en">{feedback.question.explanationEn}</p>
      </div>
      {person && relation && (
        <div className="evidence-chain">
          <ScholarPortrait person={person} compact />
          <span><small>人物 / PERSON</small>{person.canonicalNameZh}<em>{person.canonicalNameEn}</em></span>
          <ChevronRight />
          <span><small>关系 / RELATION</small>{relation.claim}<em lang="en">{relation.claimEn}</em></span>
          <ChevronRight />
          <span><small>知识点 / KNOWLEDGE</small>{feedback.question.nodeTitle}<em>{feedback.question.nodeTitleEn}</em></span>
        </div>
      )}
      <a className="source-link" href={feedback.question.sourceUrl} target="_blank" rel="noreferrer">核验本题来源 / VERIFY SOURCE <ExternalLink /></a>
      <DialogFooter>
        <Button onClick={onNext}>
          {finalCase ? '完成第一案 / FINISH CASE' : feedback.context === 'review' ? '下一题 / NEXT' : '继续调查 / CONTINUE'}
          <ChevronRight />
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

function SourceLinks({ ids }: { ids: string[] }) {
  const sources = ids.map(sourceById).filter(Boolean);
  if (!sources.length) return null;
  return (
    <div className="source-links">
      {sources.map((source) => (
        <a key={source!.id} href={source!.url} target="_blank" rel="noreferrer">
          {source!.title}<ExternalLink />
        </a>
      ))}
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  titleEn,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  titleEn: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <section className="inner-page-hero">
      <div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="inner-title-en" lang="en">{titleEn}</p><p>{description}</p></div>
      <span className="inner-hero-icon">{icon}</span>
    </section>
  );
}
