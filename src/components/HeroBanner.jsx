import "./HeroBanner.css";
import heroImg from "../assets/muushiBGlarge.GIF";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-tag">SOFTWARE ENGINEER</p>

          <h1>
            Building software that connects ideas with real-world solutions.
          </h1>

          <p className="hero-description">
            I'm Ahlaireah Lewis, a software engineer with interests in embedded
            systems, systems programming, networking, and full-stack web
            development. I enjoy designing applications that are reliable,
            maintainable, and enjoyable to use.
          </p>

          <div className="hero-buttons">
            <a href="#FeaturedProjects" className="primary-btn">
              View Projects
            </a>

            <a
              href={import.meta.env.BASE_URL + "/resume"}
              className="secondary-btn"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Pixel artwork" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
