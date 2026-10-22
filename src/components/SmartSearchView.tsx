import React, { useState, useMemo } from 'react';
import { DEFAULT_QUIZ_SETS } from '../data/defaultSets';
import { WRITTEN_QUESTIONS_DATA, WrittenQuestion } from '../data/writtenQuestions';
import { Question } from '../types/quiz';
import { Search, CheckCircle2, BookOpen, Sparkles, Copy, Check, Filter, Layers, HelpCircle } from 'lucide-react';

interface SmartSearchViewProps {
  fontSize: 'normal' | 'large';
  initialQuery?: string;
}

interface SearchResultItem {
  id: string;
  type: 'multiple-choice' | 'written';
  subject: string;
  topic?: string;
  question: string;
  options?: string[];
  correctAnswer?: number;
  answerText: string;
  explanation?: string;
}

export const SmartSearchView: React.FC<SmartSearchViewProps> = ({ fontSize, initialQuery = '' }) => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'multiple-choice' | 'written'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Flatten all multiple choice questions
  const allQuestions: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    DEFAULT_QUIZ_SETS.forEach((set) => {
      set.questions.forEach((q: Question) => {
        const correctOpt = q.options && q.correctAnswer !== undefined ? q.options[q.correctAnswer] : '';
        const optLetter = q.correctAnswer !== undefined ? ['A', 'B', 'C', 'D'][q.correctAnswer] : '';
        list.push({
          id: `mc-${set.id}-${q.id}`,
          type: 'multiple-choice',
          subject: set.subject,
          topic: q.topic || set.title,
          question: q.content,
          options: q.options,
          correctAnswer: q.correctAnswer,
          answerText: `${optLetter}. ${correctOpt}`,
          explanation: q.explanation
        });
      });
    });

    WRITTEN_QUESTIONS_DATA.forEach((wq: WrittenQuestion) => {
      list.push({
        id: `wt-${wq.id}`,
        type: 'written',
        subject: wq.subject,
        topic: wq.topic || (wq.type === 'short' ? 'Trả lời ngắn' : 'Tự luận'),
        question: wq.question,
        answerText: wq.answer,
        explanation: wq.guide
      });
    });

    return list;
  }, []);

  // Filtered list
  const results = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    return allQuestions.filter((item) => {
      // Filter by subject
      if (selectedSubject !== 'all') {
        const itemSubj = item.subject.toLowerCase();
        const selSubj = selectedSubject.toLowerCase();
        if (!itemSubj.includes(selSubj) && !selSubj.includes(itemSubj)) {
          return false;
        }
      }

      // Filter by type
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }

      // Filter by keyword
      if (!cleanQuery) return true;

      const qMatch = item.question.toLowerCase().includes(cleanQuery);
      const aMatch = item.answerText.toLowerCase().includes(cleanQuery);
      const expMatch = item.explanation ? item.explanation.toLowerCase().includes(cleanQuery) : false;
      const topicMatch = item.topic ? item.topic.toLowerCase().includes(cleanQuery) : false;

      return qMatch || aMatch || expMatch || topicMatch;
    });
  }, [allQuestions, query, selectedSubject, selectedType]);

  const handleCopy = (item: SearchResultItem) => {
    const textToCopy = `[${item.subject}] ${item.question}\n=> Đáp án: ${item.answerText}${
      item.explanation ? `\n(Giải thích: ${item.explanation})` : ''
    }`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const highlightMatch = (text: string, keyword: string) => {
    if (!keyword.trim()) return text;
    const parts = text.split(new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={index} className="bg-amber-200 dark:bg-amber-900/60 text-amber-950 dark:text-amber-100 font-semibold px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const subjectTabs = [
    { id: 'all', name: 'Tất cả các môn' },
    { id: 'Khoa Học Tự Nhiên', name: 'KHTN 8' },
    { id: 'Toán', name: 'Toán 8' },
    { id: 'Ngữ Văn', name: 'Ngữ Văn 8' },
    { id: 'Tiếng Anh', name: 'Tiếng Anh 8' },
    { id: 'Lịch Sử', name: 'Lịch Sử & Địa Lí 8' },
    { id: 'Tin Học', name: 'Tin Học 8' },
    { id: 'Công Nghệ', name: 'Công Nghệ 8' },
    { id: 'Giáo Dục Công Dân', name: 'GDCD 8' },
    { id: 'HĐTN', name: 'HĐTN & GDĐP' }
  ];

  return (
    <div className={`space-y-6 ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      {/* Search Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Tra Cứu Tức Thì - Live Smart Search
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            🔍 Tra Cứu Thông Minh Toàn Bộ Đề Cương
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base leading-relaxed">
            Gõ bất kỳ từ khóa nào (công thức, khái niệm, nhân vật, câu hỏi...), hệ thống sẽ tự động tìm kiếm và hiện ngay đáp án cùng giải thích chi tiết trong tích tắc.
          </p>
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Gõ từ khóa tìm kiếm (Ví dụ: khối lượng riêng, A4, Ba-xti, tam giác đều, FOMO, Thiên Mạc, gang, 120 độ...)"
            className="w-full pl-12 pr-10 py-3.5 text-base sm:text-lg rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-emerald-500/40 dark:border-emerald-600/40 focus:border-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm bg-slate-200 dark:bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Subject Filter Chips with Big Readable Text */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Lọc theo môn học:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjectTabs.map((tab) => {
              const active = selectedSubject === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSubject(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all cursor-pointer border ${
                    active
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Type Filter */}
        <div className="flex items-center gap-3 pt-1 border-t border-slate-100 dark:border-slate-800 text-sm">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Dạng câu hỏi:</span>
          <div className="inline-flex rounded-lg bg-slate-100 dark:bg-slate-800 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Tất cả ({allQuestions.length})
            </button>
            <button
              onClick={() => setSelectedType('multiple-choice')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'multiple-choice'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Trắc nghiệm
            </button>
            <button
              onClick={() => setSelectedType('written')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'written'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Tự luận & Trả lời ngắn
            </button>
          </div>
          <span className="text-xs text-slate-500 ml-auto font-medium">
            Tìm thấy: <strong className="text-emerald-600 dark:text-emerald-400">{results.length}</strong> kết quả
          </span>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              Không tìm thấy câu hỏi phù hợp với "{query}"
            </h3>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              Hãy thử tìm kiếm với các từ khóa ngắn hơn như: <em>"đa thức", "thán từ", "hơi nước", "A4", "Hoàng Sa"</em>...
            </p>
          </div>
        ) : (
          results.slice(0, 50).map((item, idx) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative text-left"
            >
              {/* Card Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                    {item.subject}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.type === 'multiple-choice' ? 'Trắc nghiệm' : 'Tự luận'}
                  </span>
                  {item.topic && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                      • {item.topic}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleCopy(item)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  title="Sao chép câu hỏi và đáp án"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Question Content */}
              <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-3 leading-snug">
                <span className="text-emerald-600 dark:text-emerald-400 mr-1.5">#{idx + 1}.</span>
                {highlightMatch(item.question, query)}
              </div>

              {/* Options list for Multiple Choice */}
              {item.options && item.options.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {item.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === item.correctAnswer;
                    const letter = ['A', 'B', 'C', 'D'][oIdx];
                    return (
                      <div
                        key={oIdx}
                        className={`text-sm p-2 rounded-lg border flex items-start gap-2 ${
                          isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 font-semibold'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Answer Box */}
              <div className="mt-3 p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-slate-800 dark:text-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Đáp án chính xác:</span>
                </div>
                <div className="font-semibold text-sm sm:text-base whitespace-pre-line text-emerald-950 dark:text-emerald-100">
                  {highlightMatch(item.answerText, query)}
                </div>

                {item.explanation && (
                  <div className="mt-2 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">Giải thích / Hướng dẫn: </span>
                    {highlightMatch(item.explanation, query)}
                  </div>
                )}
              </div>
            </div>
          ))
        )}

        {results.length > 50 && (
          <div className="text-center py-4 text-xs font-semibold text-slate-500">
            Hiển thị 50 kết quả đầu tiên. Hãy thu hẹp từ khóa tìm kiếm để xem chính xác hơn.
          </div>
        )}
      </div>
    </div>
  );
};
