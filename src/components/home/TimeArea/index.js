import React, { useState, useEffect } from "react";
import TimeLoc from "./TimeLoc";
import AllClocks from "components/clocks/AllClocks";
import moment from 'moment-timezone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MARKET_TIMINGS = {
  'Asia': {
    start: moment().set({ hour: 22, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 8, minute: 0, second: 0, millisecond: 0 }).add(1, 'days'),
  },
  'London': {
    start: moment().set({ hour: 8, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 16, minute: 0, second: 0, millisecond: 0 }),
  },
  'Asia + London': {
    start: moment().set({ hour: 22, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days'),
    stop: moment().set({ hour: 16, minute: 0, second: 0, millisecond: 0 }),
  },
  'London + New York': {
    start: moment().set({ hour: 13, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 16, minute: 0, second: 0, millisecond: 0 }),
  },
  'New York': {
    start: moment().set({ hour: 13, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 21, minute: 0, second: 0, millisecond: 0 }),
  },
  'Best Trading Time': {
    start: moment().set({ hour: 8, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 12, minute: 0, second: 0, millisecond: 0 }),
  }
}


function TimeArea() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("stop");
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);

  function calculateMarketTimings() {
    const localTime = moment();
    const currentTime = localTime.tz('Europe/London');
    console.log('localTime', localTime, 'currentTime', currentTime);
    // const currentTime = moment(28, 'DD').set({ hour: 13, minute: 0, second: 0, millisecond: 0 }); // only for testing
    setButtonClassName("waiting-to-start");
    const selectedMarketTimings = MARKET_TIMINGS[selectedTimeZone];
    console.log(selectedMarketTimings.start);
    let timeDifferenceFromMarketStart = selectedMarketTimings.start.diff(currentTime, 'milliseconds');
    console.log(timeDifferenceFromMarketStart);
    timeDifferenceFromMarketStart = timeDifferenceFromMarketStart - (timeDifferenceFromMarketStart % 10);
    if (timeDifferenceFromMarketStart > 0) {
      setTime(timeDifferenceFromMarketStart);
    }
    if (selectedTimeZone === 'Asia + London' && timeDifferenceFromMarketStart < 0 && ((!currentTime.isBetween(selectedMarketTimings.start, selectedMarketTimings.stop)) || currentTime.day() === 0)) {
      const timeDifferenceFromMarketStart = selectedMarketTimings.start.add(1, 'days').diff(currentTime, 'milliseconds');
      setTime(Math.abs(timeDifferenceFromMarketStart));
    }

    if (currentTime.isBetween(selectedMarketTimings.start, selectedMarketTimings.stop)) {
      setButtonClassName("stop");
      setTime(0);
    }
  }

  function changeButtonStatus() {
    const dayOfWeek = moment().day();
    if (dayOfWeek === 6) {
      toast('Market closed on this day.');
      return;
    }
    else if (dayOfWeek === 0 && (selectedTimeZone !== 'Asia' && selectedTimeZone !== 'Asia + London')) {
      toast('Market closed on this day.');
      return;
    }

    setRunning(true);
    calculateMarketTimings();
  }

  function handleTimeZoneChange(event) {
    setSelectedTimeZone(event.target.value);
  }

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (buttonClassName === 'waiting-to-start') {
          setTime((prevTime) => {
            if (prevTime <= 0) {
              setButtonClassName("stop");
              return 0;
            }
            else {
              return prevTime - 10;
            }
          });
        }
        else {
          setTime((prevTime) => {
            return prevTime + 10;
          });
        }
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, buttonClassName]);

  return (
    <div className="row rowDivergent row01">
    <ToastContainer />
      <div className="col-12 col-xl-7">

        <div className="timeAccount">
          <div className="timeIntro">
            <h6>
              <i className="fas fa-chart-line"></i>
              <span>Auotomated Trading</span>
            </h6>
            <div className="buttons">
              {running ?
                (<button className={buttonClassName} onClick={() => setRunning(false)}>Stop</button>) :
                (<button onClick={() => changeButtonStatus()} disabled={selectedTimeZone === null ? true : false}>Start</button>)
              }
            </div>
          </div>

          <TimeLoc onTimeZoneChange={handleTimeZoneChange} isRunning={running} />

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
