import {
  useState,
  Suspense,
  useRef,
  forwardRef,
  useEffect,
  useContext,
  createContext,
} from 'react';
import * as THREE from 'three';
import {
  Canvas,
  extend,
  useLoader,
  useFrame,
  useThree,
} from '@react-three/fiber';
import {
  Sky,
  useGLTF,
  Clone,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  PerspectiveCamera,
  useHelper,
  CameraControls,
  Cloud,
  Effects,
} from '@react-three/drei';
import { EffectComposer, Bloom, GodRays } from '@react-three/postprocessing';
import { BlendFunction, Resizer, KernelSize } from 'postprocessing';
import { Box, Text, HStack, Flex } from '@chakra-ui/react';
import { Office } from './Office';
import { Physics, RigidBody } from '@react-three/rapier';
import Fog from './Fog';
import Sun from './Sun';
import Cam from './Cam';
import CloudFloor from './CloudFloor';
import { UnrealBloomPass } from 'three-stdlib';

extend({ UnrealBloomPass });

export const CameraContext = createContext(null);

export const Portfolio = () => {
  const state = useContext(CameraContext);
  const sunRef = useRef();
  //const { setLerping } = useStore((state) => state);
  //const { debug } = useControls({ debug: false });

  const [cameraState, setCameraState] = useState({
    to: new THREE.Vector3(2, 0, 0),
    target: new THREE.Vector3(-5, -2, 5),
    lerping: false,
    setLerping: function (value) {
      console.log(value);
      this.lerping = value;
    },
  });

  return (
    <CameraContext.Provider value={cameraState}>
      <Box w='100%' h='500'>
        <Canvas
          shadows
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color('#000000'));
          }}
          onPointerDown={() => {
            //store.setLerping(true);
            //console.log(store.lerping);
          }}
        >
          <Suspense fallback={null}>
            <CloudFloor position={[-11, -4, -7]} />
            {/*
            <Fog
              attach="fog"
              color={'#39FF14'}
              scale={[15, 2, 15]}
              position={[0, 7, 0]}
              speed={0.2}
              distortion={2}
              density={1}
            />
            */}
            {/*<Physics updateLoop="independent" debug gravity={[0, -5, 0]}>*/}
            <Office position={[-40, -5, -20]} scale='2' />
            <Cam />
            <spotLight
              castShadow
              position={[0, 1, 0]}
              color='red'
              intensity='0.5'
            />
            {/*</Physics>*/}
            <Effects disableGamma>
              <unrealBloomPass
                threshold='0.3'
                strength='1.0'
                radius='0.5'
                ignoreBackground
              />
            </Effects>

            {/*
               <Sun />
                <EffectComposer>
               <Bloom
                luminanceThreshold={.8}
                mipmapBlur
                luminanceSmoothing={0.0}
                intensity={8}
              />
              {sunRef.current && (
                <GodRays
                  sun={sunRef.current}
                  blendFunction={BlendFunction.Screen}
                  samples={20}
                  density={0.97}
                  decay={0.96}
                  weight={0.6}
                  exposure={0.2}
                  clampMax={1}
                  width={Resizer.AUTO_SIZE}
                  height={Resizer.AUTO_SIZE}
                  kernelSize={KernelSize.SMALL}
                  blur={true}
                />
              </EffectComposer>
              )}*/}
          </Suspense>
        </Canvas>
      </Box>
      <Box
        position='absolute'
        zIndex='99'
        ml='150'
        mt='50'
        pointerEvents='none'
      >
        <Flex justifyContent='center'>
          <Flex
            position='relative'
            alignSelf='flex-start'
            alignItems='flex-start'
            justifyContent='flex-start'
            fontFamily="FedoraRegular"
            fontSize="150"
            letterSpacing="-.03em"
            background="linear-gradient(to bottom, #e83526 0%, #e83526 20%, #ffd940 45%, #ffffff 60%)"
            backgroundClip="text"
            filter="drop-shadow(-10px 10px rgba(0,0,0,.50))"
            transform="perspective(7vmin) rotateY(4deg) skewY(2deg) translateX(-100px)"
            transformOrigin="top left"
            pr="10"
          >
            Christopher
          </Flex>
          <Flex
            alignSelf='stretch'
            alignItems='stretch'
            fontFamily="FedoraRegular"
            fontSize="110"
            letterSpacing="-.03em"
            background="linear-gradient(to bottom, #e83526 0%, #e83526 20%, #ffd940 45%, #ffffff 60%)"
            backgroundClip="text"
            filter="drop-shadow(-10px 10px rgba(0,0,0,.50))"
            transform="perspective(6vmin) rotateY(4deg) skewY(2deg) translateX(110px)"
            transformOrigin="top left"
            position="absolute"
            pr="10"
          >
            Hearn
          </Flex>
        </Flex>
        <Box
          fontFamily='FedoraTitlesItalic'
          fontSize='24'
          color='#ffd940'
          textShadow={
            '-1px -1px 0 rgba(0,0,0,.50), 1px -1px 0 rgba(0,0,0,.50), -1px 1px 0 rgba(0,0,0,.50), 1px 1px 0 rgba(0,0,0,.50)'
          }
        >
          and the
        </Box>
        <Box
          fontFamily='FedoraTitlesItalic'
          fontSize='36'
          color='#ffd940'
          textShadow={
            '-2px -2px 0 rgba(0,0,0,.50), 2px -2px 0 rgba(0,0,0,.50), -2px 2px 0 rgba(0,0,0,.50), 2px 2px 0 rgba(0,0,0,.50)'
          }
        >
          JOB SEARCH
        </Box>
        <Box
          fontFamily='FedoraTitlesItalic'
          fontSize='24'
          color='#ffd940'
          textShadow={
            '-1px -1px 0 rgba(0,0,0,.50), 1px -1px 0 rgba(0,0,0,.50), -1px 1px 0 rgba(0,0,0,.50), 1px 1px 0 rgba(0,0,0,.50)'
          }
        >
          of the
        </Box>
        <Box
          fontFamily='FedoraTitlesItalic'
          fontSize='36'
          color='#ffd940'
          textShadow={
            '-2px -2px 0 rgba(0,0,0,.50), 2px -2px 0 rgba(0,0,0,.50), -2px 2px 0 rgba(0,0,0,.50), 2px 2px 0 rgba(0,0,0,.50)'
          }
        >
          FRONT-END DEVELOPER
        </Box>
      </Box>
    </CameraContext.Provider>
  );
};

export default Portfolio;
