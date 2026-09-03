"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function MedallionMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.22;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <mesh ref={ref} castShadow>
        <cylinderGeometry args={[1.25, 1.25, 0.22, 64]} />
        <meshPhysicalMaterial
          color="#C8A96A"
          metalness={0.85}
          roughness={0.28}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          emissive="#4A0E0E"
          emissiveIntensity={0.08}
        />
        {/* inner ring */}
        <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
          {/* torus-like via second cylinder */}
          <torusGeometry args={[0.85, 0.06, 16, 64]} />
          <meshStandardMaterial color="#FFF8E7" metalness={0.6} roughness={0.35} />
        </mesh>
      </mesh>
      {/* subtle point light glow */}
      <pointLight position={[2, 2, 2]} intensity={1.2} color="#E8D5A8" distance={6} />
    </Float>
  );
}

export function MedallionScene() {
  return (
    <div className="h-[320px] sm:h-[420px] w-full">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 1.2, 4.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 2]} intensity={1.4} color="#FFF8E7" />
        <directionalLight position={[-2, 2, -1]} intensity={0.6} color="#C8A96A" />
        <MedallionMesh />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
