/* =============================================
   트로트스타 팬사이트 - main.js
   ============================================= */

// ── 가수 데이터 ──────────────────────────────────────
const SINGERS = [
  {
    id: 'lim',
    name: '임영웅',
    en: 'Lim Young-woong',
    rank: '#1 트로트 스타',
    emoji: '🏆',
    color: '#e03c31',
    desc: '미스터트롯 1위 출신. "이제 나만 믿어요", "별빛 같은 나의 사랑아" 등 수많은 히트곡으로 대한민국을 열광시킨 트로트계의 아이콘.',
    tags: ['미스터트롯1위', '팬덤영웅시대', '영탄기'],
    ytSearch: '임영웅+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/herolovelim',
    ytChannel: 'https://www.youtube.com/@lim_young_woong_official',
    insta: 'https://www.instagram.com/lim_young_woong_official/',
  },
  {
    id: 'young',
    name: '영탁',
    en: 'Young-tak',
    rank: '#2 트로트 스타',
    emoji: '🎸',
    color: '#00b4d8',
    desc: '미스터트롯 2위. "막걸리 한 잔"으로 전 국민을 사로잡은 개성 넘치는 트로트 가수. 특유의 카리스마와 무대 매너로 팬들의 사랑 독차지.',
    tags: ['막걸리한잔', '미스터트롯2위', '탁탁탁탁'],
    ytSearch: '영탁+막걸리한잔',
    cafeUrl: 'https://cafe.naver.com/youngtak',
    ytChannel: 'https://www.youtube.com/@youngtak_official',
    insta: 'https://www.instagram.com/youngtak_official/',
  },
  {
    id: 'kimho',
    name: '김호중',
    en: 'Kim Ho-joong',
    rank: '#3 트로트 스타',
    emoji: '🎻',
    color: '#4361ee',
    desc: '미스터트롯 3위 출신의 클래식 성악 전공 트로트 가수. 폭발적인 성량과 음악적 깊이로 클래식과 트로트를 넘나들며 활동 중.',
    tags: ['사랑한다', '클래식트로트', '아리스'],
    ytSearch: '김호중+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/kimhojoong',
    ytChannel: 'https://www.youtube.com/@KimHoJoong',
    insta: 'https://www.instagram.com/kimhojoong_official/',
  },
  {
    id: 'lee',
    name: '이찬원',
    en: 'Lee Chan-won',
    rank: '#4 트로트 스타',
    emoji: '🌟',
    color: '#2ecc71',
    desc: '미스터트롯 4위. "진또배기", "찐이야" 등으로 활발하게 활동 중. 밝고 친근한 이미지로 각종 예능에서도 두각을 나타내고 있다.',
    tags: ['진또배기', '찐이야', '워니'],
    ytSearch: '이찬원+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/leechanwon',
    ytChannel: 'https://www.youtube.com/@leechanwon_official',
    insta: 'https://www.instagram.com/lee_chanwon_official/',
  },
  {
    id: 'jung',
    name: '정동원',
    en: 'Jeong Dong-won',
    rank: '미스터트롯 TOP7',
    emoji: '✨',
    color: '#f9c74f',
    desc: '미스터트롯 최연소 출전자. "꽃길", "오빠야" 등으로 어린 나이에도 성숙한 감성을 선보이며 세대를 초월한 팬층을 보유하고 있다.',
    tags: ['꽃길', '최연소트로트', '동둥이'],
    ytSearch: '정동원+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/jeongdongwon',
    ytChannel: 'https://www.youtube.com/@jeongdongwon',
    insta: 'https://www.instagram.com/jeongdongwon_official/',
  },
  {
    id: 'jang',
    name: '장민호',
    en: 'Jang Min-ho',
    rank: '미스터트롯 TOP7',
    emoji: '💜',
    color: '#7b2ff7',
    desc: '미스터트롯 TOP7. "남자 대 남자" 등 매력적인 목소리로 팬들을 사로잡고 있으며, 예능 감각도 뛰어나 방송에서도 큰 인기를 얻고 있다.',
    tags: ['남자대남자', '민호', '호랑나비'],
    ytSearch: '장민호+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/jangminho',
    ytChannel: 'https://www.youtube.com/@jangminho_official',
    insta: 'https://www.instagram.com/jangminho_official/',
  },
  {
    id: 'park',
    name: '박지현',
    en: 'Park Ji-hyun',
    rank: '미스트롯 우승',
    emoji: '🌸',
    color: '#e91e8c',
    desc: '미스트롯 시즌2 진(1위). 파워풀한 가창력과 섬세한 감성 표현으로 여성 트로트의 새 역사를 쓰고 있는 트로트 스타.',
    tags: ['미스트롯2위', '파워풀보컬', '지현아'],
    ytSearch: '박지현+트로트',
    cafeUrl: 'https://cafe.naver.com/parkjihyun',
    ytChannel: 'https://www.youtube.com/@parkjihyun_official',
    insta: 'https://www.instagram.com/parkjihyun_official/',
  },
  {
    id: 'kimhee',
    name: '김희재',
    en: 'Kim Hee-jae',
    rank: '미스터트롯 TOP7',
    emoji: '🔥',
    color: '#ff7f50',
    desc: '미스터트롯 TOP7. "청춘부두", "총각" 등으로 활발히 활동 중. 탄탄한 기본기와 폭발적인 에너지로 공연장을 가득 채우는 퍼포머.',
    tags: ['청춘부두', '총각', '히재'],
    ytSearch: '김희재+뮤직비디오',
    cafeUrl: 'https://cafe.naver.com/kimheejae',
    ytChannel: 'https://www.youtube.com/@kimheejae_official',
    insta: 'https://www.instagram.com/kimheejae_official/',
  },
];

// ── YouTube 영상 데이터 ──────────────────────────────
const VIDEOS = [
  { singer: '임영웅', title: '임영웅 - 이제 나만 믿어요', vid: 'BaFpEo5KXIo', views: '3,200만 조회' },
  { singer: '임영웅', title: '임영웅 - 별빛 같은 나의 사랑아', vid: 'pK3AuyCZbg4', views: '2,800만 조회' },
  { singer: '영탁', title: '영탁 - 막걸리 한 잔', vid: 'BHd_BXcT-UQ', views: '2,100만 조회' },
  { singer: '영탁', title: '영탁 - 니가 왜 거기서 나와', vid: 'Iq8XA0Ym0Cg', views: '1,500만 조회' },
  { singer: '김호중', title: '김호중 - 사랑한다', vid: 'JhVJQ9K7OM4', views: '1,900만 조회' },
  { singer: '김호중', title: '김호중 - 고맙소', vid: 'S7fXmqFSYHg', views: '1,200만 조회' },
  { singer: '이찬원', title: '이찬원 - 진또배기', vid: 'v5VDfJCQyYg', views: '1,800만 조회' },
  { singer: '이찬원', title: '이찬원 - 찐이야', vid: 'u6LBzVnPnKQ', views: '1,100만 조회' },
  { singer: '정동원', title: '정동원 - 꽃길', vid: 'xVLsNaRsHmQ', views: '980만 조회' },
  { singer: '장민호', title: '장민호 - 남자 대 남자', vid: 'b4PYsGZLHQY', views: '850만 조회' },
  { singer: '박지현', title: '박지현 - 오직 너', vid: 'JmgaStP3ckY', views: '790만 조회' },
  { singer: '김희재', title: '김희재 - 청춘부두', vid: 'qYj4TnJZJhA', views: '720만 조회' },
];

// ── 일정 데이터 (샘플) ──────────────────────────────
const SCHEDULES = [
  { month: 'APR', day: '05', singer: '임영웅', title: '임영웅 전국투어 콘서트 IM HERO', place: '서울 잠실종합운동장 주경기장', tag: '콘서트', color: '#e03c31' },
  { month: 'APR', day: '12', singer: '이찬원', title: '이찬원 전국 팬미팅 LOVE SONG', place: '부산 BEXCO 오디토리움', tag: '팬미팅', color: '#2ecc71' },
  { month: '4월', day: '19', singer: '영탁', title: '영탁 단독 콘서트 - 탁탁탁', place: '대구 엑스코 컨벤션센터', tag: '콘서트', color: '#00b4d8' },
  { month: 'MAY', day: '03', singer: '장민호', title: '장민호 전국투어 2025', place: '인천 파라다이스시티 아트스페이스', tag: '콘서트', color: '#7b2ff7' },
  { month: 'MAY', day: '10', singer: '정동원', title: '정동원 팬미팅 FLOWER ROAD', place: '서울 KBS 아레나', tag: '팬미팅', color: '#f9c74f' },
  { month: 'MAY', day: '17', singer: '박지현', title: '박지현 전국투어 지현 in CONCERT', place: '서울 올림픽홀', tag: '콘서트', color: '#e91e8c' },
  { month: 'JUN', day: '07', singer: '김희재', title: '김희재 콘서트 HEEJAE SHOW', place: '경기도 수원 수원올림픽스포츠문화센터', tag: '콘서트', color: '#ff7f50' },
  { month: 'JUN', day: '21', singer: '김호중', title: '김호중 클래식 & 트로트 갈라쇼', place: '서울 예술의 전당 콘서트홀', tag: '갈라쇼', color: '#4361ee' },
];

// ── 뉴스 RSS 연동 ─────────────────────────────────────
const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';
const NAVER_NEWS = (q) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q + ' 트로트')}&hl=ko&gl=KR&ceid=KR:ko`;

let allNews = [];
let currentSinger = 'all';

async function fetchNews(singerName) {
  const url = RSS2JSON + encodeURIComponent(NAVER_NEWS(singerName));
  const res = await fetch(url);
  const json = await res.json();
  return (json.items || []).slice(0, 6).map(item => ({
    singer: singerName,
    title: item.title.replace(/<[^>]+>/g, ''),
    link: item.link,
    date: new Date(item.pubDate).toLocaleDateString('ko-KR'),
    thumbnail: item.thumbnail || item.enclosure?.link || null,
    source: item.author || extractSource(item.link),
  }));
}

function extractSource(url) {
  try { return new URL(url).hostname.replace('www.',''); } catch { return '뉴스'; }
}

async function loadAllNews() {
  const status = document.getElementById('newsStatus');
  status.textContent = '최신 뉴스를 불러오는 중...';
  const results = await Promise.allSettled(
    SINGERS.map(s => fetchNews(s.name))
  );
  allNews = results.flatMap((r, i) =>
    r.status === 'fulfilled'
      ? r.value.map(n => ({ ...n, singerId: SINGERS[i].id, singerColor: SINGERS[i].color }))
      : []
  );
  // 날짜 기준 내림차순
  allNews.sort((a, b) => new Date(b.date) - new Date(a.date));
  status.textContent = '';
  renderNews();
}

function renderNews() {
  const grid = document.getElementById('newsGrid');
  const filtered = currentSinger === 'all'
    ? allNews
    : allNews.filter(n => n.singer === currentSinger);

  if (!filtered.length) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:2rem;">뉴스를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.</p>';
    return;
  }
  grid.innerHTML = filtered.slice(0, 18).map(n => `
    <article class="news-card">
      ${n.thumbnail
        ? `<img class="news-card-img" src="${n.thumbnail}" alt="${n.title}" loading="lazy" onerror="this.className='news-card-img fallback';this.outerHTML='<div class=\\'news-card-img fallback\\'>🎵</div>'">`
        : `<div class="news-card-img fallback">🎵</div>`}
      <div class="news-card-body">
        <span class="news-singer-badge" style="background:${n.singerColor}">${n.singer}</span>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-date">📅 ${n.date}</p>
        <p class="news-source">📰 ${n.source}</p>
        <a href="${n.link}" target="_blank" rel="noopener noreferrer" class="news-read-more">자세히 보기 →</a>
      </div>
    </article>
  `).join('');
}

// ── 탭 클릭 ────────────────────────────────────────────
function initNewsTabs() {
  document.getElementById('newsTabs').addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentSinger = tab.dataset.singer;
    renderNews();
  });
}

// ── 가수 카드 렌더링 ────────────────────────────────────
function renderSingers() {
  document.getElementById('singersGrid').innerHTML = SINGERS.map(s => `
    <article class="singer-card">
      <div class="singer-card-top" style="background:linear-gradient(135deg,${s.color}cc,${s.color}44)">
        <span class="singer-rank">${s.rank}</span>
        <span class="singer-avatar">${s.emoji}</span>
      </div>
      <div class="singer-card-body">
        <h3 class="singer-name">${s.name}</h3>
        <p class="singer-en">${s.en}</p>
        <p class="singer-desc">${s.desc}</p>
        <div class="singer-tags">
          ${s.tags.map(t => `<span class="singer-tag" style="background:${s.color}">#${t}</span>`).join('')}
        </div>
        <div class="singer-links">
          <a href="${s.ytChannel}" target="_blank" rel="noopener" class="singer-link">▶ 유튜브</a>
          <a href="${s.insta}" target="_blank" rel="noopener" class="singer-link">📷 인스타</a>
          <a href="${s.cafeUrl}" target="_blank" rel="noopener" class="singer-link">☕ 팬카페</a>
        </div>
      </div>
    </article>
  `).join('');
}

// ── 비디오 렌더링 ────────────────────────────────────────
let currentVideoSinger = 'all';

function renderVideoTabs() {
  const singers = ['all', ...SINGERS.map(s => s.name)];
  const labels = ['전체', ...SINGERS.map(s => s.name)];
  document.getElementById('videoTabs').innerHTML = singers.map((s, i) => `
    <button class="vtab ${s === 'all' ? 'active' : ''}" data-vsinger="${s}">${labels[i]}</button>
  `).join('');

  document.getElementById('videoTabs').addEventListener('click', e => {
    const btn = e.target.closest('.vtab');
    if (!btn) return;
    document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    currentVideoSinger = btn.dataset.vsinger;
    renderVideos();
  });
}

function renderVideos() {
  const filtered = currentVideoSinger === 'all'
    ? VIDEOS
    : VIDEOS.filter(v => v.singer === currentVideoSinger);

  const singerColor = currentVideoSinger === 'all' ? '#e03c31'
    : (SINGERS.find(s => s.name === currentVideoSinger)?.color || '#e03c31');

  document.getElementById('videoGrid').innerHTML = filtered.map(v => `
    <div class="video-card">
      <a href="https://www.youtube.com/watch?v=${v.vid}" target="_blank" rel="noopener" class="video-thumb">
        <img src="https://img.youtube.com/vi/${v.vid}/hqdefault.jpg" alt="${v.title}" loading="lazy" />
        <div class="video-play-btn"></div>
      </a>
      <div class="video-card-body">
        <p class="video-singer" style="color:${singerColor === '#e03c31' ? (SINGERS.find(s=>s.name===v.singer)?.color||'#e03c31') : singerColor}">♪ ${v.singer}</p>
        <p class="video-title">${v.title}</p>
        <p class="video-views">👁 ${v.views}</p>
      </div>
    </div>
  `).join('');
}

// ── 일정 렌더링 ──────────────────────────────────────────
function renderSchedule() {
  document.getElementById('scheduleList').innerHTML = SCHEDULES.map(s => `
    <div class="schedule-item">
      <div class="schedule-date" style="background:${s.color}">
        <div class="schedule-date-month">${s.month}</div>
        <div class="schedule-date-day">${s.day}</div>
      </div>
      <div class="schedule-info">
        <p class="schedule-singer" style="color:${s.color}">🎤 ${s.singer}</p>
        <p class="schedule-title">${s.title}</p>
        <p class="schedule-place">📍 ${s.place}</p>
      </div>
      <span class="schedule-tag" style="background:${s.color}">${s.tag}</span>
    </div>
  `).join('');
}

// ── SNS 채널 렌더링 ──────────────────────────────────────
function renderSNS() {
  document.getElementById('snsGrid').innerHTML = SINGERS.map(s => `
    <div class="sns-card">
      <div class="sns-card-header">
        <span class="sns-icon">${s.emoji}</span>
        <span class="sns-singer-name" style="color:${s.color}">${s.name}</span>
      </div>
      <div class="sns-links-row">
        <a href="${s.ytChannel}" target="_blank" rel="noopener" class="sns-link-item">
          <span class="sns-link-emoji">▶</span> 공식 유튜브 채널
        </a>
        <a href="${s.insta}" target="_blank" rel="noopener" class="sns-link-item">
          <span class="sns-link-emoji">📷</span> 인스타그램
        </a>
        <a href="${s.cafeUrl}" target="_blank" rel="noopener" class="sns-link-item">
          <span class="sns-link-emoji">☕</span> 네이버 팬카페
        </a>
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.name)}" target="_blank" rel="noopener" class="sns-link-item">
          <span class="sns-link-emoji">🔍</span> 유튜브 검색
        </a>
      </div>
    </div>
  `).join('');
}

// ── 다크모드 ─────────────────────────────────────────────
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('trot-theme') || 'light';
  document.body.dataset.theme = saved;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('trot-theme', next);
  });
}

// ── 모바일 메뉴 ──────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// ── 스크롤 애니메이션 ─────────────────────────────────────
function initScrollAnim() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.singer-card, .news-card, .video-card, .schedule-item, .sns-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// ── 제휴 문의 폼 ──────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('formMsg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = '전송 중...';
    msg.className = 'form-msg';
    msg.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        msg.className = 'form-msg success';
        msg.textContent = '✅ 문의가 성공적으로 접수되었습니다. 2 영업일 내 답변 드리겠습니다!';
        form.reset();
      } else {
        throw new Error('server');
      }
    } catch {
      msg.className = 'form-msg error';
      msg.textContent = '❌ 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
    } finally {
      btn.disabled = false;
      btn.textContent = '문의 보내기 ✉️';
      msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// ── 초기화 ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initMobileMenu();
  renderSingers();
  renderVideoTabs();
  renderVideos();
  renderSchedule();
  renderSNS();
  initContactForm();
  initNewsTabs();
  initScrollAnim();

  // 뉴스는 약간 지연해서 로드 (UX)
  setTimeout(() => loadAllNews(), 300);
});
