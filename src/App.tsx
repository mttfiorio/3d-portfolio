import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components/index";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center relative z-0 bg-primary p-4 lg:p-12">
        <Navbar />
        <div className="max-w-[1220px]">
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
      </div>
    </BrowserRouter>
  );
};

export default App;
