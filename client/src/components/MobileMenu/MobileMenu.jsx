import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";
function MobileMenu(state) {
  console.log(state);
  return (
    <div
      className={
        state ? "mobile-menu__linewrapper active" : "mobile-menu__linewrapper"
      }
    >
      <ul className="mobile-menu__list">
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Новости
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/about" className="menu__link">
            Обо мне
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/addnews" className="menu__link">
            Предложить новость
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
