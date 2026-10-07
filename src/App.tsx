import type { ReactNode } from "react"
import { education, nav, profile, publicCode, roles, skillGroups } from "./content"

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  )
}

function MailIcon() {
  return (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  )
}

function LinkedInIcon() {
  return (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v6M8 8h.01M12 17v-3.5a2 2 0 0 1 4 0V17" />
    </Icon>
  )
}

function PhoneIcon() {
  return (
    <Icon>
      <path d="M7 3.5h2.2l1.3 3.2-1.7 1a11 11 0 0 0 5.5 5.5l1-1.7 3.2 1.3V15a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 5 7.7 2 2 0 0 1 7 3.5z" />
    </Icon>
  )
}

function WhatsAppIcon() {
  return (
    <Icon>
      <path d="M12 4.2a7.3 7.3 0 0 0-6.3 10.9L4.5 19.5l4.5-1.2A7.3 7.3 0 1 0 12 4.2z" />
      <path d="M9.3 10.1c.2 1.5 1.6 3 3.1 3.3l.8-.8c.2-.2.5-.2.7 0l1.2.5c.2.1.3.4.2.7a1.7 1.7 0 0 1-1.7 1.3 5 5 0 0 1-4.9-4.9 1.7 1.7 0 0 1 1.3-1.7l.5 1.2c.1.2 0 .5-.2.7l-.8.8z" />
    </Icon>
  )
}

const contactLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, Icon: MailIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `tel:${profile.phone}`, label: profile.phoneLabel, Icon: PhoneIcon },
  { href: profile.whatsapp, label: profile.whatsappLabel, Icon: WhatsAppIcon },
]

function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Page">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="content">
        <section className="intro" id="top">
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="location">{profile.location}</p>
          <p className="summary">{profile.summary}</p>
          <p className="intro-links">
            {contactLinks.map((link) => (
              <a key={link.href} className="contact-link" href={link.href}>
                <link.Icon />
                {link.label}
              </a>
            ))}
          </p>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <ol className="roles">
            {roles.map((role) => (
              <li key={role.company}>
                <article>
                  <div className="role-meta">
                    <p className="dates">{role.dates}</p>
                  </div>
                  <div>
                    <h3>{role.company}</h3>
                    <p className="role-title">{role.title}</p>
                    <p className="context">{role.context}</p>
                    <ul>
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="public-code" aria-labelledby="public-code-heading">
          <h2 id="public-code-heading">{publicCode.heading}</h2>
          <ul className="repos">
            {publicCode.repos.map((repo) => (
              <li key={repo.href}>
                <a href={repo.href}>{repo.name}</a>
                <p>{repo.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <ul className="skill-groups">
            {skillGroups.map((group) => (
              <li key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <h3>{education.credential}</h3>
          <p className="role-title">{education.honor}</p>
          <p className="dates">{education.dates}</p>
          <p>{education.school}</p>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <ul className="contact-list">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a className="contact-link" href={link.href}>
                  <link.Icon />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
