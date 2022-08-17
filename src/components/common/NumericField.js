import React, {useState} from "react";

const NumericField = ({ name }) => {

    const min = 1;
    const max = 10;

    const [value, setValue] = useState(1);

    const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    };

    return (
        <input name={`${name}`} type="number" className="w40" value={value} onChange={handleChange} />
    );
};

export default NumericField;