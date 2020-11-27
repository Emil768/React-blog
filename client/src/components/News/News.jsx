import React, { useEffect, useState } from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import { Link } from "react-router-dom";
//

//lib
import axios from "axios";
//

function News(props) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => setNews(res.data));
  }, []);

  //dublicate tag
  const resultArray = [];
  news.map((item) => {
    if (
      resultArray.find((object) => {
        if (object.tag === item.tag) {
          return true;
        } else {
          return false;
        }
      })
    ) {
    } else {
      resultArray.push(item);
    }
  });
  console.log(resultArray);

  return (
    <section className="news page-section">
      <div className="container">
        <h1 className="news__title">Все новости</h1>
        <ul className="news__list">
          {resultArray.map((item) => {
            return (
              <li className="news__list-item" key={item.id}>
                <Link to={`/category/${item.tag}`} className="news__list-link">
                  {item.tag}
                </Link>
              </li>
            );
          })}
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
