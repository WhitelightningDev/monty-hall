// Result.js
import React from 'react';
import './Result.css';

const Result = ({ result, onClick }) => {
  return (
    <div className="result-container">
      <p>{result}</p>
      <button className="btn btn-primary m-4" onClick={onClick}>Play Again</button>
    </div>
  );
};

export default Result;
