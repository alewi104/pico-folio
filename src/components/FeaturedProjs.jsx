import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/data/output.json";
import img1 from "../assets/pathway.png";

function FeaturedProjs() {
  return (
    <div
      id="FeaturedProjects"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        left: 0,
        width: "100%",
        height: "auto",
        padding: "20px",
        boxShadow: "0 0 15px 10px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Featured Projects
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
            alt={project.thumbnail_alt}
            thumbnail={import.meta.env.BASE_URL + project.thumbnail}
            href={import.meta.env.BASE_URL + "/projects/" + project.slug}
          />
        ))}
      </div>
    </div>
  );
}
export default FeaturedProjs;
