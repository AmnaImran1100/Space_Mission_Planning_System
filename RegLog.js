import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing';
import Registration from './registration';
import Login from './login';
import Homepage from './homepage'; 
import MainPage from './mainpage'; // Import the MainPage component
import TaskAssignment from './TaskAssignment';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/mainpage" element={<MainPage />} /> {/* Define the MainPage route */}
        <Route path="/TaskAssignment" element={<TaskAssignment />} />
      </Routes>
    </Router>
  );
}

export default App;
