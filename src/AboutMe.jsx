import AboutImg from "./assets/jamfrog.jpg";

function AboutMe() {
  return (
    <div
      style={{
        backgroundColor: "pink",
      }}
    >
      <h2>About Me</h2>
      <div>
        <img
          src={AboutImg}
          style={{
            width: "50%",
            height: "auto",
            marginBottom: "20px",
            opacity: 0.5,
            borderRadius: "30px",
          }}
        ></img>
      </div>
    </div>
  );
}
export default AboutMe;
