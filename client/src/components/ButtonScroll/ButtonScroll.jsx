import React, { useCallback, useEffect, useState } from "react";

import "./ButtonScroll.scss";

function ButtonScroll() {
  const [state, setState] = useState(null);
  const rootElement = document.documentElement;

  const scrollTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlerScroll = useCallback(() => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
      setState("active");
    } else {
      setState(null);
    }
  }, [
    rootElement.scrollHeight,
    rootElement.clientHeight,
    rootElement.scrollTop,
  ]);

  useEffect(() => {
    document.addEventListener("scroll", handlerScroll);
    return () => {
      document.removeEventListener("scroll", handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <button
      className={state ? "button-scroll active" : "button-scroll"}
      onClick={scrollTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </svg>
    </button>
  );
}

export default ButtonScroll;
