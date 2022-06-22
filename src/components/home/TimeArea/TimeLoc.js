import React from "react";
import Loc from 'components/common/Loc';

function TimeLoc() {
  return (
    <div className="timeLoc">
      <ul>
        <Loc
          zone={"zone-1"}
          country={"Asia"}
        />
        <Loc
          zone={"zone-2"}
          country={"New York"}
        />
        <Loc
          zone={"zone-3"}
          country={"London + New York"}
        />
        <Loc
          zone={"zone-4"}
          country={"London"}
        />
        <Loc
          zone={"zone-5"}
          country={"Asia + London"}
        />
        <Loc
          zone={"zone-6"}
          country={"Best Trading Time"}
        />
      </ul>
    </div>
  );
}

export default TimeLoc;
