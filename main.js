// ===== State =====
let gameCount = 1;
const MIN = 1, MAX = 10;

// ===== DOM =====
const themeToggle  = document.getElementById('themeToggle');
const decreaseBtn  = document.getElementById('decreaseBtn');
const increaseBtn  = document.getElementById('increaseBtn');
const countDisplay = document.getElementById('countDisplay');
const drawBtn      = document.getElementById('drawBtn');
const resetBtn     = document.getElementById('resetBtn');
const resultsEl    = document.getElementById('results');
const html         = document.documentElement;

// ===== Theme =====
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeToggle.querySelector('.icon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== Count Controls =====
function updateCountUI() {
  countDisplay.textContent = gameCount;
  decreaseBtn.disabled = gameCount <= MIN;
  increaseBtn.disabled = gameCount >= MAX;
}
decreaseBtn.addEventListener('click', () => { if (gameCount > MIN) { gameCount--; updateCountUI(); } });
increaseBtn.addEventListener('click', () => { if (gameCount < MAX) { gameCount++; updateCountUI(); } });
updateCountUI();

// ===== Lottery Logic =====
function pickNumbers() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return { main: pool.slice(0, 6).sort((a, b) => a - b), bonus: pool[6] };
}

function getBallRange(n) {
  if (n <= 10) return 'range-1';
  if (n <= 20) return 'range-2';
  if (n <= 30) return 'range-3';
  if (n <= 40) return 'range-4';
  return 'range-5';
}

function createBall(num, isBonus = false) {
  const div = document.createElement('div');
  div.className = `ball ${getBallRange(num)}${isBonus ? ' bonus' : ''}`;
  div.textContent = num;
  if (isBonus) div.title = '보너스 번호';
  return div;
}

// ===== Draw =====
drawBtn.addEventListener('click', () => {
  drawBtn.classList.add('drawing');
  drawBtn.querySelector('.btn-text').textContent = '🎲 추첨 중...';
  resultsEl.innerHTML = '';
  let rendered = 0;

  for (let i = 0; i < gameCount; i++) {
    setTimeout(() => {
      const { main, bonus } = pickNumbers();
      const card = document.createElement('div');
      card.className = 'game-card';
      card.style.animationDelay = `${i * 0.04}s`;

      const label = document.createElement('div');
      label.className = 'game-label';
      label.textContent = `Game ${String(i + 1).padStart(2, '0')}`;

      const balls = document.createElement('div');
      balls.className = 'balls';

      main.forEach((num, idx) => {
        const b = createBall(num);
        b.style.animationDelay = `${idx * 0.06}s`;
        balls.appendChild(b);
      });

      const div = document.createElement('span');
      div.className = 'divider';
      div.textContent = '+';
      balls.appendChild(div);

      const bonusBall = createBall(bonus, true);
      bonusBall.style.animationDelay = `${main.length * 0.06}s`;
      balls.appendChild(bonusBall);

      card.appendChild(label);
      card.appendChild(balls);
      resultsEl.appendChild(card);

      rendered++;
      if (rendered === gameCount) {
        drawBtn.classList.remove('drawing');
        drawBtn.querySelector('.btn-text').textContent = '🎲 다시 추첨하기';
        resetBtn.style.display = 'block';
      }
    }, i * 110);
  }
});

// ===== Reset =====
resetBtn.addEventListener('click', () => {
  resultsEl.innerHTML = '';
  resetBtn.style.display = 'none';
  drawBtn.querySelector('.btn-text').textContent = '🎲 번호 추첨하기';
});

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ===== Frequency Bar Chart =====
(function renderFreqChart() {
  const container = document.getElementById('freqChart');
  if (!container) return;

  // 이론적 균등 분포 기준으로 각 번호 구간의 공 수 비율
  const segments = [
    { label: '1 ~ 10', color: '#f0a500', count: 10, pct: 22.2 },
    { label: '11 ~ 20', color: '#1a8fc4', count: 10, pct: 22.2 },
    { label: '21 ~ 30', color: '#e03030', count: 10, pct: 22.2 },
    { label: '31 ~ 40', color: '#777777', count: 10, pct: 22.2 },
    { label: '41 ~ 45', color: '#2e8b2e', count: 5, pct: 11.1 },
  ];

  segments.forEach(seg => {
    const wrap = document.createElement('div');
    wrap.className = 'freq-bar-wrap';

    const lbl = document.createElement('div');
    lbl.className = 'freq-label';
    lbl.textContent = seg.label;

    const outer = document.createElement('div');
    outer.className = 'freq-bar-outer';

    const bar = document.createElement('div');
    bar.className = 'freq-bar';
    bar.style.background = seg.color;
    bar.style.height = `${(seg.count / 10) * 100}%`;
    bar.style.opacity = '0.85';

    const pct = document.createElement('div');
    pct.className = 'freq-pct';
    pct.textContent = `${seg.count}개`;

    outer.appendChild(bar);
    wrap.appendChild(lbl);
    wrap.appendChild(outer);
    wrap.appendChild(pct);
    container.appendChild(wrap);
  });
})();

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.querySelector('.submit-text').textContent = '전송 중...';
  const data = new FormData(contactForm);
  try {
    const res = await fetch(contactForm.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      contactForm.reset();
      formSuccess.style.display = 'block';
      submitBtn.style.display = 'none';
    } else {
      alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      submitBtn.disabled = false;
      submitBtn.querySelector('.submit-text').textContent = '문의 보내기';
    }
  } catch {
    alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.');
    submitBtn.disabled = false;
    submitBtn.querySelector('.submit-text').textContent = '문의 보내기';
  }
});
