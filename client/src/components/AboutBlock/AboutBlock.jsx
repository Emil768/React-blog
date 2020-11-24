import React from "react";

import developGif from "../../img/develop.gif";
import "./AboutBlock.scss";
function AboutBlock() {
  return (
    <section className="about page-section">
      <div className="container">
        <h1 className="about__title">В разработке🙃</h1>
        <div className="about__img">
          <img src={developGif} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
