"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CERTIFICATIONS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-head", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.utils.toArray(".cert-item").forEach((item) => {
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
    <section ref={ref} aria-label="Certifications" className="px-10 md:px-20 pt-36 md:pt-44 pb-24">
      <div className="max-w-4xl">
        <p className="cert-head text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Certifications
        </p>
        <h1
          className="cert-head font-black tracking-tighter text-white leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
        >
          Preuves, pas promesses.
        </h1>
        <p className="cert-head text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-14">
          Seules les certifications réellement obtenues seront listées ici —
          avec organisme, date et lien de vérification.
        </p>

        {CERTIFICATIONS.length === 0 ? (
          <div className="cert-item border border-dashed border-white/15 rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
              Aucune certification publiée pour le moment.
              <br />
              Cette section accueillera chaque certification vérifiable dès son obtention.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.name} className="cert-item border border-white/10 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white">{cert.name}</h2>
                <p className="text-xs text-white/40 mt-1">
                  {cert.issuer} · {cert.date} · {cert.domain}
                </p>
                {cert.verifyUrl && (
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-[#00F5FF] text-xs mt-3 inline-block hover:underline">
                    Vérifier →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
