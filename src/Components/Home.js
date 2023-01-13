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
        <ProjectList projects={projects} title="All Projects" /> // projectlist is firstly trying to map over null. by adding the logical &&, with projects being true it will move over to call ProjectList component. Note projects={projects} is the prop. which we can acces through ProjectList by calling in props to the function e.g. in ProjectList - const ProjectList = (props) this is being done with titel too.
      )}
    </div>
  );
}

export default Home;
