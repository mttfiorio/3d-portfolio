import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Euler, Mesh, Quaternion } from "three";

const Ball = () => {
  // THis ended up being a lot of math and complexity :/

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const sphereRef = useRef<Mesh>(null);
  const zoomSpeed = 1;
  const maxZoom = 4.8;
  const endQuaternion = new Quaternion().setFromEuler(
    new Euler(3.141592653589793, -0.16, 3.141592653589793),
  );
  const endCameraPos = {
    x: -3.1180453458006934,
    y: 2.5737235188716117,
    z: -2.9417240642075715,
  };

  useFrame(({ camera }) => {
    if (sphereRef.current) {
      // Adjust these values as needed to get the desired zoom effect
      const scroll = window.scrollY / window.innerHeight;
      const scale = 1 + scroll * zoomSpeed;

      setIsScrolling(scroll > 0.0001);
      //Control rotation on scroll vs static
      if (isScrolling) {
        // Reset camera in case user moves it around with OrbitControls
        camera.position.lerp(endCameraPos, 0.05);
        camera.lookAt(0, 0, 0);

        // Reset the sphere rotation, which changes as time passes (the else below)
        sphereRef.current.quaternion.slerp(endQuaternion, 0.1);
      } else {
        sphereRef.current.rotateY(0.01);
      }

      //Control zoom on scroll
      if (scale > maxZoom) return;

      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <OrbitControls enableZoom={false} enabled={!isScrolling} />
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ebe322" />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <section
      className="relative w-screen h-[300vh] mx-auto mb-12 lg:mb-48 bg-black"
      id="hero-section"
    >
      <div className="fixed w-screen h-screen">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Ball />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
