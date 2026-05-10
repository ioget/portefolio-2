
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../ThemeContext';

function ParticleField({ color }: { color: string }) {
  const ref = useRef<any>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points positions={positions} ref={ref}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CyberCore({ shellColor, meshColor }: { shellColor: string; meshColor: string }) {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + (window.scrollY * 0.001);
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + (window.scrollY * 0.001);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={meshColor}
          speed={3}
          distort={0.4}
          radius={1}
          wireframe
        />
      </mesh>
      <mesh scale={1.2}>
        <octahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={shellColor} wireframe opacity={0.1} transparent />
      </mesh>
    </Float>
  );
}

export const Scene = () => {
  const { resolved } = useTheme();
  const isLight = resolved === 'light';

  const fogColor = isLight ? '#f3f4f6' : '#000';
  const particleColor = isLight ? '#16a34a' : '#22d3ee';
  const coreMesh = isLight ? '#15803d' : '#0ea5e9';
  const shellColor = isLight ? '#16a34a' : '#22d3ee';
  const pointLightColor = isLight ? '#16a34a' : '#22d3ee';
  const sectionColor = isLight ? '#22c55e' : '#0ea5e9';
  const cellColor = isLight ? '#bbf7d0' : '#082f49';
  const planeColor = isLight ? '#f3f4f6' : '#000';

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <fog attach="fog" args={[fogColor, 5, 15]} />
        <ambientLight intensity={isLight ? 0.65 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={pointLightColor} />

        <CyberCore meshColor={coreMesh} shellColor={shellColor} />
        <ParticleField color={particleColor} />

        <Grid
          infiniteGrid
          fadeDistance={20}
          fadeStrength={5}
          cellSize={1}
          sectionSize={5}
          sectionColor={sectionColor}
          cellColor={cellColor}
          position={[0, -2, 0]}
        />

        <group position={[0, -1.8, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial
              color={planeColor}
              metalness={isLight ? 0.35 : 1}
              roughness={isLight ? 0.45 : 0.1}
            />
          </mesh>
        </group>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
    </div>
  );
};
