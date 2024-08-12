import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  Tech,
} from "./components/index";

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
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
