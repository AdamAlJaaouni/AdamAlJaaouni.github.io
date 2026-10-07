import Rich from "./Rich";
import { card, education, experience, projects, skills } from "../data";

function Dates({ start, end }) {
  return (
    <span className="entry-date">
      <time dateTime={start.dateTime}>{start.label}</time>
      {end && (
        <>
          {" – "}
          {end.dateTime ? <time dateTime={end.dateTime}>{end.label}</time> : end.label}
        </>
      )}
    </span>
  );
}

function ExternalLink({ href, title, children }) {
  return (
    <a href={href} title={title} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function CardBack({ headingRef, resumeHref }) {
  return (
    <>
      <h1 className="sr-only" ref={headingRef} tabIndex={-1}>
        {card.firstName} {card.lastName}: Résumé
      </h1>

      <div className="back-cols">
        <section className="back-section" aria-labelledby="back-experience">
          <h2 id="back-experience">Experience</h2>
          {experience.map((job) => (
            <article className="entry" key={job.role}>
              <div className="entry-head">
                <h3>
                  {job.role}
                  <span className="entry-org">
                    {" · "}
                    {job.orgHref ? (
                      <ExternalLink href={job.orgHref} title={job.orgTitle}>
                        {job.org}
                      </ExternalLink>
                    ) : (
                      job.org
                    )}
                  </span>
                </h3>
                <Dates start={job.start} end={job.end} />
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet.text} data-tier={bullet.tier ?? 1}>
                    <Rich text={bullet.text} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <div className="back-side">
          <section className="back-section" aria-labelledby="back-projects">
            <h2 id="back-projects">Projects</h2>
            {projects.map((project) => (
              <article className="entry" key={project.title}>
                <div className="entry-head">
                  <h3>
                    {project.href ? (
                      <ExternalLink href={project.href}>{project.title}</ExternalLink>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <Dates start={project.date} />
                </div>
                <p>
                  <Rich text={project.summary} />
                </p>
              </article>
            ))}
          </section>

          <section className="back-section" aria-labelledby="back-skills">
            <h2 id="back-skills">Skills</h2>
            <dl className="skills">
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <dt>{label}</dt> <dd>{items}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <section className="back-edu" aria-label="Education">
        <strong>{education.school}</strong> · {education.degree}, {education.detail} ·{" "}
        <Dates start={education.start} end={education.end} />
      </section>

      <p className="back-foot">
        <a href={resumeHref} target="_blank" rel="noopener" type="application/pdf">
          Full résumé · PDF
        </a>
      </p>
    </>
  );
}
