import { Html } from "@react-three/drei";
import "./Loading.css";

export const Loading = () => {
  return (
    <Html fullscreen>
      <div className="loader-container">
        <div className="spinner" />
      </div>
    </Html>
  );
};
