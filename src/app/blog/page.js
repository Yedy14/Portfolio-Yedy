import PageShell from "@/components/PageShell";
import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Blog — Cybersécurité, Réseaux, IA, Dev | Yédydia",
  description:
    "Blog de Yédydia : articles pratiques sur la cybersécurité, les réseaux, le développement, l'IA, l'électronique et la maintenance.",
  alternates: { canonical: "https://portfolio-yedy.vercel.app/blog" },
};

export default function Page() {
  return (
    <PageShell>
      <BlogIndex />
    </PageShell>
  );
}
