import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import SummaryAnalytics from "./SummaryAnalytics";
import SummaryPopularity from "./SummaryPopularity";
import SummaryHoldingTime from "./SummaryHoldingTime";

function SummaryCharts() {
  return (
    <div className="row rowDivergent">
      <div className="col-12 col-lg-4">
        <SummaryAnalytics />
      </div>
      <div className="col-12 col-lg-4">
        <SummaryPopularity />
      </div>
      <div className="col-12 col-lg-4">
        <SummaryHoldingTime />
      </div>
    </div>
  );
}

export default SummaryCharts;