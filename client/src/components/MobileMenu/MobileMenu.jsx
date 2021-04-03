import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.scss";
function MobileMenu({ state, setState }) {
  const hideMobileMenu = () => {
    setState(false);
  };

  return (
    <div
      className={
        state ? "mobile-menu__linewrapper active" : "mobile-menu__linewrapper"
      }
    >
      <div
        className={
          state ? "mobile-menu__overside active" : "mobile-menu__overside"
        }
        onClick={hideMobileMenu}
      ></div>
      <nav className={state ? "mobile-menu__list active" : "mobile-menu__list"}>
        <NavLink
          exact
          to="/"
          className="menu__link"
          activeClassName="menu__link--active"
          onClick={hideMobileMenu}
        >
          Новости
        </NavLink>

        <NavLink
          to="/about"
          className="menu__link"
          activeClassName="menu__link--active"
          onClick={hideMobileMenu}
        >
          Портфолио
        </NavLink>

        <NavLink
          to="/contacts"
          className="menu__link"
          activeClassName="menu__link--active"
          onClick={hideMobileMenu}
        >
          Контакты
        </NavLink>

        {localStorage.getItem("password") ? (
          <NavLink
            to="/addnews"
            className="menu__link"
            activeClassName="menu__link--active"
            onClick={hideMobileMenu}
          >
            Предложить новость
          </NavLink>
        ) : null}
      </nav>
    </div>
  );
}

export default MobileMenu;
