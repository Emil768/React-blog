import React from "react";
import "./AddNews.scss";
import "../InputTags/InputTags";
import InputTags from "../InputTags/InputTags";
function AddNews() {
  return (
    <section className="addNews page-section">
      <div className="container">
        <h1 className="addNews__title">Добавить новость</h1>
        <div className="addNews__content">
          <form action="" className="addNews__form">
            <input
              className="addNews__form-title"
              type="text"
              placeholder="Введите название"
            />
            <textarea
              className="addNews__form-text"
              name=""
              id=""
              cols="30"
              rows="30"
              placeholder="Введите текст"
            ></textarea>
            <InputTags />
            <input
              className="addNews__form-url"
              type="text"
              placeholder="Введите ссылку на картинку"
            />
            <button className="addNews__form-btn">Добавить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddNews;
