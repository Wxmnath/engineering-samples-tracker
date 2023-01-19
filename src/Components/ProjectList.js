/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ProjectList({ projects, title }) {
  projects.sort((a, b) => {
    if (a.Date < b.Date) {
      return -1;
    }
    if (a.Date > b.Date) {
      return 1;
    }
    return 0;
  });
  //   if (a.Part === b.Part) {
  //     return a.Date > b.Date;
  //   }
  //   return a.Customer > b.Customer ? 1 : -1;
  // });
  // projects and title are props being called in Home component
  return (
    <div className="project-list">
      <h1>{title}</h1>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h2>P/N {project.Part}</h2>
            <p>{project.Customer}</p>
            <p>Tool {project.Tool}</p>
            <p>{project.Stage}</p>
            <p>{project.Date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
