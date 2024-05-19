// App.js
import React, { useState } from 'react';
import './App.css';
import Doors from './Doors';
import Result from './Result';
import ResetButton from './ResetButton';

function App() {
  // State variables to manage game logic
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [prizeDoor, setPrizeDoor] = useState(Math.floor(Math.random() * 3));
  const [revealedDoor, setRevealedDoor] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState(null);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  // Handle door click event
  const handleDoorClick = (doorIndex) => {
    if (!gameOver && selectedDoor === null) {
      setSelectedDoor(doorIndex);
      // Determine the door to be revealed (must not be the selected door or the prize door)
      let remainingDoors = [0, 1, 2].filter(door => door !== doorIndex && door !== prizeDoor);
      let revealed = remainingDoors[Math.floor(Math.random() * remainingDoors.length)];
      setRevealedDoor(revealed);
    }
  };

  // Handle switch decision
  const handleSwitch = () => {
    const remainingDoor = [0, 1, 2].find(door => door !== selectedDoor && door !== revealedDoor);
    setSelectedDoor(remainingDoor);
    checkResult(remainingDoor);
  };

  // Check the result of the game
  const checkResult = (selected) => {
    setGamesPlayed(gamesPlayed + 1);
    if (selected === prizeDoor) {
      setResult("Congratulations! You've won the car!");
      setWins(wins + 1);
    } else {
      setResult("Sorry, better luck next time!");
      setLosses(losses + 1);
    }
    setGameOver(true);
  };

  // Reset the game to the initial state
  const resetGame = () => {
    setSelectedDoor(null);
    setPrizeDoor(Math.floor(Math.random() * 3)); // Reset the prize door
    setRevealedDoor(null);
    setGameOver(false);
    setResult(null);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Monty Hall Problem</h1>
      <div className="text-center">
        <p>Games Played: {gamesPlayed} | Wins: {wins} | Losses: {losses}</p>
      </div>
      {!gameOver && <p className="text-center">Select a door:</p>}
      <Doors
        selectedDoor={selectedDoor}
        revealedDoor={revealedDoor}
        prizeDoor={prizeDoor}
        onClick={handleDoorClick}
      />
      {gameOver && (
        <Result result={result} onClick={resetGame} />
      )}
      {selectedDoor !== null && !gameOver && (
        <div className="text-center mt-4 m-3">
          <p className="mb-2 ">You selected door {selectedDoor + 1}. What's behind this door? Do you want to keep it or switch?</p>
          <button className="btn btn-primary " onClick={handleSwitch}>Switch Door</button>
          <button className="btn btn-primary ml-4" onClick={() => checkResult(selectedDoor)}>Keep Door</button>
        </div>
      )}
      <div className="text-center mt-4">
        <ResetButton onClick={resetGame} />
      </div>
    </div>
  );
}

export default App;
