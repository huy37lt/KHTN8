export interface Flashcard {
  id: string;
  subject: string;
  topic: string;
  front: string; // Question or concept
  back: string;  // Core answer or rule
  mnemonic?: string; // Mẹo nhớ nhanh
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const FLASHCARDS_DATA: Flashcard[] = [
  // --- TOÁN 8 ---
  {
    id: 'fc-m-1',
    subject: 'Toán 8',
    topic: 'Tứ giác',
    front: 'Dấu hiệu nào biến Hình bình hành thành Hình thoi?',
    back: '1. Có 2 cạnh kề bằng nhau.\n2. Có 2 đường chéo vuông góc với nhau.\n3. Có 1 đường chéo là đường phân giác của một góc.',
    mnemonic: '2 cạnh kề bằng nhau HOẶC 2 đường chéo vuông góc.'
  },
  {
    id: 'fc-m-2',
    subject: 'Toán 8',
    topic: 'Tứ giác',
    front: 'Dấu hiệu nào biến Hình bình hành thành Hình chữ nhật?',
    back: '1. Có một góc vuông (90°).\n2. Có hai đường chéo bằng nhau.',
    mnemonic: '1 góc vuông HOẶC 2 đường chéo bằng nhau.'
  },
  {
    id: 'fc-m-3',
    subject: 'Toán 8',
    topic: 'Đại số',
    front: 'Khai triển hằng đẳng thức hiệu hai lập phương: A³ - B³ = ?',
    back: '(A - B)(A² + AB + B²)\n(Lưu ý: trong ngoặc sau là bình phương thiếu của một tổng mang dấu CỘNG: + AB).',
    mnemonic: 'A³ - B³ có dấu trừ ở (A - B), còn trong ngoặc sau toàn dấu cộng!'
  },
  {
    id: 'fc-m-4',
    subject: 'Toán 8',
    topic: 'Đại số',
    front: 'Bậc của một đơn thức có hệ số khác 0 được xác định thế nào?',
    back: 'Bậc là tổng số mũ của tất cả các biến có trong đơn thức đó.\nVí dụ: 5x³y²z có bậc là 3 + 2 + 1 = 6.',
    mnemonic: 'Cộng hết tất cả số mũ của các chữ lại!'
  },

  // --- KHTN 8 ---
  {
    id: 'fc-khtn-1',
    subject: 'KHTN 8',
    topic: 'Hóa học - Khí',
    front: 'Ở điều kiện chuẩn (25°C, 1 bar), 1 mol chất khí bất kì chiếm thể tích bao nhiêu?',
    back: '24,79 lít.\nCông thức: V = n × 24,79',
    mnemonic: 'SGK Mới: Nhân 24,79 (KHÔNG PHẢI 22,4 như SGK cũ!).'
  },
  {
    id: 'fc-khtn-2',
    subject: 'KHTN 8',
    topic: 'Vật lý - Khối lượng riêng',
    front: 'Công thức tính khối lượng riêng và quy tắc đổi từ g/cm³ sang kg/m³?',
    back: 'D = m / V\n1 g/cm³ = 1 000 kg/m³.\n(Ví dụ nước có D = 1 g/cm³ = 1 000 kg/m³).',
    mnemonic: 'Từ g/cm³ sang kg/m³: NHÂN 1000.'
  },
  {
    id: 'fc-khtn-3',
    subject: 'KHTN 8',
    topic: 'Sinh học - Hệ tiêu hóa',
    front: 'Quá trình tiêu hóa và hấp thụ các chất dinh dưỡng diễn ra triệt để nhất ở cơ quan nào?',
    back: 'Ruột non.\nNhờ có dịch tụy, dịch mật và dịch ruột cùng hàng triệu lông ruột tăng diện tích hấp thu.',
    mnemonic: 'Ruột non là "nhà máy hấp thụ dinh dưỡng" số 1 cơ thể!'
  },

  // --- NGỮ VĂN 8 ---
  {
    id: 'fc-van-1',
    subject: 'Ngữ Văn 8',
    topic: 'Thực hành Tiếng Việt',
    front: 'Thế nào là Trợ từ? Cho 3 ví dụ trợ từ thường gặp.',
    back: 'Trợ từ là những từ chuyên đi kèm một từ ngữ trong câu để nhấn mạnh hoặc biểu thị thái độ đánh giá sự vật, sự việc.\nVí dụ: chính, đích, ngay, những, có...',
    mnemonic: 'Nhấn mạnh sự việc: "Chính nó!", "Ăn những 3 bát".'
  },
  {
    id: 'fc-van-2',
    subject: 'Ngữ Văn 8',
    topic: 'Đọc hiểu',
    front: 'Hình tượng nhân vật ông lão làng Xuân Đình trong "Bên bờ Thiên Mạc" có đặc điểm gì nổi bật?',
    back: 'Từng tham dự Hội nghị Diên Hồng, trên cánh tay xăm chàm hai chữ "Sát Thát", lời nói thẳng thắn bộc trực, đại diện cho lòng yêu nước kiên cường của nhân dân Đại Việt thời Trần.',
    mnemonic: 'Hội nghị Diên Hồng + Xăm hai chữ "Sát Thát".'
  },

  // --- TIẾNG ANH 8 ---
  {
    id: 'fc-ta-1',
    subject: 'Tiếng Anh 8',
    topic: 'Vocabulary',
    front: 'Thuật ngữ "Digital Detox" và "FOMO" có nghĩa là gì?',
    back: '- Digital Detox: Khoảng thời gian cai thiết bị điện tử (ngừng dùng điện thoại/máy tính để thư giãn).\n- FOMO (Fear Of Missing Out): Nỗi sợ bị bỏ lỡ các tin tức, hoạt động thú vị của bạn bè trên mạng.',
    mnemonic: 'Detox = Cai thiết bị | FOMO = Sợ bỏ lỡ tin'
  },
  {
    id: 'fc-ta-2',
    subject: 'Tiếng Anh 8',
    topic: 'Grammar',
    front: 'Quy tắc so sánh hơn của trạng từ kết thúc bằng đuôi -ly (như fluently, carefully)?',
    back: 'S + V + more + adverb + than...\nVí dụ: Jane speaks English more fluently than us.\nBất quy tắc: well -> better, badly -> worse, hard -> harder.',
    mnemonic: 'Trạng từ đuôi -ly: Thêm MORE đằng trước!'
  },

  // --- LỊCH SỬ & ĐỊA LÍ 8 ---
  {
    id: 'fc-ls-1',
    subject: 'Lịch Sử & Địa Lí',
    topic: 'Lịch sử Cận đại',
    front: 'Ngày 14/7/1789 diễn ra sự kiện lịch sử gì nổi tiếng?',
    back: 'Quần chúng nhân dân Pa-ri tấn công và chiếm pháo đài - nhà ngục Ba-xti, mở đầu cuộc Cách mạng tư sản Pháp triệt để nhất thời cận đại.',
    mnemonic: '14/7/1789: Phá ngục Ba-xti Pháp.'
  },
  {
    id: 'fc-ls-2',
    subject: 'Lịch Sử & Địa Lí',
    topic: 'Lịch sử Việt Nam',
    front: 'Chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa được các chúa Nguyễn xác lập từ thời gian nào?',
    back: 'Từ thế kỉ XVII thông qua việc thành lập và cử Đội Hoàng Sa, Đội Bắc Hải ra đo đạc hải trình, khai thác tài nguyên và cắm mốc chủ quyền.',
    mnemonic: 'Thế kỉ XVII - Đội Hoàng Sa triều Nguyễn.'
  },
  {
    id: 'fc-dl-1',
    subject: 'Lịch Sử & Địa Lí',
    topic: 'Địa lí Việt Nam',
    front: 'Đặc điểm nổi bật nhất của vùng núi Tây Bắc và Đông Bắc là gì?',
    back: '- Tây Bắc: Địa hình cao và đồ sộ nhất nước ta (dãy Hoàng Liên Sơn, đỉnh Fansipan 3.143m, hướng Tây Bắc - Đông Nam).\n- Đông Bắc: Chủ yếu là đồi núi thấp với các cánh cung chụm đầu ở Tam Đảo, có nhiều cảnh quan karst đá vôi đẹp (vịnh Hạ Long, hồ Ba Bể).',
    mnemonic: 'Tây Bắc: Cao đồ sộ Hoàng Liên Sơn | Đông Bắc: Cánh cung Tam Đảo & Vịnh Hạ Long'
  },

  // --- TIN HỌC 8 ---
  {
    id: 'fc-tin-1',
    subject: 'Tin Học 8',
    topic: 'Thế hệ máy tính',
    front: 'Linh kiện điện tử cốt lõi của máy tính thế hệ 1, thế hệ 2 và thế hệ 3 là gì?',
    back: '- Thế hệ 1: Đèn điện tử chân không (rất to, nóng, tốn điện).\n- Thế hệ 2: Bóng bán dẫn (Transistor).\n- Thế hệ 3: Mạch tích hợp (IC) - bắt đầu có bàn phím và màn hình.',
    mnemonic: '1: Đèn chân không -> 2: Bóng bán dẫn -> 3: Mạch IC'
  },
  {
    id: 'fc-tin-2',
    subject: 'Tin Học 8',
    topic: 'Thuật toán',
    front: 'Để nhân vật vẽ một tam giác đều, góc quay trái mỗi bước lặp là bao nhiêu độ?',
    back: '120 độ.\nGiải thích: Đa giác đều 3 cạnh khép kín quay đủ 360°, nên góc quay ngoài mỗi góc là 360° / 3 = 120° (KHÔNG PHẢI 60°).',
    mnemonic: 'Bẫy đề thi: Góc quay ngoài là 120°, không chọn 60°!'
  },

  // --- CÔNG NGHỆ 8 ---
  {
    id: 'fc-cn-1',
    subject: 'Công Nghệ 8',
    topic: 'Bản vẽ kĩ thuật',
    front: 'Kích thước tiêu chuẩn của khổ giấy A4 và A0 là bao nhiêu?',
    back: '- Khổ A4: 297 × 210 mm.\n- Khổ A0: 1 189 × 841 mm (gấp 16 lần diện tích khổ A4).',
    mnemonic: 'A4: 297 x 210 mm | A0: 1 189 x 841 mm.'
  },
  {
    id: 'fc-cn-2',
    subject: 'Công Nghệ 8',
    topic: 'Hình chiếu vuông góc',
    front: 'Vị trí của hình chiếu bằng và hình chiếu cạnh so với hình chiếu đứng theo phương pháp góc thứ nhất?',
    back: '- Hình chiếu bằng: Đặt ở PHÍA DƯỚI hình chiếu đứng.\n- Hình chiếu cạnh: Đặt ở BÊN PHẢI hình chiếu đứng.',
    mnemonic: 'Bằng ở DƯỚI, Cạnh ở BÊN PHẢI.'
  },

  // --- GDCD 8 ---
  {
    id: 'fc-gdcd-1',
    subject: 'GDCD 8',
    topic: 'Lao động sáng tạo',
    front: 'Sáng tạo có phải là khả năng chỉ do bẩm sinh quy định hay không?',
    back: 'KHÔNG PHẢI. Sáng tạo là phẩm chất có thể rèn luyện được thông qua học tập, quan sát và không ngừng tìm tòi cải tiến công việc hằng ngày.',
    mnemonic: '1% bẩm sinh, 99% mồ hôi và rèn luyện!'
  },

  // --- HĐTN 8 ---
  {
    id: 'fc-hdtn-1',
    subject: 'HĐTN & GDĐP',
    topic: 'Quản trị cảm xúc',
    front: 'Khi bị điểm kém hoặc đối mặt với tức giận, thất vọng, 3 bước xử lý cảm xúc tích cực là gì?',
    back: '1. Trấn an: Hít thở sâu, dừng lại vài giây để lấy lại bình tĩnh.\n2. Nhận diện & phân tích: Khách quan xem lại bài tìm lỗi sai và lỗ hổng kiến thức.\n3. Hành động tích cực: Hỏi thầy cô, bạn bè và lập kế hoạch rèn luyện bứt phá.',
    mnemonic: 'Hít thở sâu -> Phân tích lỗi -> Lên kế hoạch bứt phá!'
  }
];
