import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title: "Contact — Yédydia (Innov'Yed Solutions)",
  description: "Contactez Yédydia : innovyedsolutions@gmail.com, WhatsApp +229 0192728364. Projets, missions et collaborations — réponse rapide.",
  keywords: ["contact Yédydia", "Innov'Yed Solutions contact", "expert informatique Bénin", "devis projet informatique"],
  alternates:  { canonical: "https://portfolio-yedy.vercel.app/contact" },
  openGraph: {
    title: "Contact — Yédydia (Innov'Yed Solutions)",
    description: "Un projet en tête ? Email, WhatsApp ou formulaire : réponse rapide.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
