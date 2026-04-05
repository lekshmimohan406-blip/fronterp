import React, { useEffect, useState } from "react";
import axios from "axios";

function Attendance() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/attendance/")
      .then(response => {
        setAttendance(response.data);
      })
      .catch(error => {
        console.error("Error fetching attendance:", error);
      });
  }, []);

  return (
    <div>
      <h2>Attendance List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map(item => (
            <tr key={item.id}>
              <td>{item.employee}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;