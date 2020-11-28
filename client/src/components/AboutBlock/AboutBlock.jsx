import React from "react";

// import developGif from "../../img/develop.gif";
import "./AboutBlock.scss";
import codeBg from "../../img/giphy.gif";
function AboutBlock() {
  return (
    <section className="about page-section">
      <div className="container">
        {/* <h1 className="about__title">В разработке🙃</h1>
        <div className="about__img">
          <img src={developGif} alt="" />
        </div> */}
        {/* font-family: PT Mono; */}
        <div className="about__title-block">
          <div className="about__title">
            <h1 className="about__title-name">Emil Murahas</h1>
            <p className="about__title-text">
              Hello, World! I’m a frontend developer.
            </p>
          </div>
          <div className="about__img">
            <img src={codeBg} alt="" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  );
}

export default AboutBlock;
