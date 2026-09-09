/* =========================================================
   Dan Calamia — Portfolio — main.js
   ========================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------
   Data: projects & experience
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'turtlebot',
    year: '4e année',
    category: 'academic',
    title: 'TurtleBot — Navigation autonome sous ROS2',
    img: 'assets/img/project-turtlebot.jpg',
    tags: ['ROS2', 'OpenCV', 'LIDAR', 'Gazebo'],
    desc: "Robot mobile suivant une ligne, évitant les obstacles et gérant des intersections, testé en simulation puis en réel.",
    details: [
      "Suivi de ligne par calcul du barycentre de la trajectoire via OpenCV et anticipation des virages.",
      "Système de décision aux ronds-points (choix de la sortie gauche ou droite).",
      "Évitement d'obstacles et navigation en couloir grâce au LIDAR.",
      "Tâche additionnelle : placer une balle dans un but.",
      "Validation d'abord en simulation Gazebo, puis déploiement sur le robot réel."
    ],
    gallery: ['assets/img/project-turtlebot.jpg']
  },
  {
    id: 'tram',
    year: '4e année',
    category: 'academic',
    title: 'Stockage d\'énergie embarqué pour tramway',
    img: 'assets/img/project-tram.jpg',
    tags: ['Optimisation', 'Algorithme génétique', 'Monte-Carlo'],
    desc: "Optimisation de la chute de tension et de la capacité batterie d'un système de stockage embarqué.",
    details: [
      "Objectif : optimiser la chute de tension (ΔV) et la capacité batterie d'un système de stockage d'énergie embarqué dans un tramway.",
      "Modélisation du système avec et sans batterie, gestion de la charge/décharge.",
      "Optimisation par simulation de Monte-Carlo et algorithme génétique NSGA-II, interprétation du front de Pareto.",
      "Résultats : capacité batterie optimale entre 4 500 et 21 500 kWh, seuil de fonctionnement entre 245 kW et 550 kW.",
      "Réduction des chutes de tension et amélioration de la stabilité du réseau."
    ],
    gallery: ['assets/img/project-tram.jpg']
  },
  {
    id: '3rrobot',
    year: '4e année',
    category: 'academic',
    title: 'Robot parallèle 3RRR',
    img: 'assets/img/project-3rrobot.jpg',
    tags: ['SolidWorks', 'Python', 'Cinématique'],
    desc: "Conception et simulation d'un robot manipulateur parallèle de type 3RRR.",
    details: [
      "Modélisation géométrique directe et inverse du manipulateur.",
      "Modélisation cinématique pour identifier les singularités.",
      "Simulation Python pour l'identification et l'évitement des singularités, suivi de trajectoire.",
      "Conception SolidWorks pour identifier les paramètres géométriques du robot optimal et sa surface de travail théorique."
    ],
    gallery: ['assets/img/project-3rrobot.jpg']
  },
  {
    id: 'hydroflow',
    year: '4e année',
    category: 'academic',
    title: 'Hydroflow — Concept de start-up',
    img: 'assets/img/project-hydroflow.jpg',
    tags: ['Gestion de projet', 'Analyse de risques'],
    desc: "Développement d'un concept de start-up en équipe, encadré par des intervenants Safran.",
    details: [
      "Analyse de contexte et des risques macro du projet.",
      "Planning, structuration du projet et étude de rentabilité.",
      "Passage besoins → fonctions → macro-système, budgétisation complète.",
      "Cours supervisé par des instructeurs issus de Safran."
    ],
    gallery: ['assets/img/project-hydroflow.jpg']
  },
  {
    id: 'videogames',
    year: '3e / 4e année',
    category: 'academic',
    title: 'Jeux vidéo en Python (POO)',
    img: 'assets/img/project-videogames.jpg',
    tags: ['Python', 'POO', 'GitHub'],
    desc: "Deux jeux vidéo développés en programmation orientée objet, en collaboration via GitHub.",
    details: [
      "Deux projets similaires : création de jeux vidéo en Python avec une architecture orientée objet.",
      "Apprentissage de la structuration d'un code maintenable et partageable en équipe.",
      "Travail collaboratif avec gestion de versions sur GitHub."
    ],
    gallery: ['assets/img/project-videogames.jpg']
  },
  {
    id: 'openrov',
    year: '2e année',
    category: 'academic',
    title: 'OpenROV — Robot sous-marin',
    img: 'assets/img/project-openrov.jpg',
    tags: ['Robotique sous-marine', 'SLAM', 'Capteurs'],
    desc: "Contribution à un projet de robotique marine visant à démocratiser l'exploration sous-marine.",
    details: [
      "Installation de capteurs ultrasoniques pour un fonctionnement autonome (implémentation SLAM).",
      "Travail sur l'étanchéité du submersible.",
      "Intégration de l'IMU et du capteur de pression.",
      "Recherche et développement sur la partie logicielle du robot."
    ],
    gallery: ['assets/img/project-openrov.jpg']
  },
  {
    id: 'meteorite',
    year: '2e année',
    category: 'academic',
    title: "Simulation d'approche d'une météorite",
    img: 'assets/img/project-meteorite.jpg',
    tags: ['Python', 'Matplotlib', 'C'],
    desc: "Simulation de la trajectoire d'une météorite sous l'effet de la gravité terrestre et de la traînée aérodynamique.",
    details: [
      "Forces modélisées : attraction gravitationnelle terrestre et traînée aérodynamique.",
      "Paramètres étudiés : angle initial, vitesse initiale, coefficient de traînée.",
      "Principes fondamentaux : dynamique newtonienne (F = ma).",
      "Méthode numérique : intégration de Verlet pour mettre à jour positions et vitesses à chaque pas de temps."
    ],
    gallery: ['assets/img/project-meteorite.jpg']
  },
  {
    id: 'canal',
    year: '1re année',
    category: 'academic',
    title: 'Canal artificiel — Métrologie',
    img: 'assets/img/project-canal.jpg',
    tags: ['Métrologie', 'Mécanique des fluides'],
    desc: "Premier projet mécanique : étude d'un canal artificiel avec analyse rigoureuse des incertitudes de mesure.",
    details: [
      "Toutes les mesures incluent une estimation d'incertitude.",
      "Type A : variation statistique sur des essais répétés.",
      "Type B : incertitudes issues de sources externes (spécifications instrumentales, calibration, références).",
      "Étude du débit (orange) en fonction de la vitesse du flotteur."
    ],
    gallery: ['assets/img/project-canal.jpg']
  },
  {
    id: 'homeauto',
    year: 'Projet personnel',
    category: 'personal',
    title: 'Domotique — Maison connectée',
    img: 'assets/img/project-homeauto.jpg',
    tags: ['Home Assistant', 'Raspberry Pi', 'ESP32', 'SolidWorks'],
    desc: "Système domotique sur mesure combinant matériel, logiciel et IoT.",
    details: [
      "Système domotique construit avec Home Assistant sur Raspberry Pi.",
      "Boîtier conçu sous SolidWorks avec ventilation interne.",
      "Microcontrôleur ESP32 intégré pour le contrôle de l'éclairage LED.",
      "Association matériel + logiciel + intégration IoT pour une solution complète."
    ],
    gallery: ['assets/img/project-homeauto.jpg']
  },
];

const EXPERIENCE = [
  {
    id: 'stage-2',
    year: '2e année',
    date: '2e année',
    org: 'EMC Techni & CETO — Tremblay-en-France',
    title: 'Renforcement structurel — chantier & bureau d\'études',
    desc: "Stage ouvrier puis bureau d'études dans le renforcement structurel : préparation de chantier, maçonnerie, sondages destructifs et non destructifs, pose de jauges, calculs réglementaires et rédaction de rapports.",
    tags: ['RDM6', 'SLS / ULS', 'Diagnostic structurel'],
    images: ['assets/img/project-structural.jpg', 'assets/img/project-structural-2.jpg']
  },
  {
    id: 'stage-3',
    year: '3e année',
    date: '3e année — Institut Jean Le Rond d\'Alembert',
    org: 'Recherche — Sorbonne Université',
    title: "Propagation d'ondes acoustiques dans les cristaux phononiques",
    desc: "Étude expérimentale et théorique de la propagation d'ondes acoustiques dans une structure périodique artificielle (cristal phononique), mise en évidence des bandes interdites selon l'angle d'incidence.",
    tags: ['Traitement du signal', 'FFT', 'Acoustique'],
    images: ['assets/img/project-phononic.jpg']
  },
  {
    id: 'stage-4',
    year: '4e année',
    date: '4e année — Département Master',
    org: 'Sorbonne Université & ENSAM',
    title: 'Développement d\'équipements robotiques pédagogiques',
    desc: "Amélioration de deux TP de robotique : déploiement multiplateforme du bras Pincher PX100 (Docker, compatibilité macOS/Windows/Linux) et portage MATLAB → Python du robot sériel 3R, avec réparation du matériel.",
    tags: ['Docker', 'Dynamixel', 'Python', 'ROS'],
    images: ['assets/img/project-roboticequip.jpg']
  },
  {
    id: 'stage-5',
    year: '5e année',
    date: '5e année — 2025 / 2026',
    org: 'Master 2 — Sorbonne Université & ENSAM',
    title: 'Cartographie sémantique multi-robot (LiDAR + caméra)',
    desc: "Fusion LiDAR-caméra pour construire des cartes sémantiques 3D, avec extension à un système multi-robot coopératif.",
    tags: ['LIO-SAM', 'YOLO', 'SLAM', 'Multi-robot'],
    images: ['assets/img/project-lidar-semantic.jpg', 'assets/img/project-lidar-robot.jpg', 'assets/img/project-lidar-osm.jpg'],
    details: [
      "Développement d'algorithmes combinant LIO-SAM (SLAM LiDAR avec fermeture de boucle) et YOLO (segmentation sémantique) pour fusionner un LiDAR 3D et une caméra couleur 2D.",
      "Entraînement, benchmarking et validation initiale sur le jeu de données KITTI.",
      "Génération de cartes a priori à partir d'OpenStreetMap pour la navigation autonome contextualisée.",
      "Tests réels en téléopération et acquisition de rosbags sur robots AgileX Ranger et Scout Mini.",
      "Extension de l'architecture à un système multi-robot avec fusion de cartes distribuée et fermeture de boucle inter-robot."
    ]
  },
];

/* ---------------------------------------------------------
   Nav: scroll state, mobile toggle, scrollspy, smooth anchors
   --------------------------------------------------------- */
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
const progressBar = document.querySelector('.progress-bar');

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksEl.classList.toggle('mobile-open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navLinksEl?.classList.remove('mobile-open');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a')];

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 10);

  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  const pct = scrollable > 0 ? (y / scrollable) * 100 : 0;
  progressBar.style.width = pct + '%';

  scrollspy();
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function scrollspy() {
  let current = sections[0]?.id;
  const offset = 140;
  for (const s of sections) {
    if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
  }
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}

/* ---------------------------------------------------------
   Reveal on scroll
   Primary trigger is IntersectionObserver; a plain scroll/resize
   position check runs alongside it as a backup so content can never
   get stuck invisible if the observer doesn't fire for any reason.
   Elements only start hidden once .js-ready is added below, so a
   total failure of this code simply leaves everything visible.
   --------------------------------------------------------- */
document.documentElement.classList.add('js-ready');

let revealObserver = null;
try {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
} catch (e) {
  revealObserver = null;
}

function checkRevealFallback() {
  const vh = window.innerHeight;
  document.querySelectorAll('.reveal:not(.in-view), .reveal-left:not(.in-view), .reveal-scale:not(.in-view)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      el.classList.add('in-view');
    }
  });
}
window.addEventListener('scroll', checkRevealFallback, { passive: true });
window.addEventListener('resize', checkRevealFallback);

function initReveal(root = document) {
  const els = root.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
  els.forEach(el => revealObserver?.observe(el));
  checkRevealFallback();
}

/* stagger helper: assign --d based on index within parent */
function staggerChildren(selectorParent, selectorChild, step = 0.08) {
  document.querySelectorAll(selectorParent).forEach(parent => {
    [...parent.querySelectorAll(selectorChild)].forEach((el, i) => {
      el.style.setProperty('--d', (i * step) + 's');
    });
  });
}

/* ---------------------------------------------------------
   Hero typed effect
   --------------------------------------------------------- */
const typedEl = document.getElementById('hero-typed');
const typedStrings = [
  'ingénieur en robotique.',
  'ROS2 · Python · SolidWorks.',
  'systèmes autonomes & perception.',
  'robots mobiles et humanoïdes.'
];

function typeLoop() {
  if (!typedEl) return;
  if (prefersReducedMotion) { typedEl.textContent = typedStrings[0]; return; }

  let strIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = typedStrings[strIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1700);
        return;
      }
      setTimeout(tick, 55 + Math.random() * 40);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        strIndex = (strIndex + 1) % typedStrings.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 28);
    }
  }
  tick();
}
typeLoop();

/* ---------------------------------------------------------
   Hero canvas: circuit / node network animation
   --------------------------------------------------------- */
(function heroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [];
  const mouse = { x: null, y: null };

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000));

  function makeNodes() {
    nodes = [];
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
        r: (Math.random() * 1.6 + 0.8) * devicePixelRatio,
      });
    }
  }
  makeNodes();
  window.addEventListener('resize', makeNodes);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * devicePixelRatio;
    mouse.y = (e.clientY - rect.top) * devicePixelRatio;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  const linkDist = 150 * devicePixelRatio;
  const accent = '57,255,168';
  const accent2 = '45,212,255';

  function frame() {
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      if (mouse.x !== null) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDist * 1.3 && d > 0.01) {
          const force = (1 - d / (linkDist * 1.3)) * 0.55;
          n.x += (dx / d) * force;
          n.y += (dy / d) * force;
        }
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDist) {
          const alpha = (1 - d / linkDist) * 0.5;
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 1 * devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${accent2}, 0.9)`;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReducedMotion) requestAnimationFrame(frame);
  }
  frame();
})();

/* ---------------------------------------------------------
   Projects: render cards + filters + tilt
   --------------------------------------------------------- */
const projectsGrid = document.getElementById('projects-grid');
const filterRow = document.getElementById('filter-row');

function projectCardHTML(p, i) {
  const catLabel = p.category === 'personal' ? 'Personnel' : 'Académique';
  return `
  <article class="project-card reveal-scale" data-id="${p.id}" data-cat="${p.category}" style="--d:${(i % 6) * 0.06}s">
    <div class="thumb">
      <span class="idx">0${i + 1}</span>
      <span class="cat-badge">${catLabel}</span>
      <img src="${p.img}" alt="${p.title}" loading="lazy">
    </div>
    <div class="body">
      <div class="meta">${p.year}</div>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <span class="more-link">Voir le détail <span class="arrow">→</span></span>
    </div>
  </article>`;
}

function renderProjects(filter = 'all') {
  const list = PROJECTS.filter(p => filter === 'all' || p.category === filter);
  projectsGrid.innerHTML = list.map((p, i) => projectCardHTML(p, i)).join('');
  initReveal(projectsGrid);
  attachCardEvents();
}
renderProjects();

filterRow?.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

function attachCardEvents() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));

    if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    }
  });
}

/* ---------------------------------------------------------
   Modal
   --------------------------------------------------------- */
const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const catLabel = p.category === 'personal' ? 'Projet personnel' : 'Projet académique';

  modalBox.innerHTML = `
    <div class="modal-img">
      <button class="modal-close" aria-label="Fermer">✕</button>
      <img src="${p.img}" alt="${p.title}">
    </div>
    <div class="modal-content">
      <div class="m-meta">${catLabel} · ${p.year}</div>
      <h3>${p.title}</h3>
      <p class="m-summary">${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <ul class="m-details">${p.details.map(d => `<li>${d}</li>`).join('')}</ul>
      <div class="m-links">
        <a class="btn btn-ghost" href="https://github.com/Dan-project" target="_blank" rel="noopener">↗ Voir sur GitHub</a>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.classList.add('modal-open');
  modalBox.querySelector('.modal-close').addEventListener('click', closeModal);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.classList.remove('modal-open');
}

modalOverlay?.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ---------------------------------------------------------
   Experience render: quick-jump timeline nav + full inline stage cards
   --------------------------------------------------------- */
const expList = document.getElementById('exp-list');
const expNav = document.getElementById('exp-nav');

if (expNav) {
  expNav.innerHTML = EXPERIENCE.map(e => `
    <a href="#${e.id}" class="exp-nav-item" data-target="${e.id}"><span class="dot"></span>${e.year}</a>
  `).join('');
}

if (expList) {
  expList.innerHTML = EXPERIENCE.map((e, i) => `
    <article class="exp-item reveal" id="${e.id}" style="--d:${i * 0.08}s">
      <div class="exp-meta">
        <div class="exp-date">${e.date}</div>
        <div class="exp-org">${e.org}</div>
      </div>
      <div class="exp-body">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        ${e.details ? `<ul class="exp-details">${e.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
        <div class="tags">${e.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="exp-gallery exp-gallery-${e.images.length}">
          ${e.images.map(src => `<img src="${src}" alt="${e.title}" loading="lazy">`).join('')}
        </div>
      </div>
    </article>
  `).join('');
  initReveal(expList);
}

/* highlight the active stage in the quick-jump nav while scrolling */
if (expNav) {
  const expSections = EXPERIENCE.map(e => document.getElementById(e.id)).filter(Boolean);
  const expNavLinks = [...expNav.querySelectorAll('.exp-nav-item')];
  function updateExpNav() {
    let current = expSections[0]?.id;
    for (const s of expSections) {
      if (s.getBoundingClientRect().top - 160 <= 0) current = s.id;
    }
    expNavLinks.forEach(a => a.classList.toggle('active', a.dataset.target === current));
  }
  window.addEventListener('scroll', updateExpNav, { passive: true });
  updateExpNav();
}

/* ---------------------------------------------------------
   Skill language bars animate on view
   --------------------------------------------------------- */
document.querySelectorAll('.lang-bar-fill').forEach(el => {
  const target = el.dataset.width;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.style.width = target + '%';
        obs.disconnect();
      }
    });
  }, { threshold: 0.4 });
  obs.observe(el);
});

/* ---------------------------------------------------------
   Init reveal + stagger for static content
   --------------------------------------------------------- */
staggerChildren('.timeline', '.timeline-item', 0.1);
staggerChildren('.skills-grid', '.skill-card', 0.08);
staggerChildren('.contact-grid', '.contact-card', 0.08);
initReveal();

/* set current year in footer */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
