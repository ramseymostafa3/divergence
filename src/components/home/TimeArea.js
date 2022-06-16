import React, { useState, useEffect } from "react";
import TimeLoc from "./TimeLoc";
import AllClocks from "../clocks/AllClocks";

function TimeArea() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="row rowDivergent row01">
      <div className="col-12 col-xl-7">

        <div className="timeAccount">
          <div className="timeIntro">
            <h6>
              <i className="fas fa-chart-line"></i>
              <span>Auotomated Trading</span>
            </h6>
            <div className="buttons">
              {running ?
                (<button className="stop" onClick={() => setRunning(false)}>Stop</button>) :
                (<button onClick={() => setRunning(true)}>Start</button>)
              }
            </div>
          </div>

          <TimeLoc />

          <div className="stopwatch">
            <div className="numbers">
              <div><label>HH</label><span><small></small><b>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}</b></span></div>
              <span>:</span>
              <div><label>MM</label><span><small></small><b>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</b></span></div>
              <span>:</span>
              <div><label>SS</label><span><small></small><b>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</b></span></div>
              <span>:</span>
              <div><label>MS</label><span><small></small><b>{("0" + ((time / 10) % 100)).slice(-2)}</b></span></div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-12 col-xl-5">
        <AllClocks />
      </div>
    </div>
  );
}

export default TimeArea;
