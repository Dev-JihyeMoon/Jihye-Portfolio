// ===== CONFIG =====
const DATA_FILES = {
  profile:  'data/profile.json',
  about:    'data/about.json',
  skills:   'data/skills.json',
  projects: 'data/projects.json',
  awards:   'data/awards.json',
  history:  'data/history.json',
  footer:   'data/footer.json'
};

const SECTIONS = [
  { id: 'about' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'awards' },
  { id: 'history' }
];


// ===== SVG ICONS =====
const icons = {
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  mail:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>',
  github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
  chevron:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>',
  play:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>',
  clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  team:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  user:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  arrow:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  // 픽토그램 (OS별 이모지 차이 방지)
  cert:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/></svg>',
  trophy:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v6a6 6 0 01-12 0V3z"/><path d="M6 5H3v2a4 4 0 004 4M18 5h3v2a4 4 0 01-4 4"/><path d="M12 15v4M8 21h8"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M2 13h20"/></svg>',
  alert:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
};


Object.assign(icons, {
  sun:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg>',
  up:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>'
});


// ===== I18N (UI 문구) =====
const LANGS = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' }
];

const I18N = {
  ko: {
    docTitle: '문지혜 | 백엔드 개발자 포트폴리오',
    docDesc: '최적을 추구하며 파고드는 백엔드 개발자 문지혜의 포트폴리오입니다.',
    nav: { about: '소개', skills: '기술', projects: '프로젝트', awards: '수상·자격', history: '이력' },
    navAria: '섹션 이동', themeAria: '다크 모드 전환', langAria: '언어 설정', photoAlt: '증명사진', close: '닫기', video: '시연 영상',
    kicker: 'Backend Developer', born: '출생', bornVal: y => `${y}년생`, email: '이메일',
    aboutTitle: '본질을 묻고,<br>최적을 찾습니다.', skillsTitle: '기술 스택', projectsTitle: '프로젝트', awardsTitle: '수상 및 자격증', historyTitle: '이력',
    logos: '직접 제작한 로고', zoom: '클릭하면 확대',
    project: 'Project', period: '기간', team: '팀', position: '포지션', behind: '비하인드 스토리',
    plan: '기획 · 주요 기능', demo: '시연 화면 / 아키텍처', impl: '구현 내용', ts: 'Trouble Shooting', retro: '회고', stack: '기술 스택',
    cause: '원인', fix: '해결', result: '결과',
    gAwards: '수상', gCerts: '자격 · 어학', gExp: '경험',
    edu: '교육', exp: '경험', now: '진행 중'
  },
  en: {
    docTitle: 'Jihye Moon | Backend Developer Portfolio',
    docDesc: 'Portfolio of Jihye Moon, a backend developer who digs deep for the optimal solution.',
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', awards: 'Awards', history: 'History' },
    navAria: 'Section navigation', themeAria: 'Toggle dark mode', langAria: 'Language', photoAlt: 'ID photo', close: 'Close', video: 'Demo video',
    kicker: 'Backend Developer', born: 'Born', bornVal: y => `${y}`, email: 'Email',
    aboutTitle: 'Ask what matters,<br>find the optimum.', skillsTitle: 'Tech Stack', projectsTitle: 'Projects', awardsTitle: 'Awards & Certifications', historyTitle: 'History',
    logos: 'Logos I designed', zoom: 'Click to enlarge',
    project: 'Project', period: 'Period', team: 'Team', position: 'Role', behind: 'Behind the story',
    plan: 'Planning & Key Features', demo: 'Demo & Architecture', impl: 'Implementation', ts: 'Troubleshooting', retro: 'Retrospective', stack: 'Tech Stack',
    cause: 'Cause', fix: 'Fix', result: 'Result',
    gAwards: 'Awards', gCerts: 'Certifications · Language', gExp: 'Experience',
    edu: 'Education', exp: 'Experience', now: 'In progress'
  },
  ja: {
    docTitle: 'Jihye Moon | バックエンド開発者ポートフォリオ',
    docDesc: '最適を追い求めて掘り下げるバックエンド開発者、Jihye Moonのポートフォリオです。',
    nav: { about: '紹介', skills: '技術', projects: 'プロジェクト', awards: '受賞・資格', history: '経歴' },
    navAria: 'セクション移動', themeAria: 'ダークモード切替', langAria: '言語設定', photoAlt: '証明写真', close: '閉じる', video: 'デモ動画',
    kicker: 'Backend Developer', born: '生年', bornVal: y => `${y}年生`, email: 'メール',
    aboutTitle: '本質を問い、<br>最適を探します。', skillsTitle: '技術スタック', projectsTitle: 'プロジェクト', awardsTitle: '受賞・資格', historyTitle: '経歴',
    logos: '自作のロゴ', zoom: 'クリックで拡大',
    project: 'Project', period: '期間', team: 'チーム', position: '役割', behind: '開発の裏話',
    plan: '企画・主要機能', demo: 'デモ画面 / アーキテクチャ', impl: '実装内容', ts: 'トラブルシューティング', retro: '振り返り', stack: '技術スタック',
    cause: '原因', fix: '解決', result: '結果',
    gAwards: '受賞', gCerts: '資格・語学', gExp: '経験',
    edu: '教育', exp: '経験', now: '進行中'
  }
};

const state = { lang: 'ko', data: null };
const cache = {};
const t = () => I18N[state.lang];


// ===== HELPERS =====
function englishName(name) {
  const m = /\((.*?)\)/.exec(name || '');
  return m ? m[1] : '';
}

function koreanName(name) {
  return (name || '').replace(/\(.*?\)/, '').trim();
}

function displayName(profile) {
  if (!profile) return 'Portfolio';
  return state.lang === 'ko' ? koreanName(profile.name) : (englishName(profile.name) || koreanName(profile.name));
}

function secHead(label, title) {
  return `
    <div class="sec-head">
      <p class="sec-label">${label}</p>
      <h2 class="sec-title">${title}</h2>
    </div>`;
}

// 'YYYY.MM' → 정렬용 숫자
function ymKey(str) {
  const m = /(\d{4})(?:\.(\d{1,2}))?/.exec(str || '');
  return m ? Number(m[1]) * 12 + Number(m[2] || 1) : 0;
}

// 기간 문자열에서 시작/종료 추출 (종료가 없으면 시작과 동일)
function periodRange(period) {
  const parts = String(period || '').split(/\s*[~–-]\s*/);
  return { start: ymKey(parts[0]), end: ymKey(parts[1] || parts[0]) };
}


// ===== THEME (라이트 / 다크) =====
function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch (e) { /* 저장 불가 환경 */ }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'dark' ? '#0D0E11' : '#F4F3EF';
}


// ===== DATA LOADER =====
async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (e) {
    return null;
  }
}

// 한국어 원본을 기준으로, 다른 언어는 있는 파일만 덮어씀 (없으면 한국어로 대체)
async function loadData(lang) {
  if (cache[lang]) return cache[lang];

  if (!cache.ko) {
    const ko = {};
    await Promise.all(Object.entries(DATA_FILES).map(async ([key, path]) => { ko[key] = await fetchJSON(path); }));
    cache.ko = ko;
  }
  if (lang === 'ko') return cache.ko;

  const out = { ...cache.ko };
  await Promise.all(Object.keys(DATA_FILES).map(async key => {
    const tr = await fetchJSON(`data/${lang}/${key}.json`);
    if (!tr) return;
    out[key] = (key === 'profile' || key === 'footer') ? { ...cache.ko[key], ...tr } : tr;
  }));
  cache[lang] = out;
  return out;
}

function applyLangMeta() {
  document.documentElement.lang = state.lang;
  document.title = t().docTitle;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t().docDesc;
}


// ===== NAVIGATION =====
function renderNav(profile) {
  const nav = document.getElementById('navInner');
  nav.innerHTML = `
    <a class="nav-name" href="#top">${displayName(profile)}</a>
    <div class="nav-right">
      <nav class="nav-links" aria-label="${t().navAria}">
        ${SECTIONS.map(s => `<a href="#${s.id}" data-section="${s.id}">${t().nav[s.id]}</a>`).join('')}
      </nav>
      <button class="theme-btn" id="themeBtn" type="button" aria-label="${t().themeAria}">
        <span class="i-sun">${icons.sun}</span><span class="i-moon">${icons.moon}</span>
      </button>
    </div>`;

  document.getElementById('themeBtn').addEventListener('click', () => {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });
}

function updateScrollState() {
  document.getElementById('nav').classList.toggle('solid', window.scrollY > 24);

  let current = '';
  for (const s of SECTIONS) {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= 140) current = s.id;
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}


// ===== REVEAL =====
function setupReveal(immediate) {
  const targets = document.querySelectorAll('.rv');
  if (immediate || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
}


// ===== RENDER: Hero =====
function renderHero(p, about) {
  if (!p) return '';
  const mark = p.taglineMark;
  const headline = mark && (p.tagline || '').includes(mark)
    ? p.tagline.replace(mark, `<span class="mark">${mark}</span>`)
    : (p.tagline || '');
  const photo = p.photo
    ? `<img src="${p.photo}" alt="${displayName(p)} ${t().photoAlt}">`
    : `<span>${t().photoAlt}</span>`;

  const langs = LANGS.map(l =>
    `<button type="button" data-lang="${l.code}" aria-pressed="${l.code === state.lang}" lang="${l.code}">${l.label}</button>`).join('');

  return `
  <section class="hero" id="hero">
    <div class="wrap hero-grid">
      <div class="hero-txt">
        <p class="hero-kicker">${displayName(p)} · ${t().kicker}</p>
        <h1 class="hero-h">${headline}</h1>
        ${about ? `<p class="hero-p">${about.description}</p>` : ''}
        <div class="lang" role="group" aria-label="${t().langAria}">${langs}</div>
        <dl class="hero-facts">
          ${p.birthYear ? `<div><dt>${t().born}</dt><dd>${t().bornVal(p.birthYear)}</dd></div>` : ''}
          <div><dt>${t().email}</dt><dd><a href="mailto:${p.email}">${p.email}</a></dd></div>
          <div><dt>GitHub</dt><dd><a href="${p.github}" target="_blank" rel="noopener">${p.github.replace(/^https?:\/\//, '')}</a></dd></div>
        </dl>
      </div>
      <figure class="hero-photo">
        <div class="hero-photo-frame">${photo}</div>
      </figure>
    </div>
  </section>`;
}


// ===== RENDER: About =====
function renderAbout(about) {
  if (!about) return '';

  const values = (about.values || []).map(v => `
    <li>
      <h3>${v.title}</h3>
      <p>${v.description}</p>
    </li>`).join('');

  const logoItems = (about.logos || []).filter(l => l.src).map(l => `
    <figure class="logo-item">
      <img src="${l.src}" alt="${l.label}" data-zoom>
      <figcaption>${l.label}</figcaption>
    </figure>`).join('');

  return `
  <section class="section" id="about">
    <div class="wrap split">
      <div class="rv">${secHead('About', t().aboutTitle)}</div>
      <div class="rv">
        <ol class="values">${values}</ol>
        ${logoItems ? `
        <div class="logo-block">
          <h4 class="blk-t">${t().logos} <span class="hint">${t().zoom}</span></h4>
          <div class="logo-grid">${logoItems}</div>
        </div>` : ''}
      </div>
    </div>
  </section>`;
}


// ===== RENDER: Skills =====
function renderSkills(skills) {
  if (!skills || !skills.length) return '';
  const rows = skills.map(g => `
    <div class="skill-row">
      <h3>${g.category}</h3>
      <ul>${g.items.map(i => `<li>${typeof i === 'string' ? i : i.name}</li>`).join('')}</ul>
    </div>`).join('');

  return `
  <section class="section" id="skills">
    <div class="wrap">
      <div class="rv">${secHead('Tech Stack', t().skillsTitle)}</div>
      <div class="skills rv">${rows}</div>
    </div>
  </section>`;
}


// ===== RENDER: Projects (탭 없이 전체를 구조적으로 펼침) =====
function renderProjects(projects) {
  if (!projects || !projects.length) return '';

  const cards = projects.map((proj, pi) => {
    const links = [];
    if (proj.demo) links.push(`<a href="${proj.demo}" target="_blank" rel="noopener" class="btn sm"><span>${t().video}</span><b class="arr">${icons.up}</b></a>`);
    if (proj.github) links.push(`<a href="${proj.github}" target="_blank" rel="noopener" class="btn sm ghost"><span>GitHub</span><b class="arr">${icons.up}</b></a>`);

    const plan = (proj.planning || []).map(p => `
      <li><h5>${p.title}</h5><p>${p.description}</p></li>`).join('');

    const gallery = (proj.images || []).map(img => img.src
      ? `<figure class="shot"><img src="${img.src}" alt="${img.label}" data-zoom><figcaption>${img.label}</figcaption></figure>`
      : `<div class="shot empty"><span>${img.label}</span></div>`).join('');

    const features = proj.features.map((f, i) => `
      <li>
        <span class="feat-n">${i + 1}</span>
        <h5>${f.title}</h5>
        <p class="feat-sum">${f.summary}</p>
        <p class="feat-det">${f.detail}</p>
      </li>`).join('');

    const ts = (proj.troubleShooting || []).map(x => `
      <div class="ts">
        <div class="ts-problem">${icons.alert}<span>${x.problem}</span></div>
        <dl>
          <div><dt class="b-cause">${t().cause}</dt><dd>${x.cause}</dd></div>
          <div><dt class="b-solve">${t().fix}</dt><dd>${x.solution}</dd></div>
          <div><dt class="b-result">${t().result}</dt><dd class="strong">${x.result}</dd></div>
        </dl>
      </div>`).join('');

    const retro = (proj.retrospective || []).map(r => `
      <div><h5>${r.label}</h5><p>${r.text}</p></div>`).join('');

    const tech = (proj.techStack || []).map(x => `<li>${x}</li>`).join('');

    return `
    <article class="project rv">
      <header class="p-head">
        <div class="p-top">
          <span class="p-idx">${t().project} ${String(pi + 1).padStart(2, '0')}</span>
          <div class="p-links">${links.join('')}</div>
        </div>
        <h3 class="p-title">${proj.name}</h3>
        <p class="p-sub">${proj.subtitle}</p>
        <dl class="p-meta">
          <div><dt>${t().period}</dt><dd>${proj.period}</dd></div>
          <div><dt>${t().team}</dt><dd>${proj.team}</dd></div>
          <div><dt>${t().position}</dt><dd>${proj.position}</dd></div>
        </dl>
      </header>

      <div class="p-body">
        <div class="blk">
          <p class="p-intro">${proj.intention}</p>
          ${proj.behindStory ? `
          <div class="behind">
            <button class="behind-btn" type="button" onclick="toggleBehind('${proj.id}', this)" aria-expanded="false">
              ${t().behind} ${icons.chevron}
            </button>
            <div class="behind-panel" id="behind-${proj.id}"><div><p>${proj.behindStory}</p></div></div>
          </div>` : ''}
        </div>

        ${plan ? `<div class="blk"><h4 class="blk-t">${t().plan}</h4><ul class="plan">${plan}</ul></div>` : ''}
        ${gallery ? `<div class="blk"><h4 class="blk-t">${t().demo} <span class="hint">${t().zoom}</span></h4><div class="gallery">${gallery}</div></div>` : ''}
        <div class="blk"><h4 class="blk-t">${t().impl}</h4><ol class="feats">${features}</ol></div>
        ${ts ? `<div class="blk"><h4 class="blk-t">${t().ts}</h4><div class="ts-list">${ts}</div></div>` : ''}
        ${retro ? `<div class="blk"><h4 class="blk-t">${t().retro}</h4><div class="retro">${retro}</div></div>` : ''}

        ${tech ? `<div class="p-tech"><h4 class="blk-t">${t().stack}</h4><ul class="chips">${tech}</ul></div>` : ''}
      </div>
    </article>`;
  }).join('');

  return `
  <section class="section" id="projects">
    <div class="wrap">
      <div class="rv">${secHead('Projects', t().projectsTitle)}</div>
      ${cards}
    </div>
  </section>`;
}


// ===== RENDER: Awards =====
function renderAwards(awards) {
  if (!awards) return '';

  const row = x => `
    <li>
      <span class="a-date">${x.date}</span>
      <div>
        <p class="a-name">${x.name}</p>
        <p class="a-meta">${x.issuer}</p>
        ${x.description ? `<p class="a-desc">${x.description}</p>` : ''}
      </div>
    </li>`;

  const group = (label, icon, items) => items.length
    ? `<div class="a-group"><h3>${icon}${label}</h3><ul>${items.map(row).join('')}</ul></div>`
    : '';

  return `
  <section class="section" id="awards">
    <div class="wrap">
      <div class="rv">${secHead('Awards & Certifications', t().awardsTitle)}</div>
      <div class="panel awards rv">
        ${group(t().gCerts, icons.cert, awards.certifications || [])}
        ${group(t().gAwards, icons.trophy, awards.awards || [])}
        ${group(t().gExp, icons.briefcase, awards.experiences || [])}
      </div>
    </div>
  </section>`;
}


// ===== RENDER: History (끝나는 날짜 기준 최신순) =====
function renderHistory(history) {
  if (!history || !history.length) return '';
  const sorted = [...history].sort((a, b) => {
    const A = periodRange(a.period), B = periodRange(b.period);
    return (B.end - A.end) || (B.start - A.start);
  });
  const label = { education: t().edu, experience: t().exp };
  const items = sorted.map(h => `
    <li class="${h.current ? 'current' : ''}">
      <span class="h-period">${h.period}</span>
      <span class="h-dot" aria-hidden="true"></span>
      <div class="h-body">
        <p class="h-title">${h.title}${label[h.type] ? `<em>${label[h.type]}</em>` : ''}${h.current ? `<em class="now">${t().now}</em>` : ''}</p>
        <p class="h-desc">${h.description}</p>
      </div>
    </li>`).join('');

  return `
  <section class="section" id="history">
    <div class="wrap">
      <div class="rv">${secHead('History', t().historyTitle)}</div>
      <div class="panel rv"><ol class="history">${items}</ol></div>
    </div>
  </section>`;
}


// ===== RENDER: Footer =====
function renderFooter(footer, profile) {
  const f = { ...(profile || {}), ...Object.fromEntries(Object.entries(footer || {}).filter(([k, v]) => v && k !== 'name')) };
  if (!profile) return;
  const name = displayName(profile);
  document.getElementById('footerContent').innerHTML = `
    <div class="wrap foot">
      <div>
        <p class="foot-name">${name}</p>
        <p class="foot-msg">${f.message || ''}</p>
      </div>
      <ul class="foot-links">
        <li><a href="mailto:${f.email}">${icons.mail}${f.email}</a></li>
        <li><a href="tel:${f.phone}">${icons.phone}${f.phone}</a></li>
        <li><a href="${f.github}" target="_blank" rel="noopener">${icons.github}GitHub</a></li>
      </ul>
    </div>
    <div class="wrap"><div class="foot-copy">© ${new Date().getFullYear()} ${name}</div></div>`;
}


// ===== BEHIND STORY TOGGLE =====
function toggleBehind(id, btn) {
  const open = document.getElementById('behind-' + id).classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}


// ===== LIGHTBOX (이미지 확대) =====
function setupLightbox() {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<button class="lightbox-close" type="button">&times;</button><img alt=""><div class="lightbox-caption"></div>';
  document.body.appendChild(box);
  const img = box.querySelector('img');
  const cap = box.querySelector('.lightbox-caption');

  const close = () => box.classList.remove('open');
  box.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  document.getElementById('mainContent').addEventListener('click', e => {
    const target = e.target.closest('img[data-zoom]');
    if (!target) return;
    img.src = target.src;
    img.alt = target.alt;
    cap.textContent = target.alt;
    box.querySelector('.lightbox-close').setAttribute('aria-label', t().close);
    box.classList.add('open');
  });
}


// ===== LANGUAGE =====
function render(immediate) {
  const d = state.data;
  renderNav(d.profile);
  document.getElementById('mainContent').innerHTML = [
    renderHero(d.profile, d.about),
    renderAbout(d.about),
    renderSkills(d.skills),
    renderProjects(d.projects),
    renderAwards(d.awards),
    renderHistory(d.history)
  ].join('');
  renderFooter(d.footer, d.profile);
  setupReveal(immediate);
  updateScrollState();
}

async function setLang(lang) {
  if (!I18N[lang] || lang === state.lang) return;
  state.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) { /* 저장 불가 환경 */ }
  state.data = await loadData(lang);
  applyLangMeta();
  const y = window.scrollY;
  render(true);
  window.scrollTo(0, y);
}

function setupLangButtons() {
  document.getElementById('mainContent').addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (btn) setLang(btn.dataset.lang);
  });
}


// ===== INIT =====
async function init() {
  let saved = 'ko';
  try { saved = localStorage.getItem('lang') || 'ko'; } catch (e) { /* 저장 불가 환경 */ }
  state.lang = I18N[saved] ? saved : 'ko';
  state.data = await loadData(state.lang);
  applyLangMeta();
  render(false);

  setupLightbox();
  setupLangButtons();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
}

init();
