/* =============================================
   트로트스타 팬사이트 - main.js  (60대+ 친화 클릭 UX)
   ============================================= */

// ── 가수 데이터 ──────────────────────────────────────────
const SINGERS = [
  {
    id: 'lim',
    name: '임영웅',
    en: 'Lim Young-woong',
    rank: '미스터트롯 1위',
    emoji: '🏆',
    color: '#e03c31',
    desc: '미스터트롯 1위. "이제 나만 믿어요", "별빛 같은 나의 사랑아", "사랑은 늘 도망가" 등 수많은 히트곡으로 대한민국을 열광시킨 트로트계의 아이콘. 팬덤 "영웅시대"와 함께 최고의 인기를 자랑합니다.',
    tags: ['미스터트롯1위', '영웅시대', '이제나만믿어요'],
    // 항상 작동하는 검색 URL 사용
    ytSearch: 'https://www.youtube.com/results?search_query=임영웅+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=임영웅',
    instaSearch: 'https://www.instagram.com/explore/tags/임영웅/',
    naverCafe: 'https://search.naver.com/search.naver?query=임영웅+팬카페',
  },
  {
    id: 'young',
    name: '영탁',
    en: 'Young-tak',
    rank: '미스터트롯 2위',
    emoji: '🎸',
    color: '#00b4d8',
    desc: '미스터트롯 2위. "막걸리 한 잔"으로 전 국민을 사로잡은 개성 넘치는 트로트 가수. 특유의 카리스마와 무대 매너로 팬들의 사랑을 독차지하고 있습니다.',
    tags: ['막걸리한잔', '미스터트롯2위', '탁탁탁'],
    ytSearch: 'https://www.youtube.com/results?search_query=영탁+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=영탁+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/영탁/',
    naverCafe: 'https://search.naver.com/search.naver?query=영탁+팬카페',
  },
  {
    id: 'kimho',
    name: '김호중',
    en: 'Kim Ho-joong',
    rank: '미스터트롯 3위',
    emoji: '🎻',
    color: '#4361ee',
    desc: '미스터트롯 3위. 성악을 전공한 트로트 가수로 폭발적인 성량과 음악적 깊이로 클래식과 트로트를 넘나들며 활동 중. 팬덤 "아리스"와 함께하고 있습니다.',
    tags: ['사랑한다', '클래식트로트', '아리스'],
    ytSearch: 'https://www.youtube.com/results?search_query=김호중+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=김호중+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/김호중/',
    naverCafe: 'https://search.naver.com/search.naver?query=김호중+팬카페',
  },
  {
    id: 'lee',
    name: '이찬원',
    en: 'Lee Chan-won',
    rank: '미스터트롯 4위',
    emoji: '🌟',
    color: '#2ecc71',
    desc: '미스터트롯 4위. "진또배기", "찐이야" 등으로 활발하게 활동 중. 밝고 친근한 이미지로 각종 예능에서도 두각을 나타내는 만능 엔터테이너입니다.',
    tags: ['진또배기', '찐이야', '워니'],
    ytSearch: 'https://www.youtube.com/results?search_query=이찬원+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=이찬원+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/이찬원/',
    naverCafe: 'https://search.naver.com/search.naver?query=이찬원+팬카페',
  },
  {
    id: 'jung',
    name: '정동원',
    en: 'Jeong Dong-won',
    rank: '미스터트롯 TOP7',
    emoji: '✨',
    color: '#e6a817',
    desc: '미스터트롯 최연소 TOP7. "꽃길", "오빠야" 등으로 어린 나이에도 성숙한 감성을 선보이며 세대를 초월한 팬층을 보유하고 있습니다.',
    tags: ['꽃길', '오빠야', '동둥이'],
    ytSearch: 'https://www.youtube.com/results?search_query=정동원+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=정동원+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/정동원/',
    naverCafe: 'https://search.naver.com/search.naver?query=정동원+팬카페',
  },
  {
    id: 'jang',
    name: '장민호',
    en: 'Jang Min-ho',
    rank: '미스터트롯 TOP7',
    emoji: '💜',
    color: '#7b2ff7',
    desc: '미스터트롯 TOP7. "남자 대 남자" 등 매력적인 목소리로 팬들을 사로잡고 있으며, 뛰어난 예능 감각으로 방송에서도 큰 인기를 얻고 있습니다.',
    tags: ['남자대남자', '장민호', '민호'],
    ytSearch: 'https://www.youtube.com/results?search_query=장민호+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=장민호+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/장민호/',
    naverCafe: 'https://search.naver.com/search.naver?query=장민호+팬카페',
  },
  {
    id: 'park',
    name: '박지현',
    en: 'Park Ji-hyun',
    rank: '미스트롯2 진',
    emoji: '🌸',
    color: '#e91e8c',
    desc: '미스트롯 시즌2 진(1위). 파워풀한 가창력과 섬세한 감성 표현으로 여성 트로트의 새 역사를 쓰고 있는 트로트 스타입니다.',
    tags: ['미스트롯2진', '파워풀보컬', '지현아'],
    ytSearch: 'https://www.youtube.com/results?search_query=박지현+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=박지현+트로트가수',
    instaSearch: 'https://www.instagram.com/explore/tags/박지현트로트/',
    naverCafe: 'https://search.naver.com/search.naver?query=박지현+트로트+팬카페',
  },
  {
    id: 'kimhee',
    name: '김희재',
    en: 'Kim Hee-jae',
    rank: '미스터트롯 TOP7',
    emoji: '🔥',
    color: '#ff7f50',
    desc: '미스터트롯 TOP7. "청춘부두", "총각" 등으로 활발히 활동 중. 탄탄한 기본기와 폭발적인 에너지로 공연장을 가득 채우는 무대 위의 열정맨.',
    tags: ['청춘부두', '총각', '히재'],
    ytSearch: 'https://www.youtube.com/results?search_query=김희재+트로트',
    naverSearch: 'https://search.naver.com/search.naver?where=news&query=김희재+트로트',
    instaSearch: 'https://www.instagram.com/explore/tags/김희재/',
    naverCafe: 'https://search.naver.com/search.naver?query=김희재+팬카페',
  },
];

// ── 가수별 YouTube 영상 ────────────────────────────────────
const VIDEOS = {
  lim:    [{ title: '임영웅 - 이제 나만 믿어요 MV', vid: 'BaFpEo5KXIo', views: '3,200만' },
           { title: '임영웅 - 별빛 같은 나의 사랑아', vid: 'pK3AuyCZbg4', views: '2,800만' },
           { title: '임영웅 - 사랑은 늘 도망가', vid: 'Cd6oGDvFi40', views: '2,100만' }],
  young:  [{ title: '영탁 - 막걸리 한 잔 MV', vid: 'BHd_BXcT-UQ', views: '2,100만' },
           { title: '영탁 - 니가 왜 거기서 나와', vid: 'Iq8XA0Ym0Cg', views: '1,500만' }],
  kimho:  [{ title: '김호중 - 사랑한다 MV', vid: 'JhVJQ9K7OM4', views: '1,900만' },
           { title: '김호중 - 고맙소', vid: 'S7fXmqFSYHg', views: '1,200만' }],
  lee:    [{ title: '이찬원 - 진또배기 MV', vid: 'v5VDfJCQyYg', views: '1,800만' },
           { title: '이찬원 - 찐이야', vid: 'u6LBzVnPnKQ', views: '1,100만' }],
  jung:   [{ title: '정동원 - 꽃길 MV', vid: 'xVLsNaRsHmQ', views: '980만' },
           { title: '정동원 - 오빠야', vid: '9f-ZbMO7vGs', views: '750만' }],
  jang:   [{ title: '장민호 - 남자 대 남자 MV', vid: 'b4PYsGZLHQY', views: '850만' },
           { title: '장민호 - 보라빛 엽서', vid: 'cJfpHgLHqHE', views: '620만' }],
  park:   [{ title: '박지현 - 오직 너 MV', vid: 'JmgaStP3ckY', views: '790만' },
           { title: '박지현 - 사랑아', vid: 'dQw4w9WgXcQ', views: '540만' }],
  kimhee: [{ title: '김희재 - 청춘부두 MV', vid: 'qYj4TnJZJhA', views: '720만' },
           { title: '김희재 - 총각', vid: 'M7FIvfx5J10', views: '510만' }],
};

// ── 가수별 일정 ──────────────────────────────────────────────
const SCHEDULES = {
  lim:    [{ month: 'APR', day: '05', title: '임영웅 전국투어 콘서트 IM HERO', place: '서울 잠실종합운동장', tag: '콘서트' },
           { month: 'APR', day: '06', title: '임영웅 전국투어 콘서트 IM HERO', place: '서울 잠실종합운동장', tag: '콘서트' }],
  young:  [{ month: 'APR', day: '19', title: '영탁 단독 콘서트 - 탁탁탁', place: '대구 엑스코 컨벤션센터', tag: '콘서트' }],
  kimho:  [{ month: 'JUN', day: '21', title: '김호중 클래식 & 트로트 갈라쇼', place: '서울 예술의 전당', tag: '갈라쇼' }],
  lee:    [{ month: 'APR', day: '12', title: '이찬원 전국 팬미팅 LOVE SONG', place: '부산 BEXCO 오디토리움', tag: '팬미팅' }],
  jung:   [{ month: 'MAY', day: '10', title: '정동원 팬미팅 FLOWER ROAD', place: '서울 KBS 아레나', tag: '팬미팅' }],
  jang:   [{ month: 'MAY', day: '03', title: '장민호 전국투어 콘서트 2025', place: '인천 파라다이스시티', tag: '콘서트' }],
  park:   [{ month: 'MAY', day: '17', title: '박지현 전국투어 지현 in CONCERT', place: '서울 올림픽홀', tag: '콘서트' }],
  kimhee: [{ month: 'JUN', day: '07', title: '김희재 콘서트 HEEJAE SHOW', place: '수원 수원올림픽문화센터', tag: '콘서트' }],
};

// ── 상태 ──────────────────────────────────────────────────
let currentSinger = null;
let currentTab = 'news';
let singerNewsCache = {};

// ── 갤러리 렌더링 ──────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = SINGERS.map(s => `
    <div class="gallery-card" tabindex="0" role="button"
         aria-label="${s.name} 정보 보기"
         onclick="selectSinger('${s.id}')"
         onkeydown="if(event.key==='Enter'||event.key===' ')selectSinger('${s.id}')">
      <div class="gallery-card-top" style="background:linear-gradient(135deg,${s.color}bb,${s.color}44)">
        <span class="gallery-card-emoji">${s.emoji}</span>
      </div>
      <div class="gallery-card-body">
        <p class="gallery-name">${s.name}</p>
        <p class="gallery-en">${s.rank}</p>
        <button class="gallery-btn" onclick="event.stopPropagation();selectSinger('${s.id}')">
          소식 · 영상 보기 ▶
        </button>
      </div>
    </div>
  `).join('');
}

// ── 가수 선택 → 상세 뷰 전환 ──────────────────────────────
function selectSinger(id) {
  currentSinger = SINGERS.find(s => s.id === id);
  if (!currentSinger) return;
  currentTab = 'news';

  // 뷰 전환
  document.getElementById('galleryView').style.display = 'none';
  document.getElementById('heroSection').style.minHeight = '0';
  document.getElementById('heroSection').style.padding = '1.5rem 1.25rem';
  document.getElementById('detailView').style.display = 'block';
  document.getElementById('backBtn').style.display = 'flex';

  // 탭 active 초기화
  document.querySelectorAll('.dtab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'news'));

  renderDetailHeader();
  renderTabContent('news');

  // 상단으로 부드럽게 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // GA 이벤트
  if (typeof gtag === 'function') {
    gtag('event', 'singer_select', { singer: currentSinger.name });
  }
}

// ── 목록으로 돌아가기 ─────────────────────────────────────
function goBack() {
  currentSinger = null;
  document.getElementById('galleryView').style.display = 'block';
  document.getElementById('heroSection').style.minHeight = '';
  document.getElementById('heroSection').style.padding = '';
  document.getElementById('detailView').style.display = 'none';
  document.getElementById('backBtn').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── 상세 헤더 렌더링 ──────────────────────────────────────
function renderDetailHeader() {
  const s = currentSinger;
  document.getElementById('detailHeader').innerHTML = `
    <span class="detail-emoji">${s.emoji}</span>
    <div class="detail-info">
      <h2 class="detail-name" style="color:${s.color}">${s.name}</h2>
      <p class="detail-en">${s.en}</p>
      <span class="detail-rank" style="background:${s.color}">${s.rank}</span>
      <p class="detail-desc">${s.desc}</p>
      <div class="detail-tags">
        ${s.tags.map(t => `<span class="detail-tag" style="background:${s.color}">#${t}</span>`).join('')}
      </div>
    </div>
  `;
  // 왼쪽 border 색 업데이트
  document.getElementById('detailHeader').style.borderLeftColor = s.color;
}

// ── 탭 콘텐츠 렌더링 ─────────────────────────────────────
function renderTabContent(tab) {
  currentTab = tab;
  const el = document.getElementById('detailContent');

  switch (tab) {
    case 'news':     renderNews(el); break;
    case 'videos':   renderVideos(el); break;
    case 'schedule': renderSchedule(el); break;
    case 'links':    renderLinks(el); break;
  }
}

// ── 뉴스 탭 ───────────────────────────────────────────────
const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';
const GNEWS = (q) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q + ' 트로트')}&hl=ko&gl=KR&ceid=KR:ko`;

async function renderNews(el) {
  const s = currentSinger;
  if (singerNewsCache[s.id]) {
    el.innerHTML = buildNewsHTML(singerNewsCache[s.id]);
    return;
  }
  el.innerHTML = `<p class="news-loading">⏳ ${s.name} 최신 소식을 불러오는 중입니다...</p>`;
  try {
    const url = RSS2JSON + encodeURIComponent(GNEWS(s.name));
    const res = await fetch(url);
    const json = await res.json();
    const items = (json.items || []).slice(0, 9).map(item => ({
      title: item.title.replace(/<[^>]+>/g, ''),
      link: item.link,
      date: new Date(item.pubDate).toLocaleDateString('ko-KR'),
      thumbnail: item.thumbnail || item.enclosure?.link || null,
      source: extractHost(item.link),
    }));
    singerNewsCache[s.id] = items;
    // 현재 탭이 여전히 news이고 같은 가수인지 확인
    if (currentTab === 'news' && currentSinger?.id === s.id) {
      el.innerHTML = buildNewsHTML(items);
    }
  } catch {
    el.innerHTML = `
      <div class="news-loading">
        <p>뉴스를 불러오지 못했습니다. 아래 버튼으로 최신 소식을 확인하세요.</p>
        <a href="${s.naverSearch}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:1rem;display:inline-block">
          네이버 뉴스에서 보기 →
        </a>
      </div>`;
  }
}

function buildNewsHTML(items) {
  if (!items.length) return '<p class="news-loading">최신 뉴스가 없습니다.</p>';
  return `<div class="news-grid">${items.map(n => `
    <article class="news-card">
      ${n.thumbnail
        ? `<img class="news-card-img" src="${n.thumbnail}" alt="${n.title}" loading="lazy"
             onerror="this.outerHTML='<div class=news-card-img-fallback>🎵</div>'">`
        : '<div class="news-card-img-fallback">🎵</div>'}
      <div class="news-card-body">
        <h3 class="news-title">${n.title}</h3>
        <p class="news-meta">📅 ${n.date} &nbsp;|&nbsp; 📰 ${n.source}</p>
        <a href="${n.link}" target="_blank" rel="noopener noreferrer" class="news-link">
          자세히 읽기 →
        </a>
      </div>
    </article>
  `).join('')}</div>`;
}

function extractHost(url) {
  try { return new URL(url).hostname.replace('www.', ''); } catch { return '뉴스'; }
}

// ── 영상 탭 ───────────────────────────────────────────────
function renderVideos(el) {
  const s = currentSinger;
  const vids = VIDEOS[s.id] || [];
  el.innerHTML = `
    <div class="video-grid">
      ${vids.map(v => `
        <div class="video-card">
          <a href="https://www.youtube.com/watch?v=${v.vid}" target="_blank" rel="noopener" class="video-thumb">
            <img src="https://img.youtube.com/vi/${v.vid}/hqdefault.jpg" alt="${v.title}" loading="lazy"
                 onerror="this.src='https://img.youtube.com/vi/${v.vid}/mqdefault.jpg'">
            <div class="video-play"></div>
          </a>
          <div class="video-card-body">
            <p class="video-title">${v.title}</p>
            <p class="video-views">👁 ${v.views} 조회</p>
          </div>
        </div>
      `).join('')}
      <div class="video-card" style="display:flex;align-items:center;justify-content:center;min-height:160px;">
        <a href="${s.ytSearch}" target="_blank" rel="noopener"
           class="btn btn-primary" style="text-align:center;padding:1.1rem 1.5rem;">
          ▶ 유튜브에서<br>더 많은 영상 보기
        </a>
      </div>
    </div>
  `;
}

// ── 일정 탭 ───────────────────────────────────────────────
function renderSchedule(el) {
  const s = currentSinger;
  const items = SCHEDULES[s.id] || [];
  if (!items.length) {
    el.innerHTML = `<p class="news-loading">현재 등록된 일정이 없습니다.<br>
      <a href="${s.naverSearch}" target="_blank" rel="noopener" class="news-link">네이버 뉴스에서 일정 확인하기 →</a>
    </p>`;
    return;
  }
  el.innerHTML = `<div class="schedule-list">${items.map(it => `
    <div class="schedule-item" style="border-left-color:${s.color}">
      <div class="schedule-date-box" style="background:${s.color}">
        <div class="schedule-month">${it.month}</div>
        <div class="schedule-day">${it.day}</div>
      </div>
      <div class="schedule-info">
        <p class="schedule-title">${it.title}</p>
        <p class="schedule-place">📍 ${it.place}</p>
      </div>
      <span class="schedule-tag" style="background:${s.color}">${it.tag}</span>
    </div>
  `).join('')}</div>`;
}

// ── 채널 탭 ───────────────────────────────────────────────
function renderLinks(el) {
  const s = currentSinger;
  el.innerHTML = `
    <div class="links-grid">
      <a href="${s.ytSearch}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">▶</span>
        <span>유튜브 채널 · 영상 검색</span>
      </a>
      <a href="${s.naverSearch}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">📰</span>
        <span>네이버 뉴스 보기</span>
      </a>
      <a href="${s.instaSearch}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">📷</span>
        <span>인스타그램 해시태그</span>
      </a>
      <a href="${s.naverCafe}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">☕</span>
        <span>네이버 팬카페 검색</span>
      </a>
      <a href="https://search.naver.com/search.naver?query=${encodeURIComponent(s.name)}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">🔍</span>
        <span>네이버에서 검색하기</span>
      </a>
      <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.name + ' 콘서트')}" target="_blank" rel="noopener" class="link-card">
        <span class="link-icon">🎤</span>
        <span>콘서트 영상 보기</span>
      </a>
    </div>
    <p style="text-align:center;color:var(--text-muted);font-size:.92rem;margin-top:1.25rem;">
      ※ 각 링크를 누르면 해당 사이트로 이동합니다.
    </p>
  `;
}

// ── 탭 클릭 이벤트 ────────────────────────────────────────
function initDetailTabs() {
  document.getElementById('detailTabs').addEventListener('click', e => {
    const btn = e.target.closest('.dtab');
    if (!btn) return;
    document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderTabContent(btn.dataset.tab);
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
        msg.textContent = '✅ 문의가 접수되었습니다. 2 영업일 내 답변 드리겠습니다!';
        form.reset();
      } else { throw new Error(); }
    } catch {
      msg.className = 'form-msg error';
      msg.textContent = '❌ 전송 실패. 잠시 후 다시 시도해 주세요.';
    } finally {
      btn.disabled = false;
      btn.textContent = '문의 보내기 ✉️';
      msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// ── 다크모드 ──────────────────────────────────────────────
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

// ── 뒤로가기 버튼 ─────────────────────────────────────────
function initBackBtn() {
  document.getElementById('backBtn').addEventListener('click', goBack);
  document.getElementById('navLogo').addEventListener('click', (e) => {
    if (currentSinger) { e.preventDefault(); goBack(); }
  });
  // 브라우저 뒤로가기 키 지원
  window.addEventListener('popstate', () => { if (currentSinger) goBack(); });
}

// ── 초기화 ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackBtn();
  initDetailTabs();
  initContactForm();
  renderGallery();
});
