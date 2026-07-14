// AboutMe.jsx
import AboutImg from "../assets/jamfrog.jpg";

function AboutMe() {
  return (
    <div
      id="AboutMe"
      className="aura"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        boxShadow: "0 0 25px 5px var(--stand-gold)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <img
        src={AboutImg}
        alt="Ahlaireah Lewis"
        style={{
          width: "220px",
          height: "220px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "4px solid var(--stand-pink)",
        }}
      />
      <div style={{ flex: "1", minWidth: "240px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--stand-purple)",
          }}
        >
          About Me
        </h2>
        <p style={{ lineHeight: 1.6, fontSize: "1.05rem" }}>
          Hello! I'm <strong>Ahlaireah Lewis</strong>, a software engineer with
          a passion for creating reliable software and solving challenging
          technical problems.
        </p>
        <p style={{ lineHeight: 1.6, fontSize: "1.05rem" }}>
          My interests include embedded systems, systems programming,
          networking, firmware development, desktop applications, and modern web
          development. I enjoy learning how software interacts with hardware
          just as much as I enjoy building intuitive user interfaces.
        </p>

        <p style={{ lineHeight: 1.6, fontSize: "1.05rem" }}>
          Whether I'm writing C for microcontrollers, building Python tools, or
          creating React applications, I focus on writing clean, maintainable,
          and thoughtful software.
        </p>
      </div>
    </div>
  );
}
export default AboutMe;
