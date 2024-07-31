import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Generate a unique user ID based on the username
    const userId = username; 

    if (username.length < 4 || username.length > 15) {
      alert("Username must be between 4 and 15 characters.");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert("Password must be between 6 and 20 characters.");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Optional: Store password if necessary
    navigate(`/quotes/${userId}`);
    e.preventDefault();


  




  };

  return (
    <div className="loginContainer">
      <h1>Magic Quotes</h1>
      <h2> Login</h2>
      
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="loginInput"
        minLength="4"
        maxLength="15"
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="loginInput"
        minLength="6"
        maxLength="20"
        required
      />
      <button onClick={handleLogin} className="loginButton">Login</button>
    </div>
  );
};

export default SignIn;
