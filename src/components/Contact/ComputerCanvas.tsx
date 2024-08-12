import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Group } from "three";

type ComputerProps = {
  isMobile: boolean;
};

const Computer = ({ isMobile }: ComputerProps) => {
  const groupRef = useRef<Group>(null);

  const texture = useTexture("mattiaWink.png");
  const computer = useGLTF("./retro_computer/scene.gltf");
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group scale={0.9} ref={groupRef}>
      <mesh
        position={[0.725, 0, 0.725]}
        scale={3.3}
        rotation={[0, 50 * (Math.PI / 180), 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <mesh>
        <primitive
          object={computer.scene}
          scale={8}
          position={[0, -3, 0]}
          rotation={[0, 140 * (Math.PI / 180), 0]}
        />
      </mesh>
    </group>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <spotLight
          position={[5, 5, 5]}
          penumbra={1}
          intensity={0.5}
          angle={0.3}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
