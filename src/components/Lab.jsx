"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LAB_AXES } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Lab() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".lab-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="lab-section"
      aria-label="Laboratoire Yédydia Lab"
      className="relative w-full px-10 md:px-20 pt-32 pb-24 flex flex-col justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Yédydia Lab
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-6"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Expérimenter
          <br />
          <span className="ghost">pour mieux construire.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-14">
          Au-delà des projets : un espace d'expérimentation continue —
          IA, cybersécurité, réseaux, électronique et prototypes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {LAB_AXES.map((axe, i) => (
            <article
              key={axe.title}
              className="lab-card group relative border border-white/8 hover:border-[#00F5FF]/30 rounded-2xl p-7 bg-white/[0.015] hover:bg-white/[0.03] transition-colors duration-500"
            >
              <span className="font-mono text-[10px] text-white/20 group-hover:text-[#00F5FF] tracking-widest transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base md:text-lg font-black text-white tracking-tight mb-2">
                {axe.title}
              </h3>
              <p className="text-xs md:text-sm text-white/35 font-light leading-relaxed">
                {axe.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
