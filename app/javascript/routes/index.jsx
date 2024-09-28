import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "../components/hello";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/test" element={<Hello name="test"/>} />
    </Routes>
  </Router>
);
