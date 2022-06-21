import React from "react";
import AccountButtons from '../../../common/AccountButtons';

function SummaryButtons() {
  return (
    <div className="row row05">
      <div className="col-12 col-xl-7">
        <ul className="buttonsAccount">
          <AccountButtons
            link={"javascript:;"}
            label={"Summary"}
          />
          <AccountButtons
            link={"javascript:;"}
            label={"Transactions"}
          />
          <AccountButtons
            link={"javascript:;"}
            label={"Positions"}
            active={"active"}
          />
          <AccountButtons
            link={"javascript:;"}
            label={"Rick Metrics"}
          />
        </ul>
      </div>
    </div>
  );
}

export default SummaryButtons;