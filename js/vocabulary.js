/**
 * vocabulary.js — TEST1 결과 판정 + 추천 텍스트
 * test1 (1~500위) 전용
 * 문항 출제는 wordbank.js의 pickQuestions()가 담당
 */

// ── 결과 등급 ─────────────────────────────────────────
export function getResultGrade(estimate) {
  if (estimate <= 100) return { grade: "씨앗 단계",  emoji: "🌰", color: "#8B7355" };
  if (estimate <= 200) return { grade: "새싹 단계",  emoji: "🌱", color: "#66BB6A" };
  if (estimate <= 300) return { grade: "성장 단계",  emoji: "🌿", color: "#43A047" };
  if (estimate <= 400) return { grade: "나무 단계",  emoji: "🌳", color: "#2E7D32" };
  return                      { grade: "열매 단계",  emoji: "🏆", color: "#F57F17" };
}

// ── 다음 단계 추천 (1~500) ────────────────────────────
export function getRecommendation(estimate) {
  if (estimate <= 100) return {
    tips: [
      "매일 CoComelon 영상을 10분씩 함께 보세요",
      "알파벳 노래부터 즐겁게 시작해봐요",
      "오늘 배운 단어 1~2개를 저녁에 복습해보세요",
    ],
    channels: [
      { name: "CoComelon", desc: "노래로 기초 단어 반복 노출", url: "https://www.youtube.com/@CoComelon", age: "유아", stars: 4 },
      { name: "Super Simple Songs", desc: "느린 발음·율동 영어 노래", url: "https://www.youtube.com/@SuperSimpleSongs", age: "유아", stars: 4 },
      { name: "Alphablocks", desc: "파닉스 기초를 게임처럼", url: "https://www.youtube.com/@AlphablocksBBC", age: "유아", stars: 4 },
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
      { name: "Peppa Pig - Official Channel", desc: "가족·일상 대화 어휘", url: "https://www.youtube.com/user/theofficialpeppa", age: "유아", stars: 4 },
      { name: "Bluey - Official Channel", desc: "자연스러운 어린이 영어 표현", url: "https://www.youtube.com/channel/UCVzLLZkDuFGAE2BGdBuBNBg", age: "초1-2", stars: 4 },
      { name: "Hey Duggee Official", desc: "활동·탐험 어휘 노출", url: "https://www.youtube.com/c/HeyDuggeeOfficial", age: "유아", stars: 3 },
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
      { name: "PAW Patrol Official & Friends", desc: "직업·행동 어휘 확장", url: "https://www.youtube.com/user/OfficialPawPatrol", age: "초1-2", stars: 3 },
      { name: "Caillou - WildBrain", desc: "학교·친구 관계 어휘", url: "https://www.youtube.com/channel/UC4yQCVlLhTmOqX5kUkAGr0g", age: "유아", stars: 3 },
      { name: "Numberblocks", desc: "숫자·패턴 언어 감각", url: "https://www.youtube.com/channel/UCPlwvN0w4qFSP1FllALB92w", age: "유아", stars: 4 },
    ],
    goal: "400개 어휘 달성! 🌲",
  };
  if (estimate <= 400) return {
    tips: [
      "영어 그림책을 함께 소리 내어 읽어보세요",
      "교통수단·장소 단어를 외출할 때마다 말해보세요",
      "감정 단어를 일기에 영어로 써보는 습관을 만들어요",
    ],
    channels: [
      { name: "Sesame Street", desc: "폭넓은 어휘·생활 영어", url: "https://www.youtube.com/user/SesameStreet", age: "유아", stars: 4 },
      { name: "Wild Kratts", desc: "동물·자연 주제 어휘 확장", url: "https://www.youtube.com/channel/UCxEmDFo1yUbbxjEb9RjitVA", age: "초1-2", stars: 3 },
      { name: "English Fairy Tales", desc: "동화로 이야기 어휘 확장", url: "https://www.youtube.com/@EnglishFairyTales", age: "유아", stars: 4 },
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
      { name: "Netflix Jr.", desc: "호기심 자극 주제별 어휘", url: "https://www.youtube.com/user/storybots", age: "초1-2", stars: 4 },
      { name: "Blippi - Educational Videos", desc: "체험·탐구 생활 영어", url: "https://www.youtube.com/user/BlippiVideos", age: "초1-2", stars: 4 },
      { name: "Curious George", desc: "스토리 기반 어휘 확장", url: "https://www.youtube.com/channel/UCu7IDy0y-ZA0qaG51wrQY6w", age: "유아", stars: 4 },
    ],
    goal: "501~1000 테스트 도전! 🚀",
  };
}
