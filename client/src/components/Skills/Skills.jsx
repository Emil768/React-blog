import React, { useEffect } from "react";
import "./Skills.scss";

import htmlSvg from "../../img/iconfinder_50-html5_104453.svg";
import jsSvg from "../../img/iconfinder_187_Js_logo_logos_4373213.svg";
import cssSvg from "../../img/iconfinder_badge-css-3_317756.svg";
import githubSvg from "../../img/iconfinder_github_1220319.svg";
import reactSvg from "../../img/iconfinder_react_1296845.svg";
import sassSvg from "../../img/iconfinder_sass_1297046.svg";
import nodeSvg from "../../img/iconfinder_node_3069651.svg";
import mysqlSvg from "../../img/iconfinder_Database_copy_Amazon_RDS_MySQL_DB_Instance_259318.svg";
import reactNativeSvg from "../../img/react-native.png";

//lib
import Aos from "aos";
import "aos/dist/aos.css";
//

function Skills() {
  const skillsTech = {
    frontend: [htmlSvg, jsSvg, cssSvg, reactSvg, sassSvg],
    backend: [nodeSvg, mysqlSvg],
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="fade-up" className="skills page-section">
      <div className="container">
        <h1 className="skills__title">Хто я?</h1>
        <div className="skills__content">
          <p className="skills__content-text">
            Привет я начинающий фронтенд разработчик из Крыма.Спустя год
            странствий и познания веб-разработки, я думаю что готов выполнять
            проекты различной сложности
          </p>
          <div className="skills__content-stack">
            <h2 className="skills__content-title">Мой актуальный стек</h2>
            <div className="skills__content-block skills__content-frontend ">
              <h3 className="skills__content-title">Frontend</h3>
              {skillsTech.frontend.map((skill, index) => {
                return <img src={skill} alt="" key={index} />;
              })}
            </div>
            <div className="skills__content-block skills__content-backend">
              <h3 className="skills__content-title">Backend</h3>
              {skillsTech.backend.map((skill, index) => {
                return <img src={skill} alt="" key={index} />;
              })}
            </div>
            <div className="skills__content-block skills__content-other">
              <h3 className="skills__content-title">Other skills</h3>
              <img src={githubSvg} alt="" />
            </div>
            <div className="skills__content-studing">
              <h3 className="skills__content-title">In studing</h3>
              <img src={reactNativeSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
