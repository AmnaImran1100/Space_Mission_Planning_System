import React, { useState, useEffect } from 'react';
import './EquipmentManagement.css';

const EquipmentManagement = () => {
  const [equipmentList, setEquipmentList] = useState([]); // State to store equipment data
  const [newEquipment, setNewEquipment] = useState(''); // State for adding new equipment

  useEffect(() => {
    // Load data from Firebase when the component mounts
    fetch('YOUR_FIREBASE_DATABASE_URL/Equipment.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const equipmentData = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name,
          }));
          setEquipmentList(equipmentData);
        }
      });
  }, []);

  // Function to add new equipment
  const addEquipment = () => {
    if (newEquipment.trim() === '') {
      return; // Don't add empty equipment names
    }

    // Create a new equipment object with a unique ID
    const equipmentItem = {
      name: newEquipment,
      // Add other equipment properties as needed
    };

    // Send data to your Firebase endpoint
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Equipments.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(equipmentItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setEquipmentList([...equipmentList, { id: data.name, ...equipmentItem }]);
        setNewEquipment('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Function to retire equipment (remove from the list)
  const retireEquipment = (id) => {
    // Remove the equipment from the list on the client side
    const updatedEquipmentList = equipmentList.filter((item) => item.id !== id);
    setEquipmentList(updatedEquipmentList);

    // Remove the equipment from Firebase
    fetch(`YOUR_FIREBASE_DATABASE_URL/Equipment/${id}.json`, {
      method: 'DELETE',
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='Equipment'>
    <div>
      <h2>Equipment Management</h2>
      <div>
        <h3>Add Equipment</h3>
        <input
          type="text"
          placeholder="Equipment Name"
          value={newEquipment}
          onChange={(e) => setNewEquipment(e.target.value)}
        />
        <button onClick={addEquipment}>Add</button>
      </div>
      <div>
        <h3>Equipment List</h3>
        <ul>
          {equipmentList.map((equipment) => (
            <li key={equipment.id}>
              {equipment.name}
              <button onClick={() => retireEquipment(equipment.id)}>Retire</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default EquipmentManagement;
