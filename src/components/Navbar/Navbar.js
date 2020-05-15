import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            HomePage
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            AboutSinghs
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
