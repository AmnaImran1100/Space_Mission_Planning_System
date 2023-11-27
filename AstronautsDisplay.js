import React, { useState, useEffect } from 'react';

function AstronautList() {
  const [astronauts, setAstronauts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Your Firebase endpoint for astronauts
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/Astronauts.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const astronautData = Object.values(data);
          setAstronauts(astronautData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Astronaut List</h2>
      {loading ? (
        <p>Loading astronaut data...</p>
      ) : (
        <ul>
          {astronauts.map((astronaut, index) => (
            <li key={index}>
              <strong>Name:</strong> {astronaut.FullName}
              <br />
              <strong>Father's Name:</strong> {astronaut.FatherName}
              <br />
              <strong>Age:</strong> {astronaut.Age}
              <br />
              <strong>Country:</strong> {astronaut.Country}
              <br />
              <strong>CNIC No:</strong> {astronaut.CNIC}
              <br />
              <strong>Married:</strong> {astronaut.MarriedStatus ? 'Yes' : 'No'}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AstronautList;
