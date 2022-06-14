import React, {useState} from 'react';

function TimeIntro () {
    const [isStart, setIsStart] = useState(false);
    return (
        <div className="timeIntro">
            <h6>
                <i className="fas fa-chart-line"></i>
                <span>Auotomated Trading</span>
            </h6>
            <a href="javascript:;" onClick={()=> setIsStart(!isStart)} className={isStart === true ? 'stop button' : 'button'}>
                {isStart === true ? 'Stop' : 'Start'}
            </a>
        </div>
    )
}

export default TimeIntro;