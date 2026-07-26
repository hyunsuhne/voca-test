/**
 * 영어 어휘 테스트 - 501~1000위 데이터
 * 그룹 6~10 (각 100단어 × 5그룹)
 * 각 그룹에서 품사/의미 카테고리 분산하여 대표 10문항 선정
 */

// ── 오답 보기 풀 ──────────────────────────────────────
const DISTRACTOR_POOL2 = {
  동사:     ["가다","오다","먹다","자다","달리다","만들다","보다","듣다","말하다","찾다","배우다","돕다","생각하다","느끼다","기억하다"],
  명사:     ["집","학교","친구","음식","시간","날","가족","선물","노래","이야기","문제","해결책","꿈","모험","직업"],
  형용사:   ["크다","작다","빠른","느린","뜨거운","차가운","좋다","새로운","행복한","슬프다","강한","약한","용감한","조용한","특별한"],
  부사:     ["지금","항상","다시","매우","함께","빨리","천천히","가끔","절대로","보통","이미","곧","자주","아직","나중에"],
  자연:     ["나무","꽃","하늘","달","별","바위","모래","흙","씨앗","뿌리","가지","풀","그림자","구름","바람"],
  감각:     ["시끄럽다","조용하다","달콤하다","시다","짜다","신선하다","무겁다","가볍다","깊다","넓다","좁다","날카롭다","부드럽다","매끄럽다","향기롭다"],
  감정:     ["신이 나다","놀라다","지루하다","걱정하다","긴장하다","부끄럽다","자랑스럽다","질투하다","실망하다","헷갈리다","수줍다","외로운","평화로운","명랑하다","답답하다"],
  운동:     ["차다","던지다","잡다","치다","튀기다","구르다","돌다","오르다","흔들다","미끄러지다","수영하다","달리기","경주하다","이기다","지다"],
  건강:     ["건강한","아프다","다치다","열","감기","기침하다","쉬다","약","의사","병원","강한","약한","용감하다","안전하다","위험"],
  직업:     ["의사","선생님","경찰","소방관","요리사","농부","운전사","예술가","과학자","조종사","엔지니어","음악가","건축가","수의사","간호사"],
  이야기:   ["성","왕자","공주","왕","여왕","용","마법","요정","마녀","보물","영웅","악당","모험","여행","비밀"],
  접속사:   ["하지만","왜냐하면","만약","또는","그리고","그다음","~하는 동안","~까지","~보다","~처럼","그러므로","비록","한편","어쨌든","대신"],
  추상부사: ["아마도","확실히","사실","갑자기","마침내","이미","아직","여전히","거의","충분히","꽤","오히려","무엇이든","어디든지","항상"],
  시간:     ["시간","분","초","곧","나중에","이른","늦은","과거","미래","가끔","자주","두 번","한 번","다음번","지난번"],
  공간:     ["꼭대기","바닥","가장자리","옆면","표면","지역","공간","무게","온도","언어","사실","예시","중간","시작","끝"],
};

function getRandDistractors2(correct, category, count = 3) {
  const pool = DISTRACTOR_POOL2[category] || DISTRACTOR_POOL2["명사"];
  const filtered = pool.filter(w => w !== correct);
  return filtered.sort(() => Math.random() - 0.5).slice(0, count);
}

// ── 5개 그룹 × 10문항 (501~1000위) ──────────────────
export const GROUPS2 = [
  {
    id: "group6",
    range: "501–600",
    name: "그룹 6",
    emoji: "🌿",
    media: "Peppa Pig · CoComelon",
    theme: "자연·감각·탐구",
    questions: [
      { rank: 506, word: "tree",      korean: "나무",         category: "자연"   },
      { rank: 522, word: "sky",       korean: "하늘",         category: "자연"   },
      { rank: 533, word: "loud",      korean: "시끄럽다",     category: "감각"   },
      { rank: 541, word: "sweet",     korean: "달콤하다",     category: "감각"   },
      { rank: 546, word: "heavy",     korean: "무겁다",       category: "감각"   },
      { rank: 558, word: "grow",      korean: "자라다",       category: "동사"   },
      { rank: 563, word: "nature",    korean: "자연",         category: "명사"   },
      { rank: 577, word: "explore",   korean: "탐험하다",     category: "동사"   },
      { rank: 581, word: "curious",   korean: "호기심이 많다",category: "형용사" },
      { rank: 598, word: "understand",korean: "이해하다",     category: "동사"   },
    ]
  },
  {
    id: "group7",
    range: "601–700",
    name: "그룹 7",
    emoji: "🏃",
    media: "CoComelon · Caillou",
    theme: "운동·건강·문법",
    questions: [
      { rank: 601, word: "kick",      korean: "차다",         category: "운동"   },
      { rank: 610, word: "climb",     korean: "오르다",       category: "운동"   },
      { rank: 619, word: "win",       korean: "이기다",       category: "운동"   },
      { rank: 624, word: "soccer",    korean: "축구",         category: "명사"   },
      { rank: 628, word: "healthy",   korean: "건강한",       category: "건강"   },
      { rank: 637, word: "medicine",  korean: "약",           category: "건강"   },
      { rank: 645, word: "brave",     korean: "용감하다",     category: "형용사" },
      { rank: 652, word: "dream",     korean: "꿈",           category: "명사"   },
      { rank: 667, word: "if",        korean: "만약",         category: "접속사" },
      { rank: 700, word: "possible",  korean: "가능한",       category: "형용사" },
    ]
  },
  {
    id: "group8",
    range: "701–800",
    name: "그룹 8",
    emoji: "💛",
    media: "Peppa Pig · Caillou",
    theme: "사회성·감정·성장",
    questions: [
      { rank: 704, word: "fair",      korean: "공평한",       category: "형용사" },
      { rank: 709, word: "kind",      korean: "친절한",       category: "형용사" },
      { rank: 712, word: "honest",    korean: "정직한",       category: "형용사" },
      { rank: 725, word: "excited",   korean: "신이 나다",    category: "감정"   },
      { rank: 729, word: "nervous",   korean: "긴장하다",     category: "감정"   },
      { rank: 731, word: "proud",     korean: "자랑스럽다",   category: "감정"   },
      { rank: 748, word: "encourage", korean: "격려하다",     category: "동사"   },
      { rank: 755, word: "decide",    korean: "결정하다",     category: "동사"   },
      { rank: 772, word: "improve",   korean: "나아지다",     category: "동사"   },
      { rank: 789, word: "effort",    korean: "노력",         category: "명사"   },
    ]
  },
  {
    id: "group9",
    range: "801–900",
    name: "그룹 9",
    emoji: "🏰",
    media: "Peppa Pig · Caillou",
    theme: "직업·상상·이야기",
    questions: [
      { rank: 810, word: "magic",     korean: "마법",         category: "이야기" },
      { rank: 819, word: "hero",      korean: "영웅",         category: "이야기" },
      { rank: 822, word: "adventure", korean: "모험",         category: "이야기" },
      { rank: 835, word: "mission",   korean: "임무",         category: "명사"   },
      { rank: 840, word: "rocket",    korean: "로켓",         category: "명사"   },
      { rank: 848, word: "firefighter",korean:"소방관",       category: "직업"   },
      { rank: 855, word: "scientist", korean: "과학자",       category: "직업"   },
      { rank: 869, word: "invent",    korean: "발명하다",     category: "동사"   },
      { rank: 875, word: "future",    korean: "미래",         category: "명사"   },
      { rank: 883, word: "creative",  korean: "창의적인",     category: "형용사" },
    ]
  },
  {
    id: "group10",
    range: "901–1000",
    name: "그룹 10",
    emoji: "🧠",
    media: "전체 채널",
    theme: "부사·접속사·추상표현",
    questions: [
      { rank: 906, word: "suddenly",  korean: "갑자기",       category: "추상부사"},
      { rank: 907, word: "finally",   korean: "마침내",       category: "추상부사"},
      { rank: 915, word: "almost",    korean: "거의",         category: "추상부사"},
      { rank: 922, word: "however",   korean: "하지만",       category: "접속사" },
      { rank: 923, word: "therefore", korean: "그러므로",     category: "접속사" },
      { rank: 924, word: "although",  korean: "비록",         category: "접속사" },
      { rank: 936, word: "early",     korean: "이른",         category: "시간"   },
      { rank: 943, word: "often",     korean: "자주",         category: "부사"   },
      { rank: 973, word: "temperature",korean:"온도",         category: "공간"   },
      { rank: 974, word: "language",  korean: "언어",         category: "명사"   },
    ]
  }
];

// ── 문항 생성 (4지선다) ───────────────────────────────
export function buildQuestion2(q) {
  const distractors = getRandDistractors2(q.korean, q.category, 3);
  const choices = [q.korean, ...distractors].sort(() => Math.random() - 0.5);
  const correctIndex = choices.indexOf(q.korean);
  return { word: q.word, rank: q.rank, category: q.category, choices, correctIndex };
}

// ── 결과 등급 (501~1000) ──────────────────────────────
export function getResultGrade2(estimate) {
  if (estimate <= 100) return { grade: "도전 단계",   emoji: "🌱", color: "#66BB6A" };
  if (estimate <= 200) return { grade: "성장 단계",   emoji: "🌿", color: "#43A047" };
  if (estimate <= 300) return { grade: "실력 단계",   emoji: "🌳", color: "#2E7D32" };
  if (estimate <= 400) return { grade: "고급 단계",   emoji: "🏆", color: "#F57F17" };
  return                      { grade: "마스터 단계", emoji: "👑", color: "#E65100" };
}

// ── 다음 단계 추천 (501~1000, 채널 정교화) ────────────
export function getRecommendation2(estimate) {
  // estimate = 501~1000 테스트 추정 어휘수 (최대 500)
  // 실제 총 어휘: 500 (기본) + estimate
  const total = 500 + estimate;

  if (estimate <= 100) {
    // 총 500~600
    return {
      total,
      tips: [
        "자연 관찰하며 영어로 이름 말해보기: tree, flower, sky!",
        "Peppa Pig 에피소드를 하루 1편 반복 시청하세요",
        "감각 단어(sweet, loud, soft)를 실생활에서 써봐요",
      ],
      channels: [
        { name: "Peppa Pig", desc: "일상 회화·자연 어휘", url: "https://www.youtube.com/@PeppaPigOfficial" },
        { name: "CoComelon", desc: "기초 어휘 노래 반복", url: "https://www.youtube.com/@CoComelon" },
        { name: "Storybots", desc: "호기심 자극 학습 노래", url: "https://www.youtube.com/@StoryBots" },
      ],
      goal: "600~700단어 도달! 🌿",
    };
  }
  if (estimate <= 200) {
    // 총 600~700
    return {
      total,
      tips: [
        "운동·건강 단어를 실제 활동과 연결해요 (kick, climb, healthy)",
        "Caillou로 일상 문장 구조를 익혀보세요",
        "if, because 같은 연결어로 문장 만들기 연습을!",
      ],
      channels: [
        { name: "Caillou", desc: "일상·감정·사회성 영어", url: "https://www.youtube.com/@CaillouEnglish" },
        { name: "Wild Kratts", desc: "동물·자연 주제 어휘", url: "https://www.youtube.com/@WildKratts" },
        { name: "Blippi", desc: "체험 학습 영어", url: "https://www.youtube.com/@Blippi" },
      ],
      goal: "700~800단어 도달! 🌳",
    };
  }
  if (estimate <= 300) {
    // 총 700~800
    return {
      total,
      tips: [
        "감정 단어(proud, nervous, excited)로 일기 써보기",
        "성장 마인드셋 단어(effort, improve, decide)를 매일 써봐요",
        "Daniel Tiger로 사회성 표현을 자연스럽게 익혀요",
      ],
      channels: [
        { name: "Daniel Tiger", desc: "감정·사회성 표현", url: "https://www.youtube.com/@DanielTigersNeighborhood" },
        { name: "Arthur", desc: "학교·친구 관계 어휘", url: "https://www.youtube.com/@ArthurPBS" },
        { name: "Odd Squad", desc: "문제 해결·논리 영어", url: "https://www.youtube.com/@OddSquadPBS" },
      ],
      goal: "800~900단어 도달! 🏆",
    };
  }
  if (estimate <= 400) {
    // 총 800~900
    return {
      total,
      tips: [
        "adventure, mission, invent 같은 단어로 이야기 만들어봐요",
        "직업 영어를 롤플레이로 익혀요 (scientist, firefighter)",
        "SciShow Kids로 과학 어휘를 재미있게 확장해요",
      ],
      channels: [
        { name: "SciShow Kids", desc: "과학·발명 어휘 확장", url: "https://www.youtube.com/@scishowkids" },
        { name: "Crash Course Kids", desc: "다양한 주제 심화", url: "https://www.youtube.com/@crashcoursekids" },
        { name: "TED-Ed", desc: "스토리텔링 고급 영어", url: "https://www.youtube.com/@TEDEd" },
      ],
      goal: "900~1000단어 완성! 👑",
    };
  }
  // 총 900~1000
  return {
    total,
    tips: [
      "however, therefore, although 같은 접속사로 에세이 써보기",
      "영어 원서 리더스북에 도전할 시간이에요!",
      "National Geographic Kids로 학술 어휘까지 확장해요",
    ],
    channels: [
      { name: "National Geographic Kids", desc: "학술·심화 어휘", url: "https://www.youtube.com/@NatGeoKids" },
      { name: "Kurzgesagt", desc: "고급 개념 설명 영어", url: "https://www.youtube.com/@kurzgesagt" },
      { name: "Vsauce3", desc: "창의적 영어 표현", url: "https://www.youtube.com/@Vsauce3" },
    ],
    goal: "1000단어 마스터! 🎓",
  };
}
