import React from "react";
import FlipClock from 'x-react-flipclock';

function FlipClockArea() {
  return (
    <div className="flipclock-wrap">
      <FlipClock
        type="clock"
        units={[
          {
            sep: " ",
            type: "hours",
            title: "HH",
          },
          {
            sep: "",
            type: "minutes",
            title: "MM",
          },
          {
            sep: "",
            type: "seconds",
            title: "SS",
          },
          // {
          //   sep: "",
          //   type: "miliseconds",
          //   title: "MS",
          // },
        ]}
      />
    </div>
  );
}

export default FlipClockArea;
