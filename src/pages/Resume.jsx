// Resume.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/theme.css";
import NavBar from "../components/NavBar";

function Resume() {
  const resumeUrl = import.meta.env.BASE_URL + "/documents/resume.pdf";

  return (
    <div>
      <NavBar />
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "var(--font-display)",
            color: "#4b2e83",
            marginBottom: "24px",
          }}
        >
          Resume
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#4b2e83",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Open in New Tab &rarr;
          </a>
          <a
            href={resumeUrl}
            download
            style={{
              backgroundColor: "#ff5fa2",
              color: "#1f1830",
              padding: "8px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Download &darr;
          </a>
        </div>

        <div
          className="aura"
          style={{
            width: "100%",
            height: "80vh",
            overflow: "hidden",
            boxShadow: "0 0 25px 5px var(--stand-purple)",
          }}
        >
          <embed
            src={resumeUrl}
            type="application/pdf"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
          {/* Fallback text shows only if the browser can't render the embed */}
          <noscript>
            <p style={{ textAlign: "center", padding: "20px" }}>
              <a href={resumeUrl}>Click here to view the resume PDF.</a>
            </p>
          </noscript>
        </div>
      </div>
    </div>
  );
}
export default Resume;
