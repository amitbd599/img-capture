import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CapturePhoto from "./pages/CapturePhoto";
import CaptureVideo from "./pages/CaptureVideo";
import RecordAudio from "./pages/RecordAudio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/capture-photo" element={<CapturePhoto />} />
        <Route exact path="/capture-video" element={<CaptureVideo />} />
        <Route exact path="/audio-recording" element={<RecordAudio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
