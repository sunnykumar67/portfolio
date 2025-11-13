import image from "../assets/images/sarswati.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6 text-black">
            <h1 className="fw-bold">Hi, I'm <span className="text-warning">Sunny Kumar</span></h1>
            <h5 className="mb-3">I'm a Web Developer</h5>
            <p className="mb-4">
              I’m a highly motivated and results-oriented individual with a passion for programming,
              strong communication skills, and collaboration with a passion for web development.
            </p>
            {/* <button className="btn btn-warning me-3">More</button>
            <button className="btn btn-warning ">Resume</button> */}
            <div className="d-flex gap-5 mt-3">
  <button className="btn btn-warning">More ...</button>
  <button className="btn btn-warning">Resume</button>
</div>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 text-center">
            <img
              src={image}
              alt="Sunny Kumar"
              className="hero-img img-fluid rounded-circle shadow-lg"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
