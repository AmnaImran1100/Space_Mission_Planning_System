import React, { useState, useEffect } from 'react';
import './TaskAssignmentDisplay.css';

function TaskAssignmentList() {
  const [taskAssignments, setTaskAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Your Firebase endpoint for task assignments
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/TaskAssignments.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const taskAssignments = Object.values(data);
          setTaskAssignments(taskAssignments);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='TaskDisplay'>
    <div>
      <h2>Task Assignments</h2>
      {loading ? (
        <p>Loading task assignments...</p>
      ) : (
        <ul>
          {taskAssignments.map((task, index) => (
            <li key={index}>
              <strong>Task Details:</strong> {task.taskDetails}
              <br />
              <strong>Responsible:</strong> {task.responsible}
              <br />
              <strong>Deadline:</strong> {task.deadline}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default TaskAssignmentList;
