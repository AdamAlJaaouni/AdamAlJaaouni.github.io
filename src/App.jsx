import "./App.css";
import { profile, skills, projects } from "./data";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Personal Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email Me</a>
        </div>
      </header>

      <main>
        <section className="card">
          <h2>About</h2>
          <p>{profile.bio}</p>
          <p>
            <strong>Location:</strong> {profile.location}
          </p>
        </section>

        <section className="card">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <img
                  className="project-image"
                  src={project.imageUrl}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  loading="lazy"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="stack">{project.stack.join(" | ")}</p>
                <div className="links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  );
}

export default App;
