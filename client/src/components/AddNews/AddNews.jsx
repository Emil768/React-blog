import React, { useState } from "react";
import "./AddNews.scss";
import "../InputTags/InputTags";

//components
import InputTags from "../InputTags/InputTags";
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

  const handleChange = (text) => {
    setText(text);
  };
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [
      { align: null },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image", "video", "formula"],
  ];

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

            <ReactQuill
              value={text}
              onChange={handleChange}
              modules={{
                toolbar: toolbarOptions,
              }}
            />
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
