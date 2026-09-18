"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERTISE } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".exp-card").forEach((card) => {
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
      id="expertise-section"
      aria-label="Domaines d'expertise"
      className="relative w-full px-10 md:px-20 pt-32 pb-24 flex flex-col justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Expertise
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-6"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Huit domaines,
          <br />
          <span className="ghost">une seule exigence.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-14">
          Je ne fais pas simplement de l'informatique. Je conçois, construis,
          sécurise, automatise et répare des systèmes technologiques.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {EXPERTISE.map((domain) => (
            <article
              key={domain.id}
              className="exp-card group relative border border-white/8 hover:border-[#00F5FF]/30 rounded-2xl p-7 md:p-9 bg-white/[0.015] hover:bg-white/[0.03] transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#00F5FF] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-mono text-[10px] text-white/20 group-hover:text-[#00F5FF] tracking-widest transition-colors duration-300">
                  {domain.num}
                </span>
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight">
                  {domain.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="px-3.5 py-1.5 border border-white/10 rounded-full text-[10px] text-white/45 tracking-widest uppercase group-hover:border-white/20 group-hover:text-white/65 transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
