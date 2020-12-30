import React from "react";
import "./Contact.scss";

import emailjs from "emailjs-com";

function Contact() {
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
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="contact page-section">
      <div className="container">
        <h1 className="contact__title">Связь</h1>
        <p className="contact__text">
          Если появились какие-то вопросы,то я всегда рад их обсудить.
        </p>
        <div className="contact__content">
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
              type="text"
              placeholder="Ваша фамилия"
              name="surname"
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
