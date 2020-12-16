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
import AdminBlock from "../AdminBlock/AdminBlock";
//

function News(props) {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //dublicate tag
  const resultArray = [];
  news.forEach((item) => {
    if (
      resultArray.find((object) => {
        if (object.tag.toLowerCase() === item.tag.toLowerCase()) {
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

  const filterNews = news.filter((note) => {
    return note.title.toLowerCase().indexOf(searchNews.toLowerCase()) !== -1;
  });

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = filterNews.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="news page-section">
      <div className="container">
        <h1
          className={
            news.length ? "news__title" : "news__title news__title-empty "
          }
        >
          Все новости
        </h1>
        <div className="news__content">
          <div
            className={
              news.length
                ? "news__content-blocks"
                : "news__content-blocks news__content-empty"
            }
          >
            {news.length ? (
              filterNews.length ? (
                currentsPosts.map((item, index) => {
                  return <NewsBlock {...item} key={index} />;
                })
              ) : (
                <NewsEmpty searchText={searchNews} state={true} />
              )
            ) : (
              <NewsEmpty state={false} />
            )}
          </div>
          {news.length ? (
            <div className="news__content-info">
              <div className="news__content-search news__search">
                <input
                  className="news__search-input"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchNews(e.target.value)}
                  maxLength={30}
                />
              </div>
              <div className="news-wrapper">
                <h3>Категории</h3>
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
              <AdminBlock />
            </div>
          ) : null}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filterNews.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
}

export default News;
