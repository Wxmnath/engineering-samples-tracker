/* eslint-disable react/no-array-index-key */
import React from "react";
import "../Styles/ProjectList.css";

const projectData = [
  {
    Part: "Part 1",
    Tool: 5000,
    Stage: "In Production",
    Engineer: "Nathan",
  },
  {
    Part: "Part 2",
    Tool: 5001,
    Stage: "Tooling",
    Engineer: "Jack",
  },
  {
    Part: "Part 3",
    Tool: 5002,
    Stage: "NPM",
    Engineer: "John",
  },
];

const moreDetails = "";

function ProjectList() {
  return (
    <div className="project-list">
      <table>
        <tr>
          <th>P/N</th>
          <th>Tool</th>
          <th>Stage</th>
          <th>Details</th>
          <th>Engineer</th>
        </tr>
        {projectData.map((project) => {
          return (
            <tr>
              <td>{project.Part}</td>
              <td>{project.Tool}</td>
              <td>{project.Stage}</td>
              <a href={moreDetails}>More Details</a>
              <td>{project.Engineer}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ProjectList;
