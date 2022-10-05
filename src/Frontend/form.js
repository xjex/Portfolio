import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Alert from "react-bootstrap/Alert";
const Form = () => {
  const [value, setValue] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f3m9drp",
        "template_cpzcz8n",
        form.current,
        "flw8gY3g9ScVZSQ3r"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("emailmeform").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>SEND ME AN EMAIL</span>
              </div>
              <div className="app-contact">CONTACT INFO : +63 977 105 3480</div>
            </div>
            <div className="screen-body-item">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="emailmeform"
                className="app-form"
              >
                <input
                  className="app-form-control"
                  placeholder="Your name"
                  name="username"
                  required
                ></input>

                <input
                  type="email"
                  className="app-form-control"
                  placeholder="Email"
                  name="email"
                  required
                ></input>

                <input
                  type="Number"
                  inputMode="numeric"
                  className="app-form-control"
                  placeholder="Contact number"
                  name="contact"
                  required
                ></input>

                {/* <PhoneInput
                  className="app-form-control"
                  country={"ph"}
                  value={value}
                  placeholder="Enter phone number"
                  onChange={setValue}
                  name="contact"
                />  phone number here but CSS is not cool lol*/}
                <input
                  className="app-form-control"
                  placeholder="Subject"
                  name="subject"
                  required
                ></input>

                <textarea
                  className="app-form-control"
                  placeholder="Feel free to write"
                  cols="300"
                  name="message"
                  required
                ></textarea>

                <div className="app-form-group buttons">
                  <button className="app-form-button" type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
