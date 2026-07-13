import AboutImg from "../assets/jamfrog.jpg";

function AboutMe() {
  return (
    <div
      id="AboutMe"
      style={{
        zIndex: 1,
        height: "auto",
        boxShadow: "0 0 15px 10px",
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
