import React, {useState} from "react";
import NumberFormat from 'react-number-format';

const ThousandField = ({ name, value }) => {

    return (
        <NumberFormat className="w100" name={`${name}`} defaultValue={`${value}`} displayType={'input'} thousandSeparator={true} />
    );

};

export default ThousandField;