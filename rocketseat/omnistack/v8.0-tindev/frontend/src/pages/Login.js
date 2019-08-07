import React, { useState } from "react";
import "./Login.css";

import logo from "../assets/logo.svg";
import { isContainer } from "postcss-selector-parser";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    history.push("/main");
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev logo" />
        <input
          placeholder="type your Github username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
