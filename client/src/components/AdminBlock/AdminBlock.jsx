import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./AdminBlock.scss";
import axios from "axios";

function AdminBlock() {
  const [password, setPassword] = useState("");
  const [dbPassword, setDbPassword] = useState("");
  const history = useHistory();
  const handlerGetAdmin = () => {
    if (localStorage.getItem("password") === "succes") {
      localStorage.removeItem("password");
      history.go(0);
    } else {
      axios
        .post("http://localhost:3001/password", {
          password: password,
        })
        .then((res) => setDbPassword(res.data));
    }
  };

  if (!dbPassword.length) {
    console.log("no");
  } else {
    localStorage.setItem("password", "succes");
    history.go(0);
  }

  return (
    <div className="admin">
      <div className="admin__content">
        <h3 className="admin__title">
          Admin mode:{localStorage.length ? "on" : "off"}
        </h3>
        <form className="admin__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="password"
            name="password"
            autoComplete="on"
            className={
              localStorage.length ? "admin__input hide" : "admin__input "
            }
            placeholder="Password"
            maxLength={30}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="admin__btn" onClick={handlerGetAdmin}>
            {localStorage.length ? "Выйти" : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminBlock;
