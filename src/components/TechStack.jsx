"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECH_GROUPS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".tech-group").forEach((group) => {
        gsap.from(group, {
          scrollTrigger: { trigger: group, start: "top 92%", toggleActions: "play none none none" },
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
    <section
      ref={ref}
      id="tech-section"
      aria-label="Technologies et outils"
      className="relative w-full px-10 md:px-20 pt-32 pb-24 flex flex-col justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Stack
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-14"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Technologies.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TECH_GROUPS.map((group) => (
            <div key={group.title} className="tech-group">
              <p className="text-[10px] tracking-[0.4em] uppercase mb-5">
                <span className="border-b border-white/30 pb-2 inline-block text-white/50">
                  {group.title}
                </span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-white/12 rounded-full text-[10px] text-white/35 tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-[#00F5FF] hover:border-white cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
