"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".tl-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          x: -24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="parcours-section"
      aria-label="Parcours et timeline"
      className="relative w-full px-10 md:px-20 pt-32 pb-24 flex flex-col justify-center"
    >
      <div className="max-w-4xl w-full">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Parcours
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-14"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Trajectoire.
        </h2>

        <div className="flex flex-col">
          {TIMELINE.map((entry, i) => (
            <div key={i} className="tl-item relative pl-8 pb-12 last:pb-0 border-l border-white/10">
              <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#00F5FF]" aria-hidden="true" />
              <p className="font-mono text-[10px] text-[#00F5FF] tracking-[0.3em] uppercase mb-2">
                {entry.period}
              </p>
              <h3 className="text-lg md:text-xl font-black text-white tracking-tight mb-2">
                {entry.title}
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-xl">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
