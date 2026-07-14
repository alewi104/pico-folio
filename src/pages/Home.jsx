// Home.jsx
import "../styles/theme.css";
import HeroBanner from "../components/HeroBanner";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import FeaturedProjs from "../components/FeaturedProjs";
import Contact from "../components/Contact";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-green)",
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        paddingBottom: "60px",
      }}
    >
      <section>
        <NavBar />
        <HeroBanner />
        <FeaturedProjs />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
export default Home;
