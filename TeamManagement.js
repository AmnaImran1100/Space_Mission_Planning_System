import React, { useState, useEffect } from 'react';

const TeamManagement = () => {
  const [teamList, setTeamList] = useState([]); // State to store team data
  const [newTeam, setNewTeam] = useState(''); // State for adding new team
  const [teamLeader, setTeamLeader] = useState(''); // State for team leader
  const [teamAstronaut, setTeamAstronaut] = useState(''); // State for team astronaut

  useEffect(() => {
    // Load data from Firebase when the component mounts
    fetch('YOUR_FIREBASE_DATABASE_URL/Teams.json')
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
      });
  }, []);

  // Function to add a new team
  const addTeam = () => {
    if (newTeam.trim() === '' || teamLeader.trim() === '' || teamAstronaut.trim() === '') {
      return; // Don't add empty team names, leaders, or astronauts
    }

    // Create a new team object with a unique ID
    const teamItem = {
      name: newTeam,
      leader: teamLeader,
      astronaut: teamAstronaut,
      // Add other team properties as needed
    };

    // Send data to your Firebase endpoint
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Teams.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teamItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setTeamList([...teamList, { id: data.name, ...teamItem }]);
        setNewTeam('');
        setTeamLeader('');
        setTeamAstronaut('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Team Management</h2>
      <div>
        <h3>Create Team</h3>
        <input
          type="text"
          placeholder="Team Name"
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team Leader"
          value={teamLeader}
          onChange={(e) => setTeamLeader(e.target.value)}
        />
        <input
          type="text"
          placeholder="Astronaut Name"
          value={teamAstronaut}
          onChange={(e) => setTeamAstronaut(e.target.value)}
        />
        <button onClick={addTeam}>Create</button>
      </div>
      <div>
        <h3>Team List</h3>
        <ul>
          {teamList.map((team) => (
            <li key={team.id}>
              {team.name}
              <p>Leader: {team.leader}</p>
              <p>Astronaut: {team.astronaut}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamManagement;
