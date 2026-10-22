import { QuizSet } from '../types/quiz';

export const ENGLISH_QUIZ_SETS: QuizSet[] = [
  {
    id: 'ta8-u123-tracnghiem',
    title: 'Tiếng Anh 8 - Đề Tổng Hợp Giữa HK1 (Phát âm, Trọng âm & Từ vựng)',
    subject: 'Tiếng Anh',
    grade: 'Lớp 8B',
    description: 'Trắc nghiệm phát âm (/ʊ/ - /uː/, /ə/ - /ɪ/, /əʊ/ - /ɔɪ/), trọng âm 2-3 âm tiết và từ vựng Unit 1 (Leisure Time), Unit 2 (Countryside), Unit 3 (Teenagers).',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'ta-sum-1',
        title: 'Phát âm & Trọng âm cốt lõi Units 1 - 3',
        keyPoints: [
          'Âm /ʊ/ (u ngắn): could, would, should, sugar, full, put.',
          'Âm /uː/ (u dài): soup, school, pool, choose, two, movie, shoe.',
          'Âm /ə/: banana, afraid, mother; Âm /ɪ/: village, cottage, heritage.',
          'Quy tắc trọng âm: Danh từ/Tính từ 2 âm tiết thường nhấn âm 1 (hobby, data, leisure, message, cattle, ferry).',
          'Động từ 2 âm tiết thường nhấn âm 2 (affect, relax, decide, exist, improve, collect).'
        ],
        formulaOrRule: 'N/Adj 2 syllables: Stress 1 | Verb 2 syllables: Stress 2'
      },
      {
        id: 'ta-sum-2',
        title: 'Từ vựng & Cụm từ hay gặp',
        keyPoints: [
          'be hooked on = be fond of = be keen on = be crazy about = be addicted to + V-ing / Noun.',
          'digital detox: kì nghỉ cai thiết bị điện tử.',
          'mindfulness: thực hành chánh niệm, tập trung vào hiện tại giúp giảm căng thẳng.',
          'FOMO (Fear Of Missing Out): nỗi sợ bị bỏ lỡ thông tin trên mạng xã hội.',
          'combine harvester: máy gặt đập liên hợp giúp thu hoạch nhanh.'
        ]
      }
    ],
    questions: [
      {
        id: 'ta-1',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: could, soup, would, should',
        options: ['could', 'soup', 'would', 'should'],
        correctAnswer: 1,
        explanation: 'Soup phát âm là /uː/, trong khi could, would, should đều phát âm là /ʊ/.',
        topic: 'Pronunciation /ʊ/ vs /uː/',
        difficulty: 'easy'
      },
      {
        id: 'ta-2',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: school, pool, choose, look',
        options: ['school', 'pool', 'choose', 'look'],
        correctAnswer: 3,
        explanation: 'Look phát âm là /ʊ/, còn school, pool, choose phát âm là /uː/.',
        topic: 'Pronunciation /ʊ/ vs /uː/',
        difficulty: 'easy'
      },
      {
        id: 'ta-3',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: sugar, full, lunch, put',
        options: ['sugar', 'full', 'lunch', 'put'],
        correctAnswer: 2,
        explanation: 'Lunch phát âm là /ʌ/, trong khi sugar, full, put đều phát âm là /ʊ/.',
        topic: 'Pronunciation /ʊ/',
        difficulty: 'medium'
      },
      {
        id: 'ta-4',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: woman, two, movie, shoe',
        options: ['woman', 'two', 'movie', 'shoe'],
        correctAnswer: 0,
        explanation: 'Woman phần gạch chân phát âm là /ʊ/, còn two, movie, shoe phát âm là /uː/.',
        topic: 'Pronunciation /ʊ/ vs /uː/',
        difficulty: 'medium'
      },
      {
        id: 'ta-5',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: happy, man, afraid, family',
        options: ['happy', 'man', 'afraid', 'family'],
        correctAnswer: 2,
        explanation: 'Afraid chữ a đầu phát âm là /ə/, các từ còn lại phát âm là /æ/.',
        topic: 'Pronunciation /æ/ vs /ə/',
        difficulty: 'easy'
      },
      {
        id: 'ta-6',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: product, clock, job, mother',
        options: ['product', 'clock', 'job', 'mother'],
        correctAnswer: 3,
        explanation: 'Mother có âm chữ o phát âm là /ʌ/, trong khi product, clock, job phát âm là /ɒ/.',
        topic: 'Pronunciation /ɒ/ vs /ʌ/',
        difficulty: 'medium'
      },
      {
        id: 'ta-7',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: lose, home, phone, close',
        options: ['lose', 'home', 'phone', 'close'],
        correctAnswer: 0,
        explanation: 'Lose phát âm là /uːz/, các từ home, phone, close đều có âm /əʊ/.',
        topic: 'Pronunciation /əʊ/ vs /uː/',
        difficulty: 'medium'
      },
      {
        id: 'ta-8',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: noise, code, toy, coin',
        options: ['noise', 'code', 'toy', 'coin'],
        correctAnswer: 1,
        explanation: 'Code phát âm có nguyên âm đôi /əʊ/, còn noise, toy, coin đều có nguyên âm đôi /ɔɪ/.',
        topic: 'Pronunciation /ɔɪ/ vs /əʊ/',
        difficulty: 'easy'
      },
      {
        id: 'ta-9',
        content: 'Choose the word whose underlined part differs from the others in pronunciation: village, cottage, heritage, banana',
        options: ['village', 'cottage', 'heritage', 'banana'],
        correctAnswer: 3,
        explanation: 'Banana có đuôi /ə/, các từ còn lại có đuôi -age phát âm là /ɪdʒ/.',
        topic: 'Pronunciation /ɪ/ vs /ə/',
        difficulty: 'medium'
      },
      {
        id: 'ta-10',
        content: 'Choose the word that differs from the others in the position of primary stress: hobby, affect, relax, decide',
        options: ['hobby', 'affect', 'relax', 'decide'],
        correctAnswer: 0,
        explanation: 'Hobby trọng âm rơi vào âm tiết 1 (danh từ 2 âm tiết), các từ còn lại là động từ trọng âm rơi vào âm tiết 2.',
        topic: 'Word Stress',
        difficulty: 'easy'
      },
      {
        id: 'ta-11',
        content: 'Choose the word that differs from the others in the position of primary stress: virtual, data, harmful, exist',
        options: ['virtual', 'data', 'harmful', 'exist'],
        correctAnswer: 3,
        explanation: 'Exist là động từ 2 âm tiết trọng âm rơi vào âm 2. Virtual, data, harmful trọng âm rơi vào âm 1.',
        topic: 'Word Stress',
        difficulty: 'medium'
      },
      {
        id: 'ta-12',
        content: 'Choose the word that differs from the others in the position of primary stress: improve, leisure, message, muscle',
        options: ['improve', 'leisure', 'message', 'muscle'],
        correctAnswer: 0,
        explanation: 'Improve trọng âm âm 2 (động từ), leisure, message, muscle đều trọng âm âm 1 (danh từ).',
        topic: 'Word Stress',
        difficulty: 'easy'
      },
      {
        id: 'ta-13',
        content: 'Choose the word that differs from the others in the position of primary stress: organise, solution, melody, socialise',
        options: ['organise', 'solution', 'melody', 'socialise'],
        correctAnswer: 1,
        explanation: 'Solution trọng âm âm 2 (-tion nhấn âm trước nó), còn organise, melody, socialise trọng âm rơi vào âm 1.',
        topic: 'Word Stress 3 syllables',
        difficulty: 'hard'
      },
      {
        id: 'ta-14',
        content: 'Choose the word that differs from the others in the position of primary stress: access, cattle, ferry, collect',
        options: ['access', 'cattle', 'ferry', 'collect'],
        correctAnswer: 3,
        explanation: 'Collect là động từ trọng âm âm 2. Access, cattle, ferry trọng âm âm 1.',
        topic: 'Word Stress',
        difficulty: 'easy'
      },
      {
        id: 'ta-15',
        content: 'Sitting in front of screens for too many hours a day can lead to a ______ lifestyle.',
        options: ['sedentary', 'active', 'healthy', 'balanced'],
        correctAnswer: 0,
        explanation: 'Sedentary lifestyle = lối sống ít vận động, ngồi lì một chỗ nhiều giờ.',
        topic: 'Vocabulary - Teenagers & Health',
        difficulty: 'medium'
      },
      {
        id: 'ta-16',
        content: 'My children are hooked ______ playing chess.',
        options: ['on', 'in', 'at', 'about'],
        correctAnswer: 0,
        explanation: 'Cấu trúc cố định: be hooked on sth/V-ing (say mê, nghiện điều gì).',
        topic: 'Prepositions & Expressions',
        difficulty: 'easy'
      },
      {
        id: 'ta-17',
        content: 'Many parents are worried that their kids are ______ to computer games.',
        options: ['interested', 'fond', 'addicted', 'crazy'],
        correctAnswer: 2,
        explanation: 'Đi với giới từ "to" ta dùng "addicted to" (nghiện). Các từ khác: interested in, fond of, crazy about.',
        topic: 'Prepositions',
        difficulty: 'easy'
      },
      {
        id: 'ta-18',
        content: 'I think watching TV more than 5 hours a day may ______ the children’s health.',
        options: ['balance', 'ban', 'improve', 'affect'],
        correctAnswer: 3,
        explanation: 'Affect (ảnh hưởng xấu tới). Xem TV quá 5 tiếng ảnh hưởng đến sức khỏe.',
        topic: 'Vocabulary',
        difficulty: 'medium'
      },
      {
        id: 'ta-19',
        content: 'My family is having a “digital ______” weekend: no phones, no TV, just board games and cycling.',
        options: ['device', 'detox', 'download', 'display'],
        correctAnswer: 1,
        explanation: 'Digital detox = kì nghỉ cai thiết bị điện tử để thư giãn tinh thần.',
        topic: 'Vocabulary',
        difficulty: 'medium'
      },
      {
        id: 'ta-20',
        content: 'Practising ____, such as breathing slowly and focusing on the present moment, helps teens feel calmer.',
        options: ['carelessness', 'homesickness', 'mindfulness', 'laziness'],
        correctAnswer: 2,
        explanation: 'Mindfulness = chánh niệm (thực hành thở chậm và tập trung vào giây phút hiện tại).',
        topic: 'Vocabulary',
        difficulty: 'medium'
      },
      {
        id: 'ta-21',
        content: 'We can see a lot of cows and buffaloes on the green ______ in the countryside.',
        options: ['paddy fields', 'farms', 'pastures', 'lakes'],
        correctAnswer: 2,
        explanation: 'Pastures = đồng cỏ chăn thả gia súc (bò, trâu gặm cỏ).',
        topic: 'Vocabulary - Countryside',
        difficulty: 'easy'
      },
      {
        id: 'ta-22',
        content: 'After harvesting rice, I helped my dad ______ it onto a truck.',
        options: ['unload', 'pick', 'dry', 'load'],
        correctAnswer: 3,
        explanation: 'Load onto = chất hàng / bốc lúa lên xe tải. (Unload = dỡ xuống).',
        topic: 'Vocabulary - Countryside',
        difficulty: 'easy'
      },
      {
        id: 'ta-23',
        content: 'Nowadays, many farmers use agri-______ to spray their crops from the sky.',
        options: ['tractors', 'buffaloes', 'ploughs', 'drones'],
        correctAnswer: 3,
        explanation: 'Agri-drones = máy bay không người lái nông nghiệp dùng để phun thuốc từ trên không.',
        topic: 'Vocabulary - Modern Countryside',
        difficulty: 'easy'
      },
      {
        id: 'ta-24',
        content: '______ is the fear that other people are having fun without you, which makes many teens check social media all the time.',
        options: ['Cyberbullying', 'FOMO', 'Peer validation', 'Mindfulness'],
        correctAnswer: 1,
        explanation: 'FOMO = Fear Of Missing Out (hội chứng sợ bỏ lỡ thông tin/cuộc vui).',
        topic: 'Vocabulary - Teenagers',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'ta8-u123-nguphap',
    title: 'Tiếng Anh 8 - Ngữ Pháp & Đọc Hiểu (So sánh, Câu ghép & Bài đọc)',
    subject: 'Tiếng Anh',
    grade: 'Lớp 8B',
    description: 'Chuyên đề Ngữ pháp câu ghép (so, therefore, however, but, and), so sánh hơn trạng từ/tính từ, đọc hiểu Làng gốm Thanh Hà & Hội chợ trường.',
    createdAt: '2026-10-22',
    isDefault: true,
    summaries: [
      {
        id: 'ta-sum-3',
        title: 'Cấu trúc So sánh hơn của Tính từ & Trạng từ',
        keyPoints: [
          'Trạng từ ngắn: hard -> harder, fast -> faster, early -> earlier.',
          'Trạng từ dài tận cùng -ly: more + adv + than (more fluently, more carefully, more quickly).',
          'Bất quy tắc: well -> better, badly -> worse, far -> farther/further.',
          'Lưu ý: Jim is worse at Maths than John -> Is John better at Maths than Jim?'
        ],
        formulaOrRule: 'Short adv: V + adv-er + than | Long adv: V + more + adv + than'
      },
      {
        id: 'ta-sum-4',
        title: 'Liên từ kết hợp & Trạng từ liên kết trong câu ghép',
        keyPoints: [
          'FANBOYS (for, and, nor, but, or, yet, so): Đứng sau dấu phẩy (e.g. I’m tired, so I go to bed).',
          'Trạng từ liên kết (therefore, however, otherwise): Đứng sau dấu chấm phẩy và trước dấu phẩy (e.g. He worked hard; therefore, he passed).'
        ]
      }
    ],
    questions: [
      {
        id: 'ta-25',
        content: 'I prefer ______ comic books to ______ board games.',
        options: ['reading – playing', 'read – play', 'to read – to play', 'reading – play'],
        correctAnswer: 0,
        explanation: 'Cấu trúc: prefer V-ing to V-ing (thích làm cái gì hơn cái gì).',
        topic: 'Verbs of liking/disliking',
        difficulty: 'medium'
      },
      {
        id: 'ta-26',
        content: 'Lucia hates ______ to school every morning.',
        options: ['walk', 'to walk', 'walking', 'both B & C'],
        correctAnswer: 3,
        explanation: 'Sau động từ "hate" có thể dùng cả V-ing (walking) lẫn to-V (to walk). Do đó cả B và C đều đúng.',
        topic: 'Verbs of liking/disliking',
        difficulty: 'medium'
      },
      {
        id: 'ta-27',
        content: 'We are ______ on playing basketball after school.',
        options: ['interested', 'keen', 'crazy', 'fond'],
        correctAnswer: 1,
        explanation: 'Cụm từ cố định: be keen on + V-ing (thích thú, say mê).',
        topic: 'Expressions of liking',
        difficulty: 'easy'
      },
      {
        id: 'ta-28',
        content: 'Many experts advocate ______ teenagers’ screen time to two hours a day.',
        options: ['limit', 'to limit', 'limiting', 'limited'],
        correctAnswer: 2,
        explanation: 'Sau "advocate" (ủng hộ, chủ trương) đi với V-ing: advocate limiting.',
        topic: 'Gerund after verbs',
        difficulty: 'hard'
      },
      {
        id: 'ta-29',
        content: 'I don’t mind ______ the trees in the garden when my father asks me to.',
        options: ['to water', 'water', 'watered', 'watering'],
        correctAnswer: 3,
        explanation: 'Sau "don\'t mind" ta dùng động từ đuôi -ing (watering).',
        topic: 'Gerund',
        difficulty: 'easy'
      },
      {
        id: 'ta-30',
        content: 'The cost of living in the city is much ______ than that in the countryside.',
        options: ['expensive', 'more expensive', 'expensiver', 'the more expensive'],
        correctAnswer: 1,
        explanation: 'Expensive là tính từ dài, so sánh hơn dùng: much more expensive than.',
        topic: 'Comparatives',
        difficulty: 'easy'
      },
      {
        id: 'ta-31',
        content: 'Jane lives in London, so she can speak English ______ than us.',
        options: ['fluentlier', 'more fluentlier', 'more fluently', 'the most fluently'],
        correctAnswer: 2,
        explanation: 'Fluently là trạng từ dài bổ nghĩa cho động từ speak, dạng so sánh hơn là "more fluently".',
        topic: 'Comparative adverbs',
        difficulty: 'medium'
      },
      {
        id: 'ta-32',
        content: 'Buildings in cities are much ______ than those in the countryside.',
        options: ['more tall', 'taler', 'more taller', 'taller'],
        correctAnswer: 3,
        explanation: 'Tall là tính từ ngắn, so sánh hơn là taller. Much taller = cao hơn nhiều.',
        topic: 'Comparatives',
        difficulty: 'easy'
      },
      {
        id: 'ta-33',
        content: 'Minh dreads ______ in front of the whole class, so he always feels nervous before presentations.',
        options: ['speak', 'speaking', 'to speaking', 'spoke'],
        correctAnswer: 1,
        explanation: 'Sau động từ "dread" (sợ hãi làm gì) đi với V-ing (speaking).',
        topic: 'Gerund',
        difficulty: 'medium'
      },
      {
        id: 'ta-34',
        content: 'Tony works hard; ______, he gets a promotion every two years.',
        options: ['however', 'so', 'therefore', 'if'],
        correctAnswer: 2,
        explanation: 'Tony làm việc chăm chỉ; vì vậy (therefore), anh ấy được thăng chức 2 năm một lần. Dấu chấm phẩy và phẩy dùng với therefore.',
        topic: 'Conjunctive Adverbs',
        difficulty: 'medium'
      },
      {
        id: 'ta-35',
        content: 'Lucy went to school late, ______ she got up late.',
        options: ['and', 'for', 'but', 'or'],
        correctAnswer: 1,
        explanation: 'Liên từ "for" ở đây mang nghĩa là "vì / bởi vì" giải thích nguyên nhân đi học muộn.',
        topic: 'Coordinating Conjunctions',
        difficulty: 'hard'
      },
      {
        id: 'ta-36',
        content: 'In the past, teens spent their free time playing folk games outdoors. ______, today many of them spend hours on their phones.',
        options: ['Therefore', 'As a result', 'In contrast', 'Otherwise'],
        correctAnswer: 2,
        explanation: 'In contrast = Ngược lại (dùng để diễn tả sự đối lập giữa quá khứ và hiện tại).',
        topic: 'Linking Words',
        difficulty: 'medium'
      },
      {
        id: 'ta-37',
        content: 'You have to fasten your seatbelt; ______, you will be fined.',
        options: ['however', 'so', 'or', 'otherwise'],
        correctAnswer: 3,
        explanation: 'Otherwise = nếu không thì (sau dấu chấm phẩy, trước dấu phẩy). Bạn phải thắt dây an toàn, nếu không sẽ bị phạt.',
        topic: 'Conjunctive Adverbs',
        difficulty: 'medium'
      },
      {
        id: 'ta-38',
        content: 'In the reading passage about Thanh Ha pottery village, why did many young people leave the village some years ago?',
        options: [
          'The village was too crowded and noisy.',
          'They wanted to study pottery in the city.',
          'Making pottery did not earn them enough money.',
          'There were too many tourists in the village.'
        ],
        correctAnswer: 2,
        explanation: 'Trong bài đọc: "...many young people left the village to find jobs in big cities because making pottery did not bring them enough money."',
        topic: 'Reading Comprehension',
        difficulty: 'medium'
      },
      {
        id: 'ta-39',
        content: 'In the notice for Digital Detox Zone: "Phones on silent and out of sight, Wi-Fi OFF from 9 p.m. to 7 a.m., Board games & books at reception". What can guests do?',
        options: [
          'Hand in their phones at reception before 9 p.m.',
          'Borrow board games without asking the staff.',
          'Use the Wi-Fi all night if they need to.',
          'Make phone calls as long as they speak quietly.'
        ],
        correctAnswer: 1,
        explanation: 'Cụm "help yourself!" nghĩa là khách có thể tự do mượn sách và board games mà không cần xin phép/hỏi nhân viên.',
        topic: 'Reading Notices & Signs',
        difficulty: 'hard'
      },
      {
        id: 'ta-40',
        content: 'According to the anti-cyberbullying poster (STOP, SAVE, BLOCK, TELL), what should you do if someone bullies you online?',
        options: [
          'Keep a copy of the bully\'s messages.',
          'Reply to the bully politely.',
          'Delete the messages straight away.',
          'Stop using social media for good.'
        ],
        correctAnswer: 0,
        explanation: 'Mục SAVE ghi rõ: "Take screenshots of the messages" (chụp lại màn hình/lưu giữ tin nhắn làm bằng chứng).',
        topic: 'Reading Notices & Posters',
        difficulty: 'medium'
      }
    ]
  }
];
