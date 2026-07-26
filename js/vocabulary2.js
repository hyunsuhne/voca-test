/**
 * vocabulary2.js — TEST2 결과 판정 + 추천 텍스트
 * test2 (501~1000위) 전용
 * 문항 출제는 wordbank.js의 pickQuestions()가 담당
 */

// ── 결과 등급 (501~1000, estimate = 이번 테스트 0~500) ───────
export function getResultGrade2(estimate) {
  if (estimate <= 100) return { grade: "탐구 시작",   emoji: "🌿", color: "#66BB6A" };
  if (estimate <= 200) return { grade: "성장 중",     emoji: "🌳", color: "#43A047" };
  if (estimate <= 300) return { grade: "중급 완성",   emoji: "🌲", color: "#2E7D32" };
  if (estimate <= 400) return { grade: "실력파",      emoji: "🏆", color: "#F57F17" };
  return                      { grade: "고급 도전자", emoji: "🚀", color: "#7B1FA2" };
}

// ── 다음 단계 추천 (501~1000) ────────────────────────────────
export function getRecommendation2(estimate) {
  if (estimate <= 100) return {
    tips: [
      "자연·감각·탐구 단어는 영상 속 장면과 연결해서 익혀요",
      "하루 한 가지 주제(동물, 날씨 등)의 단어를 5개씩 익혀봐요",
      "모르는 단어가 나오면 멈추고 함께 뜻을 찾아봐요",
    ],
    channels: [
      { name: "Blippi - Educational Videos", desc: "탐구·생활 어휘 노출", url: "https://www.youtube.com/user/BlippiVideos", age: "초1-2", stars: 4 },
      { name: "Nat Geo Kids", desc: "동물·자연 전문 어휘", url: "https://www.youtube.com/channel/UCXVCgDuD_QCkI7gTKU7-tpg", age: "초3-4", stars: 4 },
      { name: "Wild Kratts", desc: "동물·모험 어휘 확장", url: "https://www.youtube.com/channel/UCxEmDFo1yUbbxjEb9RjitVA", age: "초1-2", stars: 3 },
    ],
    goal: "600단어 어휘 달성! 🌿",
  };
  if (estimate <= 200) return {
    tips: [
      "운동·건강 단어는 실제 활동하며 말로 표현해봐요",
      "감정 단어를 일기에 한 문장씩 써봐요",
      "Bluey, Peppa Pig에서 모르는 단어를 메모해봐요",
    ],
    channels: [
      { name: "Bluey - Official Channel", desc: "감정·사회성 어휘", url: "https://www.youtube.com/channel/UCVzLLZkDuFGAE2BGdBuBNBg", age: "초1-2", stars: 4 },
      { name: "SmarterEveryDay", desc: "과학·탐구 어휘 확장", url: "https://www.youtube.com/user/destinws2", age: "초3-4", stars: 4 },
      { name: "Peekaboo Kidz", desc: "과학 기초 어휘", url: "https://www.youtube.com/user/Peekaboo", age: "초1-2", stars: 4 },
    ],
    goal: "700단어 어휘 달성! 🌳",
  };
  if (estimate <= 300) return {
    tips: [
      "사회성·직업 단어는 역할 놀이로 익히면 효과적이에요",
      "이야기 단어는 영어 그림책 읽기로 자연스럽게 확장해요",
      "영어 원서 리더스북(Level 1~2)에 도전해봐요",
    ],
    channels: [
      { name: "English Fairy Tales", desc: "이야기·상상 어휘 확장", url: "https://www.youtube.com/@EnglishFairyTales", age: "유아", stars: 4 },
      { name: "TED Ed", desc: "개념·지식 어휘 입문", url: "https://www.youtube.com/user/TEDEducation", age: "초3-4", stars: 4 },
      { name: "It's AumSum Time", desc: "과학 호기심 어휘", url: "https://www.youtube.com/user/Smartlearningforall", age: "초3-4", stars: 4 },
    ],
    goal: "800단어 어휘 달성! 🌲",
  };
  if (estimate <= 400) return {
    tips: [
      "부사·접속사는 짧은 문장 만들기 연습으로 익혀요",
      "추상 어휘는 영어 그림책 이야기와 연결해봐요",
      "영어 뉴스 헤드라인 하루 1개씩 읽어봐요",
    ],
    channels: [
      { name: "TED Ed", desc: "논리·개념 어휘 심화", url: "https://www.youtube.com/user/TEDEducation", age: "초3-4", stars: 4 },
      { name: "Nat Geo Kids", desc: "세계·자연 어휘 심화", url: "https://www.youtube.com/channel/UCXVCgDuD_QCkI7gTKU7-tpg", age: "초3-4", stars: 4 },
      { name: "Brave Wilderness", desc: "탐험·자연 어휘 확장", url: "https://www.youtube.com/user/BreakingTrail", age: "초3-4", stars: 4 },
    ],
    goal: "900단어 어휘 달성! 🏆",
  };
  return {
    tips: [
      "501~1000 완성! 이제 1001~1500 테스트에 도전해봐요 🚀",
      "영어 원서 챕터북(Magic Tree House 등)에 도전해봐요",
      "영어 팟캐스트나 유튜브 다큐를 자막과 함께 들어봐요",
    ],
    channels: [
      { name: "Khan Academy", desc: "교과 영어 어휘 전반", url: "https://www.youtube.com/user/khanacademy", age: "초5-6", stars: 4 },
      { name: "TED Ed", desc: "심화 개념·논리 어휘", url: "https://www.youtube.com/user/TEDEducation", age: "초3-4", stars: 4 },
      { name: "SciShow Kids", desc: "과학·환경 심화 어휘", url: "https://www.youtube.com/user/scishowkids", age: "초5-6", stars: 3 },
    ],
    goal: "1001~1500 테스트 도전! 🚀",
  };
}
