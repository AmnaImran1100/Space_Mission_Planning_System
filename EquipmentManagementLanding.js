import React from 'react';
import { Link } from 'react-router-dom';

function EquipmentManagementLanding() {
  return (
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
  );
}

export default EquipmentManagementLanding;
