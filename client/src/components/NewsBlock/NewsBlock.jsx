import React from "react";
import "./NewsBlock.scss";

//lib
import { Link } from "react-router-dom";
import * as moment from "moment/moment";
import "moment/locale/ru";
import parse from "html-react-parser";
//

function NewsBlock({ id, title, img, text, tag, date }) {
  moment.locale("ru");
  const imgStyles = {
    backgroundImage: `url(${img}) `,
    width: "100%",
    minHeight: "200px",
    backgroundSize: "cover",
    backgroundPosition: " center",
    backgroundRepeat: " no-repeat",
  };
  return (
    <div className="news__block">
      <div className="news__block-content">
        <div className="news__block-date">{moment(date).calendar()}</div>
        <h2 className="news__block-title">{title}</h2>
        <div className="news__block-tags">
          <span className="news__block-tag">{tag}</span>
        </div>
        <div className="news__block-img" style={imgStyles}></div>
        <div className="news__block-text">{text && parse(text)}</div>
        <Link to={`/news/${id}`} className="news__block-btn">
          Читать далее
        </Link>
      </div>
    </div>
  );
}

export default NewsBlock;
