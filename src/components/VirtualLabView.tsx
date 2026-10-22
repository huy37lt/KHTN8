import React, { useState } from 'react';
import { 
  FlaskConical, 
  Volume2, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  RefreshCw,
  Award,
  Layers,
  Compass,
  BookOpen
} from 'lucide-react';
import { speakEnglish } from '../utils/speech';

type LabSubject = 'khtn' | 'english' | 'math' | 'history_geo';
type KhtnBranch = 'physics' | 'chemistry' | 'biology';

export const VirtualLabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabSubject>('khtn');

  // --- KHTN 8 State ---
  const [khtnBranch, setKhtnBranch] = useState<KhtnBranch>('physics');

  // Physics: D = m / V
  const [physMass, setPhysMass] = useState<number>(600);
  const [physVolume, setPhysVolume] = useState<number>(200);
  const [physPredictMode, setPhysPredictMode] = useState<boolean>(false);
  const [physGuessInput, setPhysGuessInput] = useState<string>('');
  const [physFeedback, setPhysFeedback] = useState<string | null>(null);

  // Chemistry: Mol Pathway & Solver
  const chemicalOptions = [
    { name: 'O₂', molarMass: 32, isGas: true, label: 'Khí Oxi' },
    { name: 'CO₂', molarMass: 44, isGas: true, label: 'Khí Cacbonic' },
    { name: 'H₂', molarMass: 2, isGas: true, label: 'Khí Hidro' },
    { name: 'H₂O', molarMass: 18, isGas: false, label: 'Nước (Chất lỏng)' },
    { name: 'NaCl', molarMass: 58.5, isGas: false, label: 'Muối ăn (Chất rắn)' }
  ];
  const [chemSubIndex, setChemSubIndex] = useState<number>(0);
  const [chemMass, setChemMass] = useState<number>(64);
  const [chemPredictMode, setChemPredictMode] = useState<boolean>(false);
  const [chemGuessInput, setChemGuessInput] = useState<string>('');
  const [chemFeedback, setChemFeedback] = useState<string | null>(null);

  // Reaction Solver
  interface ReactionDef {
    equation: string;
    substances: { formula: string; M: number; coeff: number; isGas?: boolean }[];
  }
  const reactions: ReactionDef[] = [
    {
      equation: 'Mg + 2HCl → MgCl₂ + H₂',
      substances: [
        { formula: 'Mg', M: 24, coeff: 1 },
        { formula: 'HCl', M: 36.5, coeff: 2 },
        { formula: 'MgCl₂', M: 95, coeff: 1 },
        { formula: 'H₂', M: 2, coeff: 1, isGas: true }
      ]
    },
    {
      equation: '4Al + 3O₂ → 2Al₂O₃',
      substances: [
        { formula: 'Al', M: 27, coeff: 4 },
        { formula: 'O₂', M: 32, coeff: 3, isGas: true },
        { formula: 'Al₂O₃', M: 102, coeff: 2 }
      ]
    },
    {
      equation: '4P + 5O₂ → 2P₂O₅',
      substances: [
        { formula: 'P', M: 31, coeff: 4 },
        { formula: 'O₂', M: 32, coeff: 5, isGas: true },
        { formula: 'P₂O₅', M: 142, coeff: 2 }
      ]
    },
    {
      equation: '2KClO₃ → 2KCl + 3O₂',
      substances: [
        { formula: 'KClO₃', M: 122.5, coeff: 2 },
        { formula: 'KCl', M: 74.5, coeff: 2 },
        { formula: 'O₂', M: 32, coeff: 3, isGas: true }
      ]
    }
  ];
  const [reactionIndex, setReactionIndex] = useState<number>(0);
  const [knownSubIndex, setKnownSubIndex] = useState<number>(0);
  const [knownMassStr, setKnownMassStr] = useState<string>('2.4');
  const [solutionVolStr, setSolutionVolStr] = useState<string>('100');

  // Biology: Digestive System
  const digestiveOrgans = [
    {
      id: 0,
      name: 'Miệng',
      desc: 'Răng nhai nghiền nhỏ thức ăn (biến đổi cơ học); enzyme Amylase trong nước bọt biến đổi một phần tinh bột chín thành đường đôi Mantôzơ (biến đổi hóa học).'
    },
    {
      id: 1,
      name: 'Thực quản',
      desc: 'Đoạn ống cơ dài co bóp nhu động đẩy viên thức ăn nhịp nhàng từ hầu xuống dạ dày (chỉ có biến đổi cơ học, không có tiêu hóa hóa học).'
    },
    {
      id: 2,
      name: 'Dạ dày',
      desc: 'Túi cơ lớn hình chữ J. Các lớp cơ co bóp nhào trộn thức ăn cực mạnh với dịch vị chứa HCl và Pepsin; enzyme Pepsin phân cắt chuỗi Protein dài thành các chuỗi Peptit ngắn hơn.'
    },
    {
      id: 3,
      name: 'Ruột non',
      desc: 'Cơ quan tiêu hóa quan trọng nhất dài 5-6m. Chứa đầy đủ dịch tụy, dịch mật, dịch ruột giúp phân giải hoàn toàn Gluxit, Protein, Lipit thành chất dinh dưỡng đơn giản và hấp thụ 90% vào máu và bạch huyết.'
    },
    {
      id: 4,
      name: 'Ruột già & Trực tràng',
      desc: 'Chức năng chính là tái hấp thu nước, tạo khuôn phân nhờ vi khuẩn lên men và co bóp tống chất bã ra ngoài qua hậu môn.'
    }
  ];
  const [selectedOrgan, setSelectedOrgan] = useState<number>(0);
  const [bioQuizActive, setBioQuizActive] = useState<boolean>(false);
  const [bioQuizQuestion, setBioQuizQuestion] = useState<{ prompt: string; correctId: number } | null>(null);
  const [bioScore, setBioScore] = useState<number>(0);
  const [bioFeedback, setBioFeedback] = useState<string | null>(null);

  // --- Tiếng Anh 8 State ---
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [activeUnit, setActiveUnit] = useState<number>(1);

  const englishVocab = [
    {
      unit: 1,
      unitTitle: 'Unit 1: Leisure Time',
      words: [
        { word: 'crafts', phonetic: '/krɑːfts/', meaning: 'đồ thủ công', sentence: 'She loves doing crafts in her spare time.' },
        { word: 'origami', phonetic: '/ˌɒr.ɪˈɡɑː.mi/', meaning: 'nghệ thuật gấp giấy', sentence: 'He showed me how to fold paper into origami swans.' },
        { word: 'hang out', phonetic: '/hæŋ aʊt/', meaning: 'đi chơi cùng bạn bè', sentence: 'Teens often hang out at coffee shops after school.' },
        { word: 'message', phonetic: '/ˈmes.ɪdʒ/', meaning: 'nhắn tin', sentence: 'I often message my classmates about homework.' },
        { word: 'leisure', phonetic: '/ˈleʒ.ər/', meaning: 'thời gian rảnh rỗi', sentence: 'What leisure activities do you enjoy most?' }
      ]
    },
    {
      unit: 2,
      unitTitle: 'Unit 2: Life in the Countryside',
      words: [
        { word: 'harvest', phonetic: '/ˈhɑː.vɪst/', meaning: 'thu hoạch, mùa gặt', sentence: 'Farmers are very busy during the rice harvest.' },
        { word: 'cattle', phonetic: '/ˈkæt.əl/', meaning: 'gia súc (bò, trâu)', sentence: 'The boy is herding cattle on the meadow.' },
        { word: 'hospitable', phonetic: '/hɒsˈpɪt.ə.bəl/', meaning: 'hiếu khách, nồng hậu', sentence: 'Local villagers are always friendly and hospitable.' },
        { word: 'vast', phonetic: '/vɑːst/', meaning: 'bao la, rộng lớn', sentence: 'The vast paddy fields look like a yellow carpet.' },
        { word: 'peaceful', phonetic: '/ˈpiːs.fəl/', meaning: 'thanh bình, yên ả', sentence: 'I love the peaceful life in my grandfather’s village.' }
      ]
    },
    {
      unit: 3,
      unitTitle: 'Unit 3: Teenagers',
      words: [
        { word: 'peer pressure', phonetic: '/ˈpɪə ˌpreʃ.ər/', meaning: 'áp lực bạn bè đồng trang lứa', sentence: 'Many students face peer pressure regarding test scores.' },
        { word: 'browse', phonetic: '/braʊz/', meaning: 'lướt xem (trang web, thông tin)', sentence: 'She likes to browse social media before bedtime.' },
        { word: 'coach', phonetic: '/kəʊtʃ/', meaning: 'huấn luyện viên, rèn luyện', sentence: 'Our school football coach is very supportive.' },
        { word: 'participate', phonetic: '/pɑːˈtɪs.ɪ.peɪt/', meaning: 'tham gia', sentence: 'He decided to participate in the English speaking club.' },
        { word: 'stressful', phonetic: '/ˈstres.fəl/', meaning: 'căng thẳng', sentence: 'Preparing for midterm exams can be quite stressful.' }
      ]
    }
  ];

  const vowelPairs = [
    {
      pair: '/ʊ/ vs /u:/',
      desc: 'Âm /ʊ/ là âm ngắn (thả lỏng môi), âm /u:/ là âm dài (chu tròn môi kéo dài)',
      items: [
        { shortWord: 'foot', shortPhonetic: '/fʊt/', shortMean: 'bàn chân', longWord: 'food', longPhonetic: '/fuːd/', longMean: 'thức ăn' },
        { shortWord: 'look', shortPhonetic: '/lʊk/', shortMean: 'nhìn', longWord: 'loop', longPhonetic: '/luːp/', longMean: 'vòng lặp' },
        { shortWord: 'book', shortPhonetic: '/bʊk/', shortMean: 'quyển sách', longWord: 'boot', longPhonetic: '/buːt/', longMean: 'đôi ủng' },
        { shortWord: 'cook', shortPhonetic: '/kʊk/', shortMean: 'nấu nướng', longWord: 'cool', longPhonetic: '/kuːl/', longMean: 'mát mẻ / ngầu' }
      ]
    },
    {
      pair: '/ə/ vs /ɜ:/',
      desc: 'Âm /ə/ là âm ơ ngắn (thường trong âm tiết không nhấn), âm /ɜ:/ là âm ơ dài (cong nhẹ lưỡi)',
      items: [
        { shortWord: 'teacher', shortPhonetic: '/ˈtiː.tʃər/', shortMean: 'giáo viên', longWord: 'bird', longPhonetic: '/bɜːd/', longMean: 'con chim' },
        { shortWord: 'banana', shortPhonetic: '/bəˈnɑː.nə/', shortMean: 'quả chuối', longWord: 'early', longPhonetic: '/ˈɜː.li/', longMean: 'sớm' },
        { shortWord: 'ago', shortPhonetic: '/əˈɡəʊ/', shortMean: 'trước đây', longWord: 'shirt', longPhonetic: '/ʃɜːt/', longMean: 'áo sơ mi' }
      ]
    }
  ];

  const handlePlayAudio = async (text: string) => {
    setPlayingWord(text);
    await speakEnglish(text, 0.85);
    setPlayingWord(null);
  };

  // --- Math 8 State ---
  // Identity: (a + b)^2 = a^2 + 2ab + b^2
  const [identityA, setIdentityA] = useState<number>(4);
  const [identityB, setIdentityB] = useState<number>(3);

  // Quadrilateral Dynamic Points
  const [points, setPoints] = useState<{ [key: string]: { x: number; y: number } }>({
    A: { x: 70, y: 50 },
    B: { x: 250, y: 50 },
    C: { x: 280, y: 190 },
    D: { x: 40, y: 190 }
  });
  const [draggingPoint, setDraggingPoint] = useState<string | null>(null);

  const setQuadPreset = (type: 'trapezoid' | 'parallelogram' | 'rectangle' | 'rhombus') => {
    if (type === 'trapezoid') {
      setPoints({
        A: { x: 80, y: 60 },
        B: { x: 220, y: 60 },
        C: { x: 270, y: 180 },
        D: { x: 30, y: 180 }
      });
    } else if (type === 'parallelogram') {
      setPoints({
        A: { x: 100, y: 60 },
        B: { x: 260, y: 60 },
        C: { x: 200, y: 180 },
        D: { x: 40, y: 180 }
      });
    } else if (type === 'rectangle') {
      setPoints({
        A: { x: 60, y: 60 },
        B: { x: 240, y: 60 },
        C: { x: 240, y: 180 },
        D: { x: 60, y: 180 }
      });
    } else if (type === 'rhombus') {
      setPoints({
        A: { x: 150, y: 40 },
        B: { x: 250, y: 120 },
        C: { x: 150, y: 200 },
        D: { x: 50, y: 120 }
      });
    }
  };

  // Compute lengths
  const dist = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  };
  const ab = dist(points.A, points.B);
  const bc = dist(points.B, points.C);
  const cd = dist(points.C, points.D);
  const da = dist(points.D, points.A);
  const ac = dist(points.A, points.C);
  const bd = dist(points.B, points.D);

  // --- History & Geo 8 State ---
  const [historyYear, setHistoryYear] = useState<number>(1789);
  const [geoSeason, setGeoSeason] = useState<'northeast' | 'southwest'>('northeast');

  const historyEvents = [
    {
      year: 1566,
      name: 'Cách mạng Hà Lan (1566 - 1648)',
      figure: 'Uyliam Ô-ran-giơ',
      significance: 'Cuộc cách mạng tư sản đầu tiên trên thế giới, lật đổ ách thống trị của vương triều Tây Ban Nha, mở đường cho CNTB phát triển.'
    },
    {
      year: 1640,
      name: 'Cách mạng tư sản Anh (1640 - 1688)',
      figure: 'Oliver Cromwell',
      significance: 'Lật đổ chế độ phong kiến chuyên chế, thiết lập chế độ quân chủ lập hiến, mở ra thời kì quá độ từ chế độ phong kiến sang CNTB trên phạm vi thế giới.'
    },
    {
      year: 1775,
      name: 'Chiến tranh giành độc lập 13 thuộc địa Anh ở Bắc Mỹ (1775 - 1783)',
      figure: 'George Washington',
      significance: 'Tuyên ngôn Độc lập (1776) khẳng định quyền con người; thành lập Hợp chúng quốc Hoa Kỳ (USA), giải phóng nhân dân khỏi ách thực dân Anh.'
    },
    {
      year: 1789,
      name: 'Cách mạng tư sản Pháp bùng nổ (14/7/1789)',
      figure: 'Robespierre & Tầng lớp thị dân',
      significance: 'Tấn công pháo đài Ba-xti, ban bố Tuyên ngôn Nhân quyền và Dân quyền; là cuộc cách mạng tư sản triệt để nhất thời cận đại, xoá bỏ tận gốc chế độ phong kiến.'
    }
  ];

  // Helper calculation for Biology Quiz
  const startBioQuiz = () => {
    const questions = [
      { prompt: 'Cơ quan nào hấp thụ phần lớn chất dinh dưỡng (khoảng 90%) vào máu?', correctId: 3 },
      { prompt: 'Cơ quan nào có tuyến nước bọt biến đổi một phần tinh bột chín thành đường mantôzơ?', correctId: 0 },
      { prompt: 'Cơ quan hình túi chữ J, cơ co bóp nhào trộn mạnh và enzyme pepsin biến đổi protein?', correctId: 2 },
      { prompt: 'Đoạn ống cơ co bóp nhu động đẩy viên thức ăn xuống dạ dày?', correctId: 1 },
      { prompt: 'Cơ quan có chức năng chính là tái hấp thu nước và tạo khuôn phân?', correctId: 4 }
    ];
    const picked = questions[Math.floor(Math.random() * questions.length)];
    setBioQuizQuestion(picked);
    setBioQuizActive(true);
    setBioFeedback(null);
  };

  const handleBioAnswer = (id: number) => {
    if (!bioQuizQuestion) return;
    if (id === bioQuizQuestion.correctId) {
      setBioScore(prev => prev + 1);
      setBioFeedback(`Chính xác! Đáp án đúng là ${digestiveOrgans[id].name}. Rất tuyệt vời!`);
    } else {
      setBioFeedback(`Chưa chính xác. Bạn đã chọn ${digestiveOrgans[id].name}. Hãy thử lại hoặc xem lại chức năng cơ quan.`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner / Introduction */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Phòng Thí Nghiệm & Mô Phỏng Trực Quan Đa Môn</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Học Bằng Trải Nghiệm Thực Nghiệm Ảo
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              Kéo thanh trượt, tương tác trực quan SVG, nghe phát âm tiếng Anh chuẩn Native Speaker và phỏng đoán kết quả trước khi xem đáp án.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
              <div className="text-xs text-indigo-200">Chuẩn GDPT 2018</div>
              <div className="text-base font-black text-amber-300">đkc 24,79 L/mol</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center">
              <div className="text-xs text-emerald-200">Âm thanh</div>
              <div className="text-base font-black text-emerald-300">Native Audio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Subject Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('khtn')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs ${
            activeTab === 'khtn'
              ? 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>🧪 KHTN 8 (Lý - Hóa - Sinh)</span>
        </button>

        <button
          onClick={() => setActiveTab('english')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs ${
            activeTab === 'english'
              ? 'bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Volume2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>🎧 Tiếng Anh 8 (Luyện Âm Chuẩn)</span>
        </button>

        <button
          onClick={() => setActiveTab('math')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs ${
            activeTab === 'math'
              ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>📐 Toán 8 (Tứ Giác & HĐT)</span>
        </button>

        <button
          onClick={() => setActiveTab('history_geo')}
          className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-xs ${
            activeTab === 'history_geo'
              ? 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400 shadow-sm border border-slate-200 dark:border-slate-700'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>🗺️ Sử - Địa 8 (Trục Thời Gian & Bản Đồ)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: KHTN 8 (Lý, Hóa, Sinh) */}
      {/* ========================================================================= */}
      {activeTab === 'khtn' && (
        <div className="space-y-6">
          {/* Sub tabs: Vật lý / Hóa học / Sinh học */}
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <button
              onClick={() => setKhtnBranch('physics')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                khtnBranch === 'physics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Vật lý: Khối lượng riêng D = m ÷ V
            </button>
            <button
              onClick={() => setKhtnBranch('chemistry')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                khtnBranch === 'chemistry'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Hóa học: Con đường Mol & Giải PTHH
            </button>
            <button
              onClick={() => setKhtnBranch('biology')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                khtnBranch === 'biology'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Sinh học: Ống tiêu hóa & Thử thách
            </button>
          </div>

          {/* 1.1 KHTN - VẬT LÝ */}
          {khtnBranch === 'physics' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* SVG Visualization & Cylinder */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Thí nghiệm Bình Chia Độ
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Đo thể tích vật rắn không thấm nước
                  </h3>
                </div>

                {/* SVG Cylinder */}
                <div className="relative">
                  <svg width="260" height="280" viewBox="0 0 250 260" className="overflow-visible">
                    {/* Cylinder Outer Walls */}
                    <rect x="90" y="30" width="70" height="200" rx="4" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 dark:text-slate-600" />
                    
                    {/* Water Base Level (150 mL initially) */}
                    {(() => {
                      const baseV = 150;
                      const totalV = baseV + physVolume;
                      const yBase = 230 - baseV * 0.4; // 170
                      const yTotal = 230 - totalV * 0.4;
                      const hBase = 230 - yBase;
                      const hAdded = yBase - yTotal;
                      const objectSize = 10 + Math.sqrt(physVolume) * 2;
                      const density = physMass / physVolume;

                      return (
                        <>
                          {/* Initial Water */}
                          <rect x="91" y={yBase} width="68" height={hBase} fill="#3b82f6" fillOpacity="0.4" />
                          {/* Displaced Water (Risen water) */}
                          <rect x="91" y={yTotal} width="68" height={hAdded} fill="#f59e0b" fillOpacity="0.65" />
                          
                          {/* Water level lines */}
                          <line x1="56" y1={yBase} x2="160" y2={yBase} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
                          <line x1="56" y1={yTotal} x2="160" y2={yTotal} stroke="#1e293b" strokeWidth="2" className="dark:stroke-white" />
                          
                          {/* Labels */}
                          <text x="6" y={yBase + 4} className="text-[11px] fill-slate-500 font-medium">V trước = {baseV} mL</text>
                          <text x="6" y={yTotal + 4} className="text-[11px] fill-blue-600 dark:fill-blue-400 font-bold">V sau = {totalV} mL</text>
                          
                          {/* Solid Object inside */}
                          <rect 
                            x={125 - objectSize / 2} 
                            y={230 - objectSize} 
                            width={objectSize} 
                            height={objectSize} 
                            rx="4" 
                            fill={density > 1 ? '#64748b' : '#38bdf8'} 
                            stroke="#334155" 
                            strokeWidth="1.5"
                          />
                          <text x={125} y={230 - objectSize / 2 + 4} textAnchor="middle" fill="#fff" className="text-[9px] font-extrabold">
                            {physMass}g
                          </text>

                          {/* Ticks on right */}
                          {[0, 100, 200, 300, 400, 500].map(v => {
                            const y = 230 - v * 0.4;
                            return (
                              <g key={v}>
                                <line x1="90" y1={y} x2="98" y2={y} stroke="currentColor" strokeWidth="1" className="text-slate-400" />
                                <text x="165" y={y + 4} className="text-[10px] fill-slate-400">{v}</text>
                              </g>
                            );
                          })}
                        </>
                      );
                    })()}
                  </svg>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">
                  Độ chênh lệch: <strong>V vật = V sau − V trước = {physVolume} cm³</strong>
                </div>
              </div>

              {/* Controls and Calculations */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    Điều khiển khối lượng & thể tích
                  </h3>
                  <p className="text-xs text-slate-500">
                    Kéo các thanh trượt bên dưới để thay đổi thông số vật thể và quan sát khối lượng riêng.
                  </p>
                </div>

                {/* Sliders */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Khối lượng vật rắn (m):</span>
                      <span className="font-extrabold text-blue-600 dark:text-blue-400">{physMass} g</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      step="10"
                      value={physMass}
                      onChange={(e) => setPhysMass(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Thể tích vật chiếm chỗ (V):</span>
                      <span className="font-extrabold text-amber-600 dark:text-amber-400">{physVolume} cm³ (mL)</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="10"
                      value={physVolume}
                      onChange={(e) => setPhysVolume(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Chế độ đoán trước (Active Prediction Mode) */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-slate-900 dark:text-white">
                    <input
                      type="checkbox"
                      checked={physPredictMode}
                      onChange={(e) => {
                        setPhysPredictMode(e.target.checked);
                        setPhysFeedback(null);
                        setPhysGuessInput('');
                      }}
                      className="rounded accent-blue-600 w-4 h-4"
                    />
                    <span>⚡ Bật "Chế độ đoán trước" (Active Prediction)</span>
                  </label>

                  {physPredictMode && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Áp dụng công thức <strong>D = m ÷ V</strong>, hãy tính nhẩm và nhập kết quả trước khi mở xem:
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="D = ? g/cm³ (vd: 3.0)"
                          value={physGuessInput}
                          onChange={(e) => setPhysGuessInput(e.target.value)}
                          className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                        <button
                          onClick={() => {
                            const val = parseFloat(physGuessInput.replace(',', '.'));
                            const actualD = physMass / physVolume;
                            if (isNaN(val)) {
                              setPhysFeedback('Vui lòng nhập một số hợp lệ.');
                              return;
                            }
                            if (Math.abs(val - actualD) / actualD <= 0.05) {
                              setPhysFeedback(`🎉 Chính xác! D = ${physMass} ÷ ${physVolume} = ${actualD.toFixed(2)} g/cm³. Bạn ghi nhớ rất tốt!`);
                            } else {
                              setPhysFeedback(`Chưa chính xác. Gợi ý: Lấy ${physMass} chia cho ${physVolume}. Hãy thử tính lại xem!`);
                            }
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-500 cursor-pointer"
                        >
                          Kiểm Tra
                        </button>
                      </div>
                      {physFeedback && (
                        <div className="text-xs font-semibold p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {physFeedback}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Calculation Cards */}
                {(() => {
                  const d = physMass / physVolume;
                  const dKgM3 = Math.round(d * 1000);
                  const isFloating = d < 1;
                  const isNeutral = Math.abs(d - 1) < 0.01;

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-bold">Khối lượng riêng D</div>
                        <div className="text-xl font-black text-slate-900 dark:text-white mt-1">
                          {physPredictMode ? 'D = ? (hãy đoán)' : `${d.toFixed(2)} g/cm³`}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {physPredictMode ? 'Đang ẩn' : `= ${dKgM3.toLocaleString('vi-VN')} kg/m³`}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
                        <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Thả vào nước (D = 1 g/cm³)</div>
                        <div className="text-lg font-black text-slate-900 dark:text-white mt-1">
                          {physPredictMode ? '?' : isFloating ? '🟢 Nổi trên mặt nước' : isNeutral ? '🟡 Lơ lửng' : '🔴 Chìm xuống đáy'}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {physPredictMode ? 'Đang ẩn' : `Do D = ${d.toFixed(2)} ${isFloating ? '<' : isNeutral ? '=' : '>'} 1,00 g/cm³`}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 1.2 KHTN - HÓA HỌC */}
          {khtnBranch === 'chemistry' && (
            <div className="space-y-6">
              {/* Part A: Mol Pathway */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Bài 3: Mol & Tỉ khối chất khí
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      Con Đường Chuyển Đổi Mol Trực Quan
                    </h3>
                  </div>
                  <div className="text-xs text-slate-500">
                    Chuẩn đkc mới: <strong>1 mol khí = 24,79 lít</strong>
                  </div>
                </div>

                {/* Substance selection chips */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400">Chọn chất hóa học:</div>
                  <div className="flex flex-wrap gap-2">
                    {chemicalOptions.map((item, idx) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setChemSubIndex(idx);
                          setChemFeedback(null);
                        }}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                          chemSubIndex === idx
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-xs ml-1.5 opacity-80">({item.label})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mass Slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Khối lượng m ({chemicalOptions[chemSubIndex].name}):</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">{chemMass} gam</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    step="1"
                    value={chemMass}
                    onChange={(e) => setChemMass(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>

                {/* Prediction Mode for Mol */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-slate-900 dark:text-white">
                    <input
                      type="checkbox"
                      checked={chemPredictMode}
                      onChange={(e) => {
                        setChemPredictMode(e.target.checked);
                        setChemFeedback(null);
                        setChemGuessInput('');
                      }}
                      className="rounded accent-emerald-600 w-4 h-4"
                    />
                    <span>⚡ Bật "Chế độ đoán trước" (Đoán số mol n)</span>
                  </label>

                  {chemPredictMode && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Với m = {chemMass}g và M({chemicalOptions[chemSubIndex].name}) = {chemicalOptions[chemSubIndex].molarMass} g/mol, hãy đoán <strong>n = ? mol</strong>:
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="n = ? mol (vd: 2.0)"
                          value={chemGuessInput}
                          onChange={(e) => setChemGuessInput(e.target.value)}
                          className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                        />
                        <button
                          onClick={() => {
                            const val = parseFloat(chemGuessInput.replace(',', '.'));
                            const actualN = chemMass / chemicalOptions[chemSubIndex].molarMass;
                            if (isNaN(val)) {
                              setChemFeedback('Vui lòng nhập một số hợp lệ.');
                              return;
                            }
                            if (Math.abs(val - actualN) / actualN <= 0.05) {
                              setChemFeedback(`🎉 Chuẩn xác! n = ${chemMass} ÷ ${chemicalOptions[chemSubIndex].molarMass} = ${actualN.toFixed(3)} mol.`);
                            } else {
                              setChemFeedback(`Chưa chính xác. Gợi ý: n = m ÷ M = ${chemMass} ÷ ${chemicalOptions[chemSubIndex].molarMass}. Hãy thử lại nhé!`);
                            }
                          }}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-500 cursor-pointer"
                        >
                          Kiểm Tra
                        </button>
                      </div>
                      {chemFeedback && (
                        <div className="text-xs font-semibold p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {chemFeedback}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Step Flow Pathway Cards */}
                {(() => {
                  const sub = chemicalOptions[chemSubIndex];
                  const n = chemMass / sub.molarMass;
                  const v = sub.isGas ? n * 24.79 : null;
                  const particles = n * 6.022e23;
                  const exponent = Math.floor(Math.log10(particles));
                  const mantissa = particles / Math.pow(10, exponent);

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-1">
                      {/* Card 1: Khối lượng */}
                      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                        <span className="text-xs text-slate-500 font-bold uppercase">Khối Lượng (m)</span>
                        <div className="text-xl font-black text-slate-900 dark:text-white mt-1">{chemMass} g</div>
                        <div className="text-[11px] text-slate-400 mt-1">M = {sub.molarMass} g/mol</div>
                      </div>

                      {/* Card 2: Số Mol */}
                      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase">Số Mol (n = m/M)</span>
                        <div className="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
                          {chemPredictMode ? '?' : `${n.toFixed(3)} mol`}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">Đơn vị đo lượng chất</div>
                      </div>

                      {/* Card 3: Thể tích khí đkc */}
                      <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase">Thể Tích Khí (V = n×24,79)</span>
                        <div className="text-xl font-black text-blue-700 dark:text-blue-300 mt-1">
                          {chemPredictMode ? '?' : v !== null ? `${v.toFixed(2)} lít` : 'Không phải khí'}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          {sub.isGas ? 'Điều kiện chuẩn (25°C, 1 bar)' : 'Tránh bẫy đề thi!'}
                        </div>
                      </div>

                      {/* Card 4: Số phân tử / nguyên tử */}
                      <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center">
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase">Số Phân Tử (n×6,022×10²³)</span>
                        <div className="text-base font-black text-purple-700 dark:text-purple-300 mt-1 truncate">
                          {chemPredictMode ? '?' : `${mantissa.toFixed(2)} × 10^${exponent}`}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">Hằng số Avogadro</div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Part B: Step-by-Step Stoichiometric Reaction Solver */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    Bài 5, 6: Tính theo PTHH & Nồng độ mol
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    Máy Giải Tự Luận Theo Bước (Chuẩn Đề Cương Bát Tràng)
                  </h3>
                </div>

                {/* Quick Presets for 3 Bát Tràng Exam Essay Questions */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
                    Bấm nhanh 3 bài tập tự luận trong đề cương:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setReactionIndex(1); // 4Al + 3O2
                        setKnownSubIndex(0); // Al
                        setKnownMassStr('5.4');
                      }}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 cursor-pointer"
                    >
                      📝 Tự luận Bài 1: Đốt cháy 5,4g Al trong O₂
                    </button>
                    <button
                      onClick={() => {
                        setReactionIndex(0); // Mg + HCl
                        setKnownSubIndex(0); // Mg
                        setKnownMassStr('2.4');
                        setSolutionVolStr('100');
                      }}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 cursor-pointer"
                    >
                      📝 Tự luận Bài 2: Cho 2,4g Mg tác dụng HCl (Tính CM)
                    </button>
                    <button
                      onClick={() => {
                        setReactionIndex(2); // 4P + 5O2
                        setKnownSubIndex(0); // P
                        setKnownMassStr('3.1');
                      }}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 cursor-pointer"
                    >
                      📝 Tự luận Bài 3: Đốt 3,1g Photpho trong O₂
                    </button>
                  </div>
                </div>

                {/* Reaction and Known Input Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1 block">Chọn Phương trình hóa học:</label>
                    <select
                      value={reactionIndex}
                      onChange={(e) => {
                        setReactionIndex(Number(e.target.value));
                        setKnownSubIndex(0);
                      }}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold"
                    >
                      {reactions.map((r, i) => (
                        <option key={r.equation} value={i}>{r.equation}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1 block">Chất đã biết đề cho:</label>
                    <select
                      value={knownSubIndex}
                      onChange={(e) => setKnownSubIndex(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold"
                    >
                      {reactions[reactionIndex].substances.map((s, idx) => (
                        <option key={s.formula} value={idx}>{s.formula} (M={s.M})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-1 block">Khối lượng đề cho (gam):</label>
                    <input
                      type="text"
                      value={knownMassStr}
                      onChange={(e) => setKnownMassStr(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white"
                      placeholder="VD: 2.4"
                    />
                  </div>
                </div>

                {/* If HCl exists in reaction, allow volume input for CM calculation */}
                {reactions[reactionIndex].substances.some(s => s.formula === 'HCl') && (
                  <div className="p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/50 flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">Thể tích dung dịch HCl đề cho (mL):</span>
                    <input
                      type="text"
                      value={solutionVolStr}
                      onChange={(e) => setSolutionVolStr(e.target.value)}
                      className="w-24 p-1.5 rounded-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-800 text-sm font-bold text-center"
                    />
                    <span className="text-xs text-slate-500">→ Phục vụ tính nồng độ mol CM = n / V</span>
                  </div>
                )}

                {/* Step-by-step Solution Display */}
                {(() => {
                  const currentRxn = reactions[reactionIndex];
                  const knownSub = currentRxn.substances[knownSubIndex] || currentRxn.substances[0];
                  const mass = parseFloat(knownMassStr.replace(',', '.'));
                  const vol = parseFloat(solutionVolStr.replace(',', '.'));

                  if (isNaN(mass) || mass <= 0) {
                    return (
                      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-sm">
                        Vui lòng nhập khối lượng lớn hơn 0 để xem các bước giải chi tiết.
                      </div>
                    );
                  }

                  const nKnown = mass / knownSub.M;
                  const hclSub = currentRxn.substances.find(s => s.formula === 'HCl');

                  return (
                    <div className="space-y-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm">
                      <div>
                        <div className="font-extrabold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Bước 1: Chuyển đổi khối lượng chất đã biết thành số mol (n)</span>
                        </div>
                        <div className="pl-6 text-slate-700 dark:text-slate-300">
                          n({knownSub.formula}) = m ÷ M = {mass} ÷ {knownSub.M} = <strong>{nKnown.toFixed(4).replace(/\.?0+$/, '')} mol</strong>
                        </div>
                      </div>

                      <div>
                        <div className="font-extrabold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Bước 2: Lập tỉ lệ mol theo hệ số PTHH để tìm các chất còn lại</span>
                        </div>
                        <div className="pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                          <div className="font-medium text-xs text-slate-500">
                            PTHH: {currentRxn.equation}
                          </div>
                          <ul className="list-disc pl-5 space-y-1.5">
                            {currentRxn.substances.map((sub) => {
                              if (sub === knownSub) return null;
                              const nSub = (nKnown * sub.coeff) / knownSub.coeff;
                              const mSub = nSub * sub.M;
                              const vSub = sub.isGas ? nSub * 24.79 : null;

                              return (
                                <li key={sub.formula}>
                                  n({sub.formula}) = {nKnown.toFixed(3)} × ({sub.coeff} / {knownSub.coeff}) = <strong>{nSub.toFixed(4).replace(/\.?0+$/, '')} mol</strong>
                                  <br />
                                  → Khối lượng: m({sub.formula}) = {nSub.toFixed(3)} × {sub.M} = <strong>{mSub.toFixed(2)} gam</strong>
                                  {vSub !== null && (
                                    <span className="ml-2 text-blue-600 dark:text-blue-400 font-bold">
                                      | Thể tích khí: V({sub.formula}) = {nSub.toFixed(3)} × 24,79 = {vSub.toFixed(2)} lít (đkc)
                                    </span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>

                      {hclSub && !isNaN(vol) && vol > 0 && (
                        <div>
                          <div className="font-extrabold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Bước 3: Tính nồng độ mol (CM) của dung dịch HCl đã dùng</span>
                          </div>
                          <div className="pl-6 text-slate-700 dark:text-slate-300">
                            {(() => {
                              const nHCl = (nKnown * hclSub.coeff) / knownSub.coeff;
                              const vLiters = vol / 1000;
                              const cm = nHCl / vLiters;
                              return (
                                <div>
                                  Đổi {vol} mL = {vLiters} Lít.
                                  <br />
                                  CM(HCl) = n ÷ V = {nHCl.toFixed(3)} ÷ {vLiters} = <strong>{cm.toFixed(2)} M (mol/L)</strong>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 1.3 KHTN - SINH HỌC */}
          {khtnBranch === 'biology' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Anatomical Diagram SVG */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                  Bài 32: Dinh dưỡng & Hệ tiêu hóa
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-4">
                  Sơ đồ 5 Cơ quan Ống Tiêu Hóa
                </h3>

                <svg width="240" height="270" viewBox="0 0 230 250" className="cursor-pointer">
                  {/* Miệng (0) */}
                  <ellipse
                    cx="100" cy="24" rx="34" ry="16"
                    onClick={() => setSelectedOrgan(0)}
                    fill={selectedOrgan === 0 ? '#f59e0b' : '#fed7aa'}
                    stroke="#ea580c"
                    strokeWidth="2"
                    className="transition-colors hover:opacity-90"
                  />
                  <text x="100" y="28" textAnchor="middle" className="text-[11px] font-bold fill-slate-800 pointer-events-none">Miệng</text>

                  {/* Thực quản (1) */}
                  <rect
                    x="92" y="40" width="16" height="50" rx="6"
                    onClick={() => setSelectedOrgan(1)}
                    fill={selectedOrgan === 1 ? '#f59e0b' : '#fdba74'}
                    stroke="#ea580c"
                    strokeWidth="2"
                    className="transition-colors hover:opacity-90"
                  />
                  <text x="100" y="68" textAnchor="middle" className="text-[9px] font-bold fill-slate-800 pointer-events-none">Thực quản</text>

                  {/* Dạ dày (2) */}
                  <path
                    d="M86 94 Q60 106 68 141 Q82 171 115 161 Q138 146 130 116 Q122 94 108 94 Z"
                    onClick={() => setSelectedOrgan(2)}
                    fill={selectedOrgan === 2 ? '#f59e0b' : '#fca5a5'}
                    stroke="#dc2626"
                    strokeWidth="2"
                    className="transition-colors hover:opacity-90"
                  />
                  <text x="100" y="132" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 pointer-events-none">Dạ dày</text>

                  {/* Ruột già (4) - bao quanh ngoài */}
                  <path
                    d="M52 238 V178 Q52 168 62 168 H176 Q186 168 186 178 V238"
                    fill="none"
                    stroke={selectedOrgan === 4 ? '#b45309' : '#ea580c'}
                    strokeWidth="12"
                    strokeLinecap="round"
                    onClick={() => setSelectedOrgan(4)}
                    className="transition-colors hover:opacity-90"
                  />
                  <text x="120" y="174" textAnchor="middle" className="text-[9px] font-extrabold fill-amber-950 pointer-events-none">Ruột già</text>

                  {/* Ruột non (3) - cuộn bên trong */}
                  <path
                    d="M90 182 H166 Q176 182 166 195 H74 Q64 195 74 208 H166 Q176 208 166 221 H90"
                    fill="none"
                    stroke={selectedOrgan === 3 ? '#16a34a' : '#86efac'}
                    strokeWidth="8"
                    strokeLinecap="round"
                    onClick={() => setSelectedOrgan(3)}
                    className="transition-colors hover:opacity-90"
                  />
                  <text x="120" y="204" textAnchor="middle" className="text-[9px] font-extrabold fill-emerald-950 pointer-events-none">Ruột non</text>
                </svg>

                <p className="text-xs text-slate-500 mt-3 text-center">
                  Nhấp trực tiếp vào hình vẽ để xem cấu tạo và chức năng sinh học.
                </p>
              </div>

              {/* Organ Details & Quiz Minigame */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                {/* Organ selection buttons */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Danh mục cơ quan trong ống tiêu hóa:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {digestiveOrgans.map((organ) => (
                      <button
                        key={organ.id}
                        onClick={() => setSelectedOrgan(organ.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedOrgan === organ.id
                            ? 'bg-amber-600 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {organ.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Organ Card */}
                <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <h4 className="font-extrabold text-amber-900 dark:text-amber-200 text-base">
                      {digestiveOrgans[selectedOrgan].name}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {digestiveOrgans[selectedOrgan].desc}
                  </p>
                </div>

                {/* Minigame Quiz: Thử thách phản xạ đoán cơ quan */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        Mini-game: Thử thách nhận diện cơ quan
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                      Điểm: {bioScore}
                    </span>
                  </div>

                  {!bioQuizActive ? (
                    <button
                      onClick={startBioQuiz}
                      className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-sm transition-all shadow-sm cursor-pointer"
                    >
                      Bắt đầu thử thách ngay 🎯
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        {bioQuizQuestion?.prompt}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {digestiveOrgans.map(org => (
                          <button
                            key={org.id}
                            onClick={() => handleBioAnswer(org.id)}
                            className="p-2 text-xs font-bold rounded-lg bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                          >
                            {org.name}
                          </button>
                        ))}
                      </div>

                      {bioFeedback && (
                        <div className="text-xs font-semibold p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                          {bioFeedback}
                        </div>
                      )}

                      <button
                        onClick={startBioQuiz}
                        className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Câu hỏi tiếp theo</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TIẾNG ANH 8 (LUYỆN ÂM AUDIO CHUẨN NATIVE) */}
      {/* ========================================================================= */}
      {activeTab === 'english' && (
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-sky-50 dark:bg-sky-950/40 p-6 rounded-3xl border border-sky-200 dark:border-sky-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
                Web Speech API · Native English Voice
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                Luyện Phát Âm Trọng Tâm Giữa Học Kì I (Tiếng Anh 8)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Bấm vào biểu tượng loa để nghe giọng đọc chuẩn bản xứ US/UK cho từng từ vựng và câu ví dụ hoàn chỉnh.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-sky-700 dark:text-sky-300 shadow-xs border border-sky-100 dark:border-sky-800">
              <Volume2 className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>Tốc độ đọc giáo dục: 0.85x chuẩn</span>
            </div>
          </div>

          {/* Section 1: Vowel Pairs Phonetics */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Phần Ngữ Âm Đề Thi
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Phân Biệt Cặp Nguyên Âm Trọng Tâm (/ʊ/ vs /u:/ & /ə/ vs /ɜ:/)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vowelPairs.map(vp => (
                <div key={vp.pair} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                  <div>
                    <h4 className="font-extrabold text-sky-700 dark:text-sky-400 text-base">{vp.pair}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{vp.desc}</p>
                  </div>

                  <div className="space-y-2.5">
                    {vp.items.map((item, idx) => (
                      <div key={idx} className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                        {/* Short Sound */}
                        <div className="flex items-center justify-between pr-2 border-r border-slate-200 dark:border-slate-800">
                          <div>
                            <span className="font-extrabold text-slate-900 dark:text-white">{item.shortWord}</span>
                            <span className="text-[11px] text-sky-600 dark:text-sky-400 ml-1 font-mono">{item.shortPhonetic}</span>
                            <div className="text-[10px] text-slate-400">{item.shortMean}</div>
                          </div>
                          <button
                            onClick={() => handlePlayAudio(item.shortWord)}
                            disabled={playingWord === item.shortWord}
                            className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 hover:bg-sky-100 cursor-pointer"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Long Sound */}
                        <div className="flex items-center justify-between pl-2">
                          <div>
                            <span className="font-extrabold text-slate-900 dark:text-white">{item.longWord}</span>
                            <span className="text-[11px] text-indigo-600 dark:text-indigo-400 ml-1 font-mono">{item.longPhonetic}</span>
                            <div className="text-[10px] text-slate-400">{item.longMean}</div>
                          </div>
                          <button
                            onClick={() => handlePlayAudio(item.longWord)}
                            disabled={playingWord === item.longWord}
                            className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 hover:bg-indigo-100 cursor-pointer"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Unit Vocabulary Audio Cards */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Từ Vựng Trọng Tâm
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  Luyện Phát Âm Từ Vựng Theo Từng Unit
                </h3>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map(u => (
                  <button
                    key={u}
                    onClick={() => setActiveUnit(u)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeUnit === u
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    Unit {u}
                  </button>
                ))}
              </div>
            </div>

            {/* Word list */}
            {(() => {
              const currentSet = englishVocab.find(v => v.unit === activeUnit);
              if (!currentSet) return null;

              return (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500">{currentSet.unitTitle}</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentSet.words.map((item) => (
                      <div
                        key={item.word}
                        className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-600 transition-all flex flex-col justify-between gap-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-base font-extrabold text-slate-900 dark:text-white">{item.word}</span>
                              <span className="text-xs font-mono text-sky-600 dark:text-sky-400">{item.phonetic}</span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                              {item.meaning}
                            </div>
                          </div>

                          <button
                            onClick={() => handlePlayAudio(item.word)}
                            disabled={playingWord === item.word}
                            className="p-2 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900 transition-colors shrink-0 cursor-pointer shadow-xs"
                            title="Nghe phát âm từ"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Sentence example */}
                        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between gap-2">
                          <span className="italic">"{item.sentence}"</span>
                          <button
                            onClick={() => handlePlayAudio(item.sentence)}
                            disabled={playingWord === item.sentence}
                            className="p-1 rounded-md text-slate-400 hover:text-sky-600 shrink-0 cursor-pointer"
                            title="Nghe cả câu ví dụ"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: TOÁN 8 (TỨ GIÁC ĐỘNG & HẰNG ĐẲNG THỨC) */}
      {/* ========================================================================= */}
      {activeTab === 'math' && (
        <div className="space-y-8">
          {/* Part A: Dynamic Quadrilateral */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Chương 3: Tứ Giác Hình Học
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  Bảng Hình Học Tương Tác: Tứ Giác & Các Dạng Đặc Biệt
                </h3>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setQuadPreset('trapezoid')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                >
                  Hình Thang Cân
                </button>
                <button
                  onClick={() => setQuadPreset('parallelogram')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                >
                  Hình Bình Hành
                </button>
                <button
                  onClick={() => setQuadPreset('rectangle')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                >
                  Hình Chữ Nhật
                </button>
                <button
                  onClick={() => setQuadPreset('rhombus')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                >
                  Hình Thoi
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Interactive Canvas */}
              <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center">
                <svg
                  width="320"
                  height="240"
                  viewBox="0 0 320 240"
                  className="overflow-visible select-none"
                  onMouseMove={(e) => {
                    if (!draggingPoint) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.max(20, Math.min(300, e.clientX - rect.left));
                    const y = Math.max(20, Math.min(220, e.clientY - rect.top));
                    setPoints(prev => ({
                      ...prev,
                      [draggingPoint]: { x, y }
                    }));
                  }}
                  onMouseUp={() => setDraggingPoint(null)}
                  onMouseLeave={() => setDraggingPoint(null)}
                >
                  {/* Diagonals AC and BD */}
                  <line
                    x1={points.A.x} y1={points.A.y}
                    x2={points.C.x} y2={points.C.y}
                    stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3"
                  />
                  <line
                    x1={points.B.x} y1={points.B.y}
                    x2={points.D.x} y2={points.D.y}
                    stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3"
                  />

                  {/* Polygon ABCD */}
                  <polygon
                    points={`${points.A.x},${points.A.y} ${points.B.x},${points.B.y} ${points.C.x},${points.C.y} ${points.D.x},${points.D.y}`}
                    fill="#6366f1"
                    fillOpacity="0.15"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  />

                  {/* Draggable Vertices */}
                  {Object.entries(points).map(([key, pt]) => (
                    <g
                      key={key}
                      className="cursor-grab active:cursor-grabbing"
                      onMouseDown={() => setDraggingPoint(key)}
                    >
                      <circle
                        cx={pt.x} cy={pt.y} r="8"
                        fill="#4f46e5"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x={pt.x + (key === 'A' || key === 'D' ? -14 : 12)}
                        y={pt.y + (key === 'A' || key === 'B' ? -8 : 14)}
                        className="text-xs font-black fill-slate-900 dark:fill-white"
                      >
                        {key}
                      </text>
                    </g>
                  ))}
                </svg>

                <p className="text-xs text-slate-500 mt-2 text-center">
                  💡 Nhấn giữ và rê chuột vào các đỉnh <strong>A, B, C, D</strong> để thay đổi hình dạng tùy ý.
                </p>
              </div>

              {/* Measurements and Properties */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
                  <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase">
                    Độ dài 4 cạnh tứ giác (px)
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>AB = <strong>{Math.round(ab)}</strong></div>
                    <div>BC = <strong>{Math.round(bc)}</strong></div>
                    <div>CD = <strong>{Math.round(cd)}</strong></div>
                    <div>DA = <strong>{Math.round(da)}</strong></div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 space-y-2">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                    Độ dài 2 đường chéo
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>AC = <strong>{Math.round(ac)}</strong></div>
                    <div>BD = <strong>{Math.round(bd)}</strong></div>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {Math.abs(ac - bd) < 4 ? '🟢 Hai đường chéo bằng nhau (AC = BD)' : '⚪ Hai đường chéo không bằng nhau'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Định lý ghi nhớ:</strong> Tổng 4 góc trong một tứ giác luôn bằng <strong>360°</strong>. Hình thang có 2 đáy song song. Hình bình hành có các cạnh đối song song và bằng nhau.
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Visual Algebraic Identity */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Chương 1: Hằng Đẳng Thức Đáng Nhớ
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Mô Hình Hóa Diện Tích: (a + b)² = a² + 2ab + b²
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Sliders */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Độ dài đoạn a:</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400">{identityA}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    value={identityA}
                    onChange={(e) => setIdentityA(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Độ dài đoạn b:</span>
                    <span className="font-extrabold text-amber-600 dark:text-amber-400">{identityB}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    value={identityB}
                    onChange={(e) => setIdentityB(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>

                {/* Calculation Cards */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-xs space-y-2">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">
                    Tổng diện tích: ({identityA} + {identityB})² = {(identityA + identityB) ** 2}
                  </div>
                  <div className="space-y-1 text-slate-600 dark:text-slate-300">
                    <div>• Hình vuông a² = {identityA} × {identityA} = <strong>{identityA ** 2}</strong></div>
                    <div>• 2 Hình chữ nhật ab = 2 × ({identityA} × {identityB}) = <strong>{2 * identityA * identityB}</strong></div>
                    <div>• Hình vuông b² = {identityB} × {identityB} = <strong>{identityB ** 2}</strong></div>
                  </div>
                </div>
              </div>

              {/* Graphical Square Split */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center p-4">
                {(() => {
                  const scale = 20;
                  const wA = identityA * scale;
                  const wB = identityB * scale;

                  return (
                    <div className="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm inline-block">
                      <div className="flex">
                        {/* Box 1: a^2 */}
                        <div
                          style={{ width: `${wA}px`, height: `${wA}px` }}
                          className="bg-blue-500 text-white flex flex-col items-center justify-center font-bold text-xs p-1"
                        >
                          <span>a²</span>
                          <span className="text-[10px] opacity-80">({identityA ** 2})</span>
                        </div>
                        {/* Box 2: ab */}
                        <div
                          style={{ width: `${wB}px`, height: `${wA}px` }}
                          className="bg-amber-400 text-slate-900 flex flex-col items-center justify-center font-bold text-xs p-1"
                        >
                          <span>ab</span>
                          <span className="text-[10px] opacity-80">({identityA * identityB})</span>
                        </div>
                      </div>

                      <div className="flex">
                        {/* Box 3: ab */}
                        <div
                          style={{ width: `${wA}px`, height: `${wB}px` }}
                          className="bg-amber-400 text-slate-900 flex flex-col items-center justify-center font-bold text-xs p-1"
                        >
                          <span>ab</span>
                          <span className="text-[10px] opacity-80">({identityA * identityB})</span>
                        </div>
                        {/* Box 4: b^2 */}
                        <div
                          style={{ width: `${wB}px`, height: `${wB}px` }}
                          className="bg-emerald-500 text-white flex flex-col items-center justify-center font-bold text-xs p-1"
                        >
                          <span>b²</span>
                          <span className="text-[10px] opacity-80">({identityB ** 2})</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Bản chất của hằng đẳng thức là diện tích của 1 hình vuông lớn ghép bởi 4 mảnh.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: LỊCH SỬ & ĐỊA LÍ 8 (TRỤC THỜI GIAN & BẢN ĐỒ) */}
      {/* ========================================================================= */}
      {activeTab === 'history_geo' && (
        <div className="space-y-8">
          {/* History: Bourgeois Revolutions Timeline */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Phần Lịch Sử 8: Bài 1, 2
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Trục Thời Gian Các Cuộc Cách Mạng Tư Sản (Thế Kỉ XVI - XVIII)
              </h3>
            </div>

            {/* Timeline Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                <span>1566 (Hà Lan)</span>
                <span>1640 (Anh)</span>
                <span>1775 (Bắc Mỹ)</span>
                <span>1789 (Pháp)</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {historyEvents.map((evt) => (
                  <button
                    key={evt.year}
                    onClick={() => setHistoryYear(evt.year)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      historyYear === evt.year
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md font-bold'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-sm font-black">{evt.year}</div>
                    <div className="text-xs truncate">{evt.name.split('(')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Event Details */}
            {(() => {
              const activeEvt = historyEvents.find(e => e.year === historyYear) || historyEvents[0];
              return (
                <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-black text-xs">
                      {activeEvt.year}
                    </span>
                    <h4 className="text-base font-extrabold text-amber-950 dark:text-amber-200">
                      {activeEvt.name}
                    </h4>
                  </div>

                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Nhân vật tiêu biểu / Lãnh đạo:</strong> {activeEvt.figure}
                  </div>

                  <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <strong>Ý nghĩa lịch sử:</strong> {activeEvt.significance}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Geography: 4 Extreme Points & Monsoons */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Phần Địa Lý 8: Bài 1, 2, 8
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Vị Trí Địa Lý & Hai Mùa Gió Việt Nam
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 4 Extreme Points */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  4 Điểm Cực Phần Đất Liền Việt Nam
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-emerald-600 dark:text-emerald-400">Cực Bắc (23°23'B):</strong> Xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-blue-600 dark:text-blue-400">Cực Nam (8°34'B):</strong> Xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-amber-600 dark:text-amber-400">Cực Tây (102°09'Đ):</strong> Xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <strong className="text-purple-600 dark:text-purple-400">Cực Đông (109°28'Đ):</strong> Xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa.
                  </div>
                </div>
              </div>

              {/* Monsoon Comparison */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    So Sánh Hai Mùa Gió
                  </h4>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setGeoSeason('northeast')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        geoSeason === 'northeast'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Gió Đông Bắc
                    </button>
                    <button
                      onClick={() => setGeoSeason('southwest')}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        geoSeason === 'southwest'
                          ? 'bg-amber-600 text-white'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Gió Tây Nam
                    </button>
                  </div>
                </div>

                {geoSeason === 'northeast' ? (
                  <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs space-y-2">
                    <div className="font-bold text-blue-900 dark:text-blue-300">
                      Gió mùa Đông Bắc (Tháng 11 - Tháng 4)
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Xuất phát từ áp cao Xi-bia. Nửa đầu mùa đông thời tiết <strong>lạnh khô</strong>; nửa sau mùa đông qua biển nên mang hơi ẩm gây <strong>mưa phùn lạnh ẩm</strong> ở ven biển đồng bằng Bắc Bộ và Bắc Trung Bộ. Bị suy yếu và chặn lại ở dãy Bạch Mã.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs space-y-2">
                    <div className="font-bold text-amber-900 dark:text-amber-300">
                      Gió mùa Tây Nam (Tháng 5 - Tháng 10)
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Xuất phát từ vịnh Bengan và áp cao chí tuyến Nam bán cầu. Mang tính chất <strong>nóng ẩm, mưa nhiều</strong> trên cả nước. Khi vượt qua dãy Trường Sơn gây hiện tượng hiệu ứng <strong>gió phơn Tây Nam (gió Lào) khô nóng gay gắt</strong> ở vùng duyên hải miền Trung.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
