import React, { useEffect, useState } from "react";

import "./NewsInfo.scss";
//components
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
//

function NewsInfo(props) {
  const id = props.match.params.id;
  const [newsInfo, setNewsInfo] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3001`)
      .then((res) => res.json())
      .then((res) => setNewsInfo(res.find((item) => item.id == id)));
  }, [id]);
  console.log(newsInfo);
  const { title, text, img, tag } = newsInfo;

  return (
    <section className="news-info page-section">
      <div className="container container--fullpost">
        <BreadCrumbs title={title} />
        <h1 className="news-info__title">{title}</h1>
        <div className="news-info__top">
          <div className="news-info__date">
            Дата: {new Date().toLocaleString()}
          </div>
          <div className="news-info__category">
            Категория:<span>{tag}</span>
          </div>
        </div>
        <div className="news-info__content">
          <div className="news-info__img">
            <img src={img} alt="" />
          </div>
          <div className="news-info__text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsInfo;
