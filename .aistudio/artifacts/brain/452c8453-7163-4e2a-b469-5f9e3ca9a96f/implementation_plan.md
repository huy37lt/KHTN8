# Kế hoạch Triển Khai: Phòng Thí Nghiệm Ảo & Tối Ưu Giao Diện Hiện Đại

## 1. Mục Tiêu & Yêu Cầu
- **Phòng Thí Nghiệm Ảo (Virtual Lab):** Tích hợp trọn vẹn mô hình tương tác KHTN 8 từ file mẫu `khtn8-truc-quan.html` và mở rộng sang Toán học, Tiếng Anh và Lịch Sử - Địa Lí.
- **Tính năng Audio Tiếng Anh:** Tích hợp bộ phát âm chuẩn (Web Speech API - Native US/UK voice) để học sinh nghe phát âm từ vựng và cặp âm trọng tâm thi Giữa HK1 (`/ʊ/` vs `/u:/`, `/ə/` vs `/ɜ:/`).
- **Giao diện hiện đại & sang trọng (Light Modern Luxury):**
  - Màu nền sáng tinh tế (`bg-slate-50/60`, `bg-white`), tránh sặc sỡ, bố cục chỉn chu như tạp chí giáo dục hiện đại.
  - Các tab điều hướng chính và menu nổi bật rõ ràng, dễ bấm trên cả điện thoại và máy tính.
  - Chữ môn học to, rõ ràng, tương phản cao.

---

## 2. Chi Tiết Các Module Tương Tác

### Module 1: KHTN 8 (Lý - Hóa - Sinh)
1. **Vật lý (Bài 13, 14 - Khối lượng riêng $D = m/V$):**
   - Đồ họa SVG bình chia độ có mực nước dâng thực tế ($V_{sau} - V_{trước} = V_{vật}$).
   - Thanh trượt khối lượng $m$ ($50 - 800\text{ g}$) và thể tích $V$ ($50 - 300\text{ cm}^3$).
   - Tính toán tự động khối lượng riêng ($g/\text{cm}^3$ và $kg/\text{m}^3$), đánh giá chìm / nổi / lơ lửng trong nước.
   - **Chế độ đoán trước (Prediction Mode):** Yêu cầu học sinh nhẩm tính trước khi xem kết quả.
2. **Hóa học (Bài 3, 5, 6 - Con đường Mol & Giải toán PTHH):**
   - Sơ đồ chuyển đổi $m \leftrightarrow n \leftrightarrow V$ (chuẩn mới $24,79\text{ L/mol}$ đkc) $\leftrightarrow$ số hạt ($6,022 \times 10^{23}$).
   - Khóa chặn chất lỏng/rắn ($H_2O, NaCl$) không tính thể tích khí.
   - Bộ giải toán theo PTHH 3 bước chuẩn mực:
     - 3 nút giải nhanh đúng 3 bài tự luận đề cương Bát Tràng ($Al + O_2$, $Mg + HCl$ tính cả nồng độ mol $C_M$, $P + O_2$).
     - Hỗ trợ đổi chất đã biết và số liệu linh hoạt.
3. **Sinh học (Bài 32 - Hệ tiêu hóa người):**
   - Sơ đồ giải phẫu SVG tương tác 5 cơ quan (Miệng, Thực quản, Dạ dày, Ruột non, Ruột già).
   - Nhấp vào cơ quan để phát sáng và hiển thị cấu tạo, chức năng biến đổi cơ học & hóa học.
   - Thử thách mini-game trắc nghiệm phản xạ nhận diện cơ quan có đếm điểm.

### Module 2: Tiếng Anh 8 (Audio Phát Âm Chuẩn Native)
- **Công nghệ:** Sử dụng Web Speech API (`window.speechSynthesis`) với giọng đọc Anh - Mỹ (en-US) / Anh - Anh (en-GB) chuẩn xác, chạy 100% trên trình duyệt không cần internet hay API key.
- **Từ vựng & Cặp âm trọng tâm Giữa HK1:**
  - *Unit 1: Leisure Time* (crafts, fold origami, hang out, message friends...).
  - *Unit 2: Life in the Countryside* (harvest, cattle, hospitable, paddy field, vast...).
  - *Unit 3: Teenagers* (peer pressure, browse websites, coach, participate...).
  - *Luyện phân biệt cặp âm:* `/ʊ/` (cook, foot, book, put) vs `/u:/` (school, food, group, choose). Bấm loa để nghe phát âm từng từ và từng câu ví dụ so sánh.

### Module 3: Toán 8 (Tứ Giác Động & Hằng Đẳng Thức Trực Quan)
- **Tứ giác tương tác:** Mô hình hình học kéo thả 4 đỉnh, hệ thống tự động kiểm tra các cạnh, góc đối và 2 đường chéo để xác định hình thang, hình bình hành, hình chữ nhật, hình thoi.
- **Hằng đẳng thức hình học:** Minh họa diện tích $(a+b)^2 = a^2 + 2ab + b^2$ sinh động qua các khối hình học với thanh trượt $a, b$.

### Module 4: Lịch Sử & Địa Lí 8 (Trục Thời Gian & Bản Đồ)
- **Trục thời gian Lịch sử (Interactive Timeline Slider):** Mốc năm thế kỷ XVI – XVIII về Cách mạng Hà Lan, Cách mạng Anh, Chiến tranh giành độc lập Bắc Mỹ, Cách mạng tư sản Pháp.
- **Địa lý:** Vị trí 4 điểm cực Đông - Tây - Nam - Bắc và bảng so sánh gió mùa Đông Bắc vs Tây Nam.

---

## 3. Kiến Trúc & Tệp Cần Thay Đổi

1. **Tạo component mới:**
   - `/src/components/VirtualLabView.tsx`: Chứa toàn bộ giao diện Phòng Thí Nghiệm Ảo, chia tab con (KHTN 8, Toán 8, Tiếng Anh Audio, Lịch Sử - Địa Lí 8).
   - `/src/utils/speech.ts`: Tiện ích phát âm tiếng Anh native chuẩn xác qua SpeechSynthesis API.
2. **Cập nhật thanh điều hướng:**
   - `/src/components/Header.tsx`: Thêm tab **"🧪 Phòng Thí Nghiệm Ảo"** với nút bấm nổi bật, tinh tế; điều chỉnh các tab chính có độ tương phản cao, dễ nhìn.
3. **Cập nhật luồng chính:**
   - `/src/App.tsx`: Đăng ký tab `'lab'`, kết nối điều hướng mượt mà.
4. **Tối ưu bảng màu & ánh sáng tổng thể:**
   - Sử dụng tông màu sáng sang trọng: Nền slate-50/70, card trắng nổi với viền mỏng slate-200, điểm nhấn màu ngọc lục bảo (emerald) & chàm (indigo) cao cấp, không dùng màu lòe loẹt.
   - Chữ tên các môn học trên các thẻ tab luôn to, đậm và rõ ràng.

---

## 4. Kế Hoạch Xác Minh & Kiểm Thử
1. Chạy `lint_applet` để kiểm tra toàn bộ lỗi cú pháp TypeScript/React.
2. Chạy `compile_applet` để đảm bảo dự án build thành công không có lỗi.
3. Kiểm thử trên cả màn hình di động và máy tính bảng / desktop để đảm bảo giao diện đồ họa SVG hiển thị sắc nét.
