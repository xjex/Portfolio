import "./App.css";
import ColorSchemesExample from "./Navigation/navbar";
import Page from "./Frontend/landing";
import EmailPage from "./Frontend/emailme";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ColorSchemesExample />
      <Page />
      <EmailPage />

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
