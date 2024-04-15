import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="backText">
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </nav>
    </header>
  );
};

export default Header;
