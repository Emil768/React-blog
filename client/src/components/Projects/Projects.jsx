import React, { useEffect, useState } from "react";
import "./Projects.scss";

import comixProject from "../../img/react-comix.PNG";
import xiaomiNotes from "../../img/Xiaomi-Notes (1).png";
import internetShop from "../../img/internet-shop.PNG";

import collegeProject from "../../img/college-project.jpg";
import schoolLifehacks from "../../img/school-lifehacks.jpg";

import heroku from "../../img/heroku.png";
import github from "../../img/iconfinder_github_1220319.svg";
import gitlab from "../../img/gitlab.png";
import dowload from "../../img/iconfinder_file-apk-format-type_5386891.svg";

//img
import reactSvg from "../../img/iconfinder_react_1296845.svg";
import sassSvg from "../../img/iconfinder_sass_1297046.svg";
import mysqlSvg from "../../img/iconfinder_Database_copy_Amazon_RDS_MySQL_DB_Instance_259318.svg";
import reactNativeSvg from "../../img/react-native.png";
import redux from "../../img/redux.png";

//lib
import Aos from "aos";
import "aos/dist/aos.css";
// import Slider from "react-slick";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

//components
import ImageView from "../ImageView/ImageView";

//
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
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
      frontend: [reactSvg, redux, sassSvg],
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
      img: xiaomiNotes,
      frontend: [reactSvg, redux, sassSvg],
      backend: [mysqlSvg],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/Xiaomi-notes",
        },
      ],
    },
    {
      title: "Internet-shop",
      text: "",
      img: internetShop,
      frontend: [reactSvg, sassSvg],
      backend: [],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/react-internet-shop",
        },
      ],
    },
  ];

  const reactNative = [
    {
      title: "College-app",
      text: "",
      img: collegeProject,
      mobile: [reactNativeSvg, redux],
      backend: [],
      links: [
        {
          img: gitlab,
          link: "https://gitlab.com/college-assistant/mobile-app",
        },
        {
          img: dowload,
          link: "https://yadi.sk/d/jp1LettuFhndfg",
        },
      ],
    },
    {
      title: "School-lifehacks",
      text: "",
      img: schoolLifehacks,
      mobile: [reactNativeSvg],
      backend: [],
      links: [
        {
          img: github,
          link: "https://github.com/Zandess/school-project",
        },
        {
          img: dowload,
          link: "https://yadi.sk/d/Ubs6VVhrLCblDA",
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
            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {projects[activeTab].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="projects__block" key={index}>
                      <h1 className="projects__block-title">{item.title}</h1>
                      <div className="projects__block-content">
                        <div className="projects__block-info">
                          <div className="projects__stack stack">
                            {item.frontend ? (
                              <div className="stack__frontend">
                                <h3 className="stack__title">Frontend</h3>
                                <div className="stack__wrapper">
                                  {item.frontend.map((item, index) => {
                                    return (
                                      <img
                                        className="stack__frontend-img"
                                        src={item}
                                        alt=""
                                        key={index}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <div className="stack__frontend">
                                <h3 className="stack__title">Mobile</h3>
                                <div className="stack__wrapper">
                                  {item.mobile.map((item, index) => {
                                    return (
                                      <img
                                        className="stack__frontend-img "
                                        src={item}
                                        alt=""
                                        key={index}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                            {item.backend.length ? (
                              <div className="stack__backend">
                                <h3 className="stack__title">Backend</h3>
                                {item.backend.map((item, index) => {
                                  return (
                                    <img
                                      className="stack__frontend-img"
                                      src={item}
                                      alt=""
                                      key={index}
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
                                  key={index}
                                >
                                  <img src={item.img} alt="" />
                                </a>
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className={
                            item.frontend
                              ? "projects__block-img "
                              : "projects__mobile-img "
                          }
                        >
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <ImageView />
    </section>
  );
}

export default Projects;
