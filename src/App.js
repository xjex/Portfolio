import logo from "./logo.svg";
import "./App.css";
import ColorSchemesExample from "./Navigation/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <div id="Head">
        <h1>Hello, I'm Xavier!</h1>
        <p>Content Creator | Keyboard Enthusiat | Developer</p>
        <h2>
          <FiGithub />
          | <FiFacebook /> | <FiLinkedin /> | <FiTwitter />
        </h2>
      </div>
      <div id="Head">
        <h1>Lorem ipsum</h1>
      </div>
    </div>
  );
}

export default App;
