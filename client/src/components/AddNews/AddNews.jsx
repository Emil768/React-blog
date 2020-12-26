import React, { useState } from "react";
import "./AddNews.scss";

//components

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//lib
import axios from "axios";
//
function AddNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [tags, setTags] = useState([]);

  const addNewNews = (e) => {
    e.preventDefault();
    if (title.trim() !== "" || text.trim() !== "") {
      axios
        .post("http://localhost:3001/insert", {
          title: title,
          text: text,
          img: img,
          tag: tags[0],
        })
        .then(() => alert("succesfully!"));
        e.target.reset();
        
    } else {
      alert("Введите данные!");
    }
  };

  const handleChange = (text) => {
    setText(text);
  };
  const handleChangeTag = (tags) => {
    setTags(tags);
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
          <form className="addNews__form" onSubmit={addNewNews}>
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
            <TagsInput
              value={tags}
              onChange={handleChangeTag}
              className="tags"
              maxTags={6}
              focusedClassName="tags--focused"
              tagProps={{
                className: "tag",
                classNameRemove: "tag-remove",
              }}
              inputProps={{
                className: "tags-input",
                placeholder: "Добавьте тег",
              }}
            />
            <input
              className="addNews__form-url"
              type="text"
              placeholder="Введите ссылку на картинку"
              onChange={(e) => setImg(e.target.value)}
            />
            <button className="addNews__form-btn" type="submit">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddNews;
