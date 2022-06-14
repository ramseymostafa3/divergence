import React from "react";

function EquityArea() {
  return (
    <div className="equity-box-main">
      <div className="equity-box">
        <span className="character-box">
          <span className="character">5</span>
        </span>
        <span className="character-box">
          <span className="character">6</span>
        </span>
        <span className="character-box">
          <span className="character">7</span>
        </span>
        <span className="character-box">
          <span className="character">8</span>
        </span>
        <span className="dot">.</span>
        <span className="character-box">
          <span className="character">9</span>
        </span>
        <span className="character-box">
          <span className="character">0</span>
        </span>
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
