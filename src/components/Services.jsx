"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".srv-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
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
      id="services-section"
      aria-label="Services proposés"
      className="relative w-full px-10 md:px-20 pt-32 pb-24 flex flex-col justify-center"
    >
      <div className="max-w-4xl w-full">
        <p className="text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Services
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-14 md:mb-20"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          Prestations.
        </h2>

        <div className="flex flex-col">
          {SERVICES.map((srv) => (
            <Link
              key={srv.num}
              href="/contact"
              className="srv-item group relative flex items-start gap-8 py-10 md:py-12 border-b border-white/8 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#00F5FF] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="pl-3 shrink-0 w-8 pt-1">
                <span className="font-mono text-[10px] text-white/20 group-hover:text-[#00F5FF] tracking-widest transition-colors duration-300">
                  {srv.num}
                </span>
              </div>
              <div className="flex-1 min-w-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-2xl transition-colors duration-300">
                  {srv.description}
                </p>
                <p className="mt-3 text-[10px] text-white/25 tracking-[0.25em] uppercase">
                  {srv.tech}
                </p>
                <p className="mt-2 text-xs text-[#00F5FF]/70 font-medium">
                  → {srv.outcome}
                </p>
              </div>
              <div className="hidden md:flex shrink-0 items-center pt-2 text-white/20 group-hover:text-[#00F5FF] transition-colors duration-300 pr-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
