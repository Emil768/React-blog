import React, { useEffect, useState } from "react";
import "./Projects.scss";

import comixProject from "../../img/react-comix.png";
import heroku from "../../img/heroku.png";
import github from "../../img/iconfinder_github_1220319.svg";

//img

import htmlSvg from "../../img/iconfinder_50-html5_104453.svg";
import jsSvg from "../../img/iconfinder_187_Js_logo_logos_4373213.svg";
import cssSvg from "../../img/iconfinder_badge-css-3_317756.svg";
import githubSvg from "../../img/iconfinder_github_1220319.svg";
import reactSvg from "../../img/iconfinder_react_1296845.svg";
import sassSvg from "../../img/iconfinder_sass_1297046.svg";
import nodeSvg from "../../img/iconfinder_node_3069651.svg";
import mysqlSvg from "../../img/iconfinder_Database_copy_Amazon_RDS_MySQL_DB_Instance_259318.svg";
import reactNativeSvg from "../../img/react-native.png";
import redux from "../../img/redux.png";

//lib
import Aos from "aos";
import "aos/dist/aos.css";
//
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const tabs = ["React", "React-native"];
  const [activeTab, setActiveTab] = useState(0);
  const react = [
    {
      title: "React-comix",
      text: "",
      img: comixProject,
      frontend: [reactSvg, redux],
      backend: [],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/React-comix",
        },
        {
          img: heroku,
          link: "https://react-comix.herokuapp.com/",
        },
      ],
    },
    {
      title: "Xiaomi-notes",
      text: "",
      img: comixProject,
      frontend: [reactSvg, redux],
      backend: [mysqlSvg],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/React-comix",
        },
      ],
    },
    {
      title: "Internet-shop",
      text: "",
      img: comixProject,
      frontend: [reactSvg, redux],
      backend: [],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/React-comix",
        },
      ],
    },
  ];

  const reactNative = [
    {
      title: "College-app",
      text: "",
      img: comixProject,
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/React-comix",
        },
      ],
    },
    {
      title: "School-lifehacks",
      text: "",
      img: comixProject,
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/React-comix",
        },
      ],
    },
  ];

  const handlerActiveTab = (index) => {
    setActiveTab(index);
  };

  const projects = [react, reactNative];
  console.log(projects);
  return (
    <section data-aos="fade-up" className="projects page-section">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__wrapper">
          <div className="tabs-wrapper">
            <ul className="tabs__list">
              {tabs.map((tab, index) => {
                return (
                  <li
                    onClick={() => handlerActiveTab(index)}
                    className={activeTab === index ? "tab active" : "tab"}
                    key={index}
                  >
                    {tab}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="projects__content">
            {projects[activeTab].map((item, index) => {
              return (
                <div className="projects__block" key={index}>
                  <h1 className="projects__block-title">{item.title}</h1>
                  <div className="projects__block-content">
                    <div className="projects__block-info">
                      <div className="projects__stack stack">
                        <div className="stack__frontend">
                          <h3 className="stack__title">Frontend</h3>
                          {item.frontend.map((item, index) => {
                            return (
                              <img
                                className="stack__frontend-img"
                                src={item}
                                alt=""
                              />
                            );
                          })}
                        </div>
                        {item.backend.length ? (
                          <div className="stack__backend">
                            <h3 className="stack__title">Backend</h3>
                            {item.backend.map((item, index) => {
                              return (
                                <img
                                  className="stack__frontend-img"
                                  src={item}
                                  alt=""
                                />
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                      <div className="projects__block-links">
                        <h3 className="stack__title">Source</h3>
                        {item.links.map((item, index) => {
                          return (
                            <a
                              href={item.link}
                              className="projects__block-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src={item.img} alt="" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div className="projects__block-img">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
