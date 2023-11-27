import React, { useState } from 'react';
import {Ast, IM1, s1} from './Assets/Images';
import "./Astronauts.css";


function AstronautForm() {
  const [astronautData, setAstronautData] = useState({
    name: '',
    fatherName: '',
    age: '',
    country: '',
    cnic: '',
    isMarried: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAstronautData({
      ...astronautData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Create an object with the same structure as 'details' in FirebaseDemo
    const dataToSend = {
      FullName: astronautData.name,
      FatherName: astronautData.fatherName,
      Age:astronautData.age,
      CNIC: astronautData.cnic,
      Country:astronautData.cnic,
      MarriedStatus:astronautData.isMarried
       // You can map other fields accordingly
    };

    // Send data to your Firebase endpoint
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Astronauts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data successfully sent to Firebase.');
          // Clear the form after successful submission
          setAstronautData({
            name: '',
            fatherName: '',
            age: '',
            country: '',
            cnic: '',
            isMarried: false,
          });
        } else {
          console.error('Failed to send data to Firebase.');
        }
      })
      .catch((error) => {
        console.error('Error sending data to Firebase:', error);
      });
  };

  return (
    <div className="main-container">
    <div className="form">
      {/* <img src={Ast} className='w-full h-full object-cover absolute' alt="" /> */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={astronautData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Father's Name:
        <input
          type="text"
          name="fatherName"
          value={astronautData.fatherName}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={astronautData.age}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Country:
        <input
          type="text"
          name="country"
          value={astronautData.country}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        CNIC No:
        <input
          type="text"
          name="cnic"
          value={astronautData.cnic}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Married:
        <input
          type="checkbox"
          name="isMarried"
          checked={astronautData.isMarried}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
}

export default AstronautForm;
