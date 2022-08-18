import React, {useState} from "react";
import NumberFormat from 'react-number-format';

const MaxTrades = ({ name, defaultvalue }) => {

    const MAX_VAL = 10;
    const withValueLimit = ({ floatValue }) => floatValue <= MAX_VAL;

    return (
        <NumberFormat className='w30' name='maxtrades' defaultValue={`${defaultvalue}`} displayType={'input'} isAllowed={withValueLimit}  />
    );

};

export default MaxTrades;