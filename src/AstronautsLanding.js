import React from 'react';
import { Link } from 'react-router-dom';
import {ast1} from './Assets/Images/ast1.jpg'
import "./AstronautsLanding.css";


function AstronautsLanding() {
  return (
    <div className="Astrolanding">
      <div>
    
      <h1>Welcome to the Astronaut Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/Astronauts">Create Astronaut</Link>
        </li>
        <li>
          <Link to="/AstronautsDisplay">Display Astronauts</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default AstronautsLanding;
