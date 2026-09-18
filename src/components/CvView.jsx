"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import gsap from "gsap";
import { SITE, CONTACT_INFO, SOCIALS, EXPERTISE, TIMELINE, CERTIFICATIONS, TRAININGS, PROJECTS, TECH_GROUPS } from "@/data/site";

gsap.registerPlugin({});

function Block({ title, children }) {
  return (
    <section className="cv-block border-t border-white/10 pt-8 mt-10">
      <h2 className="text-[11px] text-[#00F5FF] tracking-[0.45em] uppercase mb-6 font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function CvView() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cv-head", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <div ref={ref} className="px-10 md:px-20 pt-36 md:pt-44 pb-24 max-w-4xl">
        <p className="cv-head text-[10px] text-[#00F5FF] tracking-[0.5em] uppercase mb-4 font-medium">
          Curriculum Vitae
        </p>
        <h1 className="cv-head font-black tracking-tighter text-white leading-[0.9] mb-4" style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)" }}>
          {SITE.name}
        </h1>
        <p className="cv-head text-white/50 text-sm md:text-base font-light mb-2">
          {SITE.baseline} — {SITE.brand}, {SITE.location}.
        </p>
        <p className="cv-head text-white/40 text-sm font-light mb-8">
          {CONTACT_INFO.email} · {CONTACT_INFO.phoneDisplay}
        </p>
        <button
          onClick={() => window.print()}
          className="cv-head px-6 py-3 bg-[#00F5FF] text-black font-bold rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 print:hidden"
        >
          Imprimer / PDF
        </button>

        <Block title="Profil">
          <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">{SITE.tagline}</p>
        </Block>

        <Block title="Compétences">
          <div className="flex flex-col gap-5">
            {EXPERTISE.map((d) => (
              <div key={d.id}>
                <p className="text-white text-sm font-bold mb-1.5">{d.title}</p>
                <p className="text-white/45 text-sm font-light">{d.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Formation & Parcours">
          {TIMELINE.map((t, i) => (
            <div key={i} className="mb-5">
              <p className="text-white text-sm font-bold">{t.title}</p>
              <p className="text-[#00F5FF] text-xs mt-0.5">{t.period}</p>
              <p className="text-white/45 text-sm font-light mt-1">{t.description}</p>
            </div>
          ))}
        </Block>

        <Block title="Projets">
          {PROJECTS.map((p) => (
            <div key={p.slug} className="mb-5">
              <p className="text-white text-sm font-bold">{p.name} <span className="text-white/30 font-light">— {p.category}</span></p>
              <p className="text-white/45 text-sm font-light mt-1">{p.tagline} Statut : {p.status}.</p>
            </div>
          ))}
        </Block>

        <Block title="Certifications">
          {CERTIFICATIONS.length === 0 ? (
            <p className="text-white/40 text-sm font-light italic">Aucune certification publiée pour le moment.</p>
          ) : (
            CERTIFICATIONS.map((c) => (
              <p key={c.name} className="text-white/60 text-sm">{c.name} — {c.issuer} ({c.date})</p>
            ))
          )}
        </Block>

        <Block title="Technologies">
          {TECH_GROUPS.map((g) => (
            <p key={g.title} className="text-white/45 text-sm font-light mb-2">
              <span className="text-white font-bold">{g.title} : </span>{g.items.join(", ")}
            </p>
          ))}
        </Block>

        <Block title="Formations proposées">
          {TRAININGS.map((t) => (
            <p key={t.title} className="text-white/60 text-sm mb-1.5">
              <span className="text-white font-bold">{t.title}</span> — {t.description}
            </p>
          ))}
        </Block>

        <Block title="Contact">
          <p className="text-white/60 text-sm">Email : {CONTACT_INFO.email}</p>
          <p className="text-white/60 text-sm">WhatsApp : {CONTACT_INFO.phoneDisplay}</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            {SOCIALS.filter((s) => s.href).map((s) => (
              <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#00F5FF] hover:underline">
                {s.label}
              </a>
            ))}
          </div>
        </Block>

        <div className="mt-12 print:hidden">
          <Link href="/contact" className="text-[#00F5FF] text-[11px] tracking-[0.35em] uppercase hover:opacity-70 transition-opacity">
            ← Me contacter
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
