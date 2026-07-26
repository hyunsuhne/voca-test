/**
 * 영어 어휘 테스트 - 1001~1500위 데이터 (test3)
 * 그룹 11~15 (각 100단어 × 5그룹)
 * wordbank.js 기반 동적 출제 방식 사용
 * v1.0 — 고급·전문 어휘 (감정/사회성/과학/환경/논리/세계시민)
 */

// ── 결과 등급 (1001~1500, estimate = 이번 테스트 0~500) ──────
/**
 * @param {number} estimate - 이번 test3 테스트 추정 어휘 수 (0~500)
 * @returns {{ grade: string, emoji: string, color: string }}
 */
export function getResultGrade3(estimate) {
  if (estimate <= 80)  return { grade: "도전 시작",   emoji: "🌱", color: "#66BB6A" };
  if (estimate <= 160) return { grade: "성장 중",     emoji: "🌿", color: "#43A047" };
  if (estimate <= 260) return { grade: "실력파",      emoji: "🧠", color: "#1E88E5" };
  if (estimate <= 380) return { grade: "고급 수준",   emoji: "🏆", color: "#F57F17" };
  return                      { grade: "글로벌 리더", emoji: "🌏", color: "#7B1FA2" };
}

// ── 다음 단계 추천 (1001~1500) ──────────────────────────────
/**
 * @param {number} estimate - 이번 test3 테스트 추정 어휘 수 (0~500)
 * @returns {{ total: number, tips: string[], channels: object[], goal: string }}
 */
export function getRecommendation3(estimate) {
  // 실제 총 어휘: 1000 (기본 추정) + estimate
  const total = 1000 + estimate;

  if (estimate <= 80) {
    // 총 1000~1080
    return {
      total,
      tips: [
        "감정·사회성 단어(dangerous, honest, responsible)를 매일 한 개씩 일기에 써봐요",
        "Ted-Ed 영상으로 개념 어휘를 재미있게 접해보세요",
        "읽기 그림책에서 모르는 단어를 3개씩 노트에 적어봐요",
      ],
      channels: [
        { name: "TED-Ed",        desc: "개념·지식 어휘 영상",      url: "https://www.youtube.com/@TED-Ed",           age: "초5-6", stars: 5 },
        { name: "National Geographic Kids", desc: "과학·자연 전문 어휘", url: "https://www.youtube.com/@NatGeoKids", age: "초5-6", stars: 4 },
        { name: "Crash Course Kids", desc: "과학·환경 기초 개념",   url: "https://www.youtube.com/@CrashCourseKids", age: "초4-6", stars: 4 },
      ],
      goal: "1100~1200단어 도달! 🌿",
    };
  }
  if (estimate <= 160) {
    // 총 1080~1160
    return {
      total,
      tips: [
        "과학·기술 단어(experiment, digital, environment)는 영상과 함께 익혀야 기억에 오래 남아요",
        "영어 뉴스 헤드라인 하루 1개를 읽으며 새 단어를 찾아봐요",
        "Crash Course Kids로 과학 개념과 어휘를 동시에 익혀봐요",
      ],
      channels: [
        { name: "Crash Course Kids", desc: "과학·환경 심화 어휘",   url: "https://www.youtube.com/@CrashCourseKids", age: "초4-6", stars: 5 },
        { name: "SciShow Kids",      desc: "과학 실험·용어",         url: "https://www.youtube.com/@SciShowKids",     age: "초3-5", stars: 4 },
        { name: "BBC Earth Kids",    desc: "환경·자연 다큐 어휘",    url: "https://www.youtube.com/@BBCEarth",        age: "초5-6", stars: 4 },
      ],
      goal: "1200~1300단어 도달! 🧠",
    };
  }
  if (estimate <= 260) {
    // 총 1160~1260
    return {
      total,
      tips: [
        "지리·예술·언어 단어는 세계지도나 그림책과 함께 시각적으로 익혀요",
        "영어 원서 리더스북(챕터북 입문)으로 문맥 속 어휘를 확장해봐요",
        "인터넷 백과사전(Wikipedia Kids)으로 주제별 단어를 탐색해봐요",
      ],
      channels: [
        { name: "TED-Ed",            desc: "인문·예술·지리 개념",   url: "https://www.youtube.com/@TED-Ed",           age: "초5-6", stars: 5 },
        { name: "Nat Geo Kids",      desc: "세계 문화·지리 어휘",   url: "https://www.youtube.com/@NatGeoKids",       age: "초5-6", stars: 5 },
        { name: "Kurzgesagt",        desc: "논리·개념 시각화",      url: "https://www.youtube.com/@kurzgesagt",       age: "중등~", stars: 4 },
      ],
      goal: "1300~1400단어 도달! 🏆",
    };
  }
  if (estimate <= 380) {
    // 총 1260~1380
    return {
      total,
      tips: [
        "경제·건강·교육 단어는 실생활 뉴스와 연결해서 익혀야 자연스러워요",
        "영어 팟캐스트(Grammar Girl, Stuff You Should Know Kids)를 들어봐요",
        "영어 원서 챕터북(Magic Tree House, Wimpy Kid)에 도전해봐요!",
      ],
      channels: [
        { name: "Khan Academy Kids", desc: "경제·교육 개념 어휘",   url: "https://www.youtube.com/@KhanAcademy",     age: "초5-6", stars: 5 },
        { name: "TED-Ed",            desc: "사회·경제·건강 심화",   url: "https://www.youtube.com/@TED-Ed",           age: "초5-6", stars: 5 },
        { name: "Real Science",      desc: "건강·과학 심화 어휘",   url: "https://www.youtube.com/@RealScience",     age: "초6~중등", stars: 4 },
      ],
      goal: "1400~1500단어 도달! 🌏",
    };
  }
  // estimate > 380 (총 1380~1500)
  return {
    total,
    tips: [
      "논리·디지털·세계시민 어휘를 완전히 갖췄어요! 🎉",
      "영어 논설문이나 에세이 쓰기에 도전해봐요",
      "TEDx 강연이나 BBC 다큐를 자막 없이 도전해봐요 🚀",
    ],
    channels: [
      { name: "TED",             desc: "고급 논리·사회 어휘",     url: "https://www.youtube.com/@TED",             age: "중등~", stars: 5 },
      { name: "Kurzgesagt",      desc: "세계 문제·미래 어휘",     url: "https://www.youtube.com/@kurzgesagt",     age: "중등~", stars: 5 },
      { name: "Vox",             desc: "시사·분석 고급 어휘",     url: "https://www.youtube.com/@Vox",             age: "중등~", stars: 5 },
    ],
    goal: "1500단어 달성! 🌏 글로벌 리더 수준이에요!",
  };
}
