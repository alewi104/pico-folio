// ProjectCard.jsx
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCard({ title, thumbnail, text, href, alt }) {
  return (
    <div
      className="card aura"
      style={{
        width: "18rem",
        backgroundColor: "rgba(219, 177, 195, 0.42)",
        border: "2px solid var(--stand-pink)",
        padding: "12px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px 4px var(--stand-pink)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={thumbnail}
        className="card-img-top"
        alt={alt}
        style={{ borderRadius: "12px" }}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            color: "var(--stand-purple)",
          }}
        >
          {title}
        </h5>
        <p className="card-text">{text}</p>
        <a
          href={href}
          style={{ color: "var(--stand-purple)", fontWeight: 600 }}
        >
          See more &rarr;
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
