import React from 'react';
import { Link } from 'react-router-dom';

function MissionDataAnalysisLanding() {
  return (
    <div>
      <h1>Mission Analysis Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/MissionDataAnalysis">Edit Analysis</Link>
        </li>
        <li>
          <Link to="/MissionDataAnalysisDisplay">Display Analysis</Link>
        </li>
      </ul>
    </div>
  );
}

export default MissionDataAnalysisLanding;
