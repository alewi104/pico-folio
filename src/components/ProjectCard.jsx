import "./ProjectCard.css";

function ProjectCard({ title, thumbnail, text, href, alt, technologies }) {
  return (
    <article className="project-card">
      <img src={thumbnail} alt={alt} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{text}</p>

        <div className="tech-list">
          {technologies?.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <a href={href} className="project-link">
          View Project →
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
