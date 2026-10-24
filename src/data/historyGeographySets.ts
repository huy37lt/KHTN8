import { QuizSet } from '../types/quiz';

export const HISTORY_GEOGRAPHY_QUIZ_SETS: QuizSet[] = [
  {
    id: 'ls8-gk1-tracnghiem',
    title: 'Lịch Sử 8 - Đề Cương Giữa HK1 (18 Câu Trắc Nghiệm Chuẩn)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: 'Trọn vẹn 18 câu trắc nghiệm nhiều phương án lựa chọn phân môn Lịch Sử theo đề cương ôn tập giữa HK1 THCS Bát Tràng (Bài 1 đến Bài 6).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'ls-sum-1',
        title: 'Các cuộc Cách mạng tư sản thời cận đại (Bài 1, 2, 3)',
        keyPoints: [
          'CMTS Anh: Lật đổ chế độ quân chủ chuyên chế, mở đường cho CNTB phát triển.',
          'Chiến tranh 13 thuộc địa Bắc Mỹ: Lật đổ ách thống trị thực dân Anh, thành lập Hợp chúng quốc Mỹ (USA). Không phải lật đổ chế độ phong kiến (Bắc Mỹ không có phong kiến).',
          'CMTS Pháp 1789: Mở đầu bằng sự kiện tấn công ngục Ba-xti ngày 14/7/1789; lật đổ chế độ phong kiến, lập chế độ cộng hòa; là cuộc CMTS triệt để nhất.',
          'Cách mạng công nghiệp: Khởi đầu ở Anh (nhờ vốn dồi dào, nhân công đông, kĩ thuật phát triển). Phát minh máy hơi nước là thành tựu tiêu biểu nhất, đưa nước Anh thành "công xưởng của thế giới" và hình thành 2 giai cấp: Tư sản và Vô sản.'
        ],
        formulaOrRule: 'Pháp: 14/7/1789 tấn công Ba-xti | Anh: Công xưởng thế giới | Bắc Mỹ: Lật đổ thực dân'
      },
      {
        id: 'ls-sum-2',
        title: 'Lịch sử Việt Nam thế kỉ XVI - XVIII (Bài 4, 5, 6)',
        keyPoints: [
          'Đầu thế kỉ XVI, Mạc Đăng Dung tiêu diệt các thế lực đối lập, thâu tóm quyền hành.',
          'Xung đột Nam - Bắc triều: Nhà Mạc và Lê - Trịnh. Di tích thành nhà Mạc ở Cao Bằng, Lạng Sơn.',
          'Xung đột Trịnh - Nguyễn: Chia cắt đất nước thành Đàng Trong và Đàng Ngoài, lấy sông Gianh (Quảng Bình) làm giới tuyến. Di tích Lũy Thầy (Quảng Trị).',
          'Khai phá đất phương Nam: Chúa Nguyễn làm chủ vùng đất rộng lớn từ phía nam Hoành Sơn đến mũi Cà Mau.',
          'Chủ quyền biển đảo: Các chúa Nguyễn xác lập chủ quyền Hoàng Sa, Trường Sa từ TK XVII bằng Đội Hoàng Sa, Đội Bắc Hải (tên cổ: "Bãi Cát Vàng"), được tiếp nối qua thời Tây Sơn và nhà Nguyễn.'
        ]
      }
    ],
    questions: [
      {
        id: 'ls-1',
        content: 'Kết quả nổi bật của Cách mạng tư sản Anh là',
        options: [
          'lật đổ chế độ quân chủ chuyên chế, mở đường cho CNTB phát triển ở Anh',
          'vẫn duy trì mọi đặc quyền của thế lực phong kiến',
          'nền cộng hòa dân chủ được thiết lập ở Anh',
          'thế lực của giai cấp tư sản được củng cố, quyền lợi của nhân dân được đảm bảo'
        ],
        correctAnswer: 0,
        explanation: 'CMTS Anh lật đổ chế độ quân chủ chuyên chế, mở đường cho CNTB phát triển mạnh mẽ.',
        topic: 'Bài 1: CMTS Anh',
        difficulty: 'easy'
      },
      {
        id: 'ls-2',
        content: 'Đâu không phải là kết quả của Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ?',
        options: [
          'lật đổ ách thống trị của thực dân Anh',
          'lật đổ chế độ phong kiến',
          'thành lập Hợp chủng quốc Mỹ',
          'mở đường cho kinh tế tư bản chủ nghĩa phát triển'
        ],
        correctAnswer: 1,
        explanation: 'Ở Bắc Mỹ trước đó không có chế độ phong kiến, cuộc chiến lật đổ ách thống trị thực dân Anh chứ không phải lật đổ phong kiến.',
        topic: 'Bài 1: Chiến tranh 13 thuộc địa Bắc Mỹ',
        difficulty: 'easy'
      },
      {
        id: 'ls-3',
        content: 'Đâu không phải là kết quả của cách mạng tư sản Pháp?',
        options: [
          'Lật đổ chế độ tư bản chủ nghĩa.',
          'Xóa bỏ nhiều trở ngại trên con đường phát triển chủ nghĩa tư bản.',
          'Đưa giai cấp tư sản lên nắm quyền.',
          'Lật đổ chế độ phong kiến, thành lập chế độ cộng hòa.'
        ],
        correctAnswer: 0,
        explanation: 'CMTS Pháp lật đổ chế độ phong kiến và xác lập chế độ TƯ BẢN CHỦ NGHĨA, chứ không phải lật đổ chế độ tư bản chủ nghĩa.',
        topic: 'Bài 2: Cách mạng tư sản Pháp',
        difficulty: 'easy'
      },
      {
        id: 'ls-4',
        content: 'Mâu thuẫn bao trùm trong xã hội Pháp trước cách mạng là',
        options: [
          'giữa các tầng lớp nhân dân Pháp và chế độ phong kiến.',
          'giữa nông dân và bọn chủ đất.',
          'giữa vô sản và tư sản.',
          'giữa tư sản và chế độ phong kiến.'
        ],
        correctAnswer: 0,
        explanation: 'Mâu thuẫn bao trùm là giữa Đẳng cấp thứ ba (toàn thể nhân dân: tư sản, nông dân, bình dân) với chế độ phong kiến chuyên chế (Tăng lữ và Quý tộc).',
        topic: 'Bài 2: Cách mạng tư sản Pháp',
        difficulty: 'easy'
      },
      {
        id: 'ls-5',
        content: 'Nhân dân Pa-ri tấn công ngục Ba-xti vào ngày nào?',
        options: ['Ngày 24 / 7/ 1789.', 'Ngày 14 / 8/ 1789.', 'Ngày 14 / 7/ 1789.', 'Ngày 15 / 7/ 1789.'],
        correctAnswer: 2,
        explanation: 'Ngày 14/7/1789, quần chúng tấn công ngục Ba-xti, mở đầu cuộc Cách mạng tư sản Pháp bùng nổ.',
        topic: 'Bài 2: Cách mạng tư sản Pháp',
        difficulty: 'easy'
      },
      {
        id: 'ls-6',
        content: 'Thành tựu tiêu biểu nhất của cách mạng công nghiệp Anh là gì?',
        options: [
          'chế tạo ra máy kéo sợi Gien-ni',
          'chế tạo thành công chiếc đầu máy xe lửa đầu tiên',
          'chế tạo được máy dệt chạy bằng sức nước',
          'việc phát minh ra máy hơi nước'
        ],
        correctAnswer: 3,
        explanation: 'Phát minh máy hơi nước của James Watt (1784) là thành tựu quan trọng và tiêu biểu nhất, giải phóng sức lao động cơ bắp con người.',
        topic: 'Bài 3: Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-7',
        content: 'Vì sao Đông Nam Á trở thành mục tiêu xâm lược của các nước tư bản phương Tây?',
        options: [
          'Chế độ phong kiến suy yếu',
          'Giàu tài nguyên khoáng sản.',
          'Đông Nam Á có vị trí địa lí quan trọng',
          'Cả ba đáp án trên đều đúng.'
        ],
        correctAnswer: 3,
        explanation: 'Đông Nam Á có vị trí ngã tư quốc tế, giàu tài nguyên thiên nhiên và đúng lúc chế độ phong kiến đang trên đà khủng hoảng, suy thoái trầm trọng.',
        topic: 'Bài 4: Đông Nam Á XVI - XIX',
        difficulty: 'easy'
      },
      {
        id: 'ls-8',
        content: 'Những nước nào ở Đông Nam Á là thuộc địa của Pháp?',
        options: [
          'Việt Nam, Lào, Cam-pu-chia',
          'Việt Nam, Phi-líp-pin, Bru-nây',
          'Việt Nam, Lào, Miến Điện, Mã Lai',
          'Việt Nam, Lào, In-đô-nê-xi-a'
        ],
        correctAnswer: 0,
        explanation: 'Thực dân Pháp đã xâm lược và lập ách đô hộ trên toàn bộ 3 nước Đông Dương: Việt Nam, Lào và Cam-pu-chia.',
        topic: 'Bài 4: Đông Nam Á XVI - XIX',
        difficulty: 'easy'
      },
      {
        id: 'ls-9',
        content: 'Các nước thực dân phương Tây đã thực hiện chính sách gì ở một số nước Đông Nam Á?',
        options: [
          'Chính sách “chia để trị”',
          'Chính sách khuyến khích nhân tài',
          'Chính sách độc quyền.',
          'Chính sách nô dịch'
        ],
        correctAnswer: 0,
        explanation: 'Chính sách thâm độc phổ biến nhất của chủ nghĩa thực dân phương Tây tại Đông Nam Á là "chia để trị" nhằm làm suy yếu khối đại đoàn kết dân tộc.',
        topic: 'Bài 4: Đông Nam Á XVI - XIX',
        difficulty: 'easy'
      },
      {
        id: 'ls-10',
        content: 'Đầu thế kỉ XVI, trong lúc tình hình đất nước bất ổn, ai đã tiêu diệt các thế lực đối lập, dần dần thâu tóm mọi quyền hành?',
        options: ['Nguyễn Huệ', 'Lê Thánh Tông', 'Mạc Đăng Dung', 'Đinh Bộ Lĩnh'],
        correctAnswer: 2,
        explanation: 'Đầu thế kỉ XVI, Mạc Đăng Dung dẹp yên các phe phái nổi loạn, thâu tóm quyền bính rồi lập nên nhà Mạc năm 1527.',
        topic: 'Bài 5: Xung đột Nam - Bắc triều',
        difficulty: 'easy'
      },
      {
        id: 'ls-11',
        content: 'Đến cuối thế kỉ XVIII, chúa Nguyễn đã làm chủ một vùng đất rộng lớn ở khu vực nào?',
        options: [
          'Từ Đà Nẵng đến Cà Mau',
          'Từ phía nam dải Hoành Sơn đến mũi Cà Mau',
          'Từ Cao Bằng đến phía bắc dải Hoành Sơn',
          'Từ Móng Cái đến Cà Mau'
        ],
        correctAnswer: 1,
        explanation: 'Qua quá trình khai hoang, mở cõi bền bỉ, chúa Nguyễn đã làm chủ dải đất trù phú từ phía nam Hoành Sơn đến tận mũi Cà Mau.',
        topic: 'Bài 6: Khai phá vùng đất phía Nam',
        difficulty: 'easy'
      },
      {
        id: 'ls-12',
        content: 'Quá trình thực thi chủ quyền tại hai quần đảo Hoàng Sa và Trường Sa được thực hiện một cách liên tục trong khoảng thời gian nào?',
        options: [
          'Từ thế kỉ XVII và được tiếp nối dưới thời nhà Tây Sơn (thế kỉ XVIII) và nhà Nguyễn',
          'Từ thế kỉ XVII đến thế kỉ XIX',
          'Từ thế kỉ XVI đến thế kỉ XVII',
          'Từ thế kỉ XV đến thế kỉ XVI'
        ],
        correctAnswer: 0,
        explanation: 'Chủ quyền được xác lập và thực thi liên tục từ thế kỉ XVII (chúa Nguyễn lập đội Hoàng Sa, Bắc Hải) và tiếp nối qua thời Tây Sơn (thế kỉ XVIII) và triều Nguyễn.',
        topic: 'Bài 6: Chủ quyền Hoàng Sa - Trường Sa',
        difficulty: 'easy'
      },
      {
        id: 'ls-13',
        content: 'Đầu thế kỉ XIX, nhờ tiến hành cách mạng công nghiệp, nước Anh đã vươn lên trở thành',
        options: [
          '“nông trường của thế giới”',
          '“công xưởng của thế giới”',
          '“cường quốc công nghiệp thứ hai thế giới”',
          '“cường quốc nông nghiệp hàng đầu thế giới”'
        ],
        correctAnswer: 1,
        explanation: 'Nước Anh là nơi khởi nguồn cách mạng công nghiệp, sản xuất lượng của cải công nghiệp khổng lồ và được mệnh danh là "công xưởng của thế giới".',
        topic: 'Bài 3: Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-14',
        content: 'Những thành tựu đạt được từ cuộc cách mạng công nghiệp lần thứ nhất (cuối thế kỉ XVIII - đầu thế kỉ XIX) đã đưa con người bước sang thời đại',
        options: [
          '“văn minh thông tin”',
          '“văn minh trí tuệ”',
          '“văn minh công nghiệp”',
          '“văn minh nông nghiệp”'
        ],
        correctAnswer: 2,
        explanation: 'Cách mạng công nghiệp lần thứ nhất đã chấm dứt kỷ nguyên nông nghiệp truyền thống, đưa nhân loại bước sang nền văn minh công nghiệp.',
        topic: 'Bài 3: Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-15',
        content: 'Về mặt xã hội, tác động quan trọng nhất của cách mạng công nghiệp là hình thành hai giai cấp cơ bản, đó là',
        options: ['tư sản và địa chủ', 'địa chủ và nông dân', 'công nhân và nông dân', 'tư sản và vô sản'],
        correctAnswer: 3,
        explanation: 'Hai giai cấp đối kháng cốt lõi của xã hội tư bản công nghiệp là giai cấp Tư sản (nắm tư liệu sản xuất) và giai cấp Vô sản (người làm thuê).',
        topic: 'Bài 3: Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-16',
        content: 'Di tích thành nhà Mạc (Cao Bằng, Lạng Sơn) / Lũy Thầy (Quảng Trị) liên quan đến cuộc xung đột nào?',
        options: [
          'Xung đột Nam - Bắc triều / Xung đột Trịnh - Nguyễn',
          'Xung đột Đàng Trong - Đàng Ngoài',
          'Xung đột Tây Sơn - Nguyễn Ánh',
          'Xung đột Lê - Trịnh'
        ],
        correctAnswer: 0,
        explanation: 'Thành nhà Mạc (Cao Bằng, Lạng Sơn) gắn liền với xung đột Nam - Bắc triều; Lũy Thầy (Quảng Trị do Đào Duy Từ xây) gắn với cuộc xung đột Trịnh - Nguyễn.',
        topic: 'Bài 5: Xung đột Nam - Bắc triều và Trịnh - Nguyễn',
        difficulty: 'easy'
      },
      {
        id: 'ls-17',
        content: 'Đất nước Đại Việt bị chia cắt thành hai Đàng, lấy sông nào làm giới tuyến?',
        options: ['Sông Cửu Long', 'Sông Hồng', 'Sông Gianh', 'Sông Thu Bồn'],
        correctAnswer: 2,
        explanation: 'Sông Gianh (tỉnh Quảng Bình) là ranh giới phân chia lịch sử giữa Đàng Ngoài (chúa Trịnh) và Đàng Trong (chúa Nguyễn).',
        topic: 'Bài 5: Xung đột Trịnh - Nguyễn',
        difficulty: 'easy'
      },
      {
        id: 'ls-18',
        content: 'Hệ quả tích cực của cuộc xung đột Trịnh - Nguyễn là?',
        options: [
          'Chính quyền chúa Nguyễn ở Đàng Trong từng bước khai phá lãnh thổ về phía Nam và thực thi chủ quyền tại quần đảo Hoàng Sa và Trường Sa.',
          'Cả hai Đàng đều chú trọng phát triển kinh tế.',
          'Chính quyền chúa Trịnh đẩy mạnh xây dựng nhiều công trình nguy nga.',
          'Các chúa đều ra sức củng cố quyền lực vững mạnh.'
        ],
        correctAnswer: 0,
        explanation: 'Để xây dựng thế lực và tìm không gian sinh tồn mới, chúa Nguyễn ở Đàng Trong đã đẩy mạnh công cuộc khai hoang mở mang bờ cõi về phía Nam và xác lập chủ quyền biển đảo Hoàng Sa, Trường Sa.',
        topic: 'Bài 5: Xung đột Trịnh - Nguyễn',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'ls8-gk1-dung-sai',
    title: 'Lịch Sử 8 - Chuyên Đề Trắc Nghiệm Đúng / Sai (8 Câu Chuẩn)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: '8 câu hỏi trắc nghiệm Đúng - Sai bám sát từng nhận định trong Đề cương ôn tập Lịch Sử 8 THCS Bát Tràng.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      {
        id: 'ls-tf-1',
        content: 'Nhận định sau ĐÚNG hay SAI: "Điểm tương đồng cơ bản giữa Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ là cuộc cách mạng tư sản không triệt để."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Cả hai đều không triệt để vì chưa giải quyết triệt để vấn đề ruộng đất cho nông dân và chưa xóa bỏ chế độ nô lệ (ở Bắc Mỹ).',
        topic: 'So sánh CMTS Anh & Bắc Mỹ',
        difficulty: 'medium'
      },
      {
        id: 'ls-tf-2',
        content: 'Nhận định sau ĐÚNG hay SAI: "Điểm tương đồng cơ bản giữa Cách mạng tư sản Anh và Cách mạng tư sản Pháp là diễn ra dưới hình thức nội chiến."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Ở Anh là nội chiến giữa Quốc hội và phe Nhà vua; ở Pháp là cuộc nội chiến quyết liệt giữa giai cấp tư sản - quần chúng nhân dân chống phe phong kiến phản động.',
        topic: 'So sánh CMTS Anh & Pháp',
        difficulty: 'medium'
      },
      {
        id: 'ls-tf-3',
        content: 'Nhận định sau ĐÚNG hay SAI: "Hệ quả của cuộc xung đột Nam - Bắc triều là đã chia đất nước thành Đàng Trong và Đàng Ngoài."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Cuộc xung đột Trịnh - Nguyễn mới là cuộc phân tranh chia cắt đất nước thành Đàng Trong và Đàng Ngoài.',
        topic: 'Xung đột Nam - Bắc triều',
        difficulty: 'easy'
      },
      {
        id: 'ls-tf-4',
        content: 'Nhận định sau ĐÚNG hay SAI: "Hệ quả của cuộc xung đột Trịnh - Nguyễn là đã chia đất nước thành Đàng Trong và Đàng Ngoài."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Cuộc chiến kéo dài gần nửa thế kỉ giữa Trịnh và Nguyễn đã dẫn đến việc chia cắt Đại Việt thành hai Đàng lấy sông Gianh làm giới tuyến.',
        topic: 'Xung đột Trịnh - Nguyễn',
        difficulty: 'easy'
      },
      {
        id: 'ls-tf-5',
        content: 'Nhận định sau ĐÚNG hay SAI: "Các chúa Nguyễn đã từng bước xác lập chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Từ thế kỉ XVII, các chúa Nguyễn đã thành lập Đội Hoàng Sa và Đội Bắc Hải để thực thi chủ quyền khai thác và cắm mốc.',
        topic: 'Chủ quyền Hoàng Sa - Trường Sa',
        difficulty: 'easy'
      },
      {
        id: 'ls-tf-6',
        content: 'Nhận định sau ĐÚNG hay SAI: "Các vua nhà Nguyễn đã từng bước xác lập chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Dưới triều Nguyễn (từ vua Gia Long, Minh Mạng), chủ quyền tiếp tục được củng cố bằng việc dựng bia chủ quyền, vẽ bản đồ, xây miếu thờ và trồng cây.',
        topic: 'Chủ quyền Hoàng Sa - Trường Sa',
        difficulty: 'easy'
      },
      {
        id: 'ls-tf-7',
        content: 'Nhận định sau ĐÚNG hay SAI: "“Bãi cát vàng” là tên gọi đầu tiên của quần đảo Trường Sa."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. "Bãi Cát Vàng" (hoặc Cồn Vàng) là tên gọi cổ trong các thư tịch lịch sử Việt Nam dùng để chỉ chung quần đảo Hoàng Sa và Trường Sa, trong đó Hoàng Sa theo chữ Hán có nghĩa là Cát Vàng.',
        topic: 'Chủ quyền Hoàng Sa - Trường Sa',
        difficulty: 'medium'
      },
      {
        id: 'ls-tf-8',
        content: 'Nhận định sau ĐÚNG hay SAI về yếu tố giúp Anh đi đầu trong CM công nghiệp: "Có sự hỗ trợ vốn và công nghệ to lớn từ các quốc gia châu Âu lân cận."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Nước Anh tự tích lũy tư bản thông qua bóc lột thuộc địa và phong trào rào đất cướp ruộng, chứ không phải nhận sự hỗ trợ từ các nước châu Âu lân cận.',
        topic: 'Cách mạng công nghiệp ở Anh',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'dl8-gk1-tracnghiem',
    title: 'Địa Lí 8 - Đề Cương Giữa HK1 (10 Câu Trắc Nghiệm Chuẩn)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: 'Trọn vẹn 10 câu trắc nghiệm nhiều phương án lựa chọn phân môn Địa Lí theo đề cương ôn tập giữa HK1 THCS Bát Tràng (Bài 1 & Bài 2).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'dl-sum-1',
        title: 'Vị trí địa lí và phạm vi lãnh thổ Việt Nam',
        keyPoints: [
          'Điểm cực Đông trên đất liền thuộc tỉnh Khánh Hòa (Mũi Đôi, Vạn Ninh).',
          'Đường biên giới trên đất liền: Dài khoảng 4.600 km.',
          'Đường bờ biển: Dài 3.260 km hình chữ S.',
          'Tổng diện tích (đất liền và hải đảo): 331.344 km².',
          'Thiên nhiên mang tính chất nhiệt đới ẩm gió mùa do nằm trong vùng nội chí tuyến bán cầu Bắc và giáp Biển Đông.'
        ],
        formulaOrRule: 'Cực Đông: Khánh Hòa | Biên giới bộ: 4.600km | Bờ biển: 3.260km | Diện tích: 331.344 km²'
      },
      {
        id: 'dl-sum-2',
        title: 'Đặc điểm 4 vùng núi chính của Việt Nam',
        keyPoints: [
          'Vùng núi Tây Bắc: Có các dãy núi cao, đồ sộ, tiêu biểu là dãy Hoàng Liên Sơn đỉnh Fansipan 3.143m.',
          'Vùng núi Đông Bắc: Đồi núi thấp, các cánh cung chụm đầu ở Tam Đảo; địa hình các-xtơ (karst) đá vôi độc đáo (vịnh Hạ Long, hồ Ba Bể).',
          'Vùng núi Trường Sơn Bắc: Các dãy núi song song, so le nhau, địa hình thấp dần từ tây sang đông.',
          'Vùng núi Trường Sơn Nam: Các cao nguyên badan xếp tầng, bề mặt tương đối bằng phẳng (Lâm Viên, Đắk Lắk, Pleiku...).'
        ]
      }
    ],
    questions: [
      {
        id: 'dl-1',
        content: 'Điểm cực Đông trên đất liền của nước ta thuộc tỉnh nào?',
        options: ['Tuyên Quang', 'Điện Biên', 'Khánh Hòa', 'Cà Mau'],
        correctAnswer: 2,
        explanation: 'Điểm cực Đông đất liền thuộc Mũi Đôi, bán đảo Hòn Gốm, xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa.',
        topic: 'Bài 1: Vị trí địa lí',
        difficulty: 'easy'
      },
      {
        id: 'dl-2',
        content: 'Đường biên giới trên đất liền của Việt Nam dài khoảng bao nhiêu ki-lô-mét (km)?',
        options: ['4600km', '2360km', '3260km', '1650km'],
        correctAnswer: 0,
        explanation: 'Đường biên giới trên đất liền của nước ta dài khoảng 4.600 km (giáp Trung Quốc, Lào, Campuchia).',
        topic: 'Bài 1: Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-3',
        content: 'Tổng diện tích (gồm cả phần đất liền và hải đảo) của Việt Nam là bao nhiêu?',
        options: ['4600 km²', '3260 km²', '331.344 km²', '2360km²'],
        correctAnswer: 2,
        explanation: 'Theo Niên giám thống kê chính thức, tổng diện tích tự nhiên của Việt Nam là 331.344 km².',
        topic: 'Bài 1: Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-4',
        content: 'Địa hình các-xtơ khá phổ biến, có những cảnh quan đẹp như vùng hồ Ba Bể, vịnh Hạ Long là đặc điểm của miền địa hình nào?',
        options: ['Vùng núi Tây Bắc', 'Vùng núi Đông Bắc', 'Vùng Trường Sơn Bắc', 'Vùng Trường Sơn Nam'],
        correctAnswer: 1,
        explanation: 'Vùng núi Đông Bắc có tầng đá vôi dày và rộng lớn, tạo nên địa hình karst nhiệt đới kỳ vĩ như Vịnh Hạ Long, hồ Ba Bể.',
        topic: 'Bài 2: Vùng núi Đông Bắc',
        difficulty: 'easy'
      },
      {
        id: 'dl-5',
        content: 'Đặc điểm nào sau đây thể hiện rõ nhất địa hình vùng núi Tây Bắc?',
        options: [
          'Chủ yếu là đồi núi thấp, các dãy núi có hướng vòng cung.',
          'Có nhiều cao nguyên badan xếp tầng với bề mặt tương đối bằng phẳng.',
          'Có các dãy núi cao, đồ sộ, tiêu biểu là dãy Hoàng Liên Sơn.',
          'Địa hình chủ yếu là đồng bằng phù sa rộng lớn.'
        ],
        correctAnswer: 2,
        explanation: 'Tây Bắc là vùng núi cao và hiểm trở nhất nước ta, có dãy Hoàng Liên Sơn với đỉnh Fansipan cao 3.143 m.',
        topic: 'Bài 2: Vùng núi Tây Bắc',
        difficulty: 'easy'
      },
      {
        id: 'dl-6',
        content: 'Đặc điểm nào sau đây phù hợp với vùng núi Trường Sơn Bắc?',
        options: [
          'Có nhiều dãy núi cao đồ sộ nhất nước ta, địa hình hiểm trở nhất ở phía bắc.',
          'Các dãy núi chạy theo hướng vòng cung, mở rộng về phía bắc.',
          'Địa hình chủ yếu là các cao nguyên badan xếp tầng.',
          'Các dãy núi song song, so le nhau, địa hình thấp dần từ tây sang đông.'
        ],
        correctAnswer: 3,
        explanation: 'Trường Sơn Bắc gồm các dãy núi song song và so le nhau theo hướng Tây Bắc - Đông Nam, sườn dốc hẹp ngang.',
        topic: 'Bài 2: Vùng núi Trường Sơn Bắc',
        difficulty: 'medium'
      },
      {
        id: 'dl-7',
        content: 'Đặc điểm địa hình tiêu biểu của vùng núi Trường Sơn Nam là:',
        options: [
          'các cao nguyên badan xếp tầng, bề mặt tương đối bằng phẳng.',
          'các dãy núi hình cánh cung chụm lại ở Tam Đảo.',
          'các đồng bằng phù sa rộng lớn xen kẽ với núi cao.',
          'địa hình núi cao liên tục, chủ yếu có hướng đông – tây.'
        ],
        correctAnswer: 0,
        explanation: 'Trường Sơn Nam có đặc trưng nổi bật là các khối núi dốc đứng ở sườn đông và các cao nguyên badan rộng lớn xếp tầng ở phía tây.',
        topic: 'Bài 2: Vùng núi Trường Sơn Nam',
        difficulty: 'medium'
      },
      {
        id: 'dl-8',
        content: 'Địa hình núi cao nước ta tập trung chủ yếu ở:',
        options: ['Vùng núi Tây Bắc', 'Vùng núi Trường Sơn Bắc', 'Vùng núi và cao nguyên Trường Sơn Nam', 'Vùng núi Đông Bắc'],
        correctAnswer: 0,
        explanation: 'Địa hình núi cao trên 2.000m của nước ta tập trung chủ yếu ở vùng núi Tây Bắc (dãy Hoàng Liên Sơn).',
        topic: 'Bài 2: Vùng núi Tây Bắc',
        difficulty: 'easy'
      },
      {
        id: 'dl-9',
        content: 'Dạng địa hình nào là bộ phận quan trọng nhất trong cấu trúc địa hình Việt Nam?',
        options: ['Đồi núi.', 'Đồng bằng.', 'Cao nguyên.', 'Bán bình nguyên.'],
        correctAnswer: 0,
        explanation: 'Đồi núi chiếm tới 3/4 diện tích lãnh thổ, là xương sống và là bộ phận quan trọng nhất cấu thành địa hình Việt Nam.',
        topic: 'Bài 2: Đặc điểm chung địa hình',
        difficulty: 'easy'
      },
      {
        id: 'dl-10',
        content: 'Vị trí địa lí làm cho thiên nhiên nước ta mang tính chất:',
        options: ['cận nhiệt đới trên núi.', 'nhiệt đới khô trên núi.', 'nhiệt đới ẩm gió mùa.', 'cận xích đạo gió mùa.'],
        correctAnswer: 2,
        explanation: 'Nằm trong vành đai nội chí tuyến Bắc bán cầu lại tiếp giáp với Biển Đông nên khí hậu và thiên nhiên nước ta mang tính chất nhiệt đới ẩm gió mùa.',
        topic: 'Bài 1: Vị trí địa lí',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'dl8-gk1-dung-sai',
    title: 'Địa Lí 8 - Chuyên Đề Trắc Nghiệm Đúng / Sai (2 Nhóm Câu - 8 Nhận Định)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: 'Bám sát trọn vẹn Phần 2 Dạng 2 Trắc nghiệm đúng sai môn Địa Lí 8 THCS Bát Tràng.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      {
        id: 'dl-tf-1a',
        content: 'Về phạm vi lãnh thổ Việt Nam, nhận định sau ĐÚNG hay SAI: "Lãnh thổ Việt Nam chỉ bao gồm phần đất liền, không bao gồm các đảo và quần đảo."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Lãnh thổ Việt Nam là một khối thống nhất toàn vẹn gồm vùng đất (đất liền + hải đảo), vùng biển và vùng trời.',
        topic: 'Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-1b',
        content: 'Về phạm vi lãnh thổ Việt Nam, nhận định sau ĐÚNG hay SAI: "Các đảo và quần đảo là bộ phận thuộc phạm vi lãnh thổ Việt Nam."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Hàng nghìn hòn đảo cùng hai quần đảo Hoàng Sa và Trường Sa là bộ phận thiêng liêng không thể tách rời của lãnh thổ Việt Nam.',
        topic: 'Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-1c',
        content: 'Về phạm vi lãnh thổ Việt Nam, nhận định sau ĐÚNG hay SAI: "Vùng trời Việt Nam là khoảng không gian bao trùm lên vùng đất và vùng biển thuộc chủ quyền Việt Nam."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Vùng trời là khoảng không gian vô tận phía trên bao trùm lên toàn bộ vùng đất và vùng biển chủ quyền của quốc gia.',
        topic: 'Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-1d',
        content: 'Về ý nghĩa vị trí địa lí, nhận định sau ĐÚNG hay SAI: "Vị trí và phạm vi lãnh thổ nước ta chỉ có ý nghĩa về mặt tự nhiên, không có ý nghĩa về kinh tế và quốc phòng."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Vị trí địa lí có ý nghĩa chiến lược sâu sắc về kinh tế (giao thương hàng hải, cửa ngõ ra biển) và quốc phòng an ninh.',
        topic: 'Ý nghĩa vị trí địa lí',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-2a',
        content: 'Về tác động của địa hình, nhận định sau ĐÚNG hay SAI: "Địa hình đồng bằng tương đối bằng phẳng, thuận lợi cho việc xây dựng cơ sở hạ tầng và phát triển nhiều hoạt động kinh tế."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Địa hình bằng phẳng tạo điều kiện thuận lợi cho định cư tập trung, canh tác lúa nước và phát triển đô thị, công nghiệp.',
        topic: 'Địa hình và kinh tế',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-2b',
        content: 'Về giao thông đồi núi, nhận định sau ĐÚNG hay SAI: "Các khu vực đồi núi thường thuận lợi hơn đồng bằng cho việc xây dựng các tuyến giao thông đường bộ thẳng, ít tốn kém."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Khu vực đồi núi hiểm trở, nhiều đèo dốc quanh co, thường xuyên sạt lở nên thi công giao thông rất khó khăn và tốn kém kinh phí hơn đồng bằng.',
        topic: 'Địa hình và giao thông',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-2c',
        content: 'Về đồng bằng châu thổ, nhận định sau ĐÚNG hay SAI: "Hai đồng bằng châu thổ lớn nhất nước ta được hình thành chủ yếu do quá trình bồi tụ phù sa của sông."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. ĐB sông Hồng được bồi tụ bởi hệ thống sông Hồng và sông Thái Bình; ĐB sông Cửu Long được bồi tụ bởi hệ thống sông Mê Kông.',
        topic: 'Đồng bằng châu thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-tf-2d',
        content: 'Về phân bố dân cư, nhận định sau ĐÚNG hay SAI: "Sự khác nhau giữa địa hình miền núi và đồng bằng không ảnh hưởng đến sự phân bố dân cư và hoạt động sản xuất."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Địa hình có tính quyết định rất lớn: Đồng bằng tập trung dân cư đông đúc, công nghiệp trù phú; miền núi dân cư thưa thớt hơn, thế mạnh là lâm nghiệp và khoáng sản.',
        topic: 'Địa hình và dân cư',
        difficulty: 'easy'
      }
    ]
  }
];
