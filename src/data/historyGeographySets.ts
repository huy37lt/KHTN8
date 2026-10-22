import { QuizSet } from '../types/quiz';

export const HISTORY_GEOGRAPHY_QUIZ_SETS: QuizSet[] = [
  {
    id: 'ls8-gk1-tracnghiem',
    title: 'Lịch Sử 8 - Đề Cương Giữa HK1 (Cách Mạng Tư Sản & Lịch Sử Việt Nam)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: 'Bao gồm CMTS Anh, Bắc Mỹ, CMTS Pháp 1789, Cách mạng công nghiệp, Đông Nam Á XVI-XIX, Xung đột Nam - Bắc triều & Trịnh - Nguyễn, Khai phá phía Nam & Chủ quyền Hoàng Sa - Trường Sa.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'ls-sum-1',
        title: 'Các cuộc Cách mạng tư sản thời cận đại',
        keyPoints: [
          'CMTS Anh: Lật đổ chế độ quân chủ chuyên chế, thiết lập quân chủ lập hiến, mở đường cho CNTB phát triển.',
          'Chiến tranh 13 thuộc địa Anh ở Bắc Mỹ: Lật đổ ách thống trị thực dân Anh, thành lập Hợp chúng quốc Mỹ (USA), không lật đổ phong kiến (Bắc Mỹ không có phong kiến).',
          'CMTS Pháp 1789: Mở đầu bằng sự kiện tấn công ngục Ba-xti ngày 14/7/1789; lật đổ chế độ phong kiến, lập chế độ cộng hòa; là cuộc CMTS triệt để nhất.',
          'Cách mạng công nghiệp: Khởi đầu ở Anh (nhờ vốn, nhân công, kỹ thuật). Máy hơi nước James Watt là phát minh tiêu biểu nhất, đưa nước Anh thành "công xưởng của thế giới" và hình thành 2 giai cấp: Tư sản và Vô sản.'
        ],
        formulaOrRule: 'Pháp: 14/7/1789 tấn công Ba-xti | Anh: Công xưởng thế giới | Bắc Mỹ: Lật đổ thực dân'
      },
      {
        id: 'ls-sum-2',
        title: 'Lịch sử Việt Nam thế kỉ XVI - XVIII',
        keyPoints: [
          'Xung đột Nam - Bắc triều: Nhà Mạc (Bắc triều - Thăng Long) và Nhà Lê - Nguyễn Kim (Nam triều - Thanh Hóa).',
          'Xung đột Trịnh - Nguyễn: Chia cắt đất nước thành Đàng Trong và Đàng Ngoài, lấy sông Gianh (Quảng Bình) làm giới tuyến.',
          'Công cuộc khai phá đất phương Nam: Chúa Nguyễn mở rộng bờ cõi từ phía nam Hoành Sơn đến mũi Cà Mau.',
          'Chủ quyền biển đảo: Các chúa Nguyễn xác lập chủ quyền Hoàng Sa, Trường Sa từ TK XVII bằng Đội Hoàng Sa, Đội Bắc Hải (tên cổ: "Bãi Cát Vàng"), được tiếp nối qua thời Tây Sơn và nhà Nguyễn.'
        ]
      }
    ],
    questions: [
      {
        id: 'ls-1',
        content: 'Kết quả nổi bật của Cách mạng tư sản Anh là gì?',
        options: [
          'Lật đổ chế độ quân chủ chuyên chế, mở đường cho CNTB phát triển ở Anh',
          'Vẫn duy trì mọi đặc quyền của thế lực phong kiến',
          'Nền cộng hòa dân chủ được thiết lập ở Anh',
          'Thế lực của giai cấp tư sản được củng cố, quyền lợi của nhân dân được đảm bảo'
        ],
        correctAnswer: 0,
        explanation: 'CMTS Anh lật đổ chế độ quân chủ chuyên chế, thiết lập chế độ quân chủ lập hiến, mở đường cho CNTB phát triển mạnh mẽ.',
        topic: 'CMTS Anh',
        difficulty: 'easy'
      },
      {
        id: 'ls-2',
        content: 'Đâu KHÔNG phải là kết quả của Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ?',
        options: [
          'Lật đổ ách thống trị của thực dân Anh',
          'Lật đổ chế độ phong kiến',
          'Thành lập Hợp chúng quốc Mỹ',
          'Mở đường cho kinh tế tư bản chủ nghĩa phát triển'
        ],
        correctAnswer: 1,
        explanation: 'Ở Bắc Mỹ trước đó không có chế độ phong kiến ngự trị, cuộc chiến là lật đổ ách thống trị thực dân Anh chứ không phải lật đổ phong kiến.',
        topic: 'Chiến tranh giành độc lập Bắc Mỹ',
        difficulty: 'medium'
      },
      {
        id: 'ls-3',
        content: 'Đâu KHÔNG phải là kết quả của cách mạng tư sản Pháp?',
        options: [
          'Lật đổ chế độ tư bản chủ nghĩa.',
          'Xóa bỏ nhiều trở ngại trên con đường phát triển chủ nghĩa tư bản.',
          'Đưa giai cấp tư sản lên nắm quyền.',
          'Lật đổ chế độ phong kiến, thành lập chế độ cộng hòa.'
        ],
        correctAnswer: 0,
        explanation: 'CMTS Pháp lật đổ chế độ phong kiến chứ không phải lật đổ chế độ tư bản chủ nghĩa (ngược lại, nó mở đường cho CNTB phát triển).',
        topic: 'CMTS Pháp',
        difficulty: 'easy'
      },
      {
        id: 'ls-4',
        content: 'Mâu thuẫn bao trùm trong xã hội Pháp trước cách mạng năm 1789 là gì?',
        options: [
          'Giữa các tầng lớp nhân dân Pháp (Đẳng cấp thứ ba) và chế độ phong kiến',
          'Giữa nông dân và bọn chủ đất',
          'Giữa vô sản và tư sản',
          'Giữa tư sản và chế độ phong kiến'
        ],
        correctAnswer: 0,
        explanation: 'Mâu thuẫn bao trùm là giữa toàn thể Đẳng cấp thứ ba (gồm nông dân, tư sản, bình dân thành thị) với chế độ phong kiến chuyên chế (Tăng lữ và Quý tộc).',
        topic: 'CMTS Pháp',
        difficulty: 'medium'
      },
      {
        id: 'ls-5',
        content: 'Nhân dân Pa-ri tấn công ngục Ba-xti, mở đầu cuộc Cách mạng tư sản Pháp vào ngày nào?',
        options: ['Ngày 24 / 7 / 1789', 'Ngày 14 / 8 / 1789', 'Ngày 14 / 7 / 1789', 'Ngày 15 / 7 / 1789'],
        correctAnswer: 2,
        explanation: 'Ngày 14/7/1789, quần chúng tấn công pháo đài - nhà ngục Ba-xti, biểu tượng chế độ phong kiến chuyên chế Pháp, mở đầu cách mạng.',
        topic: 'CMTS Pháp',
        difficulty: 'easy'
      },
      {
        id: 'ls-6',
        content: 'Thành tựu tiêu biểu nhất của cuộc cách mạng công nghiệp ở Anh là gì?',
        options: [
          'Chế tạo ra máy kéo sợi Gien-ni',
          'Chế tạo thành công chiếc đầu máy xe lửa đầu tiên',
          'Chế tạo được máy dệt chạy bằng sức nước',
          'Việc phát minh và cải tiến máy hơi nước của James Watt'
        ],
        correctAnswer: 3,
        explanation: 'Phát minh máy hơi nước của James Watt (1784) tạo ra nguồn động lực mới cho sản xuất, không còn phụ thuộc sức người hay thiên nhiên.',
        topic: 'Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-7',
        content: 'Vì sao Đông Nam Á trở thành mục tiêu xâm lược của các nước tư bản phương Tây từ TK XVI đến giữa TK XIX?',
        options: [
          'Chế độ phong kiến các nước trong vùng đang suy yếu',
          'Khu vực giàu tài nguyên khoáng sản, nông sản',
          'Đông Nam Á có vị trí địa lí - hàng hải chiến lược quan trọng',
          'Cả ba đáp án trên đều đúng'
        ],
        correctAnswer: 3,
        explanation: 'Cả 3 yếu tố: vị trí chiến lược, giàu tài nguyên và sự khủng hoảng của chế độ phong kiến bản địa đã khiến ĐNA thành miếng mồi ngon cho phương Tây.',
        topic: 'Đông Nam Á',
        difficulty: 'easy'
      },
      {
        id: 'ls-8',
        content: 'Những nước nào ở Đông Nam Á đã trở thành thuộc địa của thực dân Pháp?',
        options: [
          'Việt Nam, Lào, Cam-pu-chia (Ba nước Đông Dương)',
          'Việt Nam, Phi-líp-pin, Bru-nây',
          'Việt Nam, Lào, Miến Điện, Mã Lai',
          'Việt Nam, Lào, In-đô-nê-xi-a'
        ],
        correctAnswer: 0,
        explanation: 'Pháp xâm lược và thiết lập Liên bang Đông Dương gồm: Việt Nam, Lào và Cam-pu-chia.',
        topic: 'Đông Nam Á',
        difficulty: 'easy'
      },
      {
        id: 'ls-9',
        content: 'Đầu thế kỉ XIX, nhờ tiến hành cách mạng công nghiệp đầu tiên, nước Anh được mệnh danh là gì?',
        options: ['“Nông trường của thế giới”', '“Công xưởng của thế giới”', '“Cường quốc thứ hai thế giới”', '“Thủ phủ dầu mỏ”'],
        correctAnswer: 1,
        explanation: 'Nước Anh đi đầu trong cách mạng công nghiệp và trở thành "công xưởng của thế giới" (workshop of the world).',
        topic: 'Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-10',
        content: 'Về mặt xã hội, tác động quan trọng nhất của cuộc cách mạng công nghiệp là hình thành hai giai cấp cơ bản nào?',
        options: ['Tư sản và địa chủ', 'Địa chủ và nông dân', 'Công nhân và nông dân', 'Tư sản và Vô sản (công nhân làm thuê)'],
        correctAnswer: 3,
        explanation: 'Cách mạng công nghiệp dẫn tới sự ra đời và đối kháng giữa hai giai cấp chủ yếu của xã hội tư bản: Giai cấp Tư sản và Giai cấp Vô sản.',
        topic: 'Cách mạng công nghiệp',
        difficulty: 'easy'
      },
      {
        id: 'ls-11',
        content: 'Đất nước Đại Việt bị chia cắt thành Đàng Trong và Đàng Ngoài thời Trịnh - Nguyễn, lấy sông nào làm giới tuyến chia cắt?',
        options: ['Sông Cửu Long', 'Sông Hồng', 'Sông Gianh (Quảng Bình)', 'Sông Thu Bồn'],
        correctAnswer: 2,
        explanation: 'Sông Gianh (tỉnh Quảng Bình) là giới tuyến tự nhiên chia cắt hai miền Đàng Trong (chúa Nguyễn) và Đàng Ngoài (vua Lê - chúa Trịnh).',
        topic: 'Xung đột Trịnh - Nguyễn',
        difficulty: 'easy'
      },
      {
        id: 'ls-12',
        content: 'Quá trình thực thi chủ quyền tại hai quần đảo Hoàng Sa và Trường Sa được các chính quyền Việt Nam tiến hành liên tục từ thời điểm nào?',
        options: [
          'Từ thế kỉ XVII (thời chúa Nguyễn) và tiếp nối qua thời Tây Sơn, nhà Nguyễn',
          'Từ thế kỉ XIX thời Pháp thuộc',
          'Từ thế kỉ XV thời vua Lê Thánh Tông',
          'Sau năm 1945'
        ],
        correctAnswer: 0,
        explanation: 'Nhà nước phong kiến Việt Nam đã liên tục thực thi chủ quyền đối với 2 quần đảo Hoàng Sa và Trường Sa từ thế kỉ XVII (chúa Nguyễn lập đội Hoàng Sa, Bắc Hải) đến thời Tây Sơn và các vua nhà Nguyễn.',
        topic: 'Chủ quyền Hoàng Sa - Trường Sa',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'dl8-gk1-tracnghiem',
    title: 'Địa Lí 8 - Đề Cương Giữa HK1 (Vị Trí Lãnh Thổ & Địa Hình Việt Nam)',
    subject: 'Lịch Sử & Địa Lí',
    grade: 'Lớp 8B',
    description: 'Vị trí địa lí, đường biên giới, diện tích, 4 khu vực đồi núi (Tây Bắc, Đông Bắc, Trường Sơn Bắc, Trường Sơn Nam) và các đồng bằng châu thổ lớn.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'dl-sum-1',
        title: 'Vị trí địa lí và phạm vi lãnh thổ Việt Nam',
        keyPoints: [
          'Tọa độ các điểm cực trên đất liền: Cực Bắc (Lũng Cú - Hà Giang), Cực Nam (Đất Mũi - Cà Mau), Cực Tây (Sín Thầu - Điện Biên), Cực Đông (Mũi Đôi, Vạn Thạnh, Vạn Ninh - Khánh Hòa).',
          'Đường biên giới trên đất liền: Dài khoảng 4.600 km (giáp Trung Quốc, Lào, Campuchia).',
          'Đường bờ biển: Dài 3.260 km hình chữ S.',
          'Tổng diện tích lãnh thổ: 331.344 km² (đất liền và hải đảo).',
          'Thiên nhiên mang tính chất nhiệt đới ẩm gió mùa do nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc và chịu ảnh hưởng sâu sắc của Biển Đông.'
        ],
        formulaOrRule: 'Cực Đông: Khánh Hòa | Biên giới bộ: 4.600km | Bờ biển: 3.260km | Diện tích: 331.344 km²'
      },
      {
        id: 'dl-sum-2',
        title: 'Đặc điểm 4 khu vực đồi núi chính của Việt Nam',
        keyPoints: [
          'Vùng núi Tây Bắc: Nằm giữa sông Hồng và sông Cả; địa hình cao và đồ sộ nhất nước ta với dãy Hoàng Liên Sơn (đỉnh Fansipan 3.143m), hướng Tây Bắc - Đông Nam.',
          'Vùng núi Đông Bắc: Nằm ở tả ngạn sông Hồng; chủ yếu là đồi núi thấp hình cánh cung (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều) chụm đầu ở Tam Đảo; địa hình Karst đá vôi độc đáo (vịnh Hạ Long, Ba Bể).',
          'Vùng núi Trường Sơn Bắc: Nằm từ nam sông Cả đến dãy Bạch Mã; các dãy núi song song, so le nhau, địa hình hẹp ngang.',
          'Vùng núi Trường Sơn Nam: Khối núi Kon Tum và khối núi Nam Trung Bộ với các cao nguyên badan xếp tầng (Lâm Viên, Đắk Lắk, Pleiku...).'
        ]
      }
    ],
    questions: [
      {
        id: 'dl-1',
        content: 'Điểm cực Đông trên đất liền của nước ta thuộc tỉnh nào?',
        options: ['Tuyên Quang', 'Điện Biên', 'Khánh Hòa (Mũi Đôi)', 'Cà Mau'],
        correctAnswer: 2,
        explanation: 'Điểm cực Đông đất liền thuộc Mũi Đôi, xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hòa.',
        topic: 'Vị trí địa lí',
        difficulty: 'easy'
      },
      {
        id: 'dl-2',
        content: 'Đường biên giới trên đất liền của Việt Nam dài khoảng bao nhiêu km?',
        options: ['4.600 km', '2.360 km', '3.260 km', '1.650 km'],
        correctAnswer: 0,
        explanation: 'Đường biên giới đất liền dài hơn 4.600 km (giáp Trung Quốc, Lào và Campuchia). (3.260 km là chiều dài bờ biển).',
        topic: 'Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-3',
        content: 'Tổng diện tích phần đất liền và các hải đảo của Việt Nam là bao nhiêu?',
        options: ['4.600 km²', '3.260 km²', '331.344 km²', '2.360 km²'],
        correctAnswer: 2,
        explanation: 'Theo số liệu thống kê chính thức, tổng diện tích đất tự nhiên của nước ta là 331.344 km².',
        topic: 'Phạm vi lãnh thổ',
        difficulty: 'easy'
      },
      {
        id: 'dl-4',
        content: 'Địa hình các-xtơ (karst) đá vôi khá phổ biến, có cảnh quan đẹp như hồ Ba Bể, vịnh Hạ Long là đặc điểm của miền địa hình nào?',
        options: ['Vùng núi Tây Bắc', 'Vùng núi Đông Bắc', 'Vùng Trường Sơn Bắc', 'Vùng Trường Sơn Nam'],
        correctAnswer: 1,
        explanation: 'Vùng núi Đông Bắc có diện tích đá vôi rộng lớn, tạo nên cảnh quan karst nhiệt đới nổi tiếng thế giới như Vịnh Hạ Long, hồ Ba Bể.',
        topic: 'Địa hình vùng núi',
        difficulty: 'easy'
      },
      {
        id: 'dl-5',
        content: 'Đặc điểm nào sau đây thể hiện rõ nhất địa hình của vùng núi Tây Bắc?',
        options: [
          'Chủ yếu là đồi núi thấp, các dãy núi có hướng vòng cung.',
          'Có nhiều cao nguyên badan xếp tầng với bề mặt tương đối bằng phẳng.',
          'Có các dãy núi cao, hiểm trở và đồ sộ nhất nước ta, tiêu biểu là dãy Hoàng Liên Sơn.',
          'Địa hình chủ yếu là đồng bằng phù sa rộng lớn.'
        ],
        correctAnswer: 2,
        explanation: 'Vùng núi Tây Bắc có địa hình cao và đồ sộ nhất nước ta, chạy theo hướng Tây Bắc - Đông Nam với dãy Hoàng Liên Sơn đỉnh Fansipan.',
        topic: 'Địa hình vùng núi Tây Bắc',
        difficulty: 'easy'
      },
      {
        id: 'dl-6',
        content: 'Đặc điểm địa hình tiêu biểu nổi bật nhất của vùng núi Trường Sơn Nam là gì?',
        options: [
          'Các cao nguyên badan xếp tầng rộng lớn, bề mặt lượn sóng tương đối bằng phẳng',
          'Các dãy núi hình cánh cung chụm đầu lại ở Tam Đảo',
          'Các dãy núi cao đồ sộ nhất nước ta',
          'Các dãy núi song song, so le nhau'
        ],
        correctAnswer: 0,
        explanation: 'Trường Sơn Nam nổi bật với cấu trúc bất đối xứng sườn đông dốc và sườn tây thoai thoải gồm các cao nguyên badan xếp tầng (Pleiku, Đắk Lắk, Mơ Nông, Lâm Viên).',
        topic: 'Địa hình Trường Sơn Nam',
        difficulty: 'medium'
      },
      {
        id: 'dl-7',
        content: 'Dạng địa hình nào chiếm tỉ lệ lớn nhất và là bộ phận quan trọng nhất trong cấu trúc địa hình Việt Nam?',
        options: ['Đồi núi (chiếm 3/4 diện tích)', 'Đồng bằng', 'Cao nguyên', 'Bán bình nguyên'],
        correctAnswer: 0,
        explanation: 'Đồi núi chiếm 3/4 diện tích lãnh thổ đất liền nước ta, là khung xương chính của địa hình Việt Nam.',
        topic: 'Đặc điểm chung địa hình',
        difficulty: 'easy'
      },
      {
        id: 'dl-8',
        content: 'Vị trí địa lí và bán đảo tiếp giáp Biển Đông làm cho thiên nhiên nước ta mang tính chất cơ bản nào?',
        options: ['Cận nhiệt đới trên núi', 'Nhiệt đới khô trên núi', 'Nhiệt đới ẩm gió mùa', 'Cận xích đạo gió mùa'],
        correctAnswer: 2,
        explanation: 'Việt Nam nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu, tiếp giáp Biển Đông ấm nên mang tính chất nhiệt đới ẩm gió mùa.',
        topic: 'Vị trí địa lí',
        difficulty: 'easy'
      }
    ]
  }
];
