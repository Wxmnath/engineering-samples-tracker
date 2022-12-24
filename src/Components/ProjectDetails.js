/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import useFetch from "./useFetch";

function ProjectDetails() {
  const [waxProcedure, setWaxProcedure] = useState("");
  const { id } = useParams();
  const {
    data: project, // data is now called project
    error,
    isPending,
  } = useFetch(`http://localhost:8000/ProjectsData/${id}`); // Reusing custom hook from useFetch component
  const history = useNavigate();

  const handleClickDelete = () => {
    fetch(`http://localhost:8000/ProjectsData/${id}`, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios.patch(`http://localhost:8000/ProjectsData/${id}`, {
      WaxProcedure: waxProcedure,
    });
    console.log(res);

    //   project.WaxProcedure = WaxProcedure;
    //   console.log(project);
    //   fetch(`http://localhost:8000/ProjectsData/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-type": "application/json",
    //       body: JSON.stringify({ WaxProcedure: "Not Complete" }),
    //     },
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then((data) => console.log(data));
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

          <div className="procedure-list">
            <form>
              Wax: <p>{project.WaxProcedure}</p>
              <input
                type="radio"
                name="waxprocedure"
                value="Not Complete"
                required
                onChange={(e) => setWaxProcedure(e.currentTarget.value)}
              />
              Not Complete
              <input
                type="radio"
                name="waxprocedure"
                value="Complete"
                required
                onChange={(e) => setWaxProcedure(e.currentTarget.value)}
              />
              Complete
              <button type="submit" onClick={handleUpdate}>
                Update
              </button>
            </form>
          </div>
          <button type="submit" onClick={handleClickDelete}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default ProjectDetails;
