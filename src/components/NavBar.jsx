import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span className="logo-name">Ahlaireah Lewis</span>
          <span className="logo-title">Software Engineer</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href={import.meta.env.BASE_URL + "/projects"}>Projects</a>
            </li>

            <li>
              <a href={import.meta.env.BASE_URL + "/resume"}>Resume</a>
            </li>

            <li>
              <a href="#AboutMe">About</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
