import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationDataLanding.css';

function DestinationDataLanding() {
  return (
    <div className='DestinationLanding'>
    <div>
      <h1>Welcome to the Destination Data Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/DestinationData">Create new destination</Link>
        </li>
        <li>
          <Link to="/DestinationDataDisplay">Display existing destinations</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default DestinationDataLanding;
