import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh, Quaternion } from "three";
import { motion } from "framer-motion";

const Ball = () => {
  // THis ended up being a lot of math and complexity :/

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const sphereRef = useRef<Mesh>(null);
  const zoomSpeed = 1.5;
  const maxZoom = 4.8;
  const endQuaternion = new Quaternion().setFromEuler(new Euler(0, -0.8, 0));

  useFrame(({ camera }) => {
    if (sphereRef.current) {
      // Adjust these values as needed to get the desired zoom effect
      const scroll = window.scrollY / window.innerHeight;
      const scale = 1 + scroll * zoomSpeed;

      setIsScrolling(scroll > 0.0001);
      //Control rotation on scroll vs static
      if (isScrolling) {
        // Reset the sphere rotation, which changes as time passes (the else below)
        sphereRef.current.quaternion.slerp(endQuaternion, 0.1);
      } else {
        sphereRef.current.rotateY(0.005);
      }

      //Control zoom on scroll
      if (scale > maxZoom) return;

      camera.zoom = scale;
      camera.updateProjectionMatrix();
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#fcf400" />
      <spotLight
        position={[5, 5, 5]}
        angle={0.2}
        penumbra={1}
        intensity={0.5}
        color={"#fcf400"}
      />
    </mesh>
  );
};

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const dissolvenceScrollBreakpoint = 0.6;

  useEffect(() => {
    const heroSectionElement = document.getElementById("hero-section");

    const handleScroll = () => {
      const scrollRatio =
        window.scrollY / (heroSectionElement?.offsetHeight || 1);

      let newOpacity = 1;
      if (scrollRatio >= dissolvenceScrollBreakpoint) {
        newOpacity = 1 - (scrollRatio - dissolvenceScrollBreakpoint) * 5;
      }

      // Only update state if opacity has changed
      if (newOpacity !== opacity) {
        setOpacity(Math.max(newOpacity, 0));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacity]);

  return (
    <motion.section
      className="relative w-screen h-[400vh] mx-auto mb-12 lg:mb-48 bg-black"
      id="hero-section"
      style={{ opacity }}
    >
      <div className="sticky top-0 w-screen h-screen">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Ball />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
