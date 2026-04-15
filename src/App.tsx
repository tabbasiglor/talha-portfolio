import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const backgroundVideo = "https://media.githubusercontent.com/media/tabbasiglor/talha-portfolio/main/src/assets/images/bg-video.mp4";

function PortfolioApp() {
  const [mode] = useState<"dark">("dark");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
aria-hidden="true"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
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
      <Routes>
        <Route path="/" element={<CVPage />} />
        <Route path="/agency" element={<PortfolioApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
