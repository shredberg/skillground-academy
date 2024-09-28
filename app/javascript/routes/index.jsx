import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "../components/hello";
import Settings from "../components/settings";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/test" element={<Hello name="test"/>} />
      <Route path="/settings" element={<Settings name="test"/>} />
    </Routes>
  </Router>
);
