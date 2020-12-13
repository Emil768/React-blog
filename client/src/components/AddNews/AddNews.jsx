import React, { useState } from "react";
import "./AddNews.scss";
import "../InputTags/InputTags";

//components
import InputTags from "../InputTags/InputTags";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//lib
import axios from "axios";
//
function AddNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [tag, setTag] = useState("");
  console.log(text);
  const addNewNews = () => {
    if (title.trim() !== "" || text.trim() !== "") {
      axios
        .post("http://localhost:3001/insert", {
          title: title,
          text: text,
          img: img,
          tag: tag,
        })
        .then(() => alert("succesfully!"));
    } else {
      alert("Введите данные!");
    }
  };

  console.log(text);

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <section className="addNews page-section">
      <div className="container">
        <h1 className="addNews__title">Добавить новость</h1>
        <div className="addNews__content">
          <form className="addNews__form">
            <input
              className="addNews__form-title"
              type="text"
              placeholder="Введите название"
              onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill value={text} onChange={handleChange} />

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
