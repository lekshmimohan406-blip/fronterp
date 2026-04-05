import axios from "axios";
import { useEffect, useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/task/")
      .then(response => {
        setTasks(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Task List</h2>

      {tasks.map(task => (
  <div key={task.id}>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Status: {task.status}</p>
    <p>Employee: {task.employee_name}</p>
  </div>
))}
    </div>
  );
}

export default Task;