import React, { useState, useEffect } from "react";
import "./AdminBlock.scss";
import axios from "axios";

function AdminBlock() {
  const [password, setPassword] = useState("");
  const [dbPassword, setDbPassword] = useState("");
  const handlerGetAdmin = () => {
    axios("http://localhost:3001/password").then((res) =>
      setDbPassword(res.data)
    );
  };

  return (
    <div className="admin">
      <div className="admin__content">
        <h3 className="admin__title">Admin mode:{"off"}</h3>
        <input
          type="password"
          className="admin__input"
          placeholder="Password"
          maxLength={30}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="admin__btn" onClick={handlerGetAdmin}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default AdminBlock;
