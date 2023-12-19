import React from 'react';
import { Link } from 'react-router-dom';
import './EquipmentManagementLanding.css';

function EquipmentManagementLanding() {
  return (
    <div className='EquipLanding'>
    <div>
      <h1>Welcome to the Equipmant Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/EquipmentManagement">Add new equipments</Link>
        </li>
        <li>
          <Link to="/EquipmentManagementDisplay">Display existing equipments</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default EquipmentManagementLanding;
