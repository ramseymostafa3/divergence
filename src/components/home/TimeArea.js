import React from "react";
import TimeIntro from "./TimeIntro";
import TimeLoc from "./TimeLoc";
import AllClocks from "../clocks/AllClocks";
import CountdownTimer from "./CountdownTimer";

function TimeArea() {
  return (
    <div className="row rowDivergent row01">
      <div className="col-12 col-xl-7">
        <div className="timeAccount">
          <TimeIntro />
          <TimeLoc />
          <CountdownTimer />
        </div>
      </div>
      <div className="col-12 col-xl-5">
        <AllClocks />
      </div>
    </div>
  );
}

export default TimeArea;
