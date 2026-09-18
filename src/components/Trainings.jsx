"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRAININGS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Trainings() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tr-head", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.utils.toArray(".tr-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} aria-label="Formations proposées" className="px-10 md:px-20 pt-36 md:pt-44 pb-24">
      <div className="max-w-6xl mx-auto">
        <p className="tr-head text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Formations
        </p>
        <h1
          className="tr-head font-black tracking-tighter text-white leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          Transmettre
          <br />
          <span className="ghost">pour élever.</span>
        </h1>
        <p className="tr-head text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-14">
          Des formations pratiques dans mes domaines de pratique. Programmes
          détaillés, niveaux et formats précisés sur demande — via la page contact.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TRAININGS.map((t, i) => (
            <article
              key={t.title}
              className="tr-card group border border-white/8 hover:border-[#00F5FF]/30 rounded-2xl p-7 bg-white/[0.015] hover:bg-white/[0.03] transition-colors duration-500 flex flex-col"
            >
              <span className="font-mono text-[10px] text-white/20 group-hover:text-[#00F5FF] tracking-widest transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-lg font-black text-white tracking-tight mb-2">
                {t.title}
              </h2>
              <p className="text-sm text-white/40 font-light leading-relaxed flex-1">
                {t.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                <span className="px-3 py-1 border border-white/10 rounded-full">Niveau : {t.level}</span>
                <span className="px-3 py-1 border border-white/10 rounded-full">Format : {t.format}</span>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-[#00F5FF] transition-colors duration-300"
              >
                Demander le programme →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
