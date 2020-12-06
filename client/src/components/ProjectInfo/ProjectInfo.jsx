import React from "react";

import "./ProjectInfo.scss";

import { useParams } from "react-router-dom";

function ProjectInfo(props) {
  //   const { title } = useParams();
  console.log(props);

  return (
    <div className="project-info">
      <h1>Project-info</h1>
    </div>
  );
}

export default ProjectInfo;
