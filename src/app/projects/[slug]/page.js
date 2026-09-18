"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import PageShell from "@/components/PageShell";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, CASE_STEPS, PLACEHOLDER } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

function StepBlock({ index, title, body }) {
  const isMissing = !body || body === PLACEHOLDER;
  return (
    <div className="cs-step border-t border-white/8 py-8 md:py-10 grid md:grid-cols-[80px_1fr] gap-4">
      <span className="font-mono text-[10px] text-[#00F5FF] tracking-[0.3em]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h2 className="text-lg md:text-xl font-black text-white tracking-tight mb-3">{title}</h2>
        {isMissing ? (
          <p className="text-white/25 text-sm font-light italic">Détail à compléter.</p>
        ) : (
          <p className="text-white/55 text-sm md:text-base font-light leading-relaxed max-w-2xl">{body}</p>
        )}
      </div>
    </div>
  );
}

export default function CaseStudyPage() {
  const ref = useRef(null);
  const params = useParams();
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cs-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", delay: 0.3 });
      gsap.utils.toArray(".cs-step").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const bodies = [
    project.problem,
    project.tagline,
    PLACEHOLDER,
    PLACEHOLDER,
    project.solution && project.solution !== PLACEHOLDER ? project.solution : PLACEHOLDER,
    PLACEHOLDER,
    PLACEHOLDER,
    PLACEHOLDER,
    project.status && project.status !== PLACEHOLDER ? `Statut : ${project.status}` : PLACEHOLDER,
    PLACEHOLDER,
  ];

  return (
    <PageShell>
      <div ref={ref} className="min-h-screen text-white">
        {/* ── HERO ── */}
        <div className="relative w-full min-h-[55vh] flex items-end overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#040B18] to-[#040B18]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#040B18] via-transparent to-transparent" />
          <div className="relative px-6 md:px-16 pb-10 md:pb-14 w-full">
            <div className="cs-hero-text">
              <Link href="/projects" className="inline-block text-[#00F5FF] text-[11px] tracking-[0.4em] uppercase hover:opacity-70 transition-opacity mb-6">
                ← Projets
              </Link>
              <br />
              <span className="inline-block text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase font-medium mb-3 border border-[#00F5FF]/30 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h1 className="font-black tracking-tighter leading-[0.88]" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>
                {project.name}
              </h1>
              <p className="mt-4 text-white/50 text-sm md:text-base font-light max-w-xl">
                {project.tagline}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/15 text-white/50">
                  Statut : {project.status}
                </span>
                {project.tech.length > 0 ? (
                  project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-[#00F5FF]/25 text-[#00F5FF]/80">
                      {t}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-white/10 text-white/30">
                    Stack : [À compléter]
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── BODY : 10 étapes ── */}
        <div className="px-6 md:px-16 py-14 md:py-20 max-w-5xl">
          <p className="text-[10px] text-white/30 tracking-[0.45em] uppercase mb-4">Étude de cas</p>
          {CASE_STEPS.map((step, i) => (
            <StepBlock key={step} index={i} title={step} body={bodies[i]} />
          ))}

          <div className="mt-14 border border-[#00F5FF]/25 bg-[#00F5FF]/[0.04] rounded-2xl p-8 md:p-10 text-center">
            <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-3 font-medium">
              Un projet similaire ?
            </p>
            <p className="text-white/60 text-sm font-light mb-7 max-w-md mx-auto">
              Discutons de votre besoin : analyse, conception et réalisation d&apos;une solution adaptée.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#00F5FF] text-black font-black px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.25em] hover:bg-white transition-colors duration-300"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
