import React from "react";
import emptyGif from "../../img/empty.gif";
import quesGif from "../../img/ques.gif";
import "./NewsEmpty.scss";
import { Link } from "react-router-dom";
function NewsEmpty({ state, searchText }) {
  {
    return (
      <div className="news__empty ">
        <h1 className="news__empty-title">
          {state
            ? `По запросу «${searchText}» ничего не найдено 🙃`
            : "Новостей пока нет😕"}
        </h1>
        <div className="news__empty-img">
          <img src={state ? quesGif : emptyGif} alt="" />
        </div>
        {state ? null : (
          <Link to="/addnews" className="news__empty-btn">
            Добавить новость
          </Link>
        )}
      </div>
    );
  }
}

export default NewsEmpty;
