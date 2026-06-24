/* ============================================================
   RENDER DYNAMIC CONTENT
   ============================================================ */
function renderSkills() {
  const container = document.getElementById("skillsMarquee");
  const rowCount = 3;
  const rows = Array.from({ length: rowCount }, () => []);
  SKILLS.forEach((skill, i) => rows[i % rowCount].push(skill));

  const speeds = [42, 50, 46]; // seconds per loop, slightly varied
  const directions = ["", "reverse", ""];

  container.innerHTML = rows.map((rowSkills, i) => {
    const pills = rowSkills.map((s) => `<span class="skill-pill">${s}</span>`).join("");
    // triple content so the loop point never appears on screen, even on wide viewports
    return `
      <div class="marquee-row ${directions[i]}">
        <div class="marquee-track" style="animation-duration:${speeds[i]}s;">
          ${pills}${pills}${pills}
        </div>
      </div>
    `;
  }).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map((p) => {
    const tags = p.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("");
    return `
      <article class="project-card tilt-card" data-tilt>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${tags}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="project-link">View code ↗</a>
      </article>
    `;
  }).join("");
}

function renderTools() {
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = TOOLS.map((cat) => {
    const chips = cat.items.map((item) => `<span class="tool-pill">${item}</span>`).join("");
    return `
      <div class="tool-card">
        <h3 class="tool-category">${cat.category}</h3>
        <div class="tool-pill-row">${chips}</div>
      </div>
    `;
  }).join("");
}

function renderEducation() {
  const list = document.getElementById("educationList");
  list.innerHTML = EDUCATION.map((e) => `
    <div class="edu-card">
      <h3 class="edu-degree">${e.degree}</h3>
      <p class="edu-institution">${e.institution}</p>
      <p class="edu-board">${e.board}</p>
      <div class="edu-meta">
        <span class="edu-years">${e.years}</span>
        <span class="edu-score">${e.score}</span>
      </div>
    </div>
  `).join("");
}

function renderCertificates() {
  const grid = document.getElementById("certGrid");
  grid.innerHTML = CERTIFICATES.map((c) => `
    <a href="${c.file}" target="_blank" rel="noopener" class="cert-tile tilt-card" data-tilt>
      <span class="cert-arrow">↗</span>
      <h3 class="cert-title">${c.title}</h3>
      <p class="cert-issuer">${c.issuer}</p>
      <p class="cert-date">${c.date}</p>
    </a>
  `).join("");
}

function renderResearch() {
  const list = document.getElementById("researchList");
  list.innerHTML = RESEARCH.map((r) => `
    <a href="${r.file}" target="_blank" rel="noopener" class="research-card">
      <span class="research-arrow">↗</span>
      <h3 class="research-title">${r.title}</h3>
      <p class="research-conference">${r.conference}</p>
      <p class="research-meta">${r.venue} · ${r.date}</p>
    </a>
  `).join("");
}

function renderEvents() {
  const slider = document.getElementById("eventsSlider");
  slider.innerHTML = EVENTS.map((src, i) => `
    <div class="event-slide" data-index="${i}">
      <img src="${src}" alt="">
    </div>
  `).join("");

  const prev = document.getElementById("eventsPrev");
  const next = document.getElementById("eventsNext");
  const scrollBySlide = (dir) => {
    const slide = slider.querySelector(".event-slide");
    if (!slide) return;
    const amount = slide.getBoundingClientRect().width + 24;
    slider.scrollBy({ left: dir * amount, behavior: "smooth" });
  };
  prev.addEventListener("click", () => scrollBySlide(-1));
  next.addEventListener("click", () => scrollBySlide(1));

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  const openLightbox = (src) => {
    lightboxImg.src = src;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  };

  slider.querySelectorAll(".event-slide").forEach((slide) => {
    slide.addEventListener("click", () => openLightbox(EVENTS[slide.dataset.index]));
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

renderSkills();
renderProjects();
renderResearch();
renderTools();
renderEducation();
renderCertificates();
renderEvents();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ============================================================
   AMBIENT CURSOR GLOW (page-wide, subtle)
   ============================================================ */
const glow = document.getElementById("cursorGlow");
let glowX = window.innerWidth / 2;
let glowY = window.innerHeight / 2;
let targetX = glowX;
let targetY = glowY;

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateGlow() {
  glowX += (targetX - glowX) * 0.12;
  glowY += (targetY - glowY) * 0.12;
  glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateGlow);
}
animateGlow();

/* ============================================================
   TILT CARD EFFECT (cards & photo tilt toward cursor)
   ============================================================ */
const tiltCards = document.querySelectorAll("[data-tilt]");
const MAX_TILT = 7; // degrees, kept subtle

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0 to 1
    const py = (e.clientY - rect.top) / rect.height;  // 0 to 1
    const ry = (px - 0.5) * MAX_TILT * 2;
    const rx = (0.5 - py) * MAX_TILT * 2;
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  });
});

/* Background is a static image (.bg-lines-fixed in style.css),
   fixed to the viewport. No animation, no scroll/cursor reactivity. */

