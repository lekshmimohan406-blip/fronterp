import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Employee from "./pages/EmployeeList";
import Attendance from "./pages/Attendance";
import Task from "./pages/Task";
import Leave from "./pages/Leave";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="layout">

        {/* Sidebar Navigation */}
        <div className="sidebar">
          <h2 className="logo">ERP System</h2>

          <NavLink to="/" end>Employees</NavLink>
          <NavLink to="/attendance">Attendance</NavLink>
          <NavLink to="/task">Task</NavLink>
          <NavLink to="/leave">Leave</NavLink>
        </div>

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Employee />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/task" element={<Task />} />
            <Route path="/leave" element={<Leave />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;