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
            <tr>
              <th>Id</th>
              <th>P/N</th>
              <th>Tool</th>
              <th>Stage</th>
              <th>Engineer</th>
            </tr>
          </thead>
          {ProjectsData.map((project) => {
            return (
              <tbody>
                <tr>
                  <td> {project.id}</td>
                  <td>{project.Part} </td>
                  <td>{project.Tool}</td>
                  <td>{project.Stage}</td>
                  <td>{project.Engineer}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ProjectList;
