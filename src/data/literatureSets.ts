import { QuizSet } from '../types/quiz';

export const LITERATURE_QUIZ_SETS: QuizSet[] = [
  // Bộ 1: Thực hành Tiếng Việt
  {
    id: 'van8-tieng-viet-bat-trang',
    title: 'Ngữ Văn 8 - Thực Hành Tiếng Việt: Biệt Ngữ, Từ Địa Phương & Tu Từ',
    subject: 'Ngữ Văn 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Trọn vẹn kiến thức Tiếng Việt Giữa HK1: Biệt ngữ xã hội, từ ngữ địa phương, từ tượng thanh, từ tượng hình và các biện pháp tu từ trọng tâm.',
    isDefault: true,
    createdAt: '2026-10-22T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-van8-tiengviet',
        title: 'Cốt Lõi Kiến Thức Tiếng Việt Lớp 8 - Giữa HK1',
        keyPoints: [
          'Biệt ngữ xã hội: Chỉ được dùng trong một tầng lớp xã hội nhất định (ví dụ tiếng lóng của học sinh: "trúng tủ", "lệch tủ", "cúp cua", "phao thi"; của giới quý tộc phong kiến: "quan gia", "ngự thiện", "hầu hạ").',
          'Từ ngữ địa phương: Chỉ sử dụng ở một hoặc một số địa phương nhất định (ví dụ miền Trung/Nam: "bắp" = ngô, "heo" = lợn, "mô, tê, răng, rứa", "chộ" = thấy).',
          'Từ tượng hình: Gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật (ví dụ: gầy guộc, lởm chởm, liêu xiêu, thoăn thoắt).',
          'Từ tượng thanh: Mô phỏng âm thanh tự nhiên hoặc con người (ví dụ: rầm rập, róc rách, ào ào, lách cách).',
          'Biện pháp tu từ: Điệp từ/điệp ngữ, so sánh, nhân hóa, ẩn dụ, tương phản, câu hỏi tu từ.'
        ],
        formulaOrRule: 'Tác dụng tu từ = Gọi tên biện pháp + Chỉ ra từ ngữ thực hiện + Nêu hiệu quả biểu đạt cảm xúc/hình ảnh.',
        mnemonics: 'Nhớ phân biệt: Biệt ngữ thuộc về TẦNG LỚP/NGHỀ NGHIỆP; Từ địa phương thuộc về VÙNG MIỀN ĐỊA LÝ!'
      }
    ],
    questions: [
      {
        id: 'van-tv-1',
        content: 'Biệt ngữ xã hội là gì?',
        options: [
          'Những từ ngữ chỉ được dùng trong một tầng lớp xã hội nhất định.',
          'Những từ ngữ được toàn dân sử dụng rộng rãi hàng ngày.',
          'Những từ ngữ chỉ xuất hiện ở một vùng miền địa lý cụ thể.',
          'Những từ ngữ cổ không còn ai sử dụng trong đời sống hiện nay.'
        ],
        correctAnswer: 0,
        explanation: 'SGK Ngữ văn 8 định nghĩa: Biệt ngữ xã hội là những từ ngữ chỉ được dùng trong một tầng lớp xã hội nhất định (ví dụ học sinh, sinh viên, giới kinh doanh, quý tộc phong kiến...).',
        topic: 'Tiếng Việt - Biệt ngữ xã hội',
        difficulty: 'easy'
      },
      {
        id: 'van-tv-2',
        content: 'Trong đoạn trích "Bên bờ Thiên Mạc", từ "Quan gia" được dùng để chỉ ai và thuộc loại từ ngữ nào?',
        options: [
          'Chỉ vua nhà Trần - là biệt ngữ xã hội thời phong kiến.',
          'Chỉ tướng giặc Thoát Hoan - là từ ngữ địa phương.',
          'Chỉ các quan lại địa phương - là từ toàn dân.',
          'Chỉ cha mẹ của tướng quân - là đại từ xưng hô.'
        ],
        correctAnswer: 0,
        explanation: '"Quan gia" là từ dùng để chỉ vua nhà Trần trong triều đình thời phong kiến xưa, mang tính chất biệt ngữ xã hội của tầng lớp quý tộc triều đình.',
        topic: 'Tiếng Việt - Biệt ngữ xã hội',
        difficulty: 'easy'
      },
      {
        id: 'van-tv-3',
        content: 'Nhóm từ nào sau đây gồm TOÀN TỪ NGỮ ĐỊA PHƯƠNG?',
        options: [
          'Bắp, heo, chén, mô, tê, răng, rứa',
          'Bút bi, sách vở, bàn ghế, lớp học',
          'Thầy cô, trường học, điểm mười, thi đua',
          'Trúng tủ, cúp tiết, phao thi, gà mờ'
        ],
        correctAnswer: 0,
        explanation: 'Các từ "bắp" (ngô), "heo" (lợn), "chén" (bát), "mô, tê, răng, rứa" là những từ ngữ đặc trưng của phương ngữ miền Trung và Nam Bộ.',
        topic: 'Tiếng Việt - Từ ngữ địa phương',
        difficulty: 'easy'
      },
      {
        id: 'van-tv-4',
        content: 'Các từ "gầy guộc", "lởm chởm", "bù rối", "rám đỏ" trong đoạn miêu tả ông lão Xuân Đình thuộc loại từ nào?',
        options: [
          'Từ tượng hình (gợi tả hình dáng, đường nét, màu sắc bên ngoài)',
          'Từ tượng thanh (mô phỏng âm thanh)',
          'Biệt ngữ xã hội',
          'Thuật ngữ khoa học'
        ],
        correctAnswer: 0,
        explanation: 'Đây đều là những từ tượng hình đặc sắc giúp khắc họa chân thực vóc dáng gầy gò, sương gió dãi dầu nhưng quật cường, khỏe khoắn của ông già làng Xuân Đình.',
        topic: 'Tiếng Việt - Từ tượng hình',
        difficulty: 'easy'
      },
      {
        id: 'van-tv-5',
        content: 'Biện pháp tu từ nào được sử dụng trong câu nói của Trần Bình Trọng: "Đánh! Đánh! Đánh! Xin Quan gia cho đánh!"?',
        options: [
          'Điệp từ (lặp lại liên tiếp từ "Đánh")',
          'Ẩn dụ chuyển đổi cảm giác',
          'Nhân hóa sự vật',
          'Nói giảm nói tránh'
        ],
        correctAnswer: 0,
        explanation: 'Tác giả sử dụng biện pháp điệp từ "Đánh!" lặp lại 3 lần liên tiếp kết hợp dấu chấm than nhằm nhấn mạnh ý chí quyết chiến mãnh liệt, thái độ dứt khoát không khoan nhượng với giặc ngoại xâm.',
        topic: 'Tiếng Việt - Biện pháp tu từ',
        difficulty: 'easy'
      },
      {
        id: 'van-tv-6',
        content: 'Ý nghĩa sâu sắc của chi tiết xăm hai chữ "Sát Thát" trên cánh tay của tướng quân và ông lão là gì?',
        options: [
          'Biểu tượng của tinh thần quyết chiến quyết thắng giặc Mông Cổ ăn sâu vào máu thịt của toàn dân tộc.',
          'Chỉ là phong tục xăm mình làm đẹp truyền thống của người dân Việt.',
          'Ký hiệu bí mật để binh lính nhận diện nhau trên chiến trường.',
          'Quy định bắt buộc của triều đình đối với các bô lão và binh sĩ.'
        ],
        correctAnswer: 0,
        explanation: '"Sát Thát" (nghĩa là Giết giặc Thát Đát/Mông Cổ). Chi tiết hai chữ này "ăn sâu vào xương thịt" thể hiện tinh thần yêu nước sâu sắc, ý chí diệt giặc cứu nước đã trở thành lẽ sống từ tướng lĩnh triều đình đến người dân thường.',
        topic: 'Văn Bản - Bên bờ Thiên Mạc',
        difficulty: 'medium'
      }
    ]
  },

  // Bộ 2: Thể loại Truyện Lịch Sử & Thơ Đường Luật
  {
    id: 'van8-the-loai-bat-trang',
    title: 'Ngữ Văn 8 - Thể Loại: Truyện Lịch Sử & Thơ Đường Luật',
    subject: 'Ngữ Văn 8',
    grade: 'Lớp 8 (Giữa HK1)',
    description: 'Ôn tập hệ thống thể loại: Yếu tố truyện lịch sử (cốt truyện, nhân vật, bối cảnh, ngôn ngữ) và thi luật Thơ Đường luật (bố cục, niêm, luật, vần, đối, cảm xúc).',
    isDefault: true,
    createdAt: '2026-10-22T08:00:00.000Z',
    summaries: [
      {
        id: 'sum-van8-theloai',
        title: 'Quy Chuẩn Thể Loại Thơ Đường Luật & Truyện Lịch Sử',
        keyPoints: [
          'Truyện lịch sử: Lấy đề tài, sự kiện, nhân vật có thật trong lịch sử làm cốt lõi; nhà văn tái hiện bằng trí tưởng tượng nghệ thuật chân thực, phản ánh tinh thần của thời đại.',
          'Thơ thất ngôn bát cú Đường luật: Mỗi bài gồm 8 câu, mỗi câu 7 chữ. Bố cục gồm 4 phần: Đề (câu 1-2) - Thực (câu 3-4) - Luận (câu 5-6) - Kết (câu 7-8).',
          'Luật đối trong thơ Đường luật: Bắt buộc phải đối nhau ở 2 cặp câu: Cặp Thực (câu 3 đối câu 4) và Cặp Luận (câu 5 đối câu 6). Đối về số chữ, từ loại (danh đối danh, động đối động) và thanh điệu (bằng đối trắc).',
          'Niêm: Là sự dính kết thanh điệu giữa các câu. Câu 1 niêm với câu 8, câu 2 niêm với câu 3, câu 4 niêm với câu 5, câu 6 niêm với câu 7.',
          'Vần: Thường gieo vần bằng ở cuối các câu 1, 2, 4, 6, 8.'
        ],
        formulaOrRule: 'Bố cục: Đề - Thực - Luận - Kết  |  Đối: Câu 3 - 4 và Câu 5 - 6  |  Vần bằng ở chân câu 1, 2, 4, 6, 8',
        mnemonics: 'Quy tắc thanh điệu: "Nhất - tam - ngũ bất luận; Nhị - tứ - lục phân minh" (Chữ 1, 3, 5 bằng trắc tự do; Chữ 2, 4, 6 phải đúng luật bằng trắc).'
      }
    ],
    questions: [
      {
        id: 'van-tl-1',
        content: 'Bố cục chuẩn của một bài thơ Thất ngôn bát cú Đường luật gồm 4 phần theo thứ tự là',
        options: [
          'Đề - Thực - Luận - Kết',
          'Mở bài - Thân bài - Kết bài - Bình luận',
          'Khai - Thừa - Chuyển - Hợp',
          'Cảm xúc - Tả cảnh - Ngụ tình - Kết thúc'
        ],
        correctAnswer: 0,
        explanation: 'Một bài thơ thất ngôn bát cú Đường luật chuẩn gồm 8 câu, chia thành 4 phần: Đề (câu 1 - 2: mở ý), Thực (câu 3 - 4: triển khai miêu tả cảnh), Luận (câu 5 - 6: bình luận, suy ngẫm), Kết (câu 7 - 8: thâu tóm cảm xúc).',
        topic: 'Thể Loại - Thơ Đường luật',
        difficulty: 'easy'
      },
      {
        id: 'van-tl-2',
        content: 'Trong một bài thơ thất ngôn bát cú Đường luật, phép đối BẮT BUỘC phải xuất hiện ở những cặp câu nào?',
        options: [
          'Câu 3 đối với câu 4 (cặp Thực) và câu 5 đối với câu 6 (cặp Luận)',
          'Câu 1 đối với câu 2 và câu 7 đối với câu 8',
          'Câu 2 đối với câu 4 và câu 6 đối với câu 8',
          'Chỉ bắt buộc đối ở hai câu Kết (câu 7 và 8)'
        ],
        correctAnswer: 0,
        explanation: 'Quy tắc thi luật Đường luật quy định nghiêm ngặt: Phép đối (đối chữ, đối ý, đối thanh) bắt buộc phải thực hiện ở cặp câu Thực (3 - 4) và cặp câu Luận (5 - 6).',
        topic: 'Thể Loại - Thơ Đường luật',
        difficulty: 'medium'
      },
      {
        id: 'van-tl-3',
        content: 'Đoạn trích "Bên bờ Thiên Mạc" được kể theo ngôi thứ mấy và bằng lời của ai?',
        options: [
          'Ngôi thứ ba, người kể chuyện giấu mình (lời kể khách quan của người dẫn chuyện)',
          'Ngôi thứ nhất, xưng "tôi" (nhân vật Trần Bình Trọng kể lại)',
          'Ngôi thứ nhất, xưng "lão" (ông già làng Xuân Đình kể lại)',
          'Ngôi thứ hai, đối thoại trực tiếp'
        ],
        correctAnswer: 0,
        explanation: 'Tác phẩm được kể theo ngôi thứ ba, người kể chuyện toàn tri giấu mình, giúp bao quát toàn cảnh và khắc họa khách quan diễn biến tâm lý, hành động của các nhân vật.',
        topic: 'Thể Loại - Truyện lịch sử',
        difficulty: 'easy'
      },
      {
        id: 'van-tl-4',
        content: 'Nhận xét thẳng thắn của ông lão làng Xuân Đình về tướng quân Trần Bình Trọng là gì?',
        options: [
          'Tướng quân chưa hiểu hết lòng dân; năm Đinh Tị khi các bô lão đánh giặc thì tướng quân mới 3-4 tuổi.',
          'Tướng quân là người nóng nảy, thiếu mưu mẹo đối phó với giặc.',
          'Tướng quân còn trẻ con, không nên chỉ huy quân đội triều đình.',
          'Tướng quân không biết cách cư xử lễ phép với các bô lão lớn tuổi.'
        ],
        correctAnswer: 0,
        explanation: 'Ông lão nói thẳng: "Đó là vì tướng quân chưa hiểu hết bụng dân đó thôi. Những bô lão được Quan gia vời vào điện Diên Hồng ăn yến đều là những người đã từng cầm giáo đuổi giặc trước đây hai mươi bảy năm... chắc vào cái năm Đinh Tị ấy, tướng quân mới được ba, bốn tuổi chi đó chứ gì?".',
        topic: 'Văn Bản - Bên bờ Thiên Mạc',
        difficulty: 'medium'
      },
      {
        id: 'van-tl-5',
        content: 'Tại sao nhận xét thẳng thắn của ông lão không làm cho Trần Bình Trọng tức giận?',
        options: [
          'Vì ông hiểu lời nhận xét xuất phát từ tấm lòng chân thành, yêu nước và sự kính trọng thực sự của một người già cả đời vì dân vì nước.',
          'Vì quân lính đang đứng xung quanh nên tướng quân phải giữ thể diện.',
          'Vì tướng quân sợ ông lão không dẫn đường cho quân đội.',
          'Vì ông lão làng Xuân Đình là họ hàng thân thích của Quan gia.'
        ],
        correctAnswer: 0,
        explanation: 'Trần Bình Trọng là vị tướng có bản lĩnh, độ lượng và luôn trọng lẽ phải. Ông hiểu rằng lời nói thẳng của ông lão bắt nguồn từ niềm tự hào dân tộc, sự gắn bó và lòng yêu nước sắt son, mà như ông lão nói: "mua được những lời nói thẳng thật là khó đấy tướng quân ạ".',
        topic: 'Văn Bản - Bên bờ Thiên Mạc',
        difficulty: 'medium'
      }
    ]
  }
];
