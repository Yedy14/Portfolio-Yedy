import PageShell from "@/components/PageShell";
import Expertise from "@/components/Expertise";
import TechStack from "@/components/TechStack";

export const metadata = {
  title: "Expertise — Cybersécurité, Réseaux, Développement, IA | Yédydia",
  description:
    "Les 8 domaines d'expertise de Yédydia (Innov'Yed Solutions, Bénin) : cybersécurité, réseaux & systèmes, développement, IA & automatisation, maintenance, électronique embarquée, énergie et formation.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/expertise" },
};

export default function Page() {
  return (
    <PageShell>
      <div className="pt-10">
        <Expertise />
        <TechStack />
      </div>
    </PageShell>
  );
}
