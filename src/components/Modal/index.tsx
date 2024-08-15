import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalContext } from "./ModalContext";

const Modal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal must be used within a ModalProvider");
  }

  const { isModalOpen, setIsModalOpen } = context;

  console.log(isModalOpen);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          exit={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "just", duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-20 
          bg-dark/90 text-light overflow-hidden"
        >
          <h2>aaa</h2>
          <p>bbb</p>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
