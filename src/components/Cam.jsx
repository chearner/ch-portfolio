import { forwardRef, useEffect, useContext, useRef } from 'react';
import { CameraContext } from './Portfolio';
import * as THREE from 'three';
import { useFrame, useLoader, extend } from '@react-three/fiber';
import { EffectComposer, Bloom, GodRays } from '@react-three/postprocessing';
import { Torch } from './Torch';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';

export default function Cam(props) {
  const orbitControlRef = useRef();
  const context = useContext(CameraContext);

  useFrame((state, delta) => {
    if (context.lerping) {
      //console.log(ref.current)
      //state.camera.position.lerp(context.to, delta);
      // ref.current.target.lerp(context.target, delta);
      //context.setLerping(false)
    }
  });

  const deg2rad = degrees => degrees * (Math.PI / 180);

  return (
    <>
      <PerspectiveCamera
        makeDefault={true}
        far={50.0}
        near={0.1}
        fov={60}
        position={[-7, -2, -8]}
        rotation={[0, 0, Math.PI / 3]}
        scale={1}
      >
        <Float speed={1} rotationIntensity={.5} floatIntensity={.1}>
          <Torch
            position={[1, -12, -1.5]}
            scale={0.28}
            onClick={o => context.setLerping(true)}
          />
        </Float>
      </PerspectiveCamera>
      <OrbitControls
        ref={orbitControlRef}
        target={[-12, -2, -7]}
        enableDamping={true}
        enablePan={true}
        enableRotate={true}
        enableZoom={true}
      />
    </>
  );
}

//minAzimuthAngle={-Math.PI / 3}
//       maxAzimuthAngle={Math.PI / 3}
//       minPolarAngle={Math.PI / 3}
//       maxPolarAngle={Math.PI - Math.PI / 2}
