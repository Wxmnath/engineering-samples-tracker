import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";

import ProductCard from "./ProductCard";
import "../Styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/productcard/:id" element={<ProductCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
