// HeroBanner.jsx
import heroImg from "../assets/muushiBGlarge.GIF";

function HeroBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "520px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(46,27,82,0.15) 0%, rgba(46,27,82,0.75) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          maxWidth: "560px",
          padding: "20px 28px",
          backgroundColor: "rgba(31,24,48,0.55)",
          border: "3px solid var(--stand-pink)",
          borderRadius: "18px",
          boxShadow: "0 0 25px 4px var(--stand-pink)",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
            lineHeight: 1.3,
          }}
        >
          It's too technical to go alone!
        </h1>
      </div>
    </div>
  );
}
export default HeroBanner;
