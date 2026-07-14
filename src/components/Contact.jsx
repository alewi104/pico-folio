// Contact.jsx

function Contact() {
  const links = [
    { label: "alli.faiye@gmail.com", href: "mailto:alli.faiye@gmail.com" },
    { label: "github.com/alewi104", href: "https://github.com/alewi104" },
    {
      label: "linkedin.com/in/ahlaireah-faiye",
      href: "https://linkedin.com/in/ahlaireah-faiye",
    },
  ];

  return (
    <div
      id="Contact"
      className="aura"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        textAlign: "center",
        backgroundColor: "#4b2e83",
        boxShadow: "0 0 25px 5px #ff5fa2",
      }}
    >
      <h2 style={{ fontFamily: "var(--font-display)", color: "#ffc857" }}>
        Contact
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
        {links.map((link) => (
          <li key={link.label} style={{ margin: "10px 0" }}>
            <a
              href={link.href}
              style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff5fa2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
        &copy; 2026 Ahlaireah Lewis
      </p>
    </div>
  );
}
export default Contact;
