/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 *
 * Keyword-rich, structured text that crawlers can read even when the
 * visual content is animated/JS-driven. Visually hidden. Yédydia identity.
 */
import { SITE, CONTACT_INFO, SERVICES, TECH_GROUPS, EXPERTISE, PROJECTS } from "@/data/site";

export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Yédydia — Expert informatique & technologies (Innov'Yed Solutions, Bénin)</h1>

      <p itemProp="description">
        {SITE.tagline} Cybersécurité, réseaux et systèmes, développement web et
        applicatif, intelligence artificielle et automatisation, maintenance et
        réparation informatique, électronique embarquée Arduino et IoT, solutions
        énergétiques et formations.
      </p>

      <p itemProp="jobTitle">Expert informatique & technologies</p>

      <section aria-label="Services">
        <h2>Services — {SITE.brand}</h2>
        {SERVICES.map((s) => (
          <article key={s.num}>
            <h3>{s.title}</h3>
            <p>{s.description} Technologies : {s.tech}. {s.outcome}</p>
          </article>
        ))}
      </section>

      <section aria-label="Domaines d'expertise">
        <h2>Expertise</h2>
        {EXPERTISE.map((d) => (
          <article key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.items.join(", ")}</p>
          </article>
        ))}
      </section>

      <section aria-label="Technologies">
        <h2>Technologies et outils</h2>
        {TECH_GROUPS.map((g) => (
          <p key={g.title} itemProp="knowsAbout">
            {g.title} : {g.items.join(", ")}
          </p>
        ))}
      </section>

      <section aria-label="Projets">
        <h2>Réalisations</h2>
        <ul>
          {PROJECTS.map((p) => (
            <li key={p.slug}>{p.name} — {p.tagline}</li>
          ))}
        </ul>
      </section>

      <section aria-label="Contact">
        <h2>Contacter {SITE.name}</h2>
        <p>
          <span itemProp="url">{SITE.baseUrl}</span> |
          <span itemProp="email">{CONTACT_INFO.email}</span> |
          WhatsApp {CONTACT_INFO.phoneDisplay} | {CONTACT_INFO.availability}
        </p>
      </section>
    </div>
  );
}
