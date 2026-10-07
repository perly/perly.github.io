import { education, nav, profile, publicCode, roles, skillGroups } from "./content"

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
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
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
          <p className="section-note">{publicCode.note}</p>
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
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`}>{profile.phoneLabel}</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
