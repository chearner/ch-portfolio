import { Cloud, Preload } from '@react-three/drei';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function CloudFloor(props) {
  const origPos = new THREE.Vector3(0, 0, 0).fromArray(props.position);
  const pos1 = new THREE.Vector3(1, 0, 0);
  const pos2 = new THREE.Vector3(0, 0, 1);

  return (
    <>
      <Float speed={-1} rotationIntensity={-0.1} floatIntensity={0.1}>
        <Cloud
          position={origPos.addVectors(origPos, pos1)}
          scale={[0.2, 0.1, 0.2]}
          speed={1}
          opacity={0.5}
          color={'#39FF14'}
        />
      </Float>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={-0.1}>
        <Cloud
          position={origPos.addVectors(origPos, pos2)}
          scale={[0.2, 0.1, 0.2]}
          speed={-1}
          opacity={0.5}
          color={'#39FF14'}
        />
      </Float>
    </>
  );
}
