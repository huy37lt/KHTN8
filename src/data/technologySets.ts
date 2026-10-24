import { QuizSet } from '../types/quiz';

export const TECHNOLOGY_QUIZ_SETS: QuizSet[] = [
  {
    id: 'cn8-gk1-tracnghiem',
    title: 'Công Nghệ 8 - Đề Cương Giữa HK1 (27 Câu Trắc Nghiệm Chuẩn)',
    subject: 'Công Nghệ',
    grade: 'Lớp 8B',
    description: 'Đầy đủ 27 câu trắc nghiệm nhiều phương án lựa chọn theo đúng đề cương ôn tập giữa học kì 1 THCS Bát Tràng (Bài 1 đến Bài 6).',
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
          '+ Hình chiếu cạnh (hướng nhìn từ trái sang): đặt ở bên PHẢI hình chiếu đứng.',
          'Các khối hình học cơ bản:',
          '+ Hình hộp chữ nhật: Cả 3 hình chiếu (đứng, bằng, cạnh) đều là hình chữ nhật.',
          '+ Hình lăng trụ tam giác đều: Đứng và cạnh là hình chữ nhật, bằng là tam giác đều.',
          '+ Hình chóp tứ giác đều: Đứng và cạnh là tam giác cân, bằng là hình vuông có 2 đường chéo.',
          '+ Hình nón: Đứng và cạnh là tam giác cân, bằng là hình tròn có tâm.',
          '+ Hình trụ: Đứng và cạnh là hình chữ nhật, bằng là hình tròn.'
        ],
        formulaOrRule: 'A4: 297x210 | Hình chiếu bằng: Ở DƯỚI | Hình chiếu cạnh: Ở BÊN PHẢI'
      },
      {
        id: 'cn-sum-2',
        title: 'Các loại bản vẽ & Vật liệu cơ khí',
        keyPoints: [
          'Trình tự đọc bản vẽ chi tiết (4 bước): 1. Khung tên -> 2. Hình biểu diễn -> 3. Kích thước -> 4. Yêu cầu kĩ thuật.',
          'Bản vẽ lắp (6 bước): 1. Khung tên -> 2. Bảng kê -> 3. Hình biểu diễn -> 4. Kích thước -> 5. Phân tích chi tiết -> 6. Tổng hợp. (Điểm khác: có Bảng kê, không có yêu cầu kĩ thuật).',
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
        content: 'Khổ giấy A4 là khổ giấy có kích thước:',
        options: ['841 x 594 mm', '594 × 420 mm', '420 x 297 mm', '297 × 210 mm'],
        correctAnswer: 3,
        explanation: 'Khổ giấy A4 theo TCVN có kích thước chuẩn là 297 x 210 mm.',
        topic: 'Bài 1: Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-2',
        content: 'Khổ giấy A0 là khổ giấy có kích thước:',
        options: ['841 x 594 mm', '1 189 x 841 mm', '297 x 420 mm', '594 x 420 mm'],
        correctAnswer: 1,
        explanation: 'Khổ giấy A0 có diện tích xấp xỉ 1m², kích thước 1 189 x 841 mm.',
        topic: 'Bài 1: Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-3',
        content: 'Trên bản vẽ kĩ thuật, nét đứt mảnh được dùng để',
        options: [
          'Vẽ đường bao thấy, cạnh thấy.',
          'Vẽ đường bao khuất, cạnh khuất.',
          'Vẽ đường tâm, đường trục.',
          'Một đáp án khác'
        ],
        correctAnswer: 1,
        explanation: 'Nét đứt mảnh dùng để vẽ đường bao khuất, cạnh khuất của vật thể.',
        topic: 'Bài 1: Nét vẽ kĩ thuật',
        difficulty: 'easy'
      },
      {
        id: 'cn-4',
        content: 'Trên bản vẽ kĩ thuật, nét liền đậm được dùng để',
        options: [
          'Vẽ đường bao thấy, cạnh thấy.',
          'Vẽ đường bao khuất, cạnh khuất.',
          'Vẽ đường tâm, đường trục.',
          'Một đáp án khác'
        ],
        correctAnswer: 0,
        explanation: 'Nét liền đậm dùng để vẽ đường bao thấy, cạnh thấy của vật thể.',
        topic: 'Bài 1: Nét vẽ kĩ thuật',
        difficulty: 'easy'
      },
      {
        id: 'cn-5',
        content: 'Theo phương pháp chiếu góc thứ nhất, hình chiếu cạnh có vị trí như thế nào so với hình chiếu đứng:',
        options: ['Đặt phía trên', 'Đặt phía dưới', 'Đặt bên phải', 'Đặt bên trái'],
        correctAnswer: 2,
        explanation: 'Hình chiếu cạnh thu được từ hướng chiếu từ trái sang và được đặt ở BÊN PHẢI hình chiếu đứng.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'easy'
      },
      {
        id: 'cn-6',
        content: 'Theo phương pháp chiếu góc thứ nhất, hình chiếu đứng có vị trí như thế nào so với hình chiếu bằng:',
        options: ['Đặt phía trên', 'Đặt phía dưới', 'Đặt bên phải', 'Đặt bên trái'],
        correctAnswer: 0,
        explanation: 'Hình chiếu đứng nằm ở góc trên bên trái, còn hình chiếu bằng đặt phía dưới hình chiếu đứng. Do đó hình chiếu đứng ở PHÍA TRÊN hình chiếu bằng.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'easy'
      },
      {
        id: 'cn-7',
        content: 'Phương pháp chiếu góc thứ nhất không có hướng chiếu nào sau đây?',
        options: ['Nhìn từ phải sang', 'Nhìn từ trái sang', 'Nhìn từ trước vào', 'Nhìn từ trên xuống'],
        correctAnswer: 0,
        explanation: 'Ba hướng chiếu chuẩn trong phương pháp góc thứ nhất gồm: Nhìn từ trước, nhìn từ trên xuống, nhìn từ trái sang. Không có hướng nhìn từ phải sang.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'medium'
      },
      {
        id: 'cn-8',
        content: 'Bước nào sau đây không nằm trong các bước để vẽ hình chiếu của vật thể?',
        options: [
          'Phân tích vật thể thành các khối đơn giản',
          'Chọn các hướng chiếu',
          'Vẽ các hình chiếu các bộ phận của vật thể',
          'Lựa chọn khổ giấy vẽ phù hợp'
        ],
        correctAnswer: 3,
        explanation: 'Quy trình vẽ hình chiếu gồm: quan sát phân tích vật thể thành khối đơn giản, chọn hướng chiếu, vẽ hình chiếu từng bộ phận và hoàn thiện nét vẽ. Lựa chọn khổ giấy là khâu chuẩn bị chung, không thuộc quy trình tạo hình chiếu.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'medium'
      },
      {
        id: 'cn-9',
        content: 'Hình chiếu vuông góc gồm 3 hình biểu diễn đều là hình chữ nhật (kích thước dài a, rộng b, cao h) là hình chiếu của hình nào?',
        options: [
          'Hình hộp chữ nhật',
          'Hình lăng trụ tam giác đều',
          'Hình chóp tứ giác đều',
          'Hình nón'
        ],
        correctAnswer: 0,
        explanation: 'Hình hộp chữ nhật có cả 3 hình chiếu vuông góc (hình chiếu đứng, hình chiếu bằng, hình chiếu cạnh) đều là các hình chữ nhật.',
        topic: 'Bài 2: Hình chiếu của vật thể',
        difficulty: 'easy'
      },
      {
        id: 'cn-10',
        content: 'Hình biểu diễn gồm hình chiếu đứng và hình chiếu cạnh là tam giác cân, hình chiếu bằng là hình tròn có dấu tâm (+) là hình chiếu vuông góc của hình nào?',
        options: [
          'Hình hộp chữ nhật',
          'Hình lăng trụ tam giác đều',
          'Hình chóp tứ giác đều',
          'Hình nón'
        ],
        correctAnswer: 3,
        explanation: 'Hình nón có hình chiếu đứng và hình chiếu cạnh là các tam giác cân, hình chiếu bằng là hình tròn có tâm.',
        topic: 'Bài 2: Hình chiếu của vật thể',
        difficulty: 'easy'
      },
      {
        id: 'cn-11',
        content: 'Hình biểu diễn gồm hình chiếu đứng và hình chiếu cạnh là hình chữ nhật, hình chiếu bằng là hình tròn là hình chiếu vuông góc của hình nào?',
        options: [
          'Hình hộp chữ nhật',
          'Hình lăng trụ tam giác đều',
          'Hình chóp tứ giác đều',
          'Hình trụ'
        ],
        correctAnswer: 3,
        explanation: 'Hình trụ có hình chiếu đứng và hình chiếu cạnh là hình chữ nhật, hình chiếu bằng là hình tròn.',
        topic: 'Bài 2: Hình chiếu của vật thể',
        difficulty: 'easy'
      },
      {
        id: 'cn-12',
        content: 'Khi đọc bản vẽ chi tiết, phải đọc nội dung gì trước?',
        options: ['Hình biểu diễn', 'Kích thước', 'Yêu cầu kĩ thuật', 'Khung tên'],
        correctAnswer: 3,
        explanation: 'Trình tự đọc bản vẽ chi tiết chuẩn gồm 4 bước: 1. Khung tên -> 2. Hình biểu diễn -> 3. Kích thước -> 4. Yêu cầu kĩ thuật. Vì vậy luôn đọc KHUNG TÊN trước.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-13',
        content: 'Trình tự đọc bản vẽ chi tiết gồm mấy bước?',
        options: ['2 bước', '3 bước', '4 bước', '5 bước'],
        correctAnswer: 2,
        explanation: 'Trình tự đọc bản vẽ chi tiết gồm 4 bước: Khung tên, Hình biểu diễn, Kích thước, Yêu cầu kĩ thuật.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-14',
        content: 'Tên gọi hình chiếu và vị trí hình cắt của chi tiết nằm trong trình tự nào khi đọc bản vẽ chi tiết?',
        options: ['Khung tên', 'Hình biểu diễn', 'Kích thước', 'Yêu cầu kĩ thuật'],
        correctAnswer: 1,
        explanation: 'Bước "Hình biểu diễn" gồm xác định tên gọi các hình chiếu và vị trí hình cắt.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-15',
        content: 'Trong bản vẽ chi tiết, các kích thước thể hiện:',
        options: [
          'Tốc độ quay của các bộ phận chi tiết máy.',
          'Quy mô hoạt động của các bộ phận chi tiết máy.',
          'Độ lớn các bộ phận của chi tiết máy.',
          'Tất cả các đáp án trên.'
        ],
        correctAnswer: 2,
        explanation: 'Kích thước thể hiện độ lớn các bộ phận (dài, rộng, cao, đường kính...) của chi tiết máy để gia công.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-16',
        content: 'Trong bản vẽ chi tiết, các hình biểu diễn thể hiện:',
        options: [
          'Hình dạng của chi tiết máy',
          'Hình dạng của ren xoắn',
          'Cơ chế vận hành của chi tiết máy',
          'Trong bản vẽ chi tiết không có các hình biểu diễn.'
        ],
        correctAnswer: 0,
        explanation: 'Hình biểu diễn (hình chiếu, hình cắt) thể hiện đầy đủ hình dạng bên ngoài và cấu tạo bên trong của chi tiết máy.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-17',
        content: 'Trình tự đọc bản vẽ lắp là:',
        options: [
          'Khung tên, bảng kê, hình biểu diễn, kích thước, phân tích chi tiết, tổng hợp',
          'Khung tên, hình biểu diễn, bảng kê, kích thước, phân tích chi tiết, tổng hợp',
          'Khung tên, hình biểu diễn, bảng kê, phân tích chi tiết, kích thước, tổng hợp',
          'Hình biểu diễn, khung tên, bảng kê, phân tích chi tiết, kích thước, tổng hợp'
        ],
        correctAnswer: 0,
        explanation: 'Trình tự đọc bản vẽ lắp chuẩn gồm 6 bước: 1. Khung tên -> 2. Bảng kê -> 3. Hình biểu diễn -> 4. Kích thước -> 5. Phân tích chi tiết -> 6. Tổng hợp.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'medium'
      },
      {
        id: 'cn-18',
        content: 'Kích thước trong bản vẽ lắp gồm:',
        options: [
          'Kích thước chung (dài, rộng, cao) của sản phẩm',
          'Kích thước lắp ghép giữa các chi tiết',
          'Kích thước xác định khoảng cách giữa các chi tiết',
          'Tất cả các đáp án trên'
        ],
        correctAnswer: 3,
        explanation: 'Kích thước trong bản vẽ lắp gồm kích thước chung toàn bộ sản phẩm, kích thước lắp ghép và kích thước vị trí giữa các chi tiết.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'medium'
      },
      {
        id: 'cn-19',
        content: 'Tìm hiểu số lượng, vật liệu của một chi tiết trong bản vẽ lắp ở đâu?',
        options: ['Khung tên', 'Bảng kê', 'Phân tích chi tiết', 'Tổng hợp'],
        correctAnswer: 1,
        explanation: 'Bảng kê trong bản vẽ lắp liệt kê số lượng, tên gọi và vật liệu chế tạo của từng chi tiết.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-20',
        content: 'Bản vẽ lắp có thêm nội dung nào mà bản vẽ chi tiết không có?',
        options: ['Hình biểu diễn', 'Kích thước', 'Bảng kê', 'Khung tên'],
        correctAnswer: 2,
        explanation: 'Bản vẽ lắp có thêm BẢNG KÊ (liệt kê danh mục các chi tiết và số lượng), bản vẽ chi tiết không có bảng kê.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-21',
        content: 'Bản vẽ lắp thiếu nội dung nào so với bản vẽ chi tiết?',
        options: ['Hình biểu diễn', 'Yêu cầu kĩ thuật', 'Kích thước', 'Khung tên'],
        correctAnswer: 1,
        explanation: 'Bản vẽ lắp không có phần Yêu cầu kĩ thuật (chỉ dẫn xử lý nhiệt, độ nhám bề mặt...) như bản vẽ chi tiết.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-22',
        content: 'Mặt đứng là:',
        options: [
          'Hình chiếu vuông góc của mặt ngoài ngôi nhà lên mặt phẳng hình chiếu đứng hoặc mặt phẳng hình chiếu cạnh.',
          'Hình cắt bằng của ngôi nhà.',
          'Hình biểu diễn nhận được khi dùng mặt phẳng cắt vuông góc với mặt đất cắt theo chiều dọc hay chiều ngang của ngôi nhà.',
          'Đáp án khác.'
        ],
        correctAnswer: 0,
        explanation: 'Mặt đứng là hình chiếu vuông góc các mặt ngoài của ngôi nhà lên mặt phẳng chiếu đứng hoặc mặt phẳng chiếu cạnh, thể hiện hình dáng kiến trúc bên ngoài.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'medium'
      },
      {
        id: 'cn-23',
        content: 'Mặt cắt của ngôi nhà là:',
        options: [
          'Hình chiếu vuông góc của mặt ngoài của ngôi nhà lên mặt phẳng chiếu đứng hoặc mặt phẳng chiếu cạnh.',
          'Hình cắt bằng của ngôi nhà.',
          'Hình cắt có mặt phẳng cắt song song với mặt phẳng hình chiếu đứng hoặc mặt phẳng hình chiếu cạnh.',
          'Đáp án khác.'
        ],
        correctAnswer: 2,
        explanation: 'Mặt cắt là hình cắt nhận được khi dùng mặt phẳng cắt thẳng đứng song song với mặt phẳng hình chiếu đứng hoặc cạnh cắt qua ngôi nhà, thể hiện kết cấu sàn, trần, mái.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'medium'
      },
      {
        id: 'cn-24',
        content: 'Khi đọc bản vẽ nhà, sau khi đọc nội dung ghi trong khung tên ta cần làm gì ở bước tiếp theo?',
        options: [
          'Phân tích hình biểu diễn',
          'Phân tích kích thước của ngôi nhà',
          'Xác định kích thước của ngôi nhà',
          'Xác định các bộ phận của ngôi nhà'
        ],
        correctAnswer: 0,
        explanation: 'Trình tự đọc bản vẽ nhà: 1. Khung tên -> 2. Hình biểu diễn -> 3. Kích thước -> 4. Các bộ phận.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'easy'
      },
      {
        id: 'cn-25',
        content: 'Hãy cho biết áo mưa thông thường được làm từ vật liệu nào?',
        options: ['Chất dẻo nhiệt', 'Chất dẻo nhiệt rắn', 'Cao su', 'Không xác định được'],
        correctAnswer: 0,
        explanation: 'Áo mưa nilon mỏng được làm từ chất dẻo nhiệt (như PE, PVC), có độ dẻo tốt và khả năng chống thấm nước cao.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-26',
        content: 'Săm xe đạp được chế tạo từ loại vật liệu nào?',
        options: ['Kim loại đen', 'Chất dẻo nhiệt', 'Chất dẻo nhiệt rắn', 'Cao su'],
        correctAnswer: 3,
        explanation: 'Săm xe đạp, lốp xe máy được sản xuất từ cao su nhờ tính đàn hồi vượt trội và độ kín khí cao.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-27',
        content: 'Đâu không phải tính chất của kim loại màu?',
        options: [
          'Khả năng chống ăn mòn thấp',
          'Đa số có tính dẫn nhiệt tốt',
          'Dẫn điện tốt',
          'Có tính chống mài mòn'
        ],
        correctAnswer: 0,
        explanation: 'Kim loại màu (đồng, nhôm và hợp kim của chúng) có ưu điểm nổi bật là KHẢ NĂNG CHỐNG ĂN MÒN CAO (không dễ bị gỉ như sắt), dẫn điện dẫn nhiệt tốt. Do đó phát biểu "khả năng chống ăn mòn thấp" là SAI.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'cn8-gk1-dung-sai',
    title: 'Công Nghệ 8 - Đề Cương Đúng / Sai (16 Nhận Định Chuẩn)',
    subject: 'Công Nghệ',
    grade: 'Lớp 8B',
    description: 'Chuyên đề 16 câu trắc nghiệm Đúng - Sai theo phần B của Đề cương ôn tập Giữa học kì 1 Công nghệ 8 THCS Bát Tràng.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      {
        id: 'cn-tf-1',
        content: 'Nhận định sau ĐÚNG hay SAI: "Mặt cắt của bản vẽ nhà giúp thể hiện cấu tạo và chiều cao của các bộ phận trong nhà."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Mặt cắt thể hiện kết cấu tường, sàn, mái và chiều cao của các tầng, cửa trong nhà.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-2',
        content: 'Nhận định sau ĐÚNG hay SAI: "Mặt bằng của bản vẽ nhà giúp thể hiện cách bố trí các phòng và vị trí cửa."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Mặt bằng là hình biểu diễn quan trọng nhất, thể hiện kích thước, cách chia phòng, vị trí cửa đi và cửa sổ.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-3',
        content: 'Nhận định sau ĐÚNG hay SAI: "Mặt đứng của bản vẽ nhà thể hiện rõ cách bố trí các phòng bên trong nhà hơn mặt bằng."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Mặt đứng chỉ thể hiện hình dáng bên ngoài ngôi nhà. Chính MẶT BẰNG mới thể hiện rõ cách bố trí các phòng bên trong.',
        topic: 'Bài 5: Bản vẽ nhà',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-4',
        content: 'Nhận định sau ĐÚNG hay SAI: "Trong bản vẽ lắp, hình biểu diễn giúp xác định vị trí tương quan giữa các chi tiết."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Hình biểu diễn của bản vẽ lắp cho biết vị trí lắp ghép tương đối giữa các chi tiết với nhau.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-5',
        content: 'Nhận định sau ĐÚNG hay SAI: "Bản vẽ lắp chỉ biểu diễn một chi tiết riêng lẻ."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Bản vẽ lắp biểu diễn nhóm chi tiết hoặc sản phẩm gồm nhiều chi tiết lắp ghép với nhau. Bản vẽ biểu diễn một chi tiết riêng lẻ là BẢN VẼ CHI TIẾT.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-6',
        content: 'Nhận định sau ĐÚNG hay SAI: "Bản vẽ lắp không cần thể hiện vị trí của các chi tiết."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Mục đích của bản vẽ lắp là phục vụ lắp ráp và vận hành, nên bắt buộc phải thể hiện chính xác vị trí của từng chi tiết.',
        topic: 'Bài 4: Bản vẽ lắp',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-7',
        content: 'Nhận định sau ĐÚNG hay SAI: "Khung tên của bản vẽ chi tiết cung cấp một số thông tin về chi tiết."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Khung tên cung cấp tên gọi chi tiết, vật liệu, tỉ lệ, người vẽ, cơ sở chế tạo...',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-8',
        content: 'Nhận định sau ĐÚNG hay SAI: "Bản vẽ chi tiết không cần ghi kích thước."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Bản vẽ chi tiết bắt buộc phải có kích thước đầy đủ để người công nhân căn cứ gia công và kiểm tra chi tiết.',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-9',
        content: 'Nhận định sau ĐÚNG hay SAI: "Chỉ cần nhìn hình biểu diễn là có thể chế tạo chính xác chi tiết."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Muốn chế tạo chính xác cần đầy đủ: hình biểu diễn, kích thước, vật liệu và các yêu cầu kĩ thuật (độ nhám, tôi luyện...).',
        topic: 'Bài 3: Bản vẽ chi tiết',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-10',
        content: 'Nhận định sau ĐÚNG hay SAI: "Chất dẻo và cao su là những vật liệu phi kim loại được sử dụng trong cơ khí."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Chất dẻo (nhiệt, nhiệt rắn) và cao su là các nhóm vật liệu phi kim loại rất phổ biến trong kĩ thuật cơ khí.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-11',
        content: 'Nhận định sau ĐÚNG hay SAI: "Mọi vật liệu phi kim loại đều có độ cứng và khả năng chịu nhiệt cao hơn thép."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Thép là kim loại có độ cứng và khả năng chịu nhiệt cao vượt trội so với đa số vật liệu phi kim loại thông thường.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-12',
        content: 'Nhận định sau ĐÚNG hay SAI: "Gang thường có tính dẻo và khả năng chịu va đập tốt hơn thép."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Gang có hàm lượng cacbon cao (>2,14%) nên giòn và chịu va đập kém hơn thép. Thép mới có tính dẻo và khả năng chịu va đập tốt hơn gang.',
        topic: 'Bài 6: Vật liệu cơ khí',
        difficulty: 'medium'
      },
      {
        id: 'cn-tf-13',
        content: 'Nhận định sau ĐÚNG hay SAI: "Nét gạch chấm mảnh thường dùng để biểu diễn đường tâm, đường trục đối xứng."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Tiêu chuẩn bản vẽ quy định nét gạch chấm mảnh dùng để vẽ đường tâm và đường trục đối xứng của vật thể.',
        topic: 'Bài 1: Nét vẽ kĩ thuật',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-14',
        content: 'Nhận định sau ĐÚNG hay SAI: "Kích thước trên bản vẽ luôn được ghi bằng đơn vị mét."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Trên bản vẽ kĩ thuật cơ khí, đơn vị đo độ dài mặc định là milimét (mm) và không cần ghi đơn vị sau con số kích thước.',
        topic: 'Bài 1: Tiêu chuẩn bản vẽ',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-15',
        content: 'Nhận định sau ĐÚNG hay SAI: "Hình chiếu đứng luôn thể hiện đầy đủ cả ba kích thước của vật thể."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1,
        explanation: 'SAI. Hình chiếu đứng là hình chiếu phẳng 2 chiều, chỉ thể hiện 2 kích thước: chiều cao và chiều dài của vật thể.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'easy'
      },
      {
        id: 'cn-tf-16',
        content: 'Nhận định sau ĐÚNG hay SAI: "Hình chiếu đứng thường được chọn làm hình chiếu chính."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0,
        explanation: 'ĐÚNG. Hình chiếu đứng phản ánh rõ nhất hình dạng đặc trưng nhất của vật thể nên luôn được chọn làm hình chiếu chính.',
        topic: 'Bài 2: Hình chiếu vuông góc',
        difficulty: 'easy'
      }
    ]
  }
];
