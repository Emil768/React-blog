import React from "react";

import "./NewsSearch.scss";

function NewsSearch({ searchNews }) {
  const handlerSearchNews = e => {
    searchNews(e.target.value);
  };
  return (
    <div className="news__content-search news__search">
      <input
        className="news__search-input"
        type="text"
        placeholder="Search"
        onChange={handlerSearchNews}
        maxLength={13}
      />
    </div>
  );
}

export default NewsSearch;
