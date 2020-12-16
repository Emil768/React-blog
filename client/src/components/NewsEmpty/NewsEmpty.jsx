import React from "react";
import emptyGif from "../../img/empty.gif";
import quesGif from "../../img/ques.gif";
import "./NewsEmpty.scss";
import { Link } from "react-router-dom";
function NewsEmpty({ state, searchText }) {
  return (
    <div className="news__empty ">
      {state ? (
        <div className="news__empty-content empty-search">
          <h1 className="news__empty-title empty-title">
            По запросу «{searchText}» ничего не найдено 🙃
          </h1>
          <div className="news__empty-img empty-img">
            <img src={quesGif} alt="" />
          </div>
        </div>
      ) : (
        <div className="news__empty-content">
          <h1 className="news__empty-title">"Новостей пока нет😕"</h1>
          <div className="news__empty-img">
            <img src={emptyGif} alt="" />
          </div>
          <Link to="/addnews" className="news__empty-btn">
            Добавить новость
          </Link>
        </div>
      )}
    </div>
  );
}

export default NewsEmpty;
