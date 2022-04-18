import React from "react";
import "./ButtonPrimary.scss";
export default function ButtonPrimary({ children, animated = true, ur = "/" }) {
  return (
    <a
      href={ur}
      className={animated ? "btn-primary btn-animated" : "btn-primary"}
    >
      {children}
    </a>
  );
}
