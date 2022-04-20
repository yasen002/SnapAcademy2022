import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonPrimary.scss";
export default function ButtonPrimary({ children, animated = true, ur = "/" }) {
  return (
    // <a
    //   href={ur}
    //   className={animated ? "btn-primary btn-animated" : "btn-primary"}
    // >
    //   {children}
    // </a>
    // <Link> {children}</Link>
    <NavLink
      className={animated ? "btn-primary btn-animated" : "btn-primary"}
      to={ur}
    >
      {children}
    </NavLink>
  );
}
