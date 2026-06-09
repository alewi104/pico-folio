import ProjectCard from "./ProjectCard";
import img1 from "./assets/paintbg.jpg";

function FeaturedProjs() {
  return (
    <div>
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
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <ProjectCard
          title="BostonApartments.com Mobile App"
          imgsrc={img1}
          alt="bostonapartments.com logo"
          text="An adaptation of bostonapartments.com as iOS/Android mobile application"
          btntxt="View"
        />
        <ProjectCard
          title="BostonApartments.com Mobile App"
          imgsrc={img1}
          alt="bostonapartments.com logo"
          text="An adaptation of bostonapartments.com as iOS/Android mobile application"
          btntxt="View"
        />
        <ProjectCard
          title="BostonApartments.com Mobile App"
          imgsrc={img1}
          alt="bostonapartments.com logo"
          text="An adaptation of bostonapartments.com as iOS/Android mobile application"
          btntxt="View"
        />
      </div>
    </div>
  );
}
export default FeaturedProjs;
