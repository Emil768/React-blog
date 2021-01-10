import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Category.scss";
//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
import NewsContentInfo from "../NewsContentInfo/NewsContentInfo";
//
function Category(props) {
  const category = props.match.params.name;
  const [news, setNews] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [searchNews, setSearchNews] = useState("");

  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:3001/category/${category}`),
        axios.get("http://localhost:3001/news"),
      ])
      .then(
        axios.spread((data1, data2) => {
          setCategoryName(data1.data);
          setNews(data2.data);
        })
      );
  }, [category]);

  const fullTags = [];

  news.forEach(item => {
    const newsTags = JSON.parse(item.tags);
    fullTags.push(...newsTags.tags);
  });

  const tags = [...new Set(fullTags)];

  const filterNews = categoryName.filter(note => {
    return note.title.toLowerCase().indexOf(searchNews.toLowerCase()) !== -1;
  });

  return (
    <section className="category page-section">
      <div className="container">
        <h1 className="news__title news__title-tag">{category}</h1>
        <div className="news__content">
          <div
            className={
              categoryName.length
                ? "news__content-blocks"
                : "news__content-blocks news__content-empty"
            }
          >
            {categoryName.length ? (
              filterNews.length ? (
                filterNews.map((item, index) => {
                  return <NewsBlock {...item} key={index} />;
                })
              ) : (
                <NewsEmpty searchText={searchNews} state={true} />
              )
            ) : (
              <NewsEmpty state={false} />
            )}
          </div>
          <NewsContentInfo
            data={tags}
            setSearch={setSearchNews}
            activeName={category}
          />
        </div>
      </div>
    </section>
  );
}

export default Category;
