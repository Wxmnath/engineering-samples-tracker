/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ProjectList({ projects, title }) {
  // projects and title are props being called in Home component
  return (
    <div className="project-list">
      <h1>{title}</h1>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h2>P/N {project.Part}</h2>
            <p>Tool {project.Tool}</p>
            <p>{project.Stage}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
