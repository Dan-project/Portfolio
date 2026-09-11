/* =========================================================
   Dan Calamia — Portfolio — main.js
   ========================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------
   i18n: static UI strings (data-i18n / data-i18n-html targets)
   --------------------------------------------------------- */
const I18N = {
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',

    'hero.kicker': 'OUVERT À TOUTE PROPOSITION D\'OPPORTUNITÉ',
    'hero.title2': 'Ingénieur Robotique.',
    'hero.lede': 'Étudiant en <strong>Master 2 Systèmes Avancés et Robotique</strong> (Sorbonne Université &amp; ENSAM, Cursus Master en Ingénierie), passionné par les <strong>robots mobiles et humanoïdes</strong>, leur autonomie, leur perception et leur contrôle.',
    'hero.btnProjects': 'Voir mes projets ↓',
    'hero.btnExperience': 'Voir mes stages ↓',
    'hero.btnContact': 'Me contacter',
    'hero.stat1': 'Projets robotique',
    'hero.stat2': 'Stages / expériences terrain',
    'hero.stat3': 'Ans de cursus CMI',

    'about.label': '// 01 — À propos',
    'about.h2': 'Du terrain aux algorithmes.',
    'about.intro': 'Un parcours mêlant mécanique, informatique et robotique, construit sur cinq ans de Cursus Master en Ingénierie (CMI).',
    'about.p1': "Je termine actuellement un <strong>Master en Robotique</strong> à Sorbonne Université, avec des enseignements suivis à l'ENSAM, après une licence en <strong>Ingénierie Mécanique</strong>. Ce parcours CMI (Cursus Master en Ingénierie) impose une charge de travail renforcée : 36 ECTS par semestre, des stages obligatoires, une mobilité internationale et des enseignements en innovation et entrepreneuriat.",
    'about.tl1date': '2024 — Présent',
    'about.tl1desc': "Master en Robotique (Année 2) + CMI, enseignements à l'ENSAM — Manipulateurs robotiques, modélisation et contrôle.",
    'about.tl2desc': "Semestre d'échange — systèmes mécaniques et méthodes numériques.",
    'about.tl3date': '2020 — 2023',
    'about.tl3desc': 'Licence en Ingénierie Mécanique + CMI — systèmes mécaniques, dynamique, mathématiques appliquées.',
    'about.terminal': `
      <div class="l"><span class="k">$</span> <span class="v">cat identite.json</span></div>
      <div class="l">{</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"nom"</span>: <span class="v">"Dan Calamia"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"role"</span>: <span class="v">"Ingénieur Robotique"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"formation"</span>: <span class="v">"M2 SAR — Sorbonne / ENSAM"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"interets"</span>: [<span class="v">"SLAM"</span>, <span class="v">"ROS2"</span>, <span class="v">"IA"</span>, <span class="v">"humanoïdes"</span>],</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"langues"</span>: [<span class="v">"FR"</span>, <span class="v">"EN"</span>]</div>
      <div class="l">}</div>
      <div class="l"><span class="c">// Certifications: TOEIC 830 (B2), Permis B</span></div>
    `,

    'skills.label': '// 02 — Compétences',
    'skills.h2': 'Stack technique.',
    'skills.intro': 'Des outils de développement aux plateformes robotiques, en passant par la conception mécanique.',
    'skills.card1h3': 'Développement',
    'skills.card2h3': 'Robotique & Outils techniques',
    'skills.card2list': '<li>ROS2</li><li>Gazebo</li><li>RViz</li><li>SolidWorks</li><li>Impression 3D</li><li>Docker / VM</li><li>OpenCV</li><li>Fritzing</li><li>Raspberry Pi</li><li>GitHub</li><li>POO</li><li>RDM6</li><li>Unity (en cours)</li>',
    'skills.card3h3': 'Langues',
    'skills.lang1name': 'Français', 'skills.lang1level': 'Courant',
    'skills.lang2name': 'Anglais', 'skills.lang2level': 'TOEIC B2 validé',

    'projects.label': '// 03 — Projets',
    'projects.h2': 'Cliquez pour explorer.',
    'projects.intro': 'Projets académiques et personnels, du prototype mécanique à la cartographie multi-robot. Cliquez sur une carte pour voir le détail.',
    'projects.filterAll': 'Tous',
    'projects.filterAcademic': 'Académiques',
    'projects.filterPersonal': 'Personnels',
    'projects.catAcademic': 'Académique',
    'projects.catPersonal': 'Personnel',
    'projects.seeDetails': 'Voir le détail',
    'projects.modalAcademic': 'Projet académique',
    'projects.modalPersonal': 'Projet personnel',
    'projects.viewGithub': '↗ Voir sur GitHub',
    'projects.close': 'Fermer',

    'experience.label': '// 04 — Expérience',
    'experience.h2': 'Stages',
    'experience.intro': 'Quatre stages, une année de cursus à la fois : chantier, recherche académique, développement pédagogique et robotique multi-robot.',
    'experience.navAria': 'Aller directement à un stage',

    'contact.label': '// 05 — Contact',
    'contact.h2': 'Discutons robotique.',
    'contact.intro': 'Ouvert à toute proposition d\'opportunité en ingénierie robotique.',
    'contact.pdfLbl': 'CV',
    'contact.pdfVal': 'Télécharger le CV',

    'footer.line2': 'Dan Calamia. Tous droits réservés.',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    'hero.kicker': 'OPEN TO ANY OPPORTUNITY',
    'hero.title2': 'Robotics Engineer.',
    'hero.lede': "A graduate student in <strong>Advanced Systems and Robotics (M2)</strong> (Sorbonne Université &amp; ENSAM, Cursus Master en Ingénierie), passionate about <strong>mobile and humanoid robots</strong> — their autonomy, perception, and control.",
    'hero.btnProjects': 'View my projects ↓',
    'hero.btnExperience': 'View my internships ↓',
    'hero.btnContact': 'Get in touch',
    'hero.stat1': 'Robotics projects',
    'hero.stat2': 'Internships / fieldwork',
    'hero.stat3': 'Years in the CMI program',

    'about.label': '// 01 — About',
    'about.h2': 'From the field to the algorithms.',
    'about.intro': 'A path blending mechanics, computer science and robotics, built over five years in the Cursus Master en Ingénierie (CMI).',
    'about.p1': "I'm currently finishing a <strong>Master's in Robotics</strong> at Sorbonne Université, with coursework taken at ENSAM, after a Bachelor's in <strong>Mechanical Engineering</strong>. This CMI program (Cursus Master en Ingénierie) comes with a heavier workload: 36 ECTS per semester, mandatory internships, international mobility, and courses in innovation and entrepreneurship.",
    'about.tl1date': '2024 — Present',
    'about.tl1desc': "Master's in Robotics (Year 2) + CMI, coursework at ENSAM — Robotic manipulators, modeling and control.",
    'about.tl2desc': 'Exchange semester — mechanical systems and numerical methods.',
    'about.tl3date': '2020 — 2023',
    'about.tl3desc': "Bachelor's in Mechanical Engineering + CMI — mechanical systems, dynamics, applied mathematics.",
    'about.terminal': `
      <div class="l"><span class="k">$</span> <span class="v">cat identity.json</span></div>
      <div class="l">{</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"name"</span>: <span class="v">"Dan Calamia"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"role"</span>: <span class="v">"Robotics Engineer"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"education"</span>: <span class="v">"M2 SAR — Sorbonne / ENSAM"</span>,</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"interests"</span>: [<span class="v">"SLAM"</span>, <span class="v">"ROS2"</span>, <span class="v">"AI"</span>, <span class="v">"humanoids"</span>],</div>
      <div class="l">&nbsp;&nbsp;<span class="k">"languages"</span>: [<span class="v">"FR"</span>, <span class="v">"EN"</span>]</div>
      <div class="l">}</div>
      <div class="l"><span class="c">// Certifications: TOEIC 830 (B2), Driver's license (FR)</span></div>
    `,

    'skills.label': '// 02 — Skills',
    'skills.h2': 'Tech stack.',
    'skills.intro': 'From development tools to robotics platforms, by way of mechanical design.',
    'skills.card1h3': 'Development',
    'skills.card2h3': 'Robotics & Technical Tools',
    'skills.card2list': '<li>ROS2</li><li>Gazebo</li><li>RViz</li><li>SolidWorks</li><li>3D Printing</li><li>Docker / VM</li><li>OpenCV</li><li>Fritzing</li><li>Raspberry Pi</li><li>GitHub</li><li>OOP</li><li>RDM6</li><li>Unity (in progress)</li>',
    'skills.card3h3': 'Languages',
    'skills.lang1name': 'French', 'skills.lang1level': 'Native',
    'skills.lang2name': 'English', 'skills.lang2level': 'TOEIC B2 certified',

    'projects.label': '// 03 — Projects',
    'projects.h2': 'Click to explore.',
    'projects.intro': 'Academic and personal projects, from mechanical prototypes to multi-robot mapping. Click a card to see the details.',
    'projects.filterAll': 'All',
    'projects.filterAcademic': 'Academic',
    'projects.filterPersonal': 'Personal',
    'projects.catAcademic': 'Academic',
    'projects.catPersonal': 'Personal',
    'projects.seeDetails': 'See details',
    'projects.modalAcademic': 'Academic project',
    'projects.modalPersonal': 'Personal project',
    'projects.viewGithub': '↗ View on GitHub',
    'projects.close': 'Close',

    'experience.label': '// 04 — Experience',
    'experience.h2': 'Internships',
    'experience.intro': 'Four internships, one program year at a time: construction site, academic research, educational development, and multi-robot robotics.',
    'experience.navAria': 'Jump to internship',

    'contact.label': '// 05 — Contact',
    'contact.h2': "Let's talk robotics.",
    'contact.intro': 'Open to any opportunity in robotics engineering.',
    'contact.pdfLbl': 'CV',
    'contact.pdfVal': 'Download the CV',

    'footer.line2': 'Dan Calamia. All rights reserved.',
  },
};

let currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'fr';

/* ---------------------------------------------------------
   Data: projects & experience (bilingual: fr / en)
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'turtlebot', category: 'academic', img: 'assets/img/project-turtlebot.jpg', gallery: ['assets/img/project-turtlebot.jpg'],
    fr: {
      year: '4e année', title: 'TurtleBot — Navigation autonome sous ROS2',
      tags: ['ROS2', 'OpenCV', 'LIDAR', 'Gazebo'],
      desc: "Robot mobile suivant une ligne, évitant les obstacles et gérant des intersections, testé en simulation puis en réel.",
      details: [
        "Suivi de ligne par calcul du barycentre de la trajectoire via OpenCV et anticipation des virages.",
        "Système de décision aux ronds-points (choix de la sortie gauche ou droite).",
        "Évitement d'obstacles et navigation en couloir grâce au LIDAR.",
        "Tâche additionnelle : placer une balle dans un but.",
        "Validation d'abord en simulation Gazebo, puis déploiement sur le robot réel."
      ]
    },
    en: {
      year: '4th year', title: 'TurtleBot — Autonomous Navigation on ROS2',
      tags: ['ROS2', 'OpenCV', 'LIDAR', 'Gazebo'],
      desc: "Mobile robot following a line, avoiding obstacles, and handling intersections — tested in simulation then on real hardware.",
      details: [
        "Line following by computing the trajectory's centroid via OpenCV, anticipating turns.",
        "Decision system at roundabouts (choosing the left or right exit).",
        "Obstacle avoidance and corridor navigation using LIDAR.",
        "Bonus task: placing a ball into a goal.",
        "Validated first in Gazebo simulation, then deployed on the real robot."
      ]
    }
  },
  {
    id: 'tram', category: 'academic', img: 'assets/img/project-tram.jpg', gallery: ['assets/img/project-tram.jpg'],
    fr: {
      year: '4e année', title: "Stockage d'énergie embarqué pour tramway",
      tags: ['Optimisation', 'Algorithme génétique', 'Monte-Carlo'],
      desc: "Optimisation de la chute de tension et de la capacité batterie d'un système de stockage embarqué.",
      details: [
        "Objectif : optimiser la chute de tension (ΔV) et la capacité batterie d'un système de stockage d'énergie embarqué dans un tramway.",
        "Modélisation du système avec et sans batterie, gestion de la charge/décharge.",
        "Optimisation par simulation de Monte-Carlo et algorithme génétique NSGA-II, interprétation du front de Pareto.",
        "Résultats : capacité batterie optimale entre 4 500 et 21 500 kWh, seuil de fonctionnement entre 245 kW et 550 kW.",
        "Réduction des chutes de tension et amélioration de la stabilité du réseau."
      ]
    },
    en: {
      year: '4th year', title: 'Onboard Energy Storage for a Tramway',
      tags: ['Optimization', 'Genetic Algorithm', 'Monte Carlo'],
      desc: "Optimizing voltage drop and battery capacity for an onboard energy storage system.",
      details: [
        "Goal: optimize voltage drop (ΔV) and battery capacity for an onboard energy storage system in a tramway.",
        "System modeling with and without a battery, charge/discharge management.",
        "Optimization via Monte Carlo simulation and the NSGA-II genetic algorithm, interpreting the Pareto front.",
        "Results: optimal battery capacity between 4,500 and 21,500 kWh, operating threshold between 245 kW and 550 kW.",
        "Reduced voltage drops and improved grid stability."
      ]
    }
  },
  {
    id: '3rrobot', category: 'academic', img: 'assets/img/project-3rrobot.jpg', gallery: ['assets/img/project-3rrobot.jpg'],
    fr: {
      year: '4e année', title: 'Robot parallèle 3RRR',
      tags: ['SolidWorks', 'Python', 'Cinématique'],
      desc: "Conception et simulation d'un robot manipulateur parallèle de type 3RRR.",
      details: [
        "Modélisation géométrique directe et inverse du manipulateur.",
        "Modélisation cinématique pour identifier les singularités.",
        "Simulation Python pour l'identification et l'évitement des singularités, suivi de trajectoire.",
        "Conception SolidWorks pour identifier les paramètres géométriques du robot optimal et sa surface de travail théorique."
      ]
    },
    en: {
      year: '4th year', title: '3RRR Parallel Robot',
      tags: ['SolidWorks', 'Python', 'Kinematics'],
      desc: "Design and simulation of a 3RRR-type parallel manipulator robot.",
      details: [
        "Direct and inverse geometric modeling of the manipulator.",
        "Kinematic modeling to identify singularities.",
        "Python simulation for identifying and avoiding singularities, trajectory tracking.",
        "SolidWorks design to identify the geometric parameters of the optimal robot and its theoretical workspace."
      ]
    }
  },
  {
    id: 'hydroflow', category: 'academic', img: 'assets/img/project-hydroflow.jpg', gallery: ['assets/img/project-hydroflow.jpg'],
    fr: {
      year: '4e année', title: 'Hydroflow — Concept de start-up',
      tags: ['Gestion de projet', 'Analyse de risques'],
      desc: "Développement d'un concept de start-up en équipe, encadré par des intervenants Safran.",
      details: [
        "Analyse de contexte et des risques macro du projet.",
        "Planning, structuration du projet et étude de rentabilité.",
        "Passage besoins → fonctions → macro-système, budgétisation complète.",
        "Cours supervisé par des instructeurs issus de Safran."
      ]
    },
    en: {
      year: '4th year', title: 'Hydroflow — Start-up Concept',
      tags: ['Project Management', 'Risk Analysis'],
      desc: "Developing a start-up concept as a team, supervised by instructors from Safran.",
      details: [
        "Context analysis and macro risk assessment for the project.",
        "Planning, project structuring, and profitability study.",
        "Needs → functions → macro-system, full budgeting.",
        "Course supervised by instructors from Safran."
      ]
    }
  },
  {
    id: 'videogames', category: 'academic', img: 'assets/img/project-videogames.jpg', gallery: ['assets/img/project-videogames.jpg'],
    fr: {
      year: '3e / 4e année', title: 'Jeux vidéo en Python (POO)',
      tags: ['Python', 'POO', 'GitHub'],
      desc: "Deux jeux vidéo développés en programmation orientée objet, en collaboration via GitHub.",
      details: [
        "Deux projets similaires : création de jeux vidéo en Python avec une architecture orientée objet.",
        "Apprentissage de la structuration d'un code maintenable et partageable en équipe.",
        "Travail collaboratif avec gestion de versions sur GitHub."
      ]
    },
    en: {
      year: '3rd / 4th year', title: 'Python Video Games (OOP)',
      tags: ['Python', 'OOP', 'GitHub'],
      desc: "Two video games built with object-oriented programming, developed collaboratively on GitHub.",
      details: [
        "Two similar projects: building video games in Python with an object-oriented architecture.",
        "Learned how to structure maintainable, shareable code as a team.",
        "Collaborative work with version control on GitHub."
      ]
    }
  },
  {
    id: 'openrov', category: 'academic', img: 'assets/img/project-openrov.jpg', gallery: ['assets/img/project-openrov.jpg'],
    fr: {
      year: '2e année', title: 'OpenROV — Robot sous-marin',
      tags: ['Robotique sous-marine', 'SLAM', 'Capteurs'],
      desc: "Contribution à un projet de robotique marine visant à démocratiser l'exploration sous-marine.",
      details: [
        "Installation de capteurs ultrasoniques pour un fonctionnement autonome (implémentation SLAM).",
        "Travail sur l'étanchéité du submersible.",
        "Intégration de l'IMU et du capteur de pression.",
        "Recherche et développement sur la partie logicielle du robot."
      ]
    },
    en: {
      year: '2nd year', title: 'OpenROV — Underwater Robot',
      tags: ['Underwater Robotics', 'SLAM', 'Sensors'],
      desc: "Contributing to a marine robotics project aiming to democratize underwater exploration.",
      details: [
        "Installed ultrasonic sensors for autonomous operation (SLAM implementation).",
        "Worked on waterproofing the submersible.",
        "Integrated the IMU and pressure sensor.",
        "Research and development on the robot's software side."
      ]
    }
  },
  {
    id: 'meteorite', category: 'academic', img: 'assets/img/project-meteorite.jpg', gallery: ['assets/img/project-meteorite.jpg'],
    fr: {
      year: '2e année', title: "Simulation d'approche d'une météorite",
      tags: ['Python', 'Matplotlib', 'C'],
      desc: "Simulation de la trajectoire d'une météorite sous l'effet de la gravité terrestre et de la traînée aérodynamique.",
      details: [
        "Forces modélisées : attraction gravitationnelle terrestre et traînée aérodynamique.",
        "Paramètres étudiés : angle initial, vitesse initiale, coefficient de traînée.",
        "Principes fondamentaux : dynamique newtonienne (F = ma).",
        "Méthode numérique : intégration de Verlet pour mettre à jour positions et vitesses à chaque pas de temps."
      ]
    },
    en: {
      year: '2nd year', title: 'Meteorite Approach Simulation',
      tags: ['Python', 'Matplotlib', 'C'],
      desc: "Simulating a meteorite's trajectory under Earth's gravity and aerodynamic drag.",
      details: [
        "Forces modeled: Earth's gravitational pull and aerodynamic drag.",
        "Parameters studied: initial angle, initial speed, drag coefficient.",
        "Fundamental principles: Newtonian dynamics (F = ma).",
        "Numerical method: Verlet integration to update position and velocity at each time step."
      ]
    }
  },
  {
    id: 'canal', category: 'academic', img: 'assets/img/project-canal.jpg', gallery: ['assets/img/project-canal.jpg'],
    fr: {
      year: '1re année', title: 'Canal artificiel — Métrologie',
      tags: ['Métrologie', 'Mécanique des fluides'],
      desc: "Premier projet mécanique : étude d'un canal artificiel avec analyse rigoureuse des incertitudes de mesure.",
      details: [
        "Toutes les mesures incluent une estimation d'incertitude.",
        "Type A : variation statistique sur des essais répétés.",
        "Type B : incertitudes issues de sources externes (spécifications instrumentales, calibration, références).",
        "Étude du débit (orange) en fonction de la vitesse du flotteur."
      ]
    },
    en: {
      year: '1st year', title: 'Artificial Canal — Metrology',
      tags: ['Metrology', 'Fluid Mechanics'],
      desc: "First mechanical project: studying an artificial canal with a rigorous analysis of measurement uncertainty.",
      details: [
        "Every measurement includes an uncertainty estimate.",
        "Type A: statistical variation across repeated trials.",
        "Type B: uncertainty from external sources (instrument specs, calibration, references).",
        "Studying flow rate (orange) as a function of float velocity."
      ]
    }
  },
  {
    id: 'homeauto', category: 'personal', img: 'assets/img/project-homeauto.jpg', gallery: ['assets/img/project-homeauto.jpg'],
    fr: {
      year: 'Projet personnel', title: 'Domotique — Maison connectée',
      tags: ['Home Assistant', 'Raspberry Pi', 'ESP32', 'SolidWorks'],
      desc: "Système domotique sur mesure combinant matériel, logiciel et IoT.",
      details: [
        "Système domotique construit avec Home Assistant sur Raspberry Pi.",
        "Boîtier conçu sous SolidWorks avec ventilation interne.",
        "Microcontrôleur ESP32 intégré pour le contrôle de l'éclairage LED.",
        "Association matériel + logiciel + intégration IoT pour une solution complète."
      ]
    },
    en: {
      year: 'Personal project', title: 'Home Automation — Connected House',
      tags: ['Home Assistant', 'Raspberry Pi', 'ESP32', 'SolidWorks'],
      desc: "A custom home automation system combining hardware, software, and IoT.",
      details: [
        "Home automation system built with Home Assistant on a Raspberry Pi.",
        "Enclosure designed in SolidWorks with internal ventilation.",
        "ESP32 microcontroller integrated to control LED lighting.",
        "Combined hardware + software + IoT integration into a complete solution."
      ]
    }
  },
];

const EXPERIENCE = [
  {
    id: 'stage-2', images: ['assets/img/project-structural.jpg', 'assets/img/project-structural-2.jpg'],
    fr: {
      year: '2e année', date: '2e année', org: 'EMC Techni & CETO — Tremblay-en-France',
      title: "Renforcement structurel — chantier & bureau d'études",
      tags: ['RDM6', 'SLS / ULS', 'Diagnostic structurel'],
      desc: "Stage ouvrier puis bureau d'études dans le renforcement structurel : préparation de chantier, maçonnerie, sondages destructifs et non destructifs, pose de jauges, calculs réglementaires et rédaction de rapports."
    },
    en: {
      year: '2nd year', date: '2nd year', org: 'EMC Techni & CETO — Tremblay-en-France',
      title: 'Structural Reinforcement — Site Work & Design Office',
      tags: ['RDM6', 'SLS / ULS', 'Structural Diagnostics'],
      desc: "Worked as a site laborer, then in the design office, on structural reinforcement: site preparation, masonry, destructive and non-destructive testing, gauge installation, regulatory calculations, and report writing."
    }
  },
  {
    id: 'stage-3', images: ['assets/img/project-phononic.jpg'],
    fr: {
      year: '3e année', date: '3e année', org: "Institut Jean Le Rond d'Alembert — Sorbonne Université, Paris",
      title: "Propagation d'ondes acoustiques dans les cristaux phononiques",
      tags: ['Traitement du signal', 'FFT', 'Acoustique'],
      desc: "Étude expérimentale et théorique de la propagation d'ondes acoustiques dans une structure périodique artificielle (cristal phononique), mise en évidence des bandes interdites selon l'angle d'incidence."
    },
    en: {
      year: '3rd year', date: '3rd year', org: "Institut Jean Le Rond d'Alembert — Sorbonne Université, Paris",
      title: 'Acoustic Wave Propagation in Phononic Crystals',
      tags: ['Signal Processing', 'FFT', 'Acoustics'],
      desc: "Experimental and theoretical study of acoustic wave propagation in an artificial periodic structure (phononic crystal), highlighting band gaps depending on the angle of incidence."
    }
  },
  {
    id: 'stage-4', images: ['assets/img/project-roboticequip-2.jpg', 'assets/img/project-roboticequip.jpg'],
    fr: {
      year: '4e année', date: '4e année', org: 'Spi — Sorbonne Université, Paris',
      title: "Développement d'équipements robotiques pédagogiques",
      tags: ['Docker', 'Dynamixel', 'Python', 'ROS'],
      desc: "Amélioration de deux TP de robotique : déploiement multiplateforme du bras Pincher PX100 (Docker, compatibilité macOS/Windows/Linux) et portage MATLAB → Python du robot sériel 3R, avec réparation du matériel."
    },
    en: {
      year: '4th year', date: '4th year', org: 'Spi — Sorbonne Université, Paris',
      title: 'Developing Educational Robotics Equipment',
      tags: ['Docker', 'Dynamixel', 'Python', 'ROS'],
      desc: "Improved two robotics labs: multi-platform deployment of the Pincher PX100 arm (Docker, macOS/Windows/Linux compatibility) and porting the 3R serial robot from MATLAB to Python, along with hardware repairs."
    }
  },
  {
    id: 'stage-5', images: ['assets/img/project-lidar-semantic.jpg', 'assets/img/project-lidar-robot.jpg', 'assets/img/project-lidar-osm.jpg'],
    fr: {
      year: '5e année', date: '5e année', org: "CRIStAL — Université de Lille, Villeneuve d'Ascq",
      title: 'Cartographie sémantique multi-robot (LiDAR + caméra)',
      tags: ['LIO-SAM', 'YOLO', 'SLAM', 'Multi-robot'],
      desc: "Fusion LiDAR-caméra pour construire des cartes sémantiques 3D, avec extension à un système multi-robot coopératif.",
      details: [
        "Développement d'algorithmes combinant LIO-SAM (SLAM LiDAR avec fermeture de boucle) et YOLO (segmentation sémantique) pour fusionner un LiDAR 3D et une caméra couleur 2D.",
        "Entraînement, benchmarking et validation initiale sur le jeu de données KITTI.",
        "Génération de cartes a priori à partir d'OpenStreetMap pour la navigation autonome contextualisée.",
        "Tests réels en téléopération et acquisition de rosbags sur robots AgileX Ranger et Scout Mini.",
        "Extension de l'architecture à un système multi-robot avec fusion de cartes distribuée et fermeture de boucle inter-robot."
      ]
    },
    en: {
      year: '5th year', date: '5th year', org: "CRIStAL — Université de Lille, Villeneuve d'Ascq",
      title: 'Multi-Robot Semantic Mapping (LiDAR + Camera)',
      tags: ['LIO-SAM', 'YOLO', 'SLAM', 'Multi-robot'],
      desc: "LiDAR-camera fusion to build 3D semantic maps, extended into a cooperative multi-robot system.",
      details: [
        "Developed algorithms combining LIO-SAM (LiDAR SLAM with loop closure) and YOLO (semantic segmentation) to fuse a 3D LiDAR with a 2D color camera.",
        "Training, benchmarking, and initial validation on the KITTI dataset.",
        "Generated prior maps from OpenStreetMap for context-aware autonomous navigation.",
        "Real-world testing via teleoperation and rosbag acquisition on AgileX Ranger and Scout Mini robots.",
        "Extended the architecture to a multi-robot system with distributed map fusion and inter-robot loop closure."
      ]
    }
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

/* extra safety net: some browsers restore scroll position on reload
   even with history.scrollRestoration set early in <head>, so force
   the top once more once everything has settled (unless the URL
   points at a specific section via #hash). */
if (!location.hash) {
  window.addEventListener('load', () => window.scrollTo(0, 0));
}

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
const TYPED_STRINGS = {
  fr: ['ingénieur en robotique.', 'ROS2 · Python · SolidWorks.', 'systèmes autonomes & perception.', 'robots mobiles et humanoïdes.'],
  en: ['a robotics engineer.', 'ROS2 · Python · SolidWorks.', 'autonomous systems & perception.', 'mobile & humanoid robots.'],
};
let typedTimer = null;

function typeLoop() {
  if (!typedEl) return;
  if (typedTimer) clearTimeout(typedTimer);
  const strings = TYPED_STRINGS[currentLang];
  if (prefersReducedMotion) { typedEl.textContent = strings[0]; return; }

  let strIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = strings[strIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        typedTimer = setTimeout(tick, 1700);
        return;
      }
      typedTimer = setTimeout(tick, 55 + Math.random() * 40);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        strIndex = (strIndex + 1) % strings.length;
        typedTimer = setTimeout(tick, 400);
        return;
      }
      typedTimer = setTimeout(tick, 28);
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
let currentFilter = 'all';

function projectCardHTML(p, i) {
  const t = p[currentLang];
  const catLabel = p.category === 'personal' ? I18N[currentLang]['projects.catPersonal'] : I18N[currentLang]['projects.catAcademic'];
  return `
  <article class="project-card reveal-scale" data-id="${p.id}" data-cat="${p.category}" style="--d:${(i % 6) * 0.06}s">
    <div class="thumb">
      <span class="idx">0${i + 1}</span>
      <span class="cat-badge">${catLabel}</span>
      <img src="${p.img}" alt="${t.title}" loading="lazy">
    </div>
    <div class="body">
      <div class="meta">${t.year}</div>
      <h3>${t.title}</h3>
      <p class="desc">${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <span class="more-link">${I18N[currentLang]['projects.seeDetails']} <span class="arrow">→</span></span>
    </div>
  </article>`;
}

function renderProjects(filter = currentFilter) {
  currentFilter = filter;
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
let openModalId = null;

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  openModalId = id;
  const t = p[currentLang];
  const catLabel = p.category === 'personal' ? I18N[currentLang]['projects.modalPersonal'] : I18N[currentLang]['projects.modalAcademic'];

  modalBox.innerHTML = `
    <div class="modal-img">
      <button class="modal-close" aria-label="${I18N[currentLang]['projects.close']}">✕</button>
      <img src="${p.img}" alt="${t.title}">
    </div>
    <div class="modal-content">
      <div class="m-meta">${catLabel} · ${t.year}</div>
      <h3>${t.title}</h3>
      <p class="m-summary">${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <ul class="m-details">${t.details.map(d => `<li>${d}</li>`).join('')}</ul>
      <div class="m-links">
        <a class="btn btn-ghost" href="https://github.com/Dan-project" target="_blank" rel="noopener">${I18N[currentLang]['projects.viewGithub']}</a>
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
  openModalId = null;
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

function renderExperience() {
  if (expNav) {
    expNav.setAttribute('aria-label', I18N[currentLang]['experience.navAria']);
    expNav.innerHTML = EXPERIENCE.map(e => `
      <a href="#${e.id}" class="exp-nav-item" data-target="${e.id}"><span class="dot"></span>${e[currentLang].year}</a>
    `).join('');
  }

  if (expList) {
    expList.innerHTML = EXPERIENCE.map((e, i) => {
      const t = e[currentLang];
      return `
      <article class="exp-item reveal" id="${e.id}" style="--d:${i * 0.08}s">
        <div class="exp-meta">
          <div class="exp-date">${t.date}</div>
          <div class="exp-org">${t.org}</div>
        </div>
        <div class="exp-body">
          <h3>${t.title}</h3>
          <p>${t.desc}</p>
          ${t.details ? `<ul class="exp-details">${t.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
          <div class="tags">${t.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <div class="exp-gallery exp-gallery-${e.images.length}">
            ${e.images.map(src => `<img src="${src}" alt="${t.title}" loading="lazy">`).join('')}
          </div>
        </div>
      </article>
    `;
    }).join('');
    initReveal(expList);
  }
}
renderExperience();

/* highlight the active stage in the quick-jump nav while scrolling */
let expSections = [];
let expNavLinks = [];
function refreshExpNavTargets() {
  expSections = EXPERIENCE.map(e => document.getElementById(e.id)).filter(Boolean);
  expNavLinks = expNav ? [...expNav.querySelectorAll('.exp-nav-item')] : [];
}
function updateExpNav() {
  if (!expNavLinks.length) return;
  let current = expSections[0]?.id;
  for (const s of expSections) {
    if (s.getBoundingClientRect().top - 160 <= 0) current = s.id;
  }
  expNavLinks.forEach(a => a.classList.toggle('active', a.dataset.target === current));
}
if (expNav) {
  refreshExpNavTargets();
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
   i18n: apply the active language to every static + dynamic bit
   --------------------------------------------------------- */
const langSwitch = document.getElementById('lang-switch');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  langSwitch?.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  renderProjects(currentFilter);
  renderExperience();
  refreshExpNavTargets();
  updateExpNav();
  typeLoop();

  const openId = openModalId;
  if (openId) openModal(openId);
}

langSwitch?.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn || btn.classList.contains('active')) return;
  applyLang(btn.dataset.lang);
});

applyLang(currentLang);

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
