/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ProjectList({ projects, title }) {
  return (
    <div className="project-list">
      <h2>{title}</h2>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h2>P/N {project.Part}</h2>
            <p>Tool {project.Tool}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
