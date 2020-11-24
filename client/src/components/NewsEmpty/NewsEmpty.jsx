import React from "react";
import emptyGif from "../../img/empty.gif";
import "./NewsEmpty.scss";
function NewsEmpty() {
  return (
    <div className="news__empty ">
      <h1 className="news__empty-title">Новостей пока нет 😕</h1>
      <div className="news__empty-img">
        <img src={emptyGif} alt="" />
      </div>
      <a className="news__empty-btn" href="">
        Добавить новость
      </a>
    </div>
  );
}

export default NewsEmpty;
