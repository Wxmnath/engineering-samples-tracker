import React, { useState } from "react";
import ProjectList from "./ProjectList";

function Home() {
  const [projects] = useState([
    {
      id: 1,
      Part: "Part 1",
      Tool: 5000,
      Stage: "In Production",
      Engineer: "Nathan",
    },
    {
      id: 2,
      Part: "Part 2",
      Tool: 5001,
      Stage: "Tooling",
      Engineer: "Jack",
    },
    {
      id: 3,
      Part: "Part 3",
      Tool: 5002,
      Stage: "NPM",
      Engineer: "John",
    },
  ]);
  return (
    <div className="home">
      <ProjectList projects={projects} title="All Projects" />
      <ProjectList
        projects={projects.filter((project) => project.Part === "Part 3")}
        title="Search"
      />
    </div>
  );
}

export default Home;
