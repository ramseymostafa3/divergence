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
    start: moment().set({ hour: 7, minute: 0, second: 0, millisecond: 0 }),
    stop: moment().set({ hour: 17, minute: 0, second: 0, millisecond: 0 }),
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
  const [timeDifferenceFromMarketStop, setTimeDifferenceFromMarketStop] = useState(null);

  function calculateMarketTimings() {
    setTime(0);
    const nativeTimeNow = new Date().toLocaleString('en-US', { timeZone: 'Africa/Abidjan' });
    console.log('nativeTimeNow', nativeTimeNow);
    const currentTime = moment(nativeTimeNow);
    // const currentTime = moment(nativeTimeNow).set({ hour: 15, minute: 59, second: 59, millisecond: 0 }); // only for testing
    console.log('currentTime', currentTime);
    setButtonClassName("waiting-to-start");
    const selectedMarketStart = moment(MARKET_TIMINGS[selectedTimeZone].start);
    const selectedMarketStop = moment(MARKET_TIMINGS[selectedTimeZone].stop);
    if (currentTime.isAfter(selectedMarketStart) && !currentTime.isBetween(selectedMarketStart, selectedMarketStop)) {
      if (selectedTimeZone !== 'Asia' && selectedTimeZone !== 'Asia + London') {
        selectedMarketStart.add(1, 'days');
      }
    }
    let timeDifferenceFromMarketStart = selectedMarketStart.diff(currentTime, 'milliseconds');
    let timeDifferenceFromMarketStop = selectedMarketStop.diff(currentTime, 'milliseconds');
    setTimeDifferenceFromMarketStop(timeDifferenceFromMarketStop);
    console.log('market start', selectedMarketStart);
    console.log('market stop', selectedMarketStop);
    timeDifferenceFromMarketStart = timeDifferenceFromMarketStart - (timeDifferenceFromMarketStart % 10);
    console.log('timeDifferenceFromMarketStart', timeDifferenceFromMarketStart);
    console.log('timeDifferenceFromMarketStop', timeDifferenceFromMarketStop);
    if (timeDifferenceFromMarketStart > 0) {
      setTime(timeDifferenceFromMarketStart);
    }
    if (selectedTimeZone === 'Asia + London' && timeDifferenceFromMarketStart < 0 && ((!currentTime.isBetween(selectedMarketStart, selectedMarketStop)) || currentTime.day() === 0)) {
      selectedMarketStart.add(1, 'days').diff(currentTime, 'milliseconds');
      setTimeDifferenceFromMarketStop(selectedMarketStop.add(1, 'days').diff(currentTime, 'milliseconds'));
      console.log(running, time);
      startTimer();
    }

    if (currentTime.isBetween(selectedMarketStart, selectedMarketStop)) {
      console.log('current time between market timings');
      startTimer();
    }
  }

  function changeButtonStatus() {
    // const currentTime = moment(4, 'DD').set({ hour: 13, minute: 0, second: 0, millisecond: 0 }); // only for testing
    const dayOfWeek = moment().day();
    if (dayOfWeek === 6) {
      toastStatus('Market closed on this day.');
      return;
    }
    else if (dayOfWeek === 0 && (selectedTimeZone !== 'Asia' && selectedTimeZone !== 'Asia + London')) {
      toastStatus('Market closed on this day.');
      return;
    }

    setRunning(true);
    calculateMarketTimings();
  }

  function handleTimeZoneChange(event) {
    setSelectedTimeZone(event.target.value);
  }

  function startTimer() {
    console.log('startTimer');
    setButtonClassName("stop");
  }

  function stopTimer() {
    console.log('stopTimer', time);
    setTime(0);
    setRunning(false);
  }

  function toastStatus(text) {
    toast(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
            if (prevTime >= timeDifferenceFromMarketStop) {
              console.log('stopping timer because current time has exceeded market stop time', prevTime, timeDifferenceFromMarketStop);
              // stopTimer();
              setRunning(false)
              return 0;
            }
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
      <ToastContainer theme={'dark'} />
      <div className="col-12 col-xl-7">

        <div className="timeAccount">
          <div className="timeIntro">
            <h6>
              <i className="fas fa-chart-line"></i>
              <span>Auotomated Trading</span>
            </h6>
            <div className="buttons">
              {running ?
                (<button className={buttonClassName} onClick={stopTimer}>Stop</button>) :
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
