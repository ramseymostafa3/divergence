import React from "react";
import StatLevel from '../../../common/StatLevel';

function Stats() {
  return (
    <div className="rowStat divTotal">
      <div className="colStat">
        <StatLevel
          label={"Total Winners"}
          stat={"1"}
          position={"up"}
        />
        <StatLevel
          label={"PIPS"}
          stat={"-7.2"}
          position={"up"}
        />
        <StatLevel
          label={"UNR.NET"}
          stat={"-$7.9"}
          position={"up"}
        />
      </div>
      <div className="colStat">
        <StatLevel
          label={"Total Loosers"}
          stat={"2"}
          position={"down"}
        />
        <StatLevel
          label={"PIPS"}
          stat={"52.8"}
          position={"down"}
        />
        <StatLevel
          label={"UNR.NET"}
          stat={"+$79.5"}
          position={"down"}
        />
      </div>
    </div>
  );
}

export default Stats;
