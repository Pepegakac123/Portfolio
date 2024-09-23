import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          marginTop: 40,
          fontWeight: 800,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
      CanvasLoader
    </Html>
  );
};
export default CanvasLoader;