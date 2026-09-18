import PageShell from "@/components/PageShell";
import Certifications from "@/components/Certifications";

export const metadata = {
  title: "Certifications | Yédydia",
  description:
    "Certifications de Yédydia : seules les certifications réellement obtenues, avec lien de vérification.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/certifications" },
};

export default function Page() {
  return (
    <PageShell>
      <Certifications />
    </PageShell>
  );
}
