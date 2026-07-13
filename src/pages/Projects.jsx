import ProjectCard from "../components/ProjectCard";
import ProjectData from "../assets/data/output.json";
import img1 from "../assets/pathway.png";

function Projects() {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        My Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: "10px",
        }}
      >
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.proj_id}
            title={project.title}
            text={project.description}
            thumbnail={import.meta.env.BASE_URL + project.thumbnail}
            href={import.meta.env.BASE_URL + "/projects/" + project.slug}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
