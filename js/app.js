import { pickQuestions, buildQuestionFromWord, AUDIO_WORDS } from './wordbank.js?v=1.18';
import { track, submitResult } from './analytics.js?v=1.18';
import { getResultGrade, getRecommendation } from './vocabulary.js';
import { getResultGrade2, getRecommendation2 } from './vocabulary2.js';
import { getResultGrade3, getRecommendation3 } from './vocabulary3.js';
import { getChannelsByAgeAndCategory, getChannelsByAge } from './channels.js';

// ══════════════════════════════════════════
//  효과음 (Web Audio API — 외부 파일 불필요)
// ══════════════════════════════════════════
const _audio = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    // iOS/Android: 사용자 터치 후에도 suspended 상태일 수 있음 → 강제 resume
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // 모바일 첫 터치 시 AudioContext를 미리 unlock (무음 재생)
  function unlock() {
    try {
      const ac = getCtx();
      const buf = ac.createBuffer(1, 1, 22050);
      const src = ac.createBufferSource();
      src.buffer = buf;
      src.connect(ac.destination);
      src.start(0);
      src.stop(0.001);
    } catch(e) {}
  }

  // 정답 — 밝고 경쾌한 상승 두 음
  function correct() {
    try {
      const ac = getCtx();
      [[523.25, 0, 0.12], [783.99, 0.13, 0.22]].forEach(([freq, start, end]) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ac.currentTime + start);
        gain.gain.setValueAtTime(0.38, ac.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + end);
        osc.start(ac.currentTime + start);
        osc.stop(ac.currentTime + end);
      });
    } catch(e) {}
  }

  // 오답 — 낮고 짧은 하강 두 음
  function wrong() {
    try {
      const ac = getCtx();
      [[311.13, 0, 0.13], [233.08, 0.14, 0.28]].forEach(([freq, start, end]) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ac.currentTime + start);
        gain.gain.setValueAtTime(0.32, ac.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + end);
        osc.start(ac.currentTime + start);
        osc.stop(ac.currentTime + end);
      });
    } catch(e) {}
  }

  // 스킵 — 짧고 부드러운 "툭" (모르겠어요 버튼)
  function skip() {
    try {
      const ac = getCtx();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain); gain.connect(ac.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ac.currentTime + 0.18);
      gain.gain.setValueAtTime(0.22, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.18);
      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + 0.18);
    } catch(e) {}
  }

  // 팡파레 — 결과 화면 진입 시 (점수별 3단계)
  function fanfare(grade) {
    try {
      const ac = getCtx();
      if (grade === 'S' || grade === 'A') {
        // S/A: 도-미-솔-도↑ 밝고 화려한 상승
        [[523,0,0.12],[659,0.13,0.26],[784,0.27,0.42],[1047,0.43,0.75]].forEach(([f,s,e]) => {
          const osc = ac.createOscillator(), gain = ac.createGain();
          osc.connect(gain); gain.connect(ac.destination);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, ac.currentTime + s);
          gain.gain.setValueAtTime(0.35, ac.currentTime + s);
          gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + e);
          osc.start(ac.currentTime + s); osc.stop(ac.currentTime + e);
        });
      } else if (grade === 'B' || grade === 'C') {
        // B/C: 도-미-솔 짧은 두 음 상승
        [[523,0,0.15],[784,0.16,0.38]].forEach(([f,s,e]) => {
          const osc = ac.createOscillator(), gain = ac.createGain();
          osc.connect(gain); gain.connect(ac.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ac.currentTime + s);
          gain.gain.setValueAtTime(0.28, ac.currentTime + s);
          gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + e);
          osc.start(ac.currentTime + s); osc.stop(ac.currentTime + e);
        });
      } else {
        // D: 짧은 단음
        const osc = ac.createOscillator(), gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(392, ac.currentTime);
        gain.gain.setValueAtTime(0.22, ac.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.3);
        osc.start(ac.currentTime); osc.stop(ac.currentTime + 0.3);
      }
    } catch(e) {}
  }

  // 출발! — 테스트 시작 버튼
  function launch() {
    try {
      const ac = getCtx();
      [[392,0,0.09],[523,0.10,0.22],[659,0.23,0.38]].forEach(([f,s,e]) => {
        const osc = ac.createOscillator(), gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ac.currentTime + s);
        gain.gain.setValueAtTime(0.30, ac.currentTime + s);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + e);
        osc.start(ac.currentTime + s); osc.stop(ac.currentTime + e);
      });
    } catch(e) {}
  }

  // 콤보! — 정답 연속 시
  function combo() {
    try {
      const ac = getCtx();
      [[880,0,0.08],[1047,0.09,0.20]].forEach(([f,s,e]) => {
        const osc = ac.createOscillator(), gain = ac.createGain();
        osc.connect(gain); gain.connect(ac.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ac.currentTime + s);
        gain.gain.setValueAtTime(0.25, ac.currentTime + s);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + e);
        osc.start(ac.currentTime + s); osc.stop(ac.currentTime + e);
      });
    } catch(e) {}
  }

  return { correct, wrong, skip, fanfare, launch, combo, unlock };
})();

// ══════════════════════════════════════════
//  발음 재생 모듈 (_pronounce)
//  소스: Free Dictionary API — 미국 발음(us) 고정
//  폴백: Web Speech API (en-US, rate 0.78)
//  버튼 클릭 시: 재생 중이어도 즉시 중단 후 처음부터 3회 반복
// ══════════════════════════════════════════
const _pronounce = (() => {
  let _playing  = false;
  let _stopFlag = false;
  let _curAudio = null;
  let _playId   = 0;   // 재생 세션 ID — 중복 호출 무시용
  let _unlocked = false; // 모바일: <audio>/speechSynthesis 잠금 해제 여부

  // 모바일 첫 터치(사용자 제스처) 시 <audio> 요소와 speechSynthesis를
  // 미리 한 번 "재생"해서 잠금 해제 — 이후 setTimeout으로 지연 재생해도 막히지 않음
  // (Web Audio API 효과음과 별개 시스템이라 각각 따로 풀어줘야 함)
  function unlock() {
    if (_unlocked) return;
    _unlocked = true;
    try {
      // 무음 mp3 데이터 URI로 <audio> 잠금 해제
      const silent = new Audio(
        'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSKJvPCAAP8AAABQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='
      );
      silent.volume = 0;
      silent.play().catch(() => {});
    } catch (e) {}
    try {
      if (window.speechSynthesis) {
        const utt = new SpeechSynthesisUtterance('');
        utt.volume = 0;
        window.speechSynthesis.speak(utt);
      }
    } catch (e) {}
  }

  // Free Dictionary API → 미국 발음 mp3 URL
  // ── 발음 API가 이상한 단어 → Web Speech로 강제 폴백 ──
  // (Free Dict API에서 엉뚱한 음원이 오는 단어들)
  const FORCE_SPEECH = new Set([
    'vet', 'outside', 'upstairs', 'downstairs',
    // 동철이음이의어 — wordbank.js에 등록된 뜻과 다른 발음이 API/TTS에서
    // 우선 선택되는 문제 방지 (예: lead=이끌다/리드 인데 납/레드로 발음됨)
    'lead', 'record', 'live', 'bow', 'tear', 'close', 'use',
  ]);
  // 참고: 여러 단어로 된 구(phrase)는 위 isPhrase 체크로 전부 자동 처리되므로
  // 여기 목록에 별도로 추가할 필요 없음

  // 동철이음이의어 발음 교정용 — Web Speech에 실제로 전달할 철자
  // (화면에 보이는 단어는 그대로 두고, 음성 엔진에 넘기는 텍스트만 교체해
  //  wordbank.js에 등록된 뜻(품사)에 맞는 발음이 나오도록 강제)
  const SPEECH_TEXT_OVERRIDE = {
    'lead':   'leed',    // 이끌다(동사) — 납(명사) 발음(레드) 방지
    'record': 'rikord',  // 기록하다(동사) — 음반(명사) 발음(레코드) 방지, 강세를 뒤로 유도
    'live':   'liv',     // 살다(동사) — 라이브(형용사) 발음 방지
    'bow':    'bough',   // 절하다(동사) — 활(명사) 발음 방지. bough(나뭇가지)와 완전 동음이의어라 안전
    'tear':   'tier',    // 눈물(명사) — 찢다(동사) 발음(테어) 방지. tier(단/층)와 완전 동음이의어라 안전
    'close':  'clothes', // 닫다(동사) — 가까운(형용사) 발음(클로스) 방지. 근접 동음이의어(근사치)
    'use':    'yooz',    // 사용하다(동사) — 용도(명사) 발음(유스) 방지
  };

  async function fetchAudioUrl(word) {
    const full  = word.toLowerCase().replace(/[^a-z ]/g, '').trim();
    const first = full.split(' ')[0];

    async function tryFetch(q) {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q)}`
      );
      if (!res.ok) throw new Error('not found');
      const data = await res.json();

      // 전체 entries phonetics 수집
      const allPhonetics = data.flatMap(entry => entry.phonetics || []);

      // 유효한 audio만: URL이 있고, 파일명에 쿼리 단어(첫 단어)가 포함된 것 우선
      const valid = allPhonetics.filter(p => p.audio?.trim());
      const qBase = q.split(' ')[0]; // 복합어의 경우 첫 단어로 파일명 매칭

      const pickTagAndWord = (tag) =>
        valid.find(p => p.audio.includes(`-${tag}.`) && p.audio.toLowerCase().includes(qBase))?.audio;
      const pickTag = (tag) =>
        valid.find(p => p.audio.includes(`-${tag}.`))?.audio;
      const pickWord = () =>
        valid.find(p => p.audio.toLowerCase().includes(qBase))?.audio;
      const pickAny = () =>
        valid[0]?.audio;

      const url = pickTagAndWord('us')  // US + 단어 파일명 일치 (최우선)
               || pickTag('us')         // US 발음
               || pickTagAndWord('uk')  // UK + 단어 파일명
               || pickTag('uk')         // UK 발음
               || pickWord()            // 단어 파일명 포함
               || pickAny();            // 아무 음원

      if (!url) throw new Error('no audio');
      return url.startsWith('http') ? url : 'https:' + url;
    }

    // 2. 복합어면 전체 → 실패 시 첫 단어
    if (full.includes(' ')) {
      try { return await tryFetch(full); } catch(e) {}
    }
    return await tryFetch(first);
  }

  // Audio 1회 재생 (promise)
  function playAudio(url, id) {
    return new Promise((resolve) => {
      if (_playId !== id) { resolve(true); return; }
      const audio  = new Audio(url);
      _curAudio    = audio;
      const done   = (ok) => { if (_playId === id) resolve(ok); };
      audio.onended  = () => done(true);
      audio.onerror  = () => done(false);
      audio.play().then(() => {}).catch(() => done(false)); // 자동재생 차단 등 재생 실패 감지
      setTimeout(() => done(true), 6000);
    });
  }

  // Web Speech 폴백 1회
  function speakOnce(word, id) {
    return new Promise((resolve) => {
      if (_playId !== id || !window.speechSynthesis) { resolve(false); return; }
      window.speechSynthesis.cancel();
      const utt   = new SpeechSynthesisUtterance(word);
      utt.lang    = 'en-US';
      utt.rate    = 0.78;
      utt.pitch   = 1.05;
      utt.volume  = 1;
      const voices = window.speechSynthesis.getVoices();
      // 고품질(자연스러운) 음성 우선 선택 — 로봇 음성 방지
      // 브라우저별 고품질 엔진 이름 패턴 우선순위로 탐색
      const HQ_PATTERNS = ['Google US English', 'Google', 'Natural', 'Neural', 'Premium', 'Enhanced', 'Samantha', 'Microsoft Aria', 'Microsoft Jenny'];
      let voice = null;
      for (const pattern of HQ_PATTERNS) {
        voice = voices.find(v => v.lang.startsWith('en') && v.name.includes(pattern));
        if (voice) break;
      }
      if (!voice) voice = voices.find(v => v.lang === 'en-US');
      if (!voice) voice = voices.find(v => v.lang.startsWith('en'));
      if (voice) utt.voice = voice;
      const done = (ok) => resolve(ok);
      utt.onend   = () => done(true);
      utt.onerror = () => done(false); // 'not-allowed' 등 재생 차단 감지
      window.speechSynthesis.speak(utt);
      setTimeout(() => done(true), 5000);
    });
  }

  // 딜레이 (playId 변경 시 즉시 탈출)
  function wait(ms, id) {
    return new Promise(res => {
      const t     = setTimeout(res, ms);
      const check = setInterval(() => {
        if (_playId !== id) { clearTimeout(t); clearInterval(check); res(); }
      }, 40);
      setTimeout(() => clearInterval(check), ms + 200);
    });
  }

  // UI 업데이트
  function setUI(playing, round = 0) {
    const btn  = document.getElementById('pronounce-btn');
    const lbl  = document.getElementById('pronounce-label');
    const icon = document.getElementById('pronounce-icon');
    const dots = document.getElementById('pronounce-dots');
    const pds  = document.querySelectorAll('.pd');
    if (!btn) return;
    if (playing) {
      btn.classList.add('playing');
      icon.textContent = '🔊';
      lbl.textContent  = `${round} / 3`;
      dots?.classList.add('show');
      pds.forEach((pd, i) => { pd.style.opacity = i < round ? '1' : '0.3'; });
    } else {
      btn.classList.remove('playing');
      icon.textContent = '🔊';
      lbl.textContent  = '다시 듣기';
      dots?.classList.remove('show');
      pds.forEach(pd => { pd.style.opacity = ''; });
    }
  }

  // 폴백 notice DOM 토글
  function setFallbackNotice(visible) {
    const el = document.getElementById('audio-fallback-notice-test') || document.getElementById('audio-fallback-notice');
    if (!el) return;
    el.style.display = visible ? 'flex' : 'none';
  }

  // ── 메인 재생: 버튼 클릭/자동 모두 3회 반복 ──
  async function play(word) {
    // 기존 재생 즉시 중단 (playId 증가로 이전 루프 자동 탈출)
    _playId++;
    const id = _playId;
    _playing  = true;
    _stopFlag = false;
    if (_curAudio) { try { _curAudio.pause(); } catch(e) {} _curAudio = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    const ROUNDS = 3;
    const GAP_MS = 1800;

    // FORCE_SPEECH 단어이거나 여러 단어로 된 구(phrase)면 API를 건너뛰고 Web Speech 사용
    // (Free Dictionary API는 공식적으로 구 단위 조회를 지원하지 않음 →
    //  "meet up" 조회 시 항상 실패 후 "meet"만 재조회되어 뒷단어가 누락되는 문제 방지)
    const wordKey = word.toLowerCase().replace(/[^a-z ]/g, '').trim();
    const isPhrase = word.trim().includes(' ');

    // ① 자체 제작 오디오(현서네 자체 녹음) 최우선 사용
    //    AUDIO_WORDS에 등록된 단어면 사전 API/Web Speech를 아예 건너뜀
    //    → 아직 준비 안 된 단어는 자동으로 기존 방식(②③)으로 폴백
    const ownAudioKey = word.toLowerCase().trim().replace(/ /g, '_');
    if (AUDIO_WORDS.has(ownAudioKey)) {
      const ownUrl = `audio/words/${ownAudioKey}.mp3`;
      setFallbackNotice(false);
      let anyPlayedOwn = false;
      for (let i = 1; i <= ROUNDS; i++) {
        if (_playId !== id) break;
        setUI(true, i);
        const ok = await playAudio(ownUrl, id);
        anyPlayedOwn = anyPlayedOwn || ok;
        if (!ok) setFallbackNotice(true);
        if (_playId !== id) break;
        if (i < ROUNDS) await wait(GAP_MS, id);
      }
      if (_playId === id) { _playing = false; setUI(false); }
      return;
    }

    // FORCE_SPEECH 단어이거나 여러 단어로 된 구(phrase)면 API를 건너뛰고 Web Speech 사용
    // (Free Dictionary API는 공식적으로 구 단위 조회를 지원하지 않음 →
    //  "meet up" 조회 시 항상 실패 후 "meet"만 재조회되어 뒷단어가 누락되는 문제 방지)
    const skipApi = FORCE_SPEECH.has(wordKey) || isPhrase;

    // API 호출 (한 번만, FORCE_SPEECH 단어는 스킵)
    let audioUrl = null;
    let apiOk = false;
    if (!skipApi) {
      try { audioUrl = await fetchAudioUrl(word); apiOk = true; } catch(e) {}
    }
    if (_playId !== id) return; // 도중에 다른 재생 요청이 왔으면 중단

    // Web Speech 사용 가능 여부 확인
    const speechOk = !!(window.speechSynthesis);

    // 둘 다 불가하면 즉시 폴백 notice 표시
    if (!audioUrl && !speechOk) {
      setFallbackNotice(true);
      _playing = false;
      setUI(false);
      return;
    }

    // 재생 성공 시 notice 숨기기
    setFallbackNotice(false);

    let anyPlayed = false;
    for (let i = 1; i <= ROUNDS; i++) {
      if (_playId !== id) break;
      setUI(true, i);
      let ok = false;
      if (audioUrl) {
        ok = await playAudio(audioUrl, id);
        if (!ok && speechOk) {
          // 사전 API가 URL은 줬지만 실제 재생이 실패한 경우
          // (깨진 오디오 파일, 네트워크 차단 등) → Web Speech로 재시도
          const speechText = SPEECH_TEXT_OVERRIDE[wordKey] || word;
          ok = await speakOnce(speechText, id);
        }
      } else if (speechOk) {
        const speechText = SPEECH_TEXT_OVERRIDE[wordKey] || word;
        ok = await speakOnce(speechText, id);
      }
      anyPlayed = anyPlayed || ok;
      if (!ok) setFallbackNotice(true); // 자동재생 차단 등으로 재생 실패 시 안내 표시
      if (_playId !== id) break;
      if (i < ROUNDS) await wait(GAP_MS, id);
    }

    if (_playId === id) {
      _playing = false;
      setUI(false);
      // Web Speech만 사용했는데 실제로 음성이 없을 수 있는 경우 감지 불가,
      // 단 speechSynthesis.getVoices()가 비었으면 폴백 notice 표시
      if (!audioUrl && speechOk) {
        const voices = window.speechSynthesis.getVoices();
        const hasEnVoice = voices.some(v => v.lang.startsWith('en'));
        if (!hasEnVoice) setFallbackNotice(true);
      }
    }
  }

  function stop() {
    _playId++;
    _playing = false;
    if (_curAudio) { try { _curAudio.pause(); _curAudio.currentTime = 0; } catch(e) {} _curAudio = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setUI(false);
  }

  return { play, stop, unlock };
})();

// ── 그룹 메타 정보 (이름·이모지·범위·테마) ─────────────
const GROUP_META = {
  // test1: 그룹 1~5 (1~500위)
  test1: [
    { groupNum:1, name:"그룹 1", emoji:"🌱", range:"1~100",   theme:"기초 동사·색깔·숫자"  },
    { groupNum:2, name:"그룹 2", emoji:"🌿", range:"101~200", theme:"신체·음식·감정"        },
    { groupNum:3, name:"그룹 3", emoji:"🌳", range:"201~300", theme:"색깔·동물·형용사"      },
    { groupNum:4, name:"그룹 4", emoji:"🌲", range:"301~400", theme:"장소·날씨·교통"        },
    { groupNum:5, name:"그룹 5", emoji:"🏆", range:"401~500", theme:"학용품·직업·일상"      },
  ],
  // test2: 그룹 6~10 (501~1000위)
  test2: [
    { groupNum:6,  name:"그룹 6",  emoji:"🌿", range:"501~600",  theme:"자연·감각·탐구"        },
    { groupNum:7,  name:"그룹 7",  emoji:"🏃", range:"601~700",  theme:"운동·건강·문법"        },
    { groupNum:8,  name:"그룹 8",  emoji:"💛", range:"701~800",  theme:"사회성·감정·성장"      },
    { groupNum:9,  name:"그룹 9",  emoji:"🏰", range:"801~900",  theme:"직업·상상·이야기"      },
    { groupNum:10, name:"그룹 10", emoji:"🧠", range:"901~1000", theme:"부사·접속사·추상표현"  },
  ],
  // test3: 그룹 11~15 (1001~1500위)
  test3: [
    { groupNum:11, name:"그룹 11", emoji:"💡", range:"1001~1100", theme:"감정·사회성·성격"      },
    { groupNum:12, name:"그룹 12", emoji:"🔬", range:"1101~1200", theme:"기술·과학·환경"        },
    { groupNum:13, name:"그룹 13", emoji:"🌍", range:"1201~1300", theme:"지리·예술·언어"        },
    { groupNum:14, name:"그룹 14", emoji:"📊", range:"1301~1400", theme:"경제·건강·교육"        },
    { groupNum:15, name:"그룹 15", emoji:"🚀", range:"1401~1500", theme:"논리·디지털·세계시민"  },
  ],
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
const state = {
  childName: '',
  ageGroup: '',          // 유아 | 초1-2 | 초3-4 | 초5-6
  exposure: '',          // under1 | 1to3 | over3
  testType: '',          // test1 (1~500) | test2 (501~1000)
  currentGroupIndex: 0,
  currentQIndex: 0,
  groupResults: [],
  currentGroupCorrect: 0,
  queue: [],
  isAnswering: false,
  totalAnswered: 0,
  radarChart: null,
  wrongWords: [],        // { word, korean, category, correctAnswer } 틀린 단어 목록
  usedWords: new Set(),  // 테스트 전체 구간에서 출제된 word Set (그룹 간 중복 방지)
  comboCount: 0,         // 정답 연속 횟수
  startedAt: 0,          // 테스트 시작 시각 (소요 시간 계산용)
};

const TOTAL_QUESTIONS = 50;
const ENCOURAGEMENTS = [
  "잘하고 있어요! 👏", "훌륭해요! ⭐", "최고예요! 💪",
  "천재인가요? 🌟", "대단해요! 🎉", "멋져요! 🚀",
  "조금만 더! 🌈", "거의 다 왔어요! 🏁",
];

// ══════════════════════════════════════════
//  나이대 선택
// ══════════════════════════════════════════
window.selectAge = function (btn) {
  document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.ageGroup = btn.dataset.value;
};

// ══════════════════════════════════════════
//  노출 기간 선택
// ══════════════════════════════════════════
window.selectExposure = function (btn) {
  document.querySelectorAll('.exposure-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.exposure = btn.dataset.value;
  updateTestRecommendation(state.exposure);
  document.getElementById('test-select-wrap').classList.add('visible');
};

function updateTestRecommendation(exposure) {
  const badge1 = document.getElementById('badge-test1');
  const badge2 = document.getElementById('badge-test2');
  const badge3 = document.getElementById('badge-test3');
  const btn1   = document.getElementById('btn-test1');
  const btn2   = document.getElementById('btn-test2');
  const btn3   = document.getElementById('btn-test3');
  const title  = document.getElementById('test-select-title');

  // 모든 버튼 초기화
  [btn1, btn2, btn3].forEach(b => b && b.classList.remove('recommended'));

  if (exposure === 'under1') {
    badge1.textContent = '⭐ 추천';
    badge1.className   = 'test-btn-badge recommended';
    badge2.textContent = '도전해보기';
    badge2.className   = 'test-btn-badge alt';
    badge3.textContent = '상급 도전';
    badge3.className   = 'test-btn-badge';
    btn1.classList.add('recommended');
    title.innerHTML = '🌱 1년 이하 → <strong style="color:#6C63FF">1~500 단어</strong> 테스트를 추천해요!';

  } else if (exposure === '1to3') {
    badge1.textContent = '기초 확인';
    badge1.className   = 'test-btn-badge alt';
    badge2.textContent = '⭐ 추천';
    badge2.className   = 'test-btn-badge recommended';
    badge3.textContent = '도전해보기';
    badge3.className   = 'test-btn-badge alt';
    btn2.classList.add('recommended');
    title.innerHTML = '🌳 1~3년 → <strong style="color:#6C63FF">501~1000 단어</strong> 테스트를 추천해요!';

  } else if (exposure === 'over3') {
    badge1.textContent = '기초 점검';
    badge1.className   = 'test-btn-badge alt';
    badge2.textContent = '실력 점검';
    badge2.className   = 'test-btn-badge alt';
    badge3.textContent = '⭐ 추천';
    badge3.className   = 'test-btn-badge recommended';
    btn3.classList.add('recommended');
    title.innerHTML = '🚀 3년 이상 → <strong style="color:#FF8C00">1001~1500 단어</strong> 테스트를 추천해요!';
  }
}

// ══════════════════════════════════════════
//  테스트 시작
// ══════════════════════════════════════════
window.startTest = function (testType) {
  const nameInput = document.getElementById('child-name').value.trim();
  if (!nameInput) {
    showToast('아이 이름을 입력해주세요! ✏️');
    document.getElementById('child-name').focus();
    return;
  }
  if (!state.ageGroup) {
    showToast('나이대를 선택해주세요! 🎂');
    return;
  }
  if (!state.exposure) {
    showToast('영어 노출 기간을 선택해주세요! ⏳');
    return;
  }

  state.childName = nameInput;
  state.testType  = testType;
  state.currentGroupIndex = 0;
  state.currentQIndex = 0;
  state.groupResults = [];
  state.currentGroupCorrect = 0;
  state.totalAnswered = 0;
  state.isAnswering = false;
  state.wrongWords = [];        // 매 테스트마다 초기화
  state.usedWords = new Set();  // 매 테스트마다 초기화
  state.comboCount = 0;         // 콤보 초기화
  if (state.radarChart) { state.radarChart.destroy(); state.radarChart = null; }

  state.startedAt = Date.now();
  track('test-start-' + testType);   // 퍼널: 테스트 시작

  _audio.unlock(); // 모바일 AudioContext 잠금 해제 (터치 이벤트 직접 핸들러 안에서 호출)
  _pronounce.unlock(); // 모바일: <audio>/speechSynthesis 잠금 해제 (효과음과 별개 시스템)
  _audio.launch();
  // 뒤로가기 가로체기용 history 스택 주입
  history.pushState({ test: true }, '', location.href);
  showScreen('screen-test');
  loadGroup(0);
};

// ══════════════════════════════════════════
//  그룹 로드  (wordbank.js 기반 랜덤 추출)
// ══════════════════════════════════════════
function getCurrentMeta() {
  return GROUP_META[state.testType];
}

function loadGroup(groupIdx) {
  const meta     = getCurrentMeta()[groupIdx];
  const groupNum = meta.groupNum;               // 실제 그룹 번호 (1~10)

  // ▶ usedWords를 주입 → 이전 그룹과 단어 중복 원천 차단
  const picked = pickQuestions(groupNum, state.usedWords);
  // 이번 그룹에서 뽑힌 단어를 usedWords에 누적 등록
  picked.forEach(w => state.usedWords.add(w.word));

  state.queue = picked.map(w => buildQuestionFromWord(w));
  state.currentQIndex = 0;
  state.currentGroupCorrect = 0;

  if (groupIdx === 0) {
    renderQuestion();
  } else {
    showGroupTransition(groupIdx, () => renderQuestion());
  }
}

// ══════════════════════════════════════════
//  문항 렌더링
// ══════════════════════════════════════════
function renderQuestion() {
  const meta = getCurrentMeta();
  const group = meta[state.currentGroupIndex];
  const q     = state.queue[state.currentQIndex];

  document.getElementById('current-level-badge').textContent =
    `${group.emoji} ${group.name}`;

  const pct = (state.totalAnswered / TOTAL_QUESTIONS) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent =
    `${state.totalAnswered} / ${TOTAL_QUESTIONS}`;
  // 퍼센트 카운트업 애니메이션
  const pctEl = document.getElementById('progress-pct');
  if (pctEl) {
    const target = Math.round(pct);
    const prev   = parseInt(pctEl.textContent) || 0;
    const diff   = target - prev;
    if (diff > 0) {
      let cur = prev;
      const step = Math.max(1, Math.floor(diff / 8));
      const timer = setInterval(() => {
        cur = Math.min(target, cur + step);
        pctEl.textContent = cur + '%';
        if (cur >= target) clearInterval(timer);
      }, 30);
    } else {
      pctEl.textContent = target + '%';
    }
    pctEl.style.color = pct >= 80 ? '#43D9A2' : pct >= 50 ? '#6C63FF' : 'var(--primary)';
  }

  const totalCorrect = state.groupResults.reduce((s, r) => s + r.correct, 0)
    + state.currentGroupCorrect;
  document.getElementById('correct-count').textContent = totalCorrect;

  // 마지막 문제 예고 배지
  const isLastQ = (state.totalAnswered === TOTAL_QUESTIONS - 1);
  const qNumEl = document.getElementById('question-number');
  qNumEl.textContent = `${group.name} (${group.range}위) · ${state.currentQIndex + 1}/10`;
  if (isLastQ) {
    qNumEl.innerHTML =
      `${group.name} (${group.range}위) · ${state.currentQIndex + 1}/10` +
      ` <span style="
          display:inline-block;margin-left:6px;padding:2px 8px;
          background:#FF4500;color:#fff;border-radius:20px;
          font-size:0.72rem;font-weight:800;
          animation:pulse 0.6s ease infinite alternate;
        ">🏁 마지막 문제!</span>`;
  }
  document.getElementById('english-word').textContent = q.word;

  // 발음 버튼 레이블 초기화 + 자동 재생 (0.6초 후, 카드 슬라이드 후)
  const pronounceLabel = document.getElementById('pronounce-label');
  const pronounceIcon  = document.getElementById('pronounce-icon');
  if (pronounceLabel) pronounceLabel.textContent = '발음 듣기';
  const prevNotice = document.getElementById('audio-fallback-notice-test');
  if (prevNotice) prevNotice.style.display = 'none';
  if (pronounceIcon)  pronounceIcon.textContent  = '🔊';
  setTimeout(() => _pronounce.play(q.word), 600);

  // 카테고리 배지 업데이트 (다의어 힌트)
  const catBadge = document.getElementById('category-badge');
  if (catBadge) {
    catBadge.textContent = q.category;
    catBadge.dataset.cat = q.category;
  }

  const grid = document.getElementById('choices-grid');
  grid.innerHTML = '';
  grid.classList.toggle('choices-grid--images', !!q.hasImages);
  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    if (q.hasImages) {
      // 그림 선택형 (TEST1, 이미지 4개 전부 준비된 경우만)
      btn.className = 'choice-btn choice-btn--img';
      const imgWord = q.choiceWords[i].toLowerCase().replace(/ /g, '_');
      btn.innerHTML = `<img src="images/words/${imgWord}.jpg" alt="" loading="lazy">`;
    } else {
      // 기존 텍스트 선택형 (TEST2/3 또는 이미지 미준비 단어)
      btn.className = 'choice-btn';
      btn.textContent = choice;
    }
    btn.onclick = () => handleAnswer(i === q.correctIndex, btn, grid, q.correctIndex);
    grid.appendChild(btn);
  });

  const encEl = document.getElementById('encouragement-text');
  if (state.totalAnswered === 0) {
    encEl.textContent = `${state.childName}, 아는 단어를 골라봐요! 🎯`;
  } else if (state.totalAnswered >= TOTAL_QUESTIONS - 5) {
    encEl.textContent = '거의 다 왔어요! 마지막까지 힘내요! 🏁';
  } else {
    encEl.textContent = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
  }

  hideFeedback();
  state.isAnswering = false;

  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'slideUp 0.3s ease';
}

// 발음 버튼 클릭 핸들러 (3회 반복)
window.playPronounce = function () {
  const q = state.queue[state.currentQIndex];
  if (!q) return;
  _pronounce.play(q.word);
};



// ══════════════════════════════════════════
//  답변 처리
// ══════════════════════════════════════════
function handleAnswer(isCorrect, clickedBtn, grid, correctIndex) {
  if (state.isAnswering) return;
  state.isAnswering = true;

  _audio.unlock(); // 모바일: 터치 직후 AudioContext resume 보장
  _pronounce.unlock();
  // 답 선택 즉시 발음 중단
  _pronounce.stop();

  Array.from(grid.children).forEach(b => (b.disabled = true));
  const q = state.queue[state.currentQIndex];
  if (isCorrect) {
    state.comboCount++;
    _audio.correct();
    // 3연속 이상이면 콤보 효과음 추가 (0.25초 후)
    if (state.comboCount >= 3) {
      setTimeout(() => _audio.combo(), 250);
    }
    clickedBtn.classList.add('correct');
    state.currentGroupCorrect++;
    showFeedback(true, false, state.comboCount);
  } else {
    state.comboCount = 0;
    _audio.wrong();
    clickedBtn.classList.add('wrong');
    Array.from(grid.children)[correctIndex].classList.add('correct');
    showFeedback(false);
    // 틀린 단어 기록
    state.wrongWords.push({
      word: q.word,
      korean: q.choices[q.correctIndex],
      category: q.category,
    });
  }

  state.totalAnswered++;
  state.currentQIndex++;
  setTimeout(nextStep, isCorrect ? 700 : 1000);
}

window.handleSkip = function () {
  if (state.isAnswering) return;
  state.isAnswering = true;

  _audio.unlock(); // 모바일: 터치 직후 AudioContext resume 보장
  _pronounce.unlock();
  // 스킵 즉시 발음 중단
  _pronounce.stop();

  _audio.skip();

  const q = state.queue[state.currentQIndex];
  const grid = document.getElementById('choices-grid');
  Array.from(grid.children).forEach(b => (b.disabled = true));
  Array.from(grid.children)[q.correctIndex].classList.add('correct');

  // 스킵도 틀린 단어로 기록
  state.wrongWords.push({
    word: q.word,
    korean: q.choices[q.correctIndex],
    category: q.category,
  });

  showFeedback(false, true);
  state.totalAnswered++;
  state.currentQIndex++;
  setTimeout(nextStep, 900);
};

function nextStep() {
  // 화면 전환 전 발음 완전 중단 + 버튼 UI 리셋
  _pronounce.stop();

  if (state.currentQIndex >= 10) {
    state.groupResults.push({ correct: state.currentGroupCorrect, total: 10 });
    state.currentGroupIndex++;
    track(`group-done-${state.testType}-${state.currentGroupIndex}`);   // 퍼널: 그룹 완료 (1~5)
    if (state.currentGroupIndex >= getCurrentMeta().length) {
      showResults();
    } else {
      loadGroup(state.currentGroupIndex);
    }
  } else {
    renderQuestion();
  }
}

// ══════════════════════════════════════════
//  피드백
// ══════════════════════════════════════════
function showFeedback(correct, skipped = false, combo = 0) {
  const overlay = document.getElementById('feedback-overlay');
  const icon    = document.getElementById('feedback-icon');
  const text    = document.getElementById('feedback-text');

  // 마지막 문제 여부 (전체 50문항 기준)
  const isLast = (state.totalAnswered === TOTAL_QUESTIONS - 1);

  if (skipped) {
    icon.textContent = '🙈';
    text.textContent = '다음엔 알 수 있을 거예요!';
    text.style.color = '#7B7B9E';
  } else if (correct) {
    // 콤보 단계별 아이콘·메시지
    if (combo >= 7) {
      icon.textContent = '🔥'; text.textContent = `${combo}연속! 천재?! 🚀`; text.style.color = '#FF4500';
    } else if (combo >= 5) {
      icon.textContent = '⚡'; text.textContent = `${combo}연속! 대단해요!`; text.style.color = '#FF8C00';
    } else if (combo >= 3) {
      icon.textContent = '✨'; text.textContent = `${combo}연속! 멋진데요!`; text.style.color = '#6C63FF';
    } else {
      icon.textContent = '🌟'; text.textContent = isLast ? '마지막 정답! 🎉' : '정답!'; text.style.color = '#1A8A62';
    }
  } else {
    icon.textContent = '💪';
    text.textContent = '아직 배우는 중이에요!';
    text.style.color = '#CC2244';
  }
  overlay.classList.add('show');
}
function hideFeedback() {
  document.getElementById('feedback-overlay').classList.remove('show');
}

// ══════════════════════════════════════════
//  그룹 전환 배너
// ══════════════════════════════════════════
function showGroupTransition(groupIdx, callback) {
  const group    = getCurrentMeta()[groupIdx];
  const prevMeta = getCurrentMeta()[groupIdx - 1];
  const prevResult = state.groupResults[groupIdx - 1];
  const banner   = document.getElementById('level-transition');

  // 이전 구간 점수 피드백
  const prevScoreEl = document.getElementById('transition-prev-score');
  if (prevScoreEl && prevResult && prevMeta) {
    const c = prevResult.correct;
    const msg = c >= 9 ? '완벽해요! 🔥' : c >= 7 ? '잘했어요! ✨' : c >= 5 ? '괜찮아요 👍' : '조금 더 연습해요 💪';
    prevScoreEl.innerHTML =
      `<span class="tps-label">${prevMeta.name} 결과</span>` +
      `<span class="tps-score">${c}/10</span>` +
      `<span class="tps-msg">${msg}</span>`;
    prevScoreEl.style.display = 'flex';
  } else if (prevScoreEl) {
    prevScoreEl.style.display = 'none';
  }

  document.getElementById('transition-emoji').textContent = group.emoji;
  document.getElementById('transition-title').textContent = `${group.name} 시작!`;
  document.getElementById('transition-desc').textContent  =
    `${group.range}위 · ${group.theme}`;

  const fill = document.getElementById('transition-fill');
  fill.style.animation = 'none';
  void fill.offsetWidth;
  fill.style.animation = 'progressAnim 1.5s ease forwards';

  banner.classList.add('show');
  setTimeout(() => { banner.classList.remove('show'); callback(); }, 1800);
}

// ══════════════════════════════════════════
//  결과 화면
// ══════════════════════════════════════════
function showResults() {
  _pronounce.stop();
  showScreen('screen-result');

  const isTest2    = state.testType === 'test2';
  const isTest3    = state.testType === 'test3';
  const estimate   = calcEstimate(state.groupResults);   // 이번 테스트 추정 (0~500)
  let totalVocab, grade, maxWords, vocabLabel;

  if (isTest3) {
    totalVocab = 1000 + estimate;   // 기초 1000 + 이번 추정
    grade      = getResultGrade3(estimate);
    maxWords   = 1500;
    vocabLabel = '1~1500단어 중 알고 있는 단어 수';
  } else if (isTest2) {
    totalVocab = 500 + estimate;    // 기초 500 + 이번 추정
    grade      = getResultGrade2(estimate);
    maxWords   = 1000;
    vocabLabel = '1~1000단어 중 알고 있는 단어 수';
  } else {
    totalVocab = estimate;
    grade      = getResultGrade(estimate);
    maxWords   = 500;
    vocabLabel = '1~500단어 중 알고 있는 단어 수';
  }

  // 히어로: 항상 '1~N 중 M개'
  document.getElementById('result-name').textContent  = `${state.childName}의 어휘 리포트 ✨`;
  document.getElementById('result-emoji').textContent = grade.emoji;
  document.getElementById('vocab-label').textContent  = vocabLabel;
  animateCount('vocab-count', 0, totalVocab, 1600);
  document.getElementById('vocab-grade').textContent      = grade.grade;
  document.getElementById('vocab-grade').style.background = grade.color + '33';
  document.getElementById('vocab-grade').style.color      = grade.color;

  // test2 / test3일 때 합산 구성 표시
  if (isTest2 || isTest3) {
    document.getElementById('vocab-breakdown').style.display = 'flex';
    document.getElementById('breakdown-base').textContent  = (isTest3 ? '기초 1000' : '기초 500') + '(가정)';
    document.getElementById('breakdown-this').textContent  = `이번 테스트 ${estimate}`;
    document.getElementById('breakdown-total').textContent = `약 ${totalVocab}개`;

    // 기초 단계 습득이 의심되는 경우(이번 테스트 자체 점수가 낮음) 하위 테스트 확인 유도
    const baseCheckBanner = document.getElementById('base-check-banner');
    if (baseCheckBanner) {
      if (estimate <= 100) {
        baseCheckBanner.style.display = 'flex';
        baseCheckBanner.querySelector('.base-check-text').textContent =
          isTest3
            ? '501~1000단어가 아직 익숙하지 않다면, TEST2도 함께 확인해보세요'
            : '1~500단어가 아직 익숙하지 않다면, TEST1도 함께 확인해보세요';
      } else {
        baseCheckBanner.style.display = 'none';
      }
    }
  } else {
    document.getElementById('vocab-breakdown').style.display = 'none';
  }

  // 게이지
  const pct = Math.min(100, (totalVocab / maxWords) * 100);
  setTimeout(() => {
    document.getElementById('gauge-fill').style.transition = 'width 1.4s ease';
    document.getElementById('gauge-fill').style.width = pct + '%';
    document.getElementById('gauge-label').textContent =
      `1~${maxWords}단어 기준 약 ${totalVocab}개 (${Math.round(pct)}%)`;
  }, 300);

  renderGroupScores();
  setTimeout(() => renderRadarChart(), 400);
  renderWrongWords();                              // 틀린 단어 목록
  renderRecommendation(isTest2, isTest3, estimate); // 틀린 단어 기반 추천
  renderOtherTestBanner(isTest2, isTest3, estimate);

  // 퍼널: 완주 + 익명 결과 수집 (개인정보 없음)
  track('test-complete-' + state.testType);
  submitResult({
    ageGroup:    state.ageGroup,
    exposure:    state.exposure,
    testType:    state.testType,
    estimate:    estimate,
    totalVocab:  totalVocab,
    groupScores: state.groupResults.map(g => g.correct),
    durationSec: state.startedAt ? Math.round((Date.now() - state.startedAt) / 1000) : null,
  });

  // localStorage 저장 + 히스토리 렌더링
  saveResultToHistory(totalVocab, grade, state.testType, state.childName);
  setTimeout(() => renderHistory(totalVocab, state.testType), 200);

  // 팡파레 + confetti (점수별 강도 차등 — estimate 비율 기준)
  const fanfareLevel = estimate >= 400 ? 'S' : estimate >= 280 ? 'A' : estimate >= 160 ? 'B' : estimate >= 80 ? 'C' : 'D';
  setTimeout(() => _audio.fanfare(fanfareLevel), 300);
  launchConfetti(fanfareLevel);
}

// ── 그룹별 점수 ───────────────────────────────────────
function renderGroupScores() {
  const container = document.getElementById('level-scores');
  container.innerHTML = '';
  const colors = ['#6C63FF','#43D9A2','#FFB347','#FF6584','#F57F17'];

  state.groupResults.forEach((r, i) => {
    const group = getCurrentMeta()[i];
    const pct   = Math.round((r.correct / r.total) * 100);
    const est   = Math.round((r.correct / r.total) * 100);

    const row = document.createElement('div');
    row.className = 'level-score-row';
    row.innerHTML = `
      <div class="level-score-emoji">${group.emoji}</div>
      <div class="level-score-info">
        <div class="level-score-name">
          ${group.name}
          <span style="font-weight:400;color:#7B7B9E;font-size:0.72rem">(${group.range}위)</span>
        </div>
        <div class="level-score-bar">
          <div class="level-score-fill"
               style="width:0%;background:linear-gradient(90deg,${colors[i]},${colors[i]}88)"
               data-target="${pct}"></div>
        </div>
      </div>
      <div style="text-align:right;min-width:60px">
        <div class="level-score-pct" style="color:${colors[i]}">${r.correct}/10</div>
        <div style="font-size:0.7rem;color:#7B7B9E">≈${est}단어</div>
      </div>
    `;
    container.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.level-score-fill').forEach(fill => {
      fill.style.transition = 'width 1s ease';
      fill.style.width = fill.dataset.target + '%';
    });
  }, 200);
}

// ── 레이더 차트 ───────────────────────────────────────
function renderRadarChart() {
  const ctx    = document.getElementById('radar-chart').getContext('2d');
  const labels = getCurrentMeta().map(g => g.name);
  const data   = state.groupResults.map(r => Math.round((r.correct / r.total) * 100));

  if (state.radarChart) state.radarChart.destroy();
  state.radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: state.childName,
        data,
        backgroundColor: 'rgba(108,99,255,0.22)',
        borderColor:     'rgba(108,99,255,0.9)',
        borderWidth: 2.5,
        pointBackgroundColor: 'rgba(108,99,255,1)',
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 1000 },
      scales: {
        r: {
          beginAtZero: true, max: 100,
          ticks: { stepSize: 25, font: { size: 10 }, color: '#7B7B9E' },
          grid:  { color: 'rgba(108,99,255,0.1)' },
          pointLabels: { font: { size: 11, weight: '700', family: 'Noto Sans KR' }, color: '#2D2D3F' },
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

// ── 틀린 단어 목록 렌더링 ────────────────────────────
function renderWrongWords() {
  const section = document.getElementById('wrong-words-section');
  const grid    = document.getElementById('wrong-words-grid');
  grid.innerHTML = '';

  if (state.wrongWords.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';

  // 카테고리 이모지 매핑
  const CAT_EMOJI = {
    기능어:'🔤', 동사:'🏃', 형용사:'🌈', 부사:'⚡', 숫자:'🔢', 색깔:'🎨',
    신체:'👤', 감정:'💛', 음식:'🍎', 동물:'🐾', 장소:'📍', 날씨:'🌤️',
    교통:'🚗', 학용품:'📚', 옷:'👕', 자연:'🌿', 감각:'✨', 운동:'⚽',
    건강:'💊', 직업:'🔧', 이야기:'📖', 접속사:'🔗', 시간:'⏰', 공간:'📐',
    추상부사:'💭', 명사:'📦',
  };

  state.wrongWords.forEach(w => {
    const chip = document.createElement('div');
    chip.className = 'wrong-word-chip';
    chip.innerHTML = `
      <div class="wrong-word-en">${w.word}</div>
      <div class="wrong-word-kr">${w.korean}</div>
      <div class="wrong-word-cat">${CAT_EMOJI[w.category] || '📌'} ${w.category}</div>
    `;
    grid.appendChild(chip);
  });
}

// ── 추천 카드 (나이대 × 카테고리 기반 channels.js 활용) ─────
function renderRecommendation(isTest2, isTest3, estimate) {
  const card = document.getElementById('recommendation-card');

  // 1. 틀린 단어에서 카테고리 빈도 집계
  const catCount = {};
  state.wrongWords.forEach(w => {
    catCount[w.category] = (catCount[w.category] || 0) + 1;
  });

  // 2. 약점 카테고리 top3
  const weakCats = Object.entries(catCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([cat]) => cat);

  // 3. 카테고리별 학습 팁 매핑
  const CAT_TIPS = {
    기능어: '짧은 영어 노래로 기능어를 자연스럽게 노출해보세요',
    동사:   '동작 단어는 몸으로 같이 움직이며 익혀봐요 (TPR)',
    형용사: '그림책 읽으며 사물 모양·상태를 영어로 말해봐요',
    부사:   '일상 대화에서 very, really, so를 자주 써봐요',
    숫자:   '숫자 세기 게임을 영어로 해봐요',
    색깔:   '그림 그리며 색깔 이름을 영어로 말해봐요',
    신체:   'Head, Shoulders, Knees and Toes 노래로 신체 단어를!',
    감정:   '감정 일기를 영어로 한 줄씩 써봐요',
    음식:   '식사 시간에 음식 이름을 영어로 말해봐요',
    동물:   '동물원·자연 다큐로 동물 단어를 재미있게 확장해요',
    장소:   '외출할 때 장소 이름을 영어로 말해봐요',
    날씨:   '매일 아침 날씨를 영어로 말하는 습관을 만들어봐요',
    교통:   '이동할 때 탈것 이름을 영어로 말해봐요',
    학용품: '학용품에 영어 라벨을 붙여봐요',
    옷:     '옷 입을 때 색깔·종류를 영어로 말해봐요',
    자연:   '산책하며 자연물 이름을 영어로 말해봐요',
    감각:   '음식 먹을 때 맛·질감을 영어로 표현해봐요',
    운동:   '운동하며 동작 단어를 몸으로 익혀봐요',
    건강:   '병원·건강 놀이를 영어로 해봐요',
    직업:   '역할 놀이를 영어로 해봐요 (의사, 소방관 등)',
    이야기: '짧은 영어 그림책을 소리 내어 읽어봐요',
    접속사: 'because, but, so로 짧은 문장 만들기 연습을!',
    시간:   '하루 일과를 영어로 말해봐요 (morning, after, then)',
    공간:   '위치 단어(top, bottom, inside)를 놀이로 익혀봐요',
    추상부사:'however, finally 등은 영어 원서 리더스북으로 익혀봐요',
    명사:   '집 안 물건에 영어 이름 라벨을 붙여봐요',
  };

  // 4. channels.js에서 나이대+카테고리 기반 채널 추천
  const ageGroup = state.ageGroup || '초3-4';  // 혹시 미선택시 폴백
  let recommendedChannels;
  if (weakCats.length > 0) {
    recommendedChannels = getChannelsByAgeAndCategory(ageGroup, weakCats, 3);
  } else {
    recommendedChannels = getChannelsByAge(ageGroup, 3);
  }

  // 5. 채널 부족 시 estimate 기반 기본 추천으로 보충
  if (recommendedChannels.length < 2) {
    const baseRec = isTest3 ? getRecommendation3(estimate) : isTest2 ? getRecommendation2(estimate) : getRecommendation(estimate);
    const usedNames = new Set(recommendedChannels.map(c => c.name));
    baseRec.channels.forEach(ch => {
      if (!usedNames.has(ch.name) && recommendedChannels.length < 3) {
        recommendedChannels.push(ch);
        usedNames.add(ch.name);
      }
    });
  }

  // 6. 팁 생성
  const weakTips = weakCats.length > 0
    ? weakCats.map(cat => `<li><strong>${cat}</strong> 단어가 약해요 → ${CAT_TIPS[cat] || '영상 노출을 늘려봐요'}</li>`).join('')
    : '<li>모든 단어를 잘 알고 있어요! 다음 단계에 도전해봐요 🚀</li>';

  // 7. 채널 카드 렌더링
  const channelsHTML = recommendedChannels.map(ch => {
    const starsStr = '★'.repeat(ch.stars || 3);
    const ageLabel = ch.age || ageGroup;
    const genreLabel = ch.genre || '';
    const chUrl = ch.url || '#';
    const chDesc = ch.desc || '';
    return `
      <a class="channel-chip" href="${chUrl}" target="_blank" rel="noopener">
        <span class="channel-chip-icon">▶</span>
        <span class="channel-chip-info">
          <strong>${ch.name}</strong>
          <span>${chDesc}</span>
          <span class="channel-chip-meta">${ageLabel} · ${genreLabel} · ${starsStr}</span>
        </span>
        <i class="fas fa-external-link-alt channel-chip-link"></i>
      </a>
    `;
  }).join('');

  // 8. 다음 목표
  const baseRec2 = isTest3 ? getRecommendation3(estimate) : isTest2 ? getRecommendation2(estimate) : getRecommendation(estimate);

  // 9. 나이대 배지
  const AGE_EMOJI = { '유아':'🐣', '초1-2':'🌱', '초3-4':'🌿', '초5-6':'🌳' };
  const ageEmoji = AGE_EMOJI[ageGroup] || '🎯';

  card.innerHTML = `
    <div class="rec-weak-label">
      ${weakCats.length > 0
        ? `<span class="rec-weak-text">📊 약점 카테고리:</span><span class="rec-weak-badges">${weakCats.map(c=>`<span class="rec-weak-cat">${c}</span>`).join('')}</span>`
        : '🎉 약점 카테고리 없음! 완벽해요'}
    </div>
    <ul class="rec-tips">${weakTips}</ul>
    <div class="rec-books">
      <div class="rec-books-title">📺 ${ageEmoji} ${ageGroup} 맞춤 추천 채널</div>
      <div class="channels-list">${channelsHTML}</div>
    </div>
    <div class="rec-next-goal">🎯 다음 목표: <strong>${baseRec2.goal}</strong></div>
  `;
}

// ── 다른 테스트 도전 배너 ─────────────────────────────
function renderOtherTestBanner(isTest2, isTest3, estimate) {
  const banner = document.getElementById('other-test-banner');

  if (!isTest2 && !isTest3 && estimate >= 300) {
    // test1(1~500)에서 300개 이상 → test2 도전 유도
    banner.innerHTML = `
      <div class="other-test-card challenge">
        <div class="other-test-emoji">🚀</div>
        <div class="other-test-info">
          <strong>501~1000 테스트에 도전해볼까요?</strong>
          <span>기초 어휘가 탄탄해요! 중·고급 단어도 확인해보세요</span>
        </div>
        <button onclick="startTest('test2')" class="other-test-btn">도전!</button>
      </div>
    `;
  } else if (isTest2 && estimate >= 350) {
    // test2(501~1000)에서 350개 이상 → test3 도전 유도
    banner.innerHTML = `
      <div class="other-test-card challenge">
        <div class="other-test-emoji">🏆</div>
        <div class="other-test-info">
          <strong>1001~1500 테스트에 도전해볼까요?</strong>
          <span>중급 어휘가 탄탄해요! 고급 어휘에 도전해보세요 🚀</span>
        </div>
        <button onclick="startTest('test3')" class="other-test-btn">도전!</button>
      </div>
    `;
  } else if (isTest2 && estimate <= 150) {
    // test2에서 150개 이하 → test1 복습 유도
    banner.innerHTML = `
      <div class="other-test-card review">
        <div class="other-test-emoji">🌱</div>
        <div class="other-test-info">
          <strong>1~500 테스트도 해볼까요?</strong>
          <span>기초 단어를 먼저 탄탄하게 다져봐요!</span>
        </div>
        <button onclick="startTest('test1')" class="other-test-btn">해보기!</button>
      </div>
    `;
  } else if (isTest3 && estimate <= 150) {
    // test3에서 150개 이하 → test2 복습 유도
    banner.innerHTML = `
      <div class="other-test-card review">
        <div class="other-test-emoji">🌿</div>
        <div class="other-test-info">
          <strong>501~1000 테스트도 다시 해볼까요?</strong>
          <span>중급 단어를 더 탄탄하게 다져봐요!</span>
        </div>
        <button onclick="startTest('test2')" class="other-test-btn">해보기!</button>
      </div>
    `;
  } else {
    banner.innerHTML = '';
  }
}

// ══════════════════════════════════════════
//  컨페티
// ══════════════════════════════════════════
function launchConfetti(grade = 'B') {
  const container = document.getElementById('result-confetti');
  container.innerHTML = '';

  // 등급별 조각 수 / 크기 / 색상
  const cfg = {
    'S': { count: 120, maxSize: 14, colors: ['#6C63FF','#FF6584','#FFB347','#43D9A2','#FF6B6B','#FFD700','#9B95FF','#fff'] },
    'A': { count: 80,  maxSize: 12, colors: ['#6C63FF','#FF6584','#43D9A2','#FFB347','#FF6B6B','#9B95FF'] },
    'B': { count: 50,  maxSize: 10, colors: ['#6C63FF','#FF6584','#43D9A2','#FFB347','#9B95FF'] },
    'C': { count: 28,  maxSize: 8,  colors: ['#9B95FF','#43D9A2','#FFB347'] },
    'D': { count: 12,  maxSize: 7,  colors: ['#9B95FF','#c0c0c0'] },
  };
  const c = cfg[grade] || cfg['B'];

  for (let i = 0; i < c.count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = Math.random() * c.maxSize + 5;
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*40 - 10}%;
      background:${c.colors[Math.floor(Math.random()*c.colors.length)]};
      width:${size}px;height:${size}px;
      border-radius:${Math.random()>0.5?'50%':'2px'};
      animation-duration:${Math.random()*2.5+1.2}s;
      animation-delay:${Math.random()*2}s;
    `;
    container.appendChild(p);
  }

  // S등급: 2파 연속 confetti
  if (grade === 'S') {
    setTimeout(() => launchConfettiWave(container, c), 1200);
  }
}

function launchConfettiWave(container, c) {
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const size = Math.random() * 12 + 4;
    p.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*30}%;
      background:${c.colors[Math.floor(Math.random()*c.colors.length)]};
      width:${size}px;height:${size}px;
      border-radius:${Math.random()>0.5?'50%':'3px'};
      animation-duration:${Math.random()*2+1.5}s;
      animation-delay:${Math.random()*1}s;
    `;
    container.appendChild(p);
  }
}

// ══════════════════════════════════════════
//  공유 / 재시작
// ══════════════════════════════════════════
window.shareResult = function () {
  const estimate   = calcEstimate(state.groupResults);
  const isTest2    = state.testType === 'test2';
  const isTest3    = state.testType === 'test3';
  const totalVocab = isTest3 ? 1000 + estimate : isTest2 ? 500 + estimate : estimate;
  const rangeLabel = isTest3 ? '1~1500단어 중' : isTest2 ? '1~1000단어 중' : '1~500단어 중';
  const url   = location.href;
  const text = `📖 ${state.childName}의 영어 어휘 테스트 결과\n🌟 ${rangeLabel} 약 ${totalVocab}개 알고 있어요!\n\n🔗 우리 아이 어휘량도 테스트해보세요 😊\n${url}`;
  if (navigator.share) {
    navigator.share({ title: '영어 어휘 테스트 결과', text, url })
      .catch(() => copyText(text));
  } else {
    copyText(text);
  }
};

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('📋 결과가 복사됐어요!'))
    .catch(() => showToast('공유를 지원하지 않는 브라우저예요'));
}

// ══════════════════════════════════════════
//  결과 이미지 저장
// ══════════════════════════════════════════
window.saveResultImage = function () {
  const hero = document.querySelector('.result-hero');
  if (!hero) return;
  track('save-image');   // 퍼널: 결과 이미지 저장
  if (typeof html2canvas === 'undefined') {
    showToast('이미지 라이브러리 로딩 중이에요. 잠시 후 다시 눌러주세요!');
    return;
  }
  showToast('이미지 생성 중... 🎨');
  html2canvas(hero, {
    backgroundColor: '#ffffff',
    scale: 2,
    useCORS: true,
    logging: false,
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `${state.childName}_어휘테스트결과.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('📸 이미지가 저장됐어요!');
  }).catch(() => {
    showToast('이미지 저장에 실패했어요. 스크린샷을 이용해 주세요!');
  });
};

// ══════════════════════════════════════════
//  localStorage 결과 저장 & 히스토리
// ══════════════════════════════════════════
const HISTORY_KEY = 'vocaTestHistory';
const MAX_HISTORY = 10;

function saveResultToHistory(totalVocab, grade, testType, childName) {
  const history = loadHistory();
  const entry = {
    id:        Date.now(),
    date:      new Date().toLocaleDateString('ko-KR', { month:'short', day:'numeric' }),
    childName,
    testType,
    totalVocab,
    grade:     grade.grade,
    color:     grade.color,
  };
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch(e) {}
  return history;
}

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch(e) { return []; }
}

function renderHistory(currentTotal, testType) {
  const history = loadHistory();
  // testType 상관없이 전체 히스토리 비교 (totalVocab은 이미 누적 총 어휘량이라 비교 가능)
  const filtered = history;
  const section  = document.getElementById('history-section');
  const list     = document.getElementById('history-list');

  if (filtered.length <= 1) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = '';

  filtered.forEach((h, i) => {
    const isCurrent = (i === 0);
    const prev = filtered[i + 1];
    let diffHTML = '';
    if (prev) {
      const diff = h.totalVocab - prev.totalVocab;
      if (diff > 0)      diffHTML = `<span class="history-diff up">▲${diff}</span>`;
      else if (diff < 0) diffHTML = `<span class="history-diff down">▼${Math.abs(diff)}</span>`;
      else               diffHTML = `<span class="history-diff same">━ 동일</span>`;
    }
    const testLabel = { test1: 'T1', test2: 'T2', test3: 'T3' }[h.testType] || '';
    const item = document.createElement('div');
    item.className = 'history-item' + (isCurrent ? ' history-current' : '');
    item.innerHTML = `
      <span class="history-date">${h.date}</span>
      <span class="history-name">${h.childName}</span>
      <span class="history-testtype">${testLabel}</span>
      ${diffHTML}
      <span class="history-score">${h.totalVocab}<small style="font-size:0.6em;font-weight:600">개</small></span>
      <span class="history-grade" style="background:${h.color}">${h.grade}</span>
      ${isCurrent ? '<span class="history-current-badge">이번</span>' : ''}
    `;
    list.appendChild(item);
  });
}

// ══════════════════════════════════════════
//  나가기 확인 팝업
// ══════════════════════════════════════════
function isTestActive() {
  return document.getElementById('screen-test')?.classList.contains('active');
}

window.closeExitModal = function () {
  document.getElementById('exit-modal').classList.remove('show');
};

window.confirmExit = function () {
  _pronounce.stop();
  document.getElementById('exit-modal').classList.remove('show');
  showScreen('screen-intro');
};

// 테스트 중 브라우저 뒤로가기 가로채기
window.addEventListener('popstate', () => {
  if (isTestActive()) {
    history.pushState({ test: true }, '', location.href);
    document.getElementById('exit-modal').classList.add('show');
  }
});

window.retryTest = function () {
  showScreen('screen-intro');
};

// ══════════════════════════════════════════
//  유틸
// ══════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.scrollTop = 0;
}

function calcEstimate(groupResults) {
  return groupResults.reduce((sum, r) => sum + Math.round((r.correct / r.total) * 100), 0);
}
// (calcEstimateLib imported but using local version for consistency)

function animateCount(elId, from, to, duration) {
  const el = document.getElementById(elId);
  const start = performance.now();
  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ══════════════════════════════════════════
//  업데이트 안내 팝업 (기간 한정 노출 + 1회 확인 후 재노출 안 함)
// ══════════════════════════════════════════
(function initUpdateModal() {
  const UPDATE_ID   = 'v1.15-2026-08-01';         // 이 업데이트의 고유 식별자
  const EXPIRE_DATE = new Date('2026-08-08T23:59:59'); // 노출 종료일 (공개일로부터 1주일)
  const STORAGE_KEY = 'updateNoticeSeen';

  try {
    const now = new Date();
    if (now > EXPIRE_DATE) return;                       // 기간 지나면 아예 노출 안 함
    if (localStorage.getItem(STORAGE_KEY) === UPDATE_ID) return; // 이미 확인한 사용자면 스킵

    const overlay = document.getElementById('update-modal-overlay');
    if (overlay) overlay.style.display = 'flex';

    window.closeUpdateModal = function () {
      try { localStorage.setItem(STORAGE_KEY, UPDATE_ID); } catch (e) {}
      if (overlay) overlay.style.display = 'none';
    };
  } catch (e) {}
})();
