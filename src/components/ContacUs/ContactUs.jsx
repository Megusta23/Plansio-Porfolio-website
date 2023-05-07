import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

import {
  MapPinIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6r2ojgz",
        "template_f6bkvxn",
        form.current,
        "-SaClD2zQ-pAe3cBm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="input-container">
        <div className="left-side-contact">
          <h2>Let's get in touch</h2>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="left-side-contact-info">
            <MapPinIcon className="icons-big" />
            <p>
              <span>Adress:</span> Mostar / Bosnia & Herzegovina
            </p>
          </div>

          <div className="left-side-contact-info">
            <EnvelopeOpenIcon className="icons-big" />
            <p>
              <span>Email:</span> plansio.central@gmail.com
            </p>
          </div>
          <div className="left-side-contact-info">
            <PhoneIcon className="icons-big" />
            <p>
              <span>Phone:</span> + 062 555 444
            </p>
          </div>
          <h2>Conclusions:</h2>
          <p>
            Thank you for choosing Plansio as your IT Online Agency. Contact us
            today to learn more about our services and how we can help take your
            business to the next level.
          </p>
        </div>
        <div className="right-side-contact">
          <form onSubmit={sendEmail} ref={form}>
            <label>Full Name:</label>
            <input type="text" placeholder="John Doe" name="from_name" />

            <label>Email addres:</label>
            <input
              type="text"
              name="email_from"
              placeholder="person@example.com"
            />

            <label>Message:</label>
            <textarea
              name="message"
              id="message-area"
              cols="30"
              rows="10"
              placeholder="Type a message:"
            ></textarea>
            <input type="submit" value="Send" className="submit-input" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
