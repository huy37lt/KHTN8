import { QuizSet } from '../types/quiz';

export const INFORMATICS_QUIZ_SETS: QuizSet[] = [
  {
    id: 'tin8-gk1-tracnghiem',
    title: 'Tin Học 8 - Đề Cương Giữa HK1 (Lịch Sử Máy Tính, Thông Tin Số & Thuật Toán)',
    subject: 'Tin Học',
    grade: 'Lớp 8B',
    description: 'Lược sử công cụ tính toán, 5 thế hệ máy tính điện tử, thông tin trong môi trường số, đạo đức & bản quyền số, AI trò chuyện (ChatGPT, Gemini) và biểu diễn thuật toán lặp.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'tin-sum-1',
        title: '5 Thế Hệ Máy Tính Điện Tử',
        keyPoints: [
          'Thế hệ 1 (1945 - 1955): Đèn điện tử chân không, kích thước khổng lồ, tiêu thụ nhiều điện năng (máy ENIAC).',
          'Thế hệ 2 (1955 - 1965): Bóng bán dẫn (transistor), kích thước giảm, tốc độ và độ tin cậy tăng.',
          'Thế hệ 3 (1965 - 1974): Mạch tích hợp (IC), bắt đầu dùng bàn phím và màn hình tương tác.',
          'Thế hệ 4 (1974 - 1990): Mạch tích hợp cỡ rất lớn (VLSI), máy tính cá nhân (PC) ra đời.',
          'Thế hệ 5 (1990 đến nay): Trí tuệ nhân tạo (AI), mạng Internet, siêu máy tính và thiết bị thông minh.'
        ],
        formulaOrRule: 'Thế hệ 1: Đèn chân không | Thế hệ 2: Bóng bán dẫn | Thế hệ 3: Mạch tích hợp (IC) | Thế hệ 4: VLSI/PC'
      },
      {
        id: 'tin-sum-2',
        title: 'Đạo đức, Pháp luật và Văn hóa trong môi trường số',
        keyPoints: [
          'Thông tin đáng tin cậy: Có nguồn gốc rõ ràng, đã được kiểm chứng (ví dụ tên miền cơ quan nhà nước .gov.vn).',
          'Không tự ý chụp ảnh, quay video nơi bị cấm (như trong Lăng Bác); không dùng phần mềm bẻ khóa (crack).',
          'Tôn trọng bản quyền tác giả: Khi lấy tranh ảnh, tài liệu làm bài trình chiếu phải xin phép hoặc trích dẫn nguồn.',
          'Công cụ AI hỏi đáp, trò chuyện: ChatGPT, Gemini... (Khác với Gamma: làm slide; Xmind: vẽ mindmap).'
        ]
      },
      {
        id: 'tin-sum-3',
        title: 'Thuật toán và Cấu trúc lặp',
        keyPoints: [
          'Mô tả thuật toán: Dùng ngôn ngữ tự nhiên hoặc sơ đồ khối.',
          'Vẽ tam giác đều: Lặp 3 lần [Đi thẳng 1 đoạn, Quay trái 120 độ]. (Góc quay = 360° / 3 = 120°).',
          'Thứ tự giải bài toán trên máy tính: Xác định bài toán -> Mô tả thuật toán -> Viết chương trình.'
        ]
      }
    ],
    questions: [
      {
        id: 'tin-1',
        content: 'Loại thông tin nào dưới đây em KHÔNG NÊN lựa chọn khi tìm kiếm tài liệu?',
        options: [
          'Thông tin có thời gian gần với thời gian em tìm kiếm thông tin',
          'Thông tin đã được kiểm chứng khoa học',
          'Nguồn thông tin không rõ ràng, chưa được kiểm chứng',
          'Thông tin phù hợp với nội dung bài thuyết trình'
        ],
        correctAnswer: 2,
        explanation: 'Thông tin có nguồn không rõ ràng tiềm ẩn nguy cơ sai lệch, thông tin giả hoặc độc hại, tuyệt đối không nên lựa chọn.',
        topic: 'Thông tin trong môi trường số',
        difficulty: 'easy'
      },
      {
        id: 'tin-2',
        content: 'Các phép tính đầu tiên trong lịch sử loài người được thực hiện bằng cách nào?',
        options: [
          'Sử dụng máy tính để bàn',
          'Sử dụng máy tính cầm tay',
          'Sử dụng 10 ngón tay và các que tính sỏi đá',
          'Sử dụng bàn tính Soroban'
        ],
        correctAnswer: 2,
        explanation: 'Từ thời sơ khai hơn 2000 năm trước Công nguyên, con người đã biết đếm và tính toán bằng 10 ngón tay và các viên sỏi, nút thắt dây.',
        topic: 'Lược sử công cụ tính toán',
        difficulty: 'easy'
      },
      {
        id: 'tin-3',
        content: 'Trong môi trường kĩ thuật số, thông tin được thu thập và lưu trữ như thế nào?',
        options: [
          'Tuy thu thập chậm nhưng lưu trữ với dung lượng lớn',
          'Thu thập nhanh và lưu trữ với dung lượng khổng lồ',
          'Thu thập chậm và được cân nhắc kĩ trước khi lưu trữ',
          'Thu thập nhanh nhưng chỉ lưu trữ với dung lượng nhỏ'
        ],
        correctAnswer: 1,
        explanation: 'Nhờ công nghệ số và internet, thông tin được thu thập cực nhanh và lưu trữ với dung lượng rất lớn trong các máy chủ (Data Center) và đám mây.',
        topic: 'Thông tin số',
        difficulty: 'easy'
      },
      {
        id: 'tin-4',
        content: 'Sử dụng điện thoại thông minh để thực hiện hành động nào sau đây là vi phạm đạo đức, pháp luật?',
        options: [
          'Hỏi bài bạn thông qua Gmail, Zalo, Facebook',
          'Chụp ảnh, quay phim ở bên trong Lăng Bác (nơi có biển cấm)',
          'Đăng ảnh đi chơi cùng gia đình lên trang cá nhân',
          'Gọi điện hỏi thăm một người bạn đã chuyển trường'
        ],
        correctAnswer: 1,
        explanation: 'Chụp ảnh ở những nơi có quy định cấm như trong Lăng Chủ tịch Hồ Chí Minh là hành vi vi phạm pháp luật và nội quy di tích.',
        topic: 'Đạo đức và văn hóa số',
        difficulty: 'easy'
      },
      {
        id: 'tin-5',
        content: 'Cách ghi số phổ biến nhất từ xưa đến nay trên toàn thế giới là gì?',
        options: ['Hệ thống ghi số La Mã', 'Hệ thống ghi số thập phân (cơ số 10)', 'Hệ thống ghi số nguyên', 'Hệ thống ghi số nhị phân'],
        correctAnswer: 1,
        explanation: 'Hệ thập phân dùng 10 chữ số từ 0 đến 9 là cách ghi số phổ biến nhất trong đời sống nhân loại.',
        topic: 'Lược sử tính toán',
        difficulty: 'easy'
      },
      {
        id: 'tin-6',
        content: 'Thế hệ máy tính nào bắt đầu sử dụng bàn phím và màn hình để giao tiếp người - máy?',
        options: ['Thế hệ thứ nhất', 'Thế hệ thứ hai', 'Thế hệ thứ ba (1965 - 1974)', 'Thế hệ thứ tư'],
        correctAnswer: 2,
        explanation: 'Ở thế hệ thứ ba, việc sử dụng màn hình và bàn phím đã thay thế bìa đục lỗ, giúp con người tương tác trực tiếp với máy tính.',
        topic: 'Các thế hệ máy tính',
        difficulty: 'medium'
      },
      {
        id: 'tin-7',
        content: 'Thành phần điện tử chính trong máy tính ở thế hệ thứ hai là loại linh kiện điện tử nào?',
        options: ['Mạch tích hợp (IC)', 'Đèn điện tử chân không', 'Bóng bán dẫn (Transistor)', 'Mạch tích hợp cỡ rất lớn'],
        correctAnswer: 2,
        explanation: 'Thế hệ 1 dùng đèn điện tử chân không; Thế hệ 2 dùng bóng bán dẫn; Thế hệ 3 dùng mạch tích hợp IC.',
        topic: 'Các thế hệ máy tính',
        difficulty: 'easy'
      },
      {
        id: 'tin-8',
        content: 'Để vẽ một tam giác đều có 3 cạnh bằng nhau, nhân vật cần lặp lại 2 thao tác: (1) Di chuyển về phía trước độ dài cạnh, (2) Quay trái một góc. Số bước lặp và góc quay là bao nhiêu?',
        options: ['Lặp 3 lần, góc quay 120 độ', 'Lặp 4 lần, góc quay 90 độ', 'Lặp 2 lần, góc quay 60 độ', 'Lặp 3 lần, góc quay 60 độ'],
        correctAnswer: 0,
        explanation: 'Tam giác đều có 3 cạnh nên lặp 3 lần. Tổng góc quay ngoài của đa giác khép kín là 360°, nên góc quay mỗi lần là 360° / 3 = 120°.',
        topic: 'Thuật toán và Lập trình',
        difficulty: 'medium'
      },
      {
        id: 'tin-9',
        content: 'Hiện nay có nhiều công cụ AI hỗ trợ người dùng. Công cụ nào chuyên hỗ trợ việc trò chuyện, hỏi đáp bằng ngôn ngữ tự nhiên?',
        options: ['Gamma (làm slide)', 'ChatGPT và Google Gemini', 'Xmind (vẽ sơ đồ tư duy)', 'Canva (thiết kế ảnh)'],
        correctAnswer: 1,
        explanation: 'ChatGPT và Google Gemini là các mô hình AI ngôn ngữ lớn chuyên giao tiếp, trả lời câu hỏi và đàm thoại tự nhiên với người dùng.',
        topic: 'Công nghệ số hiện đại',
        difficulty: 'easy'
      },
      {
        id: 'tin-10',
        content: 'Thứ tự chuẩn các bước khi giải quyết một bài toán trên máy tính là gì?',
        options: [
          'Xác định bài toán -> Mô tả thuật toán -> Viết chương trình',
          'Mô tả thuật toán -> Xác định bài toán -> Viết chương trình',
          'Viết chương trình -> Mô tả thuật toán -> Xác định bài toán',
          'Vẽ sơ đồ khối -> Viết chương trình -> Xác định bài toán'
        ],
        correctAnswer: 0,
        explanation: 'Quy trình giải bài toán trên máy tính: 1. Xác định bài toán (Input/Output) -> 2. Mô tả thuật toán -> 3. Viết chương trình bằng ngôn ngữ lập trình.',
        topic: 'Thuật toán đến chương trình',
        difficulty: 'easy'
      }
    ]
  }
];
