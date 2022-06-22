import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageTopbar({title}) {
    const navigate = useNavigate();
    return (
        <div className='topbar-wrap'>
            <h6 className='tw-title'>{title}</h6>
            <button onClick={() => navigate(-1)}><i className="fas fa-long-arrow-alt-left"></i> BACK</button>
        </div>
    )
}

export default PageTopbar