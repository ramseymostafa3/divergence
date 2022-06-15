import React from "react";

const StatLevel = ({ label, stat, position }) => {
  return (
    <div className="divStat">
        <span className="label">{label}</span>
        <span className={`stat ${position}`}>{stat}</span>
    </div>
  );
};

export default StatLevel;
