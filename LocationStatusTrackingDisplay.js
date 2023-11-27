import React, { useState, useEffect } from 'react';

function MissionList1() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Your Firebase endpoint for mission data
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/LocationAndTracking.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const missionData = Object.values(data);
          setMissions(missionData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Mission List</h2>
      {loading ? (
        <p>Loading mission data...</p>
      ) : (
        <ul>
          {missions.map((mission, index) => (
            <li key={index}>
              <strong>Mission Name:</strong> {mission.missionName}
              <br />
              <strong>Calculated Distance:</strong> {mission.calculatedDistance} kilometers
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MissionList1;
