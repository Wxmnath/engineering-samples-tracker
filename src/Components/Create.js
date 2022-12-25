/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [Part, setPart] = useState("");
  const [Tool, setTool] = useState("");
  const [Stage, setStage] = useState("Contract Review");
  const [Engineer, setEngineer] = useState("");
  const [Customer, setCustomer] = useState("");
  const [WaxProcedure, setWaxProcedure] = useState("");
  const [FoundryProcedure, setFoundryProcedure] = useState("");

  const [Description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing in the browser
    const project = {
      Customer,
      Part,
      Description,
      Tool,
      Stage,
      Engineer,
      WaxProcedure,
    };

    setIsPending(true);

    fetch("http://localhost:8000/ProjectsData", {
      // This is asynchronous and returns a promise.
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project), // body is the actual data we send with this request. This data is project.
      // JSON.stringify turns the object of project in to a string
    }).then(() => {
      setIsPending(false);
      history("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Customer:</label>
        <input
          type="text"
          name="customer"
          required
          value={Customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <label>Part No.:</label>
        <input
          type="text"
          name="name"
          required
          value={Part}
          onChange={(e) => setPart(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          required
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
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
          <option value="Contract Review">Contract Review</option>
          <option value="Tooling">Tooling</option>
          <option value="NPM">NPM</option>
          <option value="Samples In WIP">Samples In WIP</option>
          <option value="FAIR Stage">FAIR Stage</option>
        </select>

        <label>Lead Engineer: </label>
        <input
          type="text"
          name="name"
          required
          value={Engineer}
          onChange={(e) => setEngineer(e.target.value)}
        />

        <label>Wax Procedure: </label>
        <select
          value={WaxProcedure}
          onChange={(e) => setWaxProcedure(e.target.value)}
        >
          <option value="Not Complete">Not Complete</option>
          <option value="Complete">Complete</option>
        </select>
        <label>Foundry Procedure: </label>
        <select
          value={FoundryProcedure}
          onChange={(e) => setFoundryProcedure(e.target.value)}
        >
          <option value="Not Complete">Not Complete</option>
          <option value="Complete">Complete</option>
        </select>

        {!isPending && <button type="submit">Add Job</button>}
        {isPending && (
          <button type="submit" disabled>
            Adding blog...
          </button>
          // if isPending is false will show button to be showing Add Job
          // if isPending is true after it has been clicked will trurn to Adding blog... - disabled added to not allow user to click again.
        )}
      </form>
    </div>
  );
}

export default Create;
