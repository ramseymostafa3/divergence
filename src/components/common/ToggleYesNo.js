import React, {useState} from "react";
import Switch from "react-switch";

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

    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <>
        {/*<span onClick={() => { handleToggle(); setIsOff(!isOff); handleClick(); }} className={`pointer text-${isActive ? "green" : "red"}`}>{ isOff ? 'Yes' : 'No' }</span>*/}
        <label className="labelSwitch">
            <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            height={16}
            width={32}
            /*offColor='#fa1d1d'*/
            onColor='#8b3d16'
            onHandleColor='#f8610e'
            />
            <span className={`pointer text-${checked ? "green" : "red"}`}>{checked ? "Yes" : "No"}</span>
        </label>
        <button className={`${checked ? "d-none" : "button"}`} type="sumit">Submit</button>
        

        {/*{isShown && (
            <div className="showHide">
                <div className="fieldWrap">
                    <input className="inputfield" type="text" name="maxtrade" defaultValue={165000}/>
                    <input className="submit" type="submit" value="Submit" />
                </div>
            </div>
        )}*/}
        </>
    );
};

export default ToggleYesNo;