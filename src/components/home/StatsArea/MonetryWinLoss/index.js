import React from "react";
import VerticalProgress from '../../../common/VerticalProgress';

function MonetryWinLoss() {
  return (
    <div className="divMonetry">
      <div className="progMonetry">
        <VerticalProgress
          barStyle={{ backgroundColor: "#6f51ff" }}
          progress={"30"}
        />
        <VerticalProgress
          barStyle={{ backgroundColor: "#ff6300" }}
          progress={"70"}
        />
        <VerticalProgress
          barStyle={{ backgroundColor: "#6f51ff" }}
          progress={"30"}
        />
      </div>
      <label>Monetry Win/Loss</label>
    </div>
  );
}

export default MonetryWinLoss;
