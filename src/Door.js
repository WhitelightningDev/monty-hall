// Door.js
import React from 'react';
import './Door.css';
import goatImage from './goat.png';
import doorImage from './door.png';
import carImage from './car.png';

const Door = ({ index, selected, revealed, prize, onClick }) => {
  let classNames = "door";
  if (selected) classNames += " selected";
  if (revealed) classNames += " revealed";

  const getImage = () => {
    if (revealed) {
      return prize ? carImage : goatImage;
    } else {
      return doorImage;
    }
  };

  return (
    <button className={classNames} onClick={onClick} disabled={revealed}>
      <img src={getImage()} alt={revealed ? (prize ? 'Car' : 'Goat') : 'Door'} />
    </button>
  );
};

export default Door;
