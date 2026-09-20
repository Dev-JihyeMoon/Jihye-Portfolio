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
  { id: 'hero',     label: '인삿말' },
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: '기술' },
  { id: 'projects', label: '프로젝트' },
  { id: 'awards',   label: '수상·자격' },
  { id: 'history',  label: '이력' }
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
  user:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
};


// ===== DATA LOADER =====
async function loadAllData() {
  const results = {};
  const entries = Object.entries(DATA_FILES);

  await Promise.all(entries.map(async ([key, path]) => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(res.status);
      results[key] = await res.json();
    } catch (e) {
      console.warn(`[portfolio] ${path} 로드 실패:`, e.message);
      results[key] = null;
    }
  }));

  return results;
}


// ===== NAVIGATION =====
function renderNav() {
  const navInner = document.getElementById('navInner');
  navInner.innerHTML = SECTIONS.map(s =>
    `<div class="nav-item" data-section="${s.id}">${s.label}</div>`
  ).join('');

  navInner.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const el = document.getElementById(item.dataset.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function updateScrollState() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('navProgress').style.width = progress + '%';

  let current = SECTIONS[0].id;
  for (const s of SECTIONS) {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= 120) current = s.id;
  }
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === current);
  });
}


// ===== FADE-IN OBSERVER =====
function setupFadeIn() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}


// ===== RENDER: Hero =====
function renderHero(profile) {
  if (!profile) return '';
  const p = profile;
  const photoContent = p.photo
    ? `<img src="${p.photo}" alt="${p.name} 증명사진">`
    : `<span>증명사진</span>`;

  return `
  <section class="hero" id="hero">
    <div class="hero-inner">
      <div class="hero-photo">${photoContent}</div>
      <div class="hero-content">
        <div class="hero-tagline">${p.tagline}</div>
        <h1 class="hero-name">${p.name}</h1>
        <div class="hero-info">
          <span class="hero-info-item">${icons.calendar} ${p.birth}</span>
          <span class="hero-info-item">${icons.phone} ${p.phone}</span>
          <a href="mailto:${p.email}" class="hero-info-item">${icons.mail} ${p.email}</a>
          <a href="${p.github}" target="_blank" rel="noopener" class="hero-info-item">${icons.github} GitHub</a>
        </div>
      </div>
    </div>
  </section>`;
}


// ===== RENDER: About =====
function renderAbout(about) {
  if (!about) return '';
  return `
  <section class="section about" id="about">
    <div class="section-inner fade-in">
      <div class="section-label">About Me</div>
      <div class="about-quote">
        <p>"${about.quote.text}"</p>
        <cite>— ${about.quote.author}</cite>
      </div>
      <p class="about-text">${about.description}</p>
    </div>
  </section>`;
}


// ===== RENDER: Skills =====
function renderSkills(skills) {
  if (!skills || !skills.length) return '';
  const rows = skills.map(g => {
    const tags = g.items.map(i => {
      const name = typeof i === 'string' ? i : i.name;
      return `<span class="skill-pill">${name}</span>`;
    }).join('');
    return `
    <div class="skill-row">
      <div class="skill-row-label">${g.category}</div>
      <div class="skill-row-tags">${tags}</div>
    </div>`;
  }).join('');

  return `
  <section class="section skills" id="skills">
    <div class="section-inner fade-in">
      <div class="section-label">Tech Stack</div>
      <h2 class="section-title">기술 스택</h2>
      <div class="skills-container">${rows}</div>
    </div>
  </section>`;
}


// ===== RENDER: Projects =====
function renderProjects(projects) {
  if (!projects || !projects.length) return '';

  const cards = projects.map(proj => {
    // Gallery
    const hasImages = proj.images && proj.images.length > 0;
    let galleryHtml = '';
    if (hasImages) {
      const items = proj.images.map(img => {
        if (img.src) {
          return `<div class="gallery-item"><img src="${img.src}" alt="${img.label}"></div>`;
        }
        return `<div class="gallery-item placeholder"><span>${img.label}<br>이미지를 추가하세요</span></div>`;
      }).join('');
      galleryHtml = `
      <div class="project-gallery">
        <h4>시연 화면 / 아키텍처</h4>
        <div class="gallery-grid">${items}</div>
      </div>`;
    }

    // Features
    const features = proj.features.map(f => `
      <div class="feature-item">
        <div class="feature-title">${f.title}</div>
        <div class="feature-summary">${f.summary}</div>
        <div class="feature-detail">${f.detail}</div>
      </div>`).join('');

    // Trouble Shooting
    const tsItems = (proj.troubleShooting || []).map(ts => `
      <div class="ts-card">
        <div class="ts-problem-bar">${ts.problem}</div>
        <div class="ts-body">
          <div class="ts-row">
            <span class="ts-badge ts-badge-cause">원인</span>
            <span class="ts-row-text">${ts.cause}</span>
          </div>
          <div class="ts-row">
            <span class="ts-badge ts-badge-solve">해결</span>
            <span class="ts-row-text">${ts.solution}</span>
          </div>
          <div class="ts-row">
            <span class="ts-badge ts-badge-result">결과</span>
            <span class="ts-row-text result-text">${ts.result}</span>
          </div>
        </div>
      </div>`).join('');

    // Tech tags
    const techTags = (proj.techStack || []).map(t =>
      `<span class="project-tech-tag">${t}</span>`
    ).join('');

    // Links
    const links = [];
    if (proj.github) links.push(`<a href="${proj.github}" target="_blank" rel="noopener" class="project-link">${icons.github} GitHub</a>`);
    if (proj.demo) links.push(`<a href="${proj.demo}" target="_blank" rel="noopener" class="project-link">${icons.play} 시연 영상</a>`);

    return `
    <div class="project-card fade-in">
      <div class="project-header">
        <h3 class="project-name">${proj.name}</h3>
        <div class="project-subtitle">${proj.subtitle}</div>
        <div class="project-meta">
          <span class="project-meta-item">${icons.clock}<span class="project-meta-label">기간</span> ${proj.period}</span>
          <span class="project-meta-item">${icons.team}<span class="project-meta-label">팀</span> ${proj.team}</span>
          <span class="project-meta-item">${icons.user}<span class="project-meta-label">포지션</span> ${proj.position}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-intention">
          ${proj.intention}
          <div class="behind-wrapper">
            <button class="toggle-btn" onclick="toggleBehind('${proj.id}', this)">
              비하인드 스토리 ${icons.chevron}
            </button>
            <div class="behind-story" id="behind-${proj.id}">${proj.behindStory}</div>
          </div>
        </div>
        ${galleryHtml}
        <div class="project-features">
          <h4>구현 내용</h4>
          ${features}
        </div>
        ${tsItems ? `<div class="project-troubleshooting"><h4>Trouble Shooting</h4>${tsItems}</div>` : ''}
        <div class="project-tech">${techTags}</div>
        <div class="project-links">${links.join('')}</div>
      </div>
    </div>`;
  }).join('');

  return `
  <section class="section projects" id="projects">
    <div class="section-inner">
      <div class="section-label fade-in">Projects</div>
      <h2 class="section-title fade-in">프로젝트</h2>
      ${cards}
    </div>
  </section>`;
}


// ===== RENDER: Awards =====
function renderAwards(awards) {
  if (!awards) return '';

  const certItems = (awards.certifications || []).map(c => `
    <div class="award-item">
      <div class="award-icon cert">📄</div>
      <div class="award-info">
        <div class="award-name">${c.name}</div>
        <div class="award-meta">${c.issuer} · ${c.date}</div>
      </div>
    </div>`).join('');

  const awardItems = (awards.awards || []).map(a => {
    const isDual = a.description && a.description.includes('동시 수상');
    const iconClass = isDual ? 'award-icon trophy-double' : 'award-icon trophy';
    return `
    <div class="award-item">
      <div class="${iconClass}">🏆</div>
      <div class="award-info">
        <div class="award-name">${a.name}</div>
        <div class="award-meta">${a.issuer} · ${a.date}</div>
        ${a.description ? `<div class="award-desc">${a.description}</div>` : ''}
      </div>
    </div>`;
  }).join('');

  const expItems = (awards.experiences || []).map(e => `
    <div class="award-item">
      <div class="award-icon exp">💻</div>
      <div class="award-info">
        <div class="award-name">${e.name}</div>
        <div class="award-meta">${e.issuer} · ${e.date}</div>
        ${e.description ? `<div class="award-desc">${e.description}</div>` : ''}
      </div>
    </div>`).join('');

  const hasCerts = certItems.length > 0;
  const hasAwards = awardItems.length > 0;
  const hasExps = expItems.length > 0;

  return `
  <section class="section awards-section" id="awards">
    <div class="section-inner fade-in">
      <div class="section-label">Awards & Certifications</div>
      <h2 class="section-title">수상 및 자격증</h2>
      <div class="awards-grid">
        ${hasCerts ? `<div class="awards-category-label">자격 · 어학</div>${certItems}` : ''}
        ${hasAwards ? `<div class="awards-category-label">수상</div>${awardItems}` : ''}
        ${hasExps ? `<div class="awards-category-label">경험</div>${expItems}` : ''}
      </div>
    </div>
  </section>`;
}


// ===== RENDER: History =====
function renderHistory(history) {
  if (!history || !history.length) return '';
  const sorted = [...history].sort((a, b) =>
    parseInt(b.period) - parseInt(a.period)
  );
  const items = sorted.map(h => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-period">${h.period}</div>
      <div class="timeline-title">${h.title}</div>
      <div class="timeline-desc">${h.description}</div>
    </div>`).join('');

  return `
  <section class="section history" id="history">
    <div class="section-inner fade-in">
      <div class="section-label">History</div>
      <h2 class="section-title">이력</h2>
      <div class="timeline">${items}</div>
    </div>
  </section>`;
}


// ===== RENDER: Footer =====
function renderFooter(footer) {
  if (!footer) return;
  const f = footer;
  document.getElementById('footerContent').innerHTML = `
    <div class="footer-links">
      <a href="mailto:${f.email}" class="footer-link">${icons.mail} ${f.email}</a>
      <a href="tel:${f.phone}" class="footer-link">${icons.phone} ${f.phone}</a>
      <a href="${f.github}" target="_blank" rel="noopener" class="footer-link">${icons.github} GitHub</a>
    </div>
    <div>${f.name}의 포트폴리오입니다.</div>
    <div class="footer-copy">${f.message}</div>`;
}


// ===== TOGGLE =====
function toggleBehind(id, btn) {
  const el = document.getElementById('behind-' + id);
  el.classList.toggle('open');
  btn.classList.toggle('open');
}


// ===== INIT =====
async function init() {
  renderNav();

  const data = await loadAllData();

  document.getElementById('mainContent').innerHTML = [
    renderHero(data.profile),
    renderAbout(data.about),
    renderSkills(data.skills),
    renderProjects(data.projects),
    renderAwards(data.awards),
    renderHistory(data.history)
  ].join('');

  renderFooter(data.footer);
  setupFadeIn();
  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
}

init();
