import React, { useState, useEffect } from 'react';
import './MissionProfileDisplay.css';

// ... (other imports and component definition)

function ViewMissionProfiles() {
  const [missionProfiles, setMissionProfiles] = useState([]);

  useEffect(() => {
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/Missions.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const missionProfileData = Object.values(data);
          setMissionProfiles(missionProfileData);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleEdit = (id) => {
    console.log('Edit mission profile with ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete mission profile with ID:', id);
  };

  return (
    <div className='MissionDisplay'>
      <div>
        <h2>View Mission Profiles</h2>
        <ul>
          {missionProfiles.length > 0 ? (
            missionProfiles.map((profile, index) => (
              <li key={index}>
                <h3>Mission Name: {profile.Name}</h3>
                <p>Identifier: {profile.Identifier}</p>
                <p>Start Date: {profile.StartDate}</p>
                <p>End Date: {profile.EndDate}</p>
                <p>Tasks:</p>
                <ul>
                  {profile.Tasks?.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
                <p>Milestones:</p>
                <ul>
                  {profile.Milestones?.map((milestone, milestoneIndex) => (
                    <li key={milestoneIndex}>{milestone}</li>
                  ))}
                </ul>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))
          ) : (
            <p>No mission profiles found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ViewMissionProfiles;

