/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [Part, setPart] = useState("");
  const [Tool, setTool] = useState("");
  const [Stage, setStage] = useState("Contract Review");
  const [Engineer, setEngineer] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { Part, Tool, Stage, Engineer };

    setIsPending(true);

    fetch("http://localhost:8000/ProjectsData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      setIsPending(false);
      history("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Part No.:</label>
        <input
          type="text"
          name="name"
          required
          value={Part}
          onChange={(e) => setPart(e.target.value)}
        />

        <label>Tool No.: </label>
        <input
          type="number"
          name="name"
          required
          value={Tool}
          onChange={(e) => setTool(e.target.value)}
        />

        <label>Project Status:</label>
        <select value={Stage} onChange={(e) => setStage(e.target.value)}>
          <option value="Tooling">Tooling</option>
          <option value="NPM">NPM</option>
          <option value="In Production">In Production</option>
          <option value="Contract Review">Contract Review</option>
        </select>

        <label>Lead Engineer: </label>
        <input
          type="text"
          name="name"
          required
          value={Engineer}
          onChange={(e) => setEngineer(e.target.value)}
        />

        {!isPending && <button type="submit">Add Job</button>}
        {isPending && (
          <button type="submit" disabled>
            Adding blog...
          </button>
        )}
      </form>
    </div>
  );
}

export default Create;
