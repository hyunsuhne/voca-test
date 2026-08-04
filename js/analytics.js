// ══════════════════════════════════════════════════════════
//  analytics.js — 퍼널 이벤트(GoatCounter) + 익명 결과 수집(Supabase)
//  v1.18 신규
//
//  ★ 설정 방법 (두 줄만 채우면 됩니다):
//    1) GOATCOUNTER_CODE: GoatCounter 가입 시 정한 사이트 코드
//       예) 'hyunsuhne' → https://hyunsuhne.goatcounter.com
//    2) SUPABASE_URL / SUPABASE_ANON_KEY: Supabase 프로젝트의
//       Settings → API 에서 복사 (anon public key만 사용, 안전함)
//
//  ★ 값이 비어 있으면 모든 기능이 조용히 꺼집니다(no-op).
//    → 설정 전에 배포해도 앱 동작에 아무 영향 없음
// ══════════════════════════════════════════════════════════

const GOATCOUNTER_CODE  = 'hyunsuhne';
const SUPABASE_URL      = 'https://bpfpwbimdetoyzdtapfm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_mHXeJqEVqvpou9pwKvu0ig_mu_x0N30';

// ── 익명 ID (개인 식별 불가한 랜덤값, 재응시 추적용) ──────
function getAnonId() {
  try {
    let id = localStorage.getItem('voca_anon_id');
    if (!id) {
      id = 'a_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      localStorage.setItem('voca_anon_id', id);
    }
    return id;
  } catch (e) {
    return null; // localStorage 차단 환경(시크릿 모드 등)
  }
}

// ══════════════════════════════════════════
//  ① GoatCounter — 퍼널 이벤트
// ══════════════════════════════════════════

// GoatCounter 스크립트 동적 로드 (코드가 설정된 경우에만)
(function loadGoatCounter() {
  if (!GOATCOUNTER_CODE) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(s);
})();

/**
 * 퍼널 이벤트 기록.
 * @param {string} name 이벤트명 (예: 'test-start-test1')
 * 스크립트가 아직 로드 전이면 짧게 재시도 후 포기 (앱 동작엔 무영향)
 */
export function track(name) {
  if (!GOATCOUNTER_CODE) return;
  const fire = (tries) => {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'event/' + name, event: true });
    } else if (tries > 0) {
      setTimeout(() => fire(tries - 1), 1000);
    }
  };
  fire(5);
}

// ══════════════════════════════════════════
//  ② Supabase — 익명 결과 수집
// ══════════════════════════════════════════

/**
 * 테스트 완주 시 익명 결과 1건 전송 (fire-and-forget).
 * 실패해도 조용히 무시 — 사용자 경험에 영향 없음.
 * @param {object} r { ageGroup, exposure, testType, estimate, totalVocab,
 *                     groupScores(배열), durationSec }
 */
export function submitResult(r) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  try {
    // 새 키 체계(sb_publishable_...)는 apikey 헤더만 사용,
    // 구 키 체계(JWT)는 Authorization 헤더도 함께 전송
    const headers = {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Prefer': 'return=minimal',
    };
    if (!SUPABASE_ANON_KEY.startsWith('sb_')) {
      headers['Authorization'] = `Bearer ${SUPABASE_ANON_KEY}`;
    }
    fetch(`${SUPABASE_URL}/rest/v1/results`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        anon_id:      getAnonId(),
        age_group:    r.ageGroup,
        exposure:     r.exposure,
        test_type:    r.testType,
        estimate:     r.estimate,
        total_vocab:  r.totalVocab,
        group_scores: r.groupScores,
        duration_sec: r.durationSec,
      }),
    }).catch(() => {});
  } catch (e) { /* no-op */ }
}

// ══════════════════════════════════════════
//  ③ 결과 화면 링크 클릭 추적 (이벤트 위임)
//     — 채널 칩은 동적 렌더링이라 document 레벨에서 잡음
// ══════════════════════════════════════════
document.addEventListener('click', (e) => {
  const chip = e.target.closest('.channel-chip');
  if (chip) track('channel-click');
}, { capture: true, passive: true });
