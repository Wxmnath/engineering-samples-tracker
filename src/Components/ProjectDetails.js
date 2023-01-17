/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import useFetch from "./useFetch";

function ProjectDetails() {
  const [waxProcedure, setWaxProcedure] = useState("");
  const [foundryProcedure, setFoundryProcedure] = useState("");
  const [cutOffProcedure, setCutOffProcedure] = useState("");
  const [linishProcedure, setLinishProcedure] = useState("");
  const [ipcProcedure, setIpcProcedure] = useState("");
  const [fettlingProcedure, setFettlingProcedure] = useState("");
  const [visualProcedure, setVisualProcedure] = useState("");
  const [partmarkProcedure, setPartmarkProcedure] = useState("");
  const [commentsAdded, setCommentsAdded] = useState("");
  const [stage, setStage] = useState("");
  // eslint-disable-next-line no-unused-vars
  let savedText = "";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    savedText = commentsAdded;
  }, [commentsAdded]);

  const handleChange = (e) => {
    setCommentsAdded(e.target.value);
  };

  const { id } = useParams();
  const {
    data: project, // data is now called project
    error,
    isPending,
  } = useFetch(`http://localhost:8000/ProjectsData/${id}`); // Reusing custom hook from useFetch component
  const history = useNavigate();

  const handleClickDelete = async () => {
    await axios.delete(`http://localhost:8000/ProjectsData/${id}`).then(() => {
      history("/");
    });
  };

  const handleUpdate = async () => {
    // e.preventDefault();

    await axios.patch(`http://localhost:8000/ProjectsData/${id}`, {
      WaxProcedure: waxProcedure,
      FoundryProcedure: foundryProcedure,
      CutOffProcedure: cutOffProcedure,
      LinishProcedure: linishProcedure,
      IpcProcedure: ipcProcedure,
      FettlingProcedure: fettlingProcedure,
      VisualProcedure: visualProcedure,
      PartmarkProcedure: partmarkProcedure,
      comments: commentsAdded,
      Stage: stage,
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
          <h3>Project Status: {project.Stage}</h3>
          <select
            defaultValue={(stage, project.Stage)}
            onChange={(e) => setStage(e.target.value)}
          >
            <option value="Contract Review">Contract Review</option>
            <option value="Tooling">Tooling</option>
            <option value="NPM">NPM</option>
            <option value="Samples In WIP">Samples In WIP</option>
            <option value="FAIR Stage">FAIR Stage</option>
          </select>
          <h3>Lead engineer: {project.Engineer}</h3>

          <div className="procedure-list">
            <form>
              <h3>Wax Procedures: {project.WaxProcedure}</h3>
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
              <div>
                <h3>Foundry Procedure: {project.FoundryProcedure}</h3>
                <input
                  type="radio"
                  name="foundryprocedure"
                  value="Not Complete"
                  required
                  onChange={(e) => setFoundryProcedure(e.currentTarget.value)}
                />
                Not Complete
                <input
                  type="radio"
                  name="foundryprocedure"
                  value="Complete"
                  required
                  onChange={(e) => setFoundryProcedure(e.currentTarget.value)}
                />
                Complete
                <div>
                  <h3>Cut Off Procedure: {project.CutOffProcedure}</h3>
                  <input
                    type="radio"
                    name="cutoffprocedure"
                    value="Not Complete"
                    required
                    onChange={(e) => setCutOffProcedure(e.currentTarget.value)}
                  />
                  Not Complete
                  <input
                    type="radio"
                    name="cutoffprocedure"
                    value="Complete"
                    required
                    onChange={(e) => setCutOffProcedure(e.currentTarget.value)}
                  />
                  Complete
                  <div>
                    <h3>Linish Procedure: {project.LinishProcedure}</h3>
                    <input
                      type="radio"
                      name="linishprocedure"
                      value="Not Complete"
                      required
                      onChange={(e) =>
                        setLinishProcedure(e.currentTarget.value)
                      }
                    />
                    Not Complete
                    <input
                      type="radio"
                      name="linishprocedure"
                      value="Complete"
                      required
                      onChange={(e) =>
                        setLinishProcedure(e.currentTarget.value)
                      }
                    />
                    Complete
                    <div>
                      <h3>IPC/STR Procedure: {project.IpcProcedure}</h3>
                      <input
                        type="radio"
                        name="IPCprocedure"
                        value="Not Complete"
                        required
                        onChange={(e) => setIpcProcedure(e.currentTarget.value)}
                      />
                      Not Complete
                      <input
                        type="radio"
                        name="IPCprocedure"
                        value="Complete"
                        required
                        onChange={(e) => setIpcProcedure(e.currentTarget.value)}
                      />
                      Complete
                      <div>
                        <h3>Fettling Procedure: {project.FettlingProcedure}</h3>
                        <input
                          type="radio"
                          name="fettlingprocedure"
                          value="Not Complete"
                          required
                          onChange={(e) =>
                            setFettlingProcedure(e.currentTarget.value)
                          }
                        />
                        Not Complete
                        <input
                          type="radio"
                          name="fettlingprocedure"
                          value="Complete"
                          required
                          onChange={(e) =>
                            setFettlingProcedure(e.currentTarget.value)
                          }
                        />
                        Complete
                        <div>
                          <h3>Visual Procedure: {project.VisualProcedure}</h3>
                          <input
                            type="radio"
                            name="visualprocedure"
                            value="Not Complete"
                            required
                            onChange={(e) =>
                              setVisualProcedure(e.currentTarget.value)
                            }
                          />
                          Not Complete
                          <input
                            type="radio"
                            name="visualprocedure"
                            value="Complete"
                            required
                            onChange={(e) =>
                              setVisualProcedure(e.currentTarget.value)
                            }
                          />
                          Complete
                          <div>
                            <h3>
                              Part Mark Procedure: {project.PartmarkProcedure}
                            </h3>
                            <input
                              type="radio"
                              name="partmarkprocedure"
                              value="Not Complete"
                              required
                              onChange={(e) =>
                                setPartmarkProcedure(e.currentTarget.value)
                              }
                            />
                            Not Complete
                            <input
                              type="radio"
                              name="partmarkprocedure"
                              value="Complete"
                              required
                              onChange={(e) =>
                                setPartmarkProcedure(e.currentTarget.value)
                              }
                            />
                            Complete
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Last Comments:</h3>
              <textarea
                className="text-box"
                type="text"
                name="comments"
                defaultValue={(commentsAdded, project.comments)}
                onChange={handleChange}
              />
              <button type="submit" onClick={handleUpdate}>
                Update
              </button>
            </form>
          </div>
          <button type="submit" onClick={handleClickDelete}>
            Remove Project
          </button>
        </article>
      )}
    </div>
  );
}

export default ProjectDetails;
