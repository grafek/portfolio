import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei';
import CanvasLoader from './Loader';

type BallProps = {
  imgUrl: string;
};

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#eacef7"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallProps> = ({ imgUrl }) => {
  const is_coarse = matchMedia('(pointer:coarse)').matches;
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {is_coarse ? null : <OrbitControls enableZoom={false} />}
        <Ball imgUrl={imgUrl} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
