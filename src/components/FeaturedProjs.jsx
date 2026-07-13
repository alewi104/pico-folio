import "./FeaturedProjs.css";
import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/data/output.json";

function FeaturedProjs() {
  return (
    <section id="FeaturedProjects" className="featured-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A selection of projects demonstrating experience in embedded systems,
          desktop software, web applications, networking, and software
          architecture.
        </p>

        <div className="project-grid">
          {ProjectData.map((project) => (
            <ProjectCard
              key={project.proj_id}
              title={project.title}
              thumbnail={import.meta.env.BASE_URL + project.thumbnail}
              alt={project.thumbnail_alt}
              text={project.description}
              technologies={project.technologies}
              href={import.meta.env.BASE_URL + "/projects/" + project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjs;
