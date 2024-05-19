// ResetButton.js
import React from 'react';
import './ResetButton.css';

const ResetButton = ({ onClick }) => {
  return <button className="btn btn-secondary" onClick={onClick}>Reset</button>;
};

export default ResetButton;
