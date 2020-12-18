import React from "react";
import "./NewsContentInfo.scss";
import AdminBlock from "../AdminBlock/AdminBlock";
import { Link } from "react-router-dom";
function NewsContentInfo({ data, setSearch, activeName }) {
  console.log(activeName);
  return (
    <div className="news__content-info">
      <div className="news__content-search news__search">
        <input
          className="news__search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          maxLength={16}
        />
      </div>
      <div className="news-wrapper">
        <h3>Категории</h3>
        <ul className="news__list mobile-oveflow">
          {data &&
            data.map((item) => {
              return (
                <li
                  className={
                    activeName === item.tag
                      ? "news__list-item active"
                      : "news__list-item"
                  }
                  key={item.id}
                >
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
  );
}

export default NewsContentInfo;
