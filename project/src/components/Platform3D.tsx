import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

const AnimatedPlatform = () => {
  const groupRef = useRef();
  const springs = useSpring({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const sphereRefs = useRef([...Array(8)].map(() => ({
    position: new THREE.Vector3(),
    initialOffset: Math.random() * Math.PI * 2
  })));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;

    // Update sphere positions
    sphereRefs.current.forEach((sphere, i) => {
      const angle = (i / 8) * Math.PI * 2;
      sphere.position.set(
        Math.cos(angle) * 2,
        Math.sin(time + sphere.initialOffset) * 0.5 + 1,
        Math.sin(angle) * 2
      );
    });
  });

  return (
    <group ref={groupRef}>
      <animated.mesh scale={springs.scale}>
        <Box args={[3, 0.2, 3]}>
          <meshStandardMaterial color="#1d4ed8" />
        </Box>
      </animated.mesh>

      {sphereRefs.current.map((sphere, i) => (
        <mesh key={i} position={sphere.position.toArray()}>
          <Sphere args={[0.2]}>
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#60a5fa"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </mesh>
      ))}

      {/* Connection lines */}
      {sphereRefs.current.map((_, i) => {
        const nextIndex = (i + 1) % 8;
        const startAngle = (i / 8) * Math.PI * 2;
        const endAngle = (nextIndex / 8) * Math.PI * 2;
        
        const vertices = new Float32Array([
          Math.cos(startAngle) * 2, 1, Math.sin(startAngle) * 2,
          Math.cos(endAngle) * 2, 1, Math.sin(endAngle) * 2
        ]);

        return (
          <line key={`line-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={vertices}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#60a5fa" opacity={0.4} transparent />
          </line>
        );
      })}
    </group>
  );
};

const Platform3D = () => {
  return (
    <Canvas camera={{ position: [0, 5, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <AnimatedPlatform />
      <fog attach="fog" args={['#202020', 5, 20]} />
    </Canvas>
  );
};

export default Platform3D;