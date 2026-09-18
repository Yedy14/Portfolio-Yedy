import CvView from "@/components/CvView";

export const metadata = {
  title: "CV — Yédydia, Expert informatique & technologies",
  description:
    "CV de Yédydia (Innov'Yed Solutions, Bénin) : profil, compétences, parcours, projets, certifications, technologies et contact. Version imprimable / PDF.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/cv" },
};

export default function Page() {
  return <CvView />;
}
