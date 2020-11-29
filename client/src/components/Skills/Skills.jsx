import React from "react";
import "./Skills.scss";

import htmlSvg from "../../img/iconfinder_50-html5_104453.svg";
import jsSvg from "../../img/iconfinder_187_Js_logo_logos_4373213.svg";
import cssSvg from "../../img/iconfinder_badge-css-3_317756.svg";
import githubSvg from "../../img/iconfinder_github_1220319.svg";
import reactSvg from "../../img/iconfinder_react_1296845.svg";
import sassSvg from "../../img/iconfinder_sass_1297046.svg";
import nodeSvg from "../../img/iconfinder_node_3069651.svg";
import mysqlSvg from "../../img/iconfinder_Database_copy_Amazon_RDS_MySQL_DB_Instance_259318.svg";

function Skills() {
  const skillsTech = {
    frontend: [htmlSvg, jsSvg, cssSvg, reactSvg, sassSvg],
    backend: [nodeSvg, mysqlSvg],
  };
  return (
    <section className="skills page-section">
      <div className="container">
        <h1 className="skills__title">My skills</h1>
        <div className="skills__content">
          <p className="skills__content-text">
            I am a beginner front-end developer. I started my way in 2019 and
            have been doing programming for a year now. During this time I got
            acquainted with such technologies as:
          </p>
          <div className="skills__content-frontend">
            <h3 className="skills__content-title">Frontend</h3>
            {skillsTech.frontend.map((skill, index) => {
              return <img src={skill} alt="" key={index} />;
            })}
          </div>
          <div className="skills__content-backend">
            <h3 className="skills__content-title">Backend</h3>
            {skillsTech.backend.map((skill, index) => {
              return <img src={skill} alt="" key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
