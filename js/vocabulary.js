/**
 * 영어 어휘 테스트 데이터
 * 출처: kids_english_1000_all.csv (1~500위 단어 사용)
 * 그룹: 100단어 × 5그룹 = 500단어
 * 문항: 각 그룹에서 품사/의미 카테고리 분산하여 대표 10문항 선정
 *
 * 추정 공식: 그룹별 (정답수/10) × 100 → 5그룹 합산 = 최대 500개
 */

// ── 오답 보기 풀 ──────────────────────────────────────
const DISTRACTOR_POOL = {
  동사:   ["가다","오다","먹다","자다","놀다","달리다","만들다","보다","듣다","말하다","앉다","씻다","주다","받다","배우다"],
  명사:   ["집","학교","친구","음식","물","시간","날","가족","선물","노래","장난감","공","책","시계","음악"],
  형용사: ["크다","작다","빠른","느린","뜨거운","차가운","좋다","새로운","행복한","슬프다","예쁜","더러운","부드러운","거친","둥근"],
  부사:   ["지금","항상","다시","매우","함께","빨리","천천히","여기","오늘","내일","어제","처음","마지막","많이","정말"],
  숫자:   ["하나","둘","셋","넷","다섯","여섯","일곱","여덟","아홉","열"],
  색깔:   ["빨강","파랑","초록","노랑","주황","보라","분홍","흰색","검정","갈색","회색"],
  신체:   ["머리","눈","귀","코","입","손","발","배","등","팔","다리","얼굴"],
  감정:   ["행복하다","슬프다","화나다","무섭다","피곤하다","사랑","미안하다","괜찮다","즐겁다","신나다"],
  음식:   ["사과","바나나","우유","빵","밥","달걀","치즈","생선","수프","주스","물","케이크","쿠키"],
  동물:   ["고양이","강아지","돼지","오리","소","말","토끼","새","개구리","곰","사자","코끼리","원숭이","기린"],
  장소:   ["집","학교","병원","공원","가게","도서관","식당","해변","산","강","도시","놀이터","동물원"],
  날씨:   ["맑은","흐린","비가 오는","눈 오는","바람이 부는","뜨거운","차가운","따뜻한","시원한","안개 낀"],
  교통:   ["자동차","버스","기차","자전거","비행기","배","트럭","헬리콥터","택시"],
  학용품: ["책","연필","크레용","가위","종이","가방","지우개","자","펜","색연필"],
  옷:     ["셔츠","바지","드레스","신발","양말","모자","코트","장갑","스카프","치마"],
};

function getRandDistractors(correct, category, count = 3) {
  const pool = DISTRACTOR_POOL[category] || DISTRACTOR_POOL["명사"];
  const filtered = pool.filter(w => w !== correct);
  return filtered.sort(() => Math.random() - 0.5).slice(0, count);
}

// ── 5개 그룹 × 10문항 ────────────────────────────────
export const GROUPS = [
  {
    id: "group1",
    range: "1–100",
    name: "그룹 1",
    emoji: "🌱",
    media: "CoComelon · Super Simple Songs",
    questions: [
      { rank: 10,  word: "go",    korean: "가다",       category: "동사"   },
      { rank: 23,  word: "like",  korean: "좋아하다",   category: "동사"   },
      { rank: 38,  word: "big",   korean: "크다",       category: "형용사" },
      { rank: 51,  word: "one",   korean: "하나",       category: "숫자"   },
      { rank: 61,  word: "red",   korean: "빨강",       category: "색깔"   },
      { rank: 78,  word: "jump",  korean: "점프하다",   category: "동사"   },
      { rank: 83,  word: "sleep", korean: "자다",       category: "동사"   },
      { rank: 91,  word: "time",  korean: "시간",       category: "명사"   },
      { rank: 95,  word: "home",  korean: "집",         category: "명사"   },
      { rank: 25,  word: "help",  korean: "돕다",       category: "동사"   },
    ]
  },
  {
    id: "group2",
    range: "101–200",
    name: "그룹 2",
    emoji: "🌿",
    media: "CoComelon · Super Simple Songs",
    questions: [
      { rank: 101, word: "head",    korean: "머리",       category: "신체"   },
      { rank: 116, word: "mom",     korean: "엄마",       category: "명사"   },
      { rank: 131, word: "apple",   korean: "사과",       category: "음식"   },
      { rank: 144, word: "water",   korean: "물",         category: "음식"   },
      { rank: 166, word: "happy",   korean: "행복하다",   category: "감정"   },
      { rank: 167, word: "sad",     korean: "슬프다",     category: "감정"   },
      { rank: 173, word: "love",    korean: "사랑",       category: "감정"   },
      { rank: 187, word: "share",   korean: "나누다",     category: "동사"   },
      { rank: 194, word: "start",   korean: "시작하다",   category: "동사"   },
      { rank: 183, word: "very",    korean: "매우",       category: "부사"   },
    ]
  },
  {
    id: "group3",
    range: "201–300",
    name: "그룹 3",
    emoji: "🌳",
    media: "Super Simple Songs · Peppa Pig",
    questions: [
      { rank: 201, word: "pink",      korean: "분홍",       category: "색깔"   },
      { rank: 211, word: "circle",    korean: "원",         category: "명사"   },
      { rank: 221, word: "cat",       korean: "고양이",     category: "동물"   },
      { rank: 232, word: "lion",      korean: "사자",       category: "동물"   },
      { rank: 248, word: "zoo",       korean: "동물원",     category: "장소"   },
      { rank: 251, word: "fly",       korean: "날다",       category: "동사"   },
      { rank: 273, word: "soft",      korean: "부드러운",   category: "형용사" },
      { rank: 279, word: "huge",      korean: "거대한",     category: "형용사" },
      { rank: 286, word: "first",     korean: "첫 번째",    category: "부사"   },
      { rank: 299, word: "tall",      korean: "키 큰",      category: "형용사" },
    ]
  },
  {
    id: "group4",
    range: "301–400",
    name: "그룹 4",
    emoji: "🌲",
    media: "Peppa Pig · Caillou",
    questions: [
      { rank: 311, word: "school",   korean: "학교",       category: "장소"   },
      { rank: 319, word: "beach",    korean: "해변",       category: "장소"   },
      { rank: 331, word: "sunny",    korean: "맑은",       category: "날씨"   },
      { rank: 338, word: "cold",     korean: "차가운",     category: "날씨"   },
      { rank: 341, word: "rainbow",  korean: "무지개",     category: "명사"   },
      { rank: 351, word: "car",      korean: "자동차",     category: "교통"   },
      { rank: 356, word: "plane",    korean: "비행기",     category: "교통"   },
      { rank: 365, word: "fast",     korean: "빠른",       category: "형용사" },
      { rank: 393, word: "today",    korean: "오늘",       category: "부사"   },
      { rank: 394, word: "tomorrow", korean: "내일",       category: "부사"   },
    ]
  },
  {
    id: "group5",
    range: "401–500",
    name: "그룹 5",
    emoji: "🏆",
    media: "CoComelon · Caillou",
    questions: [
      { rank: 407, word: "book",     korean: "책",         category: "학용품" },
      { rank: 416, word: "pencil",   korean: "연필",       category: "학용품" },
      { rank: 422, word: "teacher",  korean: "선생님",     category: "명사"   },
      { rank: 425, word: "read",     korean: "읽다",       category: "동사"   },
      { rank: 446, word: "clock",    korean: "시계",       category: "명사"   },
      { rank: 465, word: "wear",     korean: "입다",       category: "동사"   },
      { rank: 469, word: "shoes",    korean: "신발",       category: "옷"     },
      { rank: 481, word: "birthday", korean: "생일",       category: "명사"   },
      { rank: 491, word: "music",    korean: "음악",       category: "명사"   },
      { rank: 500, word: "enjoy",    korean: "즐기다",     category: "동사"   },
    ]
  }
];

// ── 문항 생성 (4지선다) ───────────────────────────────
export function buildQuestion(q) {
  const distractors = getRandDistractors(q.korean, q.category, 3);
  const choices = [q.korean, ...distractors].sort(() => Math.random() - 0.5);
  const correctIndex = choices.indexOf(q.korean);
  return { word: q.word, rank: q.rank, category: q.category, choices, correctIndex };
}

// ── 어휘량 추정 ───────────────────────────────────────
// 각 그룹: (정답수 / 10) × 100 → 합산 최대 500
export function calcEstimate(groupResults) {
  return groupResults.reduce((sum, r) => sum + Math.round((r.correct / r.total) * 100), 0);
}

// ── 결과 등급 ─────────────────────────────────────────
export function getResultGrade(estimate) {
  if (estimate <= 100) return { grade: "씨앗 단계",  emoji: "🌰", color: "#8B7355" };
  if (estimate <= 200) return { grade: "새싹 단계",  emoji: "🌱", color: "#66BB6A" };
  if (estimate <= 300) return { grade: "성장 단계",  emoji: "🌿", color: "#43A047" };
  if (estimate <= 400) return { grade: "나무 단계",  emoji: "🌳", color: "#2E7D32" };
  return                      { grade: "열매 단계",  emoji: "🏆", color: "#F57F17" };
}

// ── 다음 단계 추천 (1~500, 채널 정교화) ──────────────
export function getRecommendation(estimate) {
  if (estimate <= 100) return {
    tips: [
      "매일 CoComelon 영상을 10분씩 함께 보세요",
      "알파벳 노래부터 즐겁게 시작해봐요",
      "오늘 배운 단어 1~2개를 저녁에 복습해보세요",
    ],
    channels: [
      { name: "CoComelon", desc: "노래로 기초 단어 반복 노출", url: "https://www.youtube.com/@CoComelon" },
      { name: "Super Simple Songs", desc: "느린 발음·율동 영어 노래", url: "https://www.youtube.com/@SuperSimpleSongs" },
      { name: "Alphablocks", desc: "파닉스 기초를 게임처럼", url: "https://www.youtube.com/@AlphablocksBBC" },
    ],
    goal: "200개 어휘 달성! 🌱",
  };
  if (estimate <= 200) return {
    tips: [
      "Super Simple Songs 영상으로 단어를 노래로 익혀보세요",
      "그림책을 손가락으로 짚어가며 읽어주세요",
      "신체·음식·색깔 단어를 일상에서 말해보세요",
    ],
    channels: [
      { name: "Peppa Pig", desc: "가족·일상 대화 어휘", url: "https://www.youtube.com/@PeppaPigOfficial" },
      { name: "Bluey", desc: "자연스러운 어린이 영어 표현", url: "https://www.youtube.com/@BlueyOfficialChannel" },
      { name: "Hey Duggee", desc: "활동·탐험 어휘 노출", url: "https://www.youtube.com/@HeyDuggee" },
    ],
    goal: "300개 어휘 달성! 🌿",
  };
  if (estimate <= 300) return {
    tips: [
      "Peppa Pig 에피소드를 반복해서 들려주세요",
      "동물·날씨·모양 단어를 그림카드로 복습해봐요",
      "하루 5분, 플래시카드로 새 단어를 익혀보세요",
    ],
    channels: [
      { name: "Paw Patrol", desc: "직업·행동 어휘 확장", url: "https://www.youtube.com/@pawpatrol" },
      { name: "Caillou", desc: "학교·친구 관계 어휘", url: "https://www.youtube.com/@CaillouEnglish" },
      { name: "Numberblocks", desc: "숫자·패턴 언어 감각", url: "https://www.youtube.com/@NumberblocksBBC" },
    ],
    goal: "400개 어휘 달성! 🌲",
  };
  if (estimate <= 400) return {
    tips: [
      "Caillou를 보며 집·학교·날씨 관련 단어를 늘려보세요",
      "영어 그림책을 함께 소리 내어 읽어보세요",
      "교통수단·장소 단어를 외출할 때마다 말해보세요",
    ],
    channels: [
      { name: "Daniel Tiger", desc: "감정·사회성 영어 표현", url: "https://www.youtube.com/@DanielTigersNeighborhood" },
      { name: "Sesame Street", desc: "폭넓은 어휘·생활 영어", url: "https://www.youtube.com/@SesameStreet" },
      { name: "Wild Kratts", desc: "동물·자연 주제 어휘 확장", url: "https://www.youtube.com/@WildKratts" },
    ],
    goal: "500개 어휘 완성! 🏆",
  };
  return {
    tips: [
      "500단어 완성! 이제 501~1000 테스트에 도전해봐요 🚀",
      "Storybots로 다양한 주제의 어휘를 넓혀보세요",
      "영어 그림일기를 짧게 써보는 습관을 시작해봐요",
    ],
    channels: [
      { name: "Storybots", desc: "호기심 자극 주제별 어휘", url: "https://www.youtube.com/@StoryBots" },
      { name: "Blippi", desc: "체험·탐구 생활 영어", url: "https://www.youtube.com/@Blippi" },
      { name: "Curious George", desc: "스토리 기반 어휘 확장", url: "https://www.youtube.com/@CuriousGeorge" },
    ],
    goal: "501~1000 테스트 도전! 🚀",
  };
}
