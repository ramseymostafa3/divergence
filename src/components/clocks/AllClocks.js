import React from 'react';
import LondonClock from "./LondonClock";
import NewYork from "./NewYork";
import Tokyo from "./Tokyo";
import Sydney from "./Sydney";

function AllClocks () {
    return (
        <div className="clocks-wrap">
            <LondonClock />
            <NewYork />
            <Tokyo />
            <Sydney />
        </div>
    );
}

export default AllClocks;