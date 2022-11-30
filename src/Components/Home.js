import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

function Home() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/ProjectsData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []); // square brackets to only render useEffect on the first render and not keep rendering after.

  return (
    <div className="home">
      {projects && (
        <ProjectList projects={projects} title="All Projects" /> // projectlist is firstly trying to map over null. by adding the logical and with projects being true will move over to call projectlist
      )}
    </div>
  );
}

export default Home;