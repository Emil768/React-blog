import React, { useEffect } from "react";
import "./Contact.scss";
//lib
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
//

import mailGif from "../../img/mail.gif";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1ym0tl",
        "template_bg3j9q9",
        e.target,
        "user_Yfo77tIkDhv8tMYDPezrp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="contact page-section" data-aos="fade-up">
      <div className="container">
        <h1 className="contact__title">Contact me</h1>
        <div className="contact__content">
          <div className="contact__img">
            <img src={mailGif} alt="" />
          </div>
          <form className="contact__form" onSubmit={sendEmail}>
            <input
              className="contact__form-input"
              type="text"
              placeholder="Ваше имя"
              name="name"
              required
            />
            <input
              className="contact__form-input"
              type="email"
              placeholder="Ваш e-mail"
              name="email"
              required
            />

            <textarea
              className="contact__form-text"
              cols="30"
              rows="10"
              placeholder="Ваше сообщение"
              name="message"
              required
            ></textarea>
            <button className="contact__form-btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
