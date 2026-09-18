"use client";
import { useEffect, useRef } from "react";
import PageShell from "./PageShell";
import gsap from "gsap";

// Gabarit animé commun aux pages de contenu : label + titre géant + intro,
// puis contenu libre. Même moteur GSAP que le reste du site.
export default function SectionPage({ label, title, intro, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sp-label", { y: 20, opacity: 0, duration: 0.6, delay: 0.3, ease: "power3.out" });
      gsap.from(".sp-title", { y: 60, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.45 });
      gsap.from(".sp-intro", { y: 25, opacity: 0, duration: 0.7, delay: 0.65, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <div ref={ref} className="px-10 md:px-20 pt-36 md:pt-44 pb-8 max-w-6xl">
        <p className="sp-label text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          {label}
        </p>
        <h1
          className="sp-title font-black tracking-tighter text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          {title}
        </h1>
        {intro && (
          <p className="sp-intro mt-6 text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </div>
      {children}
    </PageShell>
  );
}
