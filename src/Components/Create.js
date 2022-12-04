/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

function Create() {
  const [part, setPart] = useState("");
  const [tool, setTool] = useState("");
  const [projectStatus, setProjectStatus] = useState("Contract Review");
  const [leadEngineer, setLeadEngineer] = useState("");

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form>
        <label>
          Part No.:
          <input
            type="text"
            name="name"
            required
            value={part}
            onChange={(e) => setPart(e.target.value)}
          />
        </label>
        <label>
          Tool No.:
          <input
            type="number"
            name="name"
            required
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          />
        </label>
        <label>Project Status:</label>
        <select
          value={projectStatus}
          onChange={(e) => setProjectStatus(e.target.value)}
        >
          <option value="Tooling">Tooling</option>
          <option value="NPM">NPM</option>
          <option value="In Production">In Production</option>
          <option value="Contract Review">Contract Review</option>
        </select>

        <label>
          Lead Engineer:
          <input
            type="text"
            name="name"
            required
            value={leadEngineer}
            onChange={(e) => setLeadEngineer(e.target.value)}
          />
        </label>
        <button type="button">Add Job</button>
      </form>
    </div>
  );
}

export default Create;
