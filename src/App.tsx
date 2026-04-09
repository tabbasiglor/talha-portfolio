import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Timeline from "./components/Timeline";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
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

export default App;
