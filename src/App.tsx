/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, BookOpen, Sparkles, Filter, Plus, 
  RotateCcw, Trophy, CheckCircle2, AlertCircle, Share2, Printer
} from 'lucide-react';
import { QuizSet, Question, PracticeConfig, ExamResult, MistakeRecord } from './types/quiz';
import { 
  getAllQuizSets, saveQuizSet, deleteQuizSet, resetToDefaults,
  getMistakes, clearAllMistakes, resolveMistake, 
  getExamHistory, saveExamResult 
} from './utils/storage';
import { shuffleArray, shuffleQuestionOptions } from './utils/parser';
import { Header, NavTab } from './components/Header';
import { QuizCard } from './components/QuizCard';
import { PracticeConfigModal } from './components/PracticeConfigModal';
import { PracticeSessionView } from './components/PracticeSessionView';
import { ExamResultView } from './components/ExamResultView';
import { StudyReviewView } from './components/StudyReviewView';
import { WrittenQuestionsView } from './components/WrittenQuestionsView';
import { MistakesNotebookView } from './components/MistakesNotebookView';
import { ExamHistoryView } from './components/ExamHistoryView';
import { ImportExportModal } from './components/ImportExportModal';
import { PrintSheetModal } from './components/PrintSheetModal';

export default function App() {
  // Navigation & View State
  const [currentTab, setCurrentTab] = useState<NavTab>('library');
  const [activeSession, setActiveSession] = useState<{
    quizSet: QuizSet;
    questions: Question[];
    config: PracticeConfig;
  } | null>(null);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Data sets & records
  const [quizSets, setQuizSets] = useState<QuizSet[]>([]);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [history, setHistory] = useState<ExamResult[]>([]);

  // Modals
  const [configModalSet, setConfigModalSet] = useState<QuizSet | null>(null);
  const [printModalSet, setPrintModalSet] = useState<QuizSet | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [studyReviewSetId, setStudyReviewSetId] = useState<string | undefined>(undefined);

  // Filters & Search
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Accessibility & Theme
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('onluyen_theme') === 'dark';
    }
    return false;
  });
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  // Load initial data
  useEffect(() => {
    setQuizSets(getAllQuizSets());
    setMistakes(getMistakes());
    setHistory(getExamHistory());
  }, []);

  // Sync theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('onluyen_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('onluyen_theme', 'light');
    }
  }, [isDark]);

  // Handle Practice Initiation
  const handleOpenPracticeConfig = (set: QuizSet) => {
    setConfigModalSet(set);
  };

  const handleStartPractice = (config: PracticeConfig) => {
    if (!configModalSet) return;

    let questionsToUse = [...configModalSet.questions];

    // Shuffle questions if requested
    if (config.shuffleQuestions) {
      questionsToUse = shuffleArray(questionsToUse);
    }

    // Limit count
    questionsToUse = questionsToUse.slice(0, config.questionCount);

    // Shuffle options if requested
    if (config.shuffleOptions) {
      questionsToUse = questionsToUse.map(q => shuffleQuestionOptions(q));
    }

    setActiveSession({
      quizSet: configModalSet,
      questions: questionsToUse,
      config
    });

    setConfigModalSet(null);
    setExamResult(null);
  };

  const handleFinishExam = (result: ExamResult) => {
    saveExamResult(result);
    setHistory(getExamHistory());
    setMistakes(getMistakes());
    setExamResult(result);
    setActiveSession(null);
  };

  const handleRetakeMistakes = (mistakeQuestions: Question[]) => {
    if (!examResult) return;
    const currentQuiz = quizSets.find(s => s.id === examResult.quizSetId) || quizSets[0];

    setActiveSession({
      quizSet: {
        ...currentQuiz,
        title: `Ôn Lại Câu Sai - ${currentQuiz.title}`
      },
      questions: shuffleArray(mistakeQuestions),
      config: {
        mode: 'immediate',
        questionCount: mistakeQuestions.length,
        shuffleQuestions: true,
        shuffleOptions: true,
        timeLimitMinutes: 0
      }
    });

    setExamResult(null);
  };

  const handlePracticeAllMistakes = (questions: Question[]) => {
    if (questions.length === 0) return;
    const dummySet: QuizSet = {
      id: `mistake-practice-${Date.now()}`,
      title: 'Luyện Tập Chuyên Sâu: Toàn Bộ Sổ Câu Sai',
      subject: 'Tổng Hợp',
      grade: 'Mọi Khối Lớp',
      description: 'Luyện tập lại các câu hỏi từng làm sai cho đến khi đạt điểm tối đa.',
      questions,
      summaries: [],
      createdAt: new Date().toISOString()
    };

    setActiveSession({
      quizSet: dummySet,
      questions: shuffleArray(questions),
      config: {
        mode: 'immediate',
        questionCount: questions.length,
        shuffleQuestions: true,
        shuffleOptions: true,
        timeLimitMinutes: 0
      }
    });
  };

  const handleImportNewSet = (newSet: QuizSet) => {
    saveQuizSet(newSet);
    setQuizSets(getAllQuizSets());
    setCurrentTab('library');
  };

  const handleDeleteSet = (id: string) => {
    deleteQuizSet(id);
    setQuizSets(getAllQuizSets());
  };

  const handleResetDefaults = () => {
    if (window.confirm('Khôi phục các bộ đề mẫu ban đầu?')) {
      resetToDefaults();
      setQuizSets(getAllQuizSets());
    }
  };

  // Filtered Quiz Sets
  const filteredSets = quizSets.filter(s => {
    const matchesSubject = selectedSubject === 'all' || s.subject === selectedSubject;
    const matchesSearch = !searchQuery.trim() || 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const subjectsList = ['all', ...Array.from(new Set(quizSets.map(s => s.subject)))];

  // If currently taking a test
  if (activeSession) {
    return (
      <div className={isDark ? 'dark' : ''}>
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
          <PracticeSessionView
            quizSet={activeSession.quizSet}
            questions={activeSession.questions}
            config={activeSession.config}
            fontSize={fontSize}
            onExit={() => setActiveSession(null)}
            onFinish={handleFinishExam}
          />
        </div>
      </div>
    );
  }

  // If viewing exam result
  if (examResult) {
    return (
      <div className={isDark ? 'dark' : ''}>
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors">
          <ExamResultView
            result={examResult}
            onRetake={() => {
              const currentQuiz = quizSets.find(s => s.id === examResult.quizSetId) || quizSets[0];
              handleOpenPracticeConfig(currentQuiz);
              setExamResult(null);
            }}
            onRetakeMistakes={handleRetakeMistakes}
            onBackToLibrary={() => {
              setExamResult(null);
              setCurrentTab('library');
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-slate-50/60 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        
        {/* Top Bar Header */}
        <Header
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          onOpenImport={() => setIsImportModalOpen(true)}
          isDark={isDark}
          onToggleDark={() => setIsDark(!isDark)}
          fontSize={fontSize}
          onToggleFontSize={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
          mistakesCount={mistakes.length}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Tab 1: Library / Kho Đề Cương */}
          {currentTab === 'library' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
              
              {/* Hero Banner Section */}
              <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 max-w-3xl space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full flex-wrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>TRƯỜNG THCS BÁT TRÀNG · Năm học 2026-2027</span>
                    <span aria-hidden="true">·</span>
                    <span>Lớp 8B</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    Đề Cương Ôn Tập Giữa Học Kì I Môn KHTN 8
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    Hệ thống trọn vẹn toàn bộ đề cương chính thức: 55 câu trắc nghiệm (Vật lý, Hóa học, Sinh học) · 30 câu đúng/sai · 30 câu trả lời ngắn · 9 bài tự luận có lời giải chi tiết.
                  </p>

                  {/* Bright Quick Stat Counters */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-2.5 text-center">
                      <div className="text-lg font-extrabold text-emerald-300 tabular-nums">55</div>
                      <div className="text-[11px] text-slate-300">Trắc nghiệm 4 lựa chọn</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-2.5 text-center">
                      <div className="text-lg font-extrabold text-amber-300 tabular-nums">30</div>
                      <div className="text-[11px] text-slate-300">Trắc nghiệm Đúng / Sai</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-2.5 text-center">
                      <div className="text-lg font-extrabold text-sky-300 tabular-nums">30</div>
                      <div className="text-[11px] text-slate-300">Câu trả lời ngắn</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-2.5 text-center">
                      <div className="text-lg font-extrabold text-purple-300 tabular-nums">9</div>
                      <div className="text-[11px] text-slate-300">Bài tập tự luận lớn</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => {
                        const tongHop = quizSets.find(s => s.id === 'khtn8-tong-hop-bat-trang') || quizSets[0];
                        if (tongHop) handleOpenPracticeConfig(tongHop);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-emerald-700" />
                      <span>Thi Thử Tổng Hợp (55 Câu)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('written')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 rounded-xl transition-all cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Tự Luận & Trả Lời Ngắn (39 Câu)</span>
                    </button>

                    <button
                      onClick={() => {
                        const firstWithSummary = quizSets.find(s => s.summaries && s.summaries.length > 0) || quizSets[0];
                        if (firstWithSummary) {
                          setStudyReviewSetId(firstWithSummary.id);
                          setCurrentTab('study');
                        }
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all cursor-pointer"
                    >
                      <span>Ôn Lý Thuyết & Công Thức</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Search & Subject Filter Bar */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  
                  {/* Search Input */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm môn học, chủ đề, khối lớp..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-600 shadow-xs"
                    />
                  </div>

                  {/* Actions right */}
                  <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white tabular-nums">
                      {filteredSets.length}
                    </span>
                    <span>bộ đề sẵn sàng</span>
                  </div>
                </div>

                {/* Subject Filter Tabs (Interactive Segmented Control) */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                  {subjectsList.map(subj => (
                    <button
                      key={subj}
                      onClick={() => setSelectedSubject(subj)}
                      className={`px-3.5 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        selectedSubject === subj
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {subj === 'all' ? 'Tất Cả Các Môn' : subj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Quiz Sets */}
              {filteredSets.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500 max-w-md mx-auto">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Không tìm thấy bộ đề phù hợp.</p>
                  <p className="text-xs mt-1">Thử đổi từ khóa tìm kiếm hoặc nhấn "Nhập Đề Cương" để thêm bộ đề mới!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredSets.map(set => (
                    <QuizCard
                      key={set.id}
                      quizSet={set}
                      onStartPractice={handleOpenPracticeConfig}
                      onReviewStudy={(s) => {
                        setStudyReviewSetId(s.id);
                        setCurrentTab('study');
                      }}
                      onPrintSet={(s) => setPrintModalSet(s)}
                      onDeleteSet={handleDeleteSet}
                    />
                  ))}
                </div>
              )}

              {/* Reset to defaults helper for testing */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Ôn Luyện Pro · Dự án phục vụ giáo viên và học sinh Việt Nam</span>
                <button
                  onClick={handleResetDefaults}
                  className="hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Khôi phục đề mẫu mặc định</span>
                </button>
              </div>

            </div>
          )}

          {/* Tab 2: Study & Review / Ôn Kiến Thức */}
          {currentTab === 'study' && (
            <StudyReviewView
              quizSets={quizSets}
              initialSetId={studyReviewSetId}
              onStartPractice={handleOpenPracticeConfig}
              onBackToLibrary={() => setCurrentTab('library')}
            />
          )}

          {/* Tab: Written & Short Questions / Tự Luận & Trả Lời Ngắn */}
          {currentTab === 'written' && (
            <WrittenQuestionsView
              onBackToLibrary={() => setCurrentTab('library')}
            />
          )}

          {/* Tab 3: Mistakes Notebook / Sổ Câu Sai */}
          {currentTab === 'mistakes' && (
            <MistakesNotebookView
              mistakes={mistakes}
              onStartPracticeMistakes={handlePracticeAllMistakes}
              onResolveMistake={(qId) => {
                resolveMistake(qId);
                setMistakes(getMistakes());
              }}
              onClearAllMistakes={() => {
                clearAllMistakes();
                setMistakes([]);
              }}
              onBackToLibrary={() => setCurrentTab('library')}
            />
          )}

          {/* Tab 4: History / Lịch Sử Thi */}
          {currentTab === 'history' && (
            <ExamHistoryView
              history={history}
              onReviewResult={(res) => setExamResult(res)}
              onBackToLibrary={() => setCurrentTab('library')}
            />
          )}
        </main>

        {/* Practice Config Modal */}
        {configModalSet && (
          <PracticeConfigModal
            quizSet={configModalSet}
            isOpen={!!configModalSet}
            onClose={() => setConfigModalSet(null)}
            onStart={handleStartPractice}
          />
        )}

        {/* Import/Export Modal */}
        <ImportExportModal
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          onImportSet={handleImportNewSet}
          allSets={quizSets}
        />

        {/* Printable Worksheet Modal */}
        <PrintSheetModal
          quizSet={printModalSet}
          isOpen={!!printModalSet}
          onClose={() => setPrintModalSet(null)}
        />

      </div>
    </div>
  );
}
