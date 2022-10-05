import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Page = () => {
  return (
    <div id="Head">
      <div id="pad">
        <div id="typing">
          <h1>Hello, I'm Xavier!</h1>
        </div>
      </div>

      <p>Content Creator | Keyboard Enthusiat | Developer</p>
      <h2>
        <FiGithub /> | <FiFacebook /> | <FiLinkedin /> | <FiTwitter />
      </h2>
    </div>
  );
};

export default Page;
