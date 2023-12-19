import React, { useState } from 'react';

function CalculationModule() {
  const [orbitalRadius, setOrbitalRadius] = useState('');
  const [orbitPeriod, setOrbitPeriod] = useState('');
  const [initialVelocity, setInitialVelocity] = useState('');
  const [finalVelocity, setFinalVelocity] = useState('');
  const [time, setTime] = useState('');
  const [payloadMass, setPayloadMass] = useState('');

  const calculateOrbitalVelocity = () => {
    const radius = parseFloat(orbitalRadius);
    const period = parseFloat(orbitPeriod);

    if (!isNaN(radius) && !isNaN(period)) {
      const orbitalVelocity = (2 * Math.PI * radius) / period;
      return `Orbital Velocity: ${orbitalVelocity.toFixed(2)} m/s`;
    } else {
      return 'Invalid input';
    }
  };

  const calculateChangeInVelocity = () => {
    const initialV = parseFloat(initialVelocity);
    const finalV = parseFloat(finalVelocity);
    const timeValue = parseFloat(time);

    if (!isNaN(initialV) && !isNaN(finalV) && !isNaN(timeValue)) {
      const acceleration = (finalV - initialV) / timeValue;
      return `Change in Velocity: ${acceleration.toFixed(2)} m/s^2`;
    } else {
      return 'Invalid input';
    }
  };

  const calculatePayloadWeight = () => {
    const mass = parseFloat(payloadMass);

    if (!isNaN(mass)) {
      return `Payload Weight: ${mass.toFixed(2)} kg`;
    } else {
      return 'Invalid input';
    }
  };

  return (
    <div>
      <h2>Calculation Module</h2>
      <div>
        <h3>Orbital Velocity Calculation</h3>
        <label>
          Orbital Radius (m):
          <input
            type="number"
            value={orbitalRadius}
            onChange={(e) => setOrbitalRadius(e.target.value)}
          />
        </label>
        <label>
          Orbit Period (s):
          <input
            type="number"
            value={orbitPeriod}
            onChange={(e) => setOrbitPeriod(e.target.value)}
          />
        </label>
        <div>{calculateOrbitalVelocity()}</div>
      </div>
      <div>
        <h3>Change in Velocity Calculation</h3>
        <label>
          Initial Velocity (m/s):
          <input
            type="number"
            value={initialVelocity}
            onChange={(e) => setInitialVelocity(e.target.value)}
          />
        </label>
        <label>
          Final Velocity (m/s):
          <input
            type="number"
            value={finalVelocity}
            onChange={(e) => setFinalVelocity(e.target.value)}
          />
        </label>
        <label>
          Time (s):
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <div>{calculateChangeInVelocity()}</div>
      </div>
      <div>
        <h3>Payload Weight Calculation</h3>
        <label>
          Payload Mass (kg):
          <input
            type="number"
            value={payloadMass}
            onChange={(e) => setPayloadMass(e.target.value)}
          />
        </label>
        <div>{calculatePayloadWeight()}</div>
      </div>
    </div>
  );
}

export default CalculationModule;
