import React, { useEffect, useState, useRef, useCallback } from "react";

import "./NewsInfo.scss";
//components
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import NewsUpdate from "../NewsUpdate/NewsUpdate";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import { Link, useHistory } from "react-router-dom";
import parse from "html-react-parser";
//
//lib
import * as moment from "moment/moment";
import "moment/locale/ru";
import axios from "axios";
//

function NewsInfo(props) {
  moment.locale("ru");
  const idNews = props.match.params.id;
  const [newsInfo, setNewsInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activePopup, setActivePopup] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(false);

  

  const handleOutsideClick = useCallback((event) => {
    const path = event.path;
    if (!path.includes(popupRef.current)) {
      setActivePopup(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001`)
      .then((res) => setNewsInfo(res.data.find((item) => item.id == idNews)))
      .then(() => setLoading(false));

    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [idNews, handleOutsideClick]);

  const { id, title, text, img, date,tags } = newsInfo;
  const popupRef = useRef();

  const setTags = tags && JSON.parse(tags);
  
  const handlerActivePopup = () => {
    setActivePopup(!activePopup);
  };

  const history = useHistory();

  const handlerDeleteNews = () => {
    const confirm = window.confirm("Вы действительно хотите удалить новость?");
    if (confirm) {
      axios.delete(`http://localhost:3001/delete/${id}`);
      history.push("/");
      history.go(0);
    }
  };

  const handlerUpdateNews = () => {
    setActiveUpdate(!activeUpdate);
  };

  return (
    <section className="news-info page-section">
      {loading ? (
        <NewsEmpty state={true} searchText={title} />
      ) : (
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
                  <li className="news__menu-item" onClick={handlerUpdateNews}>
                    Редактировать
                  </li>
                  <li className="news__menu-item" onClick={handlerDeleteNews}>
                    Удалить
                  </li>
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
              { tags?setTags.tags.map((tag,index)=>{
                return(
                  <Link to={`/category/${tag}`} className="news-info__tag" key={index}>
                      {tag}
                  </Link>
                )
              })
              : 
              null
              }
            </div>
          </div>
          <div className="news-info__content">
            <div className="news-info__img">
              <img src={img} alt="" />
            </div>
            <div className="news-info__text">{text && parse(text)}</div>
          </div>

          <NewsUpdate
            state={activeUpdate}
            setState={setActiveUpdate}
            {...newsInfo}
          />
        </div>
      )}
    </section>
  );
}

export default NewsInfo;
