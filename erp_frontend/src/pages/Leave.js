import React, { useEffect, useState } from "react";
import axios from "axios";

function Leave() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Replace with Lekshmi Mohan's employee ID from your backend
  const EMPLOYEE_ID = 1;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leaves/")
      .then((response) => {
        // Filter only Pending leaves for Lekshmi Mohan
        const filteredLeaves = response.data.filter(
          (leave) => leave.status === "Pending" && leave.employee === EMPLOYEE_ID
        );

        // Remove duplicate leave types
        const uniqueLeaves = [...new Set(filteredLeaves.map((leave) => leave.leave_type))];

        setLeaves(uniqueLeaves);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        if (err.response) {
          setError("Server Error: " + err.response.status);
        } else if (err.request) {
          setError("Cannot connect to backend server.");
        } else {
          setError("Unexpected Error occurred.");
        }
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2>Leave List</h2>
      {leaves.length === 0 ? (
        <p>No leave records found.</p>
      ) : (
        leaves.map((leaveType, index) => <p key={index}>{leaveType}</p>)
      )}
      <p><strong>Status:</strong> Pending</p>
      <p><strong>Employee:</strong> Lekshmi Mohan</p>
    </div>
  );
}

export default Leave;