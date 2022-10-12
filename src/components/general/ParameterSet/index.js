import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import RiskManagementTable from '../RiskManagementTable';

function ParameterSet() {
    const [tabIndex, setTabIndex] = useState(0);
    return (

<div className="divergence-table table-responsive">
        
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>Risk Management</Tab>
            <Tab>Trade</Tab>
            <Tab>Trade Timing</Tab>
            <Tab>Prediction</Tab>
            <Tab>Sentiment</Tab>
            <Tab>Account</Tab>
            <Tab>Backbone Strategy</Tab>
            <Tab>Optimisation</Tab>
        </TabList>
        <TabPanel>
            <RiskManagementTable />
        </TabPanel>
        <TabPanel>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Status</th>
                        <th scope="col" className="mw-120">Epic</th>
                        <th scope="col" className="mw-160">Open Time</th>
                        <th scope="col" className="mw-160">Close Time</th>
                        <th scope="col">Duration</th>
                        <th scope="col" className="mw-120">Entry Price</th>
                        <th scope="col" className="mw-120">Exit Price</th>
                        <th scope="col">SL</th>
                        <th scope="col">TP</th>
                        <th scope="col" className="mw-120">Buy Filled</th>
                        <th scope="col" className="mw-120">Sell Filled</th>
                        <th scope="col" className="mw-120">Profit</th>
                        <th scope="col" className="mw-120">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1.3117</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="green">1009.86</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1901.8500</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="red">-5250.20</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1.3117</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="green">1009.86</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1901.8500</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="red">-5250.20</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1.3117</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="green">1009.86</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="red">CLOSED</td>
                        <td>USD_JPY</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>22-03-17 08:01:56 AM</td>
                        <td>36:24</td>
                        <td class="green">1901.8500</td>
                        <td class="red">1904.8690</td>
                        <td>-</td>
                        <td>-</td>
                        <td>125000.00</td>
                        <td>250000.00</td>
                        <td class="red">-5250.20</td>
                        <td class="action">
                            <i class="fas fa-times"></i>
                            <i class="fas fa-arrow-right"></i>
                            <i class="fas fa-chart-line"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </TabPanel>
    </Tabs> 

</div>
    
    )
}

export default ParameterSet