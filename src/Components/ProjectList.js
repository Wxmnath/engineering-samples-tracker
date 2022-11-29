/* eslint-disable react/prop-types */
import React from "react";

function ProjectList({ projects, title }) {
  return (
    <div className="project-list">
      <h2>{title}</h2>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <h2>{project.title}</h2>
          <p>Part Number{project.Part}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
