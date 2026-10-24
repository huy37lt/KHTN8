import { QuizSet } from '../types/quiz';

export const EXPERIENTIAL_QUIZ_SETS: QuizSet[] = [
  {
    id: 'hdtn8-gk1-tracnghiem',
    title: 'HĐTN 8 - Đề Cương Giữa HK1 (20 Câu Trắc Nghiệm Chuẩn)',
    subject: 'HĐTN & GDĐP',
    grade: 'Lớp 8B',
    description: 'Trọn vẹn 20 câu hỏi trắc nghiệm nhiều phương án lựa chọn theo đúng đề cương ôn tập giữa HK1 THCS Bát Tràng môn HĐTN 8 (Chủ đề 1 & Chủ đề 2).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'hdtn-sum-1',
        title: 'Chủ đề 1: Em với nhà trường',
        keyPoints: [
          'Tình bạn đẹp: Nền tảng là sự chân thành, tôn trọng, lắng nghe và chia sẻ lẫn nhau (không bao che sai phạm, khuyết điểm).',
          'Dấu hiệu bắt nạt học đường: Nhắn tin đe dọa, cô lập bạn, chặn đường lục cặp đòi tiền.',
          'Phòng chống bắt nạt: Giữ thái độ nghiêm túc, thể hiện rõ sự không chấp nhận và tìm cách rời đi hoặc kêu to nhờ trợ giúp; KHÔNG giấu giếm im lặng.',
          'Bắt nạt trên mạng (Cyberbullying): Lén chụp ảnh biểu cảm không đẹp của bạn rồi đe dọa đăng lên mạng xã hội.',
          'Xây dựng truyền thống trường: Hưởng ứng phong trào "Dạy tốt - Học tốt", tham gia phong trào "Em yêu trường em", giữ gìn cảnh quan lớp học.'
        ]
      },
      {
        id: 'hdtn-sum-2',
        title: 'Chủ đề 2: Khám phá bản thân & Quản trị cảm xúc',
        keyPoints: [
          'Nhận biết tính cách: Quan sát biểu hiện thực tế của bản thân và lắng nghe nhận xét chân thành từ người thân, bạn bè.',
          'Nét tính cách tích cực: Chân thành, cởi mở, nhiệt tình và có tinh thần trách nhiệm.',
          'Xử lý cảm xúc tiêu cực: Hít thở sâu, dừng lại vài giây hoặc đi dạo để trấn an bản thân; suy nghĩ tích cực và rút ra bài học.',
          'Quy trình tranh luận chuẩn: Trình bày rõ ràng luận điểm -> Đưa ra lý lẽ, dẫn chứng minh họa -> Đưa ra kết luận chung.',
          'Thương thuyết: Tập trung vào tìm kiếm phương án hòa hợp, thỏa mãn lợi ích hoặc mong muốn của các bên (chọn lúc cha mẹ vui vẻ, thoải mái để thương thuyết).'
        ]
      }
    ],
    questions: [
      {
        id: 'hdtn-1',
        content: 'Yếu tố nào dưới đây là nền tảng quan trọng nhất để xây dựng và giữ gìn tình bạn đẹp?',
        options: [
          'Sự chân thành, tôn trọng, lắng nghe và chia sẻ lẫn nhau.',
          'Việc luôn bao che mọi sai phạm và khuyết điểm của bạn.',
          'Cùng sở thích tiêu xài tiền bạc và vui chơi giải trí.',
          'Sự so sánh năng lực học tập và cạnh tranh thành tích.'
        ],
        correctAnswer: 0,
        explanation: 'Sự chân thành, tôn trọng, lắng nghe và chia sẻ lẫn nhau là nền tảng cốt lõi của một tình bạn đẹp và bền vững.',
        topic: 'Chủ đề 1: Tình bạn đẹp',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-2',
        content: 'Hành vi nào sau đây là dấu hiệu của hiện tượng bắt nạt học đường?',
        options: [
          'Thảo luận sôi nổi để bảo vệ quan điểm cá nhân trong giờ học.',
          'Cùng bạn bè tham gia hoạt động thể thao sau giờ tan trường.',
          'Nhắn tin đe dọa, cô lập bạn, chặn đường lục cặp đòi tiền.',
          'Góp ý chân thành khi thấy bạn chưa hoàn thành nhiệm vụ nhóm.'
        ],
        correctAnswer: 2,
        explanation: 'Nhắn tin đe dọa, cô lập bạn, trấn lột tiền là những dấu hiệu rõ rệt của hành vi bắt nạt học đường nguy hiểm.',
        topic: 'Chủ đề 1: Phòng chống bắt nạt',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-3',
        content: 'Khi đối mặt trực tiếp với kẻ bắt nạt học đường, học sinh NÊN thực hiện hành động nào sau đây để bảo vệ bản thân?',
        options: [
          'Thể hiện thái độ hiếu chiến và thách thức lại kẻ bắt nạt.',
          'Giữ thái độ nghiêm túc, thể hiện rõ sự không chấp nhận và tìm cách rời đi hoặc kêu to nhờ trợ giúp.',
          'Âm thầm chịu đựng và giấu kín thông tin với gia đình, thầy cô.',
          'Rủ một nhóm bạn khác đến đánh trả để trả thù.'
        ],
        correctAnswer: 1,
        explanation: 'Giữ thái độ bình tĩnh, nghiêm túc, thể hiện rõ sự phản đối và nhanh chóng rời đến nơi an toàn hoặc kêu gọi trợ giúp.',
        topic: 'Chủ đề 1: Phòng chống bắt nạt',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-4',
        content: 'Hành vi nào dưới đây thể hiện việc KHÔNG NÊN làm trong việc phòng, tránh bắt nạt học đường?',
        options: [
          'Kể lại sự việc bị bắt nạt với thầy cô giáo hoặc cha mẹ.',
          'Giấu giếm thông tin và im lặng khi chứng kiến bạn khác bị bắt nạt.',
          'Tuyên truyền thông điệp \'Lớp học không có bắt nạt\'.',
          'Không phản hồi hoặc phát tán các tin nhắn đe dọa trên mạng.'
        ],
        correctAnswer: 1,
        explanation: 'Im lặng và giấu giếm là tiếp tay cho hành vi bạo lực; khi thấy bạn bị bắt nạt cần báo ngay với thầy cô hoặc người lớn.',
        topic: 'Chủ đề 1: Phòng chống bắt nạt',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-5',
        content: 'Việc làm nào dưới đây góp phần trực tiếp vào việc phát huy và xây dựng truyền thống nhà trường?',
        options: [
          'Chỉ tập trung học tập cá nhân, không tham gia các phong trào chung.',
          'Hưởng ứng tích cực phong trào thi đua \'Dạy tốt - Học tốt\' và giữ gìn cảnh quan trường lớp.',
          'Tự ý thay đổi các quy định, nội quy của nhà trường.',
          'Phê bình truyền thống nhà trường trên các trang mạng xã hội.'
        ],
        correctAnswer: 1,
        explanation: 'Hưởng ứng phong trào "Dạy tốt - Học tốt", rèn luyện đạo đức và giữ gìn vệ sinh, cảnh quan trường lớp góp phần phát huy truyền thống nhà trường.',
        topic: 'Chủ đề 1: Truyền thống nhà trường',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-6',
        content: 'Cuộc thi hoặc hoạt động nào thường do Đoàn Thanh niên Cộng sản Hồ Chí Minh và Đội TNTP Hồ Chí Minh phát động trong nhà trường nhằm giáo dục tình yêu trường lớp?',
        options: [
          'Cuộc thi \'Em yêu trường em\'.',
          'Giải thi đấu thể thao chuyên nghiệp cấp quốc gia.',
          'Chương trình khảo sát thị trường tiêu dùng của doanh nghiệp.',
          'Lễ hội ẩm thực đường phố tự phát.'
        ],
        correctAnswer: 0,
        explanation: 'Cuộc thi "Em yêu trường em" là phong trào thường niên do Đoàn - Đội phát động nhằm bồi đắp lòng tự hào và tình cảm gắn bó với mái trường.',
        topic: 'Chủ đề 1: Truyền thống nhà trường',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-7',
        content: 'Khi bạn thân của em có biểu hiện bị khủng hoảng tâm lý do bị một nhóm học sinh trêu ghẹo, cô lập, em nên xử lý như thế nào?',
        options: [
          'Xa lánh bạn để tránh bị nhóm học sinh đó bắt nạt lây.',
          'Lắng nghe, động viên bạn và cùng bạn báo cáo ngay với giáo viên chủ nhiệm.',
          'Đăng bài viết lên mạng xã hội để chỉ trích công khai nhóm bạn kia.',
          'Khuyên bạn nên bỏ học một thời gian để ở nhà.'
        ],
        correctAnswer: 1,
        explanation: 'Em cần ở bên lắng nghe, động viên tâm lý và cùng bạn trình bày với giáo viên chủ nhiệm để có biện pháp can thiệp kịp thời.',
        topic: 'Chủ đề 1: Tình bạn đẹp',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-8',
        content: 'Nội dung nào sau đây phản ánh đúng ý nghĩa của việc tham gia các hoạt động truyền thống nhà trường?',
        options: [
          'Bồi dưỡng niềm tự hào, tinh thần trách nhiệm và gắn kết tình cảm với thầy cô, bạn bè.',
          'Giúp học sinh miễn trừ tất cả các bài kiểm tra định kỳ.',
          'Là cơ hội để học sinh thể hiện cái tôi cá nhân vượt trội hơn người khác.',
          'Giảm bớt số tiết học các môn văn hóa bắt buộc.'
        ],
        correctAnswer: 0,
        explanation: 'Tham gia các hoạt động truyền thống giúp bồi dưỡng lòng tự hào về mái trường, ý thức trách nhiệm và tình cảm gắn bó thầy trò, bạn bè.',
        topic: 'Chủ đề 1: Truyền thống nhà trường',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-9',
        content: 'Hình thức bắt nạt nào dưới đây thuộc loại bắt nạt trên không gian mạng?',
        options: [
          'Giật cặp sách của bạn ở sân trường.',
          'Lén chụp ảnh biểu cảm không đẹp của bạn rồi đe dọa đăng lên mạng xã hội.',
          'Ngăn cấm không cho bạn tham gia đội bóng của lớp.',
          'Ép bạn phải trực nhật thay mình.'
        ],
        correctAnswer: 1,
        explanation: 'Lén chụp ảnh xấu rồi đe dọa đăng tải lên mạng xã hội là hành vi bạo lực mạng (cyberbullying) gây tổn thương danh dự người khác.',
        topic: 'Chủ đề 1: Bắt nạt qua mạng',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-10',
        content: 'Học sinh lớp 8 có thể đóng góp vào truyền thống \'Trường học thân thiện, học sinh tích cực\' bằng hành động cụ thể nào?',
        options: [
          'Tham gia tích cực các hoạt động thiện nguyện, giữ gìn vệ sinh chung.',
          'Mua sắm trang phục đắt tiền để nâng cao hình ảnh lớp.',
          'Chỉ tham gia hoạt động khi được giáo viên ghi điểm thưởng.',
          'Bỏ qua các vi phạm nội quy của bạn bè trong lớp.'
        ],
        correctAnswer: 0,
        explanation: 'Tích cực tham gia các phong trào thiện nguyện, giữ gìn khuôn viên trường lớp xanh sạch đẹp thể hiện nếp sống tích cực của học sinh.',
        topic: 'Chủ đề 1: Truyền thống nhà trường',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-11',
        content: 'Phương pháp nào hiệu quả giúp em nhận biết và xác định đúng nét đặc trưng trong tính cách của bản thân?',
        options: [
          'Quan sát biểu hiện thực tế của bản thân và lắng nghe nhận xét chân thành từ người thân, bạn bè.',
          'Tự suy đoán theo mong muốn chủ quan mà không cần kiểm chứng.',
          'Bắt chước hoàn toàn tính cách của một nhân vật nổi tiếng trên mạng.',
          'Đánh giá tính cách chỉ dựa vào kết quả điểm số các môn học.'
        ],
        correctAnswer: 0,
        explanation: 'Tự quan sát hành vi, thói quen và phản ứng của bản thân trong các tình huống, kết hợp lắng nghe góp ý chân tình từ mọi người xung quanh.',
        topic: 'Chủ đề 2: Khám phá bản thân',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-12',
        content: 'Nét tính cách nào sau đây mang ý nghĩa tích cực, cần được rèn luyện và phát huy ở lứa tuổi học sinh?',
        options: [
          'Hiếu thắng, luôn muốn hơn người khác bằng mọi giá.',
          'Nhút nhát, né tránh mọi hoạt động tập thể.',
          'Chân thành, cởi mở, nhiệt tình và có tinh thần trách nhiệm.',
          'Bảo thủ, không bao giờ chấp nhận ý kiến của người khác.'
        ],
        correctAnswer: 2,
        explanation: 'Sự chân thành, tính cởi mở, nhiệt tình và tinh thần trách nhiệm là những phẩm chất cao đẹp giúp học sinh phát triển nhân cách toàn diện.',
        topic: 'Chủ đề 2: Nét tính cách tích cực',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-13',
        content: 'Khi gặp phải một sự việc gây bực bội, nảy sinh cảm xúc tiêu cực, biện pháp đầu tiên em nên làm để lấy lại bình tĩnh là gì?',
        options: [
          'Lập tức tranh cãi gay gắt để giải tỏa sự tức giận.',
          'Hít thở sâu, dừng lại vài giây hoặc đi dạo để trấn an bản thân.',
          'Đập phá đồ đạc xung quanh.',
          'Đăng trạng thái giận dữ lên mạng xã hội.'
        ],
        correctAnswer: 1,
        explanation: 'Hít thở sâu vài nhịp, tạm dừng cuộc nói chuyện trong vài giây hoặc đi ra chỗ khác giúp não bộ hạ nhiệt cơn nóng giận.',
        topic: 'Chủ đề 2: Kiểm soát cảm xúc',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-14',
        content: 'Quy trình chuẩn để xây dựng cuộc tranh luận nhằm bảo vệ quan điểm cá nhân bao gồm các bước nào?',
        options: [
          'Trình bày rõ ràng luận điểm -> Đưa ra lý lẽ, dẫn chứng minh họa -> Đưa ra kết luận chung.',
          'Đưa ra kết luận -> Tranh cãi tự do -> Khẳng định mình luôn đúng.',
          'Đưa ra lý lẽ -> Bác bỏ ý kiến đối phương -> Bỏ dở cuộc tranh luận.',
          'Đọc tài liệu -> Giữ im lặng -> Đồng ý với số đông.'
        ],
        correctAnswer: 0,
        explanation: 'Quy trình tranh luận logic, thuyết phục: Nêu rõ luận điểm -> Đưa ra lý lẽ, dẫn chứng thực tế -> Đưa ra kết luận chung.',
        topic: 'Chủ đề 2: Kỹ năng tranh luận',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-15',
        content: 'Để cuộc tranh luận diễn ra văn minh và đạt hiệu quả cao, người tham gia cần giữ thái độ như thế nào?',
        options: [
          'Áp đặt ý kiến cá nhân và ngắt lời đối phương liên tục.',
          'Tôn trọng, lắng nghe ý kiến đối phương, bình tĩnh và thẳng thắn.',
          'Chỉ quan tâm đến việc thắng thua mà không cần dẫn chứng.',
          'Dùng từ ngữ đe dọa để ép người khác đồng ý.'
        ],
        correctAnswer: 1,
        explanation: 'Thái độ văn minh trong tranh luận là tôn trọng sự khác biệt, lắng nghe lập luận của đối phương, giữ bình tĩnh và nói năng nhã nhặn.',
        topic: 'Chủ đề 2: Kỹ năng tranh luận',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-16',
        content: 'Thương thuyết nhằm bảo vệ quan điểm cá nhân khác với tranh luận ở điểm cơ bản nào?',
        options: [
          'Thương thuyết tập trung vào việc tìm kiếm phương án hòa hợp, thỏa mãn lợi ích hoặc mong muốn của các bên.',
          'Thương thuyết luôn dùng bạo lực để giải quyết.',
          'Thương thuyết không cần lắng nghe ý kiến của đối phương.',
          'Thương thuyết chỉ thực hiện được giữa học sinh và giáo viên.'
        ],
        correctAnswer: 0,
        explanation: 'Tranh luận tập trung làm rõ đúng sai của luận điểm; trong khi thương thuyết hướng tới giải pháp đồng thuận đôi bên cùng chấp nhận được (win-win).',
        topic: 'Chủ đề 2: Kỹ năng thương thuyết',
        difficulty: 'medium'
      },
      {
        id: 'hdtn-17',
        content: 'Bước nào dưới đây giúp em điều chỉnh cảm xúc tiêu cực sang hướng tích cực khi đối mặt với thất bại hay thất vọng?',
        options: [
          'Đổ lỗi hoàn toàn cho hoàn cảnh hoặc người khác.',
          'Suy nghĩ lại sự việc một cách tích cực, tìm ra bài học kinh nghiệm cho bản thân.',
          'Tự dằn dỗi và chán nản kéo dài.',
          'Tránh né không bao giờ làm lại công việc đó nữa.'
        ],
        correctAnswer: 1,
        explanation: 'Nhìn nhận thất bại như một cơ hội để rút kinh nghiệm và hoàn thiện bản thân là tư duy tích cực giúp vượt qua nghịch cảnh.',
        topic: 'Chủ đề 2: Quản trị cảm xúc',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-18',
        content: 'Yếu tố nào sau đây là nguyên tắc quan trọng nhất khi lựa chọn thời điểm thương thuyết với cha mẹ hoặc người lớn?',
        options: [
          'Chọn lúc cha mẹ đang bận rộn hoặc mệt mỏi.',
          'Chọn lúc cha mẹ vui vẻ, thoải mái và có đủ thời gian lắng nghe.',
          'Chọn lúc đang xảy ra mâu thuẫn gay gắt.',
          'Đòi hỏi ngay lập tức vào bất kỳ lúc nào mình muốn.'
        ],
        correctAnswer: 1,
        explanation: 'Thời điểm thích hợp để trao đổi, thương thuyết hiệu quả là khi cha mẹ đang thư thái, có thời gian lắng nghe và cởi mở đón nhận ý kiến.',
        topic: 'Chủ đề 2: Kỹ năng thương thuyết',
        difficulty: 'easy'
      },
      {
        id: 'hdtn-19',
        content: 'Hiện tượng một học sinh từ bực bội chuyển sang thấu hiểu và thương bạn khi thấy bạn bị hỏng xe đạp đi bộ dưới trời nắng thể hiện điều gì?',
        options: [
          'Sự thay đổi cảm xúc linh hoạt nhờ nhận diện đúng bản chất bối cảnh.',
          'Sự thiếu kiên định trong lập trường tính cách.',
          'Tính cách nhút nhát, dễ bị tác động.',
          'Thói quen bao che cho sự đi muộn của bạn.'
        ],
        correctAnswer: 0,
        explanation: 'Khi hiểu rõ hoàn cảnh khó khăn của bạn, học sinh đã biết đặt mình vào vị trí của người khác (sự thấu cảm) để điều chỉnh cảm xúc phù hợp.',
        topic: 'Chủ đề 2: Nhận diện và làm chủ cảm xúc',
        difficulty: 'medium'
      },
      {
        id: 'hdtn-20',
        content: 'Biểu hiện nào sau đây chứng tỏ một học sinh có khả năng kiểm soát và điều chỉnh cảm xúc tốt?',
        options: [
          'Luôn bộc phát cơn giận dữ khi bạn bè làm trái ý.',
          'Đã biết làm chủ cảm xúc, bình tĩnh suy nghĩ và lựa chọn lời nói, hành vi phù hợp.',
          'Giấu kín mọi cảm xúc và không bao giờ chia sẻ với ai.',
          'Dễ dàng nản chí và buông xuôi khi gặp khó khăn.'
        ],
        correctAnswer: 1,
        explanation: 'Khả năng làm chủ cảm xúc thể hiện ở sự bình tĩnh, suy nghĩ thấu đáo trước khi nói hoặc hành động trong mọi tình huống.',
        topic: 'Chủ đề 2: Làm chủ cảm xúc',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'gddp8-gk1-duan',
    title: 'Giáo Dục Địa Phương 8 - Đề Cương & Dự Án Giữa HK1 (Hà Nội & Làng Gốm Bát Tràng)',
    subject: 'HĐTN & GDĐP',
    grade: 'Lớp 8B',
    description: 'Chủ đề Dự án học tập: "Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội" (trọng tâm Làng gốm Bát Tràng), kiến thức Thăng Long thời Mạc - Tây Sơn, chiến thắng Ngọc Hồi - Đống Đa 1789.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'gddp-sum-1',
        title: 'Dự án: Tinh hoa làng nghề, phố nghề Thăng Long - Hà Nội',
        keyPoints: [
          'Chủ đề: Giới thiệu về 1 phường/phố/làng nghề thủ công ở Thăng Long từ thời Mạc - thời Tây Sơn còn tồn tại đến ngày nay.',
          'Gợi ý hàng đầu cho THCS Bát Tràng: Làng gốm Bát Tràng (Gia Lâm, Hà Nội) - nôi gốm sứ cổ truyền bên bờ sông Hồng.',
          'Hình thức báo cáo tự chọn: Poster hoặc Infographic A3; Video thuyết minh 3–5 phút; Bài trình chiếu (PowerPoint/Canva) 6–10 slide.',
          'Tiêu chí đánh giá Đạt: Nội dung lịch sử đúng trọng tâm; sản phẩm rõ ràng có hình ảnh tư liệu nguồn; thuyết trình tự tin; có biên bản phân công hợp tác nhóm.'
        ]
      },
      {
        id: 'gddp-sum-2',
        title: 'Lịch sử Thăng Long - Hà Nội thời Mạc đến thế kỉ XVIII',
        keyPoints: [
          'Thăng Long thời Mạc - Tây Sơn: Trung tâm kinh tế, thủ công nghiệp và văn hóa lớn của cả nước.',
          'Kì tích chống ngoại xâm trên đất Hà Nội thế kỉ XVIII: Chiến thắng Ngọc Hồi - Đống Đa đại phá 29 vạn quân Mãn Thanh mùa xuân Kỷ Dậu 1789 của vua Quang Trung.'
        ]
      }
    ],
    questions: [
      {
        id: 'gddp-1',
        content: 'Tên chủ đề dự án kiểm tra giữa học kì 1 môn Giáo Dục Địa Phương 8 trường THCS Bát Tràng là gì?',
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
          'Bài trình chiếu từ 6–10 trang',
          'Cả ba hình thức trên đều được chấp nhận'
        ],
        correctAnswer: 3,
        explanation: 'Giáo viên cho phép các nhóm học sinh chọn 1 trong 3 hình thức: Poster/Infographic A3, Video 3-5 phút, hoặc Slide 6-10 trang.',
        topic: 'Yêu cầu sản phẩm',
        difficulty: 'easy'
      },
      {
        id: 'gddp-3',
        content: 'Chiến thắng vang dội nào của nghĩa quân Tây Sơn dưới sự chỉ huy của vua Quang Trung diễn ra trên địa bàn Hà Nội vào mùa xuân Kỷ Dậu 1789?',
        options: [
          'Chiến thắng Ngọc Hồi - Đống Đa (quét sạch 29 vạn quân Thanh)',
          'Chiến thắng Chi Lăng - Xương Giang',
          'Chiến thắng Bạch Đằng',
          'Chiến thắng Rạch Gầm - Xoài Mút'
        ],
        correctAnswer: 0,
        explanation: 'Vua Quang Trung tiến quân thần tốc, đại phá quân Thanh tại đồn Ngọc Hồi và đồi Đống Đa mùng 5 Tết Kỷ Dậu 1789.',
        topic: 'Kì tích chống ngoại xâm',
        difficulty: 'easy'
      }
    ]
  }
];
