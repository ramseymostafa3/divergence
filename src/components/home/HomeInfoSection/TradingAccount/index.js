import React from "react";

function TradingAccount() {
  return (
    <div className="row">
      <div className="col-md-7">
        <h3>Open a free Trading Account</h3>
        <p>
          Trade over 17,000 markets with{" "}
          <span className="blue">spread bets</span> and{" "}
          <span className="blue">CPDS</span>, or{" "}
          <span className="blue">invest</span> in thousand of global shares and{" "}
          <span className="blue">ETFs.</span>
        </p>
      </div>
      <div className="col-md-5 buttonCol">
        <a href="javascript:;" className="button orange">
          Create demo account
        </a>
        <a href="javascript:;" className="button green">
          Create live account
        </a>
      </div>
    </div>
  );
}

export default TradingAccount;
