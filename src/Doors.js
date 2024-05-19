// Doors.js
import React from 'react';
import Door from './Door';

const Doors = ({ selectedDoor, revealedDoor, prizeDoor, onClick }) => {
  return (
    <div className="doors-container">
      {[0, 1, 2].map((index) => (
        <Door
          key={index}
          index={index}
          selected={selectedDoor === index}
          revealed={revealedDoor === index}
          prize={prizeDoor === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Doors;
