import React, {useState} from "react";
import Slider from '@mui/material/Slider';

function TradeSlider() {
    return (
        <Slider
            className="mt-2 "
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{
            color: '#6f51ff',
            "& .MuiSlider-thumb": {
                height: 14,
                width: 14
                }
            }}
        />
    );
}

export default TradeSlider;