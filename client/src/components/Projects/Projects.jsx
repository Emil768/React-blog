import React, { useEffect, useState } from "react";
import "./Projects.scss";
import comixImg from "../../img/react-comix.PNG";

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
    },
    {
      title: "Xiaomi-notes",
      text: "",
    },
    {
      title: "Internet-shop",
      text: "",
    },
  ];

  const reactNative = [
    {
      title: "College-app",
      text: "",
    },
    {
      title: "School-lifehacks",
      text: "",
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
                <div className="projects__content-block" key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.title}</p>
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
