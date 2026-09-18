// ─────────────────────────────────────────────
//  ABOUT SECTION — Yédydia / Innov'Yed Solutions
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiPython, SiHtml5, SiCss, SiNodedotjs,
  SiGit, SiGithub, SiVercel, SiPostman,
} from "react-icons/si";
import {
  FiTerminal, FiMonitor, FiCpu, FiWifi, FiLayers, FiDatabase, FiZap,
  FiShield, FiCrosshair, FiActivity, FiLock, FiBox, FiCode,
} from "react-icons/fi";

export const SECTION = {
  label: "À propos",
};

export const HEADING = {
  line1: "Concevoir,",
  line2: "sécuriser,",
  line3: "créer.",   // ghost (outline) style
};

// *mot* = mis en évidence dans BlurText. Aucun chiffre, diplôme ou client inventé.
export const BIO = [
  "Je suis *Yédydia*, expert informatique et technologique basé au *Bénin*, opérant sous la marque *Innov'Yed Solutions*. Mon approche est *multidisciplinaire* : je ne me limite pas à un seul domaine, je combine plusieurs compétences complémentaires pour construire des *solutions complètes*.",
  "Je conçois des *solutions technologiques*. Je développe. Je sécurise. J'automatise. Je transforme les *idées en systèmes fonctionnels* — du site web au réseau d'entreprise, du script d'automatisation au prototype électronique.",
  "Ma méthode est simple : *comprendre le besoin réel*, analyser le problème en profondeur, puis construire une solution *robuste*, *sécurisée* et *adaptée au contexte*. Chaque projet est pensé pour fonctionner durablement, pas pour impressionner temporairement.",
  "Au-delà des projets, j'expérimente en permanence : *intelligence artificielle*, cybersécurité, réseaux, Linux, électronique et Arduino. Cette *recherche continue* nourrit directement la qualité de mes réalisations.",
];

export const RESUME_URL = "/cv";

export const TECH = [
  { name: "Next.js",       icon: SiNextdotjs },
  { name: "React",         icon: SiReact },
  { name: "JavaScript",    icon: SiJavascript },
  { name: "HTML5",         icon: SiHtml5 },
  { name: "CSS3",          icon: SiCss },
  { name: "Tailwind CSS",  icon: SiTailwindcss },
  { name: "Node.js",       icon: SiNodedotjs },
  { name: "Python",        icon: SiPython },
  { name: "API",           icon: FiZap },
  { name: "Bases de données", icon: FiDatabase },
  { name: "Git",           icon: SiGit },
  { name: "GitHub",        icon: SiGithub },
  { name: "Vercel",        icon: SiVercel },
  { name: "Linux",         icon: FiTerminal },
  { name: "Windows",       icon: FiMonitor },
  { name: "Arduino",       icon: FiCpu },
  { name: "Réseaux",       icon: FiWifi },
  { name: "Virtualisation", icon: FiLayers },
];

export const CREATIVE = [
  { name: "Kali Linux",  icon: FiShield },
  { name: "Nmap",        icon: FiCrosshair },
  { name: "Wireshark",   icon: FiActivity },
  { name: "Burp Suite",  icon: FiLock },
  { name: "VirtualBox",  icon: FiBox },
  { name: "VS Code",     icon: FiCode },
  { name: "Postman",     icon: SiPostman },
];

export const EXPERIENCE = [
  { role: "Innov'Yed Solutions — Activité technologique", period: "[Date à compléter]" },
  { role: "Formation — Réseaux & Sécurité Informatique",  period: "[Date à compléter]" },
];
