import React, { useEffect, useState } from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import Pagination from "../Pagination/Pagination";

//lib
import axios from "axios";

import NewsContentInfo from "../NewsContentInfo/NewsContentInfo";
import DarkModeToggle from "react-dark-mode-toggle";

//

function News() {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("dark theme") ? true : false
  );

  if (isDarkMode) {
    localStorage.setItem("dark theme", isDarkMode);
    document.body.classList.add("dark-theme");
  } else {
    localStorage.removeItem("dark theme");
    document.body.classList.remove("dark-theme");
  }

  useEffect(() => {
    axios
      .get("https://react-blog-prj.herokuapp.com/news")
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fullTags = [];

  news.forEach((item) => {
    const newsTags = JSON.parse(item.tags);
    fullTags.push(...newsTags.tags);
  });

  const tags = [...new Set(fullTags)];

  const filterNews = news.filter((note) => {
    return note.title.toLowerCase().indexOf(searchNews.toLowerCase()) !== -1;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = filterNews.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="news ">
      <div className="news-wrapper page-section">
        <div className="container">
          <div
            className={news.length ? "news__top" : "news__top news__top-empty "}
          >
            <h1 className="news__title">Все новости</h1>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
          </div>
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
              <NewsContentInfo data={tags} setSearch={setSearchNews} />
            ) : null}
          </div>
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filterNews.length}
        paginate={paginate}
      />
    </section>
  );
}

export default News;
