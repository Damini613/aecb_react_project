import Login from "./components/Login";
import "./styles.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { history } from "./history";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
