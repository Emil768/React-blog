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
        axios.get("http://localhost:3001"),
      ])
      .then(
        axios.spread((data1, data2) => {
          setCategoryName(data1.data);
          setNews(data2.data);
        })
      );
  }, [category]);

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

  const filterNews = categoryName.filter((note) => {
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
            data={resultArray}
            setSearch={setSearchNews}
            activeName={category}
          />
        </div>
      </div>
    </section>
  );
}

export default Category;
