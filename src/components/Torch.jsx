import * as THREE from 'three';
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useGLTF } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { EffectComposer, Bloom, GodRays } from '@react-three/postprocessing';

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { ITERATIONS: '10', OCTIVES: '3' },
      uniforms: {
        fireTex: { type: 't', value: null },
        color: { type: 'c', value: null },
        time: { type: 'f', value: 0.0 },
        seed: { type: 'f', value: 0.0 },
        invModelMatrix: { type: 'm4', value: null },
        scale: { type: 'v3', value: new THREE.Vector3(1, 1, 1) },
        noiseScale: { type: 'v4', value: new THREE.Vector4(1, 5, 1, 1.0) },
        magnitude: { type: 'f', value: 2.5 },
        lacunarity: { type: 'f', value: 3.0 },
        gain: { type: 'f', value: 0.6 },
      },
      vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      }`,
      fragmentShader: glsl`
      #pragma glslify: snoise = require(glsl-noise/simplex/3d.glsl) 

      uniform vec3 color;
      uniform float time;
      uniform float seed;
      uniform mat4 invModelMatrix;
      uniform vec3 scale;
      uniform vec4 noiseScale;
      uniform float magnitude;
      uniform float lacunarity;
      uniform float gain;
      uniform sampler2D fireTex;
      varying vec3 vWorldPos;              

      float turbulence(vec3 p) {
        float sum = 0.0;
        float freq = 1.0;
        float amp = 0.3;
        for(int i = 0; i < OCTIVES; i++) {
          sum += abs(snoise(p * freq)) * amp;
          freq *= lacunarity;
          amp *= gain;
        }
        return sum;
      }

      vec4 samplerFire (vec3 p, vec4 scale) {
        vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
        if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
        p.y -= (seed + time) * scale.w;
        p *= scale.xyz;
        st.y += sqrt(st.y) * magnitude * turbulence(p);
        if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
        return texture2D(fireTex, st);
      }

      vec3 localize(vec3 p) {
        return (invModelMatrix * vec4(p, 1.0)).xyz;
      }

      void main() {
        vec3 rayPos = vWorldPos;
        vec3 rayDir = normalize(rayPos - cameraPosition);
        float rayLen = 0.0288 * length(scale.xyz);
        vec4 col = vec4(0.0);
        for(int i = 0; i < ITERATIONS; i++) {
          rayPos += rayDir * rayLen;
          vec3 lp = localize(rayPos);
          lp.y += 0.5;
          lp.xz *= 5.0;
          col += samplerFire(lp, noiseScale);
        }
        col.a = col.g;
        gl_FragColor = col;
      }`,
    });
  }
}

extend({ FireMaterial });

export function Torch(props) {
  const { nodes, materials } = useGLTF('/torch.glb');
  const meshRef = useRef();
  const groupRef = useRef();
  const flickerRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/fire.png');

  useFrame((state, delta) => {
    const invModelMatrix =
      meshRef.current.material.uniforms.invModelMatrix.value;
    meshRef.current.updateMatrixWorld();
    invModelMatrix.copy(meshRef.current.matrixWorld).invert();
    meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    meshRef.current.material.uniforms.invModelMatrix.value = invModelMatrix;
    meshRef.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1);

    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = (props.position[1] + Math.sin(t / 1.5)) / 12;

    //refFlicker.current.intensity = randInt(0.0, 0.2);
    // let time = state.clock.elapsedTime;
    //ref.current.material.uniforms.iTime.value = time;
    //ref.current.rotation = new THREE.Vector3(45, 2, 1);
  });

  useLayoutEffect(() => {
    meshRef.current.material.uniforms.fireTex.value = texture;
    meshRef.current.material.uniforms.color.value = new THREE.Color(0xeeeeee);
    meshRef.current.material.uniforms.invModelMatrix.value =
      new THREE.Matrix4();
    //ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1);
    meshRef.current.material.uniforms.seed.value = Math.random() * 19.19;
  }, []);

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={props.position}
      rotation={[0, 0, 0]}
      scale={props.scale}
    >
      <mesh
        geometry={nodes.Cylinder001__0.geometry}
        material={materials['Cylinder.001__0']}
        scale={0.01}
      />
      <pointLight
        castShadow
        ref={flickerRef}
        color={'white'}
        intensity={2}
        distance={10}
      />
      <mesh ref={meshRef} {...props} scale={3} position={[0, 5.2, 0]}>
        <cylinderGeometry args={[0.05, 0.2, 2]} />
        <fireMaterial transparent depthWrite={false} depthTest={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/torch.glb');

export default Torch;
