import React from "react";
import Nametitle from "./NameTitle";
import ProjectList from "./ProjectList";
import "../Styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Engineering samples</header>
      <Nametitle />
      <ProjectList />
    </div>
  );
}

export default App;
