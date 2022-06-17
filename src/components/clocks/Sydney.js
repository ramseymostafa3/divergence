import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';

function Sydney () {
    const [time, setTime] = useState(new Date());
    const [sydneyTime, setSydneyTime] = useState(time.toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(()=>{
            setTime(new Date());
            let currentTime = moment(new Date());
            setSydneyTime(currentTime.tz('Australia/Sydney').format('LTS'));
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div className="clock-item">
            <Clock size="111" value={sydneyTime} />
            <label>Sydney</label>
        </div>
    );
}

export default Sydney;