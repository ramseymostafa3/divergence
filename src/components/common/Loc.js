import React from "react";

const Loc = ({ zone, country, onTimeZoneChange, isRunning }) => {
  return (
    <li>
        <label for={`${zone}`} className="time-checkbox">
        <input id={`${zone}`} onClick={onTimeZoneChange} name="time_zone" type="radio" value={country} disabled={isRunning}/>
        <span className="text">{country}</span>
        </label>
    </li>
  );
};

export default Loc;
