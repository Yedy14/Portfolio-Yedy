"use client";

import Contact from "@/components/Contact";
import GradientBlinds from "@/components/GradientBlinds";
import { CONTACT_INFO } from "@/data/site";

// Page /contact : fond animé + formulaire partagé (mode standalone)
// + canaux directs (email / WhatsApp).
export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true">
        <GradientBlinds
          gradientColors={['#000000', '#00F5FF', '#111111']}
          angle={45}
          noise={0.2}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.7}
          spotlightSoftness={1.5}
          spotlightOpacity={0.6}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10">
        <Contact standalone />
      </div>

      <div className="relative z-10 px-10 md:px-20 pb-24 flex flex-col sm:flex-row flex-wrap gap-4">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 rounded-full text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white hover:border-[#00F5FF]/50 transition-colors duration-300"
        >
          {CONTACT_INFO.email}
        </a>
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Bonjour Yédydia !")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 border border-[#25D366]/30 rounded-full text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white hover:border-[#25D366]/60 transition-colors duration-300"
        >
          WhatsApp · {CONTACT_INFO.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
