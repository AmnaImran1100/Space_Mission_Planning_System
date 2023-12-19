import React from 'react';
import { Link } from 'react-router-dom';
import './LocationStatusTrackingLanding.css';

function LocationStatusTrackingLanding() {
  return (
    <div className='LocationLanding'>
    <div>
      <h1>Location and Tracking of Space Crafts</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/LocationStatusTracking">Find Space Craft Distance</Link>
        </li>
        <li>
          <Link to="/LocationStatusTrackingDisplay">Display already discovered Space Crafts</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default LocationStatusTrackingLanding;
