export interface MindmapNode {
  id: string;
  label: string;
  badge?: string;
  description?: string;
  formula?: string;
  trapAlert?: string;
  details?: string[];
  children?: MindmapNode[];
}

export interface SubjectMindmap {
  subjectId: string;
  subjectName: string;
  icon: string;
  themeColor: string;
  root: MindmapNode;
}

export const SUBJECT_MINDMAPS: SubjectMindmap[] = [
  {
    subjectId: 'toan-8',
    subjectName: 'Toán Học 8',
    icon: '📐',
    themeColor: 'from-blue-600 to-indigo-600',
    root: {
      id: 'toan-root',
      label: 'Toán 8 - Giữa Học Kì 1',
      badge: 'Trọng Tâm Lớp 8B',
      description: 'Gồm 2 trụ cột chính: Đa thức nhiều biến (Đại số) và Tứ giác lồi đặc biệt (Hình học).',
      children: [
        {
          id: 'toan-da-thuc',
          label: '1. Đa Thức & Hằng Đẳng Thức',
          badge: 'Đại số',
          description: 'Các phép toán đơn thức, đa thức và 7 hằng đẳng thức đáng nhớ.',
          children: [
            {
              id: 'toan-don-thuc',
              label: 'Đơn thức thu gọn & Bậc',
              description: 'Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến.',
              formula: 'Ví dụ: 3x²y³z có bậc = 2 + 3 + 1 = 6',
              trapAlert: 'Hằng số khác 0 có bậc là 0. Số 0 không có bậc!'
            },
            {
              id: 'toan-hang-dang-thuc',
              label: '7 Hằng Đẳng Thức Đáng Nhớ',
              description: 'Nền tảng biến đổi đại số xuyên suốt cấp 2.',
              details: [
                '(A + B)² = A² + 2AB + B²',
                '(A - B)² = A² - 2AB + B²',
                'A² - B² = (A - B)(A + B)',
                '(A + B)³ = A³ + 3A²B + 3AB² + B³',
                '(A - B)³ = A³ - 3A²B + 3AB² - B³',
                'A³ + B³ = (A + B)(A² - AB + B²)',
                'A³ - B³ = (A - B)(A² + AB + B²)'
              ],
              trapAlert: 'Dấu trừ ở (A - B)³ xen kẽ: +A³ - 3A²B + 3AB² - B³. Khác với A³ - B³ = (A - B)(A² + AB + B²).'
            },
            {
              id: 'toan-chia-da-thuc',
              label: 'Chia đơn thức & đa thức',
              description: 'Đa thức A chia hết cho đơn thức B nếu mọi hạng tử của A đều chia hết cho B.',
              formula: 'x^m : x^n = x^(m - n) (với m ≥ n)'
            }
          ]
        },
        {
          id: 'toan-hinh-tu-giac',
          label: '2. Cây Phân Cấp Các Loại Tứ Giác',
          badge: 'Hình học',
          description: 'Sơ đồ tiến hóa nhận biết các hình: Tứ giác -> Hình thang -> Hình bình hành -> Hình chữ nhật / thoi -> Hình vuông.',
          children: [
            {
              id: 'toan-tu-giac-chung',
              label: 'Tứ giác lồi',
              formula: 'Tổng 4 góc trong tứ giác = 360°',
              description: 'Tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kỳ cạnh nào.'
            },
            {
              id: 'toan-hinh-thang',
              label: 'Hình thang & Hình thang cân',
              description: 'Tứ giác có 2 cạnh đối song song. Hình thang cân có 2 góc kề 1 đáy bằng nhau hoặc 2 đường chéo bằng nhau.',
              trapAlert: 'Hình thang có 2 cạnh bên bằng nhau CHƯA CHẮC là hình thang cân (có thể là hình bình hành)!'
            },
            {
              id: 'toan-hinh-binh-hanh',
              label: 'Hình bình hành',
              description: 'Các cạnh đối song song và bằng nhau; các góc đối bằng nhau; 2 đường chéo cắt nhau tại trung điểm mỗi đường.',
              details: [
                'Tứ giác có các cạnh đối song song',
                'Tứ giác có 1 cặp cạnh đối song song và bằng nhau',
                'Tứ giác có 2 đường chéo cắt nhau tại trung điểm mỗi đường'
              ]
            },
            {
              id: 'toan-hcn-hthoi',
              label: 'Hình chữ nhật & Hình thoi',
              description: 'HCN: có 4 góc vuông, 2 đường chéo bằng nhau. Hình thoi: có 4 cạnh bằng nhau, 2 đường chéo vuông góc là phân giác.',
              trapAlert: 'Hình bình hành có 2 đường chéo BẰNG NHAU -> HCN. Có 2 đường chéo VUÔNG GÓC -> Hình thoi.'
            },
            {
              id: 'toan-hinh-vuong',
              label: 'Hình vuông (Đỉnh cao hội tụ)',
              description: 'Vừa là hình chữ nhật vừa là hình thoi. Có 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau và vuông góc tại trung điểm.',
              formula: 'Hình vuông = HCN có 2 đường chéo vuông góc = Hình thoi có 1 góc vuông'
            }
          ]
        }
      ]
    }
  },
  {
    subjectId: 'khtn-8',
    subjectName: 'Khoa Học Tự Nhiên 8',
    icon: '🔬',
    themeColor: 'from-emerald-600 to-teal-600',
    root: {
      id: 'khtn-root',
      label: 'KHTN 8 - THCS Bát Tràng',
      badge: 'Lý - Hóa - Sinh',
      description: 'Tổng hợp 3 phân môn với các công thức tính toán và cấu tạo cơ thể người.',
      children: [
        {
          id: 'khtn-hoa',
          label: 'Hóa Học: Mol & Dung dịch',
          badge: 'Hóa',
          children: [
            {
              id: 'khtn-tam-giac-mol',
              label: 'Tam giác đổi Mol (n)',
              formula: 'n = m / M  |  V (đkc) = n × 24,79  |  Số hạt = n × 6,022.10²³',
              trapAlert: 'Thể tích khí ở 25°C, 1 bar (đktc mới) nhân với 24,79 (KHÔNG PHẢI 22,4).'
            },
            {
              id: 'khtn-nong-do',
              label: 'Nồng độ Dung dịch',
              formula: 'C% = (mct / mdd) × 100%  |  CM = n / V (lít)',
              details: [
                'Khối lượng dung dịch: mdd = mct + mdung_moi (nước)',
                'Tỉ khối khí: d(A/B) = MA / MB (nếu MA/29 > 1 -> khí A nặng hơn không khí)'
              ]
            }
          ]
        },
        {
          id: 'khtn-ly',
          label: 'Vật Lý: Khối lượng riêng & Dụng cụ',
          badge: 'Lý',
          children: [
            {
              id: 'khtn-klr',
              label: 'Khối lượng riêng (D)',
              formula: 'D = m / V  (kg/m³ hoặc g/cm³)',
              trapAlert: 'Đổi đơn vị: 1 g/cm³ = 1 000 kg/m³. Ví dụ: Nước D = 1 000 kg/m³ = 1 g/cm³.'
            },
            {
              id: 'khtn-dung-cu-ly',
              label: 'Dụng cụ thí nghiệm',
              description: 'Cân điện tử đo khối lượng m, bình chia độ/ống đong đo thể tích V của chất lỏng hoặc vật rắn không thấm nước.'
            }
          ]
        },
        {
          id: 'khtn-sinh',
          label: 'Sinh Học: Cơ thể người & Tiêu hóa',
          badge: 'Sinh',
          children: [
            {
              id: 'khtn-co-the',
              label: 'Cơ quan & Hệ cơ quan',
              description: 'Tế bào -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể thống nhất.',
              details: [
                'Bộ xương: Xương đầu, xương thân (cột sống, lồng ngực), xương chi (tay, chân)',
                'Khớp xương: Khớp động (khớp gối, vai), Khớp bán động (đốt sống), Khớp bất động (hộp sọ)'
              ]
            },
            {
              id: 'khtn-tieu-hoa',
              label: 'Hệ tiêu hóa & Dinh dưỡng',
              description: 'Khoang miệng (nhai, enzyme Amylase biến tinh bột chín thành đường đôi) -> Dạ dày (co bóp, enzyme Pepsin tiêu hóa protein) -> Ruột non (tiêu hóa và hấp thụ triệt để tất cả chất nhờ dịch tụy, dịch mật, dịch ruột) -> Ruột già.'
            }
          ]
        }
      ]
    }
  },
  {
    subjectId: 'ngu-van-8',
    subjectName: 'Ngữ Văn 8',
    icon: '📖',
    themeColor: 'from-amber-600 to-rose-600',
    root: {
      id: 'van-root',
      label: 'Ngữ Văn 8 - Bát Tràng',
      badge: 'Đọc hiểu & Tiếng Việt',
      description: 'Truyện lịch sử Bên bờ Thiên Mạc, Thơ Đường luật & Thực hành Tiếng Việt.',
      children: [
        {
          id: 'van-thien-mac',
          label: 'Truyện lịch sử: Bên bờ Thiên Mạc (Hà Ân)',
          badge: 'Văn bản',
          children: [
            {
              id: 'van-tbt',
              label: 'Bảo Nghĩa hầu Trần Bình Trọng',
              description: 'Vị tướng trẻ tài đức vẹn toàn, khiêm nhường lắng nghe tiếng lòng của nhân dân, ý chí sắt đá kiên cường: "Đánh! Đánh! Đánh!".'
            },
            {
              id: 'van-ong-lao',
              label: 'Ông lão người Xuân Đình',
              description: 'Từng dự hội nghị Diên Hồng, tay xăm hai chữ "Sát Thát", biểu tượng cho khí phách và lòng yêu nước quật cường của nhân dân Đại Việt.'
            }
          ]
        },
        {
          id: 'van-tieng-viet',
          label: 'Thực hành Tiếng Việt trọng tâm',
          badge: 'Ngữ pháp',
          children: [
            {
              id: 'van-tro-tu',
              label: 'Trợ từ (Chính, đích, ngay, những, có...)',
              description: 'Dùng để nhấn mạnh hoặc biểu thị thái độ đánh giá sự vật, sự việc.',
              formula: 'Ví dụ: "Chính bạn ấy đã giúp tôi" / "Nó ăn những ba bát cơm"'
            },
            {
              id: 'van-than-tu',
              label: 'Thán từ (Ôi, chao ôi, dạ, vâng, than ôi...)',
              description: 'Dùng để bộc lộ cảm xúc trực tiếp hoặc dùng để gọi đáp trong giao tiếp.',
              formula: 'Thường đứng ở đầu câu, có thể tách thành câu đặc biệt.'
            }
          ]
        }
      ]
    }
  },
  {
    subjectId: 'tieng-anh-8',
    subjectName: 'Tiếng Anh 8',
    icon: '🇬🇧',
    themeColor: 'from-sky-600 to-blue-700',
    root: {
      id: 'ta-root',
      label: 'English 8 - Mid-term Revision',
      badge: 'Units 1 - 3',
      description: 'Leisure Time, Life in the Countryside & Teenagers.',
      children: [
        {
          id: 'ta-vocab',
          label: 'Core Vocabulary & Expressions',
          badge: 'Vocabulary',
          children: [
            {
              id: 'ta-likes',
              label: 'Likes / Dislikes Synonyms',
              formula: 'be hooked on = be keen on = be fond of = be crazy about = be addicted to (+ V-ing)'
            },
            {
              id: 'ta-modern-teen',
              label: 'Modern Teen Lifestyle',
              details: [
                'Digital detox: Thời gian cai thiết bị công nghệ',
                'Mindfulness: Thực hành chánh niệm, tập trung hơi thở giảm stress',
                'FOMO (Fear Of Missing Out): Hội chứng sợ bỏ lỡ',
                'Agri-drones: Máy bay không người lái phun thuốc mùa màng'
              ]
            }
          ]
        },
        {
          id: 'ta-grammar',
          label: 'Grammar Focus',
          badge: 'Grammar',
          children: [
            {
              id: 'ta-comp-adv',
              label: 'Comparative Forms of Adverbs',
              formula: 'S + V + more + adv-ly + than (more fluently, more carefully) | Bất quy tắc: well -> better, badly -> worse, hard -> harder'
            },
            {
              id: 'ta-compound',
              label: 'Compound Sentences & Connectors',
              details: [
                'Coordinating conjunctions (FANBOYS): , so / , but / , and / , for',
                'Conjunctive adverbs: ; therefore, / ; however, / ; otherwise,'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    subjectId: 'lich-su-dia-li-8',
    subjectName: 'Lịch Sử & Địa Lí 8',
    icon: '🌏',
    themeColor: 'from-amber-700 to-orange-700',
    root: {
      id: 'lsdl-root',
      label: 'Lịch Sử & Địa Lí 8',
      badge: 'Giữa Kì 1',
      description: 'Lịch sử Cận đại, Nội chiến Đại Việt & Địa hình Lãnh thổ Việt Nam.',
      children: [
        {
          id: 'ls-branch',
          label: 'Phân môn Lịch Sử',
          badge: 'Lịch Sử',
          children: [
            {
              id: 'ls-cmts',
              label: 'Ba cuộc CMTS tiêu biểu',
              details: [
                'Anh: Lật đổ quân chủ chuyên chế -> Quân chủ lập hiến',
                'Bắc Mỹ: 13 thuộc địa lật đổ ách thống trị thực dân Anh -> Hợp chúng quốc Mỹ',
                'Pháp 1789: Tấn công ngục Ba-xti (14/7/1789), triệt để nhất, lập nền cộng hòa'
              ]
            },
            {
              id: 'ls-vietnam',
              label: 'Lịch sử Đại Việt XVI - XVIII',
              details: [
                'Xung đột Trịnh - Nguyễn: Lấy sông Gianh (Quảng Bình) chia cắt Đàng Trong - Đàng Ngoài',
                'Chúa Nguyễn khai phá phía Nam: Từ Hoành Sơn đến mũi Cà Mau',
                'Chủ quyền biển đảo: Đội Hoàng Sa, Bắc Hải xác lập chủ quyền Hoàng Sa, Trường Sa từ TK XVII'
              ]
            }
          ]
        },
        {
          id: 'dl-branch',
          label: 'Phân môn Địa Lí',
          badge: 'Địa Lí',
          children: [
            {
              id: 'dl-lanh-tho',
              label: 'Vị trí & Lãnh thổ Việt Nam',
              formula: 'Biên giới bộ: 4.600 km | Bờ biển: 3.260 km | Diện tích: 331.344 km² | Cực Đông: Khánh Hòa'
            },
            {
              id: 'dl-4-vung-nui',
              label: '4 Vùng núi chính',
              details: [
                'Tây Bắc: Cao và hiểm trở nhất (Hoàng Liên Sơn, hướng TB - ĐN)',
                'Đông Bắc: Đồi núi thấp cánh cung chụm đầu ở Tam Đảo, karst đá vôi (Hạ Long, Ba Bể)',
                'Trường Sơn Bắc: Núi hẹp ngang, song song và so le',
                'Trường Sơn Nam: Bán bình nguyên và cao nguyên badan xếp tầng'
              ]
            }
          ]
        }
      ]
    }
  },
  {
    subjectId: 'tin-hoc-8',
    subjectName: 'Tin Học 8',
    icon: '💻',
    themeColor: 'from-cyan-600 to-blue-600',
    root: {
      id: 'tin-root',
      label: 'Tin Học 8 - Môi Trường Số',
      badge: 'Lý thuyết & Thuật toán',
      children: [
        {
          id: 'tin-the-he',
          label: '5 Thế Hệ Máy Tính',
          details: [
            'Thế hệ 1 (1945-1955): Đèn chân không (ENIAC)',
            'Thế hệ 2 (1955-1965): Bóng bán dẫn (Transistor)',
            'Thế hệ 3 (1965-1974): Mạch tích hợp (IC), xuất hiện màn hình và bàn phím',
            'Thế hệ 4 (1974-1990): Mạch VLSI, PC phổ biến',
            'Thế hệ 5 (1990-nay): AI, Internet, thiết bị thông minh'
          ]
        },
        {
          id: 'tin-thuat-toan',
          label: 'Thuật Toán & Lập Trình',
          formula: 'Vẽ tam giác đều: Lặp 3 lần [Đi thẳng độ dài cạnh, Quay trái 120°]'
        }
      ]
    }
  },
  {
    subjectId: 'cong-nghe-8',
    subjectName: 'Công Nghệ 8',
    icon: '⚙️',
    themeColor: 'from-orange-600 to-amber-600',
    root: {
      id: 'cn-root',
      label: 'Công Nghệ 8 - Cơ Khí & Bản Vẽ',
      badge: 'Kĩ thuật',
      children: [
        {
          id: 'cn-ban-ve',
          label: 'Quy chuẩn Bản vẽ & Hình chiếu',
          details: [
            'Khổ giấy A4: 297 x 210 mm | Khổ A0: 1 189 x 841 mm',
            'Hình chiếu bằng: Nằm ở PHÍA DƯỚI hình chiếu đứng',
            'Hình chiếu cạnh: Nằm ở BÊN PHẢI hình chiếu đứng',
            'Bản vẽ lắp: Bắt buộc có thêm BẢNG KÊ'
          ]
        },
        {
          id: 'cn-vat-lieu',
          label: 'Vật Liệu Cơ Khí',
          details: [
            'Kim loại đen: Gang (C > 2,14%), Thép (C ≤ 2,14%)',
            'Kim loại màu: Đồng, Nhôm (dẫn điện nhiệt tốt)',
            'Phi kim loại: Chất dẻo nhiệt (áo mưa), Cao su (săm lốp xe, tính đàn hồi)'
          ]
        }
      ]
    }
  },
  {
    subjectId: 'gdcd-8',
    subjectName: 'Giáo Dục Công Dân 8',
    icon: '⚖️',
    themeColor: 'from-emerald-700 to-green-700',
    root: {
      id: 'gdcd-root',
      label: 'GDCD 8 - Bát Tràng',
      badge: 'Đạo đức & Pháp luật',
      children: [
        {
          id: 'gdcd-truyen-thong',
          label: 'Truyền Thống Dân Tộc',
          details: [
            'Yêu nước, đoàn kết, hiếu thảo: "Chí tâm niệm Phật đêm ngày / Cầu cho cha mẹ sống tày non cao"',
            'Nghệ thuật cổ truyền: Dân ca Quan họ Bắc Ninh, Đờn ca tài tử, Hát Then Tày-Nùng-Thái'
          ]
        },
        {
          id: 'gdcd-lao-dong',
          label: 'Cần Cù & Sáng Tạo',
          details: [
            'Sáng tạo không phải bẩm sinh duy nhất, hoàn toàn có thể rèn luyện qua thực tiễn',
            'Lao động chân tay hay trí óc đều cần sáng tạo để cải tiến quy trình và nâng cao năng suất'
          ]
        }
      ]
    }
  },
  {
    subjectId: 'hdtn-8',
    subjectName: 'HĐTN & GDĐP 8',
    icon: '🤝',
    themeColor: 'from-purple-600 to-pink-600',
    root: {
      id: 'hdtn-root',
      label: 'HĐTN & GDĐP 8',
      badge: 'Kỹ năng sống & Địa phương',
      children: [
        {
          id: 'hdtn-ky-nang',
          label: 'Phòng chống bắt nạt & Quản trị cảm xúc',
          details: [
            'Bắt nạt mạng: Tuyệt đối không nhượng bộ chép bài hộ, lưu bằng chứng, báo thầy cô',
            'Điều hòa tức giận: Hít thở sâu, dừng lại vài giây, nhìn nhận tích cực'
          ]
        },
        {
          id: 'gddp-bat-trang',
          label: 'Dự án: Tinh hoa làng gốm Bát Tràng',
          details: [
            'Giới thiệu làng nghề truyền thống Thăng Long còn tồn tại bên bờ sông Hồng',
            'Sản phẩm dự án: Poster/Infographic A3, Video 3-5 phút hoặc Slide 6-10 trang'
          ]
        }
      ]
    }
  }
];
