import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh, Quaternion } from "three";

const Sphere = () => {
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

const SphereCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Sphere />
    </Canvas>
  );
};

export default SphereCanvas;
