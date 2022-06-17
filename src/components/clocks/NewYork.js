import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone';

function NewYork () {
    const [time, setTime] = useState(new Date());
    const [newYorkTime, setNewYorkTime] = useState(time.toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(()=>{
            setTime(new Date());
            let currentTime = moment(new Date());
            setNewYorkTime(currentTime.tz('America/New_York').format('LTS'));
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clock-item">
            <Clock size="111" value={newYorkTime}/>
            <label>Newyork</label>
        </div>
    );
}

export default NewYork;