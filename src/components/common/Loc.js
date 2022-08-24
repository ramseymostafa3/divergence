import React from "react";

const Loc = ({ zone, country, onTimeZoneChange }) => {
  return (
    <li>
        <label for={`${zone}`} className="time-checkbox">
        <input id={`${zone}`} onClick={onTimeZoneChange} name="time_zone" type="radio" value={country} />
        <span className="text">{country}</span>
        </label>
    </li>
  );
};

export default Loc;
