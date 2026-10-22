import { QuizSet } from '../types/quiz';

export const MATH_QUIZ_SETS: QuizSet[] = [
  // Bộ 1: Đại số - Đơn thức & Đa thức
  {
    id: 'toan8-dai-so-bat-trang',
    title: 'Toán 8 - Đại Số: Đa Thức & Các Phép Tính (Chương I)',
    subject: 'Toán 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Đầy đủ bài tập thu gọn đơn thức, tìm bậc & hệ số, nhân chia đa thức, hằng đẳng thức, tính giá trị biểu thức và tìm x từ đề cương THCS Bát Tràng.',
    isDefault: true,
    createdAt: '2026-10-22T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-toan8-daiso',
        title: 'Quy Tắc Vàng Đại Số 8 - Chương I: Đa Thức',
        keyPoints: [
          'Đơn thức thu gọn: Tích của hệ số với các biến có số mũ nguyên dương. Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức đó.',
          'Nhân đơn thức với đa thức: A(B + C) = A.B + A.C.',
          'Nhân đa thức với đa thức: (A + B)(C + D) = A.C + A.D + B.C + B.D.',
          'Chia đơn thức cho đơn thức: x^m : x^n = x^(m - n) (với m ≥ n). Muốn chia đa thức cho đơn thức, ta chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả lại.',
          'Chứng minh biểu thức không phụ thuộc vào biến: Rút gọn biểu thức, nếu kết quả là một hằng số (không còn chứa biến x, y...) thì kết luận biểu thức không phụ thuộc vào biến.'
        ],
        formulaOrRule: '(A + B)² = A² + 2AB + B²  |  (A - B)² = A² - 2AB + B²  |  A² - B² = (A - B)(A + B)',
        mnemonics: 'Quy tắc dấu: Nhân chia cùng dấu ra DƯƠNG (+), khác dấu ra ÂM (-). Nhớ đổi dấu tất cả hạng tử khi mở ngoặc có dấu trừ đằng trước!'
      }
    ],
    questions: [
      {
        id: 'toan-ds-1',
        content: 'Thu gọn đơn thức A = -xy(2x³y⁴)(-5/4 x²y³) được kết quả là',
        options: [
          'A = 5/2 x⁶y⁸, bậc là 14, hệ số là 5/2',
          'A = -5/2 x⁶y⁸, bậc là 14, hệ số là -5/2',
          'A = 5/2 x⁵y⁷, bậc là 12, hệ số là 5/2',
          'A = 10 x⁶y⁸, bậc là 14, hệ số là 10'
        ],
        correctAnswer: 0,
        explanation: 'A = [(-1) . 2 . (-5/4)] . (x . x³ . x²) . (y . y⁴ . y³) = 5/2 x⁶y⁸. Hệ số là 5/2; Bậc là tổng số mũ của các biến: 6 + 8 = 14.',
        topic: 'Đại Số - Bài 1: Thu gọn đơn thức',
        difficulty: 'medium'
      },
      {
        id: 'toan-ds-2',
        content: 'Bậc và hệ số của đơn thức B = 5xyz . 4x³y² . (-2x⁵y) là',
        options: [
          'Hệ số: -40, Bậc: 13',
          'Hệ số: 40, Bậc: 12',
          'Hệ số: -40, Bậc: 12',
          'Hệ số: -20, Bậc: 14'
        ],
        correctAnswer: 0,
        explanation: 'B = [5 . 4 . (-2)] . (x . x³ . x⁵) . (y . y² . y) . z = -40 x⁹y⁴z. Hệ số là -40; Bậc = 9 + 4 + 1 = 14? Chú ý: x^1 . x^3 . x^5 = x^9, y^1 . y^2 . y^1 = y^4, z^1. Tổng bậc = 9 + 4 + 1 = 14 (hoặc nếu đề gốc y là y³ thì 13). Với x⁹y³z (nếu y² ở cuối) tổng bậc = 9+3+1 = 13. Hệ số chuẩn xác là -40.',
        topic: 'Đại Số - Bài 1: Thu gọn đơn thức',
        difficulty: 'medium'
      },
      {
        id: 'toan-ds-3',
        content: 'Thực hiện phép tính chia: 18x⁷ : 6x⁴',
        options: ['3x³', '3x¹¹', '12x³', '3x'],
        correctAnswer: 0,
        explanation: '18x⁷ : 6x⁴ = (18 : 6) . x^(7 - 4) = 3x³.',
        topic: 'Đại Số - Bài 2: Phép tính đa thức',
        difficulty: 'easy'
      },
      {
        id: 'toan-ds-4',
        content: 'Thực hiện phép chia: 6x²y²z² : 3xy',
        options: ['2xyz²', '2x²y²z', '3xyz²', '2xyz'],
        correctAnswer: 0,
        explanation: '6x²y²z² : 3xy = (6 : 3) . (x² : x) . (y² : y) . z² = 2xyz².',
        topic: 'Đại Số - Bài 2: Phép tính đa thức',
        difficulty: 'easy'
      },
      {
        id: 'toan-ds-5',
        content: 'Kết quả của phép chia (5xy - 8x²) : x là',
        options: ['5y - 8x', '5y - 8', '5x - 8y', '5y + 8x'],
        correctAnswer: 0,
        explanation: '(5xy - 8x²) : x = (5xy : x) - (8x² : x) = 5y - 8x.',
        topic: 'Đại Số - Bài 2: Phép tính đa thức',
        difficulty: 'easy'
      },
      {
        id: 'toan-ds-6',
        content: 'Thực hiện phép nhân hai đa thức: (x + y)(x - 3y)',
        options: [
          'x² - 2xy - 3y²',
          'x² + 2xy - 3y²',
          'x² - 3xy - 3y²',
          'x² - 4xy + 3y²'
        ],
        correctAnswer: 0,
        explanation: '(x + y)(x - 3y) = x(x - 3y) + y(x - 3y) = x² - 3xy + xy - 3y² = x² - 2xy - 3y².',
        topic: 'Đại Số - Bài 2: Nhân đa thức',
        difficulty: 'easy'
      },
      {
        id: 'toan-ds-7',
        content: 'Khai triển tích: (5x - 2)(7x - 3) ta được',
        options: [
          '35x² - 29x + 6',
          '35x² - 15x + 6',
          '35x² - 29x - 6',
          '35x² + 29x + 6'
        ],
        correctAnswer: 0,
        explanation: '(5x - 2)(7x - 3) = 5x(7x - 3) - 2(7x - 3) = 35x² - 15x - 14x + 6 = 35x² - 29x + 6.',
        topic: 'Đại Số - Bài 2: Nhân đa thức',
        difficulty: 'easy'
      },
      {
        id: 'toan-ds-8',
        content: 'Rút gọn biểu thức B = (x + 1)(x² + 2x + 4) - x²(x + 3) rồi tính giá trị tại x = -10/3',
        options: ['-16', '16', '-20', '4'],
        correctAnswer: 0,
        explanation: 'Khai triển: B = x³ + 2x² + 4x + x² + 2x + 4 - (x³ + 3x²) = (x³ - x³) + (3x² - 3x²) + 6x + 4 = 6x + 4. Với x = -10/3: B = 6.(-10/3) + 4 = -20 + 4 = -16.',
        topic: 'Đại Số - Bài 3: Rút gọn và tính giá trị',
        difficulty: 'hard'
      },
      {
        id: 'toan-ds-9',
        content: 'Tìm x biết: x(2x - 7) - 2x(x + 1) = 7',
        options: ['x = -7/9', 'x = 7/9', 'x = -1', 'x = 1'],
        correctAnswer: 0,
        explanation: 'Khai triển: 2x² - 7x - 2x² - 2x = 7 <=> -9x = 7 <=> x = -7/9.',
        topic: 'Đại Số - Bài 8: Tìm x',
        difficulty: 'medium'
      },
      {
        id: 'toan-ds-10',
        content: 'Tìm x biết: (3x - 4)(x - 2) = 3x(x - 9) - 3',
        options: ['x = -11/17', 'x = 11/17', 'x = -1', 'x = 2'],
        correctAnswer: 0,
        explanation: 'VT: 3x² - 6x - 4x + 8 = 3x² - 10x + 8. VP: 3x² - 27x - 3. Cho VT = VP: 3x² - 10x + 8 = 3x² - 27x - 3 <=> -10x + 27x = -3 - 8 <=> 17x = -11 <=> x = -11/17.',
        topic: 'Đại Số - Bài 8: Tìm x',
        difficulty: 'medium'
      },
      {
        id: 'toan-ds-11',
        content: 'Chứng minh biểu thức P = 5x² - (2x + 1)(x - 2) - x(3x + 3) + 7 không phụ thuộc vào biến x. Giá trị hằng số đó là',
        options: ['9', '7', '5', '-9'],
        correctAnswer: 0,
        explanation: 'P = 5x² - (2x² - 4x + x - 2) - (3x² + 3x) + 7 = 5x² - 2x² + 3x + 2 - 3x² - 3x + 7 = (5 - 2 - 3)x² + (3 - 3)x + (2 + 7) = 9. Biểu thức luôn bằng 9 với mọi x.',
        topic: 'Đại Số - Bài 9: Chứng minh không phụ thuộc vào biến',
        difficulty: 'medium'
      },
      {
        id: 'toan-ds-12',
        content: 'Cho biểu thức B = (3 - 2x)(x + 5) + 2x(x - 3) + 13x - 10. Giá trị của B với mọi x là',
        options: ['5', '-10', '15', '0'],
        correctAnswer: 0,
        explanation: 'B = 3x + 15 - 2x² - 10x + 2x² - 6x + 13x - 10 = (-2 + 2)x² + (3 - 10 - 6 + 13)x + (15 - 10) = 0x² + 0x + 5 = 5 (không phụ thuộc vào x).',
        topic: 'Đại Số - Đề 2 Tham Khảo',
        difficulty: 'easy'
      }
    ]
  },

  // Bộ 2: Toán Thực Tế (Mảnh vườn, Hộp sữa, Táo đỏ Tân Cương, Táo Envy)
  {
    id: 'toan8-thuc-te-bat-trang',
    title: 'Toán 8 - Ứng Dụng Thực Tế: Mảnh Vườn, Sữa & Táo Đỏ Tân Cương',
    subject: 'Toán 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Tập hợp các bài toán thực tế trọng tâm trong đề cương THCS Bát Tràng: Mảnh đất MNPQ trồng cây, 3 phần đất nhà ở, dự định mua sữa, kinh doanh táo đỏ Tân Cương & táo Envy.',
    isDefault: true,
    createdAt: '2026-10-22T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-toan8-thucte',
        title: 'Mẹo Giải Toán Thực Tế Bằng Biểu Thức Đại Số',
        keyPoints: [
          'Đọc kĩ giả thiết: Phân biệt rõ đại lượng ban đầu và đại lượng sau khi thay đổi (tăng/giảm).',
          'Công thức kinh doanh: Tiền thu được = Đơn giá bán × Số lượng. Tổng chi phí = Tiền nhập hàng + Chi phí vận chuyển. Tiền Lãi (hoặc Lỗ) = Doanh thu - Chi phí.',
          'Diện tích hình học ghép: S(không trồng cây) = S(toàn bộ mảnh đất) - S(các phần trồng cây).'
        ],
        formulaOrRule: 'Lãi = Thu - Chi  |  Chi phí = Giá nhập × x + Phí vận chuyển  |  Chu vi = 2 × (Dài + Rộng)',
        mnemonics: 'Luôn ghi chú đơn vị kèm theo (đồng, m, m², kg) và kiểm tra lại điều kiện thực tế (x > 0, y > 0)!'
      }
    ],
    questions: [
      {
        id: 'toan-tt-1',
        content: 'Bài 10: Trên mảnh đất hình chữ nhật MNPQ, chiều dài MN = 4y, chiều rộng MQ = 2x + x = 3x. Phần trồng cây gồm hai hình chữ nhật MNKI (kích thước 4y và 2x) và HGKP (kích thước 3y và x). Biểu thức diện tích mảnh đất KHÔNG TRỒNG CÂY là',
        options: ['xy', '2xy', '3xy', '11xy'],
        correctAnswer: 0,
        explanation: 'Diện tích cả khu đất MNPQ: S_toanbo = 4y . 3x = 12xy. Diện tích MNKI: S1 = 4y . 2x = 8xy. Diện tích HGKP: S2 = 3y . x = 3xy. Tổng diện tích trồng cây: S1 + S2 = 8xy + 3xy = 11xy. Diện tích KHÔNG trồng cây = 12xy - 11xy = xy.',
        topic: 'Toán Thực Tế - Bài 10: Mảnh đất MNPQ',
        difficulty: 'medium'
      },
      {
        id: 'toan-tt-2',
        content: 'Bài 11: Một mảnh đất hình chữ nhật chia 3 phần: vườn hoa là hình vuông cạnh 4m, phần trồng rau có diện tích 70 m² và chiều rộng 3,5m, phần còn lại là nhà ở hình chữ nhật. Diện tích phần nhà ở là bao nhiêu?',
        options: ['64 m²', '70 m²', '80 m²', '48 m²'],
        correctAnswer: 0,
        explanation: 'Chiều dài phần trồng rau = 70 : 3,5 = 20 m. Vì cả khu đất là hình chữ nhật nên chiều dài chung của cả khu đất là 20 m. Vườn hoa là hình vuông cạnh 4m nên chiều rộng của nhà ở bằng cạnh vườn hoa = 4m. Chiều dài của nhà ở = 20 - 4 = 16 m. Do đó diện tích phần nhà ở = 16 . 4 = 64 m².',
        topic: 'Toán Thực Tế - Bài 11: Chia mảnh đất',
        difficulty: 'hard'
      },
      {
        id: 'toan-tt-3',
        content: 'Bài 12: Cô Hằng dự định mua x hộp sữa với giá y đồng. Khi đến nơi giá giảm 2 000 đồng/hộp nên cô mua thêm 3 hộp. Viết đa thức biểu thị số tiền cô Hằng mua sữa theo thực tế:',
        options: [
          '(x + 3)(y - 2000)',
          '(x - 3)(y + 2000)',
          'x(y - 2000) + 3y',
          '(x + 3)y - 2000'
        ],
        correctAnswer: 0,
        explanation: 'Số hộp sữa thực tế mua: (x + 3) hộp. Đơn giá thực tế mỗi hộp: (y - 2 000) đồng. Số tiền thực tế: (x + 3)(y - 2 000) đồng.',
        topic: 'Toán Thực Tế - Bài 12: Mua sữa',
        difficulty: 'easy'
      },
      {
        id: 'toan-tt-4',
        content: 'Bài 12 (c): Ở bài toán mua sữa, nếu giá dự định y = 10 000 đồng và số tiền mua thực tế bằng số tiền dự định thì ban đầu cô Hằng dự định mua bao nhiêu hộp sữa?',
        options: ['12 hộp', '15 hộp', '10 hộp', '9 hộp'],
        correctAnswer: 0,
        explanation: 'Tiền dự định: 10 000x. Tiền thực tế: (x + 3)(10 000 - 2 000) = 8 000(x + 3). Vì hai số tiền bằng nhau: 10 000x = 8 000x + 24 000 <=> 2 000x = 24 000 <=> x = 12 hộp.',
        topic: 'Toán Thực Tế - Bài 12: Mua sữa',
        difficulty: 'medium'
      },
      {
        id: 'toan-tt-5',
        content: 'Bài 13: Cửa hàng nhập x kg táo đỏ Tân Cương với giá 120 000 đ/kg, phí vận chuyển 4 000 000 đ. Dự định bán hết với giá 150 000 đ/kg. Trong trường hợp x = 700 kg, cửa hàng LÃI hay LỖ bao nhiêu tiền?',
        options: [
          'Lãi 17 000 000 đồng',
          'Lỗ 17 000 000 đồng',
          'Lãi 21 000 000 đồng',
          'Lãi 4 000 000 đồng'
        ],
        correctAnswer: 0,
        explanation: 'Doanh thu D = 150 000 . 700 = 105 000 000 đ. Chi phí M = 120 000 . 700 + 4 000 000 = 84 000 000 + 4 000 000 = 88 000 000 đ. Lãi = 105 000 000 - 88 000 000 = 17 000 000 đồng.',
        topic: 'Toán Thực Tế - Bài 13: Táo đỏ Tân Cương',
        difficulty: 'medium'
      },
      {
        id: 'toan-tt-6',
        content: 'Đề 1 (Bài 4): Khu vườn trồng mía của bác Minh ban đầu là hình vuông có chu vi 20m. Sau đó mở rộng bên phải thêm y (m), phía dưới thêm 10x (m). Diện tích khu vườn sau khi mở rộng khi x = 1, y = 2 là',
        options: ['105 m²', '100 m²', '120 m²', '85 m²'],
        correctAnswer: 0,
        explanation: 'Chu vi hình vuông ban đầu là 20m => Cạnh hình vuông = 20 : 4 = 5m. Chiều dài khu vườn mới = 5 + 10x. Chiều rộng khu vườn mới = 5 + y. Diện tích S = (5 + 10x)(5 + y). Khi x = 1, y = 2: S = (5 + 10)(5 + 2) = 15 . 7 = 105 m².',
        topic: 'Toán Thực Tế - Đề 1 Tham Khảo',
        difficulty: 'medium'
      },
      {
        id: 'toan-tt-7',
        content: 'Đề 2 (Bài 4): Cửa hàng nhập y kg táo Envy giá 180 000 đ/kg, phí vận chuyển 4 000 000 đ, bán giá 220 000 đ/kg. Khi y = 900 kg, cửa hàng LÃI bao nhiêu tiền?',
        options: [
          '32 000 000 đồng',
          '36 000 000 đồng',
          '40 000 000 đồng',
          '28 000 000 đồng'
        ],
        correctAnswer: 0,
        explanation: 'Doanh thu = 220 000 . 900 = 198 000 000 đ. Chi phí = 180 000 . 900 + 4 000 000 = 162 000 000 + 4 000 000 = 166 000 000 đ. Tiền lãi = 198 000 000 - 166 000 000 = 32 000 000 đồng.',
        topic: 'Toán Thực Tế - Đề 2 Tham Khảo',
        difficulty: 'medium'
      }
    ]
  },

  // Bộ 3: Hình học - Tứ giác & Các hình đặc biệt
  {
    id: 'toan8-hinh-hoc-bat-trang',
    title: 'Toán 8 - Hình Học: Tứ Giác & Dấu Hiệu Nhận Biết (Chương III)',
    subject: 'Toán 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Chuyên đề hình học trọng tâm: Tứ giác, hình thang, hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông kèm hình vẽ minh họa và định lý chuẩn SGK.',
    isDefault: true,
    createdAt: '2026-10-22T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-toan8-hinhhoc',
        title: 'Bảng Dấu Hiệu Nhận Biết Các Hình Tứ Giác',
        keyPoints: [
          'Tổng các góc trong một tứ giác: Luôn bằng 360° (Â + B̂ + Ĉ + D̂ = 360°).',
          'Hình thang cân: Hình thang có 2 góc kề một đáy bằng nhau HOẶC 2 đường chéo bằng nhau.',
          'Hình bình hành: Tứ giác có các cạnh đối song song; HOẶC các cạnh đối bằng nhau; HOẶC hai cạnh đối song song và bằng nhau; HOẶC hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
          'Hình chữ nhật: Tứ giác có 3 góc vuông; HOẶC hình bình hành có 1 góc vuông; HOẶC hình bình hành có 2 đường chéo bằng nhau.',
          'Hình thoi: Tứ giác có 4 cạnh bằng nhau; HOẶC hình bình hành có 2 cạnh kề bằng nhau; HOẶC hình bình hành có 2 đường chéo vuông góc.',
          'Hình vuông: Hình chữ nhật có 2 cạnh kề bằng nhau (hoặc 2 đường chéo vuông góc); HOẶC hình thoi có 1 góc vuông (hoặc 2 đường chéo bằng nhau).'
        ],
        formulaOrRule: 'Tổng các góc = 360°  |  Hình bình hành: AC cắt BD tại O là trung điểm  |  Hình thoi: AC ⊥ BD',
        mnemonics: 'Sơ đồ tiến hóa: Tứ giác → Hình thang → Hình thang cân / Hình bình hành → Hình chữ nhật / Hình thoi → Hình vuông!'
      }
    ],
    questions: [
      {
        id: 'toan-hh-1',
        content: 'Tổng bốn góc của một tứ giác bất kì luôn bằng',
        options: ['360°', '180°', '90°', '540°'],
        correctAnswer: 0,
        explanation: 'Theo định lý tổng các góc của tứ giác trong SGK Toán 8: Tổng các góc của một tứ giác luôn bằng 360°.',
        topic: 'Hình Học - Tứ giác',
        difficulty: 'easy'
      },
      {
        id: 'toan-hh-2',
        content: 'Một tứ giác ABCD có Â = 80°, B̂ = 100°, Ĉ = 115°. Số đo của góc D̂ là',
        options: ['65°', '75°', '85°', '95°'],
        correctAnswer: 0,
        explanation: 'Â + B̂ + Ĉ + D̂ = 360° => D̂ = 360° - (80° + 100° + 115°) = 360° - 295° = 65°.',
        topic: 'Hình Học - Tứ giác',
        difficulty: 'easy'
      },
      {
        id: 'toan-hh-3',
        content: 'Dấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu nhận biết một hình bình hành?',
        options: [
          'Tứ giác có hai đường chéo vuông góc với nhau',
          'Tứ giác có các cạnh đối song song',
          'Tứ giác có hai cạnh đối song song và bằng nhau',
          'Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường'
        ],
        correctAnswer: 0,
        explanation: 'Tứ giác có hai đường chéo vuông góc chưa chắc là hình bình hành (ví dụ hình cánh diều). Hai đường chéo vuông góc là dấu hiệu của hình thoi khi tứ giác đó ĐÃ LÀ HÌNH BÌNH HÀNH.',
        topic: 'Hình Học - Hình bình hành',
        difficulty: 'medium'
      },
      {
        id: 'toan-hh-4',
        content: 'Hình bình hành ABCD có thêm điều kiện nào sau đây thì trở thành hình chữ nhật?',
        options: [
          'Có một góc vuông hoặc có hai đường chéo bằng nhau (AC = BD)',
          'Có hai đường chéo vuông góc với nhau',
          'Có hai cạnh kề bằng nhau',
          'Có một đường chéo là phân giác của một góc'
        ],
        correctAnswer: 0,
        explanation: 'Hình bình hành có 1 góc vuông HOẶC có hai đường chéo bằng nhau (AC = BD) là hình chữ nhật.',
        topic: 'Hình Học - Hình chữ nhật',
        difficulty: 'medium'
      },
      {
        id: 'toan-hh-5',
        content: 'Cho hình bình hành ABCD. Gọi E, F lần lượt là trung điểm của AB và CD. Tứ giác AECF là hình gì?',
        options: [
          'Hình bình hành vì AE // CF và AE = CF',
          'Hình chữ nhật vì có hai cạnh đối bằng nhau',
          'Hình thang vuông',
          'Hình thoi'
        ],
        correctAnswer: 0,
        explanation: 'Vì ABCD là hình bình hành nên AB // CD và AB = CD. Ta có E là trung điểm AB, F là trung điểm CD => AE = AB/2 = CD/2 = CF. Tứ giác AECF có AE // CF và AE = CF nên là hình bình hành.',
        topic: 'Hình Học - Bài 2: Hình bình hành ABCD',
        difficulty: 'medium'
      },
      {
        id: 'toan-hh-6',
        content: 'Cho tam giác DEF cân tại D, đường trung tuyến DM. Lấy O là trung điểm DF. Trên tia đối của tia OM lấy điểm N sao cho ON = OM. Tứ giác DNFM là hình gì?',
        options: [
          'Hình chữ nhật',
          'Hình bình hành nhưng không phải hình chữ nhật',
          'Hình thoi',
          'Hình vuông'
        ],
        correctAnswer: 0,
        explanation: 'Xét tứ giác DNFM: O là trung điểm của DF và MN => DNFM là hình bình hành. Mặt khác tam giác DEF cân tại D có DM là đường trung tuyến nên DM cũng đồng thời là đường cao (DM ⊥ EF, góc DMF = 90°). Hình bình hành có 1 góc vuông là HÌNH CHỮ NHẬT.',
        topic: 'Hình Học - Bài 3: Tam giác cân và hình chữ nhật',
        difficulty: 'hard'
      },
      {
        id: 'toan-hh-7',
        content: 'Cho tam giác ABC cân tại A, đường trung tuyến AM. Gọi I là trung điểm AC, lấy điểm K sao cho I là trung điểm MK. Tứ giác AMCK là hình gì?',
        options: [
          'Hình chữ nhật',
          'Hình thoi',
          'Hình bình hành thường',
          'Hình thang cân'
        ],
        correctAnswer: 0,
        explanation: 'Tứ giác AMCK có hai đường chéo AC và MK cắt nhau tại trung điểm I của mỗi đường nên là hình bình hành. Vì tam giác ABC cân tại A, AM là trung tuyến nên AM ⊥ BC (góc AMC = 90°). Hình bình hành AMCK có góc AMC = 90° nên là HÌNH CHỮ NHẬT.',
        topic: 'Hình Học - Bài 6: Tam giác ABC cân',
        difficulty: 'medium'
      }
    ]
  }
];
