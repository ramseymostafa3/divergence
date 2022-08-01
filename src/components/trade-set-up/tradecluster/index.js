import React, {useState} from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TradeCluster() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="tabsTrade">
            <TabList>
                <Tab>Instrument</Tab>
                <Tab>Cluster</Tab>
            </TabList> 

            <TabPanel>
                <div className="divergence-table table-responsive mb-0 tableTrade">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>GBP/JPY</td>
                                <td>1.28</td>
                                <td className="green">38</td>
                                <td className="green">30</td>
                                <td>1.9</td>
                                <td><i className="fas fa-plus button"></i></td>
                                <td><i className="fas fa-minus button"></i></td>
                                <td className="tdSearch"><i className="fas fa-search"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rowStatus">
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>NZD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>USD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>AUD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>NZD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>AUD/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/AUD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/GBP</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
            <div className="divergence-table table-responsive mb-0 tableTrade">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>GBP/JPY</td>
                                <td>1.28</td>
                                <td className="green">38</td>
                                <td className="green">30</td>
                                <td>1.9</td>
                                <td><i className="fas fa-plus button"></i></td>
                                <td><i className="fas fa-minus button"></i></td>
                                <td className="tdSearch"><i className="fas fa-search"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rowStatus">
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>AUD/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/AUD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>EUR/GBP</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>NZD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>USD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>AUD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusLeft">
                                <h3>NZD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusRight">
                                <p>Volatility</p>
                                <span className="status red">0.08774624</span>
                                <p>Return</p>
                                <span className="status green">0.10786262</span>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default TradeCluster;