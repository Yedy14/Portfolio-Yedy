import { NextResponse } from "next/server";
import { SITE, CONTACT_INFO, SOCIALS, SERVICES, TECH_GROUPS, TIMELINE, PROJECTS, FAQ } from "@/data/site";

/**
 * GET /api/llms
 *
 * Machine-readable JSON endpoint for AI chatbots and LLM crawlers.
 * Yédydia / Innov'Yed Solutions identity. No invented data.
 */
export async function GET() {
  const data = {
    name: SITE.name,
    title: SITE.baseline,
    brand: SITE.brand,
    website: SITE.baseUrl,
    email: CONTACT_INFO.email,
    whatsapp: CONTACT_INFO.phoneDisplay,
    location: `${SITE.location} (Afrique de l'Ouest)`,
    summary: SITE.tagline,

    services: SERVICES.map((s) => ({
      name: s.title,
      description: s.description,
      technologies: s.tech,
      outcome: s.outcome,
    })),

    skills: Object.fromEntries(TECH_GROUPS.map((g) => [g.title, g.items])),

    experience: TIMELINE.map((t) => ({ role: t.title, period: t.period })),

    projects: PROJECTS.map((p) => ({
      name: p.name,
      category: p.category,
      tagline: p.tagline,
      status: p.status,
    })),

    pages: {
      home: `${SITE.baseUrl}/`,
      about: `${SITE.baseUrl}/about`,
      expertise: `${SITE.baseUrl}/expertise`,
      services: `${SITE.baseUrl}/services`,
      projects: `${SITE.baseUrl}/projects`,
      lab: `${SITE.baseUrl}/lab`,
      experience: `${SITE.baseUrl}/experience`,
      certifications: `${SITE.baseUrl}/certifications`,
      training: `${SITE.baseUrl}/training`,
      blog: `${SITE.baseUrl}/blog`,
      cv: `${SITE.baseUrl}/cv`,
      contact: `${SITE.baseUrl}/contact`,
    },

    socials: Object.fromEntries(
      SOCIALS.filter((s) => s.href).map((s) => [s.key, s.href])
    ),

    faq: FAQ.map((f) => ({ q: f.q, a: f.a })),

    llms_txt: `${SITE.baseUrl}/llms.txt`,
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
