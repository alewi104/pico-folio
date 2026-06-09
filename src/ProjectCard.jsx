import "bootstrap/dist/css/bootstrap.min.css";
import card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imgsrc} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.href} className="btn btn-primary">
          {props.btntxt}
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
