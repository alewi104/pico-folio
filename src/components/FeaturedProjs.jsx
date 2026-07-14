// FeaturedProjs.jsx
import ProjectCard from "./ProjectCard";
import ProjectData from "../assets/data/output.json";
import img1 from "../assets/pathway.png";

function FeaturedProjs() {
  const featuredProjects = ProjectData.filter(
    (project) => project.featured === 1,
  );

  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "rgba(251, 246, 239, 0.15)",
          borderRadius: "24px",
          padding: "30px 20px",
          boxShadow: "0 0 30px 6px var(--stand-purple)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "var(--font-display)",
            color: "var(--stand-purple)",
            marginBottom: "24px",
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
            gap: "20px",
          }}
        >
          {featuredProjects.map((project) => (
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
    </div>
  );
}
export default FeaturedProjs;
