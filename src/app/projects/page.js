import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projets — Réalisations de Yédydia",
  description: "Réalisations de Yédydia (Innov'Yed Solutions) : HAPPY, DIS-MOI, NetBank Yotta, YouthWorld, PC Doctor Web et l'écosystème Innov'Yed Solutions.",
  keywords:    ["projets Yédydia", "réalisations", "portfolio projets", "Innov'Yed Solutions"],
  alternates:  { canonical: "https://portfolio-yedy.vercel.app/projects" },
  openGraph: {
    title: "Projets — Yédydia (Innov'Yed Solutions)",
    description: "Galerie des réalisations : applications, systèmes, IA et solutions technologiques.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
