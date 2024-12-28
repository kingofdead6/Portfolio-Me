import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const GlobeModel = () => {
  const { scene } = useGLTF("/models/globe.glb");
  scene.scale.set(5, 5, 5);
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#07114484"); 
    }
  });
  return <primitive object={scene} />;
};

const Globe = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <GlobeModel />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Globe;
