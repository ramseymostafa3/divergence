import React from 'react';
import EquityArea from "./EquityArea";
import GaugeChart from "./GaugeChart";
import MonetryWinLoss from "./MonetryWinLoss";
import Stats from "./Stats";
import StrategyChart from './StrategyChart';

function StatsArea() {
  return (
    <div className="row rowDivergent row03">
      <div className="col-12 col-sm-7">
        <StrategyChart />
      </div>

      <div className="col-12 col-sm-5">
        <div className="row">
          <div className="col-sm-6">
            <Stats />
            <MonetryWinLoss />
          </div>
          <div className="col-sm-6">
            <EquityArea />
            <GaugeChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsArea;
