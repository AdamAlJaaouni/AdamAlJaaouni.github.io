import Rich from "./Rich";
import { card, experience } from "../data";

function Dates({ start, end }) {
  return (
    <span className="entry-date">
      <time dateTime={start.dateTime}>{start.label}</time>
      {" – "}
      {end.dateTime ? <time dateTime={end.dateTime}>{end.label}</time> : end.label}
    </span>
  );
}

export default function CardBack({ headingRef, resumeHref }) {
  return (
    <>
      <h1 className="sr-only" ref={headingRef} tabIndex={-1}>
        {card.firstName} {card.lastName}: Experience
      </h1>

      <section className="back-experience" aria-labelledby="back-experience">
        <h2 id="back-experience">Experience</h2>
        {experience.map((job) => (
          <article className="entry" key={job.role}>
            <div className="entry-head">
              <h3>
                {job.role}
                <span className="entry-org">
                  {" · "}
                  {job.orgHref ? (
                    <a href={job.orgHref} title={job.orgTitle} target="_blank" rel="noopener">
                      {job.org}
                    </a>
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

      <p className="back-foot">
        <a href={resumeHref} target="_blank" rel="noopener" type="application/pdf">
          Full résumé · PDF
        </a>
      </p>
    </>
  );
}
