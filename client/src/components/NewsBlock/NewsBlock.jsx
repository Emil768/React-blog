import React from "react";
import "./NewsBlock.scss";
import newsImg from "../../img/this-is-not-fine_cover.jpg";
function NewsBlock({ title, img, text, tag }) {
  return (
    <div className="news__block">
      <div className="news__block-content">
        <div className="news__block-date">сегодня в 19:27</div>
        <h2 className="news__block-title">{title}</h2>
        <div className="news__block-tags">
          <span className="news__block-tag">{tag}</span>
        </div>
        <div className="news__block-img">
          <img src={img} alt="" />
        </div>
        <div className="news__block-text">{text}</div>
        <a href="" className="news__block-btn">
          Читать далее
        </a>
      </div>
    </div>
  );
}

export default NewsBlock;
