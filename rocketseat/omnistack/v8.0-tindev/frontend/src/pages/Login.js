import React from "react";
import "./Login.css";

import logo from "../assets/logo.svg";
import { isContainer } from "postcss-selector-parser";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev logo" />
        <input placeholder="type your Github username" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
