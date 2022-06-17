import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';

function Tokyo () {
    const [time, setTime] = useState(new Date());
    const [tokyoTime, setTokyoTime] = useState(time.toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(()=>{
            setTime(new Date());
            let currentTime = moment(new Date());
            setTokyoTime(currentTime.tz('Asia/Tokyo').format('LTS'));
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clock-item">
            <Clock size="111" value={tokyoTime}/>
            <label>Tokyo</label>
        </div>
    );
}

export default Tokyo;