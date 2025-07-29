import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import './index.css';

function App() {
  return (
    <Router>
      <nav>
        <h2>Spending Tracker</h2>
        <div>
          <Link to="/">Journal</Link>
          <Link to="/dashboard">Analytics Dashboard</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Journal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
