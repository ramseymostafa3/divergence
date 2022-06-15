import React from "react";

const Loc = ({ zone, country }) => {
  return (
    <li>
        <label for={`${zone}`} className="time-checkbox">
        <input id={`${zone}`} name="time_zone" type="radio" />
        <span className="text">{country}</span>
        </label>
    </li>
  );
};

export default Loc;
