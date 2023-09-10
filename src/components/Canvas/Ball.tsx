import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "./Loader";
import type {
  BufferGeometry,
  Mesh,
  MeshStandardMaterial,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

type BallProps = {
  imgUrls: string[];
};

type MeshStandardMaterialType = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  MeshStandardMaterial,
  Object3DEventMap
>;

const Ball: React.FC<BallProps> = ({ imgUrls }) => {
  const [decal1, decal2, decal3, decal4] = useTexture(imgUrls);
  const meshRef = useRef<MeshStandardMaterialType | null>(null);

  const randomNum = 0.2 + Math.random() * 0.2;

  useFrame(({ clock }) => {
    const emissiveIntensity = Math.abs(
      Math.sin(clock.getElapsedTime() * randomNum),
    );

    if (meshRef.current)
      meshRef.current.material.emissiveIntensity = emissiveIntensity;
  });

  return (
    <Float speed={3} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 1, 0]} />
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef}>
        <sphereGeometry />
        <meshStandardMaterial
          attach="material"
          color="#a1b5ec"
          emissive="#737abb"
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          map={decal1}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={[1, 1, 1]}
          map={decal2}
        />
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 1]}
          map={decal3}
        />
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 1]}
          map={decal4}
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
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.25}
        />
        <Ball imgUrls={imgUrls} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
