import React, { useEffect, useState } from "react";
import "./Projects.scss";

import comixProject from "../../img/comix-project.png";
import xiaomiNotes from "../../img/Xiaomi-Notes (1).png";
import internetShop from "../../img/internet-shop.PNG";
import collegeProject from "../../img/college-project.jpg";

//lib
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const tabs = ["React", "React-native"];
  const [activeTab, setActiveTab] = useState(0);
  const react = [
    {
      title: "React-comix",
      text:
        "Мини интернет-магазин и по совместительству мой первый проект на React",
      img: comixProject,
      technologies: ["Html", "Scss", "React", "Redux", "json-server"],
      github: "https://github.com/Zandess/React-comix",
      link: "https://react-comix.herokuapp.com/",
    },
    {
      title: "Internet-shop",
      text: "Интернет-магазин сверстанный по макету",
      img: internetShop,
      technologies: ["Html", "Scss", "React"],
      github: "https://github.com/Zandess/react-internet-shop",
      link: "https://sleepy-euler-fcda5a.netlify.app/",
    },

    {
      title: "Xiaomi-notes",
      text: "Мини приложение,целью которой было затестить новые технологии",
      img: xiaomiNotes,
      technologies: ["Html", "Scss", "React", "Redux", "MySql", "Express"],
      github: "https://github.com/Zandess/Xiaomi-notes",
      link: "https://upbeat-bose-ddd651.netlify.app/",
    },
  ];

  const reactNative = [
    {
      title: "College-app",
      text: "Первое мобильное приложение сделанное совместно с командой",
      img: collegeProject,
      mobile: ["React Native", "Redux"],
      github: "https://gitlab.com/college-assistant/mobile-app",
      link: "https://yadi.sk/d/jp1LettuFhndfg",
    },
  ];

  const handlerActiveTab = index => {
    setActiveTab(index);
  };

  const projects = [react, reactNative];

  return (
    <section data-aos="fade-up" className="projects page-section">
      <div className="container">
        <h1 className="projects__title">Проекты</h1>
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
                <div
                  className={
                    item.technologies
                      ? "projects__block"
                      : "projects__block projects__block-mobile"
                  }
                  key={index}
                >
                  <div className="projects__block-content">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.technologies ? (
                        <div className="projects__block-img ">
                          <img src={item.img} alt="" />
                        </div>
                      ) : (
                        <div className="projects__mobile-img ">
                          <img src={item.img} alt="" />
                        </div>
                      )}
                    </a>
                    <div className="projects__block-info">
                      <div className="projects__stack stack">
                        <h1 className="projects__block-title">{item.title}</h1>
                        <div className="projects__block-sourse">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                            </svg>
                          </a>
                          <a
                            href={item.github}
                            className="footer__social-link github-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg "
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <p className="projects__block-text">{item.text}</p>
                      <ul className="stack__technologies-list">
                        {item.technologies
                          ? item.technologies.map((item, index) => {
                              return (
                                <li
                                  className="stack__technologies-item"
                                  key={index}
                                >
                                  {item}
                                </li>
                              );
                            })
                          : item.mobile.map((item, index) => {
                              return (
                                <li
                                  className="stack__technologies-item"
                                  key={index}
                                >
                                  {item}
                                </li>
                              );
                            })}
                      </ul>
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
