import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Engineering Projects</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Part</a>
      </div>
    </nav>
  );
}

export default Navbar;
