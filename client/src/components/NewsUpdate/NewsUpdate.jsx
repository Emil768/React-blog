import React, { useEffect, useState, memo } from "react";
import "./NewsUpdate.scss";

//components
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//lib
import axios from "axios";

function NewsUpdate({ state, setState, id, title, text, img, tags }) {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const [updateTags, setUpdateTags] = useState([]);

  useEffect(() => {
    const newTag = tags && JSON.parse(tags);
    setUpdateTitle(title);
    setUpdateText(text);
    setUpdateImg(img);
    setUpdateTags(state => [...state, ...newTag.tags]);
  }, [id, title, text, img, tags]);

  const handlerCloseUpdateNews = () => {
    setState(!state);
  };

  const handlerChangeTitle = e => {
    setUpdateTitle(e.target.value);
  };

  const handlerChangeText = newText => {
    setUpdateText(newText);
  };

  const handlerChangeTags = tags => {
    setUpdateTags(tags);
  };

  const handlerChangeImg = e => {
    setUpdateImg(e.target.value);
  };

  const handlerUpdateNews = () => {
    axios.put(`http://localhost:3001/update/${id}`, {
      title: updateTitle,
      text: updateText,
      img: updateImg,
      tags: JSON.stringify({ tags: [...updateTags] }),
    });
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
    <div className={state ? "news-update active" : "news-update"}>
      <div className="container">
        <div className="addNews__content">
          <div className="news-update__close" onClick={handlerCloseUpdateNews}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9M17 17L9 9M9 9L1 17M9 9L17 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <form className="addNews__form">
            <input
              className="addNews__form-title"
              type="text"
              placeholder="Введите название"
              onChange={handlerChangeTitle}
              defaultValue={updateTitle}
            />

            <ReactQuill
              value={updateText}
              onChange={handlerChangeText}
              modules={{
                toolbar: toolbarOptions,
              }}
            />
            <TagsInput
              value={updateTags}
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
              defaultValue={updateImg}
            />
            <button className="addNews__form-btn" onClick={handlerUpdateNews}>
              Изменить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(NewsUpdate);
