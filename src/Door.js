import React from 'react';
import './Door.css';
import goatImage from './goat.png';
import doorImage from './door.png';
import carImage from './car.png';

// Functional component representing a single door in the game
const Door = ({ index, selected, revealed, prize, onClick }) => {
  let classNames = "door";
  if (selected) classNames += " selected"; // Add 'selected' class if the door is selected by the player
  if (revealed) classNames += " revealed"; // Add 'revealed' class if the door has been revealed by the host

  // Function to get the appropriate image for the door based on its state
  const getImage = () => {
    if (revealed) {
      return prize ? carImage : goatImage; // Show car or goat image if the door has been revealed
    } else {
      return doorImage; // Show closed door image if the door hasn't been revealed yet
    }
  };

  // Render the door component
  return (
    <button className={classNames} onClick={onClick} disabled={revealed}>
      <img src={getImage()} alt={revealed ? (prize ? 'Car' : 'Goat') : 'Door'} />
    </button>
  );
};

export default Door;
