import React, { Suspense, useRef } from "react";
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
import { useInView } from "framer-motion";

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true });
  const experienceInView = useInView(experienceRef, { once: true });
  const techInView = useInView(techRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const Loader = () => {
    return <div className="w-full h-[500px]">Loading...</div>;
  };

  console.log(experienceInView);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative flex flex-col items-center bg-primary">
        <Hero />
        <div ref={aboutRef} className="w-full">
          {aboutInView && (
            <Suspense fallback={<Loader />}>
              <LazyAbout />
            </Suspense>
          )}
        </div>
        <div ref={experienceRef} className="w-full">
          {experienceInView && (
            <Suspense fallback={<Loader />}>
              <LazyExperience />
            </Suspense>
          )}
        </div>
        <div ref={techRef} className="w-full">
          {techInView && (
            <Suspense fallback={<Loader />}>
              <LazyTech />
            </Suspense>
          )}
        </div>
        <div ref={projectsRef} className="w-full">
          {projectsInView && (
            <Suspense fallback={<Loader />}>
              <LazyProjects />
            </Suspense>
          )}
        </div>
        <div ref={contactRef} className="w-full">
          {contactInView && (
            <Suspense fallback={<Loader />}>
              <LazyContact />
            </Suspense>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
