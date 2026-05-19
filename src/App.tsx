import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CVPage from "./pages/CVPage";
import AgencyPage from "./pages/AgencyPage";
import "./index.scss";

function App() {
  return (
    <BrowserRouter basename="/talha-portfolio">
      <Routes>
        <Route path="/" element={<CVPage />} />
        <Route path="/agency" element={<AgencyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
