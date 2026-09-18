import PageShell from "@/components/PageShell";
import Lab from "@/components/Lab";

export const metadata = {
  title: "Yédydia Lab — Expérimentations | Yédydia",
  description:
    "Yédydia Lab : expérimentations IA, cybersécurité, réseaux, Linux, électronique Arduino, automatisation et prototypes.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/lab" },
};

export default function Page() {
  return (
    <PageShell>
      <div className="pt-10">
        <Lab />
      </div>
    </PageShell>
  );
}
