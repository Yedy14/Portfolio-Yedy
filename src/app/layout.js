import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import { SITE, CONTACT_INFO, SOCIALS, SERVICES, TECH_GROUPS, FAQ } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = SITE.baseUrl;

export const viewport = {
  themeColor: "#00F5FF",
};

const SITE_TITLE = "Yédydia — Expert informatique & technologies | Innov'Yed Solutions";
const SITE_DESC =
  "Yédydia (Innov'Yed Solutions, Bénin) : expert informatique et technologique polyvalent. Je conçois, construis, sécurise, automatise et répare des systèmes technologiques — cybersécurité, réseaux, développement, IA, maintenance, électronique.";

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: SITE_TITLE,
    template: "%s — Yédydia | Innov'Yed Solutions",
  },
  description: SITE_DESC,
  keywords: [
    "Yédydia", "Innov'Yed Solutions", "expert informatique Bénin",
    "cybersécurité Bénin", "pentesting", "réseaux et systèmes",
    "développement web", "intelligence artificielle", "automatisation",
    "maintenance informatique", "Arduino IoT", "formation informatique",
  ],
  authors: [{ name: "Yédydia", url: BASE }],
  creator: "Innov'Yed Solutions",
  publisher: "Innov'Yed Solutions",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [{
      url: "/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Yédydia — Expert informatique & technologies (Innov'Yed Solutions)",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/yedydia-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/photo/yedydia-mark.svg",
    shortcut: "/photo/yedydia-mark.svg",
  },

  manifest: "/manifest.webmanifest",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const sameAs = SOCIALS.filter((s) => s.href).map((s) => s.href);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Yédydia",
      "url": BASE,
      "jobTitle": "Expert informatique & technologies",
      "description": SITE.tagline,
      "homeLocation": { "@type": "Country", "name": "Bénin" },
      "knowsAbout": TECH_GROUPS.flatMap((g) => g.items),
      "worksFor": { "@id": `${BASE}/#organisation` },
      "sameAs": sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#organisation`,
      "name": "Innov'Yed Solutions",
      "url": BASE,
      "email": CONTACT_INFO.email,
      "description": "Écosystème technologique : conception, réalisation et maintenance de solutions informatiques.",
      "founder": { "@id": `${BASE}/#person` },
      "makesOffer": SERVICES.map((s) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.title, "description": s.description },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "Yédydia — Innov'Yed Solutions",
      "description": SITE_DESC,
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "fr-BJ",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": "Portfolio de Yédydia — Expert informatique & technologies",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE },
          { "@type": "ListItem", "position": 2, "name": "À propos", "item": `${BASE}/about` },
          { "@type": "ListItem", "position": 3, "name": "Expertise", "item": `${BASE}/expertise` },
          { "@type": "ListItem", "position": 4, "name": "Services", "item": `${BASE}/services` },
          { "@type": "ListItem", "position": 5, "name": "Projets", "item": `${BASE}/projects` },
          { "@type": "ListItem", "position": 6, "name": "Contact", "item": `${BASE}/contact` },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
