import React, { useState } from "react";
import "./AddNews.scss";
import "../InputTags/InputTags";
import InputTags from "../InputTags/InputTags";

//lib
import axios from "axios";
//
function AddNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [tag, setTag] = useState("");

  const addNewNews = () => {
    axios
      .post("http://localhost:3001/insert", {
        title: title,
        text: text,
        img: img,
        tag: tag,
      })
      .then(() => alert("succesfully!"));
  };

  console.log(tag);
  return (
    <section className="addNews page-section">
      <div className="container">
        <h1 className="addNews__title">Добавить новость</h1>
        <div className="addNews__content">
          <form className="addNews__form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="addNews__form-title"
              type="text"
              placeholder="Введите название"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="addNews__form-text"
              name=""
              id=""
              cols="30"
              rows="30"
              placeholder="Введите текст"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <InputTags setState={setTag} />
            <input
              className="addNews__form-url"
              type="text"
              placeholder="Введите ссылку на картинку"
              onChange={(e) => setImg(e.target.value)}
            />
            <button className="addNews__form-btn" onClick={addNewNews}>
              Добавить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddNews;
