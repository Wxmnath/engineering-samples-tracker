import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function ProjectDetails() {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/ProjectsData/${id}`);
  return (
    <div className="project-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <h2>{project.Part}</h2>
          <div>Project Status: {project.Stage}</div>
          <p>Lead engineer: {project.Engineer}</p>
        </article>
      )}
    </div>
  );
}

export default ProjectDetails;
