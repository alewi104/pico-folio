import "bootstrap/dist/css/bootstrap.min.css";
import card from "react-bootstrap/Card";

function ProjectCard({ title, thumbnail, text }) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        backgroundColor: "rgba(253, 139, 244, 0.5)",
        border: "1px solid",
        padding: "12px",
      }}
    >
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {/* <a href={href} className="btn btn-primary">
          {btntxt}
        </a> */}
      </div>
    </div>
  );
}
export default ProjectCard;
