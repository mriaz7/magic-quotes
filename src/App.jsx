import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/quotes/:userId" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />

      </Routes>
  );
};

export default App;





