import heroImg from "./assets/computerbg.jpg";

function HeroBanner() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
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
          height: "400px",
        }}
      >
        <div>
          <h1
            style={{
              padding: "20px",
              textAlign: "right",
              zIndex: 2,
              color: "white",
              fontFamily: "cursive",
            }}
          >
            Hello World! I am so glad to meet you
          </h1>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
