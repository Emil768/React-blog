import React, { useEffect, useState } from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
//

function News(props) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => setNews(res));
  }, []);

  console.log(news);

  return (
    <section className="news page-section">
      <div className="container">
        <h1 className="news__title">Все новости</h1>
        <ul className="news__list">
          <li className="news__list-item">
            <a href="" className="news__list-link">
              Мысли
            </a>
          </li>
          <li className="news__list-item">
            <a href="" className="news__list-link">
              ReactJs
            </a>
          </li>
        </ul>
        <div
          className={
            news.length ? "news__content" : "news__content news__content-empty"
          }
        >
          {news.length ? (
            news.map((item, index) => {
              return <NewsBlock {...item} key={index} />;
            })
          ) : (
            <NewsEmpty />
          )}
        </div>
      </div>
    </section>
  );
}

export default News;
