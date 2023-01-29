import { Html } from "@react-three/drei";
import "./BananaText.css";

export const BananaText = () => {
  return (
    <Html fullscreen>
      <div className="container">
        <h1 className="title">Banana</h1>
        <h2 className="subtitle">
          A popular tropical fruit that can be eaten on their own or
          incorporated into cooking.
        </h2>
      </div>
    </Html>
  );
};
