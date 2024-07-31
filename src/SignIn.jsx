import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username.length < 4 || username.length > 15) {
      alert("Username must be between 4 and 15 characters.");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert("Password must be between 6 and 20 characters.");
      return;
    }
    
    if (username !== storedUsername || password !== storedPassword) {
      alert("Incorrect username or password.");
      return;
    }

    const userId = username;

    // Navigate to the quotes page
    navigate(`/quotes/${userId}`);
  };

  return (
    <div className="loginContainer">
      <h1>Magic Quotes</h1>
      <h2>Login</h2>
      
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
      <button onClick={() => navigate('/signup')} className="signupButton">Sign Up</button>
    </div>
  );
};

export default SignIn;
