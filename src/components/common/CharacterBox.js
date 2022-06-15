import React from "react";

const CharacterBox = ({ character }) => {
  return (
    <span className="character-box">
        <span className="character">{character}</span>
    </span>
  );
};

export default CharacterBox;
