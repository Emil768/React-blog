import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Category.scss";
//components
import NewsBlock from "../NewsBlock/NewsBlock";
import NewsEmpty from "../NewsEmpty/NewsEmpty";
//
function Category(props) {
  const category = props.match.params.name;
  const [categoryName, setCategoryName] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/category/${category}`)
      .then((res) => setCategoryName(res.data));
  }, [category]);

  return (
    <section className="news page-section">
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
              categoryName.map((item, index) => {
                return <NewsBlock {...item} key={index} />;
              })
            ) : (
              <NewsEmpty />
            )}
          </div>
          <div>
            <h1>Next time... 😀</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;