import React, {useState} from "react";

function ToggleYesNo(){

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    const [isOff, setIsOff] = useState(true);

    return (
        <>
        <span onClick={() => { handleToggle(); setIsOff(!isOff); handleClick(); }} className={`pointer text-${isActive ? "green" : "red"}`}>{ isOff ? 'Yes' : 'No' }</span>
        {isShown && (
            <div className="showHide">
                <div className="fieldWrap">
                    <input className="inputfield" type="text" name="maxtrade" defaultValue={165000}/>
                    <input className="submit" type="submit" value="Submit" />
                </div>
            </div>
        )}
        </>
    );
};

export default ToggleYesNo;