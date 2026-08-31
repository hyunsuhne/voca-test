// ════════════════════════════════════════════════════════
//  채널 데이터 + 추천 엔진 (v1.25)
//  ⚠️ 이 파일은 에어테이블 "현서네 영상 DB > 신뢰 채널"에서 생성됩니다.
//  채널 수정은 에어테이블에서 → Claude에게 "채널 동기화" 요청
//  생성일: 2026-09-01 · ★3 이상 146개 (Wolfoo 2개는 저작권 이슈로 추천 제외)
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
  "excluded": false
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

// ── "왜 이 채널" 문구 생성 ──
function buildReason(ch, ctx) {
  const parts = [];
  const hitTags = (ctx.interests || []).filter(t => ch.tags.includes(t));
  if (hitTags.length) parts.push(`${hitTags.join('·')} 좋아하는 아이 취향 저격`);
  if (ctx.fav) {
    const sim = ctx.fav.tags.filter(t => ch.tags.includes(t));
    if (sim.length) parts.push(`${ctx.fav.name}를 좋아한다면 이어 보기 좋아요`);
  }
  if (levelDist(ch.cls, ctx.level) === 0) parts.push(`지금 단어 수준(${ctx.level})에 딱 맞아요`);
  if (ch.stars >= 4) parts.push('현서네 강력 추천 채널');
  return parts.slice(0, 2).join(' · ') || `${ch.age} 아이들이 좋아하는 검증된 채널이에요`;
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

  const main = ranked.slice(0, 3).map(x => ({ ...x.ch, reason: buildReason(x.ch, full) }));

  // 다음 단계 도전: 한 레벨 위 채널 중 최고 점수 1개 (이미 최고 레벨이면 생략)
  let challenge = null;
  const li = LEVEL_ORDER.indexOf(level);
  if (li < LEVEL_ORDER.length - 1) {
    const nextLevel = LEVEL_ORDER[li + 1];
    const usedNames = new Set(main.map(c => c.name));
    const ai = AGE_ORDER.indexOf(ctx.ageGroup);
    const cand = ranked.find(x =>
      !usedNames.has(x.ch.name) &&
      x.ch.cls.includes(nextLevel) && !x.ch.cls.includes(level) &&
      Math.abs(AGE_ORDER.indexOf(x.ch.age) - ai) <= 1 &&          // 나이 크게 벗어나면 제외
      !(ctx.ageGroup === '유아' && x.ch.form === '설명'));         // 유아에겐 강의형 제외
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
