import React, { useEffect } from "react";
import "./Skills.scss";

import htmlSvg from "../../img/html-5.svg";
import jsSvg from "../../img/iconfinder_187_Js_logo_logos_4373213.svg";
import cssSvg from "../../img/iconfinder_badge-css-3_317756.svg";
import githubSvg from "../../img/iconfinder_github_1220319.svg";
import reactSvg from "../../img/iconfinder_react_1296845.svg";
import sassSvg from "../../img/iconfinder_sass_1297046.svg";
import nodeSvg from "../../img/iconfinder_node_3069651.svg";
import mysqlSvg from "../../img/mysql.svg";
import photoshop from "../../img/photoshop.svg";
import figma from "../../img/figma.png";
import reactNativeSvg from "../../img/react-native.png";

//lib
import Aos from "aos";
import "aos/dist/aos.css";
import ReactTooltip from "react-tooltip";
//

function Skills() {
  const skills = {
    stack: [
      {
        title: "Html5",
        img: htmlSvg,
      },
      {
        title: "CSS 3",
        img: cssSvg,
      },
      {
        title: "JavaScript",
        img: jsSvg,
      },
      {
        title: "React",
        img: reactSvg,
      },
      {
        title: "Sass",
        img: sassSvg,
      },
      {
        title: "Node js",
        img: nodeSvg,
      },
      {
        title: "MySQL",
        img: mysqlSvg,
      },
      {
        title: "Git",
        img: githubSvg,
      },
    ],
    other: [
      {
        title: "Photoshop",
        img: photoshop,
      },
      {
        title: "Figma",
        img: figma,
      },
      {
        title: "React native",
        img: reactNativeSvg,
      },
    ],
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-up" className="skills page-section">
      <div className="container">
        <h1 className="skills__title">Обо мне</h1>
        <div className="skills__content">
          <p className="skills__content-text">
            Приветcтвую! Я начинающий фронтенд разработчик из Крыма.Спустя год
            странствий и познания веб-разработки, я думаю что готов выполнять
            проекты различной сложности
          </p>
          <div className="skills__content-stack">
            <h2 className="skills__content-title">Мой текущий стек</h2>
            {skills.stack.map((skill, index) => {
              return (
                <img
                  className="skills__content-img"
                  src={skill.img}
                  alt={skill.title}
                  key={index}
                  data-tip={skill.title}
                />
              );
            })}
          </div>
          <div className="skills__content-stack">
            <h2 className="skills__content-title">Другие навыки</h2>
            {skills.other.map((skill, index) => {
              return (
                <img
                  className="skills__content-img"
                  src={skill.img}
                  alt={skill.title}
                  key={index}
                  data-tip={skill.title}
                />
              );
            })}
          </div>
        </div>
        <ReactTooltip
          className="tooltip"
          place="bottom"
          type="dark"
          effect="solid"
          multiline={true}
        />
      </div>
    </section>
  );
}

export default Skills;
