import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";
import FadeIn from "./components/FadeIn";
import CVPage from "./pages/CVPage";
import "./index.scss";

function RestoreRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let path = params.get("p");

    if (path) {
      path = path.replace(/~and~/g, "&");

      // Clean URL + navigate
      window.history.replaceState(null, "", path);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function PortfolioApp() {
  const [mode] = useState<"dark">("dark");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={() => {}} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Capabilities />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/talha-portfolio">
      <RestoreRoute />
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
