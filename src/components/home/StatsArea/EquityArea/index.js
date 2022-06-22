import React from "react";
import CharacterBox from 'components/common/CharacterBox';

function EquityArea() {
  return (
    <div className="equity-box-main">
      <div className="equity-box">

        <CharacterBox
          character={"5"}
        />
        <CharacterBox
          character={"6"}
        />
        <CharacterBox
          character={"7"}
        />
        <CharacterBox
          character={"8"}
        />
        <span className="dot">.</span>
        <CharacterBox
          character={"9"}
        />
        <CharacterBox
          character={"0"}
        />
        
      </div>
      <footer>
        <span className="title">EQUITY</span>
        <span className="stats">
          23.06 <i className="fas fa-arrow-up"></i>
        </span>
      </footer>
    </div>
  );
}

export default EquityArea;
