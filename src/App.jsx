import React, { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import ImageViewer from "./components/ImageViewer";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageSelect = (number) => {
    setImageUrl(`http://localhost:5000/image/${number}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Image Viewer</h1>

      <ButtonGrid onButtonClick={handleImageSelect} />

      <ImageViewer imageUrl={imageUrl} />
    </div>
  );
}

export default App;