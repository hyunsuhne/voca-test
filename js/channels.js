/**
 * channels.js
 * 배작가님 직접 큐레이션 유튜브 채널 데이터 (★★★ 이상 + 유효 URL)
 * 원본: data/youtube_channels.csv (397행, 400개+ 채널)
 * 
 * 필드:
 *   name   - 채널명
 *   desc   - 추천 이유
 *   age    - 대상 나이: "유아" | "초1-2" | "초3-4" | "초5-6"
 *   stars  - 추천 별점: 3 | 4
 *   genre  - 장르: "동요/챈트" | "TV시리즈" | "미술/공작" | "과학/자연" | "가족/취미" | "Read Aloud" | "언박싱/놀이"
 *   gender - 대상 성별: "남" | "여" | "남,여"
 *   tags   - 속성 키워드 배열 (동물, 공룡, 기차, 과학실험 등)
 *   url    - YouTube 채널 URL
 */

export const CHANNELS = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎵 1. 동요/챈트/알파벳
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Cocomelon", desc:"모르는 분이 거의 없는 최고의 어린이 영어 학습 채널!", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/c/CoComelon" },
  { name:"Pinkfong Baby Shark", desc:"핑크퐁을 좋아하면 이제부터 영어로 들어요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/user/SmartBooksMedia" },
  { name:"Super Simple Songs", desc:"처음 영어 노출 시작하는 7세 이하 아이들에게 초초초강추", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/user/SuperSimpleSongs" },
  { name:"BabyBus", desc:"동물을 좋아하는 아이, 다중언어 환경을 만들어 주고 싶은 가정에 추천", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:["동물"], url:"https://www.youtube.com/channel/UCpYye8D5fFMUPf9nSfgd4bA" },
  { name:"Little Angel: Nursery Rhymes", desc:"Super Jojo와 함께 어린 2등신 친구가 나와 다양한 영어 동요를 통한 학습을 할 수 있음", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCNzsYU0aWwjERj-9Y9HUEng" },
  { name:"Bounce Patrol", desc:"호주판 머더구스클럽. 사람이 나와야 좋아하는 아이에게 추천", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC56cowXhoqRWHeqfSJkIQaA" },
  { name:"Pokémon Kids TV", desc:"포켓몬 캐릭터들이 Nursery Rhymes 등 노래로 아이들 학습을 도와주는 채널", age:"초1-2", stars:3, genre:"동요/챈트", gender:"남,여", tags:["포켓몬"], url:"https://www.youtube.com/c/Pokemonkidstv" },
  { name:"Bebefinn", desc:"유아 대상 동요/챈트 채널", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/@bebefinn" },
  { name:"Sesame Street", desc:"미국의 뽀뽀뽀로 취학전 모든 아이들이 한번은 보는 TV시리즈", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/user/SesameStreet" },
  { name:"Ms Rachel - Toddler Learning Videos", desc:"영유아 친구들 말하기를 유도하는 채널이에요", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/c/SongsforLittlesToddlerLearningVideos" },
  { name:"CoComelon JJ's Animal Time", desc:"동물을 좋아하는 코코멜론 팬이라면 꼭 보세요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:["동물"], url:"https://www.youtube.com/@CoComelonAnimalTime" },
  { name:"Hogi! Pinkfong - Learn & Play", desc:"핑크퐁 패밀리 학습 채널", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/@Hogi" },
  { name:"Numberblocks", desc:"한번 빠지면 헤어나오기 힘든 영국 BBC 방송국에서 만든 Numberblock", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCPlwvN0w4qFSP1FllALB92w" },
  { name:"STEVE AND MAGGIE", desc:"아이들의 혼을 빼놓는 Steve 아저씨. 넋을 놓고 재미있게 볼거예요", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCx1xhxQyzR4TT6PmXO0khbQ" },
  { name:"Mother Goose Club", desc:"애니메이션이 아닌 실제 사람이 나오는 것을 선호하는 아이들에게 추천", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/user/MotherGooseClub" },
  { name:"JunyTony - Songs and Stories", desc:"이거 보고 있으면 예전 핑크퐁이 생각나요! 역시나 한국산~", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCKeKanAZfSYH0nzP3UGd_hQ" },
  { name:"coilbook™", desc:"자동차, 기차 등 바퀴 달린 탈것을 좋아하는 남자아이들에 강추", age:"유아", stars:3, genre:"동요/챈트", gender:"남", tags:["기차","자동차"], url:"https://www.youtube.com/user/coilbook" },
  { name:"Jack Hartmann Kids Music Channel", desc:"미국 학부모들이 인정한 교육적인 콘텐츠", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/c/JackHartmann/featured" },
  { name:"Super Simple ABCs", desc:"슈퍼심플송을 좋아하는 아이라면 여기서 알파벳을 배워요!", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCp5Nhw2YMCMUemXC1oWTkkA" },
  { name:"Peppa Pig Nursery Rhymes", desc:"페파피그와 함께 파닉스, 기본 단어 등 다양한 학습을 할 수 있어요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCOYd4Al0Ty89xigE-l9AIog" },
  { name:"Blippi - Kids Songs", desc:"Blippi 아저씨와 함께 영어를 배워요~", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC-cqh4Vn_MtV_wbuK2PtS4Q" },
  { name:"Alphablocks", desc:"영어 듣기 귀가 뚫린 후 파닉스를 배우는 아이들에게 적합한 영상", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC_qs3c0ehDvZkbiEbOj6Drg" },
  { name:"The Singing Walrus", desc:"현직 선생님과 음악가들이 함께 만든 교육용 노래와 영상들이 가득한 채널이에요", age:"유아", stars:4, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/c/Thesingingwalrus" },
  { name:"Shark Academy", desc:"상어를 좋아하는 친구들이라면 이 채널의 귀여운 상어와 함께 영어를 배울 수 있어요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCxiOfWB9GnMxjm9pfKbqx1w" },
  { name:"Dream English Kids", desc:"Matt 삼촌과 함께 다양한 노래와 교육적인 영상으로 영어를 배워요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/@DreamEnglishKids" },
  { name:"ABCmouse.com", desc:"영미권 취학전 아이들의 학습을 위해 만든 채널로 동명의 학습 홈페이지도 있어요", age:"유아", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/@ABCmouse" },
  { name:"VeggieTales Official", desc:"용서, 정직, 감사함 등 아이들의 일상에 필요한 감정들을 재밌는 스토리로 풀어가요~", age:"초1-2", stars:3, genre:"동요/챈트", gender:"남,여", tags:[], url:"https://www.youtube.com/user/BigIdeaInc" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📺 2. TV시리즈
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Peppa Pig - Official Channel", desc:"모든 어린이, 엄마, 아빠. 가족 모두가 같이 즐길 수 있는 애니메이션입니다", age:"유아", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/theofficialpeppa" },
  { name:"Disney Junior", desc:"미국에서 방영했던 디즈니 TV시리즈를 다 모아 놓았어요", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCNcdbMyA59zE-Vk668bKWOg" },
  { name:"Netflix Jr.", desc:"Story Bots을 좋아하고 Netflix 구독자라면 추천", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/storybots" },
  { name:"Morphle TV", desc:"6살 Mila처럼 모험심과 호기심이 강한 아이들에게", age:"유아", stars:3, genre:"TV시리즈", gender:"여", tags:[], url:"https://www.youtube.com/user/MagicPetsSongs4Kids" },
  { name:"Wolfoo Family", desc:"페파피그와 비슷한 소재로, 귀여운 울프네 가족과 함께 영어를 배울 수 있어요", age:"유아", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCoL0M9swO14BT8u9pTn9MvQ" },
  { name:"WildBrain Kids", desc:"우리에게 Caillou와 Curious George로 유명한 WildBrain사의 공식 채널입니다", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/dhxjuniortv" },
  { name:"Bluey - Official Channel", desc:"BBC에서 방영된 Bluey의 공식 유튜브 채널", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCVzLLZkDuFGAE2BGdBuBNBg" },
  { name:"Miraculous Ladybug", desc:"레이디버그 좋아하는 친구들 많죠? 유튜브에는 더 다양한 콘텐츠가 있어요", age:"초1-2", stars:3, genre:"TV시리즈", gender:"여", tags:[], url:"https://www.youtube.com/channel/UCWjVfZ3VnyUwBEOkuOlaU3g" },
  { name:"PAW Patrol Official & Friends", desc:"퍼피구조대! 유튜브에서는 TV시리즈 외에 장난감으로 하는 역할극도 볼 수 있어요!", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/OfficialPawPatrol" },
  { name:"Wolfoo's stories", desc:"귀여운 늑대 Wolfoo와 함께 즐거운 영어 노출", age:"유아", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCEmm6bND-l2eyHLiKNYiY8A" },
  { name:"Robocar POLI TV", desc:"우리나라에서 만든 인기 애니메이션 로보카 폴리의 공식 영어 유튜브 채널이에요", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/roivisual" },
  { name:"PJ Masks Official", desc:"호기심 많고 모험을 좋아하고 수퍼히어로가 되고 싶은 아이에게 추천", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCY2jUnU118sVkdj2xafiJ0g" },
  { name:"Pokémon Asia ENG", desc:"아시아의 포켓몬 팬들을 위한 공식 유튜브 채널", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:["포켓몬"], url:"https://www.youtube.com/c/Pok%C3%A9monAsiaENG" },
  { name:"The Official Pokémon YouTube channel", desc:"포켓몬 TV시리즈 및 게임 중계 등 포켓몬 관련 모든 영상을 볼 수 있는 공식채널", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:["포켓몬"], url:"https://www.youtube.com/c/pokemon" },
  { name:"My Little Pony Official", desc:"여자 아이들이라면 모두 좋아할 매력적인 시리즈", age:"초1-2", stars:4, genre:"TV시리즈", gender:"여", tags:[], url:"https://www.youtube.com/user/mlpequestriagirls" },
  { name:"Pororo the Little Penguin", desc:"뽀통령 뽀로로의 공식 영어 유튜브 채널", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/@pororoenglish" },
  { name:"Curious George", desc:"첫 출간한지 무려 80년이 된 그림책 원작의 TV시리즈. 호기심 많은 원숭이 George를 통해 다양한 학습을 합니다", age:"유아", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCu7IDy0y-ZA0qaG51wrQY6w" },
  { name:"The Amazing World of Gumball", desc:"재미있는 TV 시리즈", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/@theamazingworldofgumball" },
  { name:"Super Wings TV", desc:"수퍼윙스 영어 더빙 채널입니다", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:["기차","자동차"], url:"https://www.youtube.com/c/SuperWingsTV_EN" },
  { name:"Learning Blocks", desc:"넘버블록스, 알파블록스를 모아 놓은 공식 채널", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/c/LearningBlocks" },
  { name:"Ben and Holly's Little Kingdom", desc:"페파 피그를 좋아했다면 Ben and Holly도 추천", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/user/theofficialbenholly" },
  { name:"Thomas & Friends", desc:"차, 기차 등을 좋아하는 남자아이들에게 강추", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남", tags:["기차"], url:"https://www.youtube.com/user/thomasandfriends" },
  { name:"Fireman Sam", desc:"우리 동네 히어로인 소방관이 되고 싶은 아이들에게 추천", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남", tags:["자동차"], url:"https://www.youtube.com/user/firemansamchannel" },
  { name:"CBeebies", desc:"영국 공영 BBC방송국의 유아 교육 전문 채널 CBeebies의 유튜브 채널", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/c/cbeebies" },
  { name:"Caillou - WildBrain", desc:"우리 아이들이 어떤 생각을 하는지 궁금하신 초보 엄마, 아빠들 아이와 같이 보시길 강력 추천합니다", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC4yQCVlLhTmOqX5kUkAGr0g" },
  { name:"PBS Kids", desc:"미쉘 오바마가 읽어주는 책읽기를 듣고 싶다면 추천", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCrNnk0wFBnCS1awGjq_ijGQ" },
  { name:"The Supa Strikas", desc:"축구를 좋아하는 아이들에게 추천하는 만화 시리즈", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:["축구"], url:"https://www.youtube.com/@supastrikas" },
  { name:"Hey Duggee Official", desc:"영국 BBC에서 방영되었던 인기 TV시리즈. 귀여운 Duggee와 함께해요!", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:["아기자기"], url:"https://www.youtube.com/c/HeyDuggeeOfficial" },
  { name:"Digley and Dazey - Trucks For Kids", desc:"중장비 좋아하는 친구들을 위한 채널", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남", tags:["자동차"], url:"https://www.youtube.com/channel/UCueFVVtA5h6m3XvVC6xNsHg" },
  { name:"Strawberry Shortcake", desc:"공주 캐릭터를 좋아하는 여자 아이들에게 추천", age:"초1-2", stars:3, genre:"TV시리즈", gender:"여", tags:["공주"], url:"https://www.youtube.com/@WildBrainStrawberryShortcake" },
  { name:"Bob the Builder", desc:"건축에 관심이 많은 아이들에 강추", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남", tags:["자동차"], url:"https://www.youtube.com/user/bobthebuilderchannel" },
  { name:"Rob The Robot", desc:"로봇과 함께 영어 노출", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/@RobTheRobot" },
  { name:"Snoopy", desc:"스누피와 찰리 브라운의 공식 채널", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:["스누피"], url:"https://www.youtube.com/@Snoopy" },
  { name:"Dino Ranch", desc:"공룡을 좋아하는 아이들에게 추천하는 시리즈", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:["공룡"], url:"https://www.youtube.com/@DinoRanch" },
  { name:"Sarah and Duck Official", desc:"영국 BBC에서 방영되었던 인기 TV시리즈. 여자 아이들이 좋아할거예요!", age:"유아", stars:3, genre:"TV시리즈", gender:"여", tags:["아기자기"], url:"https://www.youtube.com/@SarahAndDuckOfficial" },
  { name:"Mr.Men and Little Miss", desc:"우리나라에서 큰 인기를 모았던 EQ 천재들 어린이 동화책의 원작 애니메이션", age:"초1-2", stars:3, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCjT4aTfoAbCdvc7Z_CplgCg" },
  { name:"Maisy Mouse Official", desc:"꼬마 소녀 쥐 Maisy의 모험을 그린 애니메이션. 단순하지만 매력적인 삽화와 귀여운 캐릭터들이 등장", age:"유아", stars:3, genre:"TV시리즈", gender:"남,여", tags:["아기자기"], url:"https://www.youtube.com/channel/UC6PkaI25MZai1547O9bTeqQ" },
  { name:"Sheriff Labrador", desc:"아이들이 좋아하는 귀여운 TV시리즈", age:"초1-2", stars:4, genre:"TV시리즈", gender:"남,여", tags:[], url:"https://www.youtube.com/@SheriffLabrador" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎨 3. 미술/공작
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Art for Kids Hub", desc:"아이가 그림 그리기를 좋아한다면, 좋아하는 캐릭터를 직접 그리고 싶어한다면 강추합니다", age:"초1-2", stars:4, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/user/ArtforKidsHub" },
  { name:"Bob Ross", desc:"그림 그리기 참 쉽죠~ 밥 로스 아저씨의 영상들이 올라온 채널입니다", age:"초3-4", stars:3, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/c/BobRossIncVideos" },
  { name:"Cartooning4kids", desc:"만화, 애니메이션, 게임의 주인공들을 그리며 영어 노출을 할 수 있어요", age:"초1-2", stars:3, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/c/CartooningClubHowtoDraw" },
  { name:"Draw So Cute", desc:"이쁘고, 귀여운 그림을 그리고 싶은 딸아이가 있다면 강추합니다", age:"초1-2", stars:4, genre:"미술/공작", gender:"여", tags:[], url:"https://www.youtube.com/channel/UC3dEvA1is6-0_yuei9iCdEw" },
  { name:"Sean's Crafts", desc:"Sean 형아와 함께 온갖 흥미로운 Crafts를 만들며 영어 노출도 할 수 있어요", age:"초3-4", stars:3, genre:"미술/공작", gender:"남", tags:[], url:"https://www.youtube.com/user/seanscrafts" },
  { name:"Red Ted Art", desc:"만들기, 공작 활동을 좋아하는 아이들을 위해 추천합니다", age:"유아", stars:3, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/user/redtedart" },
  { name:"Chelsey DIY", desc:"Chelsey 이모가 집에서 봉제인형과 말랑말랑한 인형 등을 만드는 방법을 알려줍니다", age:"초3-4", stars:3, genre:"미술/공작", gender:"여", tags:[], url:"https://www.youtube.com/channel/UCEC9pCgh1o7lVQ4BmzxFIaA" },
  { name:"Jenny W. Chan - Origami Tree", desc:"종이 접기나 공작 만들기를 좋아하는 여자 아이에 추천", age:"초3-4", stars:3, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/user/josthebomb" },
  { name:"Muffalo Potato", desc:"다양한 애니메이션 캐릭터을 그리고 싶은 친구들에게 강추", age:"초1-2", stars:3, genre:"미술/공작", gender:"남,여", tags:[], url:"https://www.youtube.com/user/muffalopotato" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔬 4. 과학/자연/학습
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Mark Rober", desc:"NASA의 엔지니어인 Mark Rober 아저씨가 온갖 장난감을 만들면서 다양한 실험을 해요", age:"초5-6", stars:3, genre:"과학/자연", gender:"남", tags:["과학실험"], url:"https://www.youtube.com/@MarkRober" },
  { name:"Blippi - Educational Videos", desc:"호기심 많고 모험심이 강한 아이들이라면 강추", age:"초1-2", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/user/BlippiVideos" },
  { name:"Brave Wilderness", desc:"야생 동물을 좋아하는 남자 친구들에 추천. 좀 자극적이니 주의하세요", age:"초3-4", stars:4, genre:"과학/자연", gender:"남", tags:["동물"], url:"https://www.youtube.com/user/BreakingTrail" },
  { name:"TED Ed", desc:"TED Talk의 아이들 버전. 단연 최고의 학습 유튜브 채널", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/user/TEDEducation" },
  { name:"Hacksmith Industries", desc:"궁금한것은 뭐든지 직접 만들어보기 위해 회사를 그만두고 유튜브 채널을 시작한 엔지니어 아저씨의 이야기", age:"초5-6", stars:4, genre:"과학/자연", gender:"남", tags:["과학실험"], url:"https://www.youtube.com/c/thehacksmith" },
  { name:"The Infographics Show", desc:"보통 교육용 영상들은 지루하다며, 다양한 그래픽으로 쉽게 재미있는 영상을 만드는 유튜브 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCfdNM3NAhaBOXCafH7krzrA" },
  { name:"SmarterEveryDay", desc:"다양한 과학 원리를 흥미로운 실험을 통해 배우며 영어 노출도 할 수 있어요", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:["과학실험"], url:"https://www.youtube.com/user/destinws2" },
  { name:"Khan Academy", desc:"전세계 누구나 무료로 모든 교육을 받을 수 있다는 미션을 이루기 위해, 수학 과학, 역사 등 미국의 대부분 교과목을 가르치는 영상을 올린 채널", age:"초5-6", stars:4, genre:"과학/자연", gender:"남,여", tags:["교과학습"], url:"https://www.youtube.com/user/khanacademy" },
  { name:"Peekaboo Kidz", desc:"아이가 과학에 관심을 가지기 시작했다면 여기서 시작", age:"초1-2", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/user/Peekaboo" },
  { name:"MinutePhysics", desc:"다양한 물리, 천문학을 1분안에 설명하는 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/user/minutephysics" },
  { name:"It's Okay To Be Smart", desc:"Joe 박사님이 우주, 물리, 생물학, 환경 등 과학 주제별로 답을 설명해 주는 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:["과학실험"], url:"https://www.youtube.com/user/itsokaytobesmart" },
  { name:"Simple History", desc:"역사 덕후라면 이제는 역사도 영어로 배워볼까요?", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:["역사"], url:"https://www.youtube.com/@Simplehistory" },
  { name:"It's AumSum Time", desc:"과학과 관련해 아이들이 가질 수 있는 거의 모든 호기심에 대한 답을 찾을 수 있는 과학 전문 채널", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/user/Smartlearningforall" },
  { name:"Nat Geo Kids", desc:"동물과 자연에 관심이 있는 아이들은 꼭 구독하고 봐야하는 최고의 자연 다큐멘터리 채널", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:["동물"], url:"https://www.youtube.com/channel/UCXVCgDuD_QCkI7gTKU7-tpg" },
  { name:"Wild Kratts", desc:"야생 동물에 관심이 많고 모험심이 강한 친구들에게 추천하는 채널", age:"초1-2", stars:3, genre:"과학/자연", gender:"남,여", tags:["동물"], url:"https://www.youtube.com/channel/UCxEmDFo1yUbbxjEb9RjitVA" },
  { name:"Deep Look", desc:"곤충, 조류, 해양 생물을 자세히 보고 싶은 아이들에게 강추", age:"초1-2", stars:4, genre:"과학/자연", gender:"남", tags:["동물"], url:"https://www.youtube.com/user/KQEDDeepLook" },
  { name:"Meekah - Kids TV Shows", desc:"Blippi는 남자 아이들을 위한 채널이라면 Meekah는 여자 아이들을 위한 채널이에요", age:"초1-2", stars:3, genre:"과학/자연", gender:"여", tags:[], url:"https://www.youtube.com/@BlippiBuddies_Meekah" },
  { name:"Life Noggin", desc:"우리 삶과 우주 그리고 일상의 모든 것에 관련한 질문을 답해 주는 채널", age:"초3-4", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/c/lifenoggin" },
  { name:"All Things Animal TV", desc:"동물 덕후인 친구들은 이 채널에서 놀면 영어도 자연스럽게 늘어요!", age:"초1-2", stars:3, genre:"과학/자연", gender:"남,여", tags:["동물"], url:"https://www.youtube.com/channel/UCB_2_OiPFh6FdUvp50_maug" },
  { name:"SciShow Kids", desc:"학교에서 과학시간에 배운 지식, 일상 생활에서 관찰하는 다양한 과학 현상들이 왜 일어나는지에 대한 답을 실험을 통해 찾아 주는 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:["과학실험"], url:"https://www.youtube.com/user/scishowkids" },
  { name:"Handyman Hal", desc:"재미있는 교육 학습 채널", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/@HandymanHal" },
  { name:"CrunchLabs", desc:"과학 실험 및 만들기 채널", age:"초3-4", stars:4, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/@CrunchLabs" },
  { name:"Knowledgia", desc:"역사에 관심 많은 친구들을 위한 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:["역사"], url:"https://www.youtube.com/@Knowledgia" },
  { name:"History Matters", desc:"역사 관련 학습 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:["역사"], url:"https://www.youtube.com/@HistoryMatters" },
  { name:"The River and Wilder Show", desc:"과학/자연 학습 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/@Riverandwilder" },
  { name:"Math Songs by NUMBEROCK", desc:"노래로 숫자, 시간 읽기, 나누기 등 기본 수학의 개념을 배울 수 있는 영상 컨텐츠로 구성된 채널", age:"초3-4", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/c/NUMBEROCKLLC" },
  { name:"T-Rex Ranch - Dinosaurs For Kids", desc:"공룡 덕후 남자 아이들을 위한 채널", age:"초1-2", stars:3, genre:"과학/자연", gender:"남", tags:["공룡"], url:"https://www.youtube.com/user/ToyLabTV" },
  { name:"Superbook", desc:"Chris, Joy가 Gizmo라는 로봇과 함께 성경의 이야기 속으로 들어가 모험을 하며 벌어지는 일들을 그린 채널", age:"초5-6", stars:3, genre:"과학/자연", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCmkgg5el8Fg3IX_baZyfSaQ" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🏠 5. 가족/취미
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Rosanna Pansino", desc:"요리에 관심이 많은 여자 아이들에 강추", age:"초3-4", stars:4, genre:"가족/취미", gender:"여", tags:["요리"], url:"https://www.youtube.com/user/RosannaPansino" },
  { name:"Family Fun Pack", desc:"쌍둥이를 포함한 6명의 자녀를 키우는 Kristine. 일년의 반을 가족과 함께 여행하며 다양한 활동을 하는 채널", age:"초5-6", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/user/familyfunpack" },
  { name:"Collider Behind the Scenes", desc:"해리포터나 겨울왕국, 스파이더맨 같은 10대들이 좋아할만한 영화와 TV 프로그램을 소개하는 채널", age:"초5-6", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC4qGmRZ7aLOLfVsSdj5Se2A" },
  { name:"HiHo Kids", desc:"아이들이 새로운 것을 배우는 과정을 영상으로 제작해 보여주는 채널. 특이한 음식이나 직업을 체험하거나 전세계의 다양한 놀이를 소개하기도 하는 흥미로운 채널", age:"초3-4", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCqa2MPu8bLY1PwVFUpSyVhQ" },
  { name:"EvanEraTV", desc:"다양한 마술을 배우고 싶은 아이들에게 강추", age:"초1-2", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCWZZowzfDwihJ8VbQ3H8ivw" },
  { name:"Cosmic Kids Yoga", desc:"요가를 좋아하거나 관심있는 엄마와 아이가 있는 집이라면 강추", age:"초1-2", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/user/CosmicKidsYoga" },
  { name:"SV2", desc:"다양한 유소년 클럽을 방문하며 챌린지를 하는 채널", age:"초1-2", stars:3, genre:"가족/취미", gender:"남", tags:["스포츠"], url:"https://www.youtube.com/user/synxcv2" },
  { name:"WhatsUpMoms", desc:"다양한 가족 활동과 육아 정보를 제공하는 채널", age:"초3-4", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/@WhatsUpMoms" },
  { name:"Danny Go!", desc:"재미있는 가족 활동 채널", age:"초3-4", stars:4, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/@DannyGo" },
  { name:"Woolly and Tig Official Channel", desc:"아이들과 함께하는 가족 채널", age:"초1-2", stars:3, genre:"가족/취미", gender:"남,여", tags:[], url:"https://www.youtube.com/@WoollyandTig" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📚 6. Read Aloud
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"English Fairy Tales", desc:"영어 동화책 읽어주는 채널", age:"유아", stars:4, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@EnglishFairyTales" },
  { name:"Fairy Tales and Stories for Kids", desc:"다양한 동화를 들려주는 채널", age:"유아", stars:4, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@FairyTalesandStoriesforKids" },
  { name:"StoryTime at Awnie's House", desc:"아이에게 영어 책을 직접 읽어주기 어려운 학부모에 추천", age:"유아", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCbqmj1hzxuAXsjk08k-KP6w" },
  { name:"StorylineOnline", desc:"헐리우드 영화 주인공들이 읽어주는 영어 그림책을 보고, 듣고 싶은 아이들에게 추천", age:"유아", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/user/StorylineOnline" },
  { name:"Brightly Storytime", desc:"명작동화를 원어민의 목소리로 직접 들려주고 싶은 부모님들께 추천", age:"초1-2", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCvQagFNHMrGgQpYunk4rHXg" },
  { name:"Super Simple Storytime", desc:"동화책을 쉽고 재미있게 들을 수 있는 채널", age:"초1-2", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@SuperSimpleStorytime" },
  { name:"Reading is", desc:"다양한 영어 그림책 읽기 채널", age:"초1-2", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@Readingis" },
  { name:"HarperKids", desc:"다양한 영어 그림책 읽기 채널", age:"초1-2", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@HarperKids" },
  { name:"Bri Reads", desc:"다양한 동화책을 즐겁게 읽어주는 채널", age:"유아", stars:3, genre:"Read Aloud", gender:"남,여", tags:[], url:"https://www.youtube.com/@BriReads" },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎮 7. 언박싱/놀이
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━
  { name:"Like Nastya", desc:"최근 가장 인기있는 여아용 언박싱, 교육, 놀이용 채널", age:"유아", stars:3, genre:"언박싱/놀이", gender:"여", tags:[], url:"https://www.youtube.com/channel/UCJplp5SjeGSdVdwsfb9Q7lQ" },
  { name:"Genevieve's Playhouse", desc:"인기 캐릭터들로 역할극을 좋아하는 아이들에 추천", age:"유아", stars:4, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCK5Q72Uyo73uRPk8PmM2A3w" },
  { name:"Ryan's World", desc:"장난감을 좋아하고 엉뚱한 호기심이 많은 아이들에게 추천", age:"초1-2", stars:4, genre:"언박싱/놀이", gender:"남", tags:[], url:"https://www.youtube.com/channel/UChGJGhZ9SOOHvBB0Y4DOO_w" },
  { name:"CookieswirlC", desc:"현서의 최애 장난감 채널. 발랄하고 재치 넘치는 언니가 장난감을 소개시켜줘요. Roblox 게임도 같이 해요", age:"초1-2", stars:3, genre:"언박싱/놀이", gender:"여", tags:[], url:"https://www.youtube.com/channel/UCelMeixAOTs2OQAAi9wU8-g" },
  { name:"LEGO", desc:"레고 덕후라면 꼭 봐야하는 채널", age:"초1-2", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:["레고"], url:"https://www.youtube.com/user/LEGO" },
  { name:"CKN Toys", desc:"인기 캐릭터들과 장난감을 좋아하는 남자 아이들에게 강추", age:"초1-2", stars:3, genre:"언박싱/놀이", gender:"남", tags:[], url:"https://www.youtube.com/channel/UCfaZw8XH_zmAIlMGolm0Hu4vg" },
  { name:"Blippi Toys", desc:"Blippi 아저씨가 소개해 주는 다양한 놀이 및 장난감!", age:"초1-2", stars:4, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UC-Gm4EN7nNNR3k67J8ywF4g" },
  { name:"EthanGamer", desc:"Roblox, Minecraft 등 게임을 중계하는 유튜버", age:"초3-4", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:["로블록스","마인크래프트"], url:"https://www.youtube.com/c/EthanGamerTV" },
  { name:"Gecko's Garage", desc:"트럭을 좋아하는 남자 친구들에 추천하는 채널입니다", age:"초1-2", stars:3, genre:"언박싱/놀이", gender:"남", tags:["자동차"], url:"https://www.youtube.com/channel/UChULBXQf9VDYAi3vRLu_U-w" },
  { name:"EvanEraTV", desc:"다양한 마술을 배우고 싶은 아이들에게 강추", age:"초1-2", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCWZZowzfDwihJ8VbQ3H8ivw" },
  { name:"EvanTubeHD", desc:"10살에 유튜브를 시작해 10년째 운영되고 있는 채널로 온갖 재미있는 것들을 다 해봅니다!", age:"초5-6", stars:3, genre:"언박싱/놀이", gender:"남", tags:[], url:"https://www.youtube.com/@evantube" },
  { name:"MasterBuilders", desc:"레고로 창의적인 작품을 만들어요", age:"초3-4", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:["레고"], url:"https://www.youtube.com/@masterbuilders" },
  { name:"Bunya Toy Town", desc:"다양한 장난감 언박싱 채널", age:"초3-4", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/@BunyaToyTown" },
  { name:"Leafy Street", desc:"재미있는 놀이 채널", age:"초3-4", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/@leafystreet" },
  { name:"Toys and Colors", desc:"Wendy네 가족이 색과 장난감을 주제로 만든 교육채널입니다", age:"초3-4", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/channel/UCgFXm4TI8htWmCyJ6cVPG_A" },
  { name:"JLaservideo", desc:"다양한 장난감 및 놀이 채널", age:"초5-6", stars:3, genre:"언박싱/놀이", gender:"남,여", tags:[], url:"https://www.youtube.com/@jlaservideo" },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🗺️ 어휘 카테고리 → 장르 매핑 테이블
//    틀린 단어의 카테고리를 장르로 변환
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CAT_TO_GENRE = {
  '기능어':   'TV시리즈',
  '동사':     '과학/자연',
  '형용사':   '동요/챈트',
  '부사':     'TV시리즈',
  '숫자':     '동요/챈트',
  '색깔':     '미술/공작',
  '신체':     '과학/자연',
  '감정':     'TV시리즈',
  '음식':     '가족/취미',
  '동물':     '과학/자연',
  '장소':     'TV시리즈',
  '날씨':     '과학/자연',
  '교통':     'TV시리즈',
  '학용품':   '과학/자연',
  '옷':       '언박싱/놀이',
  '자연':     '과학/자연',
  '감각':     '동요/챈트',
  '운동':     '가족/취미',
  '건강':     '과학/자연',
  '직업':     '가족/취미',
  '이야기':   'Read Aloud',
  '접속사':   'TV시리즈',
  '시간':     '동요/챈트',
  '공간':     '과학/자연',
  '추상부사':  'TV시리즈',
  '명사':     'Read Aloud',
};

/**
 * 나이대 + 약점 카테고리 기반 채널 추천
 * @param {string} ageGroup - "유아" | "초1-2" | "초3-4" | "초5-6"
 * @param {string[]} weakCategories - 틀린 단어 카테고리 top3 배열
 * @param {number} maxResults - 반환할 최대 채널 수 (기본 3)
 * @returns {Array} 추천 채널 배열
 */
export function getChannelsByAgeAndCategory(ageGroup, weakCategories = [], maxResults = 3) {
  // 초5-6은 채널 수가 적으므로 초3-4도 함께 검색
  const targetAges = ageGroup === '초5-6'
    ? ['초5-6', '초3-4']
    : [ageGroup];

  // 유아일 때는 동요/챈트를 선호 장르 최우선에 추가
  const preferredGenres = weakCategories
    .map(cat => CAT_TO_GENRE[cat])
    .filter(Boolean);
  if (ageGroup === '유아' && !preferredGenres.includes('동요/챈트')) {
    preferredGenres.unshift('동요/챈트');
  }

  // 1차: 나이대 + 선호 장르 일치 채널 (★★★ 이상만)
  let matched = CHANNELS.filter(ch =>
    targetAges.includes(ch.age) &&
    ch.stars >= 3 &&
    preferredGenres.includes(ch.genre)
  );

  // 유아: 동요/챈트 ★★★★ 채널을 맨 앞으로 정렬
  if (ageGroup === '유아') {
    matched.sort((a, b) => {
      const aIsNursery = a.genre === '동요/챈트' ? 1 : 0;
      const bIsNursery = b.genre === '동요/챈트' ? 1 : 0;
      if (bIsNursery !== aIsNursery) return bIsNursery - aIsNursery;
      return b.stars - a.stars;
    });
  }

  // 2차: 선호 장르 없거나 부족하면 나이대 + ★★★★ 채널 추가
  if (matched.length < maxResults) {
    const highRated = CHANNELS.filter(ch =>
      targetAges.includes(ch.age) &&
      ch.stars >= 4 &&
      !matched.some(m => m.name === ch.name)
    );
    matched = [...matched, ...highRated];
  }

  // 3차: 여전히 부족하면 인접 나이대로 확장
  if (matched.length < maxResults) {
    const AGE_ORDER = ['유아', '초1-2', '초3-4', '초5-6'];
    const idx = AGE_ORDER.indexOf(ageGroup);
    const adjacent = [AGE_ORDER[idx - 1], AGE_ORDER[idx + 1]].filter(Boolean);
    const fallback = CHANNELS.filter(ch =>
      adjacent.includes(ch.age) &&
      ch.stars >= 4 &&
      !matched.some(m => m.name === ch.name)
    );
    matched = [...matched, ...fallback];
  }

  // 중복 제거 + 별점 높은 순 정렬 + 최대 maxResults개 반환
  const unique = Array.from(new Map(matched.map(ch => [ch.name, ch])).values());
  return unique
    .sort((a, b) => b.stars - a.stars)
    .slice(0, maxResults);
}

/**
 * 나이대만으로 채널 추천 (카테고리 정보 없을 때)
 * 초5-6은 초3-4로 통합 처리
 * @param {string} ageGroup
 * @param {number} maxResults
 */
export function getChannelsByAge(ageGroup, maxResults = 3) {
  // 초5-6은 초3-4도 함께 포함 (채널 수 부족 보완)
  const targetAges = ageGroup === '초5-6'
    ? ['초5-6', '초3-4']
    : [ageGroup];

  return CHANNELS
    .filter(ch => targetAges.includes(ch.age) && ch.stars >= 4)
    .sort((a, b) => {
      // 초5-6: 실제 초5-6 채널 우선 정렬
      if (ageGroup === '초5-6') {
        const aIs56 = a.age === '초5-6' ? 1 : 0;
        const bIs56 = b.age === '초5-6' ? 1 : 0;
        if (bIs56 !== aIs56) return bIs56 - aIs56;
      }
      // 유아: 동요/챈트 우선 정렬
      if (ageGroup === '유아') {
        const aIsNursery = a.genre === '동요/챈트' ? 1 : 0;
        const bIsNursery = b.genre === '동요/챈트' ? 1 : 0;
        if (bIsNursery !== aIsNursery) return bIsNursery - aIsNursery;
      }
      return b.stars - a.stars;
    })
    .slice(0, maxResults);
}
