import { WrittenQuestion } from './writtenQuestions';

export const ADDITIONAL_WRITTEN_QUESTIONS: WrittenQuestion[] = [
  // ===================== TIẾNG ANH 8 =====================
  {
    id: 'ta-rw-1',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite without changing meaning: I am interested in learning English. (Start with: I like...)',
    answer: '→ I like learning English. (hoặc: I like to learn English.)',
    guide: 'be interested in + V-ing = like + V-ing / to-V'
  },
  {
    id: 'ta-rw-2',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: Lan likes using the computer best in her free time. (Start with: Lan’s favourite...)',
    answer: '→ Lan’s favourite leisure activity is using the computer (in her free time).',
    guide: 'favourite activity = what one likes best'
  },
  {
    id: 'ta-rw-3',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: I am interested in going camping with my close friends. (Start with: I fancy...)',
    answer: '→ I fancy going camping with my close friends.',
    guide: 'fancy + V-ing = be interested in + V-ing'
  },
  {
    id: 'ta-rw-4',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: It is not a problem for me to take her to the cinema. (Start with: I don’t mind...)',
    answer: '→ I don’t mind taking her to the cinema.',
    guide: 'not a problem = don\'t mind + V-ing'
  },
  {
    id: 'ta-rw-5',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: Mr. Smith is wealthier than Mr. Brown. (Start with: Mr. Brown...)',
    answer: '→ Mr. Brown is poorer than Mr. Smith. (hoặc: Mr. Brown is not as wealthy as Mr. Smith.)'
  },
  {
    id: 'ta-rw-6',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: Today it is colder than yesterday. (Start with: Yesterday...)',
    answer: '→ Yesterday was warmer than today. (hoặc: Yesterday was not as cold as today.)'
  },
  {
    id: 'ta-rw-7',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Transformation',
    question: 'Rewrite: Mary drives more carefully than Tony. (Start with: Tony drives...)',
    answer: '→ Tony drives more carelessly than Mary. (hoặc: Tony does not drive as carefully as Mary.)'
  },
  {
    id: 'ta-rw-8',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Combination',
    question: 'Combine sentences using bracket word: I’m tired. I’m going to bed early tonight. (so)',
    answer: '→ I’m tired, so I’m going to bed early tonight.'
  },
  {
    id: 'ta-rw-9',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Combination',
    question: 'Combine sentences: She loves to read. She doesn’t have much time for it. (but)',
    answer: '→ She loves to read, but she doesn’t have much time for it.'
  },
  {
    id: 'ta-rw-10',
    subject: 'Tiếng Anh 8',
    type: 'short',
    topic: 'Sentence Combination',
    question: 'Combine sentences: I want to learn English. I’m taking an English class. (therefore)',
    answer: '→ I want to learn English; therefore, I’m taking an English class.'
  },

  // ===================== LỊCH SỬ 8 =====================
  {
    id: 'ls-tl-1',
    subject: 'Lịch Sử 8',
    type: 'essay',
    topic: 'Xung đột Nam - Bắc triều & Trịnh - Nguyễn',
    question: 'Câu 1 (Tự luận): Phân tích hệ quả của cuộc xung đột Nam - Bắc triều và xung đột Trịnh - Nguyễn.',
    answer: '1. Hệ quả tiêu cực:\n- Đất nước bị chia cắt kéo dài: Nam - Bắc triều (gần 60 năm), Trịnh - Nguyễn chia cắt Đại Việt thành Đàng Trong và Đàng Ngoài qua sông Gianh hơn 200 năm.\n- Chiến tranh liên miên gây tổn thất nặng nề về người và của, ruộng đồng bị tàn phá, đời sống nhân dân vô cùng cực khổ, sản xuất đình trệ, phân tán khối đại đoàn kết dân tộc.\n\n2. Hệ quả tích cực (Đặc biệt ở Đàng Trong):\n- Thúc đẩy chính quyền các chúa Nguyễn từng bước khai phá, mở mang bờ cõi về phương Nam đến tận mũi Cà Mau.\n- Đẩy mạnh giao thương quốc tế qua các thương cảng sầm uất (Hội An, Nước Mặn).\n- Tiến hành xác lập và thực thi chủ quyền liên tục đối với hai quần đảo Hoàng Sa và Trường Sa thông qua Hải đội Hoàng Sa và Đội Bắc Hải.'
  },
  {
    id: 'ls-tl-2',
    subject: 'Lịch Sử 8',
    type: 'essay',
    topic: 'Cách mạng tư sản & Cách mạng công nghiệp',
    question: 'Câu 2 (Tự luận): a) Trình bày tính chất và ý nghĩa của cách mạng tư sản Anh, Pháp.\nb) Những tác động quan trọng của cách mạng công nghiệp đối với sản xuất và xã hội là gì?',
    answer: 'a) Tính chất và ý nghĩa của CMTS Anh & Pháp:\n- CMTS Anh: Là cuộc cách mạng không triệt để vì vẫn duy trì ngôi vua (quân chủ lập hiến) và quyền lợi của tầng lớp quý tộc mới; mở đường cho chủ nghĩa tư bản phát triển sớm nhất.\n- CMTS Pháp: Là cuộc cách mạng tư sản triệt để nhất thời cận đại vì đã lật đổ hoàn toàn chế độ phong kiến chuyên chế, xóa bỏ tàn dư phong kiến, thiết lập chế độ cộng hòa, ban bố "Tuyên ngôn Nhân quyền và Dân quyền" tiến bộ.\n\nb) Tác động của Cách mạng công nghiệp:\n- Về kinh tế - sản xuất: Thay thế lao động thủ công bằng máy móc hơi nước, nâng cao vượt bậc năng suất lao động, hình thành các trung tâm công nghiệp và đô thị hiện đại, đưa nước Anh thành "công xưởng của thế giới".\n- Về mặt xã hội: Hình thành hai giai cấp cơ bản đối kháng sâu sắc: Giai cấp Tư sản (nắm tư liệu sản xuất) và Giai cấp Vô sản (công nhân làm thuê, bị bóc lột).'
  },
  {
    id: 'ls-tl-3',
    subject: 'Lịch Sử 8',
    type: 'essay',
    topic: 'Khai phá vùng đất phía Nam',
    question: 'Câu 3 (Tự luận): Trình bày khái quát công cuộc khai phá vùng đất phía Nam trong các thế kỉ XVI - XVIII của các chúa Nguyễn.',
    answer: '- Năm 1558, Nguyễn Hoàng vào trấn thủ Thuận Hóa, mở đầu quá trình di dân lập ấp về phía Nam.\n- Các chúa Nguyễn tiếp tục mở rộng lãnh thổ qua vùng đất duyên hải Nam Trung Bộ đến đồng bằng sông Cửu Long, thành lập phủ Gia Định (1698), khai phá vùng đất Hà Tiên (1708).\n- Đến cuối thế kỉ XVIII, lãnh thổ Đàng Trong đã trải dài từ phía nam đèo Hoành Sơn đến tận mũi Cà Mau.\n- Các chúa Nguyễn cho thành lập các Đội Hoàng Sa, Bắc Hải để khai thác sản vật, đo đạc hải trình và cắm mốc khẳng định chủ quyền vững chắc trên hai quần đảo Hoàng Sa và Trường Sa.'
  },

  // ===================== ĐỊA LÍ 8 =====================
  {
    id: 'dl-tl-1',
    subject: 'Địa Lí 8',
    type: 'essay',
    topic: 'Vị trí địa lí & Phạm vi lãnh thổ',
    question: 'Câu 1: a) Trình bày đặc điểm vị trí địa lí và lãnh thổ Việt Nam.\nb) Phân tích ảnh hưởng của vị trí địa lí đối với sự hình thành đặc điểm địa lí tự nhiên Việt Nam.',
    answer: 'a) Đặc điểm vị trí và lãnh thổ:\n- Nằm ở rìa phía đông của bán đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.\n- Tọa độ đất liền: Điểm cực Bắc (23°23\'B tại Lũng Cú, Hà Giang), cực Nam (8°34\'B tại Đất Mũi, Cà Mau), cực Tây (102°09\'Đ tại Sín Thầu, Điện Biên), cực Đông (109°28\'Đ tại Vạn Thạnh, Khánh Hòa).\n- Lãnh thổ gồm vùng đất (331.344 km²), vùng biển (trên 1 triệu km² với hàng nghìn đảo và 2 quần đảo Hoàng Sa, Trường Sa) và vùng trời bao trùm.\n\nb) Ảnh hưởng đối với tự nhiên:\n- Thiên nhiên mang tính chất nhiệt đới ẩm gió mùa: nằm hoàn toàn trong vùng nội chí tuyến Bắc bán cầu đón nhiều ánh nắng, tiếp giáp Biển Đông giàu hơi ẩm và nằm trong khu vực hoạt động của gió mùa châu Á.\n- Sinh vật đa dạng, phong phú do nằm trên đường di lưu, di cư của nhiều luồng động - thực vật.\n- Địa hình và cảnh quan phân hóa đa dạng theo chiều Bắc - Nam và Tây - Đông.\n- Thường xuyên chịu nhiều thiên tai: bão, lũ lụt, hạn hán.'
  },
  {
    id: 'dl-tl-2',
    subject: 'Địa Lí 8',
    type: 'essay',
    topic: 'Đặc điểm chung địa hình Việt Nam',
    question: 'Câu 2: a) Trình bày các đặc điểm chung của địa hình Việt Nam.\nb) Lấy ví dụ thể hiện tác động của khí hậu nhiệt đới ẩm gió mùa và con người đến địa hình nước ta.',
    answer: 'a) Các đặc điểm chung của địa hình Việt Nam:\n1. Đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng chủ yếu là đồi núi thấp (dưới 1000m chiếm tới 85%); đồng bằng chỉ chiếm 1/4 diện tích.\n2. Cấu trúc địa hình gồm 2 hướng chính: Hướng Tây Bắc - Đông Nam (vùng núi Tây Bắc, Trường Sơn Bắc) và hướng Cánh cung (vùng núi Đông Bắc, Trường Sơn Nam).\n3. Địa hình được trẻ lại và có tính chất phân bậc rõ rệt sau vận động Tân kiến tạo.\n4. Mang tính chất nhiệt đới ẩm gió mùa và chịu tác động sâu sắc của con người.\n\nb) Ví dụ thực tế tác động:\n- Tác động của khí hậu ẩm gió mùa: Hiện tượng xói mòn, rửa trôi mạnh ở vùng đồi núi dốc; tạo nên các hang động karst đá vôi kì ảo (như vịnh Hạ Long, động Phong Nha, hồ Ba Bể); quá trình bồi tụ phù sa màu mỡ tạo nên đồng bằng châu thổ sông Hồng và sông Cửu Long.\n- Tác động của con người: Đắp đê ngăn lũ dài hàng nghìn km ở sông Hồng, san đồi bạt núi làm đường giao thông hầm đèo, tạo ruộng bậc thang ở Tây Bắc, xây dựng các hồ chứa thủy điện (Sơn La, Hòa Bình).'
  },

  // ===================== TIN HỌC 8 =====================
  {
    id: 'tin-tl-1',
    subject: 'Tin Học 8',
    type: 'essay',
    topic: 'Công nghệ thông tin trong đời sống',
    question: 'Câu 1 (Tự luận): Lấy ví dụ cho thấy thế giới đang biến đổi nhanh chóng và sâu sắc nhờ sự phát triển của công nghệ máy tính.',
    answer: 'Ví dụ cụ thể minh họa:\n1. Giao tiếp & Làm việc: Trước đây mất nhiều ngày gửi thư tay, nay tin nhắn và họp video (Zoom, Google Meet) kết nối xuyên lục địa chỉ trong 1 giây.\n2. Giáo dục & Học tập: Học sinh có thể học trực tuyến, làm bài luyện thi thông minh, hỏi đáp kiến thức ngay với các trợ lý AI như ChatGPT, Gemini.\n3. Giao thông & Thanh toán: Đặt xe qua app Grab, thanh toán quét mã QR/Ví điện tử không dùng tiền mặt, xe tự lái và máy bay không người lái (drone) giao hàng.\n4. Y tế: Máy chụp CT/MRI, trí tuệ nhân tạo hỗ trợ chẩn đoán hình ảnh và phẫu thuật bằng robot chính xác từng milimet.'
  },
  {
    id: 'tin-tl-2',
    subject: 'Tin Học 8',
    type: 'essay',
    topic: 'Thông tin số & Tiêu chí tin cậy',
    question: 'Câu 2 (Tự luận): Cho biết đặc điểm của thông tin số. Dựa vào những tiêu chí nào để xác định một thông tin trên mạng có đáng tin cậy hay không?',
    answer: '1. Đặc điểm của thông tin số:\n- Thu thập, xử lý và lan truyền với tốc độ cực nhanh trên phạm vi toàn cầu.\n- Dung lượng lưu trữ khổng lồ, dễ dàng sao chép, chỉnh sửa, chia sẻ và truy cập từ xa qua mạng.\n- Đa dạng về hình thức (văn bản, âm thanh, hình ảnh, video số).\n- Dễ bị làm giả hoặc xuyên tạc nếu không được kiểm chứng.\n\n2. Tiêu chí xác định thông tin đáng tin cậy:\n- Nguồn gốc & Tác giả: Xuất phát từ cơ quan nhà nước (đuôi .gov.vn), tổ chức giáo dục (.edu.vn), cơ quan báo chí uy tín hoặc chuyên gia có tên tuổi.\n- Tính thời sự: Thời gian xuất bản gần với hiện tại, không phải tin cũ bị "đào lại".\n- Tính xác thực & Kiểm chứng: Có số liệu dẫn chứng cụ thể, trùng khớp với các nguồn tin chính thống khác.\n- Tính khách quan: Không mang định kiến, câu view giật gân hay mục đích lừa đảo.'
  },
  {
    id: 'tin-tl-3',
    subject: 'Tin Học 8',
    type: 'essay',
    topic: 'Lịch sử máy tính & Thế hệ 1',
    question: 'Câu 3 (Tự luận): Máy tính điện tử được phân chia thành những thế hệ nào? Nêu đặc điểm của máy tính thế hệ thứ nhất.',
    answer: 'Phân chia 5 thế hệ máy tính:\n- Thế hệ 1 (1945-1955): Đèn điện tử chân không.\n- Thế hệ 2 (1955-1965): Bóng bán dẫn (transistor).\n- Thế hệ 3 (1965-1974): Mạch tích hợp (IC).\n- Thế hệ 4 (1974-1990): Mạch tích hợp quy mô rất lớn (VLSI), máy tính cá nhân ra đời.\n- Thế hệ 5 (1990 đến nay): Trí tuệ nhân tạo (AI), siêu máy tính, điện toán đám mây.\n\nĐặc điểm của máy tính thế hệ thứ nhất (như máy ENIAC):\n- Linh kiện chính: Sử dụng hàng chục nghìn bóng đèn điện tử chân không.\n- Kích thước: Cực kỳ đồ sộ, chiếm trọn cả gian phòng lớn nặng hàng chục tấn.\n- Tiêu thụ điện năng: Rất lớn và tỏa nhiệt cực mạnh, hay bị hỏng hóc bóng đèn.\n- Tốc độ tính toán: Khoảng vài nghìn phép tính/giây (rất chậm so với máy tính hiện đại).\n- Bộ nhớ & Nhập dữ liệu: Rất nhỏ, nhập dữ liệu bằng bìa đục lỗ và lập trình bằng ngôn ngữ máy.'
  },
  {
    id: 'tin-tl-4',
    subject: 'Tin Học 8',
    type: 'essay',
    topic: 'Đạo đức và Văn hóa số',
    question: 'Câu 4 (Tự luận): Kể tên một vài biểu hiện vi phạm pháp luật, đạo đức và văn hóa khi dùng công nghệ số. Khi tạo ra các sản phẩm số, em cần chú ý điều gì?',
    answer: '1. Biểu hiện vi phạm:\n- Chụp ảnh, quay lén người khác hoặc chụp ở nơi bị cấm (trong Lăng Bác, khu quân sự) rồi đăng mạng.\n- Sử dụng phần mềm bẻ khóa (crack), tải phim nhạc lậu vi phạm bản quyền.\n- Phát tán thông tin sai sự thật, xúc phạm danh dự, bắt nạt trực tuyến (cyberbullying).\n- Đánh cắp tài khoản cá nhân, lừa đảo chiếm đoạt tài sản trên mạng.\n\n2. Chú ý khi tạo sản phẩm số (bài trình chiếu, video...):\n- Sử dụng ngôn ngữ lành mạnh, văn minh, trong sáng.\n- Tôn trọng quyền tác giả: Ghi rõ nguồn gốc hoặc xin phép khi sử dụng tư liệu, hình ảnh của người khác.\n- Đảm bảo thông tin trình bày là chính xác, hữu ích và phù hợp thuần phong mỹ tục.'
  },

  // ===================== GDCD 8 =====================
  {
    id: 'gdcd-tl-1',
    subject: 'GDCD 8',
    type: 'essay',
    topic: 'Tập làm văn ngắn: Suy nghĩ về sáng tạo',
    question: 'Câu 1 (Tự luận): Có ý kiến cho rằng: “Sáng tạo là khả năng bẩm sinh của con người, không thể rèn luyện mà có được. Người nào sinh ra đã không có năng khiếu thì có cố gắng cũng chỉ làm theo cách có sẵn mà thôi.” Hãy viết một đoạn văn (5–7 câu) bày tỏ suy nghĩ của em về ý kiến này.',
    answer: 'Đoạn văn tham khảo chuẩn 5-7 câu:\nEm hoàn toàn không đồng tình với ý kiến trên. Đúng là mỗi người sinh ra có thể có những thiên hướng khác nhau, nhưng năng lực sáng tạo không phải là một đặc ân bất biến chỉ dành cho một số ít người. Trong thực tế, sự sáng tạo được nuôi dưỡng và bồi đắp từ lòng say mê học hỏi, thái độ kiên trì và tinh thần không ngừng cải tiến công việc hằng ngày. Khi chúng ta chủ động quan sát, chịu khó tìm tòi những cách giải mới hay đề xuất giải pháp tối ưu cho một bài toán, đó chính là biểu hiện của sáng tạo. Nhà bác học Thomas Edison từng khẳng định: thiên tài chỉ có 1% là cảm hứng bẩm sinh, còn 99% là mồ hôi và sự rèn luyện bền bỉ. Vì vậy, chỉ cần có ý chí vượt khó và tinh thần cầu thị, bất kỳ ai trong chúng ta cũng có thể trở thành người lao động sáng tạo.'
  },
  {
    id: 'gdcd-tl-2',
    subject: 'GDCD 8',
    type: 'essay',
    topic: 'Tập làm văn ngắn: Sáng tạo trong lao động chân tay',
    question: 'Câu 2 (Tự luận): Có ý kiến cho rằng: “Lao động chân tay thì không cần sáng tạo, vì công việc lặp đi lặp lại hằng ngày, chỉ cần làm đúng và chăm chỉ là đủ. Sáng tạo là việc của những người lao động trí óc.” Hãy viết một đoạn văn (5–7 câu) bày tỏ suy nghĩ của em về ý kiến này.',
    answer: 'Đoạn văn tham khảo chuẩn 5-7 câu:\nÝ kiến trên là một quan niệm hoàn toàn phiến diện và sai lầm về bản chất của lao động. Dù là lao động trí óc hay lao động chân tay thì sự sáng tạo luôn đóng vai trò quyết định đến năng suất và chất lượng sản phẩm. Người nông dân cải tiến chiếc cày, người thợ cơ khí thiết kế đồ gá thông minh hay người công nhân may sắp xếp lại thao tác để giảm ùn ứ dây chuyền đều là những tấm gương sáng tạo xuất sắc. Nếu lao động chân tay chỉ dập khuôn máy móc theo lối mòn cũ thì công việc sẽ mãi vất vả và năng suất không thể bứt phá. Sự kết hợp nhuần nhuyễn giữa bàn tay khéo léo và khối óc biết trăn trở tìm tòi cải tiến chính là chìa khóa tạo ra giá trị mới cho xã hội. Do đó, bất kể làm nghề gì, tinh thần sáng tạo luôn là phẩm chất quý giá cần được khích lệ ở mỗi con người.'
  },
  {
    id: 'gdcd-tl-3',
    subject: 'GDCD 8',
    type: 'essay',
    topic: 'Tôn trọng sự đa dạng dân tộc',
    question: 'Câu 3 (Tự luận): Hãy nêu biểu hiện và ý nghĩa của việc tôn trọng sự đa dạng của các dân tộc.',
    answer: '1. Biểu hiện:\n- Luôn hòa nhã, cởi mở, bình đẳng, không phân biệt đối xử hay kì thị màu da, ngôn ngữ, tôn giáo và văn hóa của bất kỳ dân tộc nào.\n- Tích cực tìm hiểu, trân trọng trang phục truyền thống, phong tục tập quán tốt đẹp của các dân tộc anh em (như trang phục Thái, lễ hội Mông, then Tày...).\n- Tiếp thu có chọn lọc những nét đẹp văn hóa của các quốc gia trên thế giới.\n\n2. Ý nghĩa:\n- Giúp củng cố khối đại đoàn kết toàn dân tộc, tạo nên sức mạnh tổng hợp xây dựng đất nước.\n- Mở rộng tầm hiểu biết, làm phong phú đời sống văn hóa tinh thần của mỗi cá nhân.\n- Góp phần duy trì hòa bình, củng cố tình hữu nghị và hợp tác quốc tế giữa các quốc gia dân tộc.'
  },

  // ===================== CÔNG NGHỆ 8 =====================
  {
    id: 'cn-tl-1',
    subject: 'Công Nghệ 8',
    type: 'essay',
    topic: 'Quy chuẩn bản vẽ kĩ thuật',
    question: 'Câu 1 (Tự luận): Khi vẽ bản vẽ kỹ thuật của một chi tiết có nhiều kích thước, nếu các đường kích thước và đường gióng được vẽ không đúng quy định thì bản vẽ có thể gây khó khăn gì cho người đọc? Nêu cách khắc phục.',
    answer: '1. Khó khăn có thể gây ra:\n- Gây rối mắt, nhầm lẫn các kích thước giữa các bộ phận của chi tiết.\n- Người thợ gia công đọc sai thông số dẫn đến chế tạo sai quy cách, làm hỏng chi tiết máy, lãng phí vật liệu và thời gian.\n- Gây tranh cãi, hiểu nhầm giữa người thiết kế và người thi công lắp ráp.\n\n2. Cách khắc phục chuẩn:\n- Vẽ đường gióng vượt quá đầu mút đường kích thước từ 2 đến 3 mm.\n- Các đường kích thước song song phải cách nhau và cách đường bao một khoảng đều đặn (thường từ 7 đến 10 mm).\n- Sắp xếp kích thước nhỏ ở phía trong, kích thước lớn hơn ở phía ngoài để tránh các đường gióng cắt chéo qua đường kích thước.\n- Con số kích thước ghi rõ ràng trên đường kích thước theo đúng TCVN.'
  },
  {
    id: 'cn-tl-2',
    subject: 'Công Nghệ 8',
    type: 'essay',
    topic: 'Hình chiếu vuông góc',
    question: 'Câu 2 (Tự luận): Khi đọc một bản vẽ hình chiếu vuông góc, một học sinh đặt nhầm vị trí hình chiếu bằng so với hình chiếu đứng. Điều này có thể gây ra hậu quả gì?',
    answer: 'Hậu quả nghiêm trọng:\n- Phương pháp góc thứ nhất quy định: Hình chiếu bằng phải đặt ngay PHÍA DƯỚI hình chiếu đứng.\n- Nếu đặt nhầm vị trí (ví dụ đặt lên trên hoặc sang bên), người đọc bản vẽ sẽ hình dung sai hoàn toàn hướng nhìn của vật thể.\n- Dẫn đến việc xác định sai chiều dài, chiều rộng, các bề mặt trên - dưới của chi tiết, gây gia công sai lệch hoàn toàn so với ý đồ thiết kế ban đầu.'
  },
  {
    id: 'cn-tl-3',
    subject: 'Công Nghệ 8',
    type: 'essay',
    topic: 'Bản vẽ chi tiết',
    question: 'Câu 3 (Tự luận): Một bạn cho rằng: “Chỉ cần nhìn hình biểu diễn của bản vẽ chi tiết là có thể chế tạo được chi tiết, không cần đọc phần kích thước và yêu cầu kỹ thuật”. Em có đồng ý với ý kiến này không? Vì sao?',
    answer: 'Em hoàn toàn KHÔNG ĐỒNG Ý với ý kiến trên.\nLý do:\n1. Hình biểu diễn chỉ cho biết hình dạng bên ngoài và cấu tạo bên trong của chi tiết (vuông, tròn, rỗng hay đặc), nhưng KHÔNG THỂ cho biết độ lớn chính xác (dài, rộng, dày bao nhiêu mm).\n2. Không có kích thước thì người thợ không thể lấy phôi vật liệu và tiện, phay, bào đúng cỡ.\n3. Phần "Yêu cầu kỹ thuật" chỉ định độ nhẵn bề mặt, độ cứng, phương pháp xử lý nhiệt mạ chống gỉ. Nếu bỏ qua phần này, chi tiết chế tạo ra sẽ nhanh mòn, gãy vỡ và không thể lắp ráp làm việc được.'
  },
  {
    id: 'cn-tl-4',
    subject: 'Công Nghệ 8',
    type: 'essay',
    topic: 'Vật liệu cơ khí chịu lực',
    question: 'Câu 6 (Tự luận): Một chi tiết máy thường xuyên chịu lực và va đập trong quá trình làm việc. Nếu em được giao lựa chọn vật liệu để chế tạo chi tiết đó, em sẽ căn cứ vào những tính chất nào của vật liệu cơ khí? Vì sao?',
    answer: '1. Các tính chất cần căn cứ:\n- Tính chất cơ học (quan trọng nhất): Độ bền cao (chịu được tải trọng lớn mà không gãy), Độ dẻo và Độ dai va đập tốt (hấp thụ năng lượng va đập mà không bị nứt vỡ giòn).\n- Tính chất công nghệ: Khả năng rèn, dập, gia công cắt gọt và nhiệt luyện tốt để tăng độ cứng bề mặt.\n\n2. Lựa chọn vật liệu thực tế:\n- Nên chọn THÉP CACBON KẾT CẤU hoặc THÉP HỢP KIM (ví dụ mác thép CT45, 40Cr).\n- Không chọn GANG vì gang tuy cứng nhưng có tính giòn cao, chịu va đập kém, dễ gãy nứt khi làm việc chịu lực va đập mạnh.'
  },

  // ===================== HĐTN 8 =====================
  {
    id: 'hdtn-tl-1',
    subject: 'HĐTN & GDĐP',
    type: 'essay',
    topic: 'Tình huống: Phòng tránh bắt nạt mạng',
    question: 'Tình huống 1: Trong giờ thảo luận nhóm trực tuyến, Nam lén chụp lại một bức hình có biểu cảm không đẹp của Minh. Đến lớp, Nam dọa Minh rằng nếu không chép bài hộ Nam trong 1 tuần thì sẽ đăng bức hình đó lên trang mạng xã hội của lớp.\n=> Hỏi: Nếu là Minh, em sẽ áp dụng kỹ năng phòng tránh bắt nạt học đường như thế nào để giải quyết tình huống trên an toàn, dứt khoát?',
    answer: 'Các bước xử lý an toàn, dứt khoát cho Minh:\n1. Bình tĩnh và kiên quyết từ chối: Nhìn thẳng vào Nam với thái độ nghiêm túc, khẳng định rõ ràng: "Tớ không đồng ý chép bài hộ cậu. Việc chụp lén và đe dọa đăng ảnh người khác lên mạng là hành vi vi phạm pháp luật và nội quy trường học." Tuyệt đối không nhượng bộ vì nếu làm hộ 1 tuần, Nam sẽ tiếp tục đe dọa những lần sau.\n2. Thu thập và lưu giữ bằng chứng: Lưu giữ tin nhắn hoặc ghi nhớ lời đe dọa của Nam, không đôi co xúc phạm lại.\n3. Tìm kiếm sự trợ giúp kịp thời: Báo cáo ngay sự việc với giáo viên chủ nhiệm và chia sẻ với bố mẹ để người lớn có biện pháp can thiệp, yêu cầu Nam xóa ảnh và cam kết không tái phạm.'
  },
  {
    id: 'hdtn-tl-2',
    subject: 'HĐTN & GDĐP',
    type: 'essay',
    topic: 'Tình huống: Quản trị cảm xúc sau thất bại',
    question: 'Tình huống 3: Bình chuẩn bị rất kỹ cho bài kiểm tra môn Ngữ văn và hy vọng đạt ít nhất 8 điểm. Tuy nhiên khi trả bài, Bình chỉ được 5 điểm. Bình cảm thấy rất buồn, hụt hẫng và bắt đầu tức giận, cho rằng thầy giáo chấm quá chặt tay.\n=> Hỏi: Đề xuất 3 bước giúp Bình điều chỉnh cảm xúc từ tiêu cực sang tích cực để tiếp tục phấn đấu học tập.',
    answer: 'Quy trình 3 bước điều chỉnh cảm xúc cho Bình:\n- Bước 1: Trấn an và giải tỏa cảm xúc nhất thời: Tạm dừng suy nghĩ tiêu cực, hít một hơi thật sâu, uống một cốc nước ấm hoặc đi dạo vài phút ngoài sân trường để nhịp tim và tâm trí bình tĩnh trở lại, tránh nói những lời thiếu kiềm chế về thầy cô.\n- Bước 2: Nhìn nhận và phân tích vấn đề khách quan: Bình tĩnh đọc lại bài làm và lời phê của thầy giáo, đối chiếu với đáp án/thang điểm để xem mình đã thiếu ý ở đâu (đoạn văn chưa đủ độ dài, diễn đạt lủng củng hay hiểu sai đề bài?). Thầy cô chấm nghiêm túc chính là để chỉ ra lỗ hổng kiến thức giúp mình tiến bộ.\n- Bước 3: Chuyển hóa cảm xúc thành hành động tích cực: Chủ động gặp thầy giáo sau giờ học để lễ phép nhờ thầy chỉ rõ điểm cần khắc phục; lập kế hoạch ôn tập lại phương pháp làm văn và đặt mục tiêu bứt phá trong bài kiểm tra định kỳ tiếp theo.'
  }
];
