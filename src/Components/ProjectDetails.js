/* eslint-disable react/no-array-index-key */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckList from "./CheckList";
import useFetch from "./useFetch";

function ProjectDetails() {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/ProjectsData/${id}`);
  const history = useNavigate();

  const handleClickDelete = () => {
    fetch(`http://localhost:8000/ProjectsData/${id}`, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="project-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <h1>{project.Customer}</h1>
          <h2>
            {project.Part} {project.Description}
          </h2>
          <h2>{project.Tool}</h2>
          <div>Project Status: {project.Stage}</div>
          <p>Lead engineer: {project.Engineer}</p>
          <CheckList />
          <button type="submit" onClick={handleClickDelete}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default ProjectDetails;
