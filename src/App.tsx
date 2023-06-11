import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { BananaModel } from "./components/BananaModel/Banana";
import { BananaText } from "./components/BananaText/BananaText";
import { Loading } from "./components/Loading/Loading";

const App = ({ count = 100, depth = 80 }) => {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={["#ffbf40"]} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<Loading />}>
        {Array.from({ length: count }, (_, i) => (
          <BananaModel key={i} z={(-i / count) * depth - 20} />
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
