import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title: "À propos — Yédydia, Expert informatique & technologies",
  description: "Yédydia (Innov'Yed Solutions, Bénin) : expert informatique multidisciplinaire — cybersécurité, réseaux & systèmes, développement, IA & automatisation, maintenance, électronique embarquée.",
  keywords: ["Yédydia", "Innov'Yed Solutions", "expert informatique Bénin", "cybersécurité", "réseaux", "développement web", "IA", "maintenance informatique"],
  alternates:  { canonical: "https://portfolio-yedy.vercel.app/about" },
  openGraph: {
    title: "À propos — Yédydia (Innov'Yed Solutions)",
    description: "Expert informatique & technologies au Bénin : concevoir, construire, sécuriser, automatiser et réparer des systèmes technologiques.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
