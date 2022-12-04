import React from "react";
import ProjectList from "./ProjectList";
import useFetch from "./useFetch";

function Home() {
  const {
    data: projects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/ProjectsData");
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
