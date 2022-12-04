import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

function Home() {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/ProjectsData")
      .then((res) => {
        if (!res.ok) {
          throw Error("data not fetched??");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []); // square brackets to only render useEffect on the first render and not keep rendering after.

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {projects && (
        <ProjectList projects={projects} title="All Projects" /> // projectlist is firstly trying to map over null. by adding the logical and with projects being true will move over to call projectlist
      )}
    </div>
  );
}

export default Home;
