import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

function GaugeChart() {
  return (
    <div class="divSpeedo">
      <div
        style={{
          width: "100%",
          height: "170px",
        }}
      >
        <ReactSpeedometer
          fluidWidth={true}
          maxValue={160}
          value={80}
          needleColor="white"
          segments={10}
        />
      </div>
    </div>
  );
}

export default GaugeChart;
