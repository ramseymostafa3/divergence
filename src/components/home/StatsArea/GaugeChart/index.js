import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

function GaugeChart() {
  return (
    <div className="divSpeedo">
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
      <h5>Drawdown</h5>
    </div>
  );
}

export default GaugeChart;
