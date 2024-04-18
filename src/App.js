import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CapturePhoto from "./pages/CapturePhoto";
import CaptureVideo from "./pages/CaptureVideo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/capture-photo" element={<CapturePhoto />} />
        <Route exact path="/capture-video" element={<CaptureVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
