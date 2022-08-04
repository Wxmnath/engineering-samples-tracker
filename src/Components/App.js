import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ProjectList from "./ProjectList";
import Login from "./Login";
import LogOut from "./LogOut";
import "../Styles/App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link className="Home" to="/">
          Home
        </Link>
        <Link className="Login" to="login">
          Login
        </Link>
        <Link className="Log-out" to="log_out">
          Log Out
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="login" element={<Login />} />
        <Route path="log_out" element={<LogOut />} />
        {/* <Route path=":id" element={<ProjectDisplay />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
