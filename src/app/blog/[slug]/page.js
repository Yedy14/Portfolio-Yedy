import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { BLOG_POSTS } from "@/data/site";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable | Yédydia", robots: { index: false } };
  return {
    title: `${post.title} | Yédydia`,
    description: post.excerpt,
    alternates: { canonical: `https://portfolio-yedy.vercel.app/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="px-10 md:px-20 pt-36 md:pt-44 pb-24 max-w-3xl">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.4em] uppercase mb-4">
          {post.category} · {post.date}
        </p>
        <h1 className="font-black tracking-tighter text-white leading-[0.95] mb-8" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          {post.title}
        </h1>
        <div className="text-white/60 font-light leading-[1.9] whitespace-pre-wrap">
          {post.content}
        </div>
        <Link href="/blog" className="inline-block mt-12 text-[#00F5FF] text-[11px] tracking-[0.35em] uppercase hover:opacity-70 transition-opacity">
          ← Tous les articles
        </Link>
      </article>
    </PageShell>
  );
}
