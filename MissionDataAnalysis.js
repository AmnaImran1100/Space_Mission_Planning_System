import React, { useState } from 'react';

function MissionPlanner() {
  const [missionDetails, setMissionDetails] = useState({
    spacecraftName: '',
    missionObjectives: '',
    budget: '',
    timeline: '',
    constraints: '',
  });

  const [analysisResult, setAnalysisResult] = useState(null);

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

  return (
    <div>
      <h2>Mission Planner</h2>
      <label>
        Spacecraft Name:
        <input
          type="text"
          name="spacecraftName"
          value={missionDetails.spacecraftName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Mission Objectives:
        <textarea
          name="missionObjectives"
          value={missionDetails.missionObjectives}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Budget:
        <input
          type="text"
          name="budget"
          value={missionDetails.budget}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Timeline:
        <input
          type="text"
          name="timeline"
          value={missionDetails.timeline}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Constraints:
        <textarea
          name="constraints"
          value={missionDetails.constraints}
          onChange={handleInputChange}
          required
        />
      </label>
      <button onClick={performMissionAnalysis}>Perform Mission Analysis</button>
      {analysisResult && (
        <div>
          <h3>Analysis Result:</h3>
          <pre>{analysisResult}</pre>
        </div>
      )}
    </div>
  );
}

export default MissionPlanner;
