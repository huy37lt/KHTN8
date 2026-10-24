import { QuizSet, Question } from '../types/quiz';

// 9 câu Phát âm
const PRONUNCIATION_QUESTIONS: Question[] = [
  {
    id: 'ta-p1',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: could, soup, would, should',
    options: ['could', 'soup', 'would', 'should'],
    correctAnswer: 1,
    explanation: 'Soup phát âm là /uː/, trong khi could, would, should phát âm là /ʊ/.',
    topic: 'Pronunciation /ʊ/ & /uː/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p2',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: school, pool, choose, look',
    options: ['school', 'pool', 'choose', 'look'],
    correctAnswer: 3,
    explanation: 'Look phát âm là /ʊ/, còn school, pool, choose phát âm là /uː/.',
    topic: 'Pronunciation /ʊ/ & /uː/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p3',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: sugar, full, lunch, put',
    options: ['sugar', 'full', 'lunch', 'put'],
    correctAnswer: 2,
    explanation: 'Lunch phát âm là /ʌ/, trong khi sugar, full, put phát âm là /ʊ/.',
    topic: 'Pronunciation /ʊ/ & /ʌ/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p4',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: woman, two, movie, shoe',
    options: ['woman', 'two', 'movie', 'shoe'],
    correctAnswer: 0,
    explanation: 'Woman phát âm là /ˈwʊm.ən/ (âm /ʊ/), trong khi two, movie, shoe đều phát âm là /uː/.',
    topic: 'Pronunciation /ʊ/ & /uː/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p5',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: happy, man, afraid, family',
    options: ['happy', 'man', 'afraid', 'family'],
    correctAnswer: 2,
    explanation: 'Afraid có âm "a" phát âm là /ə/, còn happy, man, family đều phát âm là /æ/.',
    topic: 'Pronunciation /ə/ & /æ/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p6',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: product, clock, job, mother',
    options: ['product', 'clock', 'job', 'mother'],
    correctAnswer: 3,
    explanation: 'Mother có âm "o" phát âm là /ʌ/, còn product, clock, job phát âm là /ɒ/.',
    topic: 'Pronunciation vowels',
    difficulty: 'easy'
  },
  {
    id: 'ta-p7',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: lose, home, phone, close',
    options: ['lose', 'home', 'phone', 'close'],
    correctAnswer: 0,
    explanation: 'Lose có âm "o" phát âm là /uː/ (/luːz/), trong khi home, phone, close đều phát âm là /əʊ/.',
    topic: 'Pronunciation /əʊ/ & /uː/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p8',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: noise, code, toy, coin',
    options: ['noise', 'code', 'toy', 'coin'],
    correctAnswer: 1,
    explanation: 'Code phát âm là /kəʊd/ (âm /əʊ/), trong khi noise, toy, coin đều phát âm là /ɔɪ/.',
    topic: 'Pronunciation /ɔɪ/ & /əʊ/',
    difficulty: 'easy'
  },
  {
    id: 'ta-p9',
    content: 'Circle the word whose underlined part differs from the others in pronunciation: village, cottage, heritage, banana',
    options: ['village', 'cottage', 'heritage', 'banana'],
    correctAnswer: 3,
    explanation: 'Banana có âm tận cùng phát âm là /ə/ (/bəˈnɑːnə/), trong khi đuôi "-age" của village, cottage, heritage đều phát âm là /ɪdʒ/.',
    topic: 'Pronunciation /ɪ/ & /ə/',
    difficulty: 'medium'
  }
];

// 8 câu Trọng âm
const STRESS_QUESTIONS: Question[] = [
  {
    id: 'ta-s1',
    content: 'Circle the word that differs from the others in the position of primary stress: hobby, affect, relax, decide',
    options: ['hobby', 'affect', 'relax', 'decide'],
    correctAnswer: 0,
    explanation: 'Hobby trọng âm rơi vào âm tiết 1 (\'hobby), các từ affect, relax, decide trọng âm âm tiết 2.',
    topic: 'Stress 2-syllable words',
    difficulty: 'easy'
  },
  {
    id: 'ta-s2',
    content: 'Circle the word that differs from the others in the position of primary stress: virtual, data, harmful, exist',
    options: ['virtual', 'data', 'harmful', 'exist'],
    correctAnswer: 3,
    explanation: 'Exist trọng âm rơi vào âm tiết 2 (ex\'ist), các từ virtual, data, harmful trọng âm rơi vào âm tiết 1.',
    topic: 'Stress 2-syllable words',
    difficulty: 'easy'
  },
  {
    id: 'ta-s3',
    content: 'Circle the word that differs from the others in the position of primary stress: improve, leisure, message, muscle',
    options: ['improve', 'leisure', 'message', 'muscle'],
    correctAnswer: 0,
    explanation: 'Improve trọng âm âm 2 (im\'prove), trong khi leisure, message, muscle đều trọng âm âm 1.',
    topic: 'Stress 2-syllable words',
    difficulty: 'easy'
  },
  {
    id: 'ta-s4',
    content: 'Circle the word that differs from the others in the position of primary stress: organise, solution, melody, socialise',
    options: ['organise', 'solution', 'melody', 'socialise'],
    correctAnswer: 1,
    explanation: 'Solution trọng âm âm 2 (so\'lution), trong khi organise, melody, socialise đều trọng âm âm 1.',
    topic: 'Stress 3-syllable words',
    difficulty: 'medium'
  },
  {
    id: 'ta-s5',
    content: 'Circle the word that differs from the others in the position of primary stress: access, cattle, ferry, collect',
    options: ['access', 'cattle', 'ferry', 'collect'],
    correctAnswer: 3,
    explanation: 'Collect trọng âm âm 2 (col\'lect), còn access, cattle, ferry đều trọng âm âm 1.',
    topic: 'Stress 2-syllable words',
    difficulty: 'easy'
  },
  {
    id: 'ta-s6',
    content: 'Circle the word that differs from the others in the position of primary stress: convenient, discover, cultivate, excited',
    options: ['convenient', 'discover', 'cultivate', 'excited'],
    correctAnswer: 2,
    explanation: 'Cultivate trọng âm âm 1 (\'cultivate), trong khi convenient, discover, excited đều trọng âm âm 2.',
    topic: 'Stress 3-syllable words',
    difficulty: 'medium'
  },
  {
    id: 'ta-s7',
    content: 'Circle the word that differs from the others in the position of primary stress: sedentary, mindfulness, cyberbullying, addiction',
    options: ['sedentary', 'mindfulness', 'cyberbullying', 'addiction'],
    correctAnswer: 3,
    explanation: 'Addiction trọng âm âm 2 (ad\'diction), các từ sedentary, mindfulness, cyberbullying đều có trọng âm chính ở âm 1.',
    topic: 'Stress 3 & 4-syllable words',
    difficulty: 'hard'
  },
  {
    id: 'ta-s8',
    content: 'Circle the word that differs from the others in the position of primary stress: homestay, heritage, pollution, festival',
    options: ['homestay', 'heritage', 'pollution', 'festival'],
    correctAnswer: 2,
    explanation: 'Pollution trọng âm âm 2 (pol\'lution), còn homestay, heritage, festival trọng âm âm 1.',
    topic: 'Stress words',
    difficulty: 'easy'
  }
];

// 30 câu Trắc nghiệm từ vựng & ngữ pháp (Exercise 3)
const VOCAB_GRAMMAR_QUESTIONS: Question[] = [
  {
    id: 'ta-v1',
    content: 'Sitting in front of screens for too many hours a day can lead to a ______ lifestyle.',
    options: ['sedentary', 'active', 'healthy', 'balanced'],
    correctAnswer: 0,
    explanation: 'Sedentary lifestyle = lối sống ít vận động, ngồi nhiều trước màn hình.',
    topic: 'Vocabulary Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v2',
    content: 'My children are hooked ______ playing chess.',
    options: ['on', 'in', 'at', 'about'],
    correctAnswer: 0,
    explanation: 'Cấu trúc: be hooked on sth/V-ing = cực kì yêu thích, đam mê cái gì.',
    topic: 'Phrasal structures',
    difficulty: 'easy'
  },
  {
    id: 'ta-v3',
    content: 'Many parents are worried that their kids are ______ to computer games.',
    options: ['interested', 'fond', 'addicted', 'crazy'],
    correctAnswer: 2,
    explanation: 'Cấu trúc: addicted to sth = nghiện cái gì.',
    topic: 'Vocabulary Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v4',
    content: 'I think watching TV more than 5 hours a day may ______ the children’s health.',
    options: ['balance', 'ban', 'improve', 'affect'],
    correctAnswer: 3,
    explanation: 'Affect = ảnh hưởng, tác động tiêu cực đến sức khỏe.',
    topic: 'Vocabulary Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v5',
    content: 'My family is having a “digital ______” weekend: no phones, no TV, just board games and cycling.',
    options: ['device', 'detox', 'download', 'display'],
    correctAnswer: 1,
    explanation: 'Digital detox = kì nghỉ cai thiết bị điện tử để thư giãn tinh thần.',
    topic: 'Vocabulary Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v6',
    content: 'Practising ______, such as breathing slowly and focusing on the present moment, helps teens feel calmer.',
    options: ['carelessness', 'homesickness', 'mindfulness', 'laziness'],
    correctAnswer: 2,
    explanation: 'Mindfulness = thực hành chánh niệm, tập trung vào hiện tại.',
    topic: 'Vocabulary Unit 3',
    difficulty: 'easy'
  },
  {
    id: 'ta-v7',
    content: 'We can see a lot of cows and buffaloes on the green ______ in the countryside.',
    options: ['paddy fields', 'farms', 'pastures', 'lakes'],
    correctAnswer: 2,
    explanation: 'Pastures = đồng cỏ cho gia súc gặm.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v8',
    content: 'After harvesting rice, I helped my dad ______ it onto a truck.',
    options: ['unload', 'pick', 'dry', 'load'],
    correctAnswer: 3,
    explanation: 'Load sth onto a truck = chất/bốc hàng lên xe tải.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v9',
    content: 'I remember going with the village children to ______ the buffaloes when I was a kid.',
    options: ['raise', 'herd', 'plant', 'combine'],
    correctAnswer: 1,
    explanation: 'Herd the buffaloes = chăn trâu.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v10',
    content: 'Thanks to modern combine harvesters, farmers can ______ a whole rice field in just a few hours.',
    options: ['plough', 'catch', 'harvest', 'separate'],
    correctAnswer: 2,
    explanation: 'Harvest a rice field = thu hoạch cánh đồng lúa.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v11',
    content: 'In summer, I usually go to my hometown to help my grandmother pick ______ in the orchard.',
    options: ['trees', 'plants', 'fruit', 'flowers'],
    correctAnswer: 2,
    explanation: 'Pick fruit in the orchard = hái trái cây trong vườn.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v12',
    content: 'Nowadays, many farmers use agri-______ to spray their crops from the sky.',
    options: ['tractors', 'buffaloes', 'ploughs', 'drones'],
    correctAnswer: 3,
    explanation: 'Agri-drones = thiết bị bay không người lái dùng trong nông nghiệp để phun thuốc.',
    topic: 'Vocabulary Unit 2',
    difficulty: 'easy'
  },
  {
    id: 'ta-v13',
    content: 'Nowadays, teenagers have ______ from their parents and friends.',
    options: ['pressure', 'activities', 'leaders', 'tests'],
    correctAnswer: 0,
    explanation: 'Have pressure from parents and friends = chịu áp lực từ cha mẹ và bạn bè (peer pressure).',
    topic: 'Vocabulary Unit 3',
    difficulty: 'easy'
  },
  {
    id: 'ta-v14',
    content: 'You should take part ______ some clubs to improve your confidence.',
    options: ['with', 'in', 'of', 'about'],
    correctAnswer: 1,
    explanation: 'Take part in = tham gia vào câu lạc bộ.',
    topic: 'Phrasal verbs',
    difficulty: 'easy'
  },
  {
    id: 'ta-v15',
    content: '______ is the fear that other people are having fun without you, which makes many teens check social media all the time.',
    options: ['Cyberbullying', 'FOMO', 'Peer validation', 'Mindfulness'],
    correctAnswer: 1,
    explanation: 'FOMO = Fear Of Missing Out (Hội chứng sợ bỏ lỡ).',
    topic: 'Vocabulary Unit 3',
    difficulty: 'easy'
  },
  {
    id: 'ta-v16',
    content: 'I prefer ______ comic books to ______ board games.',
    options: ['reading – playing', 'read – play', 'to read – to play', 'reading – play'],
    correctAnswer: 0,
    explanation: 'Cấu trúc: prefer V-ing to V-ing = thích làm gì hơn làm gì.',
    topic: 'Grammar Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v17',
    content: 'Lucia hates ______ to school every morning.',
    options: ['walk', 'to walk', 'walking', 'both B & C'],
    correctAnswer: 3,
    explanation: 'Động từ "hate" có thể đi kèm cả to-infinitive (to walk) và gerund (walking) đều đúng.',
    topic: 'Grammar Unit 1',
    difficulty: 'medium'
  },
  {
    id: 'ta-v18',
    content: 'We are ______ on playing basketball after school.',
    options: ['interested', 'keen', 'crazy', 'fond'],
    correctAnswer: 1,
    explanation: 'Cụm: be keen on = say mê, thích thú.',
    topic: 'Adjective collocations',
    difficulty: 'easy'
  },
  {
    id: 'ta-v19',
    content: 'Many experts advocate ______ teenagers’ screen time to two hours a day.',
    options: ['limit', 'to limit', 'limiting', 'limited'],
    correctAnswer: 2,
    explanation: 'Advocate + V-ing = ủng hộ việc gì.',
    topic: 'Grammar Unit 1',
    difficulty: 'medium'
  },
  {
    id: 'ta-v20',
    content: 'I don’t mind ______ the trees in the garden when my father asks me to.',
    options: ['to water', 'water', 'watered', 'watering'],
    correctAnswer: 3,
    explanation: 'Mind + V-ing: don\'t mind watering = không ngại tưới cây.',
    topic: 'Grammar Unit 1',
    difficulty: 'easy'
  },
  {
    id: 'ta-v21',
    content: 'The cost of living in the city is much ______ than that in the countryside.',
    options: ['expensive', 'more expensive', 'expensiver', 'the more expensive'],
    correctAnswer: 1,
    explanation: 'Expensive là tính từ dài, so sánh hơn là: much more expensive.',
    topic: 'Grammar Unit 2: Comparatives',
    difficulty: 'easy'
  },
  {
    id: 'ta-v22',
    content: 'I think people in urban areas have a ______ life than those in rural areas.',
    options: ['better', 'the best', 'gooder', 'the better'],
    correctAnswer: 0,
    explanation: 'So sánh hơn của "good" là "better".',
    topic: 'Grammar Unit 2: Comparatives',
    difficulty: 'easy'
  },
  {
    id: 'ta-v23',
    content: 'Jane lives in London, so she can speak English ______ than us.',
    options: ['fluentlier', 'more fluentlier', 'more fluently', 'the most fluently'],
    correctAnswer: 2,
    explanation: 'Fluently là trạng từ, so sánh hơn là: more fluently.',
    topic: 'Grammar Unit 2: Comparative Adverbs',
    difficulty: 'easy'
  },
  {
    id: 'ta-v24',
    content: 'Buildings in cities are much ______ than those in the countryside.',
    options: ['more tall', 'taler', 'more taller', 'taller'],
    correctAnswer: 3,
    explanation: 'Tall là tính từ ngắn, so sánh hơn thêm đuôi -er: taller.',
    topic: 'Grammar Unit 2: Comparatives',
    difficulty: 'easy'
  },
  {
    id: 'ta-v25',
    content: 'Minh dreads ______ in front of the whole class, so he always feels nervous before presentations.',
    options: ['speak', 'speaking', 'to speaking', 'spoke'],
    correctAnswer: 1,
    explanation: 'Dread + V-ing = sợ hãi làm việc gì.',
    topic: 'Grammar Unit 1',
    difficulty: 'medium'
  },
  {
    id: 'ta-v26',
    content: 'Tony works hard; ______, he gets a promotion every two years.',
    options: ['however', 'so', 'therefore', 'if'],
    correctAnswer: 2,
    explanation: 'Therefore = do đó/vì vậy (sau dấu chấm phẩy và trước dấu phẩy diễn tả kết quả hợp logic).',
    topic: 'Grammar Unit 3: Compound sentences',
    difficulty: 'easy'
  },
  {
    id: 'ta-v27',
    content: 'Lucy went to school late, ______ she got up late.',
    options: ['and', 'for', 'but', 'or'],
    correctAnswer: 1,
    explanation: 'Liên từ "for" trong câu ghép mang nghĩa "bởi vì / vì rằng" chỉ lý do.',
    topic: 'Grammar Unit 3: Compound sentences',
    difficulty: 'hard'
  },
  {
    id: 'ta-v28',
    content: 'My father is watering the trees, ______ my mother is cooking in the kitchen.',
    options: ['so', 'but', 'and', 'or'],
    correctAnswer: 2,
    explanation: 'And = và (nối 2 mệnh đề diễn ra đồng thời).',
    topic: 'Grammar Unit 3: Compound sentences',
    difficulty: 'easy'
  },
  {
    id: 'ta-v29',
    content: 'In the past, teens spent their free time playing folk games outdoors. ______, today many of them spend hours on their phones.',
    options: ['Therefore', 'As a result', 'In contrast', 'Otherwise'],
    correctAnswer: 2,
    explanation: 'In contrast = Ngược lại (diễn đạt sự tương phản giữa quá khứ và hiện tại).',
    topic: 'Grammar Unit 3: Connectors',
    difficulty: 'medium'
  },
  {
    id: 'ta-v30',
    content: 'You have to fasten your seatbelt; ______, you will be fined.',
    options: ['however', 'so', 'or', 'otherwise'],
    correctAnswer: 3,
    explanation: 'Otherwise = nếu không thì (sau dấu chấm phẩy, trước dấu phẩy). Bạn phải cài dây an toàn, nếu không sẽ bị phạt.',
    topic: 'Grammar Unit 3: Conjunctive Adverbs',
    difficulty: 'medium'
  }
];

// 8 câu Điền từ Cloze test (Exercise 5)
const CLOZE_QUESTIONS: Question[] = [
  {
    id: 'ta-c1',
    content: 'A digital detox is a period of time when a person stays away (1) ______ electronic devices such as smartphones...',
    options: ['from', 'of', 'with', 'on'],
    correctAnswer: 0,
    explanation: 'Cụm từ: stay away from sth = tránh xa cái gì.',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c2',
    content: 'Many teenagers spend more than 7 hours looking at screens, so they often have a (2) ______ lifestyle and do very little exercise.',
    options: ['active', 'sedentary', 'healthy', 'busy'],
    correctAnswer: 1,
    explanation: 'Sedentary lifestyle = lối sống lười vận động, ngồi nhiều.',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c3',
    content: 'Experts say that taking a break from technology can (3) ______ people sleep better and feel less stressed.',
    options: ['to help', 'helping', 'help', 'helped'],
    correctAnswer: 2,
    explanation: 'Sau trợ động từ khuyết thiếu can + V-nguyên thể: can help.',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c4',
    content: 'Instead of (4) ______ social media, teens can join outdoor activities, play folk games or learn a craft...',
    options: ['check', 'to check', 'checking', 'checked'],
    correctAnswer: 2,
    explanation: 'Sau giới từ "of" dùng V-ing: instead of checking.',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c5',
    content: 'These activities are not only fun (5) ______ also good for both the body and the mind.',
    options: ['and', 'but', 'or', 'so'],
    correctAnswer: 1,
    explanation: 'Cấu trúc tương quan: not only ... but also ... (không những ... mà còn ...).',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c6',
    content: 'Some families have a “no-phone dinner” rule; (6) ______, everyone can talk and share their day.',
    options: ['however', 'otherwise', 'as a result', 'although'],
    correctAnswer: 2,
    explanation: 'As a result = kết quả là (quy tắc không dùng điện thoại khi ăn cơm mang lại kết quả tích cực là mọi người nói chuyện với nhau).',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'medium'
  },
  {
    id: 'ta-c7',
    content: 'If you feel (7) ______ about missing out on online news, remember that real-life friends are more important than “likes”.',
    options: ['anxious', 'anxiety', 'anxiously', 'anxiousness'],
    correctAnswer: 0,
    explanation: 'Sau động từ liên kết "feel" cần một tính từ: feel anxious (cảm thấy lo âu).',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  },
  {
    id: 'ta-c8',
    content: 'Start small: turn off notifications for one hour a day, and you will soon notice the (8) ______.',
    options: ['different', 'differ', 'differently', 'difference'],
    correctAnswer: 3,
    explanation: 'Sau mạo từ "the" cần một danh từ: the difference (sự khác biệt).',
    topic: 'Cloze Test: Digital Detox',
    difficulty: 'easy'
  }
];

// 5 câu Thông báo Announcement (Exercise 6)
const ANNOUNCEMENT_QUESTIONS: Question[] = [
  {
    id: 'ta-an1',
    content: 'We are excited to announce that the (1) ______ School Fair will take place on Saturday, May 20th...',
    options: ['annual', 'annually', 'anniversary', 'annualise'],
    correctAnswer: 0,
    explanation: 'Cần tính từ bổ nghĩa cho "School Fair": annual = thường niên (hằng năm).',
    topic: 'Announcement: School Fair',
    difficulty: 'easy'
  },
  {
    id: 'ta-an2',
    content: 'There will be a (2) ______ of activities, including games, food stalls, and a talent show.',
    options: ['various', 'vary', 'variety', 'very'],
    correctAnswer: 2,
    explanation: 'Cụm danh từ: a variety of activities = nhiều hoạt động phong phú.',
    topic: 'Announcement: School Fair',
    difficulty: 'easy'
  },
  {
    id: 'ta-an3',
    content: 'This is a great opportunity (3) ______ fun, showcase your talents...',
    options: ['have', 'to have', 'having', 'had'],
    correctAnswer: 1,
    explanation: 'Cấu trúc: opportunity + to V: a great opportunity to have fun.',
    topic: 'Announcement: School Fair',
    difficulty: 'easy'
  },
  {
    id: 'ta-an4',
    content: '...and (4) ______ money for our school’s charity projects.',
    options: ['take', 'rise', 'get', 'raise'],
    correctAnswer: 3,
    explanation: 'Cụm cố định: raise money for charity = quyên góp tiền từ thiện.',
    topic: 'Announcement: School Fair',
    difficulty: 'easy'
  },
  {
    id: 'ta-an5',
    content: 'Don’t miss (5) ______ on this exciting event!',
    options: ['out', 'of', 'in', 'on'],
    correctAnswer: 0,
    explanation: 'Cụm động từ: miss out on sth = bỏ lỡ cơ hội tham gia sự kiện gì.',
    topic: 'Announcement: School Fair',
    difficulty: 'easy'
  }
];

// 6 câu Đọc hiểu Làng Gốm Bát Tràng / Thanh Hà (Exercise 7)
const READING_QUESTIONS: Question[] = [
  {
    id: 'ta-r1',
    content: 'What is the passage about Thanh Ha pottery village mainly about?',
    options: [
      'How to make pottery in Thanh Ha Village',
      'How rural tourism has changed a traditional village',
      'Why young people prefer living in big cities',
      'The history of Hoi An Ancient Town'
    ],
    correctAnswer: 1,
    explanation: 'Toàn bài tập trung nói về việc du lịch nông thôn đã làm thay đổi và hồi sinh làng nghề truyền thống như thế nào.',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'medium'
  },
  {
    id: 'ta-r2',
    content: 'Why did many young people leave Thanh Ha some years ago?',
    options: [
      'The village was too crowded and noisy.',
      'They wanted to study pottery in the city.',
      'Making pottery did not earn them enough money.',
      'There were too many tourists in the village.'
    ],
    correctAnswer: 2,
    explanation: 'Trong đoạn 1: "...many young people left the village to find jobs in big cities because making pottery did not bring them enough money."',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'easy'
  },
  {
    id: 'ta-r3',
    content: 'The word “hands-on” in paragraph 2 is closest in meaning to ______.',
    options: ['practical', 'expensive', 'boring', 'dangerous'],
    correctAnswer: 0,
    explanation: 'Hands-on = thực tế, tự tay làm (practical).',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'medium'
  },
  {
    id: 'ta-r4',
    content: 'The word “They” in the last paragraph refers to ______.',
    options: ['visitors', 'local leaders', 'young people', 'refillable water bottles'],
    correctAnswer: 1,
    explanation: 'Câu trước: "Local leaders now encourage... They believe that..." -> They thay thế cho local leaders.',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'easy'
  },
  {
    id: 'ta-r5',
    content: 'Which of the following is NOT mentioned as an activity for tourists in Thanh Ha?',
    options: [
      'shaping clay on a spinning wheel',
      'cooking local dishes',
      'cycling along the river',
      'herding buffaloes'
    ],
    correctAnswer: 3,
    explanation: 'Bài đọc nhắc đến nặn gốm (shaping clay), nấu ăn (cook local dishes), đạp xe ven sông (cycle along the river). Chăn trâu (herding buffaloes) KHÔNG được đề cập.',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'easy'
  },
  {
    id: 'ta-r6',
    content: 'It can be inferred from the passage that ______.',
    options: [
      'tourism brings only benefits to Thanh Ha',
      'local leaders want to stop tourists from visiting the village',
      'eco-friendly tourism can help protect the village',
      'all the young people have returned to the village'
    ],
    correctAnswer: 2,
    explanation: 'Đoạn cuối nhấn mạnh: Các nhà lãnh đạo địa phương khuyến khích du lịch thân thiện môi trường để phát triển mà không phá hủy sự yên bình.',
    topic: 'Reading: Thanh Ha Village',
    difficulty: 'medium'
  }
];

// 5 câu Biển báo / Thông báo ngắn (Exercise 13)
const NOTICES_QUESTIONS: Question[] = [
  {
    id: 'ta-n1',
    content: 'In the notice for DIGITAL DETOX ZONE: "Phones on silent and out of sight | Wi-Fi OFF from 9 p.m. to 7 a.m. | Board games & books at reception – help yourself!". What can guests do in this area?',
    options: [
      'Hand in their phones at reception before 9 p.m.',
      'Borrow board games without asking the staff.',
      'Use the Wi-Fi all night if they need to.',
      'Make phone calls as long as they speak quietly.'
    ],
    correctAnswer: 1,
    explanation: '"Help yourself!" nghĩa là khách có thể tự nhiên lấy/mượn board games và sách mà không cần phải hỏi xin nhân viên.',
    topic: 'Reading Notices & Signs',
    difficulty: 'medium'
  },
  {
    id: 'ta-n2',
    content: 'In CLAY CORNER notice: "Make your own bowl in 90 minutes! Sessions: 8.30 a.m. & 2.00 p.m. (closed on Mondays). Under-10s must come with an adult. Your bowl needs 3 days to dry and bake - we can post it to your home." Which is TRUE?',
    options: [
      'Children under 10 are not allowed to join the class.',
      'Visitors can take their bowls home right after the class.',
      'The class is open every day of the week.',
      'Visitors don\'t have to come back to collect their bowls.'
    ],
    correctAnswer: 3,
    explanation: 'Thông báo ghi "we can post it to your home" -> Khách không cần phải tự quay lại lấy bát sứ, xưởng sẽ chuyển phát về tận nhà.',
    topic: 'Reading Notices & Signs',
    difficulty: 'medium'
  },
  {
    id: 'ta-n3',
    content: 'In GREEN VALLEY FARMSTAY RULES: "Keep to the paths - the rice is growing | Please don\'t feed the buffaloes | Leave all gates as you find them | Drones spray crops on Tuesday mornings - stay out of fields." What are visitors asked to do?',
    options: [
      'Walk only where there are paths.',
      'Close every gate they go through.',
      'Give the buffaloes some fresh grass.',
      'Watch the drones spray the crops on Tuesday mornings.'
    ],
    correctAnswer: 0,
    explanation: '"Keep to the paths" = chỉ đi bộ trên lối đi đã quy định.',
    topic: 'Reading Notices & Signs',
    difficulty: 'easy'
  },
  {
    id: 'ta-n4',
    content: 'In GREEN TEENS CLUB poster: "Plant trees - Clean up the park - Make new friends | Every Saturday, 7-9 a.m. | Grades 7-9 | Bring a refillable water bottle - no plastic bottles, please." What can be inferred?',
    options: [
      'The club is open to all students in the school.',
      'Members have to bring plastic bottles of water.',
      'The club\'s activities help protect the environment.',
      'Students must sign up after 20th October.'
    ],
    correctAnswer: 2,
    explanation: 'Trồng cây, dọn rác công viên, không dùng chai nhựa dùng một lần -> hoạt động bảo vệ môi trường.',
    topic: 'Reading Notices & Signs',
    difficulty: 'easy'
  },
  {
    id: 'ta-n5',
    content: 'In BULLIED ONLINE poster (STOP: Don\'t reply; SAVE: Take screenshots of messages; BLOCK: Block user; TELL: Talk to an adult you trust). What should you do if someone bullies you online?',
    options: [
      'Keep a copy of the bully\'s messages.',
      'Reply to the bully politely.',
      'Delete the messages straight away.',
      'Stop using social media for good.'
    ],
    correctAnswer: 0,
    explanation: 'Bước SAVE: Chụp lại màn hình để lưu bản sao tin nhắn làm chứng cứ (Keep a copy of the messages).',
    topic: 'Reading Notices & Signs',
    difficulty: 'easy'
  }
];

// 6 câu Sắp xếp đoạn văn (Exercise 14)
const REORDER_QUESTIONS: Question[] = [
  {
    id: 'ta-o1',
    content: 'Put the sentences in the correct order: "Last month, our class tried a one-week digital detox."\na. As a result, we slept better and talked to each other more.\nb. At first, it was hard because we kept wanting to check our phones.\nc. However, after two or three days, we started to enjoy reading and playing outdoor games.',
    options: ['b-c-a', 'c-a-b', 'a-b-c', 'b-a-c'],
    correctAnswer: 0,
    explanation: 'Trật tự hợp logic: b (ban đầu khó khăn) -> c (sau 2-3 ngày bắt đầu thích nghi) -> a (kết quả là ngủ ngon hơn và gắn kết hơn). Thứ tự: b-c-a.',
    topic: 'Text Cohesion: Digital Detox',
    difficulty: 'medium'
  },
  {
    id: 'ta-o2',
    content: 'Put the sentences in the correct order: "My grandparents’ village has changed a lot."\na. Now, however, farmers use smart machines and even drones to look after their crops.\nb. In the past, people ploughed the fields with buffaloes and did everything by hand.\nc. As a result, they can work faster and have more free time.',
    options: ['a-b-c', 'b-a-c', 'c-a-b', 'b-c-a'],
    correctAnswer: 1,
    explanation: 'Trật tự: b (Trong quá khứ cày bằng trâu) -> a (Giờ đây dùng máy bay không người lái) -> c (Kết quả làm việc nhanh hơn). Thứ tự: b-a-c.',
    topic: 'Text Cohesion: Village Change',
    difficulty: 'medium'
  },
  {
    id: 'ta-o3',
    content: 'Put the sentences in the correct order: "FOMO, or the fear of missing out, is common among teenagers."\na. Because of this, they keep checking social media late at night.\nb. They worry that their friends are having fun without them.\nc. This habit can make them tired and stressed the next day.',
    options: ['a-c-b', 'b-c-a', 'b-a-c', 'c-b-a'],
    correctAnswer: 2,
    explanation: 'Trật tự: b (Họ lo lắng bạn bè vui chơi không có mình) -> a (Vì thế họ liên tục check mạng lúc đêm muộn) -> c (Thói quen này làm họ mệt mỏi hôm sau). Thứ tự: b-a-c.',
    topic: 'Text Cohesion: FOMO',
    difficulty: 'medium'
  },
  {
    id: 'ta-o4',
    content: 'Put sentences in order: "Our school has just started a new Debate Club."\na. Members meet every Thursday afternoon in Room 12.\nb. They practise speaking English and learn how to give reasons for their opinions.\nc. The club is open to all students in grades 8 and 9.\nd. Many shy students say they feel more confident after a few meetings.\ne. If you want to join, please sign up with Ms. Lan before Friday.',
    options: ['a-c-b-e-d', 'b-a-c-d-e', 'c-b-a-e-d', 'c-a-b-d-e'],
    correctAnswer: 3,
    explanation: 'Trật tự chuẩn: c (Đối tượng tham gia khối 8-9) -> a (Thời gian và phòng họp) -> b (Nội dung hoạt động tập nói) -> d (Cảm nhận tự tin hơn) -> e (Lời kêu gọi đăng ký). Thứ tự: c-a-b-d-e.',
    topic: 'Text Cohesion: Debate Club',
    difficulty: 'hard'
  },
  {
    id: 'ta-o5',
    content: 'Put sentences in order: "Last weekend, my family visited a pottery village near Hoi An."\na. First, a local artisan showed us how to shape clay on a spinning wheel.\nb. Then we tried to make our own small vases, which was harder than it looked.\nc. In the afternoon, we cycled along the river and enjoyed the fresh air.\nd. Finally, we had dinner with our host family at their homestay.\ne. It was the most memorable trip I have ever had.',
    options: ['b-a-c-d-e', 'a-b-c-d-e', 'a-c-b-e-d', 'c-a-b-d-e'],
    correctAnswer: 1,
    explanation: 'Trật tự thời gian theo liên từ: a (First: đầu tiên xem nghệ nhân nặn) -> b (Then: sau đó tự nặn) -> c (In the afternoon: buổi chiều đạp xe) -> d (Finally: tối ăn cơm homestay) -> e (Kết luận chuyến đi đáng nhớ nhất). Thứ tự: a-b-c-d-e.',
    topic: 'Text Cohesion: Trip to Pottery Village',
    difficulty: 'medium'
  },
  {
    id: 'ta-o6',
    content: 'Put sentences in order: "Teen wellness: healthy hobbies vs. screen addiction."\na. Spending too much time on screens can cause “text neck”, eye strain and poor sleep.\nb. Therefore, teens should replace some screen time with healthy hobbies.\nc. Many teenagers look down at their phones for hours every day.\nd. For example, they can go cycling, play badminton or learn a musical instrument.\ne. These activities keep them fit and help them relax after school.',
    options: ['c-a-b-d-e', 'a-c-b-d-e', 'c-b-a-e-d', 'b-c-a-d-e'],
    correctAnswer: 0,
    explanation: 'Trật tự: c (Thực trạng nhìn điện thoại nhiều giờ) -> a (Tác hại đau cổ mỏi mắt) -> b (Vì vậy cần thay thế bằng thói quen lành mạnh) -> d (Ví dụ đạp xe, cầu lông...) -> e (Lợi ích giúp giữ dáng và thư giãn). Thứ tự: c-a-b-d-e.',
    topic: 'Text Cohesion: Teen Wellness',
    difficulty: 'hard'
  }
];

// Gom toàn bộ 77 câu
const ALL_77_QUESTIONS: Question[] = [
  ...PRONUNCIATION_QUESTIONS,
  ...STRESS_QUESTIONS,
  ...VOCAB_GRAMMAR_QUESTIONS,
  ...CLOZE_QUESTIONS,
  ...ANNOUNCEMENT_QUESTIONS,
  ...READING_QUESTIONS,
  ...NOTICES_QUESTIONS,
  ...REORDER_QUESTIONS
];

export const ENGLISH_QUIZ_SETS: QuizSet[] = [
  {
    id: 'ta8-u123-full77',
    title: 'Tiếng Anh 8 - Đề Thi Full 77 Câu (Toàn Bộ Đề Cương Bát Tràng)',
    subject: 'Tiếng Anh',
    grade: 'Lớp 8B',
    description: 'Trọn vẹn 100% tất cả 77 câu trắc nghiệm chính thức: 9 phát âm, 8 trọng âm, 30 từ vựng ngữ pháp, 8 điền từ, 5 thông báo, 6 đọc hiểu Thanh Hà, 5 biển báo và 6 sắp xếp văn bản.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: ALL_77_QUESTIONS
  },
  {
    id: 'ta8-u123-part1',
    title: 'Tiếng Anh 8 - Đề 1: Phát Âm, Trọng Âm & Ngữ Pháp (47 Câu)',
    subject: 'Tiếng Anh',
    grade: 'Lớp 8B',
    description: 'Chuyên đề 47 câu trắc nghiệm bao gồm bài tập phát âm /ʊ/ - /uː/, trọng âm từ 2-3 âm tiết và 30 câu từ vựng ngữ pháp Units 1, 2, 3.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      ...PRONUNCIATION_QUESTIONS,
      ...STRESS_QUESTIONS,
      ...VOCAB_GRAMMAR_QUESTIONS
    ]
  },
  {
    id: 'ta8-u123-part2',
    title: 'Tiếng Anh 8 - Đề 2: Điền Từ, Đọc Hiểu & Sắp Xếp Câu (30 Câu)',
    subject: 'Tiếng Anh',
    grade: 'Lớp 8B',
    description: 'Chuyên đề 30 câu kỹ năng: 8 câu Cloze test Digital Detox, 5 câu School Fair announcement, 6 câu đọc hiểu Làng gốm Thanh Hà, 5 câu Biển báo và 6 câu sắp xếp trật tự đoạn văn.',
    createdAt: '2026-10-22',
    isDefault: true,
    questions: [
      ...CLOZE_QUESTIONS,
      ...ANNOUNCEMENT_QUESTIONS,
      ...READING_QUESTIONS,
      ...NOTICES_QUESTIONS,
      ...REORDER_QUESTIONS
    ]
  }
];
