import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password'); 
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="logoutButton">
      Logout
    </button>
  );
};

export default LogoutButton;
