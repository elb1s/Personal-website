import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Reorder from "@material-ui/icons/Reorder";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavbar(false);
  }, [location]);
  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="navbar" id={navbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={handleClick}>
          <Reorder />
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
