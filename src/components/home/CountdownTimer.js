import React from "react";
import FlipCountdown from '@rumess/react-flip-countdown';

function CountdownTimer() {
    return (
        <FlipCountdown
            size='small'
            hourTitle='HH'
            minuteTitle='MM'
            secondTitle='SS' 
            hideYear
            hideMonth
            hideDay
            // hideHour
            // hideMinute
            // hideSecond
            endAt={'2022-12-12 01:26:58'} // Date/Time
        />
    );
    
}

export default CountdownTimer;