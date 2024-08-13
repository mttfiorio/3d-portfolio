import Hero from "./Hero";
import Navbar from "./Navigation";
import CanvasLoader from "./Loader";
import { lazy } from "react";

const LazyAbout = lazy(() => import("./About"));

const LazyExperience = lazy(() => import("./Experience"));

const LazyProjects = lazy(() => import("./Projects"));

const LazyContact = lazy(() => import("./Contact"));

const LazyTech = lazy(() => import("./Tech"));

export {
  Hero,
  Navbar,
  CanvasLoader,
  LazyAbout,
  LazyExperience,
  LazyProjects,
  LazyContact,
  LazyTech,
};
