import React from "react";

function SummaryButtons() {
  return (
    <div className="row row05">
      <div className="col-12 col-xl-7">
        <ul className="buttonsAccount">
          <li>
            <a href="javascript:;">Summary</a>
          </li>
          <li>
            <a href="javascript:;">Transactions</a>
          </li>
          <li>
            <a href="javascript:;" className="active">
              Positions
            </a>
          </li>
          <li>
            <a href="javascript:;">Rick Metrics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SummaryButtons;
