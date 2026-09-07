// ════════════════════════════════════════════════════════
//  채널 데이터 + 추천 엔진 (v1.41)
//  ⚠️ 이 파일은 에어테이블 "현서네 영상 DB > 신뢰 채널"에서 생성됩니다.
//  채널 수정은 에어테이블에서 → Claude에게 "채널 동기화" 요청
//  생성일: 2026-09-07 · ★2 이상 274개 (추천 제외 5개 포함)
// ════════════════════════════════════════════════════════

export const INTEREST_TAGS = ['동물·공룡','탈것','공주·패션','히어로·모험','노래·춤','그리기·만들기','과학·우주','장난감·게임','이야기·책','스포츠·몸놀이','일상·가족'];

export const CHANNELS = [
 {
  "name": "Alphablocks",
  "desc": "영국 BBC의 알파벳 캐릭터 애니 — 글자들이 만나 단어를 만드는 파닉스 학습",
  "why": "영어 듣기 귀가 뚫린 후 파닉스를 배우는 아이들에게 적합한 영상.",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UC_qs3c0ehDvZkbiEbOj6Drg",
  "excluded": false
 },
 {
  "name": "Art for Kids Hub",
  "desc": "아빠와 아이들이 함께 그림 그리는 법을 단계별로 알려주는 실사 미술 채널",
  "why": "아이가 그림 그리기를 좋아한다면, 좋아하는 캐릭터를 직접 그리고 싶어한다면 강추 합니다.",
  "age": "초1-2",
  "stars": 4,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/ArtforKidsHub",
  "excluded": false
 },
 {
  "name": "Blippi - Educational Videos for Kids",
  "desc": "Blippi 아저씨가 소방서·박물관 등 현장을 찾아가 탈것과 직업을 소개하는 실사 채널",
  "why": "호기심 많고 모험심이 강한 아이들이라면 강추",
  "age": "초1-2",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것",
   "과학·우주",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/BlippiVideos?app=desktop",
  "excluded": false
 },
 {
  "name": "Blippi Toys",
  "desc": "Blippi가 장난감을 소개하며 노는 채널",
  "why": "Blippi 아저씨가 소개해 주는 다양한 놀이 및 장난감!",
  "age": "초1-2",
  "stars": 4,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "탈것"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC-Gm4EN7nNNR3k67J8ywF4g",
  "excluded": false
 },
 {
  "name": "Bluey - Official Channel",
  "desc": "호주 강아지 가족 블루이의 상상놀이·일상 애니 — 서구권 학부모가 가장 사랑하는 유아 애니",
  "why": "BBC에서 방영된 Bluey의 공식 유튜브 채널",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCVzLLZkDuFGAE2BGdBuBNBg",
  "excluded": false
 },
 {
  "name": "Bounce Patrol - Kids Songs",
  "desc": "호주의 실사 가수 5인조가 춤추며 부르는 동요·율동 채널",
  "why": "호주판 머더구스클럽. 사람이 나와야 좋아하는 아이에게 추천",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC56cowXhoqRWHeqfSJkIQaA",
  "excluded": false
 },
 {
  "name": "Brave Wilderness",
  "desc": "야생 동물·곶충을 직접 만나 체험하는 모험 실사 채널 (자극적 장면 주의)",
  "why": "야생 동물을 좋아하는 남자 친구들에 추천. 좀 자극적이니 주의하세요.",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/BreakingTrail",
  "excluded": false
 },
 {
  "name": "CBeebies",
  "desc": "영국 BBC 유아 채널 CBeebies 공식 — 다양한 영국 유아 프로그램 모음",
  "why": "영국 공영 BBC방송국의 유아 교육 전문 채널 CBeebies의 유튜브 채널",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "노래·춤"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/cbeebies",
  "excluded": false
 },
 {
  "name": "Cocomelon",
  "desc": "3D 애니 아기 JJ와 가족·친구들이 부르는 동요·생활 노래 채널 (구독자 1억+ 세계 최대 키즈 채널)",
  "why": "모르는 분이 거의 없는 최고의 어린어 영어 학습 채널!",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤",
   "일상·가족"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/CoComelon",
  "excluded": false
 },
 {
  "name": "CrunchLabs",
  "desc": "Mark Rober의 어린이 공학·과학 실험 키트 채널",
  "why": "",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@CrunchLabs",
  "excluded": false
 },
 {
  "name": "Curious George",
  "desc": "호기심 많은 원숭이 조지와 노란 모자 아저씨의 그림책 원작 애니",
  "why": "첫 출간한지 무려 80년이 된 그림책 원작의 TV시리즈. 호기심 많은 원숭이 George를 통해 아이들은 다양한 학습을 합니다.",
  "age": "유아",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCu7IDy0y-ZA0qaG51wrQY6w/featured",
  "excluded": false
 },
 {
  "name": "Danny Go!",
  "desc": "대니 아저씨와 함께 뛰고 춤추는 어린이 운동·노래 실사 채널",
  "why": "",
  "age": "초3-4",
  "stars": 4,
  "genre": "가족/취미",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "노래·춤"
  ],
  "form": "실사",
  "url": "(798) Danny Go! - YouTube",
  "excluded": false
 },
 {
  "name": "Deep Look",
  "desc": "곶충·해양 생물을 초근접 촬영으로 보여주는 PBS 자연 다큐 채널",
  "why": "곤충, 조류, 해양 생물을 자세히 보고 싶은 아이들에게 강추",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/KQEDDeepLook?app=desktop",
  "excluded": false
 },
 {
  "name": "Draw So Cute",
  "desc": "귀엽고 예쁘 그림을 쉽게 따라 그리는 여아 취향 드로잉 채널",
  "why": "이쁘고, 귀여운 그림을 그리고 싶은 딸아이가 있다면 강추 합니다.",
  "age": "초1-2",
  "stars": 4,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기",
   "공주·패션"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC3dEvA1is6-0_yuei9iCdEw?app=desktop",
  "excluded": false
 },
 {
  "name": "English Fairy Tales",
  "desc": "세계 명작 동화를 영어 애니로 들려주는 채널",
  "why": "",
  "age": "유아",
  "stars": 4,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "애니",
  "url": "(642) English Fairy Tales - YouTube",
  "excluded": false
 },
 {
  "name": "Fairy Tales and Stories for Kids",
  "desc": "다양한 전래·명작 동화 애니 채널",
  "why": "",
  "age": "유아",
  "stars": 4,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "애니",
  "url": "(642) Fairy Tales and Stories for Kids - YouTube",
  "excluded": false
 },
 {
  "name": "Fireman Sam",
  "desc": "소방관 샘이 마을 사고를 해결하는 영국 애니 — 소방차·구조 이야기",
  "why": "우리 동네 히어로인 소방관이 되고 싶은 아이들에게 추천",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "탈것",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/firemansamchannel",
  "excluded": false
 },
 {
  "name": "Genevieve's Playhouse - Learning Videos for Kids",
  "desc": "페파피그·퍼피구조대 등 인기 캐릭터 장난감으로 역할놆이 이야기를 만드는 유아 놀이 채널",
  "why": "인기 캐릭터들로 역할극을 좋아하는 아이들에 추천",
  "age": "유아",
  "stars": 4,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCK5Q72Uyo73uRPk8PmM2A3w",
  "excluded": false
 },
 {
  "name": "Hacksmith Industries",
  "desc": "영화 속 무기·장비를 실제로 만드는 엔지니어 팀의 공학 실사 채널",
  "why": "궁금한것은 뭐든지 직접 만들어보기 위해 회사를 그만두고 유튜브 채널을 시작한 엔지니어 아저씨의 이야기",
  "age": "초5-6",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/thehacksmith",
  "excluded": false
 },
 {
  "name": "Handyman Hal",
  "desc": "수리공 할 아저씨가 도구·기계·탈것을 소개하는 실사 채널",
  "why": "",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@HandymanHal",
  "excluded": false
 },
 {
  "name": "It's AumSum Time",
  "desc": "아이들이 궁금해할 과학 질문에 답하는 애니 과학 채널",
  "why": "과학과 관련해 아이들이 가질 수 있는 거의 모든 호기심에 대한 답을 찾을 수 있는 과학 전문 채널. 아이들이 쉽게 이해할 수 있도록 재미있는 애니메이션으로 각 종 과학 지식을 배울 수 있음",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/Smartlearningforall",
  "excluded": false
 },
 {
  "name": "Khan Academy",
  "desc": "수학·과학·역사 무료 강의로 유명한 칸 아카데미 공식 채널",
  "why": "전세계 누구나 무료로 모든 교육을 받을 수 있다는 미션을 이루기 위해, 수학 과학, 역사 등 미국의 대부분 교과목을 가르치는 영상을 올린 채널.",
  "age": "초5-6",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "노래·춤"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/khanacademy",
  "excluded": false
 },
 {
  "name": "Learning Blocks",
  "desc": "넘버블록스·알파블록스를 한곳에 모은 공식 학습 애니 채널",
  "why": "넘버블록스, 알파블록스를 모아 놓은 공식 채널",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/LearningBlocks",
  "excluded": false
 },
 {
  "name": "Ms Rachel - Toddler Learning Videos",
  "desc": "유치원 교사 출신 Ms Rachel이 아기 눈높이로 말하기·단어를 유도하는 실사 언어 발달 채널",
  "why": "영유아 친구들 말하기를 유도하는 채널이예요",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/SongsforLittlesToddlerLearningVideos",
  "excluded": false
 },
 {
  "name": "My Little Pony Official",
  "desc": "조랑말 친구들의 우정 이야기 마이리틀포니 공식 채널",
  "why": "여자 아이들이라면 모두 좋아할 매력적인 시리즈",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "공주·패션",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/mlpequestriagirls",
  "excluded": false
 },
 {
  "name": "Nat Geo Kids",
  "desc": "내셔널지오그래픽 어린이 채널 — 동물·자연 다큐와 실험",
  "why": "동물과 자연에 관심이 있는 아이들은 꼭 구독하고 봐야하는 최고의 자연 다큐멘터리 채널. 1,000개 가까운 영상들이 분류별로 잘 정리되어 있음",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCXVCgDuD_QCkI7gTKU7-tpg",
  "excluded": false
 },
 {
  "name": "Netflix Jr.",
  "desc": "넷플릭스 유아 콘텐츠(StoryBots 등) 클립을 모아둔 공식 채널",
  "why": "Story Bots을 좋아하고 Nexflix 구독자라면 추천",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "이야기·책"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/storybots",
  "excluded": false
 },
 {
  "name": "Numberblocks",
  "desc": "영국 BBC의 숫자 캐릭터 애니 — 숫자 개념과 덧셈·뾄셈을 노래와 이야기로",
  "why": "한번 빠지면 헤어나오기 힘든 영국 BBC 방송국에서 만든 Numberblock. Alphablocks 도 있어요~",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCPlwvN0w4qFSP1FllALB92w",
  "excluded": false
 },
 {
  "name": "PBS Kids",
  "desc": "미국 공영방송 PBS 어린이 프로그램 모음 채널 (다니엘 타이거·와일드 크래츠 등)",
  "why": "미쉘 오바마가 읽어주는 책읽기를 듣고 싶다면 추천",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "이야기·책",
   "과학·우주"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCrNnk0wFBnCS1awGjq_ijGQ",
  "excluded": false
 },
 {
  "name": "Peekaboo Kidz",
  "desc": "Dr. Binocs 캐릭터가 과학 개념을 짧은 애니로 설명하는 어린이 과학 채널",
  "why": "아이가 과학에 관심을 가지기 시작했다면 여기서 시작",
  "age": "초1-2",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/Peekaboo?app=desktop",
  "excluded": false
 },
 {
  "name": "Peppa Pig - Official Channel",
  "desc": "영국 돼지 가족 페파피그 공식 채널 — 유아 일상 애니의 대표작, 영국식 발음",
  "why": "모든 어린이, 엄마, 아빠. 가족 모두가 같이 즐길 수 있는 애니메이션입니다.",
  "age": "유아",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/theofficialpeppa?app=desktop",
  "excluded": false
 },
 {
  "name": "Rosanna Pansino",
  "desc": "로잔나가 캐릭터 케이크·디저트를 만드는 베이킹 실사 채널",
  "why": "요리에 관심이 많은 여자 아이들에 강추",
  "age": "초3-4",
  "stars": 4,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/RosannaPansino",
  "excluded": false
 },
 {
  "name": "Ryan's World",
  "desc": "라이언이 장난감을 열고 노는 언박싱·놀이 채널 — 세계 최고 수익 키즈 채널",
  "why": "장난감을 좋아하고 엉뚱한 호기심이 많은 아이들에게 추천",
  "age": "초1-2",
  "stars": 4,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UChGJGhZ9SOOHvBB0Y4DOO_w",
  "excluded": false
 },
 {
  "name": "STEVE AND MAGGIE",
  "desc": "스티브 아저씨와 까치 매기가 벌이는 소동으로 영어 표현을 익히는 실사 코미디 채널",
  "why": "아이들의 혼을 빼놓는 Steve 아저씨. 넔을 놓고 재미있게 볼거예요.",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCx1xhxQyzR4TT6PmXO0khbQ",
  "excluded": false
 },
 {
  "name": "Sesame Street",
  "desc": "미국 국민 유아 프로그램 세서미 스트리트 공식 채널 — 엘모·쿠키몬스터와 글자·숫자·감정 배우기",
  "why": "미국의 뽀뽀뽀로 취학전 모든 아이들이 한번은 보는 TV시리즈",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/SesameStreet",
  "excluded": false
 },
 {
  "name": "Sheriff Labrador - Kids Cartoon",
  "desc": "래브라도 보안관이 마을 사건을 해결하는 동물 탐정 애니",
  "why": "",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(642) Sheriff Labrador - Kids Cartoon - YouTube",
  "excluded": false
 },
 {
  "name": "SmarterEveryDay",
  "desc": "고속 카메라로 일상 속 과학 원리를 실험하는 실사 채널",
  "why": "다양한 과학 원리를 흥미로운 실험을 통해 배우며 영어 노출도 할 수 있어요.",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/destinws2",
  "excluded": false
 },
 {
  "name": "Super Simple Songs",
  "desc": "느리고 단순한 멜로디의 교육용 영어 동요 채널 — 영어 노출 첫 단계의 표준",
  "why": "처음 영어 노출 시작하는 7세 이하 아이들에게 초초초강추",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/user/SuperSimpleSongs",
  "excluded": false
 },
 {
  "name": "TED Ed",
  "desc": "TED의 교육용 애니 강의 — 과학·역사·철학 질문을 5분 애니로",
  "why": "TED Talk의 아이들 버전. 단연 최고의 학습 유튜브 채널",
  "age": "초3-4",
  "stars": 4,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/TEDEducation",
  "excluded": false
 },
 {
  "name": "The Singing Walrus - English Songs For Kids",
  "desc": "현직 교사와 음악가가 만든 교육용 영어 노래 채널 (알파벳·숫자·색깔·인사말)",
  "why": "현직 선생님과 음악가들이 함께 만든 교육용 노래와 영상들이 가득한 채널이예요.",
  "age": "유아",
  "stars": 4,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/Thesingingwalrus",
  "excluded": false
 },
 {
  "name": "Thomas & Friends",
  "desc": "토마스 기관차와 친구들의 섬 이야기 — 기차 좋아하는 아이의 필수 채널",
  "why": "차, 기차 등을 좋아하는 남자아이들에게 강추",
  "age": "초1-2",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/thomasandfriends",
  "excluded": false
 },
 {
  "name": "Wolfoo Family",
  "desc": "늑대 소년 울푸 가족의 일상·모험 애니 — 페파피그 스타일의 3D 버전",
  "why": "페파피그와 비슷한 소재로, 귀여운 울프네 가족과 함께 영어를 배울 수 있어요.",
  "age": "유아",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCoL0M9swO14BT8u9pTn9MvQ",
  "excluded": true
 },
 {
  "name": "Wolfoo's stories",
  "desc": "울푸 채널의 이야기·에피소드 중심 자매 채널",
  "why": "귀여운 늑대 Wolfoo와 함께 즐거운 영어 노출.",
  "age": "유아",
  "stars": 4,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCEmm6bND-l2eyHLiKNYiY8A",
  "excluded": true
 },
 {
  "name": "ABCmouse.com Early Learning Academy",
  "desc": "미국 유아 학습 앱 ABCmouse의 공식 채널 — 알파벳·숫자·색깔 노래와 애니",
  "why": "영미권 취학전 아이들의 학습을 위해 만든 채널로 동명의 학습 홈페이지도 있어요",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@ABCmouse",
  "excluded": false
 },
 {
  "name": "All Things Animal TV",
  "desc": "동물의 종류와 생태를 실제 영상으로 소개하는 채널",
  "why": "동물 덕후인 친구들은 이 채널에서 놀면 영어도 자연스럽게 늘어요!",
  "age": "초1-2",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCB_2_OiPFh6FdUvp50_maug",
  "excluded": false
 },
 {
  "name": "BabyBus - Nursery Rhymes",
  "desc": "판다 캐릭터 기키·미우가 나오는 유아 동요·생활습관 애니 채널",
  "why": "동물을 좋아하는 아이, 다중언어 환경을 만들어 주고 싶은 가정에 추천",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "동물·공룡"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCpYye8D5fFMUPf9nSfgd4bA",
  "excluded": false
 },
 {
  "name": "Bebefinn - Nursery Rhymes & Kids Songs",
  "desc": "핑크퐁 제작사의 아기 베비핀 가족이 부르는 영어 동요 채널 (코코멜론과 유사)",
  "why": "",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤",
   "일상·가족"
  ],
  "form": "노래",
  "url": "(653) Bebefinn - Nursery Rhymes & Kids Songs - YouTube",
  "excluded": false
 },
 {
  "name": "Ben and Holly’s Little Kingdom – Official Channel",
  "desc": "페파피그 제작진이 만든 요정 공주 홀리와 엘프 벤의 작은 왕국 이야기",
  "why": "페파 피그를 좋아 했다면 Ben and Holly도 추천",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/theofficialbenholly",
  "excluded": false
 },
 {
  "name": "Blippi - Kids Songs",
  "desc": "Blippi 캐릭터가 부르는 탈것·동물 주제 동요 채널",
  "why": "Blippi 아저씨와 함께 영어를 배워요~",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "탈것"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC-cqh4Vn_MtV_wbuK2PtS4Q",
  "excluded": false
 },
 {
  "name": "Bob Ross",
  "desc": "'참 쉽죠?' 밥 로스 아저씨의 유화 그리기 클래식 영상",
  "why": "그림 그리기 참 쉽죠~ 밥 로스 아저씨의 영상들이 올라온 채널입니다.",
  "age": "초3-4",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/BobRossIncVideos",
  "excluded": false
 },
 {
  "name": "Bob the Builder",
  "desc": "건축가 밥과 중장비 친구들이 집을 짓는 애니 — '할 수 있어!' 밥 아저씨",
  "why": "건축에 관심이 많은 아이들에 강추",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것",
   "그리기·만들기"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/bobthebuilderchannel",
  "excluded": false
 },
 {
  "name": "Bread Barbershop",
  "desc": "한국 애니 빵당당 이발소의 영어 더빙 채널 — 빵 캐릭터들의 코믹 일상",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(642) Bread Barbershop - YouTube",
  "excluded": false
 },
 {
  "name": "Bri Reads",
  "desc": "Bri가 그림책을 즐겁게 읽어주는 낭독 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@BriReads",
  "excluded": false
 },
 {
  "name": "Brightly Storytime",
  "desc": "펝귄랜덤하우스의 그림책 낭독 채널",
  "why": "명작동화를 원어민의 목소리로 직접 들려주고 싶은 부모님들께 추천",
  "age": "초1-2",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCvQagFNHMrGgQpYunk4rHXg?app=desktop",
  "excluded": false
 },
 {
  "name": "Bunya Toy Town",
  "desc": "다양한 장난감 언박싱 채널",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@BunyaToyTown",
  "excluded": false
 },
 {
  "name": "CKN Toys",
  "desc": "인기 캐릭터 장난감으로 노는 남아 취향 언박싱 채널",
  "why": "인기 캐릭터들과 장난감을 좋아하는 남자 아이들에게 강추",
  "age": "초1-2",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCfaZw8XH_zmAVkBst_MPD6w",
  "excluded": false
 },
 {
  "name": "Caillou - WildBrain",
  "desc": "4살 까이유의 일상과 감정을 다룬 캐나다 애니 — 아이 마음 이해에 좋음",
  "why": "우리 아이들이 어떤 생각을 하는지 궁금하신 초보 엄마, 아빠들 아이와 같이 보시길 강력 추천 합니다.",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UC4yQCVlLhTmOqX5kUkAGr0g",
  "excluded": false
 },
 {
  "name": "Cartooning4kids",
  "desc": "만화·게임 캐릭터를 따라 그리는 방법을 알려주는 드로잉 채널",
  "why": "만화, 애니메이션, 게임의 주인공들을 그리며 영어 노출을 할 수 있어요.",
  "age": "초1-2",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/CartooningClubHowtoDraw/featured",
  "excluded": false
 },
 {
  "name": "Chelsey DIY",
  "desc": "봉제인형·말랑이 만들기를 알려주는 DIY 실사 채널",
  "why": "Chelsey 이모가 집에서 봉제인형(Plushie)과 말랑말랑한 인형(Squishie)등을 만드는 방법을 알려줍니다. 그 외에도 다양한 방법으로 귀엽고 조그만 인형을 만드는 방법을 알려주는 채널",
  "age": "초3-4",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCEC9pCgh1o7lVQ4BmzxFIaA",
  "excluded": false
 },
 {
  "name": "CoComelon JJ's Animal Time - Nursery Rhymes",
  "desc": "코코멜론 JJ가 동물 친구들과 노래하고 춤추는 동물 특화 스핀오프",
  "why": "동물을 좋아하는 코코멜론 팬이라면 꼭 보세요.",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/@CoComelonAnimalTime",
  "excluded": false
 },
 {
  "name": "Collider Behind the Scenes",
  "desc": "영화·드라마 비하인드와 배우 인터뷰를 다루는 연예 채널 (10대용)",
  "why": "해리포터나 겨울왕국, 스파이더맨 같은 10대 들이 좋아할만한 영화와 TV 프로그램의 내용을 소제로한 영상들을 제공하는 유튜브 채널.",
  "age": "초5-6",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC4qGmRZ7aLOLfVsSdj5Se2A",
  "excluded": false
 },
 {
  "name": "CookieswirlC",
  "desc": "밝은 언니가 장난감·로블록스를 소개하는 언박싱 채널",
  "why": "현서의 최애 장남감 채널. 발랄하고 재치 넘치는 언니가 장난감을 소개 시켜줘요. Roblox 게임도 같이 해요.",
  "age": "초1-2",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "공주·패션"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCelMeixAOTs2OQAAi9wU8-g",
  "excluded": false
 },
 {
  "name": "Cosmic Kids Yoga",
  "desc": "이야기 속 모험을 따라가며 요가 동작을 배우는 어린이 요가 채널",
  "why": "요가를 좋아하거나 관심있는 엄마와 아이가 있는 집이라면 강추",
  "age": "초1-2",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/CosmicKidsYoga?app=desktop",
  "excluded": false
 },
 {
  "name": "Daniel Tiger's Neighbourhood - 9 Story",
  "desc": "미국 PBS의 호랑이 다니엘이 감정·사회성을 배우는 유아 애니 (Mr. Rogers 후속작)",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "(642) Daniel Tiger's Neighbourhood - 9 Story - YouTube",
  "excluded": false
 },
 {
  "name": "Digley and Dazey - Trucks For Kids",
  "desc": "트럭·중장비 딕리와 데이지가 일하는 유아 애니",
  "why": "중장비 좋아하는 친구들을 위한 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCueFVVtA5h6m3XvVC6xNsHg/featured",
  "excluded": false
 },
 {
  "name": "Dino Ranch",
  "desc": "공룡 목장에서 공룡을 키우는 아이들의 모험 애니",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(642) Dino Ranch - YouTube",
  "excluded": false
 },
 {
  "name": "Disney Junior",
  "desc": "디즈니 주니어 TV시리즈(미키마우스 클럽하우스·닥 맥스터핀스 등) 공식 채널",
  "why": "미국에서 방영 했던 디즈니 TV시리즈를 다 모아 놓았어요.",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCNcdbMyA59zE-Vk668bKWOg",
  "excluded": false
 },
 {
  "name": "Dream English Kids",
  "desc": "Matt 선생님이 기타 치며 부르는 단순한 교육용 영어 노래 채널",
  "why": "Matt 삼촌과 함께 다양한 노래와 교육적인 영상으로 영어를 배워요",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@DreamEnglishKids",
  "excluded": false
 },
 {
  "name": "EthanGamer",
  "desc": "로블록스·마인크래프트 게임 플레이 채널",
  "why": "Roblox, Minecraft등 게임을 중계하는 유튜버",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/EthanGamerTV",
  "excluded": false
 },
 {
  "name": "EvanEraTV",
  "desc": "쉬운 마술 트릭을 배우는 실사 채널",
  "why": "다양한 마술을 배우고 싶은 아이들에게 강추",
  "age": "초1-2",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCWZZowzfDwihJ8VbQ3H8ivw?app=desktop",
  "excluded": false
 },
 {
  "name": "EvanTubeHD",
  "desc": "에반이 10년째 장난감·과학·게임을 다루는 채널",
  "why": "10살에 유튜브를 시작해 10년째 운영되고 있는 채널로 온간 재미있는 것들을 다 해봅니다!",
  "age": "초5-6",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@evantube",
  "excluded": false
 },
 {
  "name": "Family Fun Pack",
  "desc": "6남매 가족의 여행·일상 브이로그 채널",
  "why": "쌍둥이를 포함한 6명의 자녀를 키우는 엄마 Kristine. 일년의 반을 가족과 함께 여행하며 다양한 활동을 하고, 이 모습을 영상으로 올리며 시작된 채널",
  "age": "초5-6",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/familyfunpack",
  "excluded": false
 },
 {
  "name": "Gecko's Garage - Trucks For Children",
  "desc": "트럭·중장비가 정비소에서 고치고 일하는 이야기의 유아 애니",
  "why": "트럭을 좋아하는 남자 친구들에 추천하는 채널입니다.",
  "age": "초1-2",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UChULBXQf9VDYAi3vRLu_U-w",
  "excluded": false
 },
 {
  "name": "HarperKids",
  "desc": "하퍼콜린스 출판사의 어린이 책 낭독·작가 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "(640) HarperKids - YouTube",
  "excluded": false
 },
 {
  "name": "Hey Duggee Official",
  "desc": "강아지 더기 선생님과 동물 친구들이 배지를 따며 배우는 영국 BBC 애니",
  "why": "영국 BBC에서 방영되었던 인기 TV시리즈. 귀여운 Duggee와 함께해요!",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/HeyDuggeeOfficial/featured",
  "excluded": false
 },
 {
  "name": "HiHo Kids",
  "desc": "아이들이 새로운 음식·직업을 처음 경험하는 반응을 담은 실사 채널",
  "why": "아이들이 새로운 것을 배우는 과정을 영상으로 제작해 보여주는 채널. 특이한 음식이나 직업을 체험하거나 전세계의 다양한 놀이를 소개하기도 하는 흥미로운 채널",
  "age": "초3-4",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCqa2MPu8bLY1PwVFUpSyVhQ",
  "excluded": false
 },
 {
  "name": "History Matters",
  "desc": "역사 속 '왜?'를 짧은 애니로 답하는 채널",
  "why": "",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@HistoryMatters",
  "excluded": false
 },
 {
  "name": "Hogi! Pinkfong - Learn & Play",
  "desc": "핑크퐁 호기 캐릭터로 놀이·학습 콘텐츠를 보여주는 핑크퐁 패밀리 채널",
  "why": "",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/@Hogi",
  "excluded": false
 },
 {
  "name": "It's Okay To Be Smart",
  "desc": "Joe 박사가 우주·생물·환경 질문에 답하는 PBS 과학 채널",
  "why": "Joe 박사님이 우주, 물리, 생물학, 환경 등 과학 주제별로 평소 우리가 갖는 질문에 대한 답을 설명해 주는 채널. 미국의 교육 방송 PBS에서 제작해 영상의 품질이 최고 수준임",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/itsokaytobesmart",
  "excluded": false
 },
 {
  "name": "JLaservideo",
  "desc": "장난감·놀이·과학 실험 채널",
  "why": "",
  "age": "초5-6",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@jlaservideo",
  "excluded": false
 },
 {
  "name": "Jack Hartmann Kids Music Channel",
  "desc": "미국 교사들이 애용하는 잭 하트만 선생님의 몸으로 배우는 학습 노래 (알파벳·숫자·파닉스)",
  "why": "미국 학부모들이(2016 Parents’ Choice Approved Award) 인정한 교육적인 콘텐츠.",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/JackHartmann/featured",
  "excluded": false
 },
 {
  "name": "Jenny W. Chan - Origami Tree",
  "desc": "종이접기(오리가미)를 단계별로 알려주는 실사 채널",
  "why": "종이 접기나 공작 만들기를 좋아하는 여자 아이에 추천",
  "age": "초3-4",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/josthebomb?app=desktop",
  "excluded": false
 },
 {
  "name": "JunyTony - Songs and Stories",
  "desc": "한국 제작사의 주니토니 형제 캐릭터 동요·이야기 애니 채널",
  "why": "이거 보고 있으면 예전 핑크퐁이 생각나요! 역시나 한국산~",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "이야기·책"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCKeKanAZfSYH0nzP3UGd_hQ",
  "excluded": false
 },
 {
  "name": "KATURI TV",
  "desc": "한국 애니 까투리의 공식 영어 채널 — 아기 까치 네 형제의 숙림 모험",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(640) KATURI TV - YouTube",
  "excluded": false
 },
 {
  "name": "Knowledgia",
  "desc": "세계사 사건을 지도 애니로 설명하는 역사 채널",
  "why": "",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@Knowledgia",
  "excluded": false
 },
 {
  "name": "Kongsuni and Friends",
  "desc": "한국 애니 콩순이의 공식 영어 더빙 채널 — 익숙한 캐릭터로 영어 진입",
  "why": "콩순이 공식 영어 유튜브 채널입니다.",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "공주·패션"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCI8RJKzD-Yo7X0hUwUdXt2w",
  "excluded": false
 },
 {
  "name": "LEGO",
  "desc": "레고 공식 채널 — 세트 소개와 레고 애니",
  "why": "레고 덕후라면 꼭 봐야하는 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "그리기·만들기"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/LEGO",
  "excluded": false
 },
 {
  "name": "Leafy Street",
  "desc": "놀이 채널",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@leafystreet",
  "excluded": false
 },
 {
  "name": "Learn Bright",
  "desc": "초등 교과 주제(과학·사회·수학)를 애니와 설명으로 알려주는 학습 채널",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "(642) Learn Bright - YouTube",
  "excluded": false
 },
 {
  "name": "Leo the truck",
  "desc": "꼬마 트럭 레오가 블록을 조립해 탈것을 만드는 유아 3D 애니",
  "why": "자동차 좋아하는 친구들",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/LeotheTruck",
  "excluded": false
 },
 {
  "name": "Life Noggin",
  "desc": "우리 몸·우주·일상 질문을 애니로 설명하는 채널",
  "why": "우리 삶과 우주 그리고 일상의 모든 것에 관련한 질문을 답을 해주는 채널. 모든 고양이가 없어진다면, 지구의 달이 12개 라면? 등 온갖 궁금증에 대한 답을 찾아 해줌",
  "age": "초3-4",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/c/lifenoggin/videos",
  "excluded": false
 },
 {
  "name": "Like Nastya",
  "desc": "러시아 출신 소녀 나스티야의 놀이·일상 실사 채널 (구독자 1억+)",
  "why": "최근 가장 인기있는 여아용 언박싱, 교육, 놀이용 채널",
  "age": "유아",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCJplp5SjeGSdVdwsfb9Q7lQ",
  "excluded": true
 },
 {
  "name": "Little Angel: Nursery Rhymes & Kids Songs",
  "desc": "아기 천사 Baby John 가족의 동요·생활 습관 노래 애니 채널",
  "why": "Super Jojo 와 함께 어린 2등신 어린 친구가 나와 다양한 영어 동요를 통한 학습을 할 수 있음",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "일상·가족"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCNzsYU0aWwjERj-9Y9HUEng",
  "excluded": false
 },
 {
  "name": "Maisy Mouse Official",
  "desc": "꼬마 쥐 메이지의 단순하고 따뜻한 일상 애니 — 그림책 원작",
  "why": "꼬마 소녀 쥐 Maisy의 모험을 그린 애니메이션. 단순하지만 매력적인 삽화와 귀여운 캐릭터들이 등장. Maisy의 일상을 통해 아이들에게 필요한 규칙과 행동을 배울 수 있는 채널.",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UC6PkaI25MZai1547O9bTeqQ",
  "excluded": false
 },
 {
  "name": "Mark Rober",
  "desc": "전 NASA 엔지니어가 기발한 발명품을 만들며 과학 원리를 보여주는 실사 채널",
  "why": "NASA의 엔지니어인 Mark Rober 아저씨가 온갖 장나감을 만들면서 다양한 실험을 해요.",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@MarkRober",
  "excluded": false
 },
 {
  "name": "MasterBuilders",
  "desc": "레고로 창작 작품을 만드는 채널",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@masterbuilders",
  "excluded": false
 },
 {
  "name": "Math Songs by NUMBEROCK",
  "desc": "수학 개념(구구단·시간·분수)을 랩·노래로 배우는 채널",
  "why": "노래로 숫자, 시간 읽기, 나누기 등 기본 수학의 개념을 배울 수 있는 영상 컨텐츠로 구성된 채널",
  "age": "초3-4",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/NUMBEROCKLLC",
  "excluded": false
 },
 {
  "name": "Meekah - Kids TV Shows",
  "desc": "Blippi의 여성 파트너 미카가 현장을 탐험하는 실사 채널",
  "why": "Bliipi는 남자 아이들을 위한 채널이라면 Meekah는 여자 아이들을 위한 채널이에요",
  "age": "초1-2",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것",
   "과학·우주",
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@BlippiBuddies_Meekah",
  "excluded": false
 },
 {
  "name": "MinutePhysics",
  "desc": "물리·천문 개념을 1분 안팾의 손그림 애니로 설명하는 채널",
  "why": "어떤 과학 지식도 쉽게 설명 할 수 없다면 이해한 것이 아니다' 모토에 맞춰 다양한 물리, 천문학을 1분안에 설명하는 채널",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/minutephysics",
  "excluded": false
 },
 {
  "name": "Miraculous Ladybug",
  "desc": "파리를 지키는 소녀 히어로 레이디버그와 캇 누아르의 액션 애니 공식 채널",
  "why": "레이디버그 좋아하는 친구들 많죠? 유튜브에는 더 다양한 콘텐츠가 있어요.",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "공주·패션"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCWjVfZ3VnyUwBEOkuOlaU3g",
  "excluded": false
 },
 {
  "name": "Morphle TV",
  "desc": "마법 애완동물 몰플과 소녀 밀라의 모험 애니 채널",
  "why": "6살 Mila 처럼 모험심과 호기심이 강한 아이들이",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/MagicPetsSongs4Kids",
  "excluded": false
 },
 {
  "name": "Mother Goose Club",
  "desc": "실제 아이들이 의상을 입고 부르는 전통 마더구스 동요 실사 채널",
  "why": "애니메이션이 아닌 실제 사람이 나오는 것을 선호하는 아이들에게 추천",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/MotherGooseClub",
  "excluded": false
 },
 {
  "name": "Mr.Men and Little Miss",
  "desc": "성격이 이름인 미스터맨·리틀미스 캐릭터들의 짧은 코미디 애니",
  "why": "우리 나라에서 큰 인기를 모았던 \"EQ 천재들\" 어린이 동화 책의 원작 애니메이션. 첫 책이 1971년 영국에서 출판 된 이 후 2015년 까지 총 85개의 캐릭터가 만들어 지는 동안 TV 시리즈로도 만들어져 꾸준히 사랑을 받아 왔습니다. 유튜브 채널에 모든 시리즈가 있진 않지만 책을 읽은 친구들한테는 아주 좋아 하겠죠?",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "이야기·책"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCjT4aTfoAbCdvc7Z_CplgCg",
  "excluded": false
 },
 {
  "name": "Muffalo Potato",
  "desc": "애니 캐릭터를 쉽게 따라 그리는 드로잉 채널",
  "why": "다양한 애니메이션 캐릭터을 그리고 싶은 친구들에게 강추",
  "age": "초1-2",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/muffalopotato",
  "excluded": false
 },
 {
  "name": "Numberphile",
  "desc": "수학자들이 숫자의 신기한 성질을 종이에 그려가며 설명하는 수학 채널 (고학년·수학 좋아하는 아이)",
  "why": "",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@numberphile",
  "excluded": false
 },
 {
  "name": "PAW Patrol Official & Friends",
  "desc": "강아지 구조대가 위기를 해결하는 액션 애니 퍼피구조대 공식 채널",
  "why": "퍼피구조대! 유튜브에서는 TV시리즈 왜에 장난감으로 하는 역할극도 볼 수 있어요!",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "동물·공룡",
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/OfficialPawPatrol",
  "excluded": false
 },
 {
  "name": "PJ Masks Official",
  "desc": "밤에 히어로로 변신하는 세 아이의 액션 애니 PJ 마스크 공식 채널",
  "why": "호기심 많고 모험을 좋아하고 수퍼히어로가 되고 싶은 아이에게 추천",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCY2jUnU118sVkdj2xafiJ0g",
  "excluded": false
 },
 {
  "name": "Peppa Pig - Nursery Rhymes and Kids Songs",
  "desc": "페파피그 캐릭터로 부르는 동요·파닉스 노래 모음 채널",
  "why": "페파피그와 함께 파닉스, 기본 단어 등 다양한 학습을 할 수 있어요.",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤",
   "일상·가족"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCOYd4Al0Ty89xigE-l9AIog",
  "excluded": false
 },
 {
  "name": "Pinkfong Baby Shark - Kids' Songs & Stories",
  "desc": "핑크퐁 아기상어의 공식 영어 채널 — 동요·동화·동물 노래",
  "why": "핑크퐁을 좋아하면 이제부터 영어로 들어요",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤",
   "동물·공룡"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/user/SmartBooksMedia",
  "excluded": false
 },
 {
  "name": "Pokémon Asia ENG",
  "desc": "포켓몬 TV 애니를 영어로 볼 수 있는 아시아 공식 채널",
  "why": "아시아의 포켓몬 팬들을 위한 공식 유튜브 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/Pok%C3%A9monAsiaENG",
  "excluded": false
 },
 {
  "name": "Pokémon Kids TV",
  "desc": "포켓몬 캐릭터들이 나오는 유아용 동요·짧은 애니 공식 채널",
  "why": "포켓몬 캐릭터 들이 Nursery Rhymes 등 노래로 아이들 학습을 도와주는 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "히어로·모험"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/Pokemonkidstv",
  "excluded": false
 },
 {
  "name": "Pororo the Little Penguin",
  "desc": "뽀로로 공식 영어 더빙 채널 — 익숙한 캐릭터로 영어 첫걸음",
  "why": "뽀통령 뽀로로의 공식 영어 유튜브 채널",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@pororoenglish",
  "excluded": false
 },
 {
  "name": "Reading is",
  "desc": "다양한 영어 그림책을 읽어주는 낭독 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "(640) Reading is - YouTube",
  "excluded": false
 },
 {
  "name": "Red Ted Art",
  "desc": "종이·재활용품으로 만드는 쉬운 공작 아이디어 실사 채널",
  "why": "만들기, 공작 활동을 좋아하는 아이들을 위해 추천합니다.",
  "age": "유아",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/redtedart?app=desktop",
  "excluded": false
 },
 {
  "name": "Richard Roe",
  "desc": "어린이 애니 에피소드를 모아 올리는 채널 (상세 확인 필요)",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(640) Richard Roe - YouTube",
  "excluded": false
 },
 {
  "name": "Rob The Robot",
  "desc": "로봇 롭과 친구들이 우주를 탐험하며 문제를 해결하는 애니",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(1011) Rob The Robot - YouTube",
  "excluded": false
 },
 {
  "name": "SV2",
  "desc": "유소년 축구 클럽을 찾아가 도전하는 스포츠 실사 채널",
  "why": "다양한 유소년 클럽을 방문하며 챌린지를 하는 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/synxcv2",
  "excluded": false
 },
 {
  "name": "Sarah and Duck Official",
  "desc": "소녀 사라와 오리 덕의 잔잔한 일상 영국 BBC 애니 — 차분한 톤",
  "why": "영국 BBC에서 방영되었던 인기 TV시리즈. 여자 아이들이 좋아할거예요!",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@SarahAndDuckOfficial",
  "excluded": false
 },
 {
  "name": "SciShow Kids",
  "desc": "학교 과학 개념과 일상 현상의 원리를 실험으로 보여주는 PBS 어린이 과학",
  "why": "학교에서 과학시간에 배운 지식, 일상 생활에서 관찰하는 다양한 과학 현상들이 왜 일어나는지에 대한 답을 실험을 통해 찾아 주는 채널.",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/scishowkids",
  "excluded": false
 },
 {
  "name": "Sean’s Crafts",
  "desc": "션 형과 함께 만들어보는 다양한 공작·만들기 실사 채널",
  "why": "Sean 형아와 함께 온갖 흥미로운 Crafts를 만들며 영어 노출도 할 수 있어요.",
  "age": "초3-4",
  "stars": 3,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/seanscrafts",
  "excluded": false
 },
 {
  "name": "Shark Academy - Songs for kids",
  "desc": "귀여운 상어 캐릭터가 알파벳·숫자·생활습관을 노래로 가르치는 채널",
  "why": "상어를 좋아하는 친구들이라면 이 채널의 귀여운 상어와 함께 영어를 배울 수 있어요.",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCxiOfWB9GnMxjm9pfKbqx1w",
  "excluded": false
 },
 {
  "name": "Simple History",
  "desc": "역사 사건·인물을 단순한 애니로 짧게 설명하는 채널",
  "why": "역사 덕후라면 이제는 역사도 영어로 배워볼까요?",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@Simplehistory",
  "excluded": false
 },
 {
  "name": "Snoopy",
  "desc": "찰리 브라운과 스누피의 피너츠 애니 공식 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "애니",
  "url": "(640) Snoopy - YouTube",
  "excluded": false
 },
 {
  "name": "StoryTime at Awnie's House",
  "desc": "Awnie 이모가 그림책을 직접 읽어주는 실사 낭독 채널",
  "why": "아이에게 영어 책을 직접 읽어 주기 어려운 학부모에 추천",
  "age": "유아",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCbqmj1hzxuAXsjk08k-KP6w?app=desktop",
  "excluded": false
 },
 {
  "name": "StorylineOnline",
  "desc": "할리우드 배우들이 그림책을 읽어주는 낭독 채널 (SAG-AFTRA 재단)",
  "why": "헐리우드 영화 주인공들이 읽어 주는 영어 그림책을 보고, 듣고 싶은 아이들에게 추천",
  "age": "유아",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/StorylineOnline?app=desktop",
  "excluded": false
 },
 {
  "name": "Strawberry Shortcake",
  "desc": "딸기 마을 소녀들의 우정·베이킹 이야기 애니 공식 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "공주·패션",
   "일상·가족"
  ],
  "form": "애니",
  "url": "(791) Strawberry Shortcake - WildBrain - YouTube",
  "excluded": false
 },
 {
  "name": "Super Simple ABCs",
  "desc": "슈퍼심플송의 알파벳·파닉스 전용 채널 — 글자 소리와 이름 노래",
  "why": "슈퍼심플송을 좋아하는 아이라면 여기서 알파벳을 배워요!",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCp5Nhw2YMCMUemXC1oWTkkA",
  "excluded": false
 },
 {
  "name": "Super Simple Storytime",
  "desc": "슈퍼심플송 제작사의 그림책 낭독 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "Read Aloud",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@SuperSimpleStorytime",
  "excluded": false
 },
 {
  "name": "Super Simple TV - Kids Shows & Cartoons",
  "desc": "슈퍼심플송 제작사의 짧은 애니·이야기 채널 (노래 다음 단계)",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "이야기·책",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@SuperSimpleTV",
  "excluded": false
 },
 {
  "name": "Super Wings TV",
  "desc": "변신 비행기 호기가 세계를 배달하며 나라별 문화를 보여주는 한국 애니 영어판",
  "why": "수퍼윙스 영어 더빙 채널입니다.",
  "age": "유아",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/SuperWingsTV_EN",
  "excluded": false
 },
 {
  "name": "Superbook",
  "desc": "성경 이야기 속으로 시간여행하는 3D 애니 (기독교 배경)",
  "why": "Chris, Joy가 Gizmo라는 로봇과 함께 성경의 이야기 속으로 들어가 모험을 하며 벌어지는 일들을 그린 채널",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCmkgg5el8Fg3IX_baZyfSaQ",
  "excluded": false
 },
 {
  "name": "T-Rex Ranch - Dinosaurs For Kids",
  "desc": "공룡 목장 실사 놀이 채널 — 공룡 인형·소품으로 모험 이야기",
  "why": "공룡 덕후 남자 아이들을 위한 채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/ToyLabTV?app=desktop",
  "excluded": false
 },
 {
  "name": "The Amazing World of Gumball",
  "desc": "고양이 검볼과 가족의 황당 코미디 애니 — 빠른 대사와 유머, 고학년용",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(640) The Amazing World of Gumball - YouTube",
  "excluded": false
 },
 {
  "name": "The Infographics Show",
  "desc": "역사·과학·사회 주제를 인포그래픽 애니로 설명하는 채널",
  "why": "보통 교육용 영상들은 지루하다며, 다양한 그래픽으로 쉽게 재미있는 영상을 만드는 유튜브 채널",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UCfdNM3NAhaBOXCafH7krzrA",
  "excluded": false
 },
 {
  "name": "The Official Pokémon YouTube channel",
  "desc": "포켓몬 애니·게임·이벤트 영상을 모두 다루는 글로벌 공식 채널",
  "why": "포켓몬 TV시리즈 및 게임 중계 등 포켓몬 관련 모든 영상을 볼 수 있는 공식채널",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "장난감·게임"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/pokemon",
  "excluded": false
 },
 {
  "name": "The River and Wilder Show",
  "desc": "자연·과학 체험 실사 채널",
  "why": "",
  "age": "초5-6",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "동물·공룡"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@Riverandwilder",
  "excluded": false
 },
 {
  "name": "The Supa Strikas - Kids Soccer Cartoon",
  "desc": "세계 최강 축구팀 슈파스트라이카스의 경기와 모험을 그린 축구 애니",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "(1009) The Supa Strikas - Kids Soccer Cartoon - YouTube",
  "excluded": false
 },
 {
  "name": "Toys and Colors",
  "desc": "웬디네 가족이 색과 장난감으로 노는 교육 놀이 채널",
  "why": "Wendy네 가족이 색과 장난감을 주제로 만든 교육채널입니다.",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "노래·춤"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCgFXm4TI8htWmCyJ6cVPG_A",
  "excluded": false
 },
 {
  "name": "True and the Rainbow Kingdom",
  "desc": "소녀 True가 무지개 왕국의 문제를 마법 소원으로 해결하는 넷플릭스 유아 애니",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "히어로·모험",
   "공주·패션"
  ],
  "form": "애니",
  "url": "(640) True and the Rainbow Kingdom - YouTube",
  "excluded": false
 },
 {
  "name": "VeggieTales Official",
  "desc": "채소 캐릭터들이 우정·정직 같은 가치를 이야기로 풀어내는 미국 인기 애니 (기독교 배경)",
  "why": "용서, 정직, 감사함 등 아이들의 일상에 필요한 감정들을 재밌는 스토리와 우스꽝스러운 캐릭터들의 이야기로 풀어가요~",
  "age": "초1-2",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "이야기·책",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/BigIdeaInc",
  "excluded": false
 },
 {
  "name": "WhatsUpMoms",
  "desc": "가족 활동·육아 팁을 다루는 엄마 브이로그 채널",
  "why": "",
  "age": "초3-4",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "(740) WhatsUpMoms - YouTube",
  "excluded": false
 },
 {
  "name": "Wild Kratts",
  "desc": "크랣 형제가 동물로 변신해 야생을 탐험하는 PBS 애니",
  "why": "야생 동물에 관심이 많고 모험심이 강한 친구들에게 추천하는 채널.",
  "age": "초1-2",
  "stars": 3,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCxEmDFo1yUbbxjEb9RjitVA",
  "excluded": false
 },
 {
  "name": "WildBrain Kids",
  "desc": "까이유·큐리어스 조지 등을 만든 WildBrain사의 어린이 애니 모음 채널",
  "why": "우리에게 Caillou와 Curious George로 유명한 WildBrain사의 공식 채널입니다.",
  "age": "초1-2",
  "stars": 3,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "이야기·책",
   "동물·공룡"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/dhxjuniortv",
  "excluded": false
 },
 {
  "name": "Woolly and Tig Official Channel",
  "desc": "양털 인형 울리와 소녀 티그의 일상 실사·인형극 채널",
  "why": "",
  "age": "초1-2",
  "stars": 3,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족",
   "이야기·책"
  ],
  "form": "실사",
  "url": "(642) Woolly and Tig Official Channel - YouTube",
  "excluded": false
 },
 {
  "name": "ZXMany",
  "desc": "슈퍼마리오 게임 플레이·공략을 보여주는 게임 유튜버 채널",
  "why": "슈퍼마리오 좋아하는 친구들을 위한 채널",
  "age": "초3-4",
  "stars": 3,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@ZXMany",
  "excluded": false
 },
 {
  "name": "coilbook™ | Learning For Children",
  "desc": "자동차·기차·트럭이 주인공인 3D 애니로 단어와 개념을 배우는 채널",
  "why": "자동차, 기차 등 바퀴 달린 탈것을 좋아하는 남자아이들에 강추",
  "age": "유아",
  "stars": 3,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "탈것",
   "노래·춤"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/coilbook",
  "excluded": false
 },
 {
  "name": "AKN Kids House",
  "desc": "",
  "why": "아직 그림을 직접 그리지는 못하지만 그림에 관심을 보는 친구들이라면, 간단한 그림과 색칠하는 과정을 지켜보며 알파벳 부터 기초 영어 단어들을 자연스럽게 익힐 수 있는 채널입니다.",
  "age": "유아",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기",
   "과학·우주"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCblEctCnvw237Dt79QPOgKA",
  "excluded": false
 },
 {
  "name": "Adam Savage’s Tested",
  "desc": "",
  "why": "과학적 호기심이 많은 친구들에게 직접 실험을 하며 호기심을 풀어주는 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/c/tested/featured",
  "excluded": false
 },
 {
  "name": "AndrewSchrock",
  "desc": "",
  "why": "철없는 스케이트보더 아저씨의 일상과 아들과 함께 노는 영사들이 있어요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/AndrewSchrock",
  "excluded": false
 },
 {
  "name": "Annie's workshop - Books Read Aloud for Kids",
  "desc": "",
  "why": "Annie 이모가 직접 고른 창작 동화책을 읽어 줘요.",
  "age": "유아",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/AnniesworkshopBooksReadAloudforKids/featured",
  "excluded": false
 },
 {
  "name": "Aphmau",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@Aphmau",
  "excluded": false
 },
 {
  "name": "Art with Mati & Dada",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "애니",
  "url": "Art With Mati & Dada  – VanGogh | Kids Animated Short Stories in English (youtube.com)",
  "excluded": false
 },
 {
  "name": "Baby Big Mouth",
  "desc": "",
  "why": "3~4세 처음 영어 노출 시작하려는 친구들에게 추천",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/ItsBabyBigMouth",
  "excluded": false
 },
 {
  "name": "Baby Big Mouth Kids - Sing, Dance, Explore",
  "desc": "",
  "why": "노래와 Surprise Egg를 까면서 알파벳과 기본 영어 단어들을 배울 수 있음. 최소한의 단어만 나와 어린 친구들이 부담없이 영어와 친해질 수 있음.",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/user/ItsBabyBigMouth",
  "excluded": false
 },
 {
  "name": "Baby Einstein",
  "desc": "",
  "why": "영미권 원어민 아이들을 위해 만든 유아용 교육채널",
  "age": "유아",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀500"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@BabyEinstein",
  "excluded": false
 },
 {
  "name": "Baby Zoo | Kids Songs",
  "desc": "",
  "why": "고양이, 코알라, 코뿔소 캐릭터와 함께 노래와 춤을",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UC73OSCbHaqKlhHLBpQqHPrQ",
  "excluded": false
 },
 {
  "name": "Ben 10",
  "desc": "",
  "why": "카툰네트워크의 인기 시리 Ben 10의 공식 유튜브 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCoWgc1mqe-bcfb_lem7EyOg",
  "excluded": false
 },
 {
  "name": "Blaze and the Monster Machines",
  "desc": "",
  "why": "몬스터 트럭들이 나오는 채널. 남자 아이들에게 강력 추천!",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@blazeandthemonstermachines",
  "excluded": false
 },
 {
  "name": "Bob The Train - Nursery Rhymes & Cartoons for Kids",
  "desc": "",
  "why": "기차 좋아하는 친구라면 추천이요!",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "탈것",
   "노래·춤",
   "그리기·만들기"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCdtn2lX0irVHd-MRHBmYuFw",
  "excluded": false
 },
 {
  "name": "Brain Candy TV",
  "desc": "",
  "why": "몬스터 트럭 및 탙것들을 좋아하는 친구들을 위한 채널",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "탈것",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@braincandytv",
  "excluded": false
 },
 {
  "name": "BrainPOP",
  "desc": "",
  "why": "미국 초등 교과목의 내용을 재미있는 애니로 구현한 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@brainpop/videos",
  "excluded": false
 },
 {
  "name": "Brick Science",
  "desc": "",
  "why": "레고 블록으로 자신이 상상한 온갖 것들을 만들어 보는 형이 운영하는 채널!",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "과학·우주",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@Brick_Science",
  "excluded": false
 },
 {
  "name": "BuzzFeedVideo",
  "desc": "",
  "why": "Hanna 아줌마네 가족의 온갖 일상을 소개하는 채널",
  "age": "초1-2",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/BuzzFeedVideo",
  "excluded": false
 },
 {
  "name": "CGMeetup",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "(642) CGMeetup - YouTube",
  "excluded": false
 },
 {
  "name": "Carl's Car Wash",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "(642) Carl's Car Wash - YouTube",
  "excluded": false
 },
 {
  "name": "ClassDojo",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "(642) ClassDojo - YouTube",
  "excluded": false
 },
 {
  "name": "Colin Amazing",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@ColinAmazing",
  "excluded": false
 },
 {
  "name": "Come Play With Me",
  "desc": "",
  "why": "예쁜 장난감 인형을 좋아하는 여자 친구에게 추천",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "공주·패션",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/ComePlayWithMe",
  "excluded": false
 },
 {
  "name": "Cool School",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/CoolSchool",
  "excluded": false
 },
 {
  "name": "Crafting Hours",
  "desc": "",
  "why": "생일, 크리스마스, 발렌타인, 어버이날 등 주제별로 다양한 재료로 아이들이 만들 수 있는 다양한 공작/공예 방법을 알려 주는 채널. 정말 아기자기하고 예쁜 작품들이 많음. 만드는 방법 설명은 말이 아닌 짧은 자막으로 이루어짐.",
  "age": "초1-2",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UC6j14zd-fJOqH9iJZ6T1BEw",
  "excluded": false
 },
 {
  "name": "CupcakeJemma",
  "desc": "",
  "why": "예쁜 컵케익 만드는 방법을 배울 수 있는 채널이에요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/CupcakeJemma",
  "excluded": false
 },
 {
  "name": "DC Kids",
  "desc": "",
  "why": "Marvel과 함께 미국 코믹스 산업의 양대 산맥인 DC의 어린이 전용 공식 유튜브 채널입니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCyu8StPfZWapR6rfW_JgqcA",
  "excluded": false
 },
 {
  "name": "Dave and Ava - Nursery Rhymes and Baby Songs",
  "desc": "",
  "why": "귀여운 동물을 좋아하는 아이들에 추천",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UC6zhI71atP7YLoZyIyCIGNw",
  "excluded": false
 },
 {
  "name": "Disney",
  "desc": "",
  "why": "설명이 필요 없는 디즈니의 공식 유튜브 채널. 다양한 영상이 정말 많아요~",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/disneysshows",
  "excluded": false
 },
 {
  "name": "Disney Kids (구 Disney Junior UK)",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "(829) Disney Kids - YouTube",
  "excluded": false
 },
 {
  "name": "Disney Parks",
  "desc": "",
  "why": "전세계의 디즈니 공원과 리조트 등을 소개 하는 채널. 요즘 같은 시대에 영상으로 라도 디즈니 월드를 방문할 수 있는 기회를 제공해 주는 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/DisneyParks",
  "excluded": false
 },
 {
  "name": "Easy Kids Craft",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/EasyKidsCraft",
  "excluded": false
 },
 {
  "name": "EasyPicturesToDraw",
  "desc": "",
  "why": "그림 그리기를 처음 시작하는 남자아이들에게 추천",
  "age": "유아",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCHa-w2uf3NmywqSkA4mV-JQ?app=desktop",
  "excluded": false
 },
 {
  "name": "Farmees - Nursery Rhymes And Kids Songs",
  "desc": "",
  "why": "동물을 좋아하는 친구들은 이 채널에서 배우면 최고죠!",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCu9MYfF0vosVcK38oNnnJxw",
  "excluded": false
 },
 {
  "name": "Free School",
  "desc": "",
  "why": "미술, 음악, 문학 등 다양한 학습 콘텐츠가 있어요!",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UCebMFnw6WxozGmqGekJHOJg",
  "excluded": false
 },
 {
  "name": "Fun Caboodle",
  "desc": "",
  "why": "현서가 가장 자주봤던 장난감 채널 중 하나에요. 귀여운 장난감들로 롤플레이를 많이 합니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@FunCaboodle",
  "excluded": false
 },
 {
  "name": "Go Buster - Bus Cartoons & Kids Stories",
  "desc": "",
  "why": "해외판 꼬마버스 타요. 버스를 좋아하는 친구들에 추천",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것",
   "그리기·만들기"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/GoBusterBusCartoonsKidsStories",
  "excluded": false
 },
 {
  "name": "Gruffalo World",
  "desc": "",
  "why": "그루팔로 한때 큰 인기를 끌었던 TV시리즈죠. 내용이 너무 좋습니다~!",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/GruffaloWorld",
  "excluded": false
 },
 {
  "name": "Happy Drawings",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/HappyDrawings",
  "excluded": false
 },
 {
  "name": "Happy Learning English",
  "desc": "",
  "why": "과학에 호기심이 많은 친구들에게 추천",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UC8eJxPzmvTb12v7LlZUJcLQ",
  "excluded": false
 },
 {
  "name": "Harry Potter",
  "desc": "",
  "why": "해리포터를 좋아하는 친구라면 강추!",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UChPRO1CB_Hvd0TvKRU62iSQ",
  "excluded": false
 },
 {
  "name": "Hello Everything!",
  "desc": "",
  "why": "동물을 좋아하는 어린 친구들이 보기에 딱 좋은 채널",
  "age": "유아",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/HelloEverything",
  "excluded": false
 },
 {
  "name": "Howcast",
  "desc": "",
  "why": "\"How?\" 어떻게 하는지, 어떻게 만드는지 등 모든 것에 대한 방법을 알려주는 영상들이 즐비한 채널. 아이를 채널은 아니지만 다양한 상식을 배울 수 있는 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/Howcast",
  "excluded": false
 },
 {
  "name": "Howdytoons",
  "desc": "",
  "why": "공룡 좋아하는 친구들을 위한 채널",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "Howdytoons - YouTube",
  "excluded": false
 },
 {
  "name": "IncrediTales - Fairy Tales Cartoon for Kids",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것",
   "그리기·만들기",
   "이야기·책"
  ],
  "form": "애니",
  "url": "(642) IncrediTales - Fairy Tales Cartoon for Kids - YouTube",
  "excluded": false
 },
 {
  "name": "Jared Owen",
  "desc": "",
  "why": "다양한 기계의 작동원리를 애니메이션으로 만들어 알려주는 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@JaredOwen",
  "excluded": false
 },
 {
  "name": "Joy Joy World - Early Learning Kids' Songs",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "(642) Joy Joy World - Early Learning Kids' Songs - YouTube",
  "excluded": false
 },
 {
  "name": "Just For Kids",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@JustForKids",
  "excluded": false
 },
 {
  "name": "Justin's Collection",
  "desc": "",
  "why": "마블, 스타워즈, 드래곤볼 등의 고급 피규어를 보며 대리만족을 할 수 있는 채널이예요!",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCsqUJuqpBujaBWe-LOfWgsA",
  "excluded": false
 },
 {
  "name": "KAYCEE & RACHEL in WONDERLAND FAMILY",
  "desc": "",
  "why": "Kaycee와 Rachel네 가족의 온갖 재미있는 이야기들을 보며 영어 노출을 할 수 있어요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀500"
  ],
  "tags": [
   "이야기·책",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCyPz82J9A8xU5L6lHyLVHpw",
  "excluded": false
 },
 {
  "name": "KIDZ BOP",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "(1218) KIDZ BOP - YouTube",
  "excluded": false
 },
 {
  "name": "KLT Anatomy",
  "desc": "",
  "why": "",
  "age": "초5-6",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@KLTAnatomy",
  "excluded": false
 },
 {
  "name": "Khan Academy Kids",
  "desc": "",
  "why": "취학전 아이들에게 읽기와 수학 등 기본 학습을 가르쳐 주는 채널",
  "age": "유아",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/@KhanAcademyKids",
  "excluded": false
 },
 {
  "name": "Kids Diana Show",
  "desc": "",
  "why": "3천만 구독자 Ryan을 훌쩍 뛰어 넘어버린 Diana. 과연 어떤 매력이 있는지 확인해 보세요.",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCk8GzjMOrta8yxDcKfylJYw",
  "excluded": true
 },
 {
  "name": "Kids Learning Tube",
  "desc": "",
  "why": "나라 이름, 태양계 행성 이름 등을 중독성 강한 노래를 통해 배울 수 있어요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "노래·춤",
   "과학·우주"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UC7EFWpvc1wYuUwrtZ_BLi9A",
  "excluded": false
 },
 {
  "name": "Kids Music Land",
  "desc": "",
  "why": "Sandra와 다양한 노래를 하면 영어랑 친해져요!",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCW4WaUca0UY7KEJNSjG4pfQ",
  "excluded": false
 },
 {
  "name": "KidsCamp Nursery Rhymes & Learning Videos for Kids",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "(642) KidsCamp Nursery Rhymes & Learning Videos for Kids - YouTube",
  "excluded": false
 },
 {
  "name": "Kitoons in English",
  "desc": "",
  "why": "공주나 샤방샤방한 캐릭터를 좋아하는 여자 친구들에게 추천해요!",
  "age": "초3-4",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "공주·패션"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/KitoonsEnglish",
  "excluded": false
 },
 {
  "name": "Kurzgesagt – In a Nutshell",
  "desc": "",
  "why": "과학을 좋아하는 친구들에게 이 보다 좋은 채널은 없을 거예요~!",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/c/inanutshell",
  "excluded": false
 },
 {
  "name": "LDN Movements",
  "desc": "",
  "why": "길거리에서 다양한 축구 스킬로 사람들과 흥미로운 이벤트를 하는 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@LdnMovements",
  "excluded": false
 },
 {
  "name": "LaLiLu",
  "desc": "",
  "why": "",
  "age": "초3-4",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "(1186) LaLiLu - YouTube",
  "excluded": false
 },
 {
  "name": "Learn English With TV Series",
  "desc": "",
  "why": "TV시리즈로 영어를 배워요. 아이들만 말고 부모님들이 보기에도 좋은 채널이에요~",
  "age": "초5-6",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@LearnEnglishWithTVSeries",
  "excluded": false
 },
 {
  "name": "Leo the Wildlife Ranger - Official Channel",
  "desc": "",
  "why": "동물에 관심이 많은 어린 친구들에게 추천 하는 채널입니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UC97bMqA6HrUEw-yNqssyBrQ",
  "excluded": false
 },
 {
  "name": "MGC Playhouse",
  "desc": "",
  "why": "Mother Goose Club의 자매 채널로 노래, 춤으로 다양한 학습을 하도록 돕는 채널",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/@mgcplayhouse",
  "excluded": false
 },
 {
  "name": "Magic Fingers Art",
  "desc": "",
  "why": "쉽고, 귀여운 그림을 그리는 유아용 채널",
  "age": "유아",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀500"
  ],
  "tags": [
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/MagicFingersArt",
  "excluded": false
 },
 {
  "name": "Marvel HQ",
  "desc": "",
  "why": "마블을 좋아하는 어린이 친구들을 위한 채널이예요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCxwitsUVNzwS5XBSC5UQV8Q",
  "excluded": false
 },
 {
  "name": "Maya and Mary",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "(642) Maya and Mary - YouTube",
  "excluded": false
 },
 {
  "name": "Miffy",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "(640) Miffy - YouTube",
  "excluded": false
 },
 {
  "name": "MiniforceTV",
  "desc": "",
  "why": "미니특공대 영어 더빙 채널입니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/MiniforceTV",
  "excluded": false
 },
 {
  "name": "MinipangTV",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "(640) MinipangTV - YouTube",
  "excluded": false
 },
 {
  "name": "Moonbug Kids - Cartoons and Kids Songs",
  "desc": "",
  "why": "Cocomelon, Blippi 등이 소속된 Moonbug! 모두를 한번에 볼 수 있어요.",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "탈것",
   "노래·춤",
   "그리기·만들기"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UC3_PaZ3Eso1JkuJyE_v4-3g",
  "excluded": false
 },
 {
  "name": "Mother Goose Club Let's Play",
  "desc": "",
  "why": "Mother Goose Club에서 운영하는 게임 채널. 마인크래프트, 마리오 등의 게임을 안전하게 즐길 수 있어요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCyTcCCMxgmVF9-AjBX2n0PQ",
  "excluded": false
 },
 {
  "name": "MyCupcakeAddiction",
  "desc": "",
  "why": "컵케잌을 전문으로 만드는 Elise 아줌마의 레시피를 배워보세요",
  "age": "초1-2",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/MyCupcakeaddiction",
  "excluded": false
 },
 {
  "name": "Nat and Essie Too",
  "desc": "",
  "why": "현서가 추천하는 여아용 장남감 언박싱 채널입니다.",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/ToysUnlimitedJR/featured",
  "excluded": false
 },
 {
  "name": "Nick Jr.",
  "desc": "",
  "why": "도라, 포 패트롤을 좋아하는 친구는 구독하여 시청 추천",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCUe6ZpY6TJ0no8jI4l2iLxw",
  "excluded": false
 },
 {
  "name": "Ninja Kidz TV",
  "desc": "",
  "why": "닌자를 좋아하고 모험심이 강한 에너지 넘치는 남자 친구들에게 추천해요!",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCpZ88DWlKW0H_AYDaUZptcw",
  "excluded": false
 },
 {
  "name": "Oxford Owl - Learning at Home",
  "desc": "",
  "why": "영국 옥스포드 대학교 출판부에서 나온 이야기책들을 작가가 직접 읽어줘요.",
  "age": "유아",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/OxfordOwlHome",
  "excluded": false
 },
 {
  "name": "Participant",
  "desc": "",
  "why": "Kid President, My Last Days, Tell My Story 등 우리의 꿈과 희망을 가지고 세상을 더 살기 좋은 곳으로 만들기 위한 다양한 영상을 만드는 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "이야기·책",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/soulpancake",
  "excluded": false
 },
 {
  "name": "Paul Cuffaro",
  "desc": "",
  "why": "각종 애완동물들을 키우는 Paul 형의 안전한 채널입니다!",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/c/paulcuffaro",
  "excluded": false
 },
 {
  "name": "Peep and the Big Wide World",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "(642) Peep and the Big Wide World - YouTube",
  "excluded": false
 },
 {
  "name": "Pixar",
  "desc": "",
  "why": "디즈니 픽사의 공식 유튜브 채널. 영화 예고편 및 다양한 영화 관련 영상을 볼 수 있어요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/DisneyPixar",
  "excluded": false
 },
 {
  "name": "Postman Pat Official",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "(1453) Postman Pat Official - YouTube",
  "excluded": false
 },
 {
  "name": "PuzzLEGO",
  "desc": "",
  "why": "레고로 새로운 만들기를 하고 싶은 친구들에 강추합니다.",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UC4GaWcWGhh5n1WmJvb1oBkA",
  "excluded": false
 },
 {
  "name": "RJMBricks",
  "desc": "",
  "why": "레고로 다양한 작동 모형을 만드는 채널. 레고 덕후에 추천해요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@RJMBricks",
  "excluded": false
 },
 {
  "name": "Raa Raa the Noisy Lion Official",
  "desc": "",
  "why": "귀여운 동물 캐릭터들이 재미있는 노래로 학습을 도와줘요",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/RaaRaatheNoisyLionOfficial",
  "excluded": false
 },
 {
  "name": "Robocar POLI TV",
  "desc": "한국 애니 로보카 폴리의 공식 영어 채널 — 구조대 로봇 자동차들의 이야기",
  "why": "우리나라에서 만든 인기 애니매이션 로보카 폴리의 공식 영어 유튜브 채널이에요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/roivisual",
  "excluded": false
 },
 {
  "name": "Robot Trains official",
  "desc": "",
  "why": "로봇 트레인과 함께 영어를 배워요~!",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "탈것",
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/channel/UCZsUuAkwF_zOK73Hm5VCIzQ",
  "excluded": false
 },
 {
  "name": "SLICK SLIME SAM - DIY, Comedy, Science",
  "desc": "",
  "why": "슬라임을 좋아하고 DIY, 요리는 좋아하는 친구들에게 추천",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "과학·우주",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCw5VDXH8up3pKUppIvcstNQ",
  "excluded": false
 },
 {
  "name": "Science Insider",
  "desc": "",
  "why": "누구나 한번쯤은 궁금해 했을만한 과학 호기심을 재미있는 애니메이션으로 풀어주는 채널이에요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UC9uD-W5zQHQuAVT2GdcLCvg",
  "excluded": false
 },
 {
  "name": "Science Max",
  "desc": "",
  "why": "물리학, 화학, 생태학, 생물학에 관련된 실험을 직접해본다. 물로켓이나 대형 종이 비행기, 쿠킹호일 배 등을 직접 만들기도 하면 엉뚱한 실험을 하기도 함",
  "age": "초5-6",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "탈것",
   "그리기·만들기",
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UCbprhISv-0ReKPPyhf7-Dtw",
  "excluded": false
 },
 {
  "name": "Scratch Garden",
  "desc": "",
  "why": "영어로 배우는 수학, 노래 등 웃으면서 즐겁게 배울 수 있는 채널이에요",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "과학·우주"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/ScratchGardenLand",
  "excluded": false
 },
 {
  "name": "SethBling",
  "desc": "",
  "why": "마이크래프트 게임을 하며 팁이나 다양한 정보를 알려주는 방송. 어린이들이 봐도 문제가 안되는 언어로 방송을 한다. 좋아하는 게임의 팁과 영어를 동시에 배울 수 있음",
  "age": "초5-6",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/sethbling",
  "excluded": false
 },
 {
  "name": "Simple Kids Crafts",
  "desc": "",
  "why": "다양한 미니어쳐나 종이접기, 인형 등 집에서 구할 수 있는 재료들로 만들 수 있는 공작놀이를 알려주는 채널.",
  "age": "초1-2",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "공주·패션",
   "그리기·만들기"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/simplekidscrafts",
  "excluded": false
 },
 {
  "name": "SimplySoccer",
  "desc": "",
  "why": "드리블 부터, 킥까지 축구 스킬을 자세히 알려주는 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@SimplySoccer",
  "excluded": false
 },
 {
  "name": "Smile Family",
  "desc": "",
  "why": "남여 아이들이 같이 볼 수 있는 흥미용 언박싱 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임",
   "일상·가족"
  ],
  "form": "실사",
  "url": "Smile Family - YouTube",
  "excluded": false
 },
 {
  "name": "Smile and Learn - English",
  "desc": "",
  "why": "역사, 인문, 과학 등 아이들이 관심 있어 할만한 대부분의 컨텐츠를 다루고 있는 채널. 모든 컨텐츠가 선생님들에 의해 기획되어서 교육적인 내용들을 재미있게 배울 수 있음",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UCxoDMG0tvaYO5Xobvtqw5nw",
  "excluded": false
 },
 {
  "name": "Sniffycat",
  "desc": "",
  "why": "여아들이 좋아할만한 장난감 언박싱 채널",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCGcltwAa9xthAVTMF2ZrRYg",
  "excluded": false
 },
 {
  "name": "Star Wars Kids",
  "desc": "",
  "why": "스타워즈를 좋아하는 어린 친구들을 위한 채널입니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCDe7m0POuwkL1gwnQ-FVhMw",
  "excluded": false
 },
 {
  "name": "Storytime with Ryan & Craig",
  "desc": "",
  "why": "Ryan과 Craig 삼촌이 다양한 영어 그림책을 읽어줘요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@StorytimewithRyanandCraig",
  "excluded": false
 },
 {
  "name": "Suibhne",
  "desc": "",
  "why": "각 나라의 역사에 관심 많은 친구들의 위한 최고의 채널",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/channel/UCQD-0MjUbDBwm2UTVYr0Dag",
  "excluded": false
 },
 {
  "name": "Super Simple Play with Caitie!",
  "desc": "",
  "why": "Caitie 언니와 함께 만들기, 노래 등 놀이를 통해 학습을 하는 영상들을 제공",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "귀500"
  ],
  "tags": [
   "노래·춤",
   "그리기·만들기"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/@SuperSimplePlay",
  "excluded": false
 },
 {
  "name": "Super Supremes",
  "desc": "",
  "why": "",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "귀500"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "(982) Super Supremes - Nursery Rhymes & Kids Songs - YouTube",
  "excluded": false
 },
 {
  "name": "Super Truck - Car City Universe",
  "desc": "",
  "why": "트럭 좋아하는 남자 친구들에 추천",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "탈것"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/LouieMillimages",
  "excluded": false
 },
 {
  "name": "TD BRICKS",
  "desc": "",
  "why": "레고로 창의적인 작품을 만들어요",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/TDBRICKS",
  "excluded": false
 },
 {
  "name": "TOBOT English",
  "desc": "",
  "why": "또봇 좋아하는 친구들 이젠 영어로 보도록 해주세요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCl72hQm8sFCj5d4Hg_YYGpQ",
  "excluded": false
 },
 {
  "name": "Talking Tom & Friends",
  "desc": "",
  "why": "토킹캣톰 아시나요? 아이들이 좋아하면 톰과 함께 영어도 배울 수 있어요!",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/TalkingFriends",
  "excluded": false
 },
 {
  "name": "Tannerites",
  "desc": "",
  "why": "아홉명의 가족이 펼치는 다양한 일상과 재미있는 모험을 다룬 채널이예요~",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/Tannerites/featured",
  "excluded": false
 },
 {
  "name": "Tasty",
  "desc": "",
  "why": "온갖 맛있는 것을 찾아 만들고, 먹어 보는 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/buzzfeedtasty",
  "excluded": false
 },
 {
  "name": "Tayo the Little Bus",
  "desc": "",
  "why": "타요타요의 공식 영어 유튜브 채널",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/@Tayo",
  "excluded": false
 },
 {
  "name": "The Action Lab",
  "desc": "",
  "why": "과학과 관련해 가질 수 있는 다양한 호기심을 직접 실험을 통해 답해 주는 채널이예요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/c/TheActionLab/featured",
  "excluded": false
 },
 {
  "name": "The Dodo",
  "desc": "",
  "why": "동물을 좋아하고 직접 기르고 싶은 친구들을 위한 채널!",
  "age": "초1-2",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "동물·공룡",
   "과학·우주"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/TheDodoSite",
  "excluded": false
 },
 {
  "name": "The Fable Cottage",
  "desc": "",
  "why": "",
  "age": "초1-2",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "The Fable Cottage - YouTube",
  "excluded": false
 },
 {
  "name": "The Fixes",
  "desc": "",
  "why": "고장난건 뭐든지 고치는 Tom 과 그의 친들의 모험을 그린 TV시리즈",
  "age": "초3-4",
  "stars": 2,
  "genre": "미술/공작",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "그리기·만들기"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/c/TheFixiesYouTube",
  "excluded": false
 },
 {
  "name": "The Icing Artist",
  "desc": "",
  "why": "케이크를 예술적으로 만들어 내는 Laurie 언니의 영상을 보고 있으면 모든 걱정을 있게함. 예쁜 케이크 만드는 과정을 보고 영어 노출도 시킬 수 있음",
  "age": "초5-6",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/user/TheIcingArtist",
  "excluded": false
 },
 {
  "name": "The Land Before Time",
  "desc": "",
  "why": "공룡들의 모험을 그린 TV 시리즈",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "동물·공룡",
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCGTPGtMd8ydRNsTcKaDwF1w",
  "excluded": false
 },
 {
  "name": "The Powerpuff Girls",
  "desc": "",
  "why": "미국의 인기 TV시리즈인 Powerpuff Girls. 모험을 좋아하는 여자 친구들이 좋아할거예요.",
  "age": "초1-2",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500"
  ],
  "tags": [
   "히어로·모험"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/channel/UCInXezQxpWgrd7uPKeA6gPQ",
  "excluded": false
 },
 {
  "name": "The Wiggles",
  "desc": "",
  "why": "호주의 어린 친구들을 위해 만든 교육 채널로 신나는 노래와 율동을 배워요",
  "age": "유아",
  "stars": 2,
  "genre": "동요/챈트/알파벳",
  "cls": [
   "입문"
  ],
  "tags": [
   "노래·춤"
  ],
  "form": "노래",
  "url": "https://www.youtube.com/c/thewiggles",
  "excluded": false
 },
 {
  "name": "The Wingrove Family",
  "desc": "",
  "why": "축구를 사랑하는 아빠 Alan과 아들 Wingrove의 축구에 대한 이야기를 다룬 채널이에요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책",
   "스포츠·몸놀이",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@TheWingroveFamily",
  "excluded": false
 },
 {
  "name": "Titi Toys and Dolls",
  "desc": "",
  "why": "바비 인형을 좋아하는 여자 친구들에게 강추합니다.",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "공주·패션",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCXodGGoCUuMgLFoTf42OgIw",
  "excluded": false
 },
 {
  "name": "Total Football Quiz",
  "desc": "",
  "why": "축구팬이라면 관심을 가질만한 다양한 퀴즈를 풀어보는 채널",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "스포츠·몸놀이",
   "일상·가족"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@TotalFootballQuiz",
  "excluded": false
 },
 {
  "name": "Toy Factory",
  "desc": "",
  "why": "기차, 지하철 좋아하는 친구들",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "탈것",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/ToyFactoryTV",
  "excluded": false
 },
 {
  "name": "Universal Kids",
  "desc": "",
  "why": "사랑스런 캐릭터들과 다양한 것을 재미있게 배우며 놀아요.",
  "age": "초3-4",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/DreamworksAnimation",
  "excluded": false
 },
 {
  "name": "Vlad and Niki",
  "desc": "",
  "why": "Ryan’s World, CKN Toys를 능가하는 최고 인기 남아용 장난감 언박싱 채널",
  "age": "유아",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "입문",
   "귀500"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/VladandNiki",
  "excluded": true
 },
 {
  "name": "Vooks",
  "desc": "",
  "why": "아이들을 위한 다양한 디지털 스토리북을 읽고, 볼 수 있는 채널이에요",
  "age": "초1-2",
  "stars": 2,
  "genre": "Read Aloud",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "이야기·책"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/@VooksStorybooks",
  "excluded": false
 },
 {
  "name": "Walt Disney Animation Studios",
  "desc": "",
  "why": "주토피아, 모아나, 빅히어로 6 등 디즈니 애니메이션 영화를 소개하고 캐릭터 디자이너가 직접 그림 그리는 방법을 알려주는 영상이 포함된 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "가족/취미",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "그리기·만들기",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/disneyanimation",
  "excluded": false
 },
 {
  "name": "WiederDude",
  "desc": "",
  "why": "마인크래프트 추천",
  "age": "초3-4",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/channel/UCpDNnvxEf3iWuJbtmUk6DnA",
  "excluded": false
 },
 {
  "name": "ellieV",
  "desc": "",
  "why": "레고를 좋아하는 여자 친구들을 위한 언박싱 채널. 두 아이의 엄마이자 선생님이 Ellie 아줌마가 운영해요!",
  "age": "초1-2",
  "stars": 2,
  "genre": "언박싱/놀이",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "그리기·만들기",
   "장난감·게임"
  ],
  "form": "실사",
  "url": "https://www.youtube.com/c/ellieVtoys",
  "excluded": false
 },
 {
  "name": "thebrainscoop",
  "desc": "",
  "why": "시카고의 The Field Museum에서 일하는 Emily 선생님이 자연사 방물관의 다양한 전시물과 이와 관련된 이야기를 재미있게 설명해 주는 채널",
  "age": "초5-6",
  "stars": 2,
  "genre": "과학/자연/학습",
  "cls": [
   "귀1000"
  ],
  "tags": [
   "과학·우주",
   "이야기·책"
  ],
  "form": "설명",
  "url": "https://www.youtube.com/user/thebrainscoop",
  "excluded": false
 },
 {
  "name": "toopyandbinootv",
  "desc": "",
  "why": "자신의 삶을 사랑하고 모든 사물과 말을 하는 Toopy와 그의 친구 Binoo의 일상에서의 모험을 그린 캐나다의 애니메이션. 아이들의 상상력을 키울 수 있는 흥미로운 스토리가 가득한 시리즈.",
  "age": "유아",
  "stars": 2,
  "genre": "TV시리즈",
  "cls": [
   "귀500",
   "귀1000"
  ],
  "tags": [
   "히어로·모험",
   "일상·가족"
  ],
  "form": "애니",
  "url": "https://www.youtube.com/user/toopyandbinootv",
  "excluded": false
 }
];

// ── 레벨 판정: 총 단어 수 → 현서네 반 체계 ──
export function levelFromVocab(totalVocab) {
  if (totalVocab < 250) return '입문';
  if (totalVocab < 700) return '귀500';
  return '귀1000';
}
const LEVEL_ORDER = ['입문', '귀500', '귀1000'];
const AGE_ORDER = ['유아', '초1-2', '초3-4', '초5-6'];

function levelDist(chCls, target) {
  const ti = LEVEL_ORDER.indexOf(target);
  let best = 99;
  chCls.forEach(c => {
    const d = Math.abs(LEVEL_ORDER.indexOf(c) - ti);
    if (d < best) best = d;
  });
  return best;
}

// ── 채널 점수 계산 ──
function scoreChannel(ch, ctx) {
  if (ch.excluded) return -999;
  if (ctx.favName && ch.name === ctx.favName) return -999;  // 이미 보는 채널은 제외
  let s = 0;

  // 레벨 (가장 중요)
  const ld = levelDist(ch.cls, ctx.level);
  s += ld === 0 ? 30 : ld === 1 ? 12 : -10;

  // 나이대
  const ad = Math.abs(AGE_ORDER.indexOf(ch.age) - AGE_ORDER.indexOf(ctx.ageGroup));
  s += ad === 0 ? 20 : ad === 1 ? 8 : -8;

  // 관심사 일치 (선택 입력)
  let hit = 0;
  (ctx.interests || []).forEach(t => { if (ch.tags.includes(t)) hit++; });
  s += Math.min(hit, 2) * 15;

  // 좋아하는 채널과의 유사도 (선택 입력)
  if (ctx.fav) {
    let sim = 0;
    ctx.fav.tags.forEach(t => { if (ch.tags.includes(t)) sim++; });
    s += Math.min(sim, 2) * 10;
    if (ctx.fav.form === ch.form) s += 6;
    if (ctx.fav.genre === ch.genre) s += 4;
  }

  // 사장님 별점
  s += (ch.stars - 3) * 8;

  return s;
}

// ── "왜 이 채널" 문구 생성 (카드마다 다른 이유가 나오도록) ──
function buildReason(ch, ctx, used) {
  // 1순위: 아이가 고른 관심사와의 일치 (개인화 신호) — 단, 같은 문구 반복 방지
  const hitTags = (ctx.interests || []).filter(t => ch.tags.includes(t));
  if (hitTags.length) {
    const msg = `${hitTags.join('·')} 좋아하는 아이 취향 저격`;
    if (!used || !used.has(msg)) return msg;
    // 같은 관심사 문구가 이미 쓰였으면 채널 고유 이유로 대체 (3순위로 진행)
  } else {

  // 2순위: 즐겨 보는 채널과의 유사성
  if (ctx.fav) {
    const sim = ctx.fav.tags.filter(t => ch.tags.includes(t));
    if (sim.length) {
      const msg = `${ctx.fav.name} 좋아한다면 이어 보기 좋아요`;
      if (!used || !used.has(msg)) return msg;
    }
  }
  }

  // 3순위: 사장님의 채널별 추천 한마디 (채널마다 고유)
  if (ch.why) {
    const w = ch.why.replace(/\s+/g, ' ').trim();
    return w.length > 55 ? w.slice(0, 54) + '…' : w;
  }

  // 4순위: 태그 기반 기본 문구
  if (ch.tags.length) return `${ch.tags[0]} 좋아하는 아이들이 즐겨 보는 채널`;
  return `${ch.age} 아이들이 좋아하는 검증된 채널이에요`;
}

/**
 * 맞춤 채널 추천
 * @param ctx {ageGroup, totalVocab, interests?, favName?}
 * @returns {main: [{...ch, reason}], challenge: {...ch, reason}|null, level}
 */
export function recommendChannels(ctx) {
  const level = levelFromVocab(ctx.totalVocab || 0);
  const fav = ctx.favName ? CHANNELS.find(c => c.name === ctx.favName) : null;
  const full = { ...ctx, level, fav };

  const ranked = CHANNELS
    .map(ch => ({ ch, score: scoreChannel(ch, full) }))
    .filter(x => x.score > -100)
    .sort((a, b) => b.score - a.score);

  const used = new Set();
  // v1.41: 매번 같은 채널만 나오지 않도록 상위 후보 중에서 가중 무작위로 고른다.
  //  (점수가 높을수록 뽑힐 확률이 높지만, 매번 같은 3개가 고정되지는 않음)
  const POOL_SIZE = 12;
  const candidates = ranked.slice(0, POOL_SIZE);
  const chosen = [];
  const pickWeighted = (arr) => {
    const min = Math.min(...arr.map(x => x.score));
    const weights = arr.map(x => Math.pow(x.score - min + 5, 2));   // 점수 우위는 유지
    let r = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < arr.length; i++) { r -= weights[i]; if (r <= 0) return i; }
    return 0;
  };
  const rest = [...candidates];
  while (chosen.length < 3 && rest.length) {
    chosen.push(rest.splice(pickWeighted(rest), 1)[0]);
  }
  // 후보가 모자라면 순위대로 보충
  for (const x of ranked) {
    if (chosen.length >= 3) break;
    if (!chosen.includes(x)) chosen.push(x);
  }
  const main = chosen.map(x => {
    const reason = buildReason(x.ch, full, used);
    used.add(reason);
    return { ...x.ch, reason };
  });

  // 다음 단계 도전: 한 레벨 위 채널 중 최고 점수 1개 (이미 최고 레벨이면 생략)
  let challenge = null;
  const li = LEVEL_ORDER.indexOf(level);
  if (li < LEVEL_ORDER.length - 1) {
    const nextLevel = LEVEL_ORDER[li + 1];
    const usedNames = new Set(main.map(c => c.name));
    const ai = AGE_ORDER.indexOf(ctx.ageGroup);
    const cands = ranked.filter(x =>
      !usedNames.has(x.ch.name) &&
      x.ch.cls.includes(nextLevel) && !x.ch.cls.includes(level) &&
      Math.abs(AGE_ORDER.indexOf(x.ch.age) - ai) <= 1 &&          // 나이 크게 벗어나면 제외
      !(ctx.ageGroup === '유아' && x.ch.form === '설명'))          // 유아에겐 강의형 제외
      .slice(0, 6);
    const cand = cands.length ? cands[Math.floor(Math.random() * cands.length)] : null;
    if (cand) challenge = { ...cand.ch, reason: `조금 어렵지만 도전! 다음 단계(${nextLevel}) 준비 채널` };
  }

  return { main, challenge, level };
}

// ── 하위 호환 (구버전 API) ──
export function getChannelsByAge(age, n = 3) {
  return CHANNELS.filter(c => c.age === age && !c.excluded).slice(0, n);
}
export function getChannelsByAgeAndCategory(age, cats, n = 3) {
  return getChannelsByAge(age, n);
}
