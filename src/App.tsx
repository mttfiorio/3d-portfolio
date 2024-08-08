import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
} from "./components/index";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col items-center bg-primary">
        <Navbar />

        <Hero />
        <About />
        <Experience />
        <Projects />
        <div className="relative z-0">
          {
            //<Contact />
            // <StarsCanvas />
          }
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
