import React, { useState } from 'react';
import { 
  FileEdit, Eye, EyeOff, Search, ArrowLeft, 
  HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Printer 
} from 'lucide-react';
import { WRITTEN_QUESTIONS_DATA, WrittenQuestion } from '../data/writtenQuestions';

interface WrittenQuestionsViewProps {
  onBackToLibrary: () => void;
}

export const WrittenQuestionsView: React.FC<WrittenQuestionsViewProps> = ({
  onBackToLibrary
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'short' | 'essay'>('all');
  const [search, setSearch] = useState('');
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const availableSubjects = ['all', ...Array.from(new Set(WRITTEN_QUESTIONS_DATA.map(q => q.subject)))];

  const filtered = WRITTEN_QUESTIONS_DATA.filter(q => {
    const matchSubj = selectedSubject === 'all' || q.subject === selectedSubject;
    const matchType = selectedType === 'all' || q.type === selectedType;
    const matchSearch = !search.trim() || 
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.answer.toLowerCase().includes(search.toLowerCase());
    return matchSubj && matchType && matchSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setExpandedIds(filtered.map(q => q.id));
  };

  const handleCollapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Navigation & Controls Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kho Đề</span>
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Tự Luận & Trả Lời Ngắn (THCS Bát Tràng)</span>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full tabular-nums">
                  {WRITTEN_QUESTIONS_DATA.length} câu
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Toàn bộ 30 câu trả lời ngắn và 9 bài tập tự luận có lời giải chi tiết
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handleExpandAll}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
            >
              Hiện Tất Cả Lời Giải
            </button>
            <button
              onClick={handleCollapseAll}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
            >
              Ẩn Lời Giải
            </button>
            <button
              onClick={() => window.print()}
              title="In phần tự luận ra giấy"
              className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 no-print">
          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
            {availableSubjects.map(subj => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubject === subj
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {subj === 'all' ? 'Tất Cả Các Môn' : subj}
              </button>
            ))}
          </div>

          {/* Type Selector */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tất Cả ({filtered.length})
            </button>
            <button
              onClick={() => setSelectedType('short')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'short'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Trả Lời Ngắn (30 câu)
            </button>
            <button
              onClick={() => setSelectedType('essay')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedType === 'essay'
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bài Tập Tự Luận (9 câu)
            </button>
          </div>
        </div>

        {/* List of Questions */}
        <div className="space-y-4">
          {filtered.map((item, idx) => {
            const isExpanded = expandedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">
                      {item.subject}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {item.type === 'short' ? 'Trả lời ngắn' : 'Bài tập tự luận'}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer no-print"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Ẩn Lời Giải</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>Xem Lời Giải Chi Tiết</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Question Text */}
                <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {item.question}
                </div>

                {/* Collapsible Answer & Guide */}
                {isExpanded && (
                  <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl space-y-2 animate-in fade-in duration-150">
                    <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đáp án & Lời giải:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium">
                      {item.answer}
                    </div>
                    {item.guide && (
                      <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-emerald-200/60 dark:border-emerald-800/40 italic">
                        {item.guide}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
