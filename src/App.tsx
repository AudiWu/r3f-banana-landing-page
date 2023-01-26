import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Banana } from "./components/Banana";
import "./App.css"

const App = ({ count = 100, depth = 80 }) => {
  return (
    <>
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
              bokehScale={11}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
