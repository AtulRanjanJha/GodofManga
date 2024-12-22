import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Viewer from "./pages/Viewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/viewer" replace />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;