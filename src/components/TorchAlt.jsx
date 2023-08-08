import * as THREE from 'three';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import {
  extend,
  useFrame,
  useUpdate,
  useLoader,
  getVertices,
} from '@react-three/fiber';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

class FireMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      defines: { TIMESCALE: '0.25', TILES: '8', COLOR: '0.1, 1.0, 0.1' },
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(1, 1, 1) },
        iPi: { value: 0.0 },
        iChannel1: { value: null },
        
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
      fragmentShader: glsl`
      
      uniform vec3 iResolution;
      uniform float iTime;
      uniform float iPi;
      uniform sampler2D iChannel1;

      //////

      // procedural noise from IQ
      vec2 hash( vec2 p )
      {
        p = vec2( dot(p,vec2(127.1,311.7)),
             dot(p,vec2(269.5,183.3)) );
        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
      }
      
      float noise( in vec2 p )
      {
        const float K1 = 0.366025404; // (sqrt(3)-1)/2;
        const float K2 = 0.211324865; // (3-sqrt(3))/6;
        
        vec2 i = floor( p + (p.x+p.y)*K1 );
        
        vec2 a = p - i + (i.x+i.y)*K2;
        vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
        vec2 b = a - o + K2;
        vec2 c = a - 1.0 + 2.0*K2;
        
        vec3 h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
        
        vec3 n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
        
        return dot( n, vec3(70.0) );
      }
      
      float fbm(vec2 uv)
      {
        float f;
        mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );
        f  = 0.5000*noise( uv ); uv = m*uv;
        f += 0.2500*noise( uv ); uv = m*uv;
        f += 0.1250*noise( uv ); uv = m*uv;
        f += 0.0625*noise( uv ); uv = m*uv;
        f = 0.5 + 0.5*f;
        return f;
      }
      
      // no defines, standard redish flames
      //#define BLUE_FLAME
      //#define GREEN_FLAME
      
      void mainImage( out vec4 fragColor, in vec2 fragCoord )
      {
        vec2 uv = fragCoord.xy / iResolution.xy;
        vec2 q = uv;
        q.x *= 1.;
        q.y *= 1.;
        float strength = floor(q.x+1.);
        float T3 = max(3.,1.25*strength)*iTime;
        q.x = mod(q.x,1.)-0.5;
        q.y -= 0.25;
        float n = fbm(strength*q - vec2(0,T3));
        float c = 1. - 16. * pow( max( 0., length(q*vec2(1.8+q.y*1.5,.75) ) - n * max( 0., q.y+.25 ) ),1.2 );
      //	float c1 = n * c * (1.5-pow(1.25*uv.y,4.));
        float c1 = n * c * (1.5-pow(uv.y,4.));
        c1=clamp(c1,0.,1.);
      
        vec3 col = vec3(1.5*c1, 1.5*c1*c1*c1, c1*c1*c1*c1*c1*c1);
        
      #ifdef BLUE_FLAME
        col = col.zyx;
      #endif
      #ifdef GREEN_FLAME
        col = 0.85*col.yxz;
      #endif

      float a = c * (1.-pow(uv.y,3.));
      fragColor = vec4( mix(vec3(0.),col,a), .9);

      vec3 keying_color = vec3(0.0, 0.0, 0.0);
      float thresh = 0.45; // [0, 1.732]
      float slope = 0.1; // [0, 1]
      float d = abs(length(abs(keying_color.rgb - col.rgb)));
      float edge0 = thresh * (1.0 - slope);
      float alpha = smoothstep(edge0, thresh, d);
      fragColor = vec4(col,alpha);

      }
      
      //////

      varying vec2 vUv;
    
      void main() {
        mainImage(gl_FragColor, vUv * iResolution.xy);
      }`,
    });
  }
}

/*
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
        scale: { type: 'v3', value: null },
        noiseScale: { type: 'v4', value: new THREE.Vector4(.5, 1, 2, 1.5) },
        magnitude: { type: 'f', value: 1.5 },
        lacunarity: { type: 'f', value: 2.0 },
        gain: { type: 'f', value: 0.5 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
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
          float amp = 1.0;
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
            lp.xz *= 2.0;
            col += samplerFire(lp, noiseScale);
          }
          col.a = col.r;
          gl_FragColor = col;
        }`,
    });
  }
}
*/

extend({ FireMaterial });

export function Torch(props) {
  const { nodes, materials } = useGLTF('/torch.glb');
  const meshRef = useRef();
  //const control = useRef();
  //const texture = useLoader(THREE.TextureLoader, '/fire.png');
  const [active, setActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const rotation = spring.to([0, 1], [0, Math.PI]);
  //const scale = spring.to([0, 1], [1, 5]);

  const texture = useLoader(THREE.TextureLoader, '/noise.png');

  useFrame(state => {
    //const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value;
    //ref.current.updateMatrixWorld();
    //invModelMatrix.copy(ref.current.matrixWorld).invert();

    //console.log(control)
    //console.log(ref)
    let time = state.clock.elapsedTime;
    meshRef.current.material.uniforms.iTime.value = time;

    //const speed = 1 * .1;
    //const rot = time * speed;
    //console.log(time);
    //ref.current.rotation = new THREE.Vector3(45, 2, 1);
    //ref.current.material.uniforms.time.value = state.clock.elapsedTime;
    //ref.current.material.uniforms.invModelMatrix.value = invModelMatrix;
    //ref.current.material.uniforms.scale.value = ref.current.scale;
  });

  useLayoutEffect(() => {
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

   // ref.current.material.uniforms.iResolution.value = new THREE.Vector3(1,1,1);
   meshRef.current.material.uniforms.iChannel1.value = texture;

   // ref.current.material.uniforms.iPi.value = Math.PI;
   

    //ref.current.material.uniforms.fireTex.value = texture;
    //ref.current.material.uniforms.color.value = new THREE.Color('red');
    //ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4();
    //ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1);
    //ref.current.material.uniforms.seed.value = Math.random() * 99.19;
  }, []);

  return (
    <group {...props} dispose={null}>
      {/*
        <mesh
          position={[0, -5, 0]}
          geometry={nodes.Cylinder001__0.geometry}
          material={materials['Cylinder.001__0']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
  */}
      <a.mesh ref={meshRef} position={[0, -5, 5]} rotation-y={rotation}>
        <boxGeometry name="box" args={[5, 5, 5]} />
        <fireMaterial transparent />
      </a.mesh>
    </group>
  );
}

useGLTF.preload('/torch.glb');

export default Torch;
