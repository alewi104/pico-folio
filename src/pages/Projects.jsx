// Projects.jsx
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../assets/data/output.json";
import img1 from "../assets/pathway.png";
import "../styles/theme.css";
import NavBar from "../components/NavBar";

function Projects() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
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
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "var(--font-display)",
              color: "var(--stand-purple)",
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
              gap: "20px",
              marginTop: "20px",
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
      </div>
    </div>
  );
}
export default Projects;
