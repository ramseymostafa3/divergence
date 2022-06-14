import React from "react";

function Stats() {
  return (
    <div className="rowStat divTotal">
      <div className="colStat">
        <div className="divStat">
          <span className="label">Total Winners</span>
          <span className="stat up">1</span>
        </div>
        <div className="divStat">
          <span className="label">PIPS</span>
          <span className="stat up">-7.2</span>
        </div>
        <div className="divStat">
          <span className="label">UNR.NET</span>
          <span className="stat up">-$7.9</span>
        </div>
      </div>

      <div className="colStat">
        <div className="divStat">
          <span className="label">Total Loosers</span>
          <span className="stat down">2</span>
        </div>
        <div className="divStat">
          <span className="label">PIPS</span>
          <span className="stat down">52.8</span>
        </div>
        <div className="divStat">
          <span className="label">UNR.NET</span>
          <span className="stat down">+$79.5</span>
        </div>
      </div>
    </div>
  );
}

export default Stats;
