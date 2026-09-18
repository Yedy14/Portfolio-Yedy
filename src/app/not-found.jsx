import Link from "next/link";

export const metadata = {
  title:       "404 — Page introuvable",
  description: "La page que vous cherchez n'existe pas.",
  robots:      { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center bg-[#040B18] px-10"
      aria-labelledby="not-found-heading"
    >
      <p className="text-[11px] text-[#00F5FF] tracking-[0.45em] uppercase mb-6 font-medium">
        404
      </p>

      <h1
        id="not-found-heading"
        className="font-black text-white tracking-tighter leading-[0.88] text-center mb-8"
        style={{ fontSize: "clamp(4rem, 14vw, 10rem)" }}
      >
        Page<br />
        <span className="text-white/15">introuvable</span>
      </h1>

      <p className="text-white/40 text-sm mb-12 text-center max-w-xs leading-relaxed">
        Cette page n'existe pas. Retournez à l'accueil pour continuer l'exploration.
      </p>

      <Link
        href="/"
        className="flex items-center gap-3 px-8 py-3 border border-[#00F5FF]/50 text-[#00F5FF] text-[11px] uppercase tracking-[0.32em] rounded-full hover:bg-[#00F5FF] hover:text-black transition-all duration-500 group"
      >
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        >
          <path d="M9 11L4 7l5-4" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Retour à l'accueil
      </Link>
    </main>
  );
}
