import React from 'react';

function HomeSectionTwo () {
    return (
        <div className="row rowDivergent">
            <div className="col-12">
              <ul className="statusAccount">
                <li>
                  <span>Account</span>
                  <strong>MT4Demo</strong>
                </li>
                <li>
                  <span>Currency</span>
                  <strong>GBP</strong>
                </li>
                <li>
                  <span>Balance</span>
                  <strong>143779.31</strong>
                </li>
                <li>
                  <span>Margin Used %</span>
                  <strong>10 %</strong>
                </li>
                <li className="active">
                  <span>Unrealised P/L</span>
                  <strong>+39,801.30</strong>
                </li>
                <li>
                  <span>Margin Available %</span>
                  <strong>90%</strong>
                </li>
                <li>
                  <span>No. Winning Trades</span>
                  <strong>L-1 S-2</strong>
                </li>
                <li>
                  <span>No. Losing Trades</span>
                  <strong>L-0 S-0</strong>
                </li>
              </ul>
              
            </div>
          </div>
    )
}

export default HomeSectionTwo;