import React from "react";

import FormArea from "./FormArea";
import BalancingProfit from "./BalancingProfit";
import TradingAccount from "./TradingAccount";
import SummaryButtons from "./SummaryButtons";

function HomeInfoSection() {
  return (
    <>
      <div className="row rowDivergent row04">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <FormArea />
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

      <SummaryButtons />
    </>
  );
}

export default HomeInfoSection;
