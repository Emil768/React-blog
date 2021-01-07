import React, { useEffect, useState } from "react";
import "./News.scss";

//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import Pagination from "../Pagination/Pagination";

//lib
import axios from "axios";

import NewsContentInfo from "../NewsContentInfo/NewsContentInfo";
//

function News() {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then(res => setNews(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  const fullTags = [];

  news.forEach(item => {
    const newsTags = JSON.parse(item.tags);
    fullTags.push(...newsTags.tags);
  });

  const tags = [...new Set(fullTags)];

  const filterNews = news.filter(note => {
    return note.title.toLowerCase().indexOf(searchNews.toLowerCase()) !== -1;
  });

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentsPosts = filterNews.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="news ">
      <div className="news-wrapper page-section">
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
