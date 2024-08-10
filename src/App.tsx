import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
} from "./components/index";
import Projects from "./components/Projects";
import Tech from "./components/About/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative flex flex-col items-center bg-primary">
        <Hero />
        <About />
        <Experience />
        <Tech />
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
