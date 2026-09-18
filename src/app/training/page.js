import PageShell from "@/components/PageShell";
import Trainings from "@/components/Trainings";

export const metadata = {
  title: "Formations — Informatique, Réseaux, Cybersécurité | Yédydia",
  description:
    "Formations proposées par Yédydia : informatique, réseaux, cybersécurité, développement, maintenance et outils numériques.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/training" },
};

export default function Page() {
  return (
    <PageShell>
      <Trainings />
    </PageShell>
  );
}
