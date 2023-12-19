import React, { useState, useEffect } from 'react';
import './DestinationDataDisplay.css';

const DestinationDataDisplay = () => {
  // State to store destination data
  const [destinations, setDestinations] = useState([]);
  // State for the current destination
  const [currentDestination, setCurrentDestination] = useState({
    mission: '',
    latitude: '',
    longitude: '',
    altitude: '',
  });

  // Function to load destination data from Firebase
  const loadDestinationData = async () => {
    try {
      const response = await fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Destinations.json');
      if (response.ok) {
        const data = await response.json();
        if (data) {
          const destinationData = Object.values(data);
          setDestinations(destinationData);
        }
      } else {
        console.error('Error loading data from Firebase:', response.status);
      }
    } catch (error) {
      console.error('Error loading data from Firebase:', error);
    }
  };

  // Define the addDestination function
  

  useEffect(() => {
    // Load destination data from Firebase when the component mounts
    loadDestinationData();
  }, []);

  return (
    <div className='DestinationDisplay'>
    <div>
      <h2>Destination Data</h2>
      <div>
      </div>
      <div>
        <h3>Destination List</h3>
        <ul>
          {destinations.map((destination, index) => (
            <li key={index}>
              Mission: {destination.mission}, Latitude: {destination.latitude}, Longitude: {destination.longitude}, Altitude: {destination.altitude}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DestinationDataDisplay;
