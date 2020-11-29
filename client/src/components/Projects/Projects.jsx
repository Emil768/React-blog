import React from "react";
import "./Projects.scss";
import comixImg from "../../img/react-comix.PNG";
function Projects() {
  return (
    <section className="projects page-section">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__content">
          {/* <div className="project__item">
            <img src={comixImg} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
