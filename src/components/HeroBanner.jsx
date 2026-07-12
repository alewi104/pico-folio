import heroImg from "../assets/muushiBGlarge.GIF";

function HeroBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          position: "absolute",
          left: 0,
          width: "100%",
          height: "500px",
        }}
      >
        <div>
          <h1
            style={{
              padding: "20px",
              textAlign: "left",
              zIndex: 2,
              color: "white",
              fontFamily: "fantasy",
            }}
          >
            It's too technical to go alone!
          </h1>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
