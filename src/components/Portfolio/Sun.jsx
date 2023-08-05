import { forwardRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';

export default function Sun(props) {
  //const repeatX = 10;
  //const repeatY = 10;
  //console.log(forwardRef)
  //const base = useLoader(THREE.TextureLoader, '/emissive.png');
  //base.wrapS = THREE.RepeatWrapping;
  //base.wrapT = THREE.RepeatWrapping;
  //base.repeat.set(repeatX, repeatY);

  return (
    <mesh position={[-6, -1, 25]}>
      <sphereGeometry attach="geometry" args={[4, 16, 16]} />
      <meshBasicMaterial
        attach="material"
        color={'orange'}
        roughness={0.9}
        metalness={0.2}
      />
    </mesh>
  );
};