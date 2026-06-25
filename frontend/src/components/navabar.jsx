import { FaUserGraduate } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark custom-navbar">
      <div className="container">
        <span className="navbar-brand fw-bold">
          <FaUserGraduate className="me-2" />
          Student Registration System
        </span>
      </div>
    </nav>
  );
}

export default Navbar;