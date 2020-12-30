import React from "react";
import "./NewsContentInfo.scss";
import AdminBlock from "../AdminBlock/AdminBlock";
import { Link } from "react-router-dom";
function NewsContentInfo({
  data,
  setSearch,
  handlerActiveMenu,
  stateActiveMenu,
  activeName,
}) {
  return (
    <div className="news__content-info">
      <div className="news__content-search news__search">
        <input
          className="news__search-input"
          type="text"
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
          maxLength={13}
        />
      </div>
      <div className="news__content-category">
        <h3>Категории</h3>
        <div className="news__content-btn" onClick={handlerActiveMenu}>
          <svg
            className={stateActiveMenu ? "active" : null}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </div>
        {stateActiveMenu ? (
          <ul className="news__list mobile-oveflow">
            {data &&
              data.map((tag, index) => {
                return (
                  <li
                    className={
                      activeName === tag
                        ? "news__list-item active"
                        : "news__list-item"
                    }
                    key={index}
                  >
                    <Link to={`/category/${tag}`} className="news__list-link">
                      {tag}
                    </Link>
                  </li>
                );
              })}
          </ul>
        ) : null}
      </div>
      <AdminBlock />
    </div>
  );
}

export default NewsContentInfo;
