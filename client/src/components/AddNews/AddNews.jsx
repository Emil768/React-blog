import React, { memo, useState } from "react";
import "./AddNews.scss";

//components

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";

//lib
import axios from "axios";
//
function AddNews() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [tags, setTags] = useState([]);

  const history = useHistory();

  const addNewNews = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/insert", {
        title: title,
        text: text,
        img: img,
        tags: JSON.stringify({ tags: [...tags] }),
      })
      .then(() => alert("succesfully!"))
      .then(() => history.go(0));
  };

  const handlerChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handlerChangeText = newText => {
    setText(newText);
  };

  const handlerChangeTags = tags => {
    setTags(tags);
  };

  const handlerChangeImg = e => {
    setImg(e.target.value);
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
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
              onChange={handlerChangeTitle}
              required
            />

            <ReactQuill
              value={text}
              onChange={handlerChangeText}
              modules={{
                toolbar: toolbarOptions,
              }}
            />
            <TagsInput
              value={tags}
              onChange={handlerChangeTags}
              className="tags"
              maxTags={3}
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
              onChange={handlerChangeImg}
              required
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

export default memo(AddNews);
