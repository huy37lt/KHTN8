/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, BookOpen, Sparkles, Filter, Plus, 
  RotateCcw, Trophy, CheckCircle2, AlertCircle, Share2, Printer,
  Zap, Flame, FlaskConical
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
import { IntroGuideModal } from './components/IntroGuideModal';
import { SpeedCheatSheetView } from './components/SpeedCheatSheetView';
import { MindmapView } from './components/MindmapView';
import { FlashcardsView } from './components/FlashcardsView';
import { SmartSearchView } from './components/SmartSearchView';
import { VirtualLabView } from './components/VirtualLabView';

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
  const [isIntroOpen, setIsIntroOpen] = useState(false);
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

  // Load initial data and check first-time intro
  useEffect(() => {
    setQuizSets(getAllQuizSets());
    setMistakes(getMistakes());
    setHistory(getExamHistory());

    // Auto-open intro slide on first visit for students
    if (typeof window !== 'undefined') {
      const hasSeen = localStorage.getItem('khtn8_intro_seen');
      if (!hasSeen) {
        setIsIntroOpen(true);
        localStorage.setItem('khtn8_intro_seen', 'true');
      }
    }
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

  const handleStartBlitz = () => {
    const tongHop = quizSets.find(s => s.id === 'khtn8-tong-hop-bat-trang') || quizSets[0];
    if (!tongHop) return;

    // Pick 10 random questions and shuffle their options
    const shuffledQ = shuffleArray(tongHop.questions).slice(0, 10).map(q => shuffleQuestionOptions(q));

    setActiveSession({
      quizSet: {
        ...tongHop,
        title: '⚡ Thử Thách Nhanh 10 Câu (3 Phút)'
      },
      questions: shuffledQ,
      config: {
        mode: 'exam',
        questionCount: 10,
        shuffleQuestions: true,
        shuffleOptions: true,
        timeLimitMinutes: 3
      }
    });

    setExamResult(null);
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
              <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
                <div className="relative z-10 max-w-4xl space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-full flex-wrap shadow-xs">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>TRƯỜNG THCS BÁT TRÀNG · Năm học 2026-2027</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-300 font-extrabold">LỚP 8B TRỌN BỘ 9 MÔN</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                    Cổng Ôn Tập Đề Cương Giữa Học Kì I - Lớp 8B
                  </h1>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
                    Trọn vẹn 9 môn học chính thức: <strong>KHTN 8 (Lý, Hóa, Sinh) · Toán 8 · Ngữ Văn 8 · Tiếng Anh 8 · Lịch Sử & Địa Lí 8 · Tin Học 8 · Công Nghệ 8 · GDCD 8 · HĐTN & GDĐP</strong>. Tích hợp sơ đồ tư duy tương tác, thẻ nhớ 3D và tra cứu đáp án thông minh.
                  </p>

                  {/* Bright Quick Stat Counters */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-emerald-300 tabular-nums">9 Môn Học</div>
                      <div className="text-[11px] text-slate-300 font-medium">Toàn bộ đề cương Bát Tràng</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-amber-300 tabular-nums">18+ Bộ Đề</div>
                      <div className="text-[11px] text-slate-300 font-medium">Trắc nghiệm phân loại</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-sky-300 tabular-nums">220+ Câu</div>
                      <div className="text-[11px] text-slate-300 font-medium">Trắc nghiệm có giải thích</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-purple-300 tabular-nums">60+ Câu</div>
                      <div className="text-[11px] text-slate-300 font-medium">Tự luận, bài tập & tình huống</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2.5 flex-wrap">
                    <button
                      onClick={() => setCurrentTab('lab')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-md transition-all cursor-pointer ring-2 ring-emerald-400/50"
                    >
                      <FlaskConical className="w-4 h-4 text-emerald-200" />
                      <span>🧪 Phòng Thí Nghiệm Ảo (Mô Phỏng Trực Quan)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('search')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <Search className="w-4 h-4 text-slate-900" />
                      <span>🔍 Tra Cứu Thông Minh (Live Search)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('mindmap')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>🌳 Bản Đồ Tư Duy (Mindmap)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('flashcards')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>🃏 Thẻ Nhớ 3D (Active Recall)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('speed')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-rose-600/90 hover:bg-rose-500 rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      <Flame className="w-4 h-4 text-amber-200" />
                      <span>🔥 Bí Kíp 5 Phút (Bẫy đề)</span>
                    </button>

                    <button
                      onClick={() => setCurrentTab('written')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-500/40 rounded-xl transition-all cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Tự Luận (60 Câu)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Search & Subject Filter Bar with BIGGER subject text */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1 max-w-xl">
                    <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm môn học, bài thi, khái niệm, từ khóa..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-sm sm:text-base pl-11 pr-24 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-sm"
                    />
                    <button
                      onClick={() => setCurrentTab('search')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Tra cứu sâu ➔
                    </button>
                  </div>

                  {/* Actions right */}
                  <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-slate-900 dark:text-white tabular-nums text-sm">
                      {filteredSets.length}
                    </span>
                    <span>bộ đề sẵn sàng ôn luyện</span>
                  </div>
                </div>

                {/* Big Readable Subject Filter Tabs */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    DANH MỤC MÔN HỌC (Bấm để lọc đề thi):
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 text-sm sm:text-base">
                    {subjectsList.map(subj => {
                      const isSelected = selectedSubject === subj;
                      return (
                        <button
                          key={subj}
                          onClick={() => setSelectedSubject(subj)}
                          className={`px-4 py-2.5 rounded-xl font-extrabold whitespace-nowrap transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {subj === 'all' ? '🌟 Tất Cả Các Môn' : subj}
                        </button>
                      );
                    })}
                  </div>
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

          {/* Tab 5: Speed Cheat Sheet / Bí Kíp Cấp Tốc 5 Phút & Bẫy Đề */}
          {currentTab === 'speed' && (
            <SpeedCheatSheetView
              onBackToLibrary={() => setCurrentTab('library')}
              onStartBlitz={handleStartBlitz}
            />
          )}

          {/* Tab 6: Smart Live Search / Tra Cứu Thông Minh */}
          {currentTab === 'search' && (
            <SmartSearchView
              fontSize={fontSize}
              initialQuery={searchQuery}
            />
          )}

          {/* Tab 7: Interactive Mindmap / Bản Đồ Tư Duy */}
          {currentTab === 'mindmap' && (
            <MindmapView
              fontSize={fontSize}
            />
          )}

          {/* Tab 8: 3D Flashcards / Thẻ Ghi Nhớ */}
          {currentTab === 'flashcards' && (
            <FlashcardsView
              fontSize={fontSize}
            />
          )}

          {/* Tab: Virtual Lab / Phòng Thí Nghiệm Ảo */}
          {currentTab === 'lab' && (
            <VirtualLabView />
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

        {/* Interactive Intro Slide Showcase */}
        <IntroGuideModal
          isOpen={isIntroOpen}
          onClose={() => setIsIntroOpen(false)}
          onStartExam={() => {
            const tongHop = quizSets.find(s => s.id === 'khtn8-tong-hop-bat-trang') || quizSets[0];
            if (tongHop) handleOpenPracticeConfig(tongHop);
          }}
        />

      </div>
    </div>
  );
}
