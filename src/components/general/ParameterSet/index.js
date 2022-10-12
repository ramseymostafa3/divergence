import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import RiskManagementTable from '../RiskManagementTable';
import TradeTable from '../TradeTable';
import TradeTimingTable from '../TradeTimingTable';
import PredictionTable from '../PredictionTable';
import SentimentTable from '../SentimentTable';
import AccountTable from '../AccountTable';
import BackboneStrategyTable from '../BackboneStrategyTable';
import OptimisationTable from '../OptimisationTable';

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
            <TradeTable />
        </TabPanel>
        <TabPanel>
            <TradeTimingTable />
        </TabPanel>
        <TabPanel>
            <PredictionTable />
        </TabPanel>
        <TabPanel>
            <SentimentTable />
        </TabPanel>
        <TabPanel>
            <AccountTable />
        </TabPanel>
        <TabPanel>
            <BackboneStrategyTable />
        </TabPanel>
        <TabPanel>
            <OptimisationTable />
        </TabPanel>
    </Tabs> 

</div>
    
    )
}

export default ParameterSet