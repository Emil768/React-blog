import React, { useEffect, useState, useRef } from "react";

import "./NewsInfo.scss";
//components
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
//
//lib
import * as moment from "moment/moment";
import "moment/locale/ru";
//

function NewsInfo(props) {
  moment.locale("ru");
  const id = props.match.params.id;
  const [newsInfo, setNewsInfo] = useState([]);
  const [activePopup, setActivePopup] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then((res) => setNewsInfo(res.find((item) => item.id == id)));
    document.body.addEventListener("click", handleOutsideClick);
  }, [id]);
  const { title, text, img, tag, date } = newsInfo;

  const popupRef = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path;
    if (!path.includes(popupRef.current)) {
      setActivePopup(false);
    }
  };

  const handlerActivePopup = () => {
    setActivePopup(!activePopup);
  };

  return (
    <section className="news-info page-section">
      <div className="container container--fullpost">
        <BreadCrumbs title={title} />
        <h1 className="news-info__title">{title}</h1>
        {localStorage.length ? (
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
              className={
                activePopup ? "news-info-popup active" : "news-info-popup"
              }
            >
              <ul className="news__menu">
                <li className="news__menu-item">Редактировать</li>
                <li className="news__menu-item">Удалить</li>
              </ul>
            </div>
          </div>
        ) : null}
        <div className="news-info__top">
          <div className="news-info__date">
            Дата: {moment(date).format("L")}
          </div>
          <div className="news-info__category">
            Категория:
            <Link to={`/category/${tag}`} className="news-info__tag">
              {tag}
            </Link>
          </div>
        </div>
        <div className="news-info__content">
          <div className="news-info__img">
            <img src={img} alt="" />
          </div>
          <div className="news-info__text">{text && parse(text)}</div>
        </div>
      </div>
    </section>
  );
}

export default NewsInfo;
