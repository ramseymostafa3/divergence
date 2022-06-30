import React from "react";

import FormSummary from "./FormSummary";
import BalancingProfit from "components/home/HomeInfoSection/BalancingProfit";
import TradingAccount from 'components/home/HomeInfoSection/TradingAccount';

function SummaryInfo() {
  return (
    <>
      <div className="row rowDivergent row04">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <FormSummary />
            </div>
            <div className="col-md-6">
              <BalancingProfit />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="blockDivergent">
            <TradingAccount />
          </div>
        </div>
      </div>

    </>
  );
}

export default SummaryInfo;
