import React, { useState } from 'react';
import { X, FileText, Upload, Download, Sparkles, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { QuizSet, Question } from '../types/quiz';
import { parseQuestionsFromText, parseSummariesFromText } from '../utils/parser';

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSet: (newSet: QuizSet) => void;
  allSets: QuizSet[];
}

export const ImportExportModal: React.FC<ImportExportModalProps> = ({
  isOpen,
  onClose,
  onImportSet,
  allSets
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'json' | 'template'>('text');

  // Form states
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Toán Học');
  const [grade, setGrade] = useState('Lớp 9 & Vào 10');
  const [description, setDescription] = useState('');
  const [rawText, setRawText] = useState('');
  const [summaryText, setSummaryText] = useState('');

  // JSON state
  const [jsonInput, setJsonInput] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  // Live parsing
  const parsedQuestions = parseQuestionsFromText(rawText);
  const parsedSummaries = parseSummariesFromText(summaryText);

  const handleInsertSample = () => {
    setTitle('Đề Cương Ôn Tập Luyện Thi Trắc Nghiệm Mẫu');
    setSubject('Toán Học');
    setGrade('Lớp 9');
    setDescription('Đề thi thử gồm các câu hỏi đại số và hình học có đáp án và lời giải chi tiết.');
    setRawText(`Câu 1: Biểu thức √(3x - 12) có nghĩa khi và chỉ khi:
A. x ≥ 4
B. x > 4
C. x ≤ 4
D. x < 4
Đáp án: A
Giải thích: Căn thức √(A) có nghĩa khi A ≥ 0. Ta có 3x - 12 ≥ 0 ⇔ 3x ≥ 12 ⇔ x ≥ 4.

Câu 2: Phương trình x² - 5x + 6 = 0 có hai nghiệm là:
A. x = 2; x = 3
B. x = -2; x = -3
C. x = 1; x = 6
D. x = -1; x = 6
Đáp án: A
Giải thích: Ta có a + b + c không bằng 0, phân tích thành nhân tử: (x - 2)(x - 3) = 0 ⇔ x = 2 hoặc x = 3.

Câu 3: Cho đường tròn (O; 5cm). Dây cung AB có độ dài 8cm. Khoảng cách từ tâm O đến dây AB bằng:
A. 3 cm
B. 4 cm
C. 5 cm
D. 2 cm
Đáp án: A
Giải thích: Kẻ OH vuông góc AB thì H là trung điểm AB nên AH = 4cm. Xét tam giác vuông OHA: OH = √(OA² - AH²) = √(5² - 4²) = 3cm.`);

    setSummaryText(`Chủ đề: Căn thức và Phương trình bậc hai
• Căn thức bậc hai √(A) có nghĩa khi A ≥ 0.
• Phương trình ax² + bx + c = 0 có nghiệm khi Δ = b² - 4ac ≥ 0.
• Khoảng cách từ tâm đến dây cung: d = √(R² - (dây/2)²).`);
  };

  const handleSaveTextSet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setStatusMessage({ type: 'error', text: 'Vui lòng nhập tiêu đề cho bộ đề cương!' });
      return;
    }
    if (parsedQuestions.length === 0) {
      setStatusMessage({ type: 'error', text: 'Chưa phát hiện câu hỏi nào! Vui lòng kiểm tra lại định dạng câu hỏi.' });
      return;
    }

    const newSet: QuizSet = {
      id: `set-custom-${Date.now()}`,
      title: title.trim(),
      subject,
      grade,
      description: description.trim() || `Bộ đề cương gồm ${parsedQuestions.length} câu hỏi.`,
      questions: parsedQuestions,
      summaries: parsedSummaries,
      createdAt: new Date().toISOString()
    };

    onImportSet(newSet);
    onClose();
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (Array.isArray(parsed)) {
        parsed.forEach(s => onImportSet(s));
      } else if (parsed.title && Array.isArray(parsed.questions)) {
        onImportSet({
          ...parsed,
          id: `set-import-${Date.now()}`
        });
      } else {
        throw new Error('Định dạng JSON không hợp lệ');
      }
      onClose();
    } catch {
      setStatusMessage({ type: 'error', text: 'File JSON không hợp lệ hoặc sai cấu trúc đề cương.' });
    }
  };

  const handleDownloadAllJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allSets, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', `onluyen_pro_decuong_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Nhập Đề Cương Ôn Tập Mới
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Thầy cô và học sinh có thể dán đề cương từ Word/PDF hoặc tải tệp JSON
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="px-6 pt-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs font-semibold shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`pb-2.5 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'text'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Dán Văn Bản Trực Tiếp
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('json')}
            className={`pb-2.5 border-b-2 cursor-pointer transition-colors ${
              activeTab === 'json'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Nhập / Xuất Tệp JSON
          </button>
        </div>

        {/* Status notification */}
        {statusMessage && (
          <div className={`px-6 py-2.5 text-xs font-semibold flex items-center gap-2 ${
            statusMessage.type === 'error' ? 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300' : 'bg-emerald-50 text-emerald-700'
          }`}>
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'text' && (
            <form id="text-form" onSubmit={handleSaveTextSet} className="space-y-4">
              
              {/* Top metadata grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tiêu Đề Bộ Đề Cương *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Đề Cương Ôn Thi Giữa Kỳ 2 Môn Hóa Học Lớp 9"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Môn Học
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                  >
                    <option value="Toán Học">Toán Học</option>
                    <option value="Ngữ Văn">Ngữ Văn</option>
                    <option value="Tiếng Anh">Tiếng Anh</option>
                    <option value="Khoa Học Tự Nhiên">Khoa Học Tự Nhiên</option>
                    <option value="Vật Lý">Vật Lý</option>
                    <option value="Hóa Học">Hóa Học</option>
                    <option value="Sinh Học">Sinh Học</option>
                    <option value="Lịch Sử & Địa Lý">Lịch Sử & Địa Lý</option>
                    <option value="Tin Học">Tin Học</option>
                    <option value="Giáo Dục Công Dân">Giáo Dục Công Dân</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Khối Lớp
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Lớp 9, Lớp 10, Ôn thi vào 10..."
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mô Tả Ngắn
                  </label>
                  <input
                    type="text"
                    placeholder="Mô tả mục tiêu, dạng bài tập hoặc lưu ý cho các con..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Action helper bar */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Nội Dung Đề Cương (Câu hỏi & Đáp án) *
                </span>
                <button
                  type="button"
                  onClick={handleInsertSample}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
                >
                  + Chèn Đề Mẫu Để Xem Thử
                </button>
              </div>

              {/* Textarea for Questions */}
              <div className="relative">
                <textarea
                  rows={9}
                  required
                  placeholder={`Dán nội dung câu hỏi tại đây theo định dạng quen thuộc của thầy cô:\n\nCâu 1: Câu hỏi là gì?\nA. Đáp án A\nB. Đáp án B\nC. Đáp án C\nD. Đáp án D\nĐáp án: A\nGiải thích: Lời giải vì sao chọn A...`}
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  className="w-full text-xs sm:text-sm font-mono p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600 leading-relaxed"
                />

                {/* Live parsed badge */}
                <div className="absolute bottom-3 right-3 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-slate-700 dark:text-slate-200 tabular-nums">
                    Nhận diện: {parsedQuestions.length} câu
                  </span>
                </div>
              </div>

              {/* Optional: Summary text */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phần Tóm Tắt Lý Thuyết / Công Thức Trọng Tâm (Tùy chọn)
                </label>
                <textarea
                  rows={3}
                  placeholder={`Mỗi dòng là một ý cốt lõi hoặc công thức tóm tắt để học sinh đọc ôn lại trước khi làm bài.\nVí dụ:\n• Công thức tính vận tốc: v = s / t\n• Mẹo ghi nhớ: Đơn vị phải đồng nhất giữa km/h và m/s.`}
                  value={summaryText}
                  onChange={(e) => setSummaryText(e.target.value)}
                  className="w-full text-xs sm:text-sm font-mono p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              {/* Preview of first question if detected */}
              {parsedQuestions.length > 0 && (
                <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300">
                    Xem trước câu 1: {parsedQuestions[0].content}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300">
                    Đáp án đúng: <span className="font-bold text-emerald-700 dark:text-emerald-400">{String.fromCharCode(65 + parsedQuestions[0].correctAnswer)}. {parsedQuestions[0].options[parsedQuestions[0].correctAnswer]}</span>
                  </div>
                  {parsedQuestions[0].explanation && (
                    <div className="text-slate-500 italic">
                      Giải thích: {parsedQuestions[0].explanation}
                    </div>
                  )}
                </div>
              )}

            </form>
          )}

          {activeTab === 'json' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Dán Mã JSON Đề Cương
                </span>
                <button
                  type="button"
                  onClick={handleDownloadAllJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Sao Lưu Tất Cả Đề (Tải JSON)</span>
                </button>
              </div>

              <textarea
                rows={12}
                placeholder="Dán mã JSON đề cương vào đây..."
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full text-xs font-mono p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleImportJson}
                  disabled={!jsonInput.trim()}
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg disabled:opacity-40 cursor-pointer"
                >
                  Nạp Đề Cương Từ JSON
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="text-xs text-slate-500">
            Hỗ trợ đề trắc nghiệm chuẩn từ Word, Zalo, PDF.
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Đóng
            </button>
            {activeTab === 'text' && (
              <button
                type="submit"
                form="text-form"
                disabled={parsedQuestions.length === 0}
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm disabled:opacity-40 cursor-pointer"
              >
                Lưu & Bắt Đầu Học
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
