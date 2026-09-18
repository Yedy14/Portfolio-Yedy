"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function BlogIndex() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bl-head", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.utils.toArray(".bl-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} aria-label="Blog" className="px-10 md:px-20 pt-36 md:pt-44 pb-24">
      <div className="max-w-4xl">
        <p className="bl-head text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Blog
        </p>
        <h1
          className="bl-head font-black tracking-tighter text-white leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          Notes de terrain.
        </h1>
        <p className="bl-head text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-10">
          Cybersécurité, réseaux, développement, IA, électronique, maintenance :
          des articles pratiques issus de mon travail réel.
        </p>

        <div className="bl-head flex flex-wrap gap-2 mb-14" aria-label="Catégories du blog">
          {BLOG_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 border border-white/10 rounded-full text-[10px] text-white/40 tracking-widest uppercase"
            >
              {cat}
            </span>
          ))}
        </div>

        {BLOG_POSTS.length === 0 ? (
          <div className="bl-item border border-dashed border-white/15 rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
              Les premiers articles sont en préparation.
              <br />
              En attendant, retrouvez mes projets et mon lab.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-[#00F5FF] text-black font-bold rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
              >
                Voir les projets
              </Link>
              <Link
                href="/lab"
                className="px-6 py-3 border border-white/15 rounded-full text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white hover:border-[#00F5FF]/50 transition-colors duration-300"
              >
                Explorer le lab
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bl-item group flex items-start gap-6 py-8 border-b border-white/8 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex-1">
                  <p className="text-[10px] text-[#00F5FF] tracking-[0.35em] uppercase mb-2">
                    {post.category} · {post.date}
                  </p>
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/40 font-light">{post.excerpt}</p>
                </div>
                <span className="text-white/20 group-hover:text-[#00F5FF] transition-colors duration-300 mt-2">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
