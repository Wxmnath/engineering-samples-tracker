/* eslint-disable react/no-array-index-key */
import React from "react";
import ProjectsData from "../Data/ProjectsData";
import "../Styles/ProjectList.css";
import "../Styles/NameTitle.css";

function ProjectList() {
  return (
    <>
      <div className="welcome-title">
        <h1>Welcome Nathan</h1>
      </div>
      <div className="project-list">
        <table>
          <thead>
            <th>Id</th>
            <th>P/N</th>
            <th>Tool</th>
            <th>Stage</th>
            <th>Engineer</th>
          </thead>
          {ProjectsData.map((project) => {
            return (
              <tr>
                <th> {project.id}</th>
                <th>{project.Part} </th>
                <th>{project.Tool}</th>
                <th>{project.Stage}</th>
                <th>{project.Engineer}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ProjectList;
