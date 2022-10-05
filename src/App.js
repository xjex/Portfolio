import "./App.css";
import ColorSchemesExample from "./Navigation/navbar";
import Page from "./Frontend/landing";
import EmailPage from "./Frontend/emailme";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Frontend/form";

import Showcase from "./Frontend/showcase";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ColorSchemesExample />
      <Page />
      <Showcase />
      {/* <EmailPage /> */}
      <Form />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
