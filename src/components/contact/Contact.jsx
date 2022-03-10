import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hpyh9d7",
        "template_tk81q0p",
        form.current,
        "tZPAVg9o-EeZprC9r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>zahid4307@gmail.com</h5>
            <a href="mailto:zahid4307@gmail.com" target="_blank">
              Send message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__icon" />
            <h4>Messenger</h4>
            <h5>Zahid Hussain</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100008183141262"
              target="_blank"
            >
              Send message
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>03029488689</h5>
            <a href="https://wa.me/3029488689" target="_blank">
              Send message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter FullName"
            required
          />
          <input type="email" name="email" placeholder="Enter Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
