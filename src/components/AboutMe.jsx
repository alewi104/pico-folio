import "./AboutMe.css";
import AboutImg from "../assets/jamfrog.jpg";

function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <img src={AboutImg} alt="Ahlaireah Lewis" />
        </div>

        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: "left" }}>
            About Me
          </h2>

          <p>
            Hello! I'm <strong>Ahlaireah Lewis</strong>, a software engineer
            with a passion for creating reliable software and solving
            challenging technical problems.
          </p>

          <p>
            My interests include embedded systems, systems programming,
            networking, firmware development, desktop applications, and modern
            web development. I enjoy learning how software interacts with
            hardware just as much as I enjoy building intuitive user interfaces.
          </p>

          <p>
            Whether I'm writing C for microcontrollers, building Python tools,
            or creating React applications, I focus on writing clean,
            maintainable, and thoughtful software.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p>B.S. Software Engineering</p>
              <p>Arizona State University</p>
            </div>

            <div className="highlight-card">
              <h3>💻 Interests</h3>
              <p>Embedded Systems</p>
              <p>Firmware • Networking • Full Stack</p>
            </div>
          </div>

          <a
            href={import.meta.env.BASE_URL + "/resume"}
            className="primary-btn"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
