import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (username.length < 4 || username.length > 15) {
      alert("Username must be between 4 and 15 characters.");
      return;
    }
    if (password.length < 6 || password.length > 20) {
      alert("Password must be between 6 and 20 characters.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem('userId', username);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Optional: Store password if necessary
    
    // Navigate to the quotes page
    navigate(`/quotes/${username}`);
  };

  return (
    <div className="signupContainer">
      <h1>Magic Quotes</h1>
      <h2>Sign Up</h2>
      
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="signupInput"
        minLength="4"
        maxLength="15"
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signupInput"
        minLength="6"
        maxLength="20"
        required
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="signupInput"
        minLength="6"
        maxLength="20"
        required
      />
      <button onClick={handleSignUp} className="signupButton">Sign Up</button>
      <button onClick={() => navigate('/')} className="loginButton">Login</button>
    </div>
  );
};

export default SignUp;
