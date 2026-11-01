"use client";

import { useMemo, useRef } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiDotnet,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiClaude,
} from "react-icons/si";

type OrbitItem = { name: string; icon: ReactNode; color: string };

// Two rings of technologies, tilted differently so the cloud reads as 3D.
const innerRing: OrbitItem[] = [
  { name: "React", icon: <SiReact />, color: "#0ea5e9" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#111827" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: ".NET", icon: <SiDotnet />, color: "#7c3aed" },
];
const outerRing: OrbitItem[] = [
  { name: "NestJS", icon: <SiNestjs />, color: "#e0234e" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "Claude Code", icon: <SiClaude />, color: "#d97757" },
];

function Chip({ item }: { item: OrbitItem }) {
  return (
    <Html center zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
      <div
        title={item.name}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-xl shadow-lg shadow-indigo-500/20 backdrop-blur"
        style={{ color: item.color }}
      >
        {item.icon}
      </div>
    </Html>
  );
}

function Ring({ items, radius, tilt, speed }: { items: OrbitItem[]; radius: number; tilt: [number, number, number]; speed: number }) {
  const spin = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.y += delta * speed;
  });
  return (
    <group rotation={tilt}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.006, 8, 160]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.45} />
      </mesh>
      <group ref={spin}>
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2;
          return (
            <group key={item.name} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
              <Chip item={item} />
            </group>
          );
        })}
      </group>
    </group>
  );
}

function Core() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.15;
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.2) * 0.03;
    group.current.scale.setScalar(pulse);
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4338ca" emissiveIntensity={0.55} roughness={0.35} metalness={0.2} flatShading transparent opacity={0.92} />
      </mesh>
      <mesh scale={1.04}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#c7d2fe" wireframe transparent opacity={0.8} />
      </mesh>
      <mesh scale={1.5}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function Dust({ count = 140 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    let seed = 7;   // fixed seed: the same dust every render, and no impure call during render
    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      const r = 2.6 + random() * 2.2;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      array[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = r * Math.cos(phi);
    }
    return array;
  }, [count]);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#6366f1" size={0.035} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

/** The whole cloud leans toward the pointer, easing so it never snaps. */
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.5, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.3, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function TechOrbitScene({ still = false }: { still?: boolean }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8.6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      frameloop={still ? "demand" : "always"}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 5]} intensity={40} color="#c4b5fd" />
      <pointLight position={[-5, -3, 3]} intensity={25} color="#38bdf8" />
      <Rig>
        <Core />
        <Ring items={innerRing} radius={2.1} tilt={[0.5, 0, 0.25]} speed={0.35} />
        <Ring items={outerRing} radius={2.9} tilt={[-0.35, 0, -0.4]} speed={-0.22} />
        <Dust />
      </Rig>
    </Canvas>
  );
}
