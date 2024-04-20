import React, { useState } from "react";

const RecordApp = () => {
  const [audioRecorder, setAudioRecorder] = useState(null);
  const [audioRecording, setAudioRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioRecording(blob);
      };

      recorder.start();
      setAudioRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (audioRecorder) {
      audioRecorder.stop();
      setIsRecording(false);
    }
  };

  const saveRecording = () => {
    if (audioRecording) {
      const downloadLink = document.createElement("a");
      const url = URL.createObjectURL(audioRecording);
      downloadLink.href = url;
      downloadLink.download = "audio_recording.wav";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  return (
    <section className="record">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="loader-audio">
                {isRecording && (
                  <>
                    <div />
                    <div />
                    <div />
                    <div />
                  </>
                )}
              </div>
            </div>
            <div className="btn-inner">
              {isRecording ? (
                <button onClick={stopRecording}>Stop Recording</button>
              ) : (
                <button onClick={startRecording}>Start Recording</button>
              )}
              {audioRecording && !isRecording && (
                <button onClick={saveRecording}>Save Recording</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordApp;
