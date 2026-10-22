import { QuizSet } from '../types/quiz';
import { MATH_QUIZ_SETS } from './mathSets';
import { LITERATURE_QUIZ_SETS } from './literatureSets';

const KHTN_DEFAULT_SETS: QuizSet[] = [
  {
    id: 'khtn8-tong-hop-bat-trang',
    title: 'Đề Thi Tổng Hợp Giữa HK1 KHTN 8 - THCS Bát Tràng (Toàn Bộ Đề Cương)',
    subject: 'KHTN 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Tổng hợp toàn bộ 55 câu trắc nghiệm chính thức (Vật lý 15 câu + Hóa học 25 câu + Sinh học 15 câu) dành cho Lớp 8B.',
    isDefault: true,
    createdAt: '2026-10-21T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-thcs-bat-trang-intro',
        title: 'Giới Hạn Ôn Tập Giữa HK1 - Trường THCS Bát Tràng',
        keyPoints: [
          'Vật lý: Bài 1 (Hóa chất & thiết bị cơ bản), Bài 13 (Khối lượng riêng), Bài 14 (Thực hành đo khối lượng riêng).',
          'Hóa học: Bài 2 (Phản ứng hóa học), Bài 3 (Mol và tỉ khối), Bài 4 (Dung dịch và nồng độ), Bài 5 (Bảo toàn khối lượng & PTHH), Bài 6 (Tính theo PTHH).',
          'Sinh học: Bài 30 (Khái quát cơ thể người), Bài 31 (Hệ vận động ở người), Bài 32 (Dinh dưỡng và tiêu hóa ở người).',
          'Khối lượng nguyên tử cần nhớ: H=1, C=12, N=14, O=16, Na=23, Mg=24, Al=27, P=31, S=32, Cl=35,5, K=39, Ca=40, Fe=56, Cu=64, Ag=108, Ba=137.'
        ],
        formulaOrRule: 'D = m / V  |  V = n × 24,79  |  d(A/B) = MA / MB  |  C% = (mct / mdd) × 100%  |  CM = n / V',
        mnemonics: 'Lưu ý khi đổi đơn vị: 1 g/cm³ = 1 000 kg/m³; 1 mL = 1 cm³; 1 lít = 1 dm³ = 0,001 m³.'
      }
    ],
    questions: [
      // Vật lý 15 câu
      {
        id: 'vl-q1',
        content: 'Khối lượng riêng của một chất được xác định bằng',
        options: [
          'khối lượng của một đơn vị thể tích chất đó.',
          'thể tích của một đơn vị khối lượng chất đó.',
          'khối lượng nhân với thể tích của vật.',
          'khối lượng chia cho trọng lượng của vật.'
        ],
        correctAnswer: 0,
        explanation: 'Theo định nghĩa trong SGK KHTN 8 (Bài 13): Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích (1 m³ hoặc 1 cm³) chất đó.',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q2',
        content: 'Công thức tính khối lượng riêng là',
        options: ['D = V/m.', 'D = m/V.', 'D = m.V.', 'D = V − m.'],
        correctAnswer: 1,
        explanation: 'Công thức: D = m / V (trong đó m là khối lượng, V là thể tích, D là khối lượng riêng).',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q3',
        content: 'Đơn vị đo khối lượng riêng trong hệ SI là',
        options: ['kg.', 'm³.', 'kg/m³.', 'N/m³.'],
        correctAnswer: 2,
        explanation: 'Trong hệ đơn vị đo lường quốc tế (SI), khối lượng tính bằng kg, thể tích tính bằng m³ nên đơn vị của khối lượng riêng là kg/m³ (hoặc g/cm³).',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q4',
        content: 'Một vật có khối lượng 600 g và thể tích 200 cm³. Khối lượng riêng của vật là',
        options: ['0,3 g/cm³.', '3 g/cm³.', '30 g/cm³.', '120 000 g/cm³.'],
        correctAnswer: 1,
        explanation: 'Áp dụng công thức D = m / V = 600 / 200 = 3 g/cm³ (tương đương 3 000 kg/m³).',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q5',
        content: 'Hai khối làm từ cùng một chất, khối A có thể tích gấp đôi khối B. Kết luận nào đúng?',
        options: [
          'Khối A có khối lượng riêng gấp đôi khối B.',
          'Khối A có khối lượng riêng bằng một nửa khối B.',
          'Hai khối có khối lượng riêng bằng nhau.',
          'Không thể so sánh khối lượng riêng.'
        ],
        correctAnswer: 2,
        explanation: 'Khối lượng riêng là đặc tính của chất, không phụ thuộc vào kích thước hay hình dạng của vật khi ở cùng điều kiện nhiệt độ và áp suất. Do cùng làm từ một chất nên hai khối có khối lượng riêng bằng nhau.',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'medium'
      },
      {
        id: 'vl-q6',
        content: 'Muốn xác định khối lượng riêng của một vật, cần đo trực tiếp hoặc xác định được',
        options: [
          'khối lượng và thể tích của vật.',
          'khối lượng và nhiệt độ của vật.',
          'chiều dài và khối lượng của vật trong mọi trường hợp.',
          'trọng lượng và nhiệt độ của vật.'
        ],
        correctAnswer: 0,
        explanation: 'Vì D = m / V nên cần đo được khối lượng m (bằng cân) và thể tích V (bằng thước đo hình học hoặc bình chia độ).',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q7',
        content: 'Một khối gỗ hình hộp chữ nhật có kích thước 2 cm, 3 cm và 5 cm. Thể tích khối gỗ là',
        options: ['10 cm³.', '15 cm³.', '30 cm³.', '60 cm³.'],
        correctAnswer: 2,
        explanation: 'Thể tích hình hộp chữ nhật: V = dài × rộng × cao = 2 × 3 × 5 = 30 cm³.',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q8',
        content: 'Dụng cụ thích hợp để đo khối lượng của một hòn sỏi nhỏ trong phòng thực hành là',
        options: ['nhiệt kế.', 'cân.', 'lực kế.', 'thước đo góc.'],
        correctAnswer: 1,
        explanation: 'Dụng cụ để đo khối lượng vật trong phòng thực hành là cân (cân điện tử hoặc cân Rô-béc-van). Lực kế dùng để đo lực/trọng lượng.',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q9',
        content: 'Để xác định thể tích của một hòn sỏi không có hình dạng hình học xác định, có thể dùng',
        options: [
          'thước thẳng.',
          'cân điện tử.',
          'bình chia độ và nước.',
          'nhiệt kế và đồng hồ.'
        ],
        correctAnswer: 2,
        explanation: 'Phương pháp dời chỗ chất lỏng: Dùng bình chia độ chứa sẵn nước, thả hòn sỏi chìm hoàn toàn vào nước, thể tích sỏi bằng thể tích nước dâng lên.',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q10',
        content: 'Mực nước trong bình chia độ ban đầu là 35 mL. Thả chìm hoàn toàn một hòn sỏi vào bình, mực nước lên 48 mL. Thể tích hòn sỏi là',
        options: ['13 mL.', '35 mL.', '48 mL.', '83 mL.'],
        correctAnswer: 0,
        explanation: 'Thể tích hòn sỏi: V = V₂ - V₁ = 48 - 35 = 13 mL (tương đương 13 cm³).',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q11',
        content: 'Một vật có khối lượng 2 kg, thể tích 0,001 m³. Khối lượng riêng của vật là',
        options: ['200 kg/m³.', '2 000 kg/m³.', '20 000 kg/m³.', '0,002 kg/m³.'],
        correctAnswer: 1,
        explanation: 'D = m / V = 2 / 0,001 = 2 000 kg/m³.',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q12',
        content: 'Một chất lỏng có thể tích 100 cm³ và khối lượng 80 g. Khối lượng riêng của chất lỏng là',
        options: ['0,8 g/cm³.', '1,25 g/cm³.', '80 g/cm³.', '8 000 g/cm³.'],
        correctAnswer: 0,
        explanation: 'D = m / V = 80 / 100 = 0,8 g/cm³ (tương đương 800 kg/m³, ví dụ như dầu hỏa/cồn).',
        topic: 'Vật Lý - Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q13',
        content: 'Khi đọc thể tích chất lỏng trong bình chia độ, cần đặt mắt',
        options: [
          'cao hơn mặt chất lỏng.',
          'thấp hơn mặt chất lỏng.',
          'ngang với mặt thoáng chất lỏng (đọc đáy mặt khum phù hợp).',
          'ở vị trí bất kì.'
        ],
        correctAnswer: 2,
        explanation: 'Quy tắc đo thể tích chất lỏng: Phải đặt mắt nhìn ngang với độ cao mực chất lỏng (đáy mặt khum lõm đối với nước) để tránh sai số thị sai.',
        topic: 'Vật Lý - Bài 1 & 14',
        difficulty: 'easy'
      },
      {
        id: 'vl-q14',
        content: 'Trong phép đo khối lượng riêng của vật rắn không thấm nước bằng phương pháp dời chỗ nước, thể tích vật bằng',
        options: [
          'thể tích nước ban đầu.',
          'thể tích nước sau khi thả vật.',
          'hiệu thể tích nước sau và trước khi thả vật.',
          'tổng thể tích nước trước và sau khi thả vật.'
        ],
        correctAnswer: 2,
        explanation: 'Thể tích vật rắn chìm trong chất lỏng bằng thể tích phần chất lỏng bị vật chiếm chỗ: V = V_sau - V_trước.',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q15',
        content: 'Kết quả đo khối lượng riêng thực nghiệm khác giá trị tham khảo có thể do',
        options: [
          'dụng cụ đo có giới hạn chính xác.',
          'thao tác đo và đọc số liệu chưa chính xác.',
          'mẫu vật hoặc chất lỏng không hoàn toàn giống điều kiện tham khảo.',
          'cả A, B và C.'
        ],
        correctAnswer: 3,
        explanation: 'Cả 3 nguyên nhân: sai số dụng cụ, sai số chủ quan của người làm thí nghiệm và tạp chất/nhiệt độ môi trường khác với điều kiện tiêu chuẩn.',
        topic: 'Vật Lý - Bài 14: Thực hành',
        difficulty: 'medium'
      },

      // Hóa học 25 câu
      {
        id: 'hh-q1',
        content: 'Quá trình nào sau đây là biến đổi vật lí?',
        options: [
          'Đun nóng đường biến đổi thành than.',
          'Thân cây mía để lâu bị lên men.',
          'Thức ăn bị ôi thiu.',
          'Nước ao hồ bốc hơi nhanh vào mùa hè.'
        ],
        correctAnswer: 3,
        explanation: 'Nước bốc hơi chỉ là sự chuyển thể từ lỏng sang hơi, không tạo ra chất mới nên là biến đổi vật lí. Ba quá trình còn lại đều tạo chất mới nên là biến đổi hóa học.',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q2',
        content: 'Quá trình nào sau đây xảy ra biến đổi hóa học:',
        options: [
          'Nước đóng băng.',
          'Nước sông bay hơi tạo thành mây.',
          'Hòa tan muối ăn vào nước.',
          'Sắt để lâu trong không khí bị gỉ.'
        ],
        correctAnswer: 3,
        explanation: 'Sắt để lâu trong không khí ẩm tác dụng với oxygen tạo thành gỉ sắt (Fe2O3.nH2O) là chất mới có tính chất khác hẳn sắt ban đầu.',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q3',
        content: 'Chất được tạo thành sau phản ứng hóa học là?',
        options: ['Chất phản ứng.', 'Chất lỏng.', 'Chất sản phẩm.', 'Chất khí.'],
        correctAnswer: 2,
        explanation: 'Chất biến đổi trong phản ứng gọi là chất tham gia (chất phản ứng), chất mới sinh ra sau phản ứng gọi là chất sản phẩm.',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q4',
        content: 'Phản ứng sau là phản ứng gì: Phản ứng phân hủy copper (II) hydroxide thành copper (II) oxide và hơi nước thì cần cung cấp năng lượng dưới dạng nhiệt bằng cách đun nóng. Khi ngừng cung cấp nhiệt, phản ứng cũng dừng lại.',
        options: ['Phản ứng tỏa nhiệt.', 'Phản ứng thu nhiệt.', 'Phản ứng phân hủy.', 'Phản ứng trao đổi.'],
        correctAnswer: 1,
        explanation: 'Phản ứng cần cung cấp nhiệt liên tục trong suốt quá trình diễn ra gọi là phản ứng thu nhiệt.',
        topic: 'Hóa Học - Bài 2: Năng lượng phản ứng',
        difficulty: 'easy'
      },
      {
        id: 'hh-q5',
        content: 'Đốt cháy cây nến trong không khí là phản ứng hóa học vì',
        options: [
          'Có sự thay đổi hình dạng.',
          'Có sự thay đổi màu sắc của chất.',
          'Có sự tỏa nhiệt và phát sáng.',
          'Tạo ra chất không tan.'
        ],
        correctAnswer: 2,
        explanation: 'Dấu hiệu nhận biết phản ứng cháy: tỏa nhiệt mạnh và phát sáng, đồng thời tạo ra chất mới là carbon dioxide (CO2) và hơi nước (H2O).',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q6',
        content: 'Than (thành phần chính là carbon) cháy trong không khí tạo thành khí carbon dioxide. Trong quá trình phản ứng, lượng chất nào tăng dần?',
        options: ['Carbon dioxide tăng dần.', 'Oxygen tăng dần.', 'Carbon tăng dần.', 'Tất cả đều tăng.'],
        correctAnswer: 0,
        explanation: 'Trong phản ứng: C + O2 -> CO2, các chất tham gia (C và O2) giảm dần theo thời gian, chất sản phẩm (CO2) được tạo thành nên tăng dần.',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q7',
        content: 'Công thức nào dưới đây dùng để tính thể tích chất khí ở điều kiện chuẩn (đkc)?',
        options: ['V = n.24,79.', 'V = n . 24,97.', 'V = n/24,79.', 'V = n/24,97.'],
        correctAnswer: 0,
        explanation: 'Ở điều kiện chuẩn (25 °C và 1 bar), 1 mol khí bất kì chiếm 24,79 L. Vậy V = n × 24,79 (L).',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q8',
        content: 'Công thức tính khối lượng mol của chất?',
        options: ['M = m/n (g/mol).', 'M = m.n (g).', 'M = n/m (mol/g).', 'M = (m.n)/2 (mol).'],
        correctAnswer: 0,
        explanation: 'Khối lượng mol M bằng khối lượng m chia cho số mol n: M = m / n (g/mol).',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q9',
        content: 'Khối lượng mol phân tử nước (H2O) là bao nhiêu?',
        options: ['18 g/mol.', '9 g/mol.', '16 g/mol.', '10 g/mol.'],
        correctAnswer: 0,
        explanation: 'M(H2O) = 2 × 1 + 16 = 18 g/mol.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q10',
        content: 'Thể tích mol chất khí khi ở cùng điều kiện nhiệt độ và áp suất thì như thế nào?',
        options: ['Khác nhau.', 'Bằng nhau.', 'Thay đổi tuần hoàn.', 'Chưa xác định được.'],
        correctAnswer: 1,
        explanation: 'Định luật Avogadro: Ở cùng điều kiện nhiệt độ và áp suất, các chất khí khác nhau có số mol như nhau thì chiếm thể tích bằng nhau.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q11',
        content: 'Để xác định khí A nặng hơn hay nhẹ hơn khí B bao nhiêu lần, ta dựa vào tỉ số giữa:',
        options: [
          'khối lượng mol của khí B (MB) và khối lượng mol của khí A (MA).',
          'khối lượng mol của khí A (MA) và khối lượng mol của khí B (MB).',
          'khối lượng gam của khí A (mA) và khối lượng gam của khí B (mB).',
          'khối lượng gam của khí B (mB) và khối lượng gam của khí A (MA).'
        ],
        correctAnswer: 1,
        explanation: 'Tỉ khối của khí A so với khí B: d(A/B) = MA / MB.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q12',
        content: 'Hợp chất khí X có tỉ khối so với hiđro bằng 22. Công thức hóa học của X có thể là',
        options: ['NO2.', 'CO2.', 'NH3.', 'NO.'],
        correctAnswer: 1,
        explanation: 'd(X/H2) = MX / 2 = 22 => MX = 44 g/mol. Khối lượng mol của CO2 = 12 + 16 × 2 = 44 g/mol.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'medium'
      },
      {
        id: 'hh-q13',
        content: 'Ở điều kiện chuẩn, 1 mol khí bất kì chiếm thể tích bao nhiêu?',
        options: ['24,97 L.', '27,94 L.', '24,79 L.', '27,49 L.'],
        correctAnswer: 2,
        explanation: 'Theo chương trình mới KHTN 8 (ở 25°C, 1 bar): 1 mol chất khí có thể tích bằng 24,79 L.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q14',
        content: 'Số Avogadro có giá trị và kí hiệu là gì?',
        options: [
          '6,022.10²³ kí hiệu là NA.',
          '6,022.10²² kí hiệu là NA.',
          '6,022.10²³ kí hiệu là N.',
          '6,022.10²² kí hiệu là N.'
        ],
        correctAnswer: 0,
        explanation: 'Số Avogadro được kí hiệu là NA, có giá trị xấp xỉ bằng 6,022 × 10²³ hạt.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q15',
        content: '1 mol chất khí ở điều kiện chuẩn có thể tích là',
        options: ['24,79 lít.', '2,479 lít.', '247,9 lít.', '24,79 mL.'],
        correctAnswer: 0,
        explanation: '1 mol khí ở đkc = 24,79 lít.',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q16',
        content: 'Khí carbon dioxide (CO2) nặng hơn hay nhẹ hơn không khí bao nhiêu lần?',
        options: [
          'Nặng hơn không khí khoảng 1,52 lần.',
          'Nhẹ hơn không khí khoảng 1,52 lần.',
          'Bằng khối lượng không khí.',
          'Nặng hơn không khí 2 lần.'
        ],
        correctAnswer: 0,
        explanation: 'M(CO2) = 44 g/mol; M_không_khí ≈ 29 g/mol. Tỉ khối d(CO2/kk) = 44 / 29 ≈ 1,52 (nặng hơn 1,52 lần).',
        topic: 'Hóa Học - Bài 3: Mol & Tỉ khối',
        difficulty: 'medium'
      },
      {
        id: 'hh-q17',
        content: 'Nồng độ phần trăm của một dung dịch cho ta biết:',
        options: [
          'Số mol chất tan trong một lít dung dịch.',
          'Số gam chất tan có trong 100 gam dung dịch.',
          'Số mol chất tan có trong 150 gam dung dịch.',
          'Số gam chất tan có trong dung dịch.'
        ],
        correctAnswer: 1,
        explanation: 'Nồng độ phần trăm (kí hiệu C%) cho biết số gam chất tan có trong 100 gam dung dịch: C% = (mct / mdd) × 100%.',
        topic: 'Hóa Học - Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q18',
        content: 'Dung dịch bão hòa là gì?',
        options: [
          'Là dung dịch hòa tan chất tan.',
          'Là dung dịch không thể hòa tan thêm chất tan ở một nhiệt độ xác định.',
          'Là dung dịch giữa dung môi và chất tan.',
          'Không có đáp án đúng.'
        ],
        correctAnswer: 1,
        explanation: 'Dung dịch bão hòa là dung dịch không thể hòa tan thêm chất tan ở một nhiệt độ xác định.',
        topic: 'Hóa Học - Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q19',
        content: 'Hai chất không thể hòa tan với nhau tạo thành dung dịch là?',
        options: ['Nước và đường.', 'Dầu ăn và xăng.', 'Rượu và nước.', 'Dầu ăn và cát.'],
        correctAnswer: 3,
        explanation: 'Cát là chất rắn không tan trong dầu ăn nên không tạo thành dung dịch.',
        topic: 'Hóa Học - Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q20',
        content: 'Độ tan của một chất trong nước ở nhiệt độ xác định là gì?',
        options: [
          'Số kilogam chất đó tan được trong một lít nước để tạo ra dung dịch bão hòa.',
          'Là số gam chất đó tan ít nhất trong 100 g nước để tạo thành dung dịch bão hòa.',
          'Là số gam chất đó tan nhiều nhất trong 100 g nước để tạo thành dung dịch bão hòa ở nhiệt độ xác định.',
          'Là số gam chất đó không tan trong 100 g nước.'
        ],
        correctAnswer: 2,
        explanation: 'Độ tan (kí hiệu S) của một chất trong nước là số gam chất đó tan nhiều nhất trong 100 gam nước để tạo thành dung dịch bão hòa ở nhiệt độ xác định.',
        topic: 'Hóa Học - Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q21',
        content: 'Cho kim loại Mg tác dụng với acid chlohydric (HCl) tạo ra khí hydrogen (H2) và muối MgCl2. Phương trình hóa học nào dưới đây biểu diễn đúng phản ứng trên?',
        options: [
          'Mg + HCl → MgCl2 + H2',
          'Mg + 2HCl → MgCl2 + 2H2',
          'MgCl2 + H2 → Mg + 2HCl',
          'Mg + 2HCl → MgCl2 + H2'
        ],
        correctAnswer: 3,
        explanation: 'Cân bằng đúng số nguyên tử: 1 nguyên tử Mg, 2 nguyên tử H, 2 nguyên tử Cl ở cả hai vế: Mg + 2HCl → MgCl2 + H2.',
        topic: 'Hóa Học - Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q22',
        content: 'Sơ đồ phản ứng hóa học của các chất: A + B → C + D. Phương trình bảo toàn khối lượng là:',
        options: [
          'mA + mB = mC + mD',
          'mA + mC = mB + mD',
          'mA - mB = mC - mD',
          'mA × mB = mC × mD'
        ],
        correctAnswer: 0,
        explanation: 'Định luật bảo toàn khối lượng: Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm: mA + mB = mC + mD.',
        topic: 'Hóa Học - Bài 5: Định luật BTKL',
        difficulty: 'easy'
      },
      {
        id: 'hh-q23',
        content: 'Phương trình hóa học biểu diễn đúng phản ứng của kim loại iron tác dụng với dung dịch sunfuric acid loãng biết sản phẩm là iron (II) sulfate và có khí bay lên:',
        options: [
          'Fe + H2SO4 → FeSO4 + H2',
          'Fe + H2SO4 → Fe2SO4 + H2',
          'Fe + H2SO4 → FeSO4 + S2',
          'Fe + H2SO4 → FeSO4 + H2S'
        ],
        correctAnswer: 0,
        explanation: 'Iron (Fe hóa trị II) tác dụng H2SO4 loãng tạo FeSO4 và giải phóng khí H2: Fe + H2SO4 → FeSO4 + H2.',
        topic: 'Hóa Học - Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q24',
        content: 'Tỉ lệ hệ số tương ứng của chất tham gia và chất tạo thành của phương trình sau: Fe + 2HCl → FeCl2 + H2',
        options: ['1 : 2 : 1 : 2', '1 : 2 : 2 : 1', '2 : 1 : 1 : 1', '1 : 2 : 1 : 1'],
        correctAnswer: 3,
        explanation: 'Hệ số đứng trước các chất lần lượt là 1 (Fe) : 2 (HCl) : 1 (FeCl2) : 1 (H2). Tỉ lệ là 1 : 2 : 1 : 1.',
        topic: 'Hóa Học - Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q25',
        content: 'Cho phương trình hóa học: 4P + 5O2 → 2P2O5. Để thu được 0,2 mol P2O5 thì số mol P cần tham gia phản ứng là:',
        options: ['0,2 mol.', '0,4 mol.', '0,6 mol.', '0,8 mol.'],
        correctAnswer: 1,
        explanation: 'Theo phương trình: Cứ 2 mol P2O5 cần 4 mol P (tỉ lệ 1 : 2). Do đó để tạo 0,2 mol P2O5 cần số mol P = (0,2 × 4) / 2 = 0,4 mol.',
        topic: 'Hóa Học - Bài 6: Tính theo PTHH',
        difficulty: 'medium'
      },

      // Sinh học 15 câu
      {
        id: 'sh-q1',
        content: 'Cơ thể người được cấu tạo gồm những phần nào?',
        options: [
          'Đầu, thân và các chi.',
          'Đầu, cổ và thân.',
          'Đầu, ngực, bụng và hai chân.',
          'Đầu, thân, hai tay và hai bàn chân.'
        ],
        correctAnswer: 0,
        explanation: 'SGK KHTN 8 (Bài 30): Cơ thể người gồm 3 phần chính là đầu, thân và các chi (tay và chân).',
        topic: 'Sinh Học - Bài 30: Cơ thể người',
        difficulty: 'easy'
      },
      {
        id: 'sh-q2',
        content: 'Hệ cơ quan nào có chức năng biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể hấp thụ được?',
        options: ['Hệ hô hấp.', 'Hệ tiêu hóa.', 'Hệ bài tiết.', 'Hệ tuần hoàn.'],
        correctAnswer: 1,
        explanation: 'Hệ tiêu hóa biến đổi thức ăn thành các chất dinh dưỡng đơn giản mà cơ thể có thể hấp thụ được qua thành ruột non vào máu và thải các chất bã ra ngoài.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q3',
        content: 'Khi một người chạy bộ, tim đập nhanh hơn và nhịp thở tăng lên. Hiện tượng này thể hiện điều gì?',
        options: [
          'Các hệ cơ quan hoạt động độc lập với nhau.',
          'Chỉ hệ vận động tham gia hoạt động khi cơ thể chạy.',
          'Các hệ cơ quan có mối liên hệ chặt chẽ và phối hợp hoạt động với nhau.',
          'Hệ tiêu hóa điều khiển trực tiếp mọi hoạt động của cơ thể.'
        ],
        correctAnswer: 2,
        explanation: 'Khi cơ bắp vận động mạnh cần nhiều năng lượng và oxy, hệ hô hấp phải thở nhanh để lấy thêm oxy, hệ tuần hoàn tăng nhịp tim để vận chuyển máu nhanh đến các cơ. Điều này chứng minh các hệ cơ quan phối hợp nhịp nhàng, thống nhất.',
        topic: 'Sinh Học - Bài 30: Cơ thể người',
        difficulty: 'medium'
      },
      {
        id: 'sh-q4',
        content: 'Một người bị rối loạn hoạt động của hệ tiêu hóa khiến cơ thể hấp thụ chất dinh dưỡng kém. Điều này có thể ảnh hưởng đến hệ vận động như thế nào?',
        options: [
          'Không ảnh hưởng vì hệ vận động hoạt động độc lập.',
          'Cơ và xương có thể phát triển kém do thiếu nguyên liệu dinh dưỡng cần thiết.',
          'Xương chắc khỏe hơn vì cơ thể hấp thụ ít chất dinh dưỡng.',
          'Các cơ quan khác ngừng hoạt động ngay lập tức.'
        ],
        correctAnswer: 1,
        explanation: 'Hệ tiêu hóa cung cấp protein, canxi và các chất khoáng cần thiết. Khi hấp thụ kém, cơ bắp thiếu protein bị teo nhão, xương thiếu canxi và phospho trở nên giòn, xốp, chậm phát triển.',
        topic: 'Sinh Học - Bài 30 & 31',
        difficulty: 'medium'
      },
      {
        id: 'sh-q5',
        content: 'Hệ vận động ở người gồm những thành phần chính nào?',
        options: [
          'Xương, khớp và cơ.',
          'Tim, mạch máu và máu.',
          'Não, tủy sống và dây thần kinh.',
          'Dạ dày, ruột non và ruột già.'
        ],
        correctAnswer: 0,
        explanation: 'Hệ vận động gồm có bộ xương, các khớp xương và hệ cơ (cơ xương).',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q6',
        content: 'Thành phần nào sau đây thuộc bộ xương người?',
        options: ['Cơ hai đầu.', 'Cơ ba đầu.', 'Xương đùi.', 'Cơ mặt.'],
        correctAnswer: 2,
        explanation: 'Xương đùi là xương dài nhất và khỏe nhất trong bộ xương người. Các phương án còn lại đều là các cơ thuộc hệ cơ.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q7',
        content: 'Vì sao xương có thể vừa tương đối cứng chắc vừa có tính đàn hồi nhất định?',
        options: [
          'Vì xương chỉ chứa chất hữu cơ.',
          'Vì xương chỉ chứa chất vô cơ.',
          'Vì xương được cấu tạo từ các thành phần hữu cơ và chất khoáng.',
          'Vì xương không chứa tế bào sống.'
        ],
        correctAnswer: 2,
        explanation: 'Chất hữu cơ (cốt giao/collagen) tạo nên tính mềm dẻo và đàn hồi cho xương; chất khoáng (chủ yếu là canxi và photpho) tạo nên độ cứng chắc.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'medium'
      },
      {
        id: 'sh-q8',
        content: 'Hệ vận động của người có chức năng:',
        options: [
          'nâng đỡ và bảo vệ cơ thể, tạo ra hình dạng, duy trì tư thế và giúp con người vận động.',
          'nâng đỡ và bảo vệ cơ thể.',
          'tạo ra hình dạng cơ thể.',
          'giúp con người vận động.'
        ],
        correctAnswer: 0,
        explanation: 'Phương án A nêu đầy đủ và toàn diện nhất các chức năng của hệ vận động: nâng đỡ, bảo vệ nội tạng, định hình tư thế và vận động.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q9',
        content: 'Một học sinh thường xuyên ngồi học cong lưng, cúi sát mặt xuống bàn và mang cặp lệch một bên vai. Biện pháp nào phù hợp nhất để bảo vệ hệ vận động?',
        options: [
          'Giữ nguyên tư thế nếu chưa thấy đau.',
          'Ngồi đúng tư thế, điều chỉnh bàn ghế phù hợp và đeo cặp bằng hai quai.',
          'Hạn chế mọi hoạt động thể lực.',
          'Chỉ cần uống sữa, không cần điều chỉnh tư thế.'
        ],
        correctAnswer: 1,
        explanation: 'Ngồi học thẳng lưng, bàn ghế vừa tầm vóc và đeo cặp đều cả hai vai giúp cột sống không bị vẹo và lồng ngực không bị chèn ép.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q10',
        content: 'Cơ quan nào dưới đây không nằm trong ống tiêu hóa?',
        options: ['Thực quản.', 'Dạ dày.', 'Tuyến ruột.', 'Ruột non.'],
        correctAnswer: 2,
        explanation: 'Ống tiêu hóa gồm: miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn. Tuyến ruột, tuyến tụy, tuyến gan, tuyến nước bọt là tuyến tiêu hóa.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'medium'
      },
      {
        id: 'sh-q11',
        content: 'Cơ quan nào là nơi diễn ra phần lớn quá trình hấp thụ chất dinh dưỡng ở người?',
        options: ['Miệng.', 'Thực quản.', 'Ruột non.', 'Dạ dày.'],
        correctAnswer: 2,
        explanation: 'Ruột non có diện tích bề mặt hấp thụ cực lớn nhờ các nếp gấp, lông ruột và mạng mao mạch dày đặc, là nơi hấp thụ phần lớn các chất dinh dưỡng.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q12',
        content: 'Quá trình tiêu hóa thức ăn ở người gồm những hình thức nào?',
        options: [
          'Chỉ có tiêu hóa cơ học.',
          'Chỉ có tiêu hóa hóa học.',
          'Tiêu hóa cơ học và tiêu hóa hóa học.',
          'Chỉ có quá trình hấp thụ.'
        ],
        correctAnswer: 2,
        explanation: 'Gồm cả tiêu hóa cơ học (nhai, nghiền, đảo trộn) và tiêu hóa hóa học (enzyme phân giải chất phức tạp thành chất đơn giản).',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q13',
        content: 'Thế nào là tiêu hoá thức ăn?',
        options: [
          'Biến đổi thức ăn thành các chất dinh dưỡng.',
          'Cơ thể hấp thụ chất dinh dưỡng qua thành ruột.',
          'Thải bỏ các chất thừa không hấp thụ được.',
          'Cả A, B và C.'
        ],
        correctAnswer: 3,
        explanation: 'Quá trình tiêu hóa thức ăn gồm biến đổi thức ăn thành chất dinh dưỡng, hấp thụ vào máu và thải bỏ chất bã cặn thừa.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q14',
        content: 'Một học sinh ăn rất ít rau xanh, uống ít nước và thường xuyên bị táo bón. Lời khuyên nào phù hợp nhất?',
        options: [
          'Tiếp tục ăn ít rau để giảm lượng thức ăn trong ruột.',
          'Chỉ uống nước ngọt có đường thay cho nước lọc.',
          'Tăng thực phẩm giàu chất xơ, uống đủ nước và vận động phù hợp.',
          'Loại bỏ hoàn toàn chất béo khỏi khẩu phần ăn.'
        ],
        correctAnswer: 2,
        explanation: 'Chất xơ kích thích nhu động ruột, nước làm mềm phân giúp phòng ngừa và cải thiện táo bón hiệu quả.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q15',
        content: 'Một học sinh thường xuyên ăn một khẩu phần chỉ gồm cơm trắng và thức ăn giàu chất béo, ít rau quả và thực phẩm giàu protein. Cách điều chỉnh nào phù hợp nhất?',
        options: [
          'Tiếp tục ăn như cũ nhưng tăng lượng cơm.',
          'Chỉ ăn rau xanh và không ăn các thực phẩm khác.',
          'Ăn đa dạng thực phẩm, bảo đảm khẩu phần cân đối và phù hợp nhu cầu cơ thể.',
          'Loại bỏ hoàn toàn chất bột đường.'
        ],
        correctAnswer: 2,
        explanation: 'Một chế độ ăn uống khoa học cần phối hợp cân đối giữa 4 nhóm chất dinh dưỡng: chất bột đường, chất đạm, chất béo, vitamin và khoáng chất.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'khtn8-vat-ly-bat-trang',
    title: 'Phân Môn Vật Lý 8 - Khối Lượng Riêng & Thực Hành Đo',
    subject: 'Vật Lý 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Chuyên đề Bài 1 (Thiết bị phòng thí nghiệm), Bài 13 (Khối lượng riêng D = m/V), Bài 14 (Thực hành đo khối lượng riêng hòn sỏi, chất lỏng).',
    isDefault: true,
    createdAt: '2026-10-21T08:05:00.000Z',
    summaries: [
      {
        id: 'sum-vl8-1',
        title: 'Trọng Tâm Bài 13: Khối Lượng Riêng',
        keyPoints: [
          'Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó: D = m / V.',
          'Trong hệ SI: khối lượng m tính bằng kg, thể tích V tính bằng m³, khối lượng riêng D tính bằng kg/m³.',
          'Đơn vị thông dụng khác: g/cm³ hoặc g/mL. Quy tắc đổi: 1 g/cm³ = 1 000 kg/m³.',
          'Khối lượng riêng là đại lượng đặc trưng cho từng chất ở điều kiện xác định.'
        ],
        formulaOrRule: 'D = m / V  =>  m = D × V  =>  V = m / D',
        mnemonics: 'Mẹo nhớ: 1 g/cm³ = 1 000 kg/m³ (Ví dụ: Nước có D = 1 g/cm³ = 1 000 kg/m³).'
      },
      {
        id: 'sum-vl8-2',
        title: 'Trọng Tâm Bài 14: Thực Hành Đo Khối Lượng Riêng',
        keyPoints: [
          'Đo khối lượng riêng của vật rắn đều đặn (hình hộp chữ nhật): Dùng cân đo khối lượng m, dùng thước đo dài (a), rộng (b), cao (c) => V = a × b × c => D = m / V.',
          'Đo khối lượng riêng của hòn sỏi không thấm nước: Dùng cân đo m, dùng bình chia độ đo thể tích nước dâng V = V₂ - V₁ => D = m / (V₂ - V₁).',
          'Đo khối lượng riêng của chất lỏng: Cân cốc rỗng (m₁), rót chất lỏng vào đo thể tích V trên bình chia độ, cân cốc chứa chất lỏng (m₂) => m = m₂ - m₁ => D = (m₂ - m₁) / V.',
          'Đặt mắt ngang mặt thoáng chất lỏng (đáy mặt khum) để tránh sai số.'
        ],
        formulaOrRule: 'V_sỏi = V₂ - V₁  |  m_chất_lỏng = m_cốc_đầy - m_cốc_rỗng',
        mnemonics: 'Quy tắc vàng: Luôn đọc đáy mặt khum ngang tầm mắt khi dùng bình chia độ.'
      }
    ],
    questions: [
      {
        id: 'vl-q1',
        content: 'Khối lượng riêng của một chất được xác định bằng',
        options: [
          'khối lượng của một đơn vị thể tích chất đó.',
          'thể tích của một đơn vị khối lượng chất đó.',
          'khối lượng nhân với thể tích của vật.',
          'khối lượng chia cho trọng lượng của vật.'
        ],
        correctAnswer: 0,
        explanation: 'Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q2',
        content: 'Công thức tính khối lượng riêng là',
        options: ['D = V/m.', 'D = m/V.', 'D = m.V.', 'D = V − m.'],
        correctAnswer: 1,
        explanation: 'D = m / V (m là khối lượng, V là thể tích).',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q3',
        content: 'Đơn vị đo khối lượng riêng trong hệ SI là',
        options: ['kg.', 'm³.', 'kg/m³.', 'N/m³.'],
        correctAnswer: 2,
        explanation: 'Đơn vị chuẩn hệ SI: kg/m³.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q4',
        content: 'Một vật có khối lượng 600 g và thể tích 200 cm³. Khối lượng riêng của vật là',
        options: ['0,3 g/cm³.', '3 g/cm³.', '30 g/cm³.', '120 000 g/cm³.'],
        correctAnswer: 1,
        explanation: 'D = 600 / 200 = 3 g/cm³.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q5',
        content: 'Hai khối làm từ cùng một chất, khối A có thể tích gấp đôi khối B. Kết luận nào đúng?',
        options: [
          'Khối A có khối lượng riêng gấp đôi khối B.',
          'Khối A có khối lượng riêng bằng một nửa khối B.',
          'Hai khối có khối lượng riêng bằng nhau.',
          'Không thể so sánh khối lượng riêng.'
        ],
        correctAnswer: 2,
        explanation: 'Khối lượng riêng chỉ phụ thuộc bản chất của chất, nên hai khối làm cùng một chất có khối lượng riêng bằng nhau.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'medium'
      },
      {
        id: 'vl-q6',
        content: 'Muốn xác định khối lượng riêng của một vật, cần đo trực tiếp hoặc xác định được',
        options: [
          'khối lượng và thể tích của vật.',
          'khối lượng và nhiệt độ của vật.',
          'chiều dài và khối lượng của vật trong mọi trường hợp.',
          'trọng lượng và nhiệt độ của vật.'
        ],
        correctAnswer: 0,
        explanation: 'Cần đo khối lượng m và thể tích V.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q7',
        content: 'Một khối gỗ hình hộp chữ nhật có kích thước 2 cm, 3 cm và 5 cm. Thể tích khối gỗ là',
        options: ['10 cm³.', '15 cm³.', '30 cm³.', '60 cm³.'],
        correctAnswer: 2,
        explanation: 'V = 2 × 3 × 5 = 30 cm³.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q8',
        content: 'Dụng cụ thích hợp để đo khối lượng của một hòn sỏi nhỏ trong phòng thực hành là',
        options: ['nhiệt kế.', 'cân.', 'lực kế.', 'thước đo góc.'],
        correctAnswer: 1,
        explanation: 'Dùng cân để đo khối lượng.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q9',
        content: 'Để xác định thể tích của một hòn sỏi không có hình dạng hình học xác định, có thể dùng',
        options: [
          'thước thẳng.',
          'cân điện tử.',
          'bình chia độ và nước.',
          'nhiệt kế và đồng hồ.'
        ],
        correctAnswer: 2,
        explanation: 'Dùng phương pháp dời chỗ nước bằng bình chia độ.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q10',
        content: 'Mực nước trong bình chia độ ban đầu là 35 mL. Thả chìm hoàn toàn một hòn sỏi vào bình, mực nước lên 48 mL. Thể tích hòn sỏi là',
        options: ['13 mL.', '35 mL.', '48 mL.', '83 mL.'],
        correctAnswer: 0,
        explanation: 'V = 48 - 35 = 13 mL.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q11',
        content: 'Một vật có khối lượng 2 kg, thể tích 0,001 m³. Khối lượng riêng của vật là',
        options: ['200 kg/m³.', '2 000 kg/m³.', '20 000 kg/m³.', '0,002 kg/m³.'],
        correctAnswer: 1,
        explanation: 'D = 2 / 0,001 = 2 000 kg/m³.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q12',
        content: 'Một chất lỏng có thể tích 100 cm³ và khối lượng 80 g. Khối lượng riêng của chất lỏng là',
        options: ['0,8 g/cm³.', '1,25 g/cm³.', '80 g/cm³.', '8 000 g/cm³.'],
        correctAnswer: 0,
        explanation: 'D = 80 / 100 = 0,8 g/cm³.',
        topic: 'Bài 13: Khối lượng riêng',
        difficulty: 'easy'
      },
      {
        id: 'vl-q13',
        content: 'Khi đọc thể tích chất lỏng trong bình chia độ, cần đặt mắt',
        options: [
          'cao hơn mặt chất lỏng.',
          'thấp hơn mặt chất lỏng.',
          'ngang với mặt thoáng chất lỏng (đọc đáy mặt khum phù hợp).',
          'ở vị trí bất kì.'
        ],
        correctAnswer: 2,
        explanation: 'Đặt mắt ngang với đáy mặt khum chất lỏng.',
        topic: 'Bài 1 & 14',
        difficulty: 'easy'
      },
      {
        id: 'vl-q14',
        content: 'Trong phép đo khối lượng riêng của vật rắn không thấm nước bằng phương pháp dời chỗ nước, thể tích vật bằng',
        options: [
          'thể tích nước ban đầu.',
          'thể tích nước sau khi thả vật.',
          'hiệu thể tích nước sau và trước khi thả vật.',
          'tổng thể tích nước trước và sau khi thả vật.'
        ],
        correctAnswer: 2,
        explanation: 'Thể tích vật = thể tích nước sau khi thả - thể tích nước ban đầu.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'easy'
      },
      {
        id: 'vl-q15',
        content: 'Kết quả đo khối lượng riêng thực nghiệm khác giá trị tham khảo có thể do',
        options: [
          'dụng cụ đo có giới hạn chính xác.',
          'thao tác đo và đọc số liệu chưa chính xác.',
          'mẫu vật hoặc chất lỏng không hoàn toàn giống điều kiện tham khảo.',
          'cả A, B và C.'
        ],
        correctAnswer: 3,
        explanation: 'Bao gồm cả sai số dụng cụ, thao tác thực nghiệm và điều kiện mẫu vật.',
        topic: 'Bài 14: Thực hành',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'khtn8-hoa-hoc-bat-trang',
    title: 'Phân Môn Hóa Học 8 - Phản Ứng Hóa Học, Mol, Nồng Độ & PTHH',
    subject: 'Hóa Học 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Trọn vẹn 25 câu trắc nghiệm Bài 2, 3, 4, 5, 6 kèm bảng khối lượng nguyên tử và quy tắc tính theo phương trình hóa học.',
    isDefault: true,
    createdAt: '2026-10-21T08:10:00.000Z',
    summaries: [
      {
        id: 'sum-hh8-1',
        title: 'Bảng Khối Lượng Nguyên Tử Chuẩn',
        keyPoints: [
          'Phi kim: H = 1; C = 12; N = 14; O = 16; P = 31; S = 32; Cl = 35,5; Br = 80.',
          'Kim loại kiềm & kiềm thổ: Na = 23; K = 39; Mg = 24; Ca = 40; Ba = 137.',
          'Kim loại khác: Al = 27; Cr = 52; Mn = 55; Fe = 56; Cu = 64; Ag = 108.'
        ],
        formulaOrRule: 'n = m / M  |  V(đkc) = n × 24,79  |  d(A/B) = MA / MB  |  d(A/kk) = MA / 29',
        mnemonics: 'Mẹo: Nhớ O=16, H=1 => H2O = 18; C=12, O=16 => CO2 = 44 (nặng hơn kk 1,52 lần).'
      },
      {
        id: 'sum-hh8-2',
        title: 'Công Thức Dung Dịch & Bảo Toàn Khối Lượng',
        keyPoints: [
          'Nồng độ phần trăm: C% = (mct / mdd) × 100% (với mdd = mct + mdung môi).',
          'Nồng độ mol: CM = n / V (mol/L).',
          'Độ tan S: Số gam chất tan nhiều nhất trong 100g nước để tạo dung dịch bão hòa.',
          'Định luật bảo toàn khối lượng: mA + mB = mC + mD.'
        ],
        formulaOrRule: 'mdd = mct + mH2O  |  C% = (mct / mdd) × 100%  |  CM = n / V_dd(L)',
        mnemonics: 'Lưu ý: Thể tích V trong CM phải tính bằng Lít (100 mL = 0,1 L).'
      }
    ],
    questions: [
      {
        id: 'hh-q1',
        content: 'Quá trình nào sau đây là biến đổi vật lí?',
        options: [
          'Đun nóng đường biến đổi thành than.',
          'Thân cây mía để lâu bị lên men.',
          'Thức ăn bị ôi thiu.',
          'Nước ao hồ bốc hơi nhanh vào mùa hè.'
        ],
        correctAnswer: 3,
        explanation: 'Nước ao hồ bốc hơi là biến đổi trạng thái (vật lí).',
        topic: 'Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q2',
        content: 'Quá trình nào sau đây xảy ra biến đổi hóa học:',
        options: [
          'Nước đóng băng.',
          'Nước sông bay hơi tạo thành mây.',
          'Hòa tan muối ăn vào nước.',
          'Sắt để lâu trong không khí bị gỉ.'
        ],
        correctAnswer: 3,
        explanation: 'Sắt bị gỉ tạo ra chất mới (gỉ sắt) là biến đổi hóa học.',
        topic: 'Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q3',
        content: 'Chất được tạo thành sau phản ứng hóa học là?',
        options: ['Chất phản ứng.', 'Chất lỏng.', 'Chất sản phẩm.', 'Chất khí.'],
        correctAnswer: 2,
        explanation: 'Chất tạo thành sau phản ứng là chất sản phẩm.',
        topic: 'Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q4',
        content: 'Phản ứng sau là phản ứng gì: Phản ứng phân hủy copper (II) hydroxide thành copper (II) oxide và hơi nước thì cần cung cấp năng lượng dưới dạng nhiệt bằng cách đun nóng. Khi ngừng cung cấp nhiệt, phản ứng cũng dừng lại.',
        options: ['Phản ứng tỏa nhiệt.', 'Phản ứng thu nhiệt.', 'Phản ứng phân hủy.', 'Phản ứng trao đổi.'],
        correctAnswer: 1,
        explanation: 'Cần đun nóng liên tục để duy trì là phản ứng thu nhiệt.',
        topic: 'Bài 2: Năng lượng phản ứng',
        difficulty: 'easy'
      },
      {
        id: 'hh-q5',
        content: 'Đốt cháy cây nến trong không khí là phản ứng hóa học vì',
        options: [
          'Có sự thay đổi hình.',
          'Có sự thay đổi màu sắc của chất.',
          'Có sự tỏa nhiệt và phát sáng.',
          'Tạo ra chất không tan.'
        ],
        correctAnswer: 2,
        explanation: 'Có sự tỏa nhiệt và phát sáng.',
        topic: 'Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q6',
        content: 'Than (thành phần chính là carbon) cháy trong không khí tạo thành khí carbon dioxide. Trong quá trình phản ứng, lượng chất nào tăng dần?',
        options: ['Carbon dioxide tăng dần.', 'Oxygen tăng dần.', 'Carbon tăng dần.', 'Tất cả đều tăng.'],
        correctAnswer: 0,
        explanation: 'CO2 là sản phẩm được tạo thành nên tăng dần.',
        topic: 'Bài 2: Phản ứng hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q7',
        content: 'Công thức nào dưới đây dùng để tính thể tích chất khí ở đkc?',
        options: ['V = n.24,79.', 'V = n . 24,97.', 'V = n/24,79.', 'V = n/24,97.'],
        correctAnswer: 0,
        explanation: 'V = n × 24,79 (lít).',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q8',
        content: 'Công thức tính khối lượng mol của chất?',
        options: ['M = m/n (g/mol).', 'M = m.n (g).', 'M = n/m (mol/g).', 'M = (m.n)/2 (mol).'],
        correctAnswer: 0,
        explanation: 'M = m / n (g/mol).',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q9',
        content: 'Khối lượng mol phân tử nước (H2O) là bao nhiêu?',
        options: ['18 g/mol.', '9 g/mol.', '16 g/mol.', '10 g/mol.'],
        correctAnswer: 0,
        explanation: 'M = 1×2 + 16 = 18 g/mol.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q10',
        content: 'Thể tích mol chất khí khi ở cùng điều kiện nhiệt độ và áp suất thì như thế nào?',
        options: ['Khác nhau.', 'Bằng nhau.', 'Thay đổi tuần hoàn.', 'Chưa xác định được.'],
        correctAnswer: 1,
        explanation: 'Bằng nhau theo định luật Avogadro.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q11',
        content: 'Để xác định khí A nặng hơn hay nhẹ hơn khí B bao nhiêu lần, ta dựa vào tỉ số giữa:',
        options: [
          'khối lượng mol của khí B (MB) và khối lượng mol của khí A (MA).',
          'khối lượng mol của khí A (MA) và khối lượng mol của khí B (MB).',
          'khối lượng gam của khí A (mA) và khối lượng gam của khí B (mB).',
          'khối lượng gam của khí B (mB) và khối lượng gam của khí A (MA).'
        ],
        correctAnswer: 1,
        explanation: 'd(A/B) = MA / MB.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q12',
        content: 'Hợp chất khí X có tỉ khối so với hiđro bằng 22. Công thức hóa học của X có thể là',
        options: ['NO2.', 'CO2.', 'NH3.', 'NO.'],
        correctAnswer: 1,
        explanation: 'M = 22 × 2 = 44 g/mol => CO2.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'medium'
      },
      {
        id: 'hh-q13',
        content: 'Ở điều kiện chuẩn, 1 mol khí bất kì chiếm thể tích bao nhiêu?',
        options: ['24,97 L.', '27,94 L.', '24,79 L.', '27,49 L.'],
        correctAnswer: 2,
        explanation: '24,79 L.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q14',
        content: 'Số Avogadro có giá trị và kí hiệu là gì?',
        options: [
          '6,022.10²³ kí hiệu là NA.',
          '6,022.10²² kí hiệu là NA.',
          '6,022.10²³ kí hiệu là N.',
          '6,022.10²² kí hiệu là N.'
        ],
        correctAnswer: 0,
        explanation: '6,022.10²³ kí hiệu là NA.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q15',
        content: '1 mol chất khí ở điều kiện chuẩn có thể tích là',
        options: ['24,79 lít.', '2,479 lít.', '247,9 lít.', '24,79 mL.'],
        correctAnswer: 0,
        explanation: '24,79 lít.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'easy'
      },
      {
        id: 'hh-q16',
        content: 'Hợp chất khí X có tỉ khối so với hiđro bằng 22. Công thức hóa học của X có thể là',
        options: ['NO2.', 'CO2.', 'NH3.', 'NO.'],
        correctAnswer: 1,
        explanation: 'M = 44 => CO2.',
        topic: 'Bài 3: Mol & Tỉ khối',
        difficulty: 'medium'
      },
      {
        id: 'hh-q17',
        content: 'Nồng độ phần trăm của một dung dịch cho ta biết:',
        options: [
          'Số mol chất tan trong một lít dung dịch.',
          'Số gam chất tan có trong 100 gam dung dịch.',
          'Số mol chất tan có trong 150 gam dung dịch.',
          'Số gam chất tan có trong dung dịch.'
        ],
        correctAnswer: 1,
        explanation: 'Số gam chất tan có trong 100 gam dung dịch.',
        topic: 'Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q18',
        content: 'Dung dịch bão hòa là gì?',
        options: [
          'Là dung dịch hòa tan chất tan.',
          'Là dung dịch không thể hòa tan thêm chất tan.',
          'Là dung dịch giữa dung môi và chất tan.',
          'Không có đáp án đúng.'
        ],
        correctAnswer: 1,
        explanation: 'Là dung dịch không thể hòa tan thêm chất tan ở nhiệt độ xác định.',
        topic: 'Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q19',
        content: 'Hai chất không thể hòa tan với nhau tạo thành dung dịch là?',
        options: ['Nước và đường.', 'Dầu ăn và xăng.', 'Rượu và nước.', 'Dầu ăn và cát.'],
        correctAnswer: 3,
        explanation: 'Dầu ăn và cát không hòa tan vào nhau.',
        topic: 'Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q20',
        content: 'Độ tan là gì?',
        options: [
          'Số kilogam chất đó tan được trong một lít nước để tạo ra dung dịch bão hòa để nhiệt độ xác định.',
          'Là số gam chất đó tan ít nhất trong 100 g nước để tạo thành dung dịch bão hòa ở nhiệt độ xác định.',
          'Là số gam chất đó tan nhiều nhất trong 100 g nước để tạo thành dung dịch bão hòa nhiệt độ xác định.',
          'Là số gam chất đó không tan trong 100 g nước.'
        ],
        correctAnswer: 2,
        explanation: 'Là số gam chất đó tan nhiều nhất trong 100 g nước để tạo thành dung dịch bão hòa ở nhiệt độ xác định.',
        topic: 'Bài 4: Dung dịch & Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'hh-q21',
        content: 'Cho kim loại Mg tác dụng với acid chlohydric (HCl) tạo ra khí hydrogen (H2) và muối MgCl2. Phương trình hóa học nào dưới đây biểu diễn đúng phản ứng trên?',
        options: [
          'Mg + HCl → MgCl2 + H2',
          'Mg + 2HCl → MgCl2 + 2H2',
          'MgCl2 + H2 → Mg + 2HCl',
          'Mg + 2HCl → MgCl2 + H2'
        ],
        correctAnswer: 3,
        explanation: 'Mg + 2HCl → MgCl2 + H2.',
        topic: 'Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q22',
        content: 'Sơ đồ phản ứng hóa học của các chất: A + B → C + D. Phương trình bảo toàn khối lượng là:',
        options: [
          'mA + mB = mC + mD',
          'mA + mC = mB + mD',
          'mA - mB = mC - mD',
          'mA × mB = mC × mD'
        ],
        correctAnswer: 0,
        explanation: 'mA + mB = mC + mD.',
        topic: 'Bài 5: Định luật BTKL',
        difficulty: 'easy'
      },
      {
        id: 'hh-q23',
        content: 'Phương trình hóa học biểu diễn đúng phản ứng của kim loại iron tác dụng với dung dịch sunfuric acid loãng biết sản phẩm là iron (II) sulfate và có khí bay lên:',
        options: [
          'Fe + H2SO4 → FeSO4 + H2',
          'Fe + H2SO4 → Fe2SO4 + H2',
          'Fe + H2SO4 → FeSO4 + S2',
          'Fe + H2SO4 → FeSO4 + H2S'
        ],
        correctAnswer: 0,
        explanation: 'Fe + H2SO4 → FeSO4 + H2.',
        topic: 'Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q24',
        content: 'Tỉ lệ hệ số tương ứng của chất tham gia và chất tạo thành của phương trình sau: Fe + 2HCl → FeCl2 + H2',
        options: ['1:2:1:2', '1:2:2:1', '2:1:1:1', '1:2:1:1'],
        correctAnswer: 3,
        explanation: '1 : 2 : 1 : 1.',
        topic: 'Bài 5: Phương trình hóa học',
        difficulty: 'easy'
      },
      {
        id: 'hh-q25',
        content: 'Cho phương trình hóa học: 4P + 5O2 → 2P2O5. Để thu được 0,2 mol P2O5 thì số mol P cần tham gia phản ứng là:',
        options: ['0,2 mol.', '0,4 mol.', '0,6 mol.', '0,8 mol.'],
        correctAnswer: 1,
        explanation: 'n(P) = 0,2 × 4 / 2 = 0,4 mol.',
        topic: 'Bài 6: Tính theo PTHH',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'khtn8-sinh-hoc-bat-trang',
    title: 'Phân Môn Sinh Học 8 - Cơ Thể Người, Hệ Vận Động & Tiêu Hóa',
    subject: 'Sinh Học 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Chuyên đề Bài 30 (Khái quát cơ thể người), Bài 31 (Hệ vận động, bộ xương, cơ, khớp), Bài 32 (Dinh dưỡng và tiêu hóa).',
    isDefault: true,
    createdAt: '2026-10-21T08:15:00.000Z',
    summaries: [
      {
        id: 'sum-sh8-1',
        title: 'Trọng Tâm Bài 30 & 31: Khái Quát Cơ Thể & Hệ Vận Động',
        keyPoints: [
          'Cơ thể người gồm 3 phần: Đầu, thân và các chi (hai tay và hai chân).',
          'Hệ vận động gồm: Bộ xương (xương đầu, xương thân, xương chi), các khớp xương và hệ cơ.',
          'Tính chất của xương: Vừa cứng chắc (nhờ chất khoáng canxi, photpho) vừa mềm dẻo, đàn hồi (nhờ chất hữu cơ collagen/cốt giao).',
          'Chức năng hệ vận động: Định hình cơ thể, nâng đỡ, bảo vệ nội tạng và giúp cơ thể di chuyển, lao động.',
          'Bảo vệ hệ vận động: Ngồi học thẳng lưng, đeo cặp 2 quai, bổ sung canxi & vitamin D, tắm nắng sớm.'
        ],
        formulaOrRule: 'Xương = Chất khoáng (cứng chắc) + Chất hữu cơ (đàn hồi)',
        mnemonics: 'Quy tắc: Không mang vác vật nặng lệch 1 bên để tránh vẹo cột sống!'
      },
      {
        id: 'sum-sh8-2',
        title: 'Trọng Tâm Bài 32: Dinh Dưỡng & Hệ Tiêu Hóa',
        keyPoints: [
          'Ống tiêu hóa: Miệng -> Hầu -> Thực quản -> Dạ dày -> Ruột non -> Ruột già -> Hậu môn.',
          'Các tuyến tiêu hóa: Tuyến nước bọt, tuyến vị, tuyến gan, tuyến tụy, tuyến ruột.',
          'Ruột non là nơi diễn ra phần lớn quá trình tiêu hóa hóa học và hấp thụ chất dinh dưỡng.',
          'Khẩu phần ăn hợp lý: Đủ 4 nhóm chất (đạm, bột đường, béo, vitamin & khoáng chất), nhiều chất xơ, uống đủ 1,5 - 2L nước mỗi ngày để ngừa táo bón.'
        ],
        formulaOrRule: 'Tiêu hóa = Tiêu hóa cơ học (nhai, nghiền, đảo trộn) + Tiêu hóa hóa học (enzyme)',
        mnemonics: 'Lời khuyên: Ăn chậm nhai kỹ, ăn đúng giờ, không bỏ bữa sáng!'
      }
    ],
    questions: [
      {
        id: 'sh-q1',
        content: 'Cơ thể người được cấu tạo gồm những phần nào?',
        options: [
          'Đầu, thân và các chi.',
          'Đầu, cổ và thân.',
          'Đầu, ngực, bụng và hai chân.',
          'Đầu, thân, hai tay và hai bàn chân.'
        ],
        correctAnswer: 0,
        explanation: 'Đầu, thân và các chi.',
        topic: 'Bài 30: Cơ thể người',
        difficulty: 'easy'
      },
      {
        id: 'sh-q2',
        content: 'Hệ cơ quan nào có chức năng biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể hấp thụ được?',
        options: ['Hệ hô hấp.', 'Hệ tiêu hóa.', 'Hệ bài tiết.', 'Hệ tuần hoàn.'],
        correctAnswer: 1,
        explanation: 'Hệ tiêu hóa.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q3',
        content: 'Khi một người chạy bộ, tim đập nhanh hơn và nhịp thở tăng lên. Hiện tượng này thể hiện điều gì?',
        options: [
          'Các hệ cơ quan hoạt động độc lập với nhau.',
          'Chỉ hệ vận động tham gia hoạt động khi cơ thể chạy.',
          'Các hệ cơ quan có mối liên hệ chặt chẽ và phối hợp hoạt động với nhau.',
          'Hệ tiêu hóa điều khiển trực tiếp mọi hoạt động của cơ thể.'
        ],
        correctAnswer: 2,
        explanation: 'Các hệ cơ quan phối hợp hoạt động nhịp nhàng, thống nhất.',
        topic: 'Bài 30: Cơ thể người',
        difficulty: 'medium'
      },
      {
        id: 'sh-q4',
        content: 'Một người bị rối loạn hoạt động của hệ tiêu hóa khiến cơ thể hấp thụ chất dinh dưỡng kém. Điều này có thể ảnh hưởng đến hệ vận động như thế nào?',
        options: [
          'Không ảnh hưởng vì hệ vận động hoạt động độc lập.',
          'Cơ và xương có thể phát triển kém do thiếu nguyên liệu dinh dưỡng cần thiết.',
          'Xương chắc khỏe hơn vì cơ thể hấp thụ ít chất dinh dưỡng.',
          'Các cơ quan khác ngừng hoạt động ngay lập tức.'
        ],
        correctAnswer: 1,
        explanation: 'Thiếu hụt canxi và protein khiến cơ xương kém phát triển.',
        topic: 'Bài 30 & 31',
        difficulty: 'medium'
      },
      {
        id: 'sh-q5',
        content: 'Hệ vận động ở người gồm những thành phần chính nào?',
        options: [
          'Xương, khớp và cơ.',
          'Tim, mạch máu và máu.',
          'Não, tủy sống và dây thần kinh.',
          'Dạ dày, ruột non và ruột già.'
        ],
        correctAnswer: 0,
        explanation: 'Xương, khớp và cơ.',
        topic: 'Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q6',
        content: 'Thành phần nào sau đây thuộc bộ xương người?',
        options: ['Cơ hai đầu.', 'Cơ ba đầu.', 'Xương đùi.', 'Cơ mặt.'],
        correctAnswer: 2,
        explanation: 'Xương đùi là xương thuộc chi dưới.',
        topic: 'Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q7',
        content: 'Vì sao xương có thể vừa tương đối cứng chắc vừa có tính đàn hồi nhất định?',
        options: [
          'Vì xương chỉ chứa chất hữu cơ.',
          'Vì xương chỉ chứa chất vô cơ.',
          'Vì xương được cấu tạo từ các thành phần hữu cơ và chất khoáng.',
          'Vì xương không chứa tế bào sống.'
        ],
        correctAnswer: 2,
        explanation: 'Chất hữu cơ tạo độ dẻo đàn hồi, chất khoáng tạo độ cứng.',
        topic: 'Bài 31: Hệ vận động',
        difficulty: 'medium'
      },
      {
        id: 'sh-q8',
        content: 'Hệ vận động của người có chức năng:',
        options: [
          'nâng đỡ và bảo vệ cơ thể, tạo ra hình dạng, duy trì tư thế và giúp con người vận động.',
          'nâng đỡ và bảo vệ cơ thể.',
          'tạo ra hình dạng cơ thể.',
          'giúp con người vận động.'
        ],
        correctAnswer: 0,
        explanation: 'Nâng đỡ, bảo vệ cơ thể, tạo hình dạng, duy trì tư thế và vận động.',
        topic: 'Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q9',
        content: 'Một học sinh thường xuyên ngồi học cong lưng, cúi sát mặt xuống bàn và mang cặp lệch một bên vai. Biện pháp nào phù hợp nhất để bảo vệ hệ vận động?',
        options: [
          'Giữ nguyên tư thế nếu chưa thấy đau.',
          'Ngồi đúng tư thế, điều chỉnh bàn ghế phù hợp và đeo cặp bằng hai quai.',
          'Hạn chế mọi hoạt động thể lực.',
          'Chỉ cần uống sữa, không cần điều chỉnh tư thế.'
        ],
        correctAnswer: 1,
        explanation: 'Ngồi đúng tư thế, chỉnh bàn ghế phù hợp, đeo cặp hai quai.',
        topic: 'Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'sh-q10',
        content: 'Cơ quan nào dưới đây không nằm trong ống tiêu hóa?',
        options: ['Thực quản.', 'Dạ dày.', 'Tuyến ruột.', 'Ruột non.'],
        correctAnswer: 2,
        explanation: 'Tuyến ruột là tuyến tiêu hóa, không thuộc ống tiêu hóa.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'medium'
      },
      {
        id: 'sh-q11',
        content: 'Cơ quan nào là nơi diễn ra phần lớn quá trình hấp thụ chất dinh dưỡng ở người?',
        options: ['Miệng.', 'Thực quản.', 'Ruột non.', 'Dạ dày.'],
        correctAnswer: 2,
        explanation: 'Ruột non là cơ quan hấp thụ chất dinh dưỡng chính.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q12',
        content: 'Quá trình tiêu hóa thức ăn ở người gồm những hình thức nào?',
        options: [
          'Chỉ có tiêu hóa cơ học.',
          'Chỉ có tiêu hóa hóa học.',
          'Tiêu hóa cơ học và tiêu hóa hóa học.',
          'Chỉ có quá trình hấp thụ.'
        ],
        correctAnswer: 2,
        explanation: 'Tiêu hóa cơ học và tiêu hóa hóa học.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q13',
        content: 'Thế nào là tiêu hoá thức ăn?',
        options: [
          'Biến đổi thức ăn thành các chất dinh dưỡng.',
          'Cơ thể hấp thụ chất dinh dưỡng qua thành ruột.',
          'Thải bỏ các chất thừa không hấp thụ được.',
          'Cả A, B và C.'
        ],
        correctAnswer: 3,
        explanation: 'Cả A, B và C đều là các khâu trong quá trình tiêu hóa.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q14',
        content: 'Một học sinh ăn rất ít rau xanh, uống ít nước và thường xuyên bị táo bón. Lời khuyên nào phù hợp nhất?',
        options: [
          'Tiếp tục ăn ít rau để giảm lượng thức ăn trong ruột.',
          'Chỉ uống nước ngọt có đường thay cho nước lọc.',
          'Tăng thực phẩm giàu chất xơ, uống đủ nước và vận động phù hợp.',
          'Loại bỏ hoàn toàn chất béo khỏi khẩu phần ăn.'
        ],
        correctAnswer: 2,
        explanation: 'Tăng chất xơ, uống đủ nước và vận động đều đặn.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'sh-q15',
        content: 'Một học sinh thường xuyên ăn một khẩu phần chỉ gồm cơm trắng và thức ăn giàu chất béo, ít rau quả và thực phẩm giàu protein. Cách điều chỉnh nào phù hợp nhất?',
        options: [
          'Tiếp tục ăn như cũ nhưng tăng lượng cơm.',
          'Chỉ ăn rau xanh và không ăn các thực phẩm khác.',
          'Ăn đa dạng thực phẩm, bảo đảm khẩu phần cân đối và phù hợp nhu cầu cơ thể.',
          'Loại bỏ hoàn toàn chất bột đường.'
        ],
        correctAnswer: 2,
        explanation: 'Ăn đa dạng thực phẩm, cân đối 4 nhóm dưỡng chất.',
        topic: 'Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'khtn8-dung-sai-bat-trang',
    title: 'Chuyên Đề Trắc Nghiệm Đúng - Sai KHTN 8 (30 Câu Toàn Đề Cương)',
    subject: 'Đúng / Sai',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Tập hợp toàn bộ 30 câu hỏi Đúng - Sai (10 câu Vật lý + 10 câu Hóa học + 10 câu Sinh học) theo cấu trúc đề thi mới nhất 2026-2027.',
    isDefault: true,
    createdAt: '2026-10-21T08:20:00.000Z',
    summaries: [
      {
        id: 'sum-ds-rules',
        title: 'Kỹ Năng Làm Dạng Trắc Nghiệm Đúng - Sai',
        keyPoints: [
          'Đọc kỹ từng mệnh đề, chú ý các từ mang tính tuyệt đối: "luôn luôn", "mọi", "chỉ có", "hoàn toàn độc lập".',
          'Kiểm tra đơn vị: kg/m³ (SI), g/cm³, mol/L, g/100g nước.',
          'Nhớ rằng các hệ cơ quan trong cơ thể người luôn có mối liên hệ mật thiết, không bao giờ "hoàn toàn độc lập".'
        ],
        formulaOrRule: 'Đ = Đúng  |  S = Sai',
        mnemonics: 'Mẹo: Phát biểu chứa từ "chỉ cần...", "loại bỏ hoàn toàn...", "hoàn toàn độc lập..." thường là SAI!'
      }
    ],
    questions: [
      // 10 câu Vật lý Đúng/Sai
      {
        id: 'ds-vl-1',
        content: '[ĐÚNG HAY SAI] Khối lượng riêng cho biết khối lượng của một đơn vị thể tích chất đó.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đây là định nghĩa chuẩn của khối lượng riêng D = m/V.',
        topic: 'Vật Lý - Bài 13',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-2',
        content: '[ĐÚNG HAY SAI] Khối lượng riêng được tính bằng công thức D = V/m.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Công thức đúng phải là D = m/V (khối lượng chia thể tích, không phải thể tích chia khối lượng).',
        topic: 'Vật Lý - Bài 13',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-3',
        content: '[ĐÚNG HAY SAI] Trong hệ SI, đơn vị khối lượng riêng là kg/m³.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đơn vị SI của khối lượng là kg, của thể tích là m³ nên khối lượng riêng là kg/m³.',
        topic: 'Vật Lý - Bài 13',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-4',
        content: '[ĐÚNG HAY SAI] Nếu hai vật làm từ cùng một chất thì khối lượng riêng của chúng thường bằng nhau trong cùng điều kiện.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Khối lượng riêng là thuộc tính vật lí đặc trưng của chất ở điều kiện xác định.',
        topic: 'Vật Lý - Bài 13',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-5',
        content: '[ĐÚNG HAY SAI] Muốn tính khối lượng riêng của vật, chỉ cần biết khối lượng mà không cần biết thể tích.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Phải biết cả hai đại lượng là khối lượng m và thể tích V thì mới tính được D = m/V.',
        topic: 'Vật Lý - Bài 13',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-6',
        content: '[ĐÚNG HAY SAI] Thể tích khối hộp chữ nhật được tính bằng tích của: chiều dài, chiều rộng và chiều cao.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. V = dài × rộng × cao.',
        topic: 'Vật Lý - Bài 14',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-7',
        content: '[ĐÚNG HAY SAI] Muốn xác định thể tích hòn sỏi không thấm nước, có thể lấy thể tích nước sau khi thả sỏi trừ thể tích nước ban đầu.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Phương pháp dời chỗ nước: V_sỏi = V₂ - V₁.',
        topic: 'Vật Lý - Bài 14',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-8',
        content: '[ĐÚNG HAY SAI] Để đo khối lượng của vật, có thể sử dụng bình chia độ.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Bình chia độ dùng để đo thể tích chất lỏng hoặc vật rắn không thấm nước. Để đo khối lượng phải dùng cân.',
        topic: 'Vật Lý - Bài 1 & 14',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-9',
        content: '[ĐÚNG HAY SAI] Khi đo thể tích bằng bình chia độ, cần đọc số chỉ ở ngang tầm mắt để hạn chế sai số.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đặt mắt nhìn ngang đáy mặt khum chất lỏng để tránh sai số.',
        topic: 'Vật Lý - Bài 1 & 14',
        difficulty: 'easy'
      },
      {
        id: 'ds-vl-10',
        content: '[ĐÚNG HAY SAI] Đo lặp lại nhiều lần và tính giá trị trung bình có thể giúp giảm ảnh hưởng của sai số ngẫu nhiên.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đây là nguyên tắc cơ bản trong thực hành thí nghiệm khoa học.',
        topic: 'Vật Lý - Bài 14',
        difficulty: 'easy'
      },

      // 10 câu Hóa học Đúng/Sai
      {
        id: 'ds-hh-1',
        content: '[ĐÚNG HAY SAI] Có ba quả bóng bay giống nhau về kích thước và thể tích, chứa 3 chất khí khác nhau là H2, CO2, O2. Khi thả ba quả bóng bay đó trong không khí, quả bóng chứa H2 bay lên còn quả bóng chứa CO2 và O2 sẽ rơi xuống đất.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. M(H2)=2 < 29 nên nhẹ hơn không khí sẽ bay lên; M(CO2)=44 > 29 và M(O2)=32 > 29 nên nặng hơn không khí sẽ rơi xuống.',
        topic: 'Hóa Học - Bài 3: Tỉ khối',
        difficulty: 'medium'
      },
      {
        id: 'ds-hh-2',
        content: '[ĐÚNG HAY SAI] Khi đốt, nến (paraffin) nóng chảy thành paraffin lỏng, rồi chuyển thành hơi. Hơi paraffin cháy thành khí carbon dioxide và hơi nước. Các quá trình diễn ra ở trên đều là sự biến đổi hoá học.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Quá trình paraffin rắn nóng chảy thành lỏng rồi bay hơi là biến đổi vật lí. Chỉ có giai đoạn hơi paraffin cháy tạo CO2 và H2O mới là biến đổi hóa học.',
        topic: 'Hóa Học - Bài 2: Phản ứng hóa học',
        difficulty: 'medium'
      },
      {
        id: 'ds-hh-3',
        content: '[ĐÚNG HAY SAI] Đơn vị của nồng độ mol dung dịch là mol/L.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Nồng độ mol CM = n / V có đơn vị là mol/L (hoặc M).',
        topic: 'Hóa Học - Bài 4: Nồng độ',
        difficulty: 'easy'
      },
      {
        id: 'ds-hh-4',
        content: '[ĐÚNG HAY SAI] Than đá cháy là phản ứng toả nhiệt; phân hủy đá vôi là phản ứng thu nhiệt.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Phản ứng cháy giải phóng nhiệt lượng lớn (tỏa nhiệt); nung vôi CaCO3 -> CaO + CO2 cần cung cấp nhiệt liên tục (thu nhiệt).',
        topic: 'Hóa Học - Bài 2: Năng lượng phản ứng',
        difficulty: 'easy'
      },
      {
        id: 'ds-hh-5',
        content: '[ĐÚNG HAY SAI] Khi tăng nhiệt độ thì độ tan của chất rắn, chất lỏng, chất khí đều tăng.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Với chất khí, khi tăng nhiệt độ thì độ tan của chất khí trong nước GIẢM (khí thoát ra khỏi nước).',
        topic: 'Hóa Học - Bài 4: Độ tan',
        difficulty: 'medium'
      },
      {
        id: 'ds-hh-6',
        content: '[ĐÚNG HAY SAI] Ở 30°C độ tan của đường là 217 gam. Nếu ở nhiệt độ này, lấy 220 gam đường hòa vào trong 100g nước thì sẽ thu được 320 gam dung dịch nước đường bão hòa.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Ở 30°C, 100g nước chỉ hòa tan tối đa 217g đường, còn 3g đường lắng dưới đáy không tan. Vậy khối lượng dung dịch thu được là 100 + 217 = 317 gam.',
        topic: 'Hóa Học - Bài 4: Dung dịch bão hòa',
        difficulty: 'hard'
      },
      {
        id: 'ds-hh-7',
        content: '[ĐÚNG HAY SAI] Cho sơ đồ phản ứng: 2H2 + O2 → 2H2O. Để phản ứng hết 1 mol khí H2 thì cần 1 mol khí O2.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Theo PTHH: 2 mol H2 cần 1 mol O2, nên 1 mol H2 chỉ cần 0,5 mol O2.',
        topic: 'Hóa Học - Bài 6: Tính theo PTHH',
        difficulty: 'medium'
      },
      {
        id: 'ds-hh-8',
        content: '[ĐÚNG HAY SAI] Cho sơ đồ phản ứng sau: BaCO3 + 2HCl → BaCl2 + H2O + CO2. Tỉ lệ phân tử BaCO3 : HCl = 2 : 1.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Tỉ lệ đúng theo phương trình cân bằng là BaCO3 : HCl = 1 : 2.',
        topic: 'Hóa Học - Bài 5: PTHH',
        difficulty: 'medium'
      },
      {
        id: 'ds-hh-9',
        content: '[ĐÚNG HAY SAI] Cho mẩu magie phản ứng với dung dịch acid hydrochloric thấy tạo thành muối magie clorua và khí hiđro. Vậy, tổng khối lượng của magie và acid hydrochloric bằng tổng khối lượng muối magie clorua và khí hiđro.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Theo định luật bảo toàn khối lượng: m(Mg) + m(HCl) = m(MgCl2) + m(H2).',
        topic: 'Hóa Học - Bài 5: Định luật BTKL',
        difficulty: 'easy'
      },
      {
        id: 'ds-hh-10',
        content: '[ĐÚNG HAY SAI] Trong phòng thí nghiệm có các lọ đựng dung dịch KCl, HCl, KOH có cùng nồng độ 1M. Để số mol chất tan trong mỗi ống nghiệm là bằng nhau thì phải lấy các thể tích dung dịch bằng nhau.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Vì n = CM × V. Khi CM bằng nhau (1M), muốn n bằng nhau thì V phải bằng nhau.',
        topic: 'Hóa Học - Bài 4: Nồng độ mol',
        difficulty: 'easy'
      },

      // 10 câu Sinh học Đúng/Sai
      {
        id: 'ds-sh-1',
        content: '[ĐÚNG HAY SAI] Mỗi hệ cơ quan trong cơ thể hoạt động hoàn toàn độc lập với các hệ cơ quan khác.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Các hệ cơ quan trong cơ thể có mối liên hệ mật thiết, thống nhất và phối hợp chặt chẽ dưới sự điều hòa của hệ thần kinh và hệ nội tiết.',
        topic: 'Sinh Học - Bài 30: Cơ thể người',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-2',
        content: '[ĐÚNG HAY SAI] Thành phần hữu cơ và chất khoáng góp phần tạo nên tính chất của xương.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Chất hữu cơ tạo độ mềm dẻo, đàn hồi; chất khoáng tạo độ cứng chắc.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-3',
        content: '[ĐÚNG HAY SAI] Toàn bộ quá trình tiêu hóa thức ăn chỉ diễn ra trong dạ dày.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Quá trình tiêu hóa diễn ra liên tục từ khoang miệng, thực quản, dạ dày đến ruột non và ruột già.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-4',
        content: '[ĐÚNG HAY SAI] Tiêu hóa cơ học bao gồm các hoạt động nghiền nhỏ và nhào trộn thức ăn.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Tiêu hóa cơ học là hoạt động răng cắn xé nghiền nhỏ và cơ trơn co bóp đảo trộn thức ăn.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-5',
        content: '[ĐÚNG HAY SAI] Ruột già không có bất kì vai trò nào trong việc hấp thụ nước.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Ruột già có vai trò rất quan trọng trong việc tái hấp thụ nước từ bã thức ăn để cô đặc phân.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-6',
        content: '[ĐÚNG HAY SAI] Tất cả các khớp trong cơ thể người đều có phạm vi cử động như nhau.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Có 3 loại khớp: khớp động (cử động linh hoạt), khớp bán động (cử động hạn chế) và khớp bất động (không cử động được).',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-7',
        content: '[ĐÚNG HAY SAI] Thực quản có vai trò vận chuyển thức ăn xuống dạ dày.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Thực quản co bóp theo nhu động để đẩy viên thức ăn từ hầu xuống dạ dày.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-8',
        content: '[ĐÚNG HAY SAI] Khẩu phần ăn thiếu đa dạng có thể không đáp ứng đầy đủ nhu cầu dinh dưỡng của cơ thể.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Không có một loại thức ăn nào chứa đầy đủ tất cả các chất dinh dưỡng cần thiết cho cơ thể.',
        topic: 'Sinh Học - Bài 32: Dinh dưỡng & tiêu hóa',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-9',
        content: '[ĐÚNG HAY SAI] Chỉ cần uống nhiều sữa thì có thể loại bỏ hoàn toàn mọi nguy cơ mắc bệnh về hệ vận động.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 1,
        explanation: 'SAI. Cần phải kết hợp ăn uống đủ chất, tư thế ngồi học đúng, vận động thể dục thể thao và tắm nắng hợp lý.',
        topic: 'Sinh Học - Bài 31: Hệ vận động',
        difficulty: 'easy'
      },
      {
        id: 'ds-sh-10',
        content: '[ĐÚNG HAY SAI] Cơ thể người được cấu tạo từ nhiều cơ quan và hệ cơ quan có mối liên hệ chặt chẽ với nhau.',
        options: ['ĐÚNG', 'SAI'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Cơ thể là một thể thống nhất, các hệ cơ quan phối hợp nhịp nhàng với nhau.',
        topic: 'Sinh Học - Bài 30: Cơ thể người',
        difficulty: 'easy'
      }
    ]
  }
];

export const DEFAULT_QUIZ_SETS: QuizSet[] = [
  ...KHTN_DEFAULT_SETS,
  ...MATH_QUIZ_SETS,
  ...LITERATURE_QUIZ_SETS
];

