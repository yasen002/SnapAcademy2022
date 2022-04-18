import React from "react";
import "./HamburgerMenu.scss";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <div className="container">
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div />
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
