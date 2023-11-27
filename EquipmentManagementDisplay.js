import React, { useState, useEffect } from 'react';

function ViewEquipment() {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    // Your Firebase endpoint for equipment
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/Equipments.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const equipmentData = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name,
          }));
          setEquipmentList(equipmentData);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleRetire = (id) => {
    // Implement your retire equipment logic here
    console.log('Retire equipment with ID:', id);
  };

  return (
    <div>
      <h2>View Equipment</h2>
      <ul>
        {equipmentList.map((equipment, index) => (
          <li key={index}>
            Equipment Name: {equipment.name}
            <button onClick={() => handleRetire(equipment.id)}>Retire</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewEquipment;
