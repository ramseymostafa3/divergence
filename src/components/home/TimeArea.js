import React from "react";
import TimeIntro from "./TimeIntro";
import TimeLoc from "./TimeLoc";
import FlipClockArea from "./FlipClockArea";
import AllClocks from "../clocks/AllClocks";

function TimeArea() {
  return (
    <div className="row rowDivergent row01">
      <div className="col-12 col-xl-7">
        <div className="timeAccount">
          <TimeIntro />
          <TimeLoc />
          <FlipClockArea />
        </div>
      </div>
      <div className="col-12 col-xl-5">
        <AllClocks />
      </div>
    </div>
  );
}

export default TimeArea;
