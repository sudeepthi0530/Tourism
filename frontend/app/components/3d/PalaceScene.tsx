
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Palace() {
  return (
    <group>
      {/* Main palace structure */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 3, 4]} />
        <meshStandardMaterial color="#C6A16B" />
      </mesh>

      {/* Palace roof */}
      <mesh position={[0, 3.5, 0]} castShadow>
        <coneGeometry args={[4.5, 1.5, 4]} />
        <meshStandardMaterial color="#5B2638" />
      </mesh>

      {/* Front pillars */}
      {[-2, -0.7, 0.7, 2].map((x) => (
        <mesh key={x} position={[x, 1.3, 2.1]} castShadow>
          <cylinderGeometry args={[0.13, 0.13, 2.6, 16]} />
          <meshStandardMaterial color="#7B3546" />
        </mesh>
      ))}

      {/* Entrance */}
      <mesh position={[0, 1, 2.05]}>
        <boxGeometry args={[1.2, 2, 0.1]} />
        <meshStandardMaterial color="#27151F" />
      </mesh>

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#B99A79" />
      </mesh>
    </group>
  );
}

export default function PalaceScene() {
  return (
    <div className="h-[600px] w-full overflow-hidden bg-[#27151F]">
      <Canvas
        camera={{ position: [9, 6, 10], fov: 45 }}
        shadows
      >
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[8, 10, 5]}
          intensity={2}
          castShadow
        />

        <Palace />

        <Environment preset="sunset" />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={7}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}
