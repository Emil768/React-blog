import React from "react";
import "./NewsBlock.scss";
import newsImg from "../../img/this-is-not-fine_cover.jpg";
function NewsBlock() {
  return (
    <div className="news__block">
      <div className="news__block-content">
        <div className="news__block-date">сегодня в 19:27</div>
        <h2 className="news__block-title">
          Создание блога с помощью React+MySQL
        </h2>
        <div className="news__block-tags">
          <span className="news__block-tag">ReactJs</span>
          <span className="news__block-tag">Мысли</span>
        </div>
        <div className="news__block-img">
          <img src={newsImg} alt="" />
        </div>
        <div className="news__block-text">
          Статья как одним из способов сделать Блог на ReactJs + MySQL...
        </div>
        <a href="" className="news__block-btn">
          Читать далее
        </a>
      </div>
    </div>
  );
}

export default NewsBlock;
