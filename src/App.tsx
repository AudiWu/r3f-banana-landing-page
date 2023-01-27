import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Banana } from "./components/Banana";

const BananaText = () => {
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 45]);
  console.log(height);

  return (
    <>
      <Text
        position={[0, height / 30, -25]}
        fontSize={0.125 * width}
        color="#b37d2d"
      >
        Banana
      </Text>
      <Text
        position={[0, -(height / 12.5), -25]}
        maxWidth={0.75 * width}
        textAlign="center"
        fontSize={0.025 * width}
        color="#ffff40"
      >
        A popular tropical fruit that can be eaten on their own or incorporated
        into cooking.
      </Text>
    </>
  );
};

const App = ({ count = 100, depth = 80 }) => {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={["#ffbf40"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        {Array.from({ length: count }, (_, i) => (
          <Banana key={i} z={(-i / count) * depth - 20} />
        ))}
        <Environment preset="sunset" />
        <EffectComposer>
          <DepthOfField
            target={[0, 0, depth / 2]}
            focalLength={0.5}
            bokehScale={10}
            height={700}
          />
        </EffectComposer>
        <BananaText />
      </Suspense>
    </Canvas>
  );
};

export default App;
