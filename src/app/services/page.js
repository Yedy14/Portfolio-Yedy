import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata = {
  title: "Services — Prestations informatiques | Yédydia",
  description:
    "Prestations Innov'Yed Solutions : développement web, cybersécurité, réseaux & systèmes, maintenance & réparation, IA & automatisation, électronique embarquée et solutions sur mesure.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/services" },
};

export default function Page() {
  return (
    <PageShell>
      <div className="pt-10">
        <Services />
      </div>
    </PageShell>
  );
}
