import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then((res) => setNewsInfo(res.find((item) => item.id == id)));
  }, [id]);
  const { title, text, img, tag, date } = newsInfo;
  return (
    <section className="news-info page-section">
      <div className="container container--fullpost">
        <BreadCrumbs title={title} />
        <h1 className="news-info__title">{title}</h1>
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
