import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraApp = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const saveImage = () => {
    if (!capturedImage) return;

    const downloadLink = document.createElement("a");
    downloadLink.href = capturedImage;
    downloadLink.download = "captured_image.jpg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Webcam
        audio={false}
        screenshotQuality={1}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture Photo</button>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button onClick={saveImage}>Save Photo</button>
        </div>
      )}
    </div>
  );
};

export default CameraApp;
