import { QuizSet } from '../types/quiz';

export const CIVIC_QUIZ_SETS: QuizSet[] = [
  {
    id: 'gdcd8-gk1-tracnghiem',
    title: 'GDCD 8 - Đề Cương Giữa HK1 (Truyền Thống Dân Tộc, Đa Dạng Văn Hóa & Lao Động)',
    subject: 'Giáo Dục Công Dân',
    grade: 'Lớp 8B',
    description: 'Bài 1: Tự hào về truyền thống dân tộc Việt Nam, Bài 2: Tôn trọng sự đa dạng của các dân tộc, Bài 3: Lao động cần cù, sáng tạo & xử lý tình huống thực tiễn.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'gdcd-sum-1',
        title: 'Tự hào truyền thống dân tộc Việt Nam',
        keyPoints: [
          'Khái niệm: Những giá trị vật chất và tinh thần tốt đẹp được hình thành trong lịch sử lâu dài, truyền từ thế hệ này sang thế hệ khác.',
          'Các truyền thống tiêu biểu: Yêu nước nồng nàn, đoàn kết, nhân nghĩa, hiếu học, hiếu thảo (câu ca dao: "Chí tâm niệm Phật đêm ngày / Cầu cho cha mẹ sống tày non cao"), kiên cường chống ngoại xâm.',
          'Nghệ thuật truyền thống: Dân ca Quan họ Bắc Ninh (UNESCO vinh danh), Đờn ca tài tử Nam Bộ, Hát Then (Tày, Nùng, Thái), Ví - Giặm Nghệ Tĩnh.'
        ]
      },
      {
        id: 'gdcd-sum-2',
        title: 'Tôn trọng sự đa dạng của các dân tộc & Lao động cần cù, sáng tạo',
        keyPoints: [
          'Tôn trọng đa dạng dân tộc: Không kì thị màu da, phong tục hay ngôn ngữ; tôn trọng trang phục và nét đẹp văn hóa của các dân tộc thiểu số và bạn bè năm châu.',
          'Cần cù: Chăm chỉ, chịu khó, làm việc thường xuyên, vượt qua khó khăn để hoàn thành tốt công việc.',
          'Sáng tạo: Luôn suy nghĩ, tìm tòi, cải tiến phương pháp để nâng cao năng suất, chất lượng và hiệu quả lao động.',
          'Mối quan hệ: Cần cù là nền tảng để phát huy sáng tạo và ngược lại. Sáng tạo KHÔNG PHẢI chỉ do bẩm sinh mà hoàn toàn có thể rèn luyện được qua thực tiễn!'
        ]
      }
    ],
    questions: [
      {
        id: 'gdcd-1',
        content: 'Nội dung nào sau đây KHÔNG PHẢI là những truyền thống tốt đẹp của dân tộc Việt Nam?',
        options: ['Ích kỉ, keo kiệt', 'Yêu nước', 'Cần cù lao động', 'Đoàn kết tương trợ'],
        correctAnswer: 0,
        explanation: 'Ích kỉ, keo kiệt là thói xấu cá nhân, hoàn toàn đối lập với truyền thống đoàn kết, tương thân tương ái của dân tộc.',
        topic: 'Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-2',
        content: 'Hành vi nào dưới đây thể hiện lòng tự hào về truyền thống của dân tộc Việt Nam?',
        options: [
          'Chị K từ chối tham gia hoạt động thiện nguyện ở địa phương',
          'Gia đình và X lấn chiếm đất đai của khu di tích lịch sử - văn hóa',
          'Học sinh lớp 8A tham gia dâng hương tưởng nhớ các vua Hùng tại đền Hùng',
          'Anh T chê bai những người mặc trang phục truyền thống là lạc hậu'
        ],
        correctAnswer: 2,
        explanation: 'Tham gia dâng hương tưởng nhớ công ơn các vua Hùng thể hiện truyền thống "Uống nước nhớ nguồn" của dân tộc.',
        topic: 'Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-3',
        content: 'Câu ca dao “Chí tâm niệm Phật đêm ngày / Cầu cho cha mẹ sống tày non cao” phản ánh về truyền thống tốt đẹp nào?',
        options: ['Đoàn kết', 'Yêu nước', 'Hiếu học', 'Hiếu thảo'],
        correctAnswer: 3,
        explanation: 'Câu ca dao ca ngợi tấm lòng thơm thảo, kính trọng và cầu chúc cha mẹ trường thọ, là biểu hiện sâu sắc của truyền thống hiếu thảo.',
        topic: 'Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-4',
        content: 'Câu tục ngữ nào dưới đây phản ánh về truyền thống yêu nước, đoàn kết chống ngoại xâm của dân tộc Việt Nam?',
        options: [
          'Mau sao thì nắng, vắng sao thì mưa',
          'Giặc đến nhà đàn bà cũng đánh',
          'Không thầy đố mày làm nên',
          'Đi một ngày đàng học một sàng khôn'
        ],
        correctAnswer: 1,
        explanation: '“Giặc đến nhà đàn bà cũng đánh” ca ngợi tinh thần bất khuất, toàn dân đoàn kết một lòng đứng lên đánh giặc cứu nước.',
        topic: 'Truyền thống dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-5',
        content: 'Hành vi nào dưới đây là biểu hiện tôn trọng sự đa dạng của các dân tộc và các nền văn hóa trên thế giới?',
        options: [
          'Kì thị, phân biệt giữa dân tộc đa số và dân tộc thiểu số',
          'Tôn trọng tính cách, tập quán và trang phục truyền thống của các dân tộc',
          'Kì thị, phân biệt chủng tộc giữa người da trắng và người da màu',
          'Từ chối tìm hiểu những giá trị tốt đẹp của các nền văn hóa khác'
        ],
        correctAnswer: 1,
        explanation: 'Tôn trọng sự đa dạng là biết lắng nghe, tôn trọng và không kì thị sự khác biệt về phong tục, ngôn ngữ, bản sắc của các dân tộc.',
        topic: 'Tôn trọng sự đa dạng',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-6',
        content: 'Bạn S mang dòng máu Việt Nam và Mỹ gốc Phi nên bị bạn K trêu chọc về màu da. Nếu là bạn cùng lớp, em nên chọn cách ứng xử nào?',
        options: [
          'Cùng với bạn K hùa theo trêu chọc màu da của S',
          'Không quan tâm vì việc đó không ảnh hưởng tới mình',
          'Rủ rê các bạn trong lớp cùng tẩy chay, cô lập bạn S',
          'An ủi, động viên S; kiên quyết khuyên can K không được trêu chọc màu da của bạn'
        ],
        correctAnswer: 3,
        explanation: 'Cần thể hiện sự đồng cảm, bảo vệ bạn bè trước sự phân biệt đối xử và giúp bạn K nhận ra lỗi sai của mình.',
        topic: 'Xử lý tình huống đa dạng dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-7',
        content: 'Loại hình văn nghệ dân gian nào dưới đây là nét đẹp truyền thống đặc trưng của đồng bào dân tộc Tày, Nùng, Thái?',
        options: ['Đờn ca tài tử', 'Dân ca Quan họ', 'Dân ca Ví - Giặm', 'Nghi lễ Thực hành Then'],
        correctAnswer: 3,
        explanation: 'Thực hành Then của người Tày, Nùng, Thái là di sản văn hóa phi vật thể của nhân loại gắn liền với đời sống tinh thần của bà con vùng cao.',
        topic: 'Văn hóa dân tộc',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-8',
        content: 'Câu tục ngữ “Một phút nghĩ hay hơn cả ngày quần quật” phản ánh về đức tính nào dưới đây?',
        options: ['Lao động cần cù', 'Tinh thần hiếu học', 'Lao động sáng tạo', 'Tinh thần đoàn kết'],
        correctAnswer: 2,
        explanation: '“Nghĩ hay” là việc tư duy, suy nghĩ cải tiến cách làm (lao động sáng tạo), mang lại hiệu quả cao hơn nhiều so với việc chỉ làm việc theo lối mòn.',
        topic: 'Lao động sáng tạo',
        difficulty: 'easy'
      },
      {
        id: 'gdcd-9',
        content: 'Cần cù và sáng tạo trong lao động có mối quan hệ với nhau như thế nào?',
        options: [
          'Cần cù là nền tảng để phát huy sáng tạo và ngược lại, sáng tạo giúp lao động cần cù đạt hiệu quả cao hơn',
          'Cần cù là kết quả duy nhất của sự sáng tạo liên tục',
          'Chỉ cần sáng tạo là đủ, không cần cần cù',
          'Chỉ cần cần cù, không cần sáng tạo vẫn luôn đạt kết quả tốt nhất'
        ],
        correctAnswer: 0,
        explanation: 'Cần cù và sáng tạo có mối quan hệ biện chứng chặt chẽ: cần cù tạo nền móng kinh nghiệm, còn sáng tạo nâng tầm hiệu quả lao động.',
        topic: 'Cần cù và sáng tạo',
        difficulty: 'medium'
      },
      {
        id: 'gdcd-10',
        content: 'Có quan điểm cho rằng: "Sáng tạo là khả năng bẩm sinh, ai không có khiếu thì không rèn luyện được". Quan điểm này đúng hay sai?',
        options: [
          'Đúng, vì sáng tạo chỉ dành cho các nhà khoa học thiên tài',
          'Sai, vì sáng tạo là phẩm chất có thể rèn luyện được qua quá trình quan sát, đúc rút kinh nghiệm và nỗ lực thực hành',
          'Đúng, người lao động bình thường không cần sáng tạo',
          'Đúng, bẩm sinh quyết định 100% năng lực con người'
        ],
        correctAnswer: 1,
        explanation: 'Khả năng sáng tạo không phải là đặc quyền bẩm sinh bất biến; bất kỳ ai thông qua học tập, kiên trì cải tiến công việc hằng ngày đều có thể phát huy sức sáng tạo.',
        topic: 'Nhận thức về sáng tạo',
        difficulty: 'easy'
      }
    ]
  }
];
