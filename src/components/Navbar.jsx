"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactPopup from "./ContactPopup";

gsap.registerPlugin(ScrollTrigger);

import { NAV_LINKS, NAV_LINKS_FULL } from "@/data/site";

const LINKS = NAV_LINKS;
const MOBILE_LINKS = NAV_LINKS_FULL;

export default function Navbar() {
  const navRef    = useRef(null);
  const menuRef   = useRef(null);
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Animate menu open/close
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(el,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(".mobile-nav-link",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );
    }
  }, [open]);

  const getBackLink = (path) => {
    if (path?.startsWith("/project/")) return "/projects";
    if (path?.startsWith("/blog/")) return "/blog";
    return "/";
  };

  const getBackLabel = (path) => {
    if (path?.startsWith("/project/")) return "Projets";
    if (path?.startsWith("/blog/")) return "Blog";
    return "Retour";
  };

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-20 py-7"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* Logo + back */}
        <div className="relative flex items-center gap-5">
          {pathname !== "/" && (
            <Link href={getBackLink(pathname)} className="flex items-center gap-2 text-white/40 hover:text-[#00F5FF] transition-colors duration-300 group">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[10px] tracking-[0.35em] uppercase font-medium">{getBackLabel(pathname)}</span>
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300" aria-label="Yédydia — Accueil">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#00F5FF] text-black font-black text-lg leading-none">Y</span>
            <span className="flex flex-col leading-none">
              <span className="text-white font-black tracking-tight text-sm">YÉDYDIA</span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-white/40 mt-1">Innov'Yed</span>
            </span>
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="relative hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-medium">
          {LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link href={href} className={`px-4 py-2 transition-all duration-300 ${active ? "text-[#00F5FF]" : "text-white/50 hover:text-white/80"}`}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="ml-2">
            <button 
              suppressHydrationWarning
              onClick={() => setIsContactOpen(true)}
              className="px-5 py-2 bg-[#00F5FF] text-black font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
            >
              Démarrer
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          suppressHydrationWarning
          onClick={() => setOpen(v => !v)}
          className="relative md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-[60]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-start px-10 md:hidden overflow-y-auto py-24"
        >
          <ul className="flex flex-col gap-5 w-full my-auto">
            {MOBILE_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href} className="mobile-nav-link">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block text-3xl font-black tracking-tighter transition-colors duration-300 ${active ? "text-[#00F5FF]" : "text-white/70 hover:text-white"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mobile-nav-link mt-4 pt-4 border-t border-white/10 flex flex-col gap-6">
               <button 
                 suppressHydrationWarning
                 onClick={() => {
                   setOpen(false);
                   setIsContactOpen(true);
                 }}
                 className="w-full py-4 bg-[#00F5FF] text-black text-xl font-bold tracking-tight rounded-2xl hover:bg-white hover:text-black transition-colors duration-300"
               >
                 Démarrer
               </button>
            </li>
          </ul>
          <div className="mobile-nav-link mt-16 text-[10px] text-white/20 tracking-[0.4em] uppercase">
            Yédydia · Innov'Yed
          </div>
        </div>
      )}
      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
