import React, { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import faker from "faker";
import ReactSpeedometer from "react-d3-speedometer";
import FlipClock from 'x-react-flipclock';

import AllClocks from "./components/clocks/AllClocks";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";

import "./assets/css/dashmix.css";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      align: "end",
      labels: {
        color: "rgb(255,255,255)",
      },
    },
    title: {
      display: true,
      text: "STRATEGY PERFORMANCE",
      align: "start",
      color: "#fff",
      padding: {
        bottom: -15,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(247, 100, 0)",
      fillColor: "rgb(247, 100, 0)",
      backgroundColor: "rgb(255,255,255)",
    },
    {
      label: "Cumulative Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      fillColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(255,255,255)",
    },
  ],
};

export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barData = {
  barLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function App() {
  const [start, isStart] = useState(false);

  return (
    <div
      id="page-container"
      className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    >
      <Sidebar />
      <Header />

      <main id="main-container">
        <div className="content">
          <div className="row rowDivergent">
            <div className="col-sm-7">
              <div className="timeAccount">
                <div className="timeIntro">
                  <h6>
                    <i className="fas fa-chart-line"></i>
                    <span>Auotomated Trading</span>
                  </h6>
                  <a href="javascript:;" onClick={()=> console.log(isStart(!start))} className={start === true ? 'stop button' : 'button'}>
                    {start === true ? 'Stop' : 'Start'}
                  </a>
                </div>

                <div className="timeLoc">
                  <ul>
                    <li>
                      <label for="zone-1" className="time-checkbox">
                        <input id="zone-1" name="time_zone" type="radio" />
                        <span className="text">Asia</span>
                      </label>
                    </li>
                    <li>
                      <label for="zone-2" className="time-checkbox">
                        <input id="zone-2" name="time_zone" type="radio" />
                        <span className="text">New York</span>
                      </label>
                    </li>
                    <li>
                      <label for="zone-3" className="time-checkbox">
                        <input id="zone-3" name="time_zone" type="radio" />
                        <span className="text">London + New York</span>
                      </label>
                    </li>
                    <li>
                      <label for="zone-4" className="time-checkbox">
                        <input id="zone-4" name="time_zone" type="radio" />
                        <span className="text">London</span>
                      </label>
                    </li>
                    <li>
                      <label for="zone-5" className="time-checkbox">
                        <input id="zone-5" name="time_zone" type="radio" />
                        <span className="text">Asia + London</span>
                      </label>
                    </li>
                    <li>
                      <label for="zone-6" className="time-checkbox">
                        <input id="zone-6" name="time_zone" type="radio" />
                        <span className="text">Best Trading Time</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="flipclock-wrap">
                  <FlipClock
                    type="clock"
                    units = {[
                      {
                        sep: ' ',
                        type: 'hours',
                        title: 'HH',
                      },
                      {
                        sep: '',
                        type: 'minutes',
                        title: 'MM',
                      },
                      {
                        sep: '',
                        type: 'seconds',
                        title: 'SS',
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <AllClocks />
            </div>
          </div>

          <div className="row rowDivergent">
            <div className="col-sm-7">
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
              </ul>
              <div className="strategy-chart">
                <Line options={options} data={data} />
              </div>
            </div>

            <div className="col-sm-5">
              <ul className="statusAccount">
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
              <div className="row">
                <div className="col-sm-6">
                  <div className="rowStat mb-3">
                    <div className="colStat">
                      <div className="divStat">
                        <span className="label">Total Winners</span>
                        <span className="stat up">1</span>
                      </div>
                      <div className="divStat">
                        <span className="label">PIPS</span>
                        <span className="stat up">-7.2</span>
                      </div>
                      <div className="divStat">
                        <span className="label">UNR.NET</span>
                        <span className="stat up">-$7.9</span>
                      </div>
                    </div>

                    <div className="colStat">
                      <div className="divStat">
                        <span className="label">Total Loosers</span>
                        <span className="stat down">2</span>
                      </div>
                      <div className="divStat">
                        <span className="label">PIPS</span>
                        <span className="stat down">52.8</span>
                      </div>
                      <div className="divStat">
                        <span className="label">UNR.NET</span>
                        <span className="stat down">+$79.5</span>
                      </div>
                    </div>
                  </div>


                  <Bar options={barOptions} data={barData} />
                </div>
                <div className="col-sm-6">
                  <div className="equity-box-main">
                    <div className="equity-box">
                      <span className="character-box">
                        <span className="character">5</span>
                      </span>
                      <span className="character-box">
                        <span className="character">6</span>
                      </span>
                      <span className="character-box">
                        <span className="character">7</span>
                      </span>
                      <span className="character-box">
                        <span className="character">8</span>
                      </span>
                      <span className="dot">.</span>
                      <span className="character-box">
                        <span className="character">9</span>
                      </span>
                      <span className="character-box">
                        <span className="character">0</span>
                      </span>
                    </div>
                    <footer>
                      <span className="title">EQUITY</span>
                      <span className="stats">23.06 <i className="fas fa-arrow-up"></i></span>

                    </footer>
                  </div>

                  <ReactSpeedometer
                    maxValue={160}
                    value={80}
                    needleColor="white"
                    segments={10}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row rowDivergent">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="blockDivergent">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="fieldContainer">
                          <i className="fa fa-user"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Grace Brown"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fieldContainer">
                          <i className="fas fa-calendar-alt"></i>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Start Date"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fieldContainer">
                          <i className="fas fa-history"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Granularity"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="fieldContainer">
                          <i className="fas fa-calendar-alt"></i>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="End Date"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="submit" type="submit">
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul className="buttonsAccount">
                    <li>
                      <a href="javascript:;">Summary</a>
                    </li>
                    <li>
                      <a href="javascript:;">Transactions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="blockDivergent">
                    <h2>
                      Balancing profit with purpose spread trading reinvented.
                    </h2>
                    <ul className="author">
                      <li>Charles Glah</li>
                      <li>|</li>
                      <li>Founder, Divergence Capital</li>
                    </ul>
                  </div>
                  <ul className="buttonsAccount">
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
            </div>

            <div className="col-md-5">
              <div className="blockDivergent">
                <div className="row">
                  <div className="col-md-7">
                    <h3>Open a free Trading Account</h3>
                    <p>
                      Trade over 17,000 markets with{" "}
                      <span className="blue">spread bets</span> and{" "}
                      <span className="blue">CPDS</span>, or{" "}
                      <span className="blue">invest</span> in thousand of global
                      shares and <span className="blue">ETFs.</span>
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
