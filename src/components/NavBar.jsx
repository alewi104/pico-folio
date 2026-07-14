// NavBar.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "var(--stand-purple)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--stand-gold)",
            letterSpacing: "1px",
          }}
        >
          A.LEWIS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { label: "Home", href: import.meta.env.BASE_URL },
              {
                label: "Projects",
                href: import.meta.env.BASE_URL + "projects",
              },
              { label: "Resume", href: import.meta.env.BASE_URL + "resume" },
              { label: "About", href: import.meta.env.BASE_URL + "#AboutMe" },
              { label: "Contact", href: import.meta.env.BASE_URL + "#Contact" },
            ].map((link) => (
              <li className="nav-item" key={link.label}>
                <a
                  className="nav-link"
                  href={link.href}
                  style={{
                    color: "#fff",
                    fontWeight: 500,
                    padding: "8px 16px",
                    borderRadius: "999px",
                    transition: "background-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--stand-pink)";
                    e.currentTarget.style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
