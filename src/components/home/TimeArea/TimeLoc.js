import React from "react";
import Loc from 'components/common/Loc';

function TimeLoc({ onTimeZoneChange, isRunning }) {
  return (
    <div className="timeLoc">
      <ul>
        <Loc
          zone={"zone-1"}
          country={"Asia"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}

        />
        <Loc
          zone={"zone-2"}
          country={"New York"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}

        />
        <Loc
          zone={"zone-3"}
          country={"London + New York"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}

        />
        <Loc
          zone={"zone-4"}
          country={"London"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}

        />
        <Loc
          zone={"zone-5"}
          country={"Asia + London"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}

        />
        <Loc
          zone={"zone-6"}
          country={"Best Trading Time"}
          onTimeZoneChange={onTimeZoneChange}
          isRunning={isRunning}
          
        />
      </ul>
    </div>
  );
}

export default TimeLoc;
