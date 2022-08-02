import React, {useState} from "react";

function ToggleYesNo(){
    const [isOff, setIsOff] = useState(true);
    return (
        <span onClick={() => setIsOff(!isOff)}>{ isOff ? 'Yes' : 'No' }</span>
    );
};

export default ToggleYesNo;