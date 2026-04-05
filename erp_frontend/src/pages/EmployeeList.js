import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/employees/")
      .then(response => {
        setEmployees(response.data);
      });
  }, []);

  return (
  <div>
    <h2>Employee List</h2>

  

    {employees.map(emp => (
      <p key={emp.id}>
        {emp.name} - {emp.department}
      </p>
    ))}
  </div>
);
}

export default EmployeeList;