import { useParams } from "react-router-dom";
import ProjectData from "../assets/data/output.json";

function ProjectPage({ ProjectData }) {
  const { slug } = useParams();

  return (
    <div>
      <h2>Individual Project: {slug}</h2>
    </div>
  );
}
export default ProjectPage;
