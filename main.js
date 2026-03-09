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
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
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

decreaseBtn.addEventListener('click', () => {
  if (gameCount > MIN) { gameCount--; updateCountUI(); }
});

increaseBtn.addEventListener('click', () => {
  if (gameCount < MAX) { gameCount++; updateCountUI(); }
});

updateCountUI();

// ===== Lottery Logic =====
function pickNumbers() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const main = pool.slice(0, 6).sort((a, b) => a - b);
  const bonus = pool[6];
  return { main, bonus };
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
  return div;
}

// ===== Draw =====
drawBtn.addEventListener('click', () => {
  drawBtn.classList.add('drawing');
  drawBtn.querySelector('.btn-text').textContent = '추첨 중...';
  resultsEl.innerHTML = '';

  let rendered = 0;

  for (let i = 0; i < gameCount; i++) {
    setTimeout(() => {
      const { main, bonus } = pickNumbers();

      const card = document.createElement('div');
      card.className = 'game-card';
      card.style.animationDelay = `${i * 0.05}s`;

      const label = document.createElement('div');
      label.className = 'game-label';
      label.textContent = `Game ${i + 1}`;

      const balls = document.createElement('div');
      balls.className = 'balls';

      main.forEach((num, idx) => {
        const ball = createBall(num);
        ball.style.animationDelay = `${idx * 0.07}s`;
        balls.appendChild(ball);
      });

      const divider = document.createElement('span');
      divider.className = 'divider';
      divider.textContent = '+';
      balls.appendChild(divider);

      const bonusBall = createBall(bonus, true);
      bonusBall.style.animationDelay = `${main.length * 0.07}s`;
      bonusBall.title = '보너스 번호';
      balls.appendChild(bonusBall);

      card.appendChild(label);
      card.appendChild(balls);
      resultsEl.appendChild(card);

      rendered++;
      if (rendered === gameCount) {
        drawBtn.classList.remove('drawing');
        drawBtn.querySelector('.btn-text').textContent = '다시 추첨';
        resetBtn.style.display = 'block';
      }
    }, i * 120);
  }
});

// ===== Reset =====
resetBtn.addEventListener('click', () => {
  resultsEl.innerHTML = '';
  resetBtn.style.display = 'none';
  drawBtn.querySelector('.btn-text').textContent = '번호 추첨';
});
