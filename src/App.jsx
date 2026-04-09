// ✅ Add your backend URL here
const API_URL = "https://demo-backend-n4p4.onrender.com";

import React, { useState } from "react";
import ButtonGrid from "./components/ButtonGrid";
import ImageViewer from "./components/ImageViewer";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageSelect = (number) => {
    // combine backend URL with your image route
    setImageUrl(`${API_URL}/image/${number}`);
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