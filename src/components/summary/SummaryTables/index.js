import React from "react";

function SummaryTables() {
  return (
    <div className="row rowDivergent">
      <div className="col-12 col-lg-4 colTable">
        <div className="divergence-table table-responsive">
          <table className="table">
            <thead className="upperCase">
              <tr>
                <th scope="col">Strategy</th>
                <th scope="col">Unrealized</th>
                <th scope="col">Realized</th>
                <th scope="col">Daily P&L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="blue">ML Prediction</td>
                <td className="green">2,260.75</td>
                <td className="green">0</td>
                <td className="green">2,260.75</td>
              </tr>
              <tr>
                <td className="pale">ML MomentumTrend</td>
                <td className="red">2,260.75</td>
                <td className="red">2,261.25</td>
                <td className="red">121.273</td>
              </tr>
              <tr>
                <td className="green">ML Sentiment</td>
                <td>0</td>
                <td>2,261.25</td>
                <td>121.273</td>
              </tr>
              <tr>
                <td className="orange">ML Breakout</td>
                <td className="red">2,260.75</td>
                <td className="red">2,261.25</td>
                <td className="red">121.273</td>
              </tr>
              <tr>
                <td className="yellow">ML Divergence</td>
                <td>0</td>
                <td>2,261.25</td>
                <td>2,260.75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-4 colTable">
        <div className="divergence-table table-responsive">
          <table className="table">
            <thead className="upperCase">
              <tr>
                <th scope="col" colspan="4">Breakdown & Losing Streak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Max Drawdown</td>
                <td className="red">-P</td>
                <td className="red">35,869.52</td>
                <td className="red">-17.38%</td>
              </tr>
              <tr>
                <td>Consecutive Wins</td>
                <td>P</td>
                <td>31,328.20</td>
                <td className="green">6 Trades</td>
              </tr>
              <tr>
                <td>Consecutive Losses</td>
                <td >-P</td>
                <td>20,818.29</td>
                <td className="red">9 Trades</td>
              </tr>
              <tr>
                <td>Max Consecutive Profit</td>
                <td className="green">P</td>
                <td className="green">49,178.63</td>
                <td>7 Trades</td>
              </tr>
              <tr>
                <td>Max Consecutive Loss</td>
                <td className="red">-P</td>
                <td className="green">49,178.63</td>
                <td>3 Trades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-12 col-lg-4 colTable">
      </div>
    </div>
  );
}
  
export default SummaryTables;