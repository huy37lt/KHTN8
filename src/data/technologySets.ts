import { QuizSet } from '../types/quiz';

export const TECHNOLOGY_QUIZ_SETS: QuizSet[] = [
  {
    id: 'cn8-gk1-tracnghiem',
    title: 'Công Nghệ 8 - Đề Cương Giữa HK1 (Bản Vẽ Kĩ Thuật & Vật Liệu Cơ Khí)',
    subject: 'Công Nghệ',
    grade: 'Lớp 8B',
    description: 'Bài 1 đến Bài 6: Khổ giấy, nét vẽ, 3 hình chiếu vuông góc, bản vẽ chi tiết, bản vẽ lắp, bản vẽ nhà và các nhóm vật liệu cơ khí (kim loại đen, kim loại màu, phi kim).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'cn-sum-1',
        title: 'Quy chuẩn Bản vẽ kĩ thuật & Hình chiếu vuông góc',
        keyPoints: [
          'Khổ giấy chính: A0 (1189 x 841 mm), A1 (841 x 594 mm), A2 (594 x 420 mm), A3 (420 x 297 mm), A4 (297 x 210 mm). Khổ sau bằng 1/2 diện tích khổ trước.',
          'Các loại nét vẽ: Nét liền đậm (vẽ đường bao thấy, cạnh thấy); Nét đứt mảnh (đường bao khuất, cạnh khuất); Nét gạch chấm mảnh (đường tâm, trục đối xứng).',
          '3 hình chiếu vuông góc (Phương pháp góc thứ nhất):',
          '+ Hình chiếu đứng (hướng nhìn từ trước): nằm ở góc trên bên trái.',
          '+ Hình chiếu bằng (hướng nhìn từ trên xuống): đặt ở phía DƯỚI hình chiếu đứng.',
          '+ Hình chiếu cạnh (hướng nhìn từ trái sang): đặt ở bên PHẢI hình chiếu đứng.'
        ],
        formulaOrRule: 'A4: 297x210 | Hình chiếu bằng: Ở DƯỚI | Hình chiếu cạnh: Ở BÊN PHẢI'
      },
      {
        id: 'cn-sum-2',
        title: 'Các loại bản vẽ & Vật liệu cơ khí',
        keyPoints: [
          'Trình tự đọc bản vẽ chi tiết (4 bước): Khung tên -> Hình biểu diễn -> Kích thước -> Yêu cầu kĩ thuật.',
          'Bản vẽ lắp (6 bước): Khung tên -> Bảng kê -> Hình biểu diễn -> Kích thước -> Phân tích chi tiết -> Tổng hợp. (Điểm khác: có Bảng kê, không có yêu cầu kĩ thuật).',
          'Bản vẽ nhà: Gồm Mặt bằng (bố trí phòng, cửa), Mặt đứng (hình dạng bên ngoài), Mặt cắt (chiều cao, cấu tạo sàn mái).',
          'Vật liệu cơ khí:',
          '+ Kim loại đen: Sắt, Gang (tỉ lệ cacbon > 2,14%), Thép (cacbon <= 2,14%).',
          '+ Kim loại màu: Đồng, nhôm và hợp kim của chúng (dẫn điện, dẫn nhiệt tốt, chống ăn mòn).',
          '+ Phi kim loại: Chất dẻo nhiệt (áo mưa, túi nilon, có thể tái chế), Chất dẻo nhiệt rắn (vỏ ổ cắm, chịu nhiệt cao), Cao su (săm lốp, đàn hồi tốt).'
        ]
      }
    ],
    questions: [
      {
        id: 'cn-1',
        content: 'Khổ giấy A4 theo tiêu chuẩn quốc gia TCVN 7285:2003 có kích thước là bao nhiêu?',
        options: ['841 x 594 mm', '594 x 420 mm', '420 x 297 mm', '297 x 210 mm'],
        correctAnswer: 3,
        explanation: 'Khổ giấy A4 có kích thước tiêu chuẩn là 297 x 210 mm (khổ A0 là 1189 x 841 mm).',
        topic: 'Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-2',
        content: 'Khổ giấy A0 có kích thước chuẩn là bao nhiêu?',
        options: ['841 x 594 mm', '1 189 x 841 mm', '297 x 420 mm', '594 x 420 mm'],
        correctAnswer: 1,
        explanation: 'Khổ giấy lớn nhất trong bản vẽ kĩ thuật là khổ A0, có kích thước 1 189 x 841 mm.',
        topic: 'Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-3',
        content: 'Trên bản vẽ kĩ thuật, nét đứt mảnh được quy định dùng để vẽ gì?',
        options: [
          'Đường bao thấy, cạnh thấy của vật thể',
          'Đường bao khuất, cạnh khuất của vật thể',
          'Đường tâm, trục đối xứng',
          'Đường dóng và đường kích thước'
        ],
        correctAnswer: 1,
        explanation: 'Nét đứt mảnh biểu diễn các đường bao khuất, cạnh khuất không nhìn thấy từ hướng chiếu.',
        topic: 'Nét vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-4',
        content: 'Theo phương pháp chiếu góc thứ nhất, hình chiếu bằng có vị trí như thế nào so với hình chiếu đứng?',
        options: ['Đặt phía trên', 'Đặt phía dưới', 'Đặt bên phải', 'Đặt bên trái'],
        correctAnswer: 1,
        explanation: 'Hình chiếu bằng thu được khi nhìn từ trên xuống và được đặt ngay PHÍA DƯỚI hình chiếu đứng.',
        topic: 'Hình chiếu vuông góc',
        difficulty: 'easy'
      },
      {
        id: 'cn-5',
        content: 'Theo phương pháp chiếu góc thứ nhất, hình chiếu cạnh có vị trí như thế nào so với hình chiếu đứng?',
        options: ['Đặt phía trên', 'Đặt phía dưới', 'Đặt bên phải', 'Đặt bên trái'],
        correctAnswer: 2,
        explanation: 'Hình chiếu cạnh thu được khi nhìn từ trái sang và được đặt ở BÊN PHẢI hình chiếu đứng.',
        topic: 'Hình chiếu vuông góc',
        difficulty: 'easy'
      },
      {
        id: 'cn-6',
        content: 'Phương pháp chiếu góc thứ nhất KHÔNG CÓ hướng chiếu nào sau đây?',
        options: ['Nhìn từ phải sang', 'Nhìn từ trái sang', 'Nhìn từ trước vào', 'Nhìn từ trên xuống'],
        correctAnswer: 0,
        explanation: 'Ba hướng chiếu chuẩn gồm: Nhìn từ trước (hình chiếu đứng), Nhìn từ trên (hình chiếu bằng), Nhìn từ trái (hình chiếu cạnh). Không có hướng "nhìn từ phải sang".',
        topic: 'Hình chiếu vuông góc',
        difficulty: 'medium'
      },
      {
        id: 'cn-7',
        content: 'Khi đọc bản vẽ chi tiết cơ khí, nội dung nào luôn được đọc đầu tiên?',
        options: ['Hình biểu diễn', 'Kích thước', 'Yêu cầu kĩ thuật', 'Khung tên'],
        correctAnswer: 3,
        explanation: 'Trình tự đọc bản vẽ chi tiết bắt đầu từ: 1. Khung tên -> 2. Hình biểu diễn -> 3. Kích thước -> 4. Yêu cầu kĩ thuật.',
        topic: 'Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-8',
        content: 'Bản vẽ lắp có thêm nội dung quan trọng nào mà bản vẽ chi tiết KHÔNG CÓ?',
        options: ['Hình biểu diễn', 'Kích thước', 'Bảng kê (danh mục chi tiết và số lượng)', 'Khung tên'],
        correctAnswer: 2,
        explanation: 'Bản vẽ lắp gồm nhiều chi tiết ghép lại với nhau nên bắt buộc phải có BẢNG KÊ để thống kê tên, số lượng, vật liệu từng chi tiết.',
        topic: 'Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-9',
        content: 'Hình biểu diễn quan trọng nhất của bản vẽ nhà dùng để thể hiện cách bố trí các phòng, vị trí cửa đi và cửa sổ là gì?',
        options: ['Mặt đứng', 'Mặt bằng', 'Mặt cắt', 'Hình chiếu phối cảnh'],
        correctAnswer: 1,
        explanation: 'Mặt bằng là hình cắt bằng của ngôi nhà, cho biết kích thước, cách bố trí các phòng, cửa đi, cửa sổ cầu thang.',
        topic: 'Bản vẽ nhà',
        difficulty: 'easy'
      },
      {
        id: 'cn-10',
        content: 'Săm xe đạp, lốp xe máy được sản xuất từ loại vật liệu cơ khí nào?',
        options: ['Kim loại đen', 'Chất dẻo nhiệt', 'Chất dẻo nhiệt rắn', 'Cao su'],
        correctAnswer: 3,
        explanation: 'Cao su có tính đàn hồi cao, giảm chấn và chống thấm nước tốt nên chuyên dùng để sản xuất săm, lốp, đệm làm kín.',
        topic: 'Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-11',
        content: 'Áo mưa thông thường được làm từ loại vật liệu nào sau đây?',
        options: ['Chất dẻo nhiệt (như màng nhựa PVC, PE dẻo)', 'Chất dẻo nhiệt rắn', 'Kim loại màu', 'Gang'],
        correctAnswer: 0,
        explanation: 'Chất dẻo nhiệt nóng chảy khi gia nhiệt và đông cứng lại khi làm nguội, có độ dẻo cao và chống thấm nước tốt, dùng làm áo mưa, chai nhựa.',
        topic: 'Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-12',
        content: 'Tỉ lệ 1:2 trên bản vẽ kĩ thuật cho biết điều gì?',
        options: [
          'Kích thước trên hình biểu diễn nhỏ hơn 2 lần so với kích thước thật của vật thể',
          'Kích thước trên hình vẽ phóng to gấp 2 lần vật thể thật',
          'Kích thước trên hình vẽ bằng kích thước thật',
          'Vật thể có 2 chi tiết giống nhau'
        ],
        correctAnswer: 0,
        explanation: 'Tỉ lệ 1:2 là tỉ lệ thu nhỏ, nghĩa là kích thước vẽ trên giấy bằng 1/2 kích thước thực tế.',
        topic: 'Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      }
    ]
  }
];
