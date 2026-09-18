// ─────────────────────────────────────────────
//  IDENTITÉ Yédydia / Innov'Yed Solutions
//  Source centrale de vérité pour tout le contenu personnel.
//  Règle : aucune information inventée. Manquant => PLACEHOLDER.
// ─────────────────────────────────────────────

export const PLACEHOLDER = "[À compléter]";

export const SITE = {
  name: "Yédydia",
  brand: "Innov'Yed Solutions",
  baseline: "Expert informatique & technologies",
  location: "Bénin",
  locale: "fr-BJ",
  // URL canonique provisoire (personnaliser quand le domaine définitif existe)
  baseUrl: "https://portfolio-yedy.vercel.app",
  tagline:
    "Je ne fais pas simplement de l'informatique. Je conçois, construis, sécurise, automatise et répare des systèmes technologiques.",
};

export const CONTACT_INFO = {
  email: "innovyedsolutions@gmail.com",
  phoneDisplay: "+229 0192728364",
  // Numéro WhatsApp au format international sans "+" ni espaces
  whatsappNumber: "2290192728364",
  availability: "Disponible pour missions, projets et collaborations.",
  // Pas d'adresse physique pour le moment (choix explicite)
  address: null,
};

export const SOCIALS = [
  { key: "github", label: "GitHub", href: "https://github.com/Yedy14" },
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/2290192728364" },
  { key: "linkedin", label: "LinkedIn", href: null },
  { key: "twitter", label: "X", href: null },
  { key: "youtube", label: "YouTube", href: null },
];

// Navigation — desktop restreint, menu mobile complet
export const NAV_LINKS = [
  { label: "Projets", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Services", href: "/services" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

export const NAV_LINKS_FULL = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Services", href: "/services" },
  { label: "Projets", href: "/projects" },
  { label: "Lab", href: "/lab" },
  { label: "Parcours", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Formations", href: "/training" },
  { label: "Blog", href: "/blog" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

// ── 5. EXPERTISE — 8 domaines ─────────────────
export const EXPERTISE = [
  {
    id: "cybersecurite",
    num: "01",
    title: "Cybersécurité",
    items: ["Pentesting", "Sécurité web", "Sécurité réseau", "Analyse de vulnérabilités", "Audit de sécurité", "Reconnaissance", "Sécurité des systèmes", "Tests de sécurité", "Sécurisation d'applications"],
  },
  {
    id: "reseaux-systemes",
    num: "02",
    title: "Réseaux & Systèmes",
    items: ["Administration systèmes", "Réseaux", "Windows", "Linux", "Virtualisation", "Serveurs", "Infrastructure", "Configuration réseau", "Sécurité réseau"],
  },
  {
    id: "developpement",
    num: "03",
    title: "Développement",
    items: ["Sites web", "Applications web", "Applications logicielles", "API", "Bases de données", "Interfaces modernes", "Systèmes personnalisés"],
  },
  {
    id: "ia-automatisation",
    num: "04",
    title: "IA & Automatisation",
    items: ["Intelligence artificielle", "Assistants intelligents", "Automatisation", "Agents IA", "Systèmes intelligents", "Intégration de modèles IA"],
  },
  {
    id: "maintenance",
    num: "05",
    title: "Maintenance & Réparation",
    items: ["Diagnostic informatique", "Maintenance PC", "Optimisation", "Installation système", "Dépannage", "Récupération de données", "Réparation électronique"],
  },
  {
    id: "electronique",
    num: "06",
    title: "Électronique & Embarqué",
    items: ["Arduino", "Microcontrôleurs", "IoT", "Systèmes embarqués", "Automatisation électronique", "Prototypes"],
  },
  {
    id: "energie",
    num: "07",
    title: "Énergie & Technologies",
    items: ["Solutions énergétiques", "Automatisation", "Systèmes technologiques", "Intégration hardware / software"],
  },
  {
    id: "formation",
    num: "08",
    title: "Formation",
    items: ["Informatique", "Réseaux", "Cybersécurité", "Développement", "Outils numériques"],
  },
];

// ── 6. SERVICES ───────────────────────────────
export const SERVICES = [
  {
    num: "01",
    title: "Développement & solutions web",
    description: "Sites vitrines, applications web et systèmes sur mesure : rapides, sécurisés et pensés pour durer.",
    tech: "React · Next.js · API · Bases de données",
    outcome: "Une solution web fonctionnelle, adaptée à votre besoin réel.",
  },
  {
    num: "02",
    title: "Cybersécurité",
    description: "Audit, tests de sécurité et sécurisation de vos sites, réseaux et applications.",
    tech: "Pentesting · Audit · Sécurisation",
    outcome: "Connaître vos failles avant qu'elles ne soient exploitées.",
  },
  {
    num: "03",
    title: "Réseaux & systèmes",
    description: "Installation, configuration et administration de vos infrastructures réseau et serveurs.",
    tech: "Windows · Linux · Virtualisation · Réseaux",
    outcome: "Une infrastructure stable, documentée et sécurisée.",
  },
  {
    num: "04",
    title: "Maintenance & réparation",
    description: "Diagnostic, dépannage, optimisation et récupération de données pour PC et équipements.",
    tech: "Diagnostic · Optimisation · Récupération",
    outcome: "Vos équipements réparés et optimisés, vos données récupérées.",
  },
  {
    num: "05",
    title: "IA & automatisation",
    description: "Assistants intelligents, scripts et workflows qui automatisent vos tâches répétitives.",
    tech: "IA · Agents · Scripts · Workflows",
    outcome: "Du temps gagné grâce à l'automatisation.",
  },
  {
    num: "06",
    title: "Électronique & embarqué",
    description: "Prototypes Arduino, objets connectés et automatisation électronique sur mesure.",
    tech: "Arduino · IoT · Microcontrôleurs",
    outcome: "Un prototype fonctionnel, du capteur au système.",
  },
  {
    num: "07",
    title: "Solutions sur mesure",
    description: "Un besoin spécifique ? J'analyse, je conçois et je construis la solution adaptée à votre entreprise.",
    tech: "Analyse · Conception · Réalisation",
    outcome: "Une solution pensée pour votre contexte, pas un produit générique.",
  },
];

// ── 7. PROJETS (réels, statuts à compléter) ───
export const PROJECTS = [
  {
    slug: "happy",
    num: "01",
    name: "HAPPY",
    category: "IA & Automatisation",
    tagline: "Assistant personnel intelligent multiplateforme.",
    description: "Assistant personnel intelligent pensé pour fonctionner sur plusieurs plateformes.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
  {
    slug: "dis-moi",
    num: "02",
    name: "DIS-MOI",
    category: "Applications",
    tagline: "Application de rappels intelligente.",
    description: "Application de rappels intelligente pour ne rien oublier d'important.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
  {
    slug: "netbank-yotta",
    num: "03",
    name: "NetBank Yotta",
    category: "Développement",
    tagline: "Solution de banque numérique : connexion et savoir.",
    description: "Solution de banque numérique articulée autour de la connexion et du savoir.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
  {
    slug: "youthworld",
    num: "04",
    name: "YouthWorld",
    category: "Développement",
    tagline: "Plateforme communautaire.",
    description: "Plateforme communautaire pour rassembler et faire interagir une communauté.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
  {
    slug: "pc-doctor-web",
    num: "05",
    name: "PC Doctor Web",
    category: "Maintenance & Systèmes",
    tagline: "Système de diagnostic informatique.",
    description: "Système de diagnostic informatique pour identifier et résoudre les problèmes PC.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
  {
    slug: "innov-yed-solutions",
    num: "06",
    name: "Innov'Yed Solutions",
    category: "Écosystème",
    tagline: "Écosystème et activité technologique.",
    description: "Écosystème technologique : conception, réalisation et maintenance de solutions.",
    problem: PLACEHOLDER,
    solution: PLACEHOLDER,
    tech: [],
    features: [],
    status: PLACEHOLDER,
    link: null,
  },
];

// ── 8. Étapes d'étude de cas ──────────────────
export const CASE_STEPS = [
  "Le problème",
  "L'idée",
  "L'architecture",
  "La conception",
  "Le développement",
  "La sécurité",
  "Les difficultés",
  "Les solutions",
  "Résultat",
  "Évolution future",
];

// ── 9. LAB ────────────────────────────────────
export const LAB_AXES = [
  { title: "Expérimentations IA", description: "Tests de modèles, assistants et agents intelligents." },
  { title: "Cybersécurité", description: "Laboratoire de tests d'intrusion et d'analyse de vulnérabilités." },
  { title: "Réseaux & Linux", description: "Maquettes réseau, serveurs de test et systèmes virtualisés." },
  { title: "Électronique & Arduino", description: "Prototypes, capteurs et automatisation embarquée." },
  { title: "Automatisation", description: "Scripts et workflows pour automatiser le quotidien." },
  { title: "Veille technologique", description: "Exploration continue des nouvelles technologies." },
];

// ── 10. TECHNOLOGIES (outillage des domaines revendiqués, sans niveaux) ──
export const TECH_GROUPS = [
  { title: "Développement", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "API REST", "Bases de données"] },
  { title: "Cybersécurité", items: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Tests d'intrusion", "Audit"] },
  { title: "Réseaux & Systèmes", items: ["Windows", "Linux", "Virtualisation", "Réseaux TCP/IP", "Serveurs"] },
  { title: "IA & Automatisation", items: ["Python", "Assistants IA", "Agents IA", "Scripts", "Workflows"] },
  { title: "Électronique", items: ["Arduino", "Microcontrôleurs", "IoT", "Prototypage"] },
  { title: "Outils", items: ["Git", "GitHub", "VS Code", "Vercel", "Supabase"] },
];

// ── 11. PARCOURS (uniquement le vérifiable) ───
export const TIMELINE = [
  {
    period: PLACEHOLDER,
    title: "Innov'Yed Solutions — Activité technologique",
    description: "Conception, réalisation et maintenance de solutions informatiques et technologiques.",
  },
  {
    period: PLACEHOLDER,
    title: "Formation — Réseaux & Sécurité Informatique",
    description: "Parcours en informatique orienté réseaux et sécurité. Détails à compléter.",
  },
];

// ── 12. CERTIFICATIONS (structure prête, vide) ─
export const CERTIFICATIONS = [];

// ── 13. FORMATIONS PROPOSÉES (sans prix ni durée) ──
export const TRAININGS = [
  { title: "Informatique fondamentale", description: "Prise en main, bureautique et bonnes pratiques.", level: PLACEHOLDER, format: PLACEHOLDER },
  { title: "Réseaux", description: "Comprendre, installer et sécuriser un réseau.", level: PLACEHOLDER, format: PLACEHOLDER },
  { title: "Cybersécurité", description: "Fondamentaux de la sécurité et hygiene numérique.", level: PLACEHOLDER, format: PLACEHOLDER },
  { title: "Développement web", description: "Créer des sites et applications web modernes.", level: PLACEHOLDER, format: PLACEHOLDER },
  { title: "Maintenance informatique", description: "Diagnostiquer, réparer et optimiser un PC.", level: PLACEHOLDER, format: PLACEHOLDER },
  { title: "Outils numériques", description: "Maîtriser les outils du quotidien professionnel.", level: PLACEHOLDER, format: PLACEHOLDER },
];

// ── 14. BLOG ──────────────────────────────────
export const BLOG_CATEGORIES = [
  "Cybersécurité",
  "Réseaux",
  "Développement",
  "IA",
  "Électronique",
  "Maintenance",
  "Technologies",
  "Tutoriels",
];
// Articles rédigés uniquement — aucun article fictif.
export const BLOG_POSTS = [];

// ── FAQ (factuelle, sans claims inventés) ─────
export const FAQ = [
  {
    q: "Qui est Yédydia ?",
    a: "Yédydia est un expert informatique et technologique polyvalent basé au Bénin, opérant sous la marque Innov'Yed Solutions : conception, développement, sécurisation, automatisation et réparation de systèmes technologiques.",
  },
  {
    q: "Quels services proposez-vous ?",
    a: "Développement web et applicatif, cybersécurité et audit, réseaux et systèmes, maintenance et réparation, IA et automatisation, électronique embarquée (Arduino / IoT) et formations.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Par email à innovyedsolutions@gmail.com ou sur WhatsApp au +229 0192728364. Décrivez votre besoin et vous recevrez une réponse.",
  },
  {
    q: "Travaillez-vous avec les entreprises ?",
    a: "Oui. J'analyse les besoins, je conçois des solutions personnalisées et j'accompagne leur mise en place, de l'idée au système fonctionnel.",
  },
];
