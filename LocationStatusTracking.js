import React, { useState } from 'react';

const G = 6.67430e-11;
const R = 6371e3;

function SpaceRocketDistance() {
  const [missionDetails, setMissionDetails] = useState({
    semiMajorAxis: '',
    eccentricity: '',
    missionName: '',
  });
  const [distance, setDistance] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMissionDetails({
      ...missionDetails,
      [name]: value,
    });
  };

  const sendMissionDataToFirebase = async (data) => {
    try {
      const response = await fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/LocationAndTracking.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return true; // Data sent successfully
      } else {
        return false; // Data sending failed
      }
    } catch (error) {
      console.error('Error:', error);
      return false; // Data sending failed
    }
  };

  const calculateDistance = () => {
    if (!missionDetails.semiMajorAxis || !missionDetails.eccentricity || !missionDetails.missionName) {
      alert('Please fill in all fields.');
      return;
    }

    const semiMajorAxis = parseFloat(missionDetails.semiMajorAxis);
    const eccentricity = parseFloat(missionDetails.eccentricity);

    const meanMotion = Math.sqrt(G / Math.pow(semiMajorAxis, 3));
    const now = new Date();
    const t = (now.getTime() - new Date().setHours(0, 0, 0, 0)) / 1000;
    const meanAnomaly = meanMotion * t;

    let eccentricAnomaly = meanAnomaly;
    let nextEccentricAnomaly = 0;
    do {
      nextEccentricAnomaly = eccentricAnomaly - (eccentricAnomaly - eccentricity * Math.sin(eccentricAnomaly) - meanAnomaly) / (1 - eccentricity * Math.cos(eccentricAnomaly));
      eccentricAnomaly = nextEccentricAnomaly;
    } while (Math.abs(eccentricAnomaly - nextEccentricAnomaly) > 1e-6);

    const calculatedDistance = semiMajorAxis * (1 - eccentricity * Math.cos(eccentricAnomaly));

    setDistance(calculatedDistance);

    // Send the mission data to Firebase
    const missionData = {
      missionName: missionDetails.missionName,
      calculatedDistance: calculatedDistance / 1000, // Convert to kilometers
    };

    sendMissionDataToFirebase(missionData).then((success) => {
      if (success) {
        console.log('Mission data sent to Firebase successfully.');
      } else {
        console.error('Failed to send mission data to Firebase.');
      }
    });
  };

  return (
    <div>
      <h2>Space Rocket Distance from Earth</h2>
      <label>
        Mission Name:
        <input
          type="text"
          name="missionName"
          value={missionDetails.missionName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Semi-Major Axis (m):
        <input
          type="number"
          name="semiMajorAxis"
          value={missionDetails.semiMajorAxis}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Eccentricity:
        <input
          type="number"
          name="eccentricity"
          value={missionDetails.eccentricity}
          onChange={handleInputChange}
          required
        />
      </label>
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance !== null ? (
        <p>
          Mission Name: {missionDetails.missionName}
          <br />
          Distance: {distance / 1000} kilometers
        </p>
      ) : null}
    </div>
  );
}

export default SpaceRocketDistance;
