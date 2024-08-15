import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navigation";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Tech = lazy(() => import("./components/Tech"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative flex flex-col items-center bg-primary">
        <Hero />
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Experience />
        </Suspense>
        <Suspense>
          <Tech />
        </Suspense>
        <Suspense>
          <Projects />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
