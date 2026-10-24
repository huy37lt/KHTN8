import { QuizSet } from '../types/quiz';

export const INFORMATICS_QUIZ_SETS: QuizSet[] = [
  {
    id: 'tin8-gk1-tracnghiem',
    title: 'Tin Học 8 - Đề Cương Giữa HK1 (15 Câu Trắc Nghiệm Chuẩn)',
    subject: 'Tin Học',
    grade: 'Lớp 8B',
    description: 'Đầy đủ 15 câu trắc nghiệm nhiều phương án lựa chọn theo đúng đề cương ôn tập giữa HK1 THCS Bát Tràng môn Tin học 8.',
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
          'Thế hệ 4 (1974 - 1990): Mạch tích hợp cỡ rất lớn (VLSI), máy tính cá nhân (PC) phát triển mạnh mẽ và phổ biến rộng rãi.',
          'Thế hệ 5 (1990 đến nay): Trí tuệ nhân tạo (AI), mạng Internet, siêu máy tính và thiết bị thông minh.'
        ],
        formulaOrRule: 'Thế hệ 1: Đèn chân không | Thế hệ 2: Bóng bán dẫn | Thế hệ 3: Mạch tích hợp (IC) | Thế hệ 4: Mạch cỡ rất lớn (VLSI) | Thế hệ 5: AI'
      },
      {
        id: 'tin-sum-2',
        title: 'Đạo đức, Pháp luật & Văn hóa số',
        keyPoints: [
          'Thông tin đáng tin cậy: Có tác giả, nguồn gốc rõ ràng, cơ quan có thẩm quyền công nhận (như cổng thông tin chính phủ .gov.vn).',
          'Hành vi vi phạm: Chụp ảnh quay phim ở nơi cấm (như trong Lăng Bác), sử dụng phần mềm crack, sao chép tác phẩm không xin phép.',
          'Các công cụ AI trò chuyện, hỏi đáp: ChatGPT, Gemini... (Khác với Gamma: tạo slide thuyết trình; Xmind: vẽ sơ đồ tư duy).'
        ]
      },
      {
        id: 'tin-sum-3',
        title: 'Thuật toán và Cấu trúc lặp',
        keyPoints: [
          'Mô tả thuật toán: Liệt kê các bước bằng ngôn ngữ tự nhiên hoặc dùng sơ đồ khối.',
          'Vẽ tam giác đều: Lặp 3 lần [Đi thẳng bước = cạnh, Quay trái 120 độ]. Sử dụng cấu trúc: TUẦN TỰ VÀ LẶP.',
          'Thứ tự 3 bước giải bài toán trên máy tính: 1. Xác định bài toán -> 2. Mô tả thuật toán -> 3. Viết chương trình.'
        ]
      }
    ],
    questions: [
      {
        id: 'tin-1',
        content: 'Loại thông tin nào dưới đây em không nên lựa chọn?',
        options: [
          'Thông tin có thời gian gần với thời gian em tìm kiếm thông tin.',
          'Thông tin đã được kiểm chứng.',
          'Nguồn thông tin không rõ ràng.',
          'Thông tin phù hợp với nội dung trình bày.'
        ],
        correctAnswer: 2,
        explanation: 'Nguồn thông tin không rõ ràng dễ chứa thông tin sai lệch, thiếu cơ sở xác thực nên tuyệt đối không nên lựa chọn.',
        topic: 'Thông tin trong môi trường số',
        difficulty: 'easy'
      },
      {
        id: 'tin-2',
        content: 'Các phép tính đầu tiên được con người thực hiện bằng cách?',
        options: [
          'Sử dụng máy tính để bàn.',
          'Sử dụng máy tính cầm tay.',
          'Sử dụng 10 ngón tay.',
          'Sử dụng bàn tính Soroban.'
        ],
        correctAnswer: 2,
        explanation: 'Từ thời nguyên thủy, công cụ tính toán đầu tiên và tự nhiên nhất của con người chính là mười ngón tay.',
        topic: 'Lược sử công cụ tính toán',
        difficulty: 'easy'
      },
      {
        id: 'tin-3',
        content: 'Trong môi trường kĩ thuật số, thông tin được thu thập và lưu trữ như thế nào?',
        options: [
          'Tuy thu thập chậm nhưng lưu trữ với dung lượng lớn.',
          'Thu thập nhanh và lưu trữ với dung lượng lớn.',
          'Thu thập chậm và được cân nhắc kĩ trước khi lưu trữ.',
          'Thu thập nhanh nhưng chỉ lưu trữ với dung lượng nhỏ.'
        ],
        correctAnswer: 1,
        explanation: 'Trong môi trường số, thông tin được thu thập với tốc độ cực nhanh và được lưu trữ với dung lượng khổng lồ nhờ các thiết bị số hiện đại.',
        topic: 'Thông tin trong môi trường số',
        difficulty: 'easy'
      },
      {
        id: 'tin-4',
        content: 'Sử dụng điện thoại thông minh để thực hiện, hành động nào sau đây là vi phạm đạo đức, pháp luật?',
        options: [
          'Hỏi bài bạn thông qua gmail, zalo, facebook.',
          'Chụp ảnh ở bên trong Lăng Bác.',
          'Đăng ảnh đi chơi cùng gia đình lên mạng xã hội.',
          'Gọi điện hỏi thăm một người bạn đã chuyển trường.'
        ],
        correctAnswer: 1,
        explanation: 'Bên trong Lăng Bác là nơi tôn nghiêm có quy định cấm chụp ảnh, quay phim. Chụp ảnh bên trong là vi phạm nội quy, pháp luật.',
        topic: 'Đạo đức và văn hóa số',
        difficulty: 'easy'
      },
      {
        id: 'tin-5',
        content: 'Cách ghi số phổ biến từ xưa đến nay là:',
        options: [
          'Hệ thống ghi số la mã.',
          'Hệ thống ghi số thập phân.',
          'Hệ thống ghi số nguyên.',
          'Hệ thống ghi số nhị phân.'
        ],
        correctAnswer: 1,
        explanation: 'Hệ thống ghi số thập phân (cơ số 10) với các chữ số từ 0 đến 9 là hệ thống phổ biến nhất được sử dụng rộng rãi trên toàn cầu.',
        topic: 'Lược sử công cụ tính toán',
        difficulty: 'easy'
      },
      {
        id: 'tin-6',
        content: 'Con người đã biết làm các phép tính số học từ bao giờ?',
        options: [
          'Hơn 1000 năm trước Công nguyên.',
          'Hơn 1000 năm sau Công nguyên.',
          'Hơn 2000 năm sau Công nguyên.',
          'Hơn 2000 năm trước Công nguyên.'
        ],
        correctAnswer: 3,
        explanation: 'Theo lịch sử khảo cổ, con người đã biết thực hiện các phép tính số học từ hơn 2000 năm trước Công nguyên.',
        topic: 'Lược sử công cụ tính toán',
        difficulty: 'medium'
      },
      {
        id: 'tin-7',
        content: 'Máy tính phát triển mạnh mẽ nhất và trở nên phổ biến rộng rãi trong giai đoạn nào?',
        options: ['1955-1965', '1965-1974', '1974-1990', '1990 đến nay'],
        correctAnswer: 3,
        explanation: 'Giai đoạn từ năm 1990 đến nay đánh dấu sự bùng nổ của mạng Internet, Web, thiết bị di động thông minh và AI, làm cho máy tính phổ biến đến mọi nhà.',
        topic: 'Các thế hệ máy tính',
        difficulty: 'medium'
      },
      {
        id: 'tin-8',
        content: 'Em có thể hình thành ý tưởng về một vấn đề dựa trên?',
        options: [
          'Nguồn thông tin từ một người lạ.',
          'Nguồn thông tin được đăng tải từ rất lâu.',
          'Nguồn thông tin chính xác đã được kiểm chứng.',
          'Nguồn thông tin từ bạn bè và người thân.'
        ],
        correctAnswer: 2,
        explanation: 'Ý tưởng và lập luận khoa học chỉ nên xây dựng dựa trên nguồn thông tin chính xác, đã được kiểm chứng bởi các cơ quan chuyên môn.',
        topic: 'Khai thác thông tin số',
        difficulty: 'easy'
      },
      {
        id: 'tin-9',
        content: 'Thế hệ máy tính nào bắt đầu sử dụng bàn phím và màn hình?',
        options: ['Thế hệ thứ nhất.', 'Thế hệ thứ hai.', 'Thế hệ thứ ba.', 'Thế hệ thứ tư.'],
        correctAnswer: 2,
        explanation: 'Máy tính thế hệ thứ ba (1965-1974) sử dụng mạch tích hợp (IC) và là thế hệ đầu tiên bắt đầu tương tác qua bàn phím và màn hình thay cho bìa đục lỗ.',
        topic: 'Các thế hệ máy tính',
        difficulty: 'medium'
      },
      {
        id: 'tin-10',
        content: 'Thông tin số có thể được truy cập như thế nào?',
        options: [
          'Không thể truy cập từ xa dù được sự đồng ý của người quản lí.',
          'Có thể được truy cập từ xa mà không cần sự đồng ý của người quản lí.',
          'Có thể được truy cập từ xa nếu được sự đồng ý của người quản lí.',
          'Không thể truy cập từ xa nên không cần sự đồng ý của người quản lí.'
        ],
        correctAnswer: 2,
        explanation: 'Nhờ mạng máy tính và Internet, thông tin số có thể được truy cập linh hoạt từ xa thông qua các quyền hạn và sự cấp phép của người quản trị.',
        topic: 'Thông tin trong môi trường số',
        difficulty: 'easy'
      },
      {
        id: 'tin-11',
        content: 'Chọn phát biểu ĐÚNG trong các phát biểu sau:',
        options: [
          'Yếu tố quan trọng nhất trong kinh tế tri thức là các hệ thống máy tính.',
          'Con người có thể thu thập, lưu trữ, xử lí, chia sẻ thông tin là nhờ sự trợ giúp của máy tính.',
          'Các thiết bị thông minh không phải là thành phần cấu thành nên một hệ thống thông minh.',
          'Cách mạng công nghiệp 4.0 và kinh tế tri thức đã, đang và sẽ mang lại nhiều thay đổi to lớn hơn nữa cho xã hội loài người.'
        ],
        correctAnswer: 3,
        explanation: 'Cách mạng công nghiệp 4.0 và kinh tế tri thức tạo ra bước nhảy vọt chưa từng có về công nghệ và chuyển đổi toàn diện đời sống xã hội.',
        topic: 'Môi trường số và xã hội tri thức',
        difficulty: 'medium'
      },
      {
        id: 'tin-12',
        content: 'Tam giác đều là hình có 3 cạnh bằng nhau, 3 góc bằng nhau và bằng 60°. Để di chuyển theo một hình tam giác đều, nhân vật cần lặp lại 2 hành động: 1. Di chuyển về phía trước; 2. Quay trái 120°. Số bước lặp và cấu trúc thuật toán đã sử dụng là?',
        options: [
          '1, lặp và rẽ nhánh.',
          '2, tuần tự và lặp.',
          '3, tuần tự và lặp.',
          '4, rẽ nhánh và lặp.'
        ],
        correctAnswer: 2,
        explanation: 'Hình tam giác đều có 3 cạnh nên số lần lặp lại hành động là 3 lần. Các bước đi thẳng rồi quay góc thực hiện lần lượt bên trong vòng lặp nên đây là cấu trúc TUẦN TỰ VÀ LẶP.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'medium'
      },
      {
        id: 'tin-13',
        content: 'Để mô tả thuật toán, người ta sử dụng cách liệt kê các bước bằng?',
        options: ['Ngôn ngữ tự nhiên.', 'Sơ đồ khối.', 'Ngôn ngữ lập trình.', 'Ngôn ngữ toán học.'],
        correctAnswer: 0,
        explanation: 'Có hai cách cơ bản để mô tả thuật toán: Liệt kê các bước bằng NGÔN NGỮ TỰ NHIÊN hoặc vẽ SƠ ĐỒ KHỐI. Khi nói về "liệt kê các bước" thì dùng ngôn ngữ tự nhiên.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'easy'
      },
      {
        id: 'tin-14',
        content: 'Trong lịch sử máy tính điện tử, có bao nhiêu thế hệ máy tính?',
        options: ['1 thế hệ', '3 thế hệ', '5 thế hệ', '7 thế hệ'],
        correctAnswer: 2,
        explanation: 'Lịch sử phát triển của máy tính điện tử được chia thành 5 thế hệ chính (từ thế hệ 1: đèn điện tử đến thế hệ 5: AI và máy tính thông minh).',
        topic: 'Các thế hệ máy tính',
        difficulty: 'easy'
      },
      {
        id: 'tin-15',
        content: 'Thành phần điện tử chính trong máy tính ở thế hệ thứ hai là loại linh kiện điện tử nào?',
        options: ['Mạch tích hợp.', 'Đèn điện tử chân không.', 'Bóng bán dẫn.', 'Mạch tích hợp cỡ rất lớn.'],
        correctAnswer: 2,
        explanation: 'Thành phần điện tử chính của máy tính thế hệ thứ hai (1955-1965) là BÓNG BÁN DẪN (transistor).',
        topic: 'Các thế hệ máy tính',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'tin8-gk1-dung-sai',
    title: 'Tin Học 8 - Chuyên Đề Trắc Nghiệm Đúng / Sai (6 Câu - 24 Nhận Định)',
    subject: 'Tin Học',
    grade: 'Lớp 8B',
    description: 'Bao quát trọn vẹn Phần II Trắc nghiệm Đúng - Sai của Đề cương giữa HK1 Tin học 8 THCS Bát Tràng.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      {
        id: 'tin-tf-1a',
        content: 'Để tìm hiểu dân số Việt Nam, nhận định về nguồn thông tin sau là ĐÚNG hay SAI: "https://www.gso.gov.vn/ (hoặc gos.gov.vn): Trang web Cơ quan thống kê quốc gia là nguồn tin cậy."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Website của Tổng cục Thống kê (tên miền .gov.vn của cơ quan nhà nước) là nguồn số liệu chính thống và đáng tin cậy nhất.',
        topic: 'Nguồn thông tin đáng tin cậy',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-1b',
        content: 'Để chuyển một trang sách in thành văn bản số trong máy tính, nhận định sau là ĐÚNG hay SAI: "Chụp ảnh trang sách, sử dụng phần mềm Microsoft Excel để chuyển hình ảnh thành văn bản."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Microsoft Excel là phần mềm bảng tính, không có chức năng chuyển đổi ảnh thành văn bản số (OCR). Cần dùng Google Lens hoặc CamScanner.',
        topic: 'Chuyển đổi số tài liệu',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-1c',
        content: 'Để chuyển một trang sách in thành văn bản trong máy tính, nhận định sau là ĐÚNG hay SAI: "Chụp ảnh trang sách bằng điện thoại thông minh, sau đó dùng Google Lens / CamScanner chuyển thành văn bản số rồi chuyển vào máy tính."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đây là phương pháp nhận dạng kí tự quang học (OCR) hiện đại, nhanh chóng và chuẩn xác nhất hiện nay.',
        topic: 'Chuyển đổi số tài liệu',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-3a',
        content: 'Về các công cụ AI hỗ trợ người dùng, nhận định sau là ĐÚNG hay SAI: "Gemini và ChatGPT là các công cụ AI hỗ trợ đắc lực cho việc trò chuyện, giải đáp câu hỏi và tương tác ngôn ngữ."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Cả Gemini và ChatGPT đều là các mô hình AI ngôn ngữ lớn (LLM) hàng đầu phục vụ trò chuyện, trả lời và hỗ trợ học tập.',
        topic: 'Công cụ AI hỗ trợ',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-3b',
        content: 'Nhận định sau là ĐÚNG hay SAI: "Xmind là công cụ AI hỗ trợ việc trò chuyện, hỏi đáp tự động."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Xmind là phần mềm chuyên dụng để vẽ sơ đồ tư duy (Mindmap), không phải công cụ trò chuyện hỏi đáp (chat bot).',
        topic: 'Công cụ AI hỗ trợ',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-4a',
        content: 'Khi tạo bài trình chiếu để tránh vi phạm bản quyền và đạo đức, nhận định sau là ĐÚNG hay SAI: "Sử dụng tài liệu, hình ảnh cho bài trình chiếu cần xin phép tác giả hoặc ghi rõ nguồn gốc trích dẫn."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Đây là quy tắc ứng xử văn minh và tuân thủ luật sở hữu trí tuệ khi khai thác tài nguyên số.',
        topic: 'Đạo đức và văn hóa số',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-5a',
        content: 'Về định nghĩa chương trình máy tính, nhận định sau là ĐÚNG hay SAI: "Chương trình là dãy các lệnh điều khiển máy tính thực hiện một thuật toán."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Khái niệm chuẩn trong SGK: Chương trình máy tính là tập hợp các câu lệnh chỉ dẫn máy tính thực hiện các thao tác theo một thuật toán đã định.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-5b',
        content: 'Về thứ tự các bước giải bài toán trên máy tính, nhận định sau là ĐÚNG hay SAI: "Thứ tự các bước chuẩn là: Xác định bài toán -> Mô tả thuật toán -> Viết chương trình."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Phải xác định rõ Input/Output trước, sau đó xây dựng thuật toán, rồi mới dùng ngôn ngữ lập trình để viết code.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-6a',
        content: 'Về điều khiển máy tính, nhận định sau là ĐÚNG hay SAI: "Để máy tính hiểu và thực hiện được thuật toán, em cần viết chương trình."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Máy tính chỉ hiểu và chạy được mã lệnh khi thuật toán đã được lập trình thành chương trình cụ thể.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'easy'
      },
      {
        id: 'tin-tf-6b',
        content: 'Nhận định sau là ĐÚNG hay SAI: "Góc quay của một hình đa giác đều phụ thuộc vào số cạnh của hình đó."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Công thức góc quay bên ngoài của đa giác đều n cạnh khi vẽ là: Góc quay = 360° / n. Vì thế nó phụ thuộc trực tiếp vào số cạnh n.',
        topic: 'Từ thuật toán đến chương trình',
        difficulty: 'easy'
      }
    ]
  }
];
