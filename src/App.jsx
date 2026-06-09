import HeroBanner from "./HeroBanner";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import FeaturedProjs from "./FeaturedProjs";
import Contact from "./Contact";

function App() {
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

export default App;
