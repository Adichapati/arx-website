"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const count = 800;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Cyan to violet gradient
      const t = Math.random();
      colors[i3] = t * 0.49; // R: 0 -> 0.49
      colors[i3 + 1] = (1 - t) * 0.9; // G: 0.9 -> 0
      colors[i3 + 2] = 1.0; // B: 1.0
    }

    return [positions, colors];
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    // Gentle rotation following mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouseRef.current.y * 0.1,
      0.02
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouseRef.current.x * 0.1,
      0.02
    );

    // Slow base rotation
    meshRef.current.rotation.z = time * 0.02;

    // Animate positions subtly
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time * 0.3 + i * 0.01) * 0.002;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.position.y = Math.sin(time * 0.4) * 0.5;
    meshRef.current.position.x = Math.cos(time * 0.3) * 0.5;
    const scale = 1 + Math.sin(time * 0.6) * 0.1;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#00e5ff" transparent opacity={0.03} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ParticleField />
      <GlowOrb />
      <ambientLight intensity={0.1} />
    </>
  );
}

export function ThreeBackground() {
  const [canRender, setCanRender] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setHasError(true);
      return;
    }

    // Try to create WebGL context to check support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setHasError(true);
        return;
      }
    } catch {
      setHasError(true);
      return;
    }

    setCanRender(true);
  }, []);

  if (hasError || !canRender) {
    // Fallback: static gradient background
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-arx-bg via-arx-bg-elevated to-arx-bg" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-arx-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-arx-violet/5 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      {/* Overlay gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-arx-bg/30 via-transparent to-arx-bg" />
    </div>
  );
}
