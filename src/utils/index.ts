import { Variants } from "framer-motion";

export const fadeIn = (delay: number): Variants => ({
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "just", delay, duration: 0.5, ease: "easeOut" },
  },
});
