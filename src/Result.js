import React from 'react';
import './Result.css';

// Component to display the result of the game
const Result = ({ result, onClick }) => {
  return (
    <div className="result-container">
      <p>{result}</p> {/* Display the result message */}
      <button className="btn btn-primary m-4" onClick={onClick}>Play Again</button> {/* Button to play again */}
    </div>
  );
};

export default Result;
