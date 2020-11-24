import React from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
//

function News(props) {
  console.log(props);
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
        <div className="news__content">
          {/* <NewsEmpty /> */}
          <NewsBlock />
          <NewsBlock />
          <NewsBlock />
        </div>
      </div>
    </section>
  );
}

export default News;
