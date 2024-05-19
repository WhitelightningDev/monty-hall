import React from 'react';
import Door from './Door';

// Component representing the collection of doors in the game
const Doors = ({ selectedDoor, revealedDoor, prizeDoor, onClick }) => {
  return (
    <div className="doors-container">
      {[0, 1, 2].map((index) => (
        <Door
          key={index}
          index={index}
          selected={selectedDoor === index} // Check if the current door is selected by the player
          revealed={revealedDoor === index} // Check if the current door has been revealed
          prize={prizeDoor === index} // Check if the current door contains the prize
          onClick={() => onClick(index)} // Handle click event for the door
        />
      ))}
    </div>
  );
};

export default Doors;
