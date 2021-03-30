import React, { useEffect, useState } from "react";

import "./NewsInfo.scss";
//components
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
//
//lib
import * as moment from "moment/moment";
import "moment/locale/ru";
import axios from "axios";
import NewsInfoPopup from "../NewsInfoPopup/NewsInfoPopup";
import ButtonScroll from "../ButtonScroll/ButtonScroll";
//

function NewsInfo(props) {
  moment.locale("ru");

  const idNews = props.match.params.id;
  const [newsInfo, setNewsInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://react-blog-prj.herokuapp.com/news`)
      .then((res) => setNewsInfo(res.data.find((item) => item.id == idNews)))
      .then(() => setLoading(false));
  }, [idNews]);

  const { title, text, img, date, tags } = newsInfo;
  const setTags = tags && JSON.parse(tags);

  return (
    <section className="news-info page-section">
      {loading ? (
        <NewsEmpty state={true} searchText={title} />
      ) : (
        <div className="container container--fullpost">
          <BreadCrumbs title={title} />
          <h1 className="news-info__title">{title}</h1>
          {localStorage.length ? (
            <NewsInfoPopup data={newsInfo} id={idNews} />
          ) : null}
          <div className="news-info__top">
            <div className="news-info__date">
              Дата: {moment(date).format("L")}
            </div>
            <div className="news-info__category">
              Категория:
              {tags
                ? setTags.tags.map((tag, index) => {
                    return (
                      <Link
                        to={`/category/${tag}`}
                        className="news-info__tag"
                        key={index}
                      >
                        {tag}
                      </Link>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="news-info__content">
            <div className="news-info__img">
              <img src={img} alt="" />
            </div>
            <div className="news-info__text">{text && parse(text)}</div>
          </div>
        </div>
      )}
      <ButtonScroll />
    </section>
  );
}

export default NewsInfo;
