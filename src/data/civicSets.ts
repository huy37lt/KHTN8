import { QuizSet } from '../types/quiz';

export const CIVIC_QUIZ_SETS: QuizSet[] = [
  {
    id: 'gdcd8-gk1-tracnghiem',
    title: 'GDCD 8 - Đề Cương Giữa HK1 (30 Câu Trắc Nghiệm Chuẩn)',
    subject: 'Giáo Dục Công Dân',
    grade: 'Lớp 8B',
    description: 'Trọn vẹn 30 câu hỏi trắc nghiệm nhiều phương án lựa chọn theo đúng đề cương ôn tập giữa HK1 THCS Bát Tràng (Bài 1, Bài 2, Bài 3).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'gdcd-sum-1',
        title: 'Tự hào truyền thống dân tộc Việt Nam (Bài 1)',
        keyPoints: [
          'Khái niệm: Truyền thống dân tộc là những giá trị vật chất và tinh thần hình thành trong quá trình lịch sử lâu dài của một dân tộc, được truyền từ thế hệ này sang thế hệ khác.',
          'Các truyền thống tiêu biểu: Yêu nước nồng nàn, đoàn kết, nhân nghĩa, cần cù lao động, hiếu học, hiếu thảo (câu ca dao: "Chí tâm niệm Phật đêm ngày / Cầu cho cha mẹ sống tày non cao"), kiên cường chống giặc ngoại xâm ("Giặc đến nhà đàn bà cũng đánh").',
          'Nghệ thuật dân gian truyền thống: Dân ca Quan họ Bắc Ninh, Đờn ca tài tử Nam Bộ, Hát Then (Tày, Nùng, Thái), Ví - Giặm Nghệ Tĩnh.'
        ]
      },
      {
        id: 'gdcd-sum-2',
        title: 'Tôn trọng sự đa dạng dân tộc & Cần cù sáng tạo (Bài 2 & 3)',
        keyPoints: [
          'Tôn trọng đa dạng dân tộc: Không kì thị màu da, phong tục hay ngôn ngữ; tôn trọng trang phục và nét đẹp văn hóa của các dân tộc thiểu số và bạn bè thế giới.',
          'Cần cù: Chăm chỉ, chịu khó làm việc thường xuyên, không ngại khó, ngại khổ.',
          'Sáng tạo: Luôn suy nghĩ, tìm tòi, cải tiến phương pháp để nâng cao năng suất, chất lượng và hiệu quả lao động ("Một phút nghĩ hay hơn cả ngày quần quật").',
          'Mối quan hệ: Cần cù là nền tảng để phát huy sáng tạo và ngược lại. Sáng tạo không phải chỉ là bẩm sinh mà hoàn toàn có thể rèn luyện được trong thực tế!'
        ]
      }
    ],
    questions: [
      {
        id: 'gdcd-1',
        content: 'Nội dung nào sau đây không phải là những truyền thống tốt đẹp của dân tộc Việt Nam?',
        options: ['Ích kỉ, keo kiệt.', 'Yêu nước.', 'Cần cù lao động.', 'Đoàn kết.'],
        correctAnswer: 0,
        explanation: 'Ích kỉ, keo kiệt là tính xấu của cá nhân, không phải là truyền thống tốt đẹp của dân tộc Việt Nam.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-2',
        content: 'Hành vi nào dưới đây không phải là biểu hiện của lòng tự hào về truyền thống dân tộc Việt Nam?',
        options: [
          'Giới thiệu với bạn bè quốc tế về nghệ thuật đờn ca tài tử.',
          'Sáng tác các tác phẩm thơ ca ca ngợi vẻ đẹp của đất nước.',
          'Lấn chiếm, xâm phạm các khu di tích lịch sử - văn hóa.',
          'Tích cực tham gia các lễ hội truyền thống của quê hương.'
        ],
        correctAnswer: 2,
        explanation: 'Hành vi lấn chiếm, xâm phạm di tích lịch sử - văn hóa là phá hoại di sản, vi phạm pháp luật và không tôn trọng truyền thống.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-3',
        content: 'Hành vi nào sau đây đã thể hiện lòng tự hào về truyền thống của dân tộc Việt Nam?',
        options: [
          'Chị K từ chối tham gia hoạt động thiện nguyện ở địa phương.',
          'Gia đình và X lấn chiếm đất đai của khu di tích lịch sử - văn hóa.',
          'Học sinh lớp 8A tham gia dâng hương để tưởng nhớ các vua Hùng.',
          'Anh T chê bai những người mặc trang phục truyền thống là lạc hậu.'
        ],
        correctAnswer: 2,
        explanation: 'Dâng hương tưởng nhớ các vua Hùng thể hiện truyền thống đạo lý "Uống nước nhớ nguồn" của dân tộc.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-4',
        content: 'Những giá trị vật chất và tinh thần hình thành trong quá trình lịch sử lâu dài của một dân tộc, được truyền từ thế hệ này sang thế hệ khác - đó là nội dung của khái niệm nào sau đây?',
        options: ['Truyền thống gia đình.', 'Truyền thống dòng họ.', 'Truyền thống vùng miền.', 'Truyền thống dân tộc.'],
        correctAnswer: 3,
        explanation: 'Đó là định nghĩa chính xác của khái niệm Truyền thống dân tộc trong SGK GDCD 8.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-5',
        content: 'Câu ca dao “Chí tâm niệm Phật đêm ngày/ Cầu cho cha mẹ sống tày non cao” phản ánh về truyền thống tốt đẹp nào của dân tộc Việt Nam?',
        options: ['Đoàn kết.', 'Yêu nước.', 'Hiếu học.', 'Hiếu thảo.'],
        correctAnswer: 3,
        explanation: 'Câu ca dao cầu chúc sức khỏe, trường thọ cho cha mẹ thể hiện lòng hiếu thảo của con cái đối với đấng sinh thành.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-6',
        content: 'Nội dung nào sau đây không phản ánh đúng giá trị các truyền thống của dân tộc Việt Nam?',
        options: [
          'Góp phần tích cực vào quá trình phát triển của mỗi cá nhân.',
          'Hòa tan giá trị văn hóa của Việt Nam trong quá trình hội nhập.',
          'Là nền tảng cho lòng tự hào và sự phát triển của mỗi người.',
          'Là nền tảng để xây dựng đất nước phát triển vững mạnh.'
        ],
        correctAnswer: 1,
        explanation: 'Truyền thống giúp dân tộc ta "hòa nhập chứ không hòa tan", giữ gìn bản sắc riêng trong quá trình phát triển.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-7',
        content: 'Ý kiến nào dưới đây đúng khi bàn về truyền thống dân tộc?',
        options: [
          'Trong thời đại mở cửa, hội nhập, truyền thống dân tộc không còn quan trọng.',
          'Giữ gìn truyền thống dân tộc là trách nhiệm riêng của cán bộ quản lí văn hóa.',
          'Dân tộc Việt Nam có nhiều truyền thống tốt đẹp, đáng tự hào với bạn bè quốc tế.',
          'Truyền thống dân tộc không đem lại giá trị đối với sự phát triển của mỗi người.'
        ],
        correctAnswer: 2,
        explanation: 'Dân tộc Việt Nam có bề dày hàng nghìn năm văn hiến với nhiều truyền thống tốt đẹp đáng tự hào.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-8',
        content: 'Câu tục ngữ nào dưới đây phản ánh về truyền thống yêu nước, đoàn kết chống ngoại xâm của dân tộc Việt Nam?',
        options: [
          'Mau sao thì nắng, vắng sao thì mưa.',
          'Giặc đến nhà đàn bà cũng đánh.',
          'Không thầy đố mày làm nên.',
          'Đi một ngày đàng học một sàng khôn.'
        ],
        correctAnswer: 1,
        explanation: '"Giặc đến nhà đàn bà cũng đánh" thể hiện tinh thần yêu nước quật cường, toàn dân đánh giặc của dân tộc ta.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-9',
        content: 'Tự hào về truyền thống dân tộc được hiểu là gì?',
        options: [
          'Trân trọng và phát huy những giá trị vật chất tốt đẹp của quốc gia, dân tộc.',
          'Hãnh diện, gìn giữ và phát huy các giá trị tinh thần của quốc gia, dân tộc.',
          'Trân trọng, hãnh diện và giữ gìn, phát huy các giá trị tốt đẹp của dân tộc.',
          'Hiểu biết, hãnh diện về những di sản văn hóa phi vật thể của dân tộc.'
        ],
        correctAnswer: 2,
        explanation: 'Tự hào về truyền thống dân tộc là sự trân trọng, hãnh diện và có ý thức giữ gìn, phát huy các giá trị tốt đẹp của dân tộc.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-10',
        content: 'Nội dung nào sau đây không phản ánh đúng giá trị các truyền thống của dân tộc Việt Nam?',
        options: [
          'Là tiền đề giúp mỗi cá nhân sống tốt, có ích hơn cho cộng đồng.',
          'Tạo sức mạnh để Việt Nam vượt qua mọi khó khăn, thử thách.',
          'Hòa tan giá trị văn hóa của Việt Nam trong quá trình hội nhập.',
          'Là nền tảng tạo nên bản sắc văn hoá của dân tộc Việt Nam.'
        ],
        correctAnswer: 2,
        explanation: 'Truyền thống dân tộc khẳng định bản sắc riêng, giúp ta không bị hòa tan khi hội nhập thế giới.',
        topic: 'Bài 1: Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-11',
        content: 'Hành vi nào dưới đây là biểu hiện tôn trọng sự đa dạng của các dân tộc và các nền văn hóa trên thế giới?',
        options: [
          'Kì thị, phân biệt giữa dân tộc đa số và dân tộc thiểu số.',
          'Tôn trọng tính cách, truyền thống… của các dân tộc.',
          'Kì thị, phân biệt chủng tộc giữa người da trắng và da màu.',
          'Từ chối tìm hiểu những giá trị tốt đẹp của các dân tộc.'
        ],
        correctAnswer: 1,
        explanation: 'Tôn trọng sự đa dạng văn hóa thể hiện ở việc tôn trọng bản sắc, tính cách, phong tục tập quán của mọi dân tộc.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-12',
        content: 'Em nên đồng tình với ý kiến của nhân vật nào dưới đây?',
        options: [
          'Bạn T nghĩ “chỉ nên tôn trọng, học hỏi những dân tộc giàu có”.',
          'Anh P nghĩ: “nên tiếp thu tất cả các thành tựu văn hóa nước ngoài”.',
          'Chị Q cho rằng: “mọi dân tộc đều có cái hay, cái đẹp để học hỏi”.',
          'Anh K cho rằng: “không nên tiếp thu, học hỏi văn hóa bên ngoài”.'
        ],
        correctAnswer: 2,
        explanation: 'Ý kiến của chị Q là chuẩn mực và đúng đắn: Mỗi dân tộc đều sở hữu những nét tinh hoa độc đáo đáng trân trọng và học tập.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-13',
        content: 'Ý kiến nào dưới đây không đúng khi bàn về vấn đề “Tôn trọng sự đa dạng của các dân tộc và các nền văn hoá trên thế giới”?',
        options: [
          'Cần phê phán các hành vi kì thị, phân biệt chủng tộc, văn hóa.',
          'Chỉ nên tôn trọng, học hỏi văn hóa của những dân tộc giàu có.',
          'Cần tiếp thu có chọn lọc các thành tựu văn hóa của bên ngoài.',
          'Mọi dân tộc đều có những nét đẹp riêng về tính cách, văn hóa.'
        ],
        correctAnswer: 1,
        explanation: 'Không được phân biệt đối xử hay chỉ tôn trọng nước giàu; mọi dân tộc dù lớn hay nhỏ đều có giá trị văn hóa riêng.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-14',
        content: 'Bạn S mang trong mình dòng máu Việt Nam và Mỹ gốc Phi nên thường xuyên bị bạn K trêu chọc về màu da. Nếu là bạn cùng lớp với S và K, em nên lựa chọn cách ứng xử nào sau đây?',
        options: [
          'Cùng với bạn K trêu chọc về màu da của bạn S.',
          'Không quan tâm vì không liên quan gì đến mình.',
          'Rủ rê các bạn trong lớp cùng tẩy chay, cô lập bạn S.',
          'An ủi, động viên S; khuyên K không nên trêu chọc S.'
        ],
        correctAnswer: 3,
        explanation: 'Cần thể hiện sự đồng cảm, an ủi bạn S và khuyên K dừng ngay hành vi phân biệt chủng tộc, bắt nạt bạn bè.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-15',
        content: 'Tôn trọng sự đa dạng của các dân tộc thể hiện ở hành động nào sau đây?',
        options: [
          'Giao lưu, tìm hiểu và trân trọng nét văn hóa của các dân tộc khác nhau.',
          'Chỉ tìm hiểu văn hóa dân tộc mình vì đó là bản sắc riêng quý giá.',
          'Chỉ giao lưu với các dân tộc có phong tục giống dân tộc mình.',
          'Chỉ chọn những phong tục phù hợp để tìm hiểu, bỏ qua cái khác.'
        ],
        correctAnswer: 0,
        explanation: 'Tôn trọng sự đa dạng thể hiện ở tinh thần cởi mở, sẵn sàng tìm hiểu, giao lưu và trân quý các giá trị văn hóa khác nhau.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-16',
        content: 'Biểu hiện cụ thể của việc tôn trọng sự đa dạng của các dân tộc là nội dung nào dưới đây?',
        options: [
          'Ưu tiên quyền lợi của dân tộc mình hơn dân tộc khác.',
          'Tôn trọng các dân tộc chiếm đa số dân số trên thế giới.',
          'Không kì thị, phân biệt đối xử với bất kỳ dân tộc nào.',
          'Quan tâm đến văn hóa khi có lễ hội lớn, nổi bật.'
        ],
        correctAnswer: 2,
        explanation: 'Không kì thị, đối xử bình đẳng và tôn trọng tất cả các dân tộc là biểu hiện cốt lõi của việc tôn trọng sự đa dạng.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-17',
        content: 'Tôn trọng sự đa dạng của các dân tộc giúp ích trực tiếp nhất cho việc nào dưới đây?',
        options: [
          'Duy trì nét văn hóa phổ biến của dân tộc mình.',
          'Mỗi cá nhân đều biết biểu diễn các nghệ thuật truyền thống.',
          'Giảm thiểu sự phát triển của những nét văn hóa mới.',
          'Giữ gìn bản sắc văn hóa và tăng cường đoàn kết dân tộc.'
        ],
        correctAnswer: 3,
        explanation: 'Tôn trọng đa dạng giúp củng cố khối đại đoàn kết toàn dân và bảo tồn bản sắc văn hóa phong phú của đất nước.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-18',
        content: 'Lan nghe bạn Mông kể về trang phục truyền thống của dân tộc mình. Việc nào sau đây cho thấy Lan tôn trọng sự đa dạng dân tộc?',
        options: [
          'Lắng nghe chăm chú và đặt câu hỏi để hiểu hơn về văn hóa H’Mông.',
          'Chỉ lắng nghe vì đây là yêu cầu của giáo viên trong giờ học.',
          'So sánh trang phục Mông với dân tộc mình để tìm điểm chưa hợp lý.',
          'Ghi nhớ thông tin cơ bản để làm bài kiểm tra môn GDCD.'
        ],
        correctAnswer: 0,
        explanation: 'Lắng nghe chân thành và tò mò tìm hiểu để hiểu sâu sắc hơn về nét văn hóa của bạn thể hiện sự tôn trọng thực sự.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-19',
        content: 'Tôn trọng sự đa dạng của các dân tộc và các nền văn hóa trên thế giới không mang lại ý nghĩa nào sau đây?',
        options: [
          'Giúp ta thêm tự hào vì dân tộc mình có trình độ cao hơn dân tộc khác.',
          'Giúp ta thêm hiểu biết, tiếp thu tinh hoa văn hóa của các dân tộc khác.',
          'Tăng cường tình hữu nghị, hòa bình và hợp tác giữa các quốc gia.',
          'Củng cố thêm niềm tin, sự đồng cảm và hòa hợp giữa các dân tộc.'
        ],
        correctAnswer: 0,
        explanation: 'Tôn trọng đa dạng không phải để phân định cao thấp hay coi thường dân tộc khác, mà là để bình đẳng, thấu hiểu và hợp tác.',
        topic: 'Bài 2: Tôn trọng sự đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-20',
        content: 'Loại hình văn nghệ dân gian nào dưới đây là nét đẹp truyền thống của đồng bào dân tộc Tày, Nùng, Thái ở Việt Nam?',
        options: ['Đờn ca tài tử.', 'Dân ca Quan họ.', 'Dân ca Ví - Giặm.', 'Thực hành hát Then.'],
        correctAnswer: 3,
        explanation: 'Hát Then là nét sinh hoạt văn hóa tín ngưỡng đặc sắc của người Tày, Nùng, Thái đã được UNESCO công nhận là di sản văn hóa phi vật thể.',
        topic: 'Bài 1 & 2: Di sản văn hóa dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-21',
        content: 'Hành vi nào sau đây là biểu hiện của lao động cần cù?',
        options: [
          'Tìm tòi, cải tiến phương pháp để lao động có hiệu quả.',
          'Chăm chỉ, chịu khó làm việc một cách thường xuyên.',
          'Sửa chữa sai lầm, rút bài học kinh nghiệm cho bản thân.',
          'Tìm cách giải quyết tối ưu để nâng cao hiệu quả lao động.'
        ],
        correctAnswer: 1,
        explanation: 'Cần cù là đức tính chăm chỉ, chịu khó làm việc liên tục, kiên trì không ngại vất vả.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-22',
        content: 'Cần cù và sáng tạo giúp con người điều gì sau đây?',
        options: [
          'Làm việc nhiều giờ để đạt thành tích cao nhất.',
          'Hoàn thành công việc nhanh nhất mà không cần cố gắng.',
          'Hoàn thành công việc hiệu quả, tạo ra giá trị mới.',
          'Tránh mọi rủi ro trong cuộc sống thường ngày.'
        ],
        correctAnswer: 2,
        explanation: 'Cần cù và sáng tạo giúp con người nâng cao năng suất, giải quyết vấn đề hiệu quả và tạo ra những giá trị vật chất, tinh thần mới.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-23',
        content: 'Hành vi nào sau đây không phải là biểu hiện của lao động sáng tạo?',
        options: [
          'Chăm chỉ, chịu khó làm việc một cách thường xuyên.',
          'Tìm tòi, cải tiến phương pháp để lao động có hiệu quả.',
          'Sửa chữa sai lầm, rút bài học kinh nghiệm cho bản thân.',
          'Tìm cách giải quyết tối ưu để nâng cao chất lượng lao động.'
        ],
        correctAnswer: 0,
        explanation: 'Chăm chỉ, chịu khó là biểu hiện của CẦN CÙ, còn sáng tạo là tìm tòi cách làm mới, cải tiến phương pháp.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-24',
        content: 'Câu tục ngữ “Một phút nghĩ hay hơn cả ngày quần quật” phản ánh về đức tính nào dưới đây?',
        options: ['Lao động cần cù.', 'Tinh thần hiếu học.', 'Lao động sáng tạo.', 'Tinh thần đoàn kết.'],
        correctAnswer: 2,
        explanation: '"Nghĩ hay" ở đây biểu thị trí tuệ, sự sáng tạo giúp tối ưu hóa công việc, tiết kiệm công sức mà hiệu quả vượt trội.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-25',
        content: 'Câu ca dao “Muốn no thì phải chăm làm / Một hột thóc vàng, chín hột mồ hôi” phản ánh về đức tính tốt đẹp nào sau đây?',
        options: ['Tinh thần hiếu học.', 'Lao động cần cù.', 'Tinh thần đoàn kết.', 'Lao động sáng tạo.'],
        correctAnswer: 1,
        explanation: '"Chăm làm", "chín hột mồ hôi" thể hiện sự cần cù, đổ công sức bền bỉ của người lao động để gặt hái thành quả.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-26',
        content: 'Cần cù và sáng tạo có mối quan hệ như thế nào?',
        options: [
          'Cần cù là nền tảng để phát huy sáng tạo và ngược lại.',
          'Cần cù là kết quả của sự sáng tạo liên tục.',
          'Chỉ cần sáng tạo là đủ, không cần cần cù.',
          'Chỉ cần cần cù, không cần sáng tạo vẫn đạt kết quả cao.'
        ],
        correctAnswer: 0,
        explanation: 'Cần cù và sáng tạo luôn bổ trợ cho nhau: cần cù tích lũy kinh nghiệm để nảy sinh sáng tạo, sáng tạo giúp công việc đạt hiệu quả cao hơn.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-27',
        content: 'Minh dành nhiều thời gian để làm mô hình khoa học. Khi gặp khó, Minh tự tìm tòi cách cải tiến thay vì bỏ cuộc. Hành động của Minh thể hiện điều nào sau đây?',
        options: [
          'Cần cù, chăm chỉ trong học tập.',
          'Cần cù, sáng tạo trong học tập.',
          'Sáng tạo vì tìm cách làm mới.',
          'Minh là người tôn trọng sự thật.'
        ],
        correctAnswer: 1,
        explanation: 'Dành nhiều thời gian không bỏ cuộc là Cần cù; tự tìm tòi cách cải tiến khi gặp khó là Sáng tạo.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-28',
        content: 'Hành vi nào dưới đây là biểu hiện của cần cù, sáng tạo?',
        options: [
          'Kiên định theo một cách duy nhất dù không hiệu quả.',
          'Sao chép ý tưởng của người khác để rút ngắn thời gian.',
          'Chỉ làm việc khi có hứng thú để đạt được kết quả cao.',
          'Kiên trì tìm cách giải bài toán khó bằng nhiều phương pháp.'
        ],
        correctAnswer: 3,
        explanation: 'Kiên trì (cần cù) và thử nghiệm nhiều phương pháp giải khác nhau (sáng tạo) là biểu hiện chuẩn mực.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-29',
        content: 'Tình huống: Anh K và chị X phụ trách cải tiến phần mềm kế toán của công ty. Anh K đưa ra nhiều ý tưởng đột phá nhưng chị X không ủng hộ vì ngại thay đổi mất công. Trong tình huống này, ai đã có ý thức sáng tạo trong lao động?',
        options: ['Anh K.', 'Chị X.', 'Anh K và chị X.', 'Không có nhân vật nào.'],
        correctAnswer: 0,
        explanation: 'Anh K chủ động tìm kiếm các giải pháp đột phá mới để nâng cấp phần mềm, đó chính là tinh thần lao động sáng tạo.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-30',
        content: 'Ý kiến nào dưới đây đúng khi bàn về vấn đề lao động cần cù, sáng tạo?',
        options: [
          'Lao động ở lĩnh vực nào cũng phải cần cù và sáng tạo.',
          'Lao động chân tay thì không cần phải sáng tạo, chăm chỉ.',
          'Trong lao động, việc nào dễ thì làm, việc khó thì bỏ qua.',
          'Chăm chỉ là khả năng bẩm sinh, không thể rèn luyện được.'
        ],
        correctAnswer: 0,
        explanation: 'Dù là lao động trí óc hay lao động chân tay, trong bất kì ngành nghề nào cũng đều cần đến sự cần cù và óc sáng tạo.',
        topic: 'Bài 3: Lao động cần cù, sáng tạo',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'gdcd8-gk1-dung-sai',
    title: 'GDCD 8 - Chuyên Đề Tình Huống Trắc Nghiệm Đúng / Sai (8 Câu Chuẩn)',
    subject: 'Giáo Dục Công Dân',
    grade: 'Lớp 8B',
    description: 'Chuyên đề 8 tình huống trắc nghiệm Đúng - Sai bám sát theo phần 2 Đề cương giữa học kì 1 GDCD 8 THCS Bát Tràng.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      {
        id: 'gdcd-tf-1',
        content: 'Tình huống 1: Lớp 7A tham gia giao lưu văn hóa, Lan đề nghị mặc trang phục dân tộc Thái và tập múa. Hùng chê: "Trang phục gì lòe loẹt, múa quê lắm". Nhận định sau ĐÚNG hay SAI: "Hành động chê bai trang phục dân tộc Thái của Hùng là thiếu tôn trọng bản sắc văn hóa của dân tộc khác."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Chê bai trang phục dân tộc anh em là biểu hiện kì thị, thiếu tôn trọng sự đa dạng văn hóa.',
        topic: 'Tình huống 1: Giao lưu văn hóa',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-2',
        content: 'Tình huống 1: Nhận định sau ĐÚNG hay SAI: "Việc mặc trang phục và biểu diễn múa dân tộc Thái trong hoạt động giao lưu giúp học sinh hiểu và trân trọng văn hóa các dân tộc."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Tham gia trải nghiệm và biểu diễn giúp lan tỏa và thấu hiểu nét đẹp văn hóa truyền thống.',
        topic: 'Tình huống 1: Giao lưu văn hóa',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-3',
        content: 'Tình huống 2: Nhóm Lan tập liên khúc Dân ca Quan họ Bắc Ninh. Một số bạn nói: "Quan họ cũ kĩ lắm, tụi mình thích nhạc trẻ hơn". Nhận định sau ĐÚNG hay SAI: "Nhận xét quan họ cũ kĩ của các bạn thể hiện sự trân trọng giá trị truyền thống quê hương."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Nhận xét như vậy là phiến diện, chưa thấy được giá trị nghệ thuật quý báu của di sản văn hóa phi vật thể nhân loại.',
        topic: 'Tình huống 2: Dân ca Quan họ',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-4',
        content: 'Tình huống 2: Nhận định sau ĐÚNG hay SAI: "Học sinh chỉ cần tự hào trong lòng về truyền thống quê hương, không cần làm gì thêm để giữ gìn và giới thiệu cho mọi người."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Bên cạnh niềm tự hào trong lòng, học sinh cần có những hành động thiết thực để bảo tồn, quảng bá và phát huy giá trị di sản.',
        topic: 'Tình huống 2: Dân ca Quan họ',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-5',
        content: 'Tình huống 3: Bạn C tham gia triển lãm văn hóa nhưng khi gặp người dân tộc thiểu số lại có thái độ kì thị về tiếng nói và trang phục của họ. Nhận định sau ĐÚNG hay SAI: "Hành vi kỳ thị của C với người dân tộc thiểu số là trái với tinh thần tôn trọng sự đa dạng văn hóa."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Mọi hành vi kì thị, miệt thị ngôn ngữ hoặc trang phục dân tộc đều đi ngược lại với đạo đức và pháp luật.',
        topic: 'Tình huống 3: Hành vi kì thị',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-6',
        content: 'Tình huống 4: Tuấn lấy clip lễ hội Gầu Tào của người Mông nhưng có chi tiết dàn dựng sai. Thầy giáo nhắc nhở cần chuẩn xác. Nhận định sau ĐÚNG hay SAI: "Lời nhắc của thầy giáo thể hiện yêu cầu đảm bảo tính chính xác khi giới thiệu văn hóa dân tộc."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Khi giới thiệu bản sắc văn hóa các dân tộc, thông tin phải chân thực, chính xác để thể hiện sự tôn trọng tối cao đối với cộng đồng đó.',
        topic: 'Tình huống 4: Giới thiệu lễ hội Gầu Tào',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-7',
        content: 'Tình huống 5: Bố mẹ bạn H nói: "Là người Việt chỉ cần xem đồ Việt, đồ nước ngoài chẳng có gì hay." Nhận định sau ĐÚNG hay SAI: "Tự hào về truyền thống dân tộc đồng nghĩa với việc không được xem bất kì chương trình nào của nước ngoài."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Tự hào dân tộc không có nghĩa là bài ngoại hay khép kín; chúng ta cần mở rộng giao lưu, học hỏi tinh hoa văn hóa nhân loại.',
        topic: 'Tình huống 5: Hội nhập và truyền thống',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-tf-8',
        content: 'Tình huống 6 & 7: Nhận định sau ĐÚNG hay SAI: "Làm theo cách cũ luôn là cách an toàn và hiệu quả nhất nên không cần cải tiến trong lao động."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Xã hội luôn vận động phát triển, nếu chỉ dập khuôn cách cũ sẽ bị tụt hậu và giảm sút năng suất, rất cần tinh thần sáng tạo cải tiến.',
        topic: 'Tình huống 6 & 7: Cần cù sáng tạo',
        difficulty: 'easy'
      }
    ]
  }
];
