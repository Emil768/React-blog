import React, { useEffect, useState } from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
//

//lib
import axios from "axios";
//

function News(props) {
  const [news, setNews] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => setNews(res.data));
  }, []);

  //dublicate tag
  const resultArray = [];
  news.forEach((item) => {
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

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = news.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = pageNumber =>setCurrentPage(pageNumber)

  return (
    <section className="news page-section">
      <div className="container">
        <h1 className="news__title">Все новости</h1>
        <div className="news-wrapper">
          <ul className="news__list mobile-oveflow">
            {resultArray.map((item) => {
              return (
                <li className="news__list-item" key={item.id}>
                  <Link
                    to={`/category/${item.tag}`}
                    className="news__list-link"
                  >
                    {item.tag}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={
            news.length ? "news__content" : "news__content news__content-empty"
          }
        >
          {news.length ? (
            currentsPosts.map((item, index) => {
              return <NewsBlock {...item} key={index} />;
            })
          ) : (
            <NewsEmpty />
          )}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={news.length} paginate = {paginate}/>
      </div>
    </section>
  );
}

export default News;
