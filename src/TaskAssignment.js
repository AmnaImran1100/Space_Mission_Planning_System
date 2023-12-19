import React, { useState } from 'react';
import './TaskAsses.css';
import './TaskAssignment.css';

function TaskAssignment() {
  const [formData, setFormData] = useState({
    taskDetails: '',
    responsible: '', // This could be an astronaut's name or a team name
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { taskDetails, responsible, deadline } = formData;

    // Ensure that all required fields are filled
    if (!taskDetails || !responsible || !deadline) {
      alert('Please fill in all fields.');
      return;
    }

    // Your Firebase endpoint for task assignments
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/TaskAssignments.json';

    try {
      // Send a POST request to your Firebase endpoint to store the task assignment data
      const response = await fetch(firebaseEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskDetails,
          responsible,
          deadline,
        }),
      });

      if (response.ok) {
        // Handle successful assignment (e.g., show a success message)
        console.log('Task assigned successfully');
      } else {
        // Handle assignment error
        console.error('Task assignment failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='TaskAssignment'>
    <div>
      <h2>Task Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskDetails"
          placeholder="Task Details"
          value={formData.taskDetails}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="responsible"
          placeholder="Responsible Astronaut or Team"
          value={formData.responsible}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="deadline"
          placeholder="Deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Assign Task</button>
      </form>
    </div>
    </div>
  );
}

export default TaskAssignment;
