import React from "react";
import "./ButtonPrimary.scss";
export default function ButtonPrimary({ children, animated = true }) {
  return (
    <a
      href="#"
      className={animated ? "btn-primary btn-animated" : "btn-primary"}
    >
      {children}
    </a>
  );
}
