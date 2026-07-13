import "./Contact.css";

function Contact() {
  return (
    <footer id="Contact" className="contact-footer">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>

        <p className="section-subtitle">
          I'm always interested in discussing software engineering, embedded
          systems, and new opportunities.
        </p>

        <div className="contact-grid">
          <a href="mailto:alli.faiye@gmail.com" className="contact-card">
            <span className="contact-icon">✉️</span>

            <h3>Email</h3>

            <p>alli.faiye@gmail.com</p>
          </a>

          <a
            href="https://github.com/alewi104"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">💻</span>

            <h3>GitHub</h3>

            <p>github.com/alewi104</p>
          </a>

          <a
            href="https://linkedin.com/in/ahlaireah-faiye"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">💼</span>

            <h3>LinkedIn</h3>

            <p>linkedin.com/in/ahlaireah-faiye</p>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Ahlaireah Lewis</p>

          <p>Built with React • Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
