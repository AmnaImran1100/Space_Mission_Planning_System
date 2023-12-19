import React, { useState, useEffect } from 'react';
import './DestinationData.css';

const DestinationData = () => {
  // State to store destination data
  const [destinations, setDestinations] = useState([]);
  // State for the current destination
  const [currentDestination, setCurrentDestination] = useState({
    mission: '',
    latitude: '',
    longitude: '',
    altitude: '',
  });

  // Function to add a new destination
  const addDestination = () => {
    // Ensure that all fields are filled
    if (
      currentDestination.mission.trim() === '' ||
      currentDestination.latitude.trim() === '' ||
      currentDestination.longitude.trim() === '' ||
      currentDestination.altitude.trim() === ''
    ) {
      return;
    }

    // Create a new destination object
    const newDestination = {
      id: Date.now(),
      mission: currentDestination.mission,
      latitude: currentDestination.latitude,
      longitude: currentDestination.longitude,
      altitude: currentDestination.altitude,
    };

    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Destinations.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDestination),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data successfully sent to Firebase.');
          // Clear the form after successful submission
          setCurrentDestination({
            mission: '',
            latitude: '',
            longitude: '',
            altitude: '',
          });
        } else {
          console.error('Failed to send data to Firebase.');
        }
      })
      .catch((error) => {
        console.error('Error sending data to Firebase:', error);
      });

    // Update the list of destinations
    setDestinations((prevDestinations) => [...prevDestinations, newDestination]);
    setCurrentDestination({
      mission: '',
      latitude: '',
      longitude: '',
      altitude: '',
    });
  };

  // Function to delete a destination by ID
  const deleteDestination = (id) => {
    const updatedDestinations = destinations.filter((destination) => destination.id !== id);
    setDestinations(updatedDestinations);
  };

  // Function to edit a destination by ID
  const editDestination = (id) => {
    const destinationToEdit = destinations.find((destination) => destination.id === id);
    if (destinationToEdit) {
      setCurrentDestination(destinationToEdit);
      deleteDestination(id);
    }
  };

  return (
    <div className='DestinationData'>
    <div>
      <h2>Destination Data</h2>
      <div>
        <h3>Add Destination</h3>
        <input
          type="text"
          placeholder="Mission"
          value={currentDestination.mission}
          onChange={(e) =>
            setCurrentDestination({
              ...currentDestination,
              mission: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Latitude"
          value={currentDestination.latitude}
          onChange={(e) =>
            setCurrentDestination({
              ...currentDestination,
              latitude: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Longitude"
          value={currentDestination.longitude}
          onChange={(e) =>
            setCurrentDestination({
              ...currentDestination,
              longitude: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Altitude"
          value={currentDestination.altitude}
          onChange={(e) =>
            setCurrentDestination({
              ...currentDestination,
              altitude: e.target.value,
            })
          }
        />
        <button onClick={addDestination}>Add</button>
      </div>
      <div>
        <h3>Destination List</h3>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id}>
              Mission: {destination.mission}, Latitude: {destination.latitude}, Longitude: {destination.longitude}, Altitude: {destination.altitude}
              <button onClick={() => editDestination(destination.id)}>Edit</button>
              <button onClick={() => deleteDestination(destination.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DestinationData;
