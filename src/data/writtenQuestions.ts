export interface WrittenQuestion {
  id: string;
  subject: 'Vật Lý' | 'Hóa Học' | 'Sinh Học';
  type: 'short' | 'essay';
  question: string;
  answer: string;
  guide?: string;
}

export const WRITTEN_QUESTIONS_DATA: WrittenQuestion[] = [
  // --- VẬT LÝ 8: TRẢ LỜI NGẮN (10 CÂU) ---
  {
    id: 'vl-tn-1',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 1: Viết công thức tính khối lượng riêng và nêu tên, đơn vị của các đại lượng trong công thức.',
    answer: 'Công thức: D = m / V\n- D: Khối lượng riêng (đơn vị: kg/m³ hoặc g/cm³)\n- m: Khối lượng của vật (đơn vị: kg hoặc g)\n- V: Thể tích của vật (đơn vị: m³ hoặc cm³)'
  },
  {
    id: 'vl-tn-2',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 2: Đổi 2,7 g/cm³ ra kg/m³.',
    answer: '2 700 kg/m³',
    guide: 'Quy tắc đổi: 1 g/cm³ = 1 000 kg/m³. Do đó 2,7 × 1 000 = 2 700 kg/m³.'
  },
  {
    id: 'vl-tn-3',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 3: Đổi 1 200 kg/m³ ra g/cm³.',
    answer: '1,2 g/cm³',
    guide: '1 200 / 1 000 = 1,2 g/cm³.'
  },
  {
    id: 'vl-tn-4',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 4: Một vật có khối lượng 450 g, thể tích 150 cm³. Tính khối lượng riêng của vật.',
    answer: '3 g/cm³ (hoặc 3 000 kg/m³)',
    guide: 'D = m / V = 450 / 150 = 3 g/cm³.'
  },
  {
    id: 'vl-tn-5',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 5: Một khối kim loại có khối lượng riêng 8 000 kg/m³ và thể tích 0,002 m³. Tính khối lượng của khối kim loại.',
    answer: '16 kg',
    guide: 'm = D × V = 8 000 × 0,002 = 16 kg.'
  },
  {
    id: 'vl-tn-6',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 6: Một chất có khối lượng 540 g và khối lượng riêng 2,7 g/cm³. Tính thể tích của chất đó.',
    answer: '200 cm³',
    guide: 'V = m / D = 540 / 2,7 = 200 cm³.'
  },
  {
    id: 'vl-tn-7',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 7: Một khối hộp chữ nhật có chiều dài 4 cm, chiều rộng 3 cm, chiều cao 2 cm. Tính thể tích khối hộp.',
    answer: '24 cm³',
    guide: 'V = 4 × 3 × 2 = 24 cm³.'
  },
  {
    id: 'vl-tn-8',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 8: Mực nước trong bình chia độ là 42 mL. Khi thả chìm hoàn toàn một vật rắn không thấm nước, mực nước là 57 mL. Tính thể tích vật.',
    answer: '15 mL (hoặc 15 cm³)',
    guide: 'V = 57 - 42 = 15 mL = 15 cm³.'
  },
  {
    id: 'vl-tn-9',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 9: Để xác định khối lượng riêng của một lượng chất lỏng, cần đo những đại lượng nào?',
    answer: 'Cần đo khối lượng (m) và thể tích (V) của chất lỏng.',
    guide: 'Khối lượng m đo bằng cân (lấy m_cốc_chứa_chất_lỏng - m_cốc_rỗng) và thể tích V đọc trên bình chia độ.'
  },
  {
    id: 'vl-tn-10',
    subject: 'Vật Lý',
    type: 'short',
    question: 'Câu 10: Nêu hai nguyên nhân có thể làm kết quả thực nghiệm xác định khối lượng riêng khác với giá trị trong bảng tra cứu.',
    answer: '1. Do sai số của dụng cụ đo (cân, bình chia độ có độ chia nhỏ nhất giới hạn).\n2. Do thao tác đo và đọc số liệu chưa chính xác (đặt mắt chưa ngang tầm đáy mặt khum, còn nước dính ngoài mẫu vật).'
  },

  // --- VẬT LÝ 8: TỰ LUẬN (3 CÂU) ---
  {
    id: 'vl-tl-1',
    subject: 'Vật Lý',
    type: 'essay',
    question: 'Câu 1: Một khối kim loại có dạng hình hộp chữ nhật có chiều dài 10 cm, chiều rộng 5 cm, chiều cao 4 cm. Biết khối kim loại có khối lượng 1,56 kg.\na) Tính khối lượng riêng của khối kim loại theo đơn vị g/cm³, kg/m³.\nb) Dựa vào bảng khối lượng riêng trong SGK, hãy cho biết khối kim loại làm bằng chất liệu gì?',
    answer: 'a) Thể tích khối kim loại: V = 10 × 5 × 4 = 200 cm³ = 0,0002 m³.\nKhối lượng: m = 1,56 kg = 1 560 g.\n- Khối lượng riêng theo g/cm³: D = 1 560 / 200 = 7,8 g/cm³.\n- Khối lượng riêng theo kg/m³: D = 7,8 × 1 000 = 7 800 kg/m³.\n\nb) Tra bảng khối lượng riêng trong SGK (chất có D = 7 800 kg/m³), khối kim loại đó làm bằng sắt (iron).'
  },
  {
    id: 'vl-tl-2',
    subject: 'Vật Lý',
    type: 'essay',
    question: 'Câu 2: Trình bày phương án thực hành xác định khối lượng riêng của một hòn sỏi không thấm nước.',
    answer: '1. Dụng cụ cần dùng:\n- Cân điện tử (hoặc cân Rô-béc-van) để đo khối lượng.\n- Bình chia độ có GHĐ và ĐCNN phù hợp.\n- Cốc nước sạch, khăn lau.\n\n2. Các bước tiến hành:\n- Bước 1: Dùng cân đo khối lượng của hòn sỏi khô, ghi lại giá trị m (g).\n- Bước 2: Đổ một lượng nước vừa đủ vào bình chia độ, đọc và ghi thể tích ban đầu V₁ (mL).\n- Bước 3: Buộc chỉ thả chìm hoàn toàn hòn sỏi vào bình chia độ (tránh chạm đáy và thành bình), đọc và ghi thể tích nước dâng lên V₂ (mL).\n- Bước 4: Thể tích hòn sỏi là V = V₂ - V₁ (cm³).\n- Bước 5: Tính khối lượng riêng của hòn sỏi theo công thức D = m / V (g/cm³).'
  },
  {
    id: 'vl-tl-3',
    subject: 'Vật Lý',
    type: 'essay',
    question: 'Câu 3: Em được giao xác định khối lượng riêng của một chất lỏng bằng các dụng cụ: cân, cốc rỗng, bình chia độ và chất lỏng cần đo. Trình bày các bước tiến hành.',
    answer: '1. Bước 1: Đặt cốc rỗng lên đĩa cân, xác định khối lượng của cốc rỗng m₁ (g).\n2. Bước 2: Rót một lượng chất lỏng vào bình chia độ, đọc thể tích chất lỏng V (cm³).\n3. Bước 3: Rót lượng chất lỏng đó vào cốc rỗng rồi đặt lên cân, xác định tổng khối lượng m₂ (g).\n4. Bước 4: Tính khối lượng của lượng chất lỏng đã lấy: m = m₂ - m₁ (g).\n5. Bước 5: Tính khối lượng riêng của chất lỏng: D = m / V = (m₂ - m₁) / V.'
  },

  // --- HÓA HỌC 8: TRẢ LỜI NGẮN (10 CÂU) ---
  {
    id: 'hh-tn-1',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 1: Ở 25 °C và 1 bar, 1,5 mol khí chiếm thể tích bao nhiêu?',
    answer: '37,185 Lít',
    guide: 'V = n × 24,79 = 1,5 × 24,79 = 37,185 L.'
  },
  {
    id: 'hh-tn-2',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 2: Hãy cho biết 64g khí oxi ở đkc có thể tích là bao nhiêu?',
    answer: '49,58 Lít',
    guide: 'M(O2) = 32 g/mol => n(O2) = 64 / 32 = 2 mol. V = 2 × 24,79 = 49,58 L.'
  },
  {
    id: 'hh-tn-3',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 3: Đốt cháy hoàn toàn 5,6 gam hỗn hợp X gồm C và S cần dùng hết 9,6 gam khí O2. Khối lượng CO2 và SO2 sinh ra là bao nhiêu?',
    answer: '15,2 gam',
    guide: 'Theo định luật bảo toàn khối lượng: m(sản phẩm) = m(hỗn hợp) + m(O2) = 5,6 + 9,6 = 15,2 g.'
  },
  {
    id: 'hh-tn-4',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 4: Cho biết tỉ lệ hệ số tương ứng của chất tham gia và chất tạo thành của phương trình: Fe + HCl -> FeCl2 + H2',
    answer: '1 : 2 : 1 : 1',
    guide: 'Phương trình cân bằng: Fe + 2HCl → FeCl2 + H2.'
  },
  {
    id: 'hh-tn-5',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 5: Than cháy tạo ra khí carbon dioxide: Carbon + oxygen → Khí carbon dioxide. Khối lượng carbon đã cháy là 4,5kg và khối lượng oxygen phản ứng là 12kg. Khối lượng khí carbon dioxide tạo ra là?',
    answer: '16,5 kg',
    guide: 'm(CO2) = m(C) + m(O2) = 4,5 + 12 = 16,5 kg.'
  },
  {
    id: 'hh-tn-6',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 6: Trong 250 ml dung dịch có hòa tan 25,5 gam silver nitrate (AgNO3). Tính nồng độ mol của dung dịch silver nitrate.',
    answer: '0,6 M (mol/L)',
    guide: 'M(AgNO3) = 108 + 14 + 16×3 = 170 g/mol => n = 25,5 / 170 = 0,15 mol. V = 250 mL = 0,25 L => CM = 0,15 / 0,25 = 0,6 M.'
  },
  {
    id: 'hh-tn-7',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 7: Tính khối lượng của 1,8.10²² phân tử calcium chloride (CaCl2).',
    answer: '3,33 gam',
    guide: 'n = 1,8.10²² / (6,022.10²³) ≈ 0,03 mol. M(CaCl2) = 40 + 35,5×2 = 111 g/mol => m = 0,03 × 111 ≈ 3,33 g.'
  },
  {
    id: 'hh-tn-8',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 8: Hòa tan 40g đường với nước được dung dịch đường 20%. Tính khối lượng dung dịch đường thu được.',
    answer: '200 gam',
    guide: 'mdd = (mct × 100) / C% = (40 × 100) / 20 = 200 g.'
  },
  {
    id: 'hh-tn-9',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 9: Hòa tan 30 gam magnesium sulfate (MgSO4) vào 80 gam nước. Tính nồng độ phần trăm của dung dịch magnesium sulfate.',
    answer: '27,27%',
    guide: 'mdd = mct + mH2O = 30 + 80 = 110 g. C% = (30 / 110) × 100% ≈ 27,27%.'
  },
  {
    id: 'hh-tn-10',
    subject: 'Hóa Học',
    type: 'short',
    question: 'Câu 10: Tính tỉ khối hơi của khí carbon dioxide (CO2) so với không khí.',
    answer: '1,52 (nặng hơn không khí khoảng 1,52 lần)',
    guide: 'M(CO2) = 44 g/mol; M(kk) = 29 g/mol => d(CO2/kk) = 44 / 29 ≈ 1,517.'
  },

  // --- HÓA HỌC 8: TỰ LUẬN (3 BÀI TOÁN) ---
  {
    id: 'hh-tl-1',
    subject: 'Hóa Học',
    type: 'essay',
    question: 'Bài 1: Nhiệt phân hoàn toàn m g KClO3 thu được 7,437 Lít khí O2 ở đkc, phản ứng nhiệt phân KClO3 xảy ra theo sơ đồ: KClO3 -(t°)-> KCl + O2.\n1. Tính số mol của O2 thu được.\n2. Tính số mol của các chất còn lại trong PTHH.\n3. Tính khối lượng của KClO3 đã dùng.',
    answer: '1. Số mol O2 thu được:\nn(O2) = V / 24,79 = 7,437 / 24,79 = 0,3 (mol).\n\n2. PTHH cân bằng:\n2KClO3 -(t°)-> 2KCl + 3O2\nTheo PTHH:\n- n(KClO3) = (n(O2) × 2) / 3 = (0,3 × 2) / 3 = 0,2 (mol).\n- n(KCl) = n(KClO3) = 0,2 (mol).\n\n3. Khối lượng KClO3 đã dùng:\nM(KClO3) = 39 + 35,5 + 16×3 = 122,5 (g/mol).\nm(KClO3) = n × M = 0,2 × 122,5 = 24,5 (gam).'
  },
  {
    id: 'hh-tl-2',
    subject: 'Hóa Học',
    type: 'essay',
    question: 'Bài 2: Cho 2,4 gam magnesium tác dụng vừa đủ với 100mL dung dịch HCl thu được muối magnesium chloride (MgCl2) và giải phóng khí hydrogen.\n1. Tính số mol của Mg đã phản ứng.\n2. Viết PTHH của phản ứng trên.\n3. Tính số mol của các chất còn lại trong PTHH.\n4. Tính nồng độ mol của dung dịch HCl đã dùng.',
    answer: '1. Số mol Mg đã phản ứng:\nn(Mg) = m / M = 2,4 / 24 = 0,1 (mol).\n\n2. PTHH:\nMg + 2HCl → MgCl2 + H2\n\n3. Số mol các chất còn lại theo PTHH:\n- n(HCl) = 2 × n(Mg) = 2 × 0,1 = 0,2 (mol).\n- n(MgCl2) = n(Mg) = 0,1 (mol).\n- n(H2) = n(Mg) = 0,1 (mol).\n\n4. Nồng độ mol dung dịch HCl:\nĐổi 100 mL = 0,1 L.\nCM(HCl) = n / V = 0,2 / 0,1 = 2 (M).'
  },
  {
    id: 'hh-tl-3',
    subject: 'Hóa Học',
    type: 'essay',
    question: 'Bài 3: Cho 5,4 gam kim loại nhôm tác dụng vừa đủ với khí oxygen thu được aluminium oxide (Al2O3).\n1. Tính số mol của Al đã phản ứng.\n2. Viết PTHH của phản ứng trên.\n3. Tính số mol của các chất còn lại trong PTHH.\n4. Tính thể tích của oxygen đã phản ứng ở đkc.',
    answer: '1. Số mol Al phản ứng:\nn(Al) = m / M = 5,4 / 27 = 0,2 (mol).\n\n2. PTHH:\n4Al + 3O2 -(t°)-> 2Al2O3\n\n3. Số mol các chất còn lại:\n- n(O2) = (0,2 × 3) / 4 = 0,15 (mol).\n- n(Al2O3) = (0,2 × 2) / 4 = 0,1 (mol).\n\n4. Thể tích khí O2 đã phản ứng ở đkc:\nV(O2) = n × 24,79 = 0,15 × 24,79 = 3,7185 (Lít).'
  },

  // --- SINH HỌC 8: TRẢ LỜI NGẮN (10 CÂU) ---
  {
    id: 'sh-tn-1',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 1: Cơ thể người gồm các phần:',
    answer: 'Đầu, thân và các chi (hai tay và hai chân).'
  },
  {
    id: 'sh-tn-2',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 2: Vai trò của hệ hô hấp trong hoạt động của cơ thể:',
    answer: 'Thực hiện quá trình trao đổi khí giữa cơ thể với môi trường: lấy khí oxygen (O2) từ môi trường cung cấp cho các tế bào và thải khí carbon dioxide (CO2) ra ngoài môi trường.'
  },
  {
    id: 'sh-tn-3',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 3: Kể tên các cấp tổ chức của cơ thể người theo thứ tự từ thấp đến cao:',
    answer: 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.'
  },
  {
    id: 'sh-tn-4',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 4: Một người thường xuyên bị táo bón do ít ăn rau và uống ít nước. Hãy đề xuất hai thay đổi trong chế độ ăn uống hoặc sinh hoạt có thể giúp cải thiện tình trạng này.',
    answer: '1. Bổ sung nhiều thực phẩm giàu chất xơ (rau xanh, củ quả, ngũ cốc nguyên hạt) vào mỗi bữa ăn.\n2. Uống đủ 1,5 - 2 lít nước mỗi ngày và duy trì vận động thể dục thể thao đều đặn.'
  },
  {
    id: 'sh-tn-5',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 5: Giải thích vai trò của thành phần hữu cơ và vô cơ đối với tính chất của xương.',
    answer: '- Thành phần hữu cơ (chủ yếu là protein collagen / cốt giao): tạo cho xương có tính mềm dẻo và đàn hồi.\n- Thành phần vô cơ (muối khoáng, chủ yếu là canxi và photpho): tạo cho xương có độ cứng chắc, chịu được tải trọng.'
  },
  {
    id: 'sh-tn-6',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 6: Một học sinh có thói quen đeo cặp nặng lệch một bên vai. Hãy nêu hai biện pháp giúp hạn chế ảnh hưởng đến hệ vận động.',
    answer: '1. Đeo cặp bằng cả hai quai cân đối trên hai vai, điều chỉnh quai đeo ôm sát lưng.\n2. Soạn sách vở đúng thời khóa biểu, chỉ mang vật dụng cần thiết để trọng lượng cặp không vượt quá 10% trọng lượng cơ thể.'
  },
  {
    id: 'sh-tn-7',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 7: Phân biệt tiêu hóa cơ học và tiêu hóa hóa học bằng cách nêu đặc điểm chính của mỗi quá trình.',
    answer: '- Tiêu hóa cơ học: Là hoạt động cắn, nhai, nghiền và co bóp nhào trộn thức ăn, làm thức ăn nhỏ ra và thấm đều dịch tiêu hóa (không tạo chất mới).\n- Tiêu hóa hóa học: Do các enzyme trong dịch tiêu hóa xúc tác, biến đổi các hợp chất hữu cơ phức tạp thành các chất dinh dưỡng đơn giản mà cơ thể hấp thụ được (tạo chất mới).'
  },
  {
    id: 'sh-tn-8',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 8: Chức năng của hệ tiêu hóa?',
    answer: 'Biến đổi thức ăn thành các chất dinh dưỡng đơn giản mà cơ thể có thể hấp thụ được qua thành ruột non vào máu, đồng thời thải bỏ các chất cặn bã không tiêu hóa ra ngoài cơ thể.'
  },
  {
    id: 'sh-tn-9',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 9: Hệ vận động gồm:',
    answer: 'Bộ xương, các khớp xương và hệ cơ (cơ xương).'
  },
  {
    id: 'sh-tn-10',
    subject: 'Sinh Học',
    type: 'short',
    question: 'Câu 10: Kể tên ba chất dinh dưỡng hữu cơ có thể cung cấp năng lượng cho cơ thể.',
    answer: 'Carbohydrate (chất bột đường), Lipid (chất béo) và Protein (chất đạm).'
  },

  // --- SINH HỌC 8: TỰ LUẬN (3 CÂU) ---
  {
    id: 'sh-tl-1',
    subject: 'Sinh Học',
    type: 'essay',
    question: 'Câu 1: Khi một học sinh chạy bộ, nhịp tim tăng, nhịp thở nhanh hơn và cơ bắp hoạt động mạnh hơn.\na) Nêu vai trò của hệ vận động, hệ tuần hoàn và hệ hô hấp trong hoạt động chạy bộ.\nb) Giải thích vì sao khi hệ vận động tăng cường hoạt động thì các hệ cơ quan khác cũng thay đổi hoạt động.',
    answer: 'a) Vai trò của từng hệ cơ quan:\n- Hệ vận động: Các cơ co dãn phối hợp với xương và khớp giúp cơ thể di chuyển tiến về phía trước.\n- Hệ hô hấp: Tăng tần số hô hấp để lấy thêm nhiều O2 từ không khí và thải nhanh lượng CO2 do cơ bắp sinh ra.\n- Hệ tuần hoàn: Tim co bóp nhanh và mạnh hơn để bơm máu giàu O2 và chất dinh dưỡng đến các tế bào cơ bắp, đồng thời đưa CO2 về phổi để thải ra ngoài.\n\nb) Giải thích:\nCơ thể là một khối thống nhất. Khi chạy bộ, cơ bắp tiêu hao rất nhiều năng lượng ATP. Quá trình tạo năng lượng cần nhiều O2 và sinh ra nhiều nhiệt cùng CO2. Dưới sự điều khiển của hệ thần kinh, nhịp tim và nhịp thở tự động tăng lên để đáp ứng nhu cầu trao đổi chất kịp thời.'
  },
  {
    id: 'sh-tl-2',
    subject: 'Sinh Học',
    type: 'essay',
    question: 'Câu 2: Một học sinh lớp 8 có thói quen ngồi học cong lưng, mang cặp sách nặng lệch một bên vai, ít vận động và chưa chú ý đến chế độ dinh dưỡng.\na) Phân tích những ảnh hưởng có thể xảy ra đối với hệ vận động.\nb) Đề xuất bốn biện pháp cụ thể giúp học sinh bảo vệ hệ vận động.\nc) Giải thích vì sao cần kết hợp chế độ dinh dưỡng hợp lí với vận động thường xuyên.',
    answer: 'a) Ảnh hưởng có thể xảy ra:\n- Ngồi cong lưng và đeo cặp lệch một bên vai dễ dẫn đến cong vẹo cột sống, gù lưng, lệch xương chậu, chèn ép lồng ngực gây khó thở.\n- Ít vận động và thiếu dinh dưỡng khiến xương chậm phát triển, xương mềm yếu hoặc xốp, cơ bắp nhão kém săn chắc.\n\nb) Bốn biện pháp bảo vệ hệ vận động:\n1. Ngồi học đúng tư thế: Lưng thẳng, hai bàn chân đặt phẳng trên sàn, khoảng cách từ mắt đến sách khoảng 25 - 30 cm.\n2. Đeo cặp sách bằng cả hai quai cân đối, không mang cặp quá nặng.\n3. Thường xuyên tập luyện thể dục thể thao phù hợp với lứa tuổi.\n4. Đảm bảo chế độ ăn giàu canxi, phospho, vitamin D (sữa, trứng, cá, tôm, rau xanh) và tắm nắng buổi sáng.\n\nc) Vì sao cần kết hợp dinh dưỡng và vận động:\nDinh dưỡng cung cấp "vật liệu" để xây dựng xương và cơ (protein, canxi), còn vận động kích thích sự trao đổi chất, tăng tuần hoàn máu và kích hoạt sự tái tạo mô xương giúp xương dài ra, dày hơn và dẻo dai hơn.'
  },
  {
    id: 'sh-tl-3',
    subject: 'Sinh Học',
    type: 'essay',
    question: 'Câu 3: Một học sinh thường xuyên bỏ bữa sáng, ăn nhiều đồ ăn nhanh, ít ăn rau xanh và trái cây. Sau một thời gian, học sinh cảm thấy mệt mỏi và đôi khi bị táo bón.\na) Phân tích mối liên hệ giữa thói quen ăn uống trên với các biểu hiện của học sinh.\nb) Đề xuất một thực đơn cho bữa ăn chính bảo đảm đa dạng và cân đối.\nc) Giải thích vai trò của việc ăn đúng bữa, nhai kĩ, ăn đủ chất xơ và uống đủ nước.',
    answer: 'a) Mối liên hệ:\n- Bỏ bữa sáng làm cơ thể thiếu hụt glucose cung cấp cho não và cơ bắp sau một đêm dài, gây tụt đường huyết, uể oải, mệt mỏi, giảm khả năng tập trung.\n- Thức ăn nhanh nhiều dầu mỡ và chất bảo quản nhưng nghèo vitamin và khoáng chất.\n- Thiếu rau xanh và trái cây làm thiếu chất xơ và nước, phân bị khô cứng dẫn đến táo bón.\n\nb) Thực đơn một bữa ăn chính cân đối (Bữa trưa gợi ý):\n- Cơm trắng (cung cấp carbohydrate/bột đường).\n- Thịt nạc xào hoặc cá kho/luộc (cung cấp protein/chất đạm).\n- Canh rau ngót nấu tôm/thịt băm (cung cấp vitamin, chất xơ và nước).\n- Rau luộc (cải xanh hoặc súp lơ).\n- Tráng miệng: Chuối hoặc cam (bổ sung vitamin C, kali).\n\nc) Giải thích:\n- Ăn đúng bữa: Giúp dạ dày tiết dịch vị theo nhịp sinh học, phòng tránh viêm loét dạ dày.\n- Nhai kĩ: Nghiền nhỏ thức ăn, giúp enzyme amilaza tiêu hóa tinh bột tốt hơn và giảm gánh nặng cho dạ dày.\n- Đủ chất xơ: Kích thích nhu động ruột, tạo khuôn phân, phòng ngừa táo bón.\n- Uống đủ nước: Giúp hòa tan các chất dinh dưỡng, thúc đẩy trao đổi chất và làm mềm phân.'
  }
];
