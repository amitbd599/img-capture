import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const VideoApp = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  let [record, setRecord] = useState(true);

  const handelCheck = (e) => {
    setRecord(e);
  };

  return (
    <section className="camera">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Webcam audio={record} ref={webcamRef} />
            <div>
              <label className="cyberpunk-checkbox-label">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  onChange={(e) => handelCheck(e.target.checked)}
                  className="cyberpunk-checkbox"
                />
                Record with sound?
              </label>

              {capturing ? (
                <button onClick={handleStopCaptureClick}>
                  Stop Video Record
                </button>
              ) : (
                <button onClick={handleStartCaptureClick}>
                  Start Video Record
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div>
              {recordedChunks.length > 0 && (
                <button onClick={handleDownload}>Download Video</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoApp;
