import React from 'react';
import { Link } from 'react-router-dom';

function LocationStatusTrackingLanding() {
  return (
    <div>
      <h1>Location and Tracking of Spacr Crafts</h1>
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
  );
}

export default LocationStatusTrackingLanding;
