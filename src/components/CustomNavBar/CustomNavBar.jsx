import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./CustomNavBar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p onClick={() => navigate("/dashboard")}>Dashboard</p>
          <p onClick={() => navigate("/selection-learn")}>Learn</p>
          <p onClick={() => navigate("/selection-practice")}>Practice</p>
          <p onClick={() => navigate("/tutorials")}>Tutorials</p>
          <p onClick={() => navigate("/instructions")}>Manual</p>
          <p onClick={() => navigate("/aboutus")}>About</p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          {" "}
          <Link to="/login">Log in</Link>
        </p>
        <button type="button" onClick={() => navigate("/signup")}>
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p onClick={() => navigate("/dashboard")}>Dashboard</p>
              <p onClick={() => navigate("/selection-learn")}>Learn</p>
              <p onClick={() => navigate("/selection-practice")}>Practice</p>
              <p onClick={() => navigate("/tutorials")}>Tutorials</p>
              <p onClick={() => navigate("/instructions")}>Manual</p>
              <p onClick={() => navigate("/aboutus")}>About</p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>
                {" "}
                <Link to="/login">Log in</Link>
              </p>
              <button type="button" onClick={() => navigate("/signup")}>
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
