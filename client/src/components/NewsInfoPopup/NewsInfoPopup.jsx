import React, { useEffect, useRef, useState } from "react";
import "./NewsInfoPopup.scss";

import axios from "axios";
import NewsUpdate from "../NewsUpdate/NewsUpdate";
import { useHistory } from "react-router-dom";

function NewsInfoPopup({ data, id }) {
  const [activePopup, setActivePopup] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(false);
  const popupRef = useRef();

  const history = useHistory();

  const handlerActivePopup = () => {
    setActivePopup(!activePopup);
  };

  const handleOutsideClick = event => {
    const path = event.path;
    if (!path.includes(popupRef.current)) {
      setActivePopup(false);
    }
  };

  const handlerActiveUpdateNews = () => {
    setActiveUpdate(!activeUpdate);
  };

  const handlerDeleteNews = () => {
    const confirm = window.confirm("Вы действительно хотите удалить новость?");
    if (confirm) {
      axios.delete(`https://react-blog-prj.herokuapp.com/delete/${id}`);
      history.push("/");
      history.go(0);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="news-info__menu ">
      <div
        className="news-info__btn"
        onClick={handlerActivePopup}
        ref={popupRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </svg>
      </div>
      <div
        className={activePopup ? "news-info-popup active" : "news-info-popup"}
      >
        <ul className="news__menu">
          <li className="news__menu-item" onClick={handlerActiveUpdateNews}>
            Редактировать
          </li>
          <li className="news__menu-item" onClick={handlerDeleteNews}>
            Удалить
          </li>
        </ul>
      </div>

      <NewsUpdate state={activeUpdate} setState={setActiveUpdate} {...data} />
    </div>
  );
}

export default NewsInfoPopup;
