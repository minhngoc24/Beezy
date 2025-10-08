import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FocusTimer from "./components/FocusTimer";
import Settings from "./components/Settings";
import Report from "./components/Report";
import Welcome from "./components/Welcome";
import Reminder from "./components/Reminder";

function App() {
  return (
    <Router>
      <div style={{ width: 300, height: 400, background: "#FFEB3B" }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/focus" element={<FocusTimer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reminder" element={<Reminder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
