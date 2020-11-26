import React from "react";
import emptyGif from "../../img/empty.gif";
import "./NewsEmpty.scss";
import { Link } from "react-router-dom";
function NewsEmpty() {
  return (
    <div className="news__empty ">
      <h1 className="news__empty-title">Новостей пока нет 😕</h1>
      <div className="news__empty-img">
        <img src={emptyGif} alt="" />
      </div>
      <Link to="/addnews" className="news__empty-btn">
        Добавить новость
      </Link>
    </div>
  );
}

export default NewsEmpty;
