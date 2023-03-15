import React, { Suspense } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import { Decal, Float, OrbitControls, useTexture } from '@react-three/drei';
import CanvasLoader from './Loader';

type BallProps = {
  imgUrls: string[];
};

const Ball: React.FC<BallProps> = ({ imgUrls }) => {
  const [decal1, decal2, decal3, decal4] = useTexture(imgUrls);

  return (
    <Float speed={3} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0.3, 0]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#dec7e9"
          polygonOffset
          polygonOffsetFactor={-9}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          map={decal1}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={[1, 1, 1]}
          map={decal2}
          flatShading
        />
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 1]}
          map={decal3}
          flatShading
        />
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 1]}
          map={decal4}
          flatShading
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  imgUrls: string[];
  autoRotateSpeed: number;
};

const BallCanvas: React.FC<BallCanvasProps> = ({
  imgUrls,
  autoRotateSpeed,
}) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={autoRotateSpeed}
        />
        <Ball imgUrls={imgUrls} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
