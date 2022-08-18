import React, {useState} from "react";
import NumberFormat from 'react-number-format';

const StopLoss = ({ name, defaultvalue }) => {

    const MAX_VAL = 600;
    const withValueLimit = ({ floatValue }) => floatValue <= MAX_VAL;

    return (
        <NumberFormat className='w30' name='stoploss' defaultValue={`${defaultvalue}`} displayType={'input'} isAllowed={withValueLimit}  />
    );

};

export default StopLoss;