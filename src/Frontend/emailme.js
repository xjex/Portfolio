import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f3m9drp",
        "template_8o6k9ee",
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
    <section>
      <div className="Container">
        <h2 className="--text-center">Send me an Email</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
          id="emailmeform"
        >
          <input
            type="text"
            placeholder="Full name"
            name="username"
            required
          ></input>

          <input
            type="email"
            placeholder="Hello@hello.com"
            name="email"
            required
          ></input>

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
          ></input>

          <textarea name="message" cols="30" rows="10" required></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default EmailPage;
