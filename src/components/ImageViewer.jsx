import React from "react";

function ImageViewer({ imageUrl }) {
    if (!imageUrl) {
        return <p style={{ marginTop: "20px" }}>Click a button to load image...</p>;
    }

    return (
        <div style={{ marginTop: "30px" }}>
            <img
                src={imageUrl}
                alt="Loaded"
                style={{ width: "300px", borderRadius: "10px" }}
            />
        </div>
    );
}

export default ImageViewer;