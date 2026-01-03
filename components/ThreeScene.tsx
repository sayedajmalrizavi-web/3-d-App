
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.cos(time / 2);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.5}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
