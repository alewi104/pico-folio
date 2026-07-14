// ProjectPage.jsx
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/theme.css";
import ProjectData from "../assets/data/output.json";
import NavBar from "../components/NavBar";

function ProjectPage() {
  const { slug } = useParams();
  const project = ProjectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", color: "#4b2e83" }}>
          Project not found
        </h2>
      </div>
    );
  }

  const sortedImages = [...(project.images || [])].sort(
    (a, b) => a.display_order - b.display_order,
  );
  const sortedDocs = [...(project.documents || [])].sort(
    (a, b) => a.display_order - b.display_order,
  );

  return (
    <div>
      <NavBar />
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}
      >
        <h2 style={{ fontFamily: "var(--font-display)", color: "#4b2e83" }}>
          {project.title}
        </h2>

        <p style={{ lineHeight: 1.6 }}>{project.description}</p>

        {/* External links */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#4b2e83",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Project &rarr;
            </a>
          )}
          {project.demo_video && (
            <a
              href={project.demo_video}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "#ff5fa2",
                color: "#1f1830",
                padding: "8px 18px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Watch Demo &rarr;
            </a>
          )}
        </div>

        {project.technologies && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: "#8fd9a8",
                  color: "#1f1830",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Image carousel */}
        {sortedImages.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "#4b2e83",
              }}
            >
              Gallery
            </h3>
            <Carousel
              variant="dark"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 0 20px 4px rgba(75,46,131,0.4)",
              }}
            >
              {sortedImages.map((img) => (
                <Carousel.Item key={img.img_id}>
                  <div
                    style={{
                      width: "100%",
                      height: "450px",
                      backgroundColor: "#1f1830",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={import.meta.env.BASE_URL + img.filepath}
                      alt={img.caption || project.title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  {img.caption && (
                    <Carousel.Caption
                      style={{
                        backgroundColor: "rgba(31,24,48,0.65)",
                        borderRadius: "10px",
                        padding: "8px 16px",
                      }}
                    >
                      <p style={{ margin: 0, color: "white" }}>{img.caption}</p>
                    </Carousel.Caption>
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        {/* Documents */}
        {sortedDocs.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "#4b2e83",
              }}
            >
              Documents
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {sortedDocs.map((doc) => (
                <div
                  key={doc.doc_id}
                  style={{
                    flex: "1 1 220px",
                    maxWidth: "260px",
                    border: "2px solid #ff5fa2",
                    borderRadius: "14px",
                    padding: "16px",
                    backgroundColor: "rgba(255,95,162,0.08)",
                  }}
                >
                  <a
                    href={import.meta.env.BASE_URL + doc.filepath}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontWeight: 600,
                      color: "#4b2e83",
                      textDecoration: "none",
                    }}
                  >
                    {doc.title}
                  </a>
                  {doc.summary && (
                    <p
                      style={{
                        fontSize: "0.9rem",
                        marginTop: "8px",
                        marginBottom: 0,
                      }}
                    >
                      {doc.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProjectPage;
