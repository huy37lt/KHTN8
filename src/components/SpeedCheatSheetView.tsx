import React, { useState } from 'react';
import { 
  Flame, AlertTriangle, Zap, CheckCircle2, 
  ArrowLeft, Printer, Sparkles, BookOpen, Lightbulb 
} from 'lucide-react';

interface SpeedCheatSheetViewProps {
  onBackToLibrary: () => void;
  onStartBlitz: () => void;
}

export const SpeedCheatSheetView: React.FC<SpeedCheatSheetViewProps> = ({
  onBackToLibrary,
  onStartBlitz
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'traps' | 'formulas'>('all');

  const examTraps = [
    {
      id: 'trap-1',
      subject: 'Vật Lý 8',
      topic: 'Bài 13: Khối lượng riêng',
      trap: 'Hai vật làm từ cùng một chất, vật A có thể tích gấp đôi vật B. Kết luận nào đúng?',
      wrongMistake: 'Học sinh hay nhầm: Khối lượng riêng của vật A gấp đôi vật B (SAI!).',
      correctRule: 'ĐÚNG: Khối lượng riêng của hai vật BẰNG NHAU.',
      explanation: 'Khối lượng riêng D = m / V là đại lượng đặc trưng cho BẢN CHẤT CỦA CHẤT, không phụ thuộc vào kích thước to hay nhỏ của vật ở cùng điều kiện nhiệt độ và áp suất.'
    },
    {
      id: 'trap-2',
      subject: 'Hóa Học 8',
      topic: 'Bài 2: Biến đổi vật lý & hóa học',
      trap: 'Đốt nến (paraffin): Quá trình nào là vật lý, quá trình nào là hóa học?',
      wrongMistake: 'Học sinh hay nhầm: Coi toàn bộ việc đốt nến đều là biến đổi hóa học.',
      correctRule: 'ĐÚNG: Nến nóng chảy thành lỏng rồi bay hơi là BIẾN ĐỔI VẬT LÝ. Hơi nến cháy thành khí CO2 và hơi nước mới là BIẾN ĐỔI HÓA HỌC.',
      explanation: 'Nóng chảy và bay hơi chỉ thay đổi trạng thái, chưa tạo chất mới. Chỉ khi hơi paraffin phản ứng với O2 tạo CO2 và H2O mới có chất mới sinh ra.'
    },
    {
      id: 'trap-3',
      subject: 'Hóa Học 8',
      topic: 'Bài 3: Thể tích chất khí ở đkc',
      trap: 'Tính thể tích chất khí ở điều kiện chuẩn (25 °C, 1 bar)',
      wrongMistake: 'Học sinh hay nhầm: Lấy n × 22,4 (đây là công thức chương trình cũ ĐKTC 0 °C, 1 atm).',
      correctRule: 'ĐÚNG: Ở ĐKC mới, công thức chuẩn là V = n × 24,79 (Lít).',
      explanation: 'SGK KHTN 8 mới quy chuẩn ở 25 °C và 1 bar thì 1 mol khí bất kỳ luôn chiếm 24,79 Lít.'
    },
    {
      id: 'trap-4',
      subject: 'Hóa Học 8',
      topic: 'Bài 4: Nồng độ mol dung dịch',
      trap: 'Hòa tan chất tan vào 100 mL hoặc 250 mL dung dịch để tính CM',
      wrongMistake: 'Học sinh hay quên: Lấy số mol n chia trực tiếp cho 100 hoặc 250 dẫn đến kết quả sai 1.000 lần.',
      correctRule: 'ĐÚNG: Bắt buộc phải đổi thể tích mL sang LÍT trước khi tính: V = 100 mL = 0,1 L; V = 250 mL = 0,25 L.',
      explanation: 'Công thức CM = n / V có đơn vị là mol/Lít (M). Luôn chia cho 1.000 để đổi từ mL sang Lít.'
    },
    {
      id: 'trap-5',
      subject: 'Hóa Học 8',
      topic: 'Bài 4: Độ tan của chất khí',
      trap: 'Khi tăng nhiệt độ, độ tan của chất khí trong nước thay đổi như thế nào?',
      wrongMistake: 'Học sinh hay nhầm: Tưởng rằng cứ tăng nhiệt độ là chất nào cũng tan nhiều hơn.',
      correctRule: 'ĐÚNG: Khi tăng nhiệt độ, độ tan của chất khí trong nước GIẢM (khí bị bay hơi thoát ra).',
      explanation: 'Ví dụ: Đun nước thì bọt khí nổi lên và thoát ra ngoài, chứng tỏ độ tan của khí giảm khi nhiệt độ tăng.'
    },
    {
      id: 'trap-6',
      subject: 'Sinh Học 8',
      topic: 'Bài 32: Hệ tiêu hóa',
      trap: 'Cơ quan nào KHÔNG nằm trong ống tiêu hóa? (Ví dụ: Thực quản, Dạ dày, Tuyến ruột, Ruột non)',
      wrongMistake: 'Học sinh hay nhầm: Đọc lướt chữ "ruột" trong Tuyến ruột tưởng là ống tiêu hóa.',
      correctRule: 'ĐÚNG: Tuyến ruột là TUYẾN TIÊU HÓA, không phải đoạn ống tiêu hóa.',
      explanation: 'Ống tiêu hóa gồm các đoạn thức ăn trực tiếp đi qua: Miệng -> Hầu -> Thực quản -> Dạ dày -> Ruột non -> Ruột già -> Hậu môn. Tuyến nước bọt, tuyến vị, gan, tụy, tuyến ruột là các tuyến tiết dịch tiêu hóa.'
    },
    {
      id: 'trap-7',
      subject: 'Sinh Học 8',
      topic: 'Bài 30: Cơ thể người',
      trap: 'Các hệ cơ quan hoạt động hoàn toàn độc lập với nhau đúng hay sai?',
      wrongMistake: 'Học sinh hay nhầm: Cho là Đúng vì mỗi hệ cơ quan có nhiệm vụ riêng.',
      correctRule: 'ĐÚNG: SAI! Các hệ cơ quan trong cơ thể người có mối liên hệ mật thiết, thống nhất và phối hợp nhịp nhàng.',
      explanation: 'Ví dụ khi chạy bộ: hệ vận động hoạt động mạnh làm tim đập nhanh (tuần hoàn), thở gấp (hô hấp), toát mồ hôi (bài tiết). Cơ thể là một thể thống nhất dưới sự điều hòa của hệ thần kinh và nội tiết.'
    },
    {
      id: 'trap-8',
      subject: 'Toán 8',
      topic: 'Đại số: Dấu trừ trước ngoặc',
      trap: 'Khai triển biểu thức có dấu trừ đằng trước: - (2x + 1)(x - 2)',
      wrongMistake: 'Học sinh hay nhầm: Nhân dấu trừ vào cả hai ngoặc hoặc quên đổi dấu các hạng tử phía sau.',
      correctRule: 'ĐÚNG: Thực hiện nhân hai đa thức trước rồi mới đổi dấu toàn bộ: - (2x² - 3x - 2) = -2x² + 3x + 2.',
      explanation: 'Dấu trừ trước tích tương đương nhân với (-1). Phải mở ngoặc cẩn thận hoặc đổi dấu từng hạng tử sau khi đã nhân xong.'
    },
    {
      id: 'trap-9',
      subject: 'Toán 8',
      topic: 'Hình học: Dấu hiệu nhận biết hình thoi',
      trap: 'Tứ giác có hai đường chéo vuông góc với nhau là hình thoi đúng hay sai?',
      wrongMistake: 'Học sinh hay nhầm: Cho là ĐÚNG vì nhớ mang máng tính chất vuông góc.',
      correctRule: 'ĐÚNG: SAI! Tứ giác có 2 đường chéo vuông góc chưa chắc là hình thoi (ví dụ hình cánh diều). Phải là HÌNH BÌNH HÀNH có 2 đường chéo vuông góc thì mới là hình thoi.',
      explanation: 'Dấu hiệu chuẩn: Tứ giác có 4 cạnh bằng nhau HOẶC hình bình hành có 2 đường chéo vuông góc HOẶC hình bình hành có 2 cạnh kề bằng nhau.'
    },
    {
      id: 'trap-10',
      subject: 'Ngữ Văn 8',
      topic: 'Thơ Đường luật: Phép đối',
      trap: 'Trong bài thơ thất ngôn bát cú Đường luật, phép đối bắt buộc phải có ở những câu nào?',
      wrongMistake: 'Học sinh hay nhầm: Tưởng đối ở hai câu đầu (Đề) hoặc hai câu cuối (Kết).',
      correctRule: 'ĐÚNG: Phép đối BẮT BUỘC ở câu 3 - 4 (cặp Thực) và câu 5 - 6 (cặp Luận).',
      explanation: 'Quy tắc thi luật Đường luật: Hai câu Đề (1-2) mở ý, cặp Thực (3-4) đối nhau chan chát, cặp Luận (5-6) đối nhau sâu sắc, hai câu Kết (7-8) thâu tóm cảm xúc.'
    },
    {
      id: 'trap-11',
      subject: 'Ngữ Văn 8',
      topic: 'Tiếng Việt: Biệt ngữ xã hội & Từ địa phương',
      trap: 'Phân biệt "mô, tê, răng, rứa" với "cúp tiết, trúng tủ, phao thi"',
      wrongMistake: 'Học sinh hay nhầm: Coi tất cả đều là biệt ngữ xã hội hoặc từ địa phương.',
      correctRule: 'ĐÚNG: "mô, tê, răng, rứa" là TỪ ĐỊA PHƯƠNG (theo vùng miền). "cúp tiết, trúng tủ, phao thi" là BIỆT NGỮ XÃ HỘI (giới học sinh).',
      explanation: 'Từ địa phương gắn với địa lý lãnh thổ (Bắc - Trung - Nam). Biệt ngữ xã hội gắn với tầng lớp, nhóm xã hội hoặc nghề nghiệp nhất định.'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50/60 dark:bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Header Bar */}
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
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>Bí Kíp 5 Phút Cấp Tốc & 7 Cạm Bẫy Đề Thi</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Gói gọn toàn bộ công thức cốt lõi và các điểm dễ mất điểm oan trước giờ thi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 no-print">
            <button
              onClick={onStartBlitz}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Thử Thách 10 Câu (3 Phút)</span>
            </button>

            <button
              onClick={() => window.print()}
              title="In 1 trang bí kíp ra giấy"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In Trang Bí Kíp</span>
            </button>
          </div>
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center gap-2 text-xs font-semibold no-print">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            Toàn Bộ Bí Kíp
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'formulas'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            Bảng Công Thức Vàng
          </button>
          <button
            onClick={() => setActiveTab('traps')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'traps'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            7 Cạm Bẫy Tránh Mất Điểm
          </button>
        </div>

        {/* Section 1: 1-Page Golden Formula Sheet */}
        {(activeTab === 'all' || activeTab === 'formulas') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>I. BẢNG CÔNG THỨC VÀNG GHI NHỚ TRONG 3 PHÚT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Vật lý */}
              <div className="bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
                    Vật Lý 8
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Khối lượng riêng</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl font-mono text-sm font-bold text-sky-900 dark:text-sky-200 text-center">
                    D = m / V
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• <strong>m</strong>: khối lượng (kg hoặc g)</li>
                    <li>• <strong>V</strong>: thể tích (m³ hoặc cm³)</li>
                    <li>• <strong>Quy tắc đổi:</strong> 1 g/cm³ = 1 000 kg/m³</li>
                    <li>• 1 mL = 1 cm³; 1 Lít = 1 dm³ = 0,001 m³</li>
                    <li>• Đo hòn sỏi bằng bình chia độ: V(sỏi) = V₂ - V₁</li>
                  </ul>
                </div>
              </div>

              {/* Hóa học */}
              <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                    Hóa Học 8
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Mol, Khí & Dung dịch</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl font-mono text-xs font-bold text-emerald-900 dark:text-emerald-200 text-center leading-snug">
                    V = n × 24,79 (đkc)  |  M = m / n<br />
                    C% = (mct / mdd) × 100%  |  CM = n / V(L)
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• Tỉ khối: d(A/B) = M_A / M_B; d(A/kk) = M_A / 29</li>
                    <li>• Định luật bảo toàn khối lượng: m_A + m_B = m_C + m_D</li>
                    <li>• <strong>Bảng M cửa miệng:</strong> H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, S=32, Cl=35.5, Fe=56, Cu=64</li>
                  </ul>
                </div>
              </div>

              {/* Sinh học */}
              <div className="bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                    Sinh Học 8
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Cơ thể & Tiêu hóa</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl text-xs font-bold text-teal-900 dark:text-teal-200 text-center">
                    Xương = Khoáng (Cứng) + Hữu cơ (Dẻo)
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• Cấu tạo cơ thể: Đầu, thân và các chi (tay & chân)</li>
                    <li>• Cấp tổ chức: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</li>
                    <li>• <strong>Ruột non:</strong> Nơi hấp thụ phần lớn chất dinh dưỡng</li>
                    <li>• <strong>Chống táo bón:</strong> Ăn nhiều chất xơ + uống đủ 1,5 - 2L nước</li>
                  </ul>
                </div>
              </div>

              {/* Toán 8 - Đại số */}
              <div className="bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                    Toán 8 - Đại Số
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Đa thức & HĐT</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl font-mono text-xs font-bold text-indigo-900 dark:text-indigo-200 text-center leading-snug">
                    (A ± B)² = A² ± 2AB + B²<br />
                    A² - B² = (A - B)(A + B)
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• <strong>Bậc đơn thức:</strong> Tổng số mũ của tất cả các biến (nhớ z = z¹)</li>
                    <li>• <strong>Nhân đa thức:</strong> (A+B)(C+D) = AC + AD + BC + BD</li>
                    <li>• <strong>Chia luỹ thừa:</strong> x^m : x^n = x^(m - n)</li>
                    <li>• <strong>Kinh doanh:</strong> Lãi = Doanh thu - Chi phí (nhớ tính cước xe)</li>
                  </ul>
                </div>
              </div>

              {/* Toán 8 - Hình học */}
              <div className="bg-white dark:bg-slate-900 border border-violet-200 dark:border-violet-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                    Toán 8 - Hình Học
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Tứ giác & Dấu hiệu</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-violet-50 dark:bg-violet-950/40 rounded-xl text-xs font-bold text-violet-900 dark:text-violet-200 text-center">
                    Â + B̂ + Ĉ + D̂ = 360°
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• <strong>HBH:</strong> Cạnh đối song song & bằng nhau, 2 đ/chéo cắt tại TĐ</li>
                    <li>• <strong>HCN:</strong> HBH có 1 góc vuông HOẶC 2 đ/chéo bằng nhau</li>
                    <li>• <strong>Hình thoi:</strong> HBH có 2 cạnh kề bằng nhau HOẶC 2 đ/chéo vuông góc</li>
                    <li>• <strong>Hình vuông:</strong> Là HCN có 2 cạnh kề bằng nhau (vừa thoi vừa chữ nhật)</li>
                  </ul>
                </div>
              </div>

              {/* Ngữ Văn 8 */}
              <div className="bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800/60 rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                    Ngữ Văn 8
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Tiếng Việt & Thơ Đường</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl text-xs font-bold text-rose-900 dark:text-rose-200 text-center">
                    Đề (1-2) - Thực (3-4) - Luận (5-6) - Kết (7-8)
                  </div>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <li>• <strong>Đối thơ Đường:</strong> Bắt buộc ở câu 3-4 (Thực) và câu 5-6 (Luận)</li>
                    <li>• <strong>Biệt ngữ xã hội:</strong> Theo tầng lớp ("Quan gia", "phao thi")</li>
                    <li>• <strong>Từ địa phương:</strong> Theo vùng miền ("bắp", "mô tê răng rứa")</li>
                    <li>• <strong>Bên bờ Thiên Mạc:</strong> "Sát Thát" = Giết giặc Mông Cổ; Trần Bình Trọng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: 7 Cạm Bẫy Đề Thi */}
        {(activeTab === 'all' || activeTab === 'traps') && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>II. TOP 7 "CẠM BẪY ĐỀ THI" DỄ MẤT ĐIỂM OAN NHẤT</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">Học sinh lớp 8 nhất định phải đọc</span>
            </div>

            <div className="space-y-3">
              {examTraps.map((t, idx) => (
                <div
                  key={t.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-extrabold flex items-center justify-center">
                        #{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {t.subject} · {t.topic}
                      </span>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {t.trap}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200">
                      <strong>⚠️ Lỗi hay mắc:</strong> {t.wrongMistake}
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                      <strong>✅ Cách làm chuẩn:</strong> {t.correctRule}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-emerald-500">
                    <span className="font-bold text-slate-900 dark:text-white mr-1">Bản chất kiến thức:</span>
                    {t.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
