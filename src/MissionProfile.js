import React, { useState } from 'react';

function MissionProfileCreation() {
  const [formData, setFormData] = useState({
    identifier: '',
    name: '',
    startDate: '',
    endDate: '',
    task: '',
    milestone: '',
    tasks: [],
    milestones: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTaskChange = () => {
    if (formData.task.trim() === '') return;

    setFormData({
      ...formData,
      tasks: [...formData.tasks, formData.task],
      task: '',
    });
  };

  const handleMilestoneChange = () => {
    if (formData.milestone.trim() === '') return;

    setFormData({
      ...formData,
      milestones: [...formData.milestones, formData.milestone],
      milestone: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const missionProfileData = {
        Identifier: formData.identifier,
        Name: formData.name,
        StartDate: formData.startDate,
        EndDate: formData.endDate,
        Tasks: formData.tasks,
        Milestones: formData.milestones,
      };

      const response = await fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Missions.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missionProfileData),
      });

      if (response.ok) {
        console.log('Mission profile created successfully');
        setFormData({
          identifier: '',
          name: '',
          startDate: '',
          endDate: '',
          task: '',
          milestone: '',
          tasks: [],
          milestones: [],
        });
      } else {
        console.error('Mission profile creation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  return (
    <div>
      <h2>Mission Profile Creation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identifier"
          placeholder="Unique Identifier"
          value={formData.identifier}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Mission Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <div>
          <label>Tasks:</label>
          <input
            type="text"
            placeholder="Add a task"
            value={formData.task}
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
          />
          <button type="button" onClick={handleTaskChange}>Add Task</button>
          <ul>
            {formData.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <label>Milestones:</label>
          <input
            type="text"
            placeholder="Add a milestone"
            value={formData.milestone}
            onChange={(e) => setFormData({ ...formData, milestone: e.target.value })}
          />
          <button type="button" onClick={handleMilestoneChange}>Add Milestone</button>
          <ul>
            {formData.milestones.map((milestone, index) => (
              <li key={index}>{milestone}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Create Mission Profile</button>
      </form>
    </div>
  );
}

export default MissionProfileCreation;
