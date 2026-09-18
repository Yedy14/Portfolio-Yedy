import SectionPage from "@/components/SectionPage";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export const metadata = {
  title: "Parcours — Timeline | Yédydia",
  description:
    "Parcours de Yédydia (Innov'Yed Solutions) : activité technologique, formation réseaux & sécurité, projets et évolution.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/experience" },
};

export default function Page() {
  return (
    <SectionPage
      label="Parcours"
      title="Trajectoire."
      intro="Uniquement des informations vérifiables. Les dates manquantes sont signalées plutôt qu'inventées."
    >
      <Timeline />
      <div className="px-10 md:px-20 pb-24 max-w-4xl flex flex-wrap gap-4">
        <Link
          href="/certifications"
          className="px-6 py-3 border border-white/15 rounded-full text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white hover:border-[#00F5FF]/50 transition-colors duration-300"
        >
          Certifications →
        </Link>
        <Link
          href="/training"
          className="px-6 py-3 border border-white/15 rounded-full text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white hover:border-[#00F5FF]/50 transition-colors duration-300"
        >
          Formations →
        </Link>
      </div>
    </SectionPage>
  );
}
