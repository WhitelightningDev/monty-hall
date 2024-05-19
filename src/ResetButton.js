import React from 'react';
import './ResetButton.css';

// Component representing the reset button
const ResetButton = ({ onClick }) => {
  return <button className="btn btn-secondary" onClick={onClick}>Reset</button>; // Button to reset the game
};

export default ResetButton;
