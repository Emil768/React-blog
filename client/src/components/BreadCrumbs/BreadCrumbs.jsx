import React from "react";
import "./BreadCrumbs.scss";
import { Link } from "react-router-dom";
function BreadCrumbs({ title }) {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__list-item">
          <Link to="/" className="breadcrumbs__list-link">
            Новости
          </Link>
        </li>
        <li className="breadcrumbs__list-item">{title}</li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
