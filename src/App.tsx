import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Hero,
  LazyAbout,
  LazyContact,
  LazyExperience,
  LazyProjects,
  LazyTech,
  Navbar,
} from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative flex flex-col items-center bg-primary">
        <Hero />
        <LazyAbout />
        <LazyExperience />
        <LazyTech />
        <LazyProjects />
        <LazyContact />
      </div>
    </BrowserRouter>
  );
};

export default App;
