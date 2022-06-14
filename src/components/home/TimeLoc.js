import React from "react";

function TimeLoc() {
  return (
    <div className="timeLoc">
      <ul>
        <li>
          <label for="zone-1" className="time-checkbox">
            <input id="zone-1" name="time_zone" type="radio" />
            <span className="text">Asia</span>
          </label>
        </li>
        <li>
          <label for="zone-2" className="time-checkbox">
            <input id="zone-2" name="time_zone" type="radio" />
            <span className="text">New York</span>
          </label>
        </li>
        <li>
          <label for="zone-3" className="time-checkbox">
            <input id="zone-3" name="time_zone" type="radio" />
            <span className="text">London + New York</span>
          </label>
        </li>
        <li>
          <label for="zone-4" className="time-checkbox">
            <input id="zone-4" name="time_zone" type="radio" />
            <span className="text">London</span>
          </label>
        </li>
        <li>
          <label for="zone-5" className="time-checkbox">
            <input id="zone-5" name="time_zone" type="radio" />
            <span className="text">Asia + London</span>
          </label>
        </li>
        <li>
          <label for="zone-6" className="time-checkbox">
            <input id="zone-6" name="time_zone" type="radio" />
            <span className="text">Best Trading Time</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default TimeLoc;
