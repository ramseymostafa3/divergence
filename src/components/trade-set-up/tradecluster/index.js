import React, {useState} from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function TradeCluster() {
    const [tabIndex, setTabIndex] = useState(0);
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);
    
        // 👇️ or simply set it to true
        // setIsShown(true);
    };
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
                                <td className="tdSearch"><i onClick={() => { handleClick(); }} className="fas fa-search pointer"></i></td>
                            </tr>
                        </tbody>
                    </table>
                    {isShown && (
                        <div className="showHide">
                            <div className="fieldWrap fullWidth">
                                <input className="inputfield" type="text" name="maxtrade" placeholder="Search here..."/>
                                <input className="submit" type="submit" value="Submit" />
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="rowStatus">
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>NZD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">-0.02%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>USD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.16%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>AUD/JPY</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.02%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>NZD/CAD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.62%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>AUD/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.73%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>EUR/AUD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">-0.59%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>EUR/USD</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>EUR/GBP</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">-0.26%</span>
                                </div>
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
                            <div className="statusUp">
                                <h3>C1</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C2</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C3</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C4</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C5</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C6</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C7</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colStatus">
                        <div className="divStatus">
                            <div className="statusUp">
                                <h3>C8</h3>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                            <div className="statusDown">
                                <div className="stateV">
                                    <p>Volatility</p>
                                    <span className="status red">0.08774624</span>  
                                </div>
                                <div className="stateR">
                                    <p>Return</p>
                                    <span className="status green">0.10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default TradeCluster;