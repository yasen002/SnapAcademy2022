import React, { useRef, useEffect } from "react";
import "./NavBar.scss";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  const navbarRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      navbarRef.current.classList.toggle("sticky", window.scrollY > 0);
    });
  });

  return (
    <div ref={navbarRef} className="nav-bar">
      <h1>Stix & Straw</h1>
      <HamburgerMenu />
    </div>
  );
}
