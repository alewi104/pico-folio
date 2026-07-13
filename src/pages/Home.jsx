import HeroBanner from "../components/HeroBanner";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import FeaturedProjs from "../components/FeaturedProjs";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <section>
        <HeroBanner />
      </section>

      <section>
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
