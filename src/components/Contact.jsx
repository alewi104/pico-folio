function Contact() {
  return (
    <footer
      id="Contact"
      style={{
        marginTop: "60px",
        padding: "40px 20px",
        textAlign: "center",
        boxShadow: "0 0 15px 5px rgba(0,0,0,.4)",
      }}
    >
      <h2>Let's Connect</h2>

      <p>
        Interested in working together, discussing software engineering, or just
        saying hello? Feel free to reach out.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          margin: "25px 0",
        }}
      >
        <a href="mailto:alli.faiye@gmail.com">📧 alli.faiye@gmail.com</a>

        <a
          href="https://github.com/alewi104"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://linkedin.com/in/ahlaireah-faiye"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
      </div>

      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        © 2026 Ahlaireah Lewis • Built with React & Vite
      </p>
    </footer>
  );
}

export default Contact;
