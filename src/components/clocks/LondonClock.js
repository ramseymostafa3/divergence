import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';

function LondonClock() {
    const [time, setTime] = useState(new Date());
    const [londonTime, setLondonTime] = useState(time.toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(()=>{
            setTime(new Date());
            let currentTime = moment(new Date());
            setLondonTime(currentTime.tz('Europe/London').format('LTS'));
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clock-item">
            <Clock size="111" value={londonTime}/>
            <label>London</label>
        </div>
    )
}

export default LondonClock;