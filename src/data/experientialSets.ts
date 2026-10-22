import { QuizSet } from '../types/quiz';

export const EXPERIENTIAL_QUIZ_SETS: QuizSet[] = [
  {
    id: 'hdtn8-gk1-tracnghiem',
    title: 'HĐTN 8 - Đề Cương Giữa HK1 (Em Với Nhà Trường & Khám Phá Bản Thân)',
    subject: 'HĐTN & GDĐP',
    grade: 'Lớp 8B',
    description: 'Chủ đề 1: Em với nhà trường (tình bạn đẹp, phòng tránh bắt nạt học đường và bắt nạt trên không gian mạng); Chủ đề 2: Khám phá bản thân (nhận biết tính cách, kiểm soát cảm xúc, kỹ năng tranh luận và thương thuyết).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'hdtn-sum-1',
        title: 'Chủ đề 1: Em Với Nhà Trường & Phòng Chống Bắt Nạt',
        keyPoints: [
          'Tình bạn đẹp: Được xây dựng trên sự chân thành, tôn trọng, lắng nghe, giúp đỡ nhau cùng tiến bộ (không bao che khuyết điểm, sai phạm).',
          'Dấu hiệu bắt nạt học đường: Đe dọa, cô lập, trấn lột tiền, chặn đường, miệt thị ngoại hình.',
          'Bắt nạt trên mạng (Cyberbullying): Lén chụp ảnh dìm/biểu cảm xấu dọa đăng lên mạng, lập nhóm cô lập, tung tin đồn thất thiệt.',
          'Nguyên tắc đối phó: Giữ bình tĩnh, dứt khoát rời đi hoặc hô to cầu cứu; TUYỆT ĐỐI KHÔNG im lặng chịu đựng hay đánh trả; báo ngay cho thầy cô, cha mẹ.'
        ]
      },
      {
        id: 'hdtn-sum-2',
        title: 'Chủ đề 2: Khám Phá Bản Thân & Quản Trị Cảm Xúc',
        keyPoints: [
          'Nhận biết nét tính cách bản thân: Quan sát hành vi thực tế của mình và lắng nghe góp ý chân thành từ người thân, bạn bè.',
          'Điều chỉnh cảm xúc tiêu cực: Khi tức giận hay buồn bực -> Hít thở sâu, dừng lại vài giây (hoặc đi dạo) -> Nhìn nhận sự việc tích cực để rút kinh nghiệm.',
          'Tranh luận văn minh: Trình bày rõ luận điểm -> Đưa ra lý lẽ, dẫn chứng thuyết phục -> Lắng nghe đối phương với thái độ tôn trọng -> Rút ra kết luận chung.',
          'Thương thuyết: Tập trung vào việc tìm kiếm tiếng nói chung hòa hợp, thỏa mãn lợi ích hợp lý của cả hai bên.'
        ]
      }
    ],
    questions: [
      {
        id: 'hdtn-1',
        content: 'Yếu tố nào dưới đây là nền tảng quan trọng nhất để xây dựng và giữ gìn tình bạn đẹp?',
        options: [
          'Sự chân thành, tôn trọng, lắng nghe và chia sẻ lẫn nhau',
          'Việc luôn bao che mọi sai phạm và khuyết điểm của bạn',
          'Cùng sở thích tiêu xài tiền bạc và vui chơi giải trí',
          'Sự so sánh năng lực học tập và cạnh tranh thành tích'
        ],
        correctAnswer: 0,
        explanation: 'Tình bạn đẹp và bền vững chỉ có thể được xây dựng trên sự chân thành, tôn trọng, thấu hiểu và chân thành chia sẻ.',
        topic: 'Tình bạn đẹp',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-2',
        content: 'Hành vi nào sau đây là dấu hiệu điển hình của hiện tượng bắt nạt học đường?',
        options: [
          'Thảo luận sôi nổi để bảo vệ quan điểm cá nhân trong giờ học',
          'Cùng bạn bè tham gia hoạt động thể thao sau giờ tan trường',
          'Nhắn tin đe dọa, cô lập bạn bè, chặn đường lục cặp đòi tiền',
          'Góp ý chân thành khi thấy bạn chưa hoàn thành nhiệm vụ nhóm'
        ],
        correctAnswer: 2,
        explanation: 'Nhắn tin đe dọa, tẩy chay cô lập hay trấn lột tiền là những hành vi bắt nạt học đường nghiêm trọng.',
        topic: 'Phòng tránh bắt nạt học đường',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-3',
        content: 'Khi đối mặt trực tiếp với kẻ có hành vi bắt nạt học đường, học sinh NÊN thực hiện hành động nào để bảo vệ bản thân?',
        options: [
          'Thể hiện thái độ hiếu chiến và thách thức lại kẻ bắt nạt',
          'Giữ thái độ nghiêm túc, thể hiện rõ sự không chấp nhận và tìm cách rời đi hoặc kêu to nhờ trợ giúp',
          'Âm thầm chịu đựng và giấu kín thông tin với gia đình, thầy cô',
          'Rủ một nhóm bạn khác đến đánh trả để trả thù'
        ],
        correctAnswer: 1,
        explanation: 'Cần giữ bình tĩnh, thể hiện thái độ dứt khoát không đồng tình, nhanh chóng tìm cách thoát khỏi tình huống nguy hiểm và kêu gọi người lớn hỗ trợ.',
        topic: 'Kỹ năng tự bảo vệ',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-4',
        content: 'Hình thức bắt nạt nào dưới đây thuộc loại bắt nạt trên không gian mạng (cyberbullying)?',
        options: [
          'Giật cặp sách của bạn ở sân trường',
          'Lén chụp ảnh biểu cảm không đẹp của bạn rồi đe dọa đăng lên mạng xã hội',
          'Ngăn cấm không cho bạn tham gia đội bóng của lớp',
          'Ép bạn phải trực nhật thay mình'
        ],
        correctAnswer: 1,
        explanation: 'Hành vi sử dụng hình ảnh cá nhân nhằm đe dọa, làm nhục người khác trên môi trường internet/mạng xã hội chính là bắt nạt trực tuyến.',
        topic: 'Bắt nạt trên không gian mạng',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-5',
        content: 'Phương pháp nào hiệu quả nhất giúp em nhận biết và xác định đúng nét đặc trưng trong tính cách của bản thân?',
        options: [
          'Quan sát biểu hiện thực tế của bản thân và lắng nghe nhận xét chân thành từ người thân, bạn bè',
          'Tự suy đoán theo mong muốn chủ quan mà không cần kiểm chứng',
          'Bắt chước hoàn toàn tính cách của một nhân vật nổi tiếng trên mạng',
          'Đánh giá tính cách chỉ dựa vào kết quả điểm số các môn học'
        ],
        correctAnswer: 0,
        explanation: 'Tự quan sát hành vi trong đời thực kết hợp với lắng nghe ý kiến phản hồi khách quan từ những người xung quanh là cách tốt nhất để thấu hiểu bản thân.',
        topic: 'Khám phá bản thân',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-6',
        content: 'Khi gặp phải một sự việc gây bực bội, nảy sinh cảm xúc tiêu cực, biện pháp đầu tiên em NÊN làm để lấy lại bình tĩnh là gì?',
        options: [
          'Lập tức tranh cãi gay gắt để giải tỏa sự tức giận',
          'Hít thở sâu, dừng lại vài giây hoặc đi dạo để trấn an bản thân',
          'Đập phá đồ đạc xung quanh phòng học',
          'Đăng trạng thái giận dữ, xúc phạm người khác lên mạng xã hội'
        ],
        correctAnswer: 1,
        explanation: 'Tạm dừng hành động, hít thở sâu vài nhịp giúp não bộ cân bằng lại hormone hưng phấn và lấy lại sự tỉnh táo trước khi đưa ra phản ứng.',
        topic: 'Quản trị cảm xúc',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-7',
        content: 'Quy trình chuẩn để xây dựng cuộc tranh luận nhằm bảo vệ quan điểm cá nhân một cách thuyết phục gồm các bước nào?',
        options: [
          'Trình bày rõ ràng luận điểm -> Đưa ra lý lẽ, dẫn chứng minh họa -> Đưa ra kết luận chung',
          'Đưa ra kết luận -> Tranh cãi tự do -> Khẳng định mình luôn đúng',
          'Đưa ra lý lẽ -> Bác bỏ ý kiến đối phương -> Bỏ dở cuộc tranh luận',
          'Đọc tài liệu -> Giữ im lặng -> Đồng ý với số đông'
        ],
        correctAnswer: 0,
        explanation: 'Quy trình tranh luận logic: Luận điểm rõ ràng -> Luận cứ, dẫn chứng xác thực -> Kết luận đúc kết.',
        topic: 'Kỹ năng tranh luận',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-8',
        content: 'Thương thuyết khác với tranh luận ở điểm cơ bản nào?',
        options: [
          'Thương thuyết tập trung vào việc tìm kiếm phương án hòa hợp, thỏa mãn lợi ích hợp lý của cả hai bên (win - win)',
          'Thương thuyết luôn dùng bạo lực để giải quyết',
          'Thương thuyết không cần lắng nghe ý kiến của đối phương',
          'Thương thuyết chỉ thực hiện được giữa học sinh và giáo viên'
        ],
        correctAnswer: 0,
        explanation: 'Mục tiêu tối thượng của thương thuyết là tìm kiếm tiếng nói chung và giải pháp đôi bên cùng có lợi (win-win), thay vì phân định thắng - thua như tranh biện đối kháng.',
        topic: 'Kỹ năng thương thuyết',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'gddp8-gk1-duan',
    title: 'Giáo Dục Địa Phương 8 - Đề Cương & Dự Án Giữa HK1 (Hà Nội & Làng Nghề Bát Tràng)',
    subject: 'HĐTN & GDĐP',
    grade: 'Lớp 8B',
    description: 'Chủ đề Dự án học tập: "Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội" (trọng tâm Làng gốm sứ Bát Tràng), kiến thức Thăng Long thời Mạc - Tây Sơn, chiến thắng Ngọc Hồi - Đống Đa.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'gddp-sum-1',
        title: 'Dự án: Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội',
        keyPoints: [
          'Mục tiêu: Giới thiệu 1 làng nghề/phố nghề thủ công truyền thống ở Thăng Long từ thời Mạc - Tây Sơn còn tồn tại đến ngày nay.',
          'Trọng tâm học sinh THCS Bát Tràng: Làng gốm Bát Tràng - làng nghề gốm sứ cổ truyền bên bờ sông Hồng với men lam, men rạn, men ngọc độc đáo.',
          'Hình thức sản phẩm tự chọn: Poster/Infographic A3, Video thuyết minh 3-5 phút, hoặc Bài trình chiếu PowerPoint/Canva 6-10 slide.',
          'Tiêu chí đánh giá Đạt: Kiến thức lịch sử đúng trọng tâm, bố cục đẹp mắt có hình ảnh/tư liệu nguồn rõ ràng, thuyết trình tự tin, có bằng chứng phân công hợp tác nhóm.'
        ]
      },
      {
        id: 'gddp-sum-2',
        title: 'Kiến thức Lịch sử Hà Nội trọng tâm',
        keyPoints: [
          'Thăng Long thời Mạc - Tây Sơn: Đóng vai trò trung tâm chính trị, văn hóa, giao thương sầm uất.',
          'Kì tích chống ngoại xâm trên đất Hà Nội thế kỉ XVIII: Cuộc hành quân thần tốc của vua Quang Trung (Nguyễn Huệ) đại phá 29 vạn quân Mãn Thanh mùa xuân Kỷ Dậu 1789 tại đồn Ngọc Hồi và đồi Đống Đa.'
        ]
      }
    ],
    questions: [
      {
        id: 'gddp-1',
        content: 'Dự án kiểm tra giữa kì I môn Giáo dục địa phương 8 của trường THCS Bát Tràng có tên là gì?',
        options: [
          'Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội',
          'Du lịch khám phá sông Hồng',
          'Bảo tồn di tích lịch sử Hồ Gươm',
          'Ẩm thực phố cổ Hà Nội'
        ],
        correctAnswer: 0,
        explanation: 'Tên chính thức của dự án trong đề cương là: "Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội".',
        topic: 'Dự án GDĐP 8',
        difficulty: 'easy'
      },
      {
        id: 'gddp-2',
        content: 'Học sinh có thể lựa chọn những hình thức sản phẩm nào dưới đây để báo cáo dự án GDĐP 8?',
        options: [
          'Poster hoặc Infographic khổ A3',
          'Video thuyết minh dài khoảng 3–5 phút',
          'Bài trình chiếu từ 6–10 trang (slide)',
          'Cả ba hình thức trên đều được chấp nhận'
        ],
        correctAnswer: 3,
        explanation: 'Đề cương cho phép các nhóm học sinh lựa chọn 1 trong 3 hình thức: Poster/Infographic A3, Video thuyết minh 3-5 phút, hoặc Slide 6-10 trang.',
        topic: 'Yêu cầu sản phẩm dự án',
        difficulty: 'easy'
      },
      {
        id: 'gddp-3',
        content: 'Chiến thắng vang dội nào của người anh hùng áo vải Quang Trung - Nguyễn Huệ diễn ra trên địa bàn Hà Nội vào mùa xuân Kỷ Dậu 1789?',
        options: [
          'Chiến thắng Ngọc Hồi - Đống Đa (quét sạch 29 vạn quân Thanh)',
          'Chiến thắng Chi Lăng - Xương Giang',
          'Chiến thắng Bạch Đằng',
          'Chiến thắng Rạch Gầm - Xoài Mút'
        ],
        correctAnswer: 0,
        explanation: 'Mùa xuân Kỷ Dậu 1789, vua Quang Trung đại phá đồn Ngọc Hồi và đồi Đống Đa, giải phóng hoàn toàn kinh thành Thăng Long.',
        topic: 'Kì tích chống ngoại xâm Hà Nội',
        difficulty: 'easy'
      }
    ]
  }
];
