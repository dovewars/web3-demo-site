"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDModelProps {
  modelUrl: string;
  onClose: () => void;
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (!mixer || !actions) {
      console.error("Mixer or actions not found");
      return;
    }
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      mixer.update(delta);
      requestAnimationFrame(animate);
    };
    animate();
  }, [mixer]);

  useEffect(() => {
    if (!actions) {
      console.error("Actions not found");
      return;
    }
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.play();
    } else {
      console.error("No actions available to play");
    }
  }, [actions]);

  return <primitive object={scene} ref={group} />;
};

const CameraController: React.FC = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, -0.5, 3);
    camera.lookAt(0, 0, 0); // Adjust the target as needed
  }, [camera]);
  return null;
};

const ThreeDModel: React.FC<ThreeDModelProps> = ({ modelUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-[75%] h-[75%]">
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <Canvas className="bg-black border" camera={{ fov: 75 }}>
          <ambientLight intensity={2.5} />
          <directionalLight intensity={2} position={[5, 5, -5]} />
          <directionalLight intensity={2} position={[5, -5, -5]} />
          <directionalLight intensity={2} position={[-5, -5, -5]} />
          <OrbitControls />
          <CameraController />
          <Model url={modelUrl} />
        </Canvas>
      </div>
    </div>
  );
};
export default ThreeDModel;
