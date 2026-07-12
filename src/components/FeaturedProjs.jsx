import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/data/output.json";
import img1 from "../assets/pathway.png";

function FeaturedProjs() {
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
        height: "300px",
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
            thumbnail={import.meta.env.BASE_URL + project.thumbnail}
            //btntxt={project.}
            // href={}
          />
        ))}
      </div>
    </div>
  );
}
export default FeaturedProjs;
