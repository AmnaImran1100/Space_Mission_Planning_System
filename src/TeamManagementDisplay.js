import React, { useState, useEffect } from 'react';
import './TeamManagementDisplay.css';

function ViewTeams() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    // Your Firebase endpoint for teams
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/Teams.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const teamData = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name,
            leader: data[key].leader,
            astronaut: data[key].astronaut,
          }));
          setTeamList(teamData);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='TeamDisplay'>
    <div>
      <h2>View Teams</h2>
      <ul>
        {teamList.map((team) => (
          <li key={team.id}>
            Team Name: {team.name}
            <p>Leader: {team.leader}</p>
            <p>Astronaut: {team.astronaut}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default ViewTeams;
