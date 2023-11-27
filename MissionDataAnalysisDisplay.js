import React, { useState, useEffect } from 'react';

function MissionPlanner1() {
  const [missionDetails, setMissionDetails] = useState({
    spacecraftName: '',
    missionObjectives: '',
    budget: '',
    timeline: '',
    constraints: '',
  });

  const [analysisResult, setAnalysisResult] = useState(null);
  const [missionData, setMissionData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMissionDetails({
      ...missionDetails,
      [name]: value,
    });
  };

  const storeMissionDataInFirebase = async () => {
    const res = await fetch("https://spacemission-d8661-default-rtdb.firebaseio.com/MissionAnalysis.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(missionDetails),
    });

    if (res.ok) {
      setAnalysisResult("Mission data stored in Firebase.");
    } else {
      setAnalysisResult("Failed to store mission data.");
    }
  };

  const performMissionAnalysis = () => {
    // This is a simplified example; real mission analysis would involve complex calculations
    const result = `Mission analysis for ${missionDetails.spacecraftName}:
      - Objectives: ${missionDetails.missionObjectives}
      - Budget: ${missionDetails.budget}
      - Timeline: ${missionDetails.timeline}
      - Constraints: ${missionDetails.constraints}
      // Perform complex analysis here
    `;

    setAnalysisResult(result);
    storeMissionDataInFirebase(); // Call the Firebase storage function
  };

  useEffect(() => {
    // Fetch mission data from Firebase when the component mounts
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/MissionAnalysis.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const missionDataArray = Object.values(data);
          setMissionData(missionDataArray);
        }
      });
  }, []);

  return (
    <div>
      <h2>Mission Planner</h2>
      {analysisResult && (
        <div>
          <h3>Analysis Result:</h3>
          <pre>{analysisResult}</pre>
        </div>
      )}
      {missionData.length > 0 && (
        <div>
          <h3>Mission Data from Firebase:</h3>
          <ul>
            {missionData.map((data, index) => (
              <li key={index}>
                Spacecraft Name: {data.spacecraftName}
                <br />
                Objectives: {data.missionObjectives}
                <br />
                Budget: {data.budget}
                <br />
                Timeline: {data.timeline}
                <br />
                Constraints: {data.constraints}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MissionPlanner1;
