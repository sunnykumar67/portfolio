import logo from "../assets/images/Logo.png"


const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      {/* Left side logo */}
      <a className="navbar-brand fw-bold fs-4" href="#">
        <img
          src={logo}
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top me-2"
    
        />
      </a>

      {/* Mobile toggle button */}
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

      {/* Right side menu */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-5"> {/* Gap between menu items */}
          <li className="nav-item">
            <a className="nav-link active fw-semibold" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;