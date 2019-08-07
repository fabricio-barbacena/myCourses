import React from "react";
import "./Login.css";

import logo from "../assets/logo.svg";
import { isContainer } from "postcss-selector-parser";

export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="Tindev logo" />
    </div>
  );
}
