import React, {useState} from "react";
import Select from 'react-select'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from '@mui/material/Slider';

import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import PageTopbar from 'components/common/PageTopbar';
import BalancingProfitBg from 'components/transactions/TransactionsInfoSection/BalancingProfitBg';

function TradeSetUp() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarToggler = () => {
        setIsOpen(!isOpen);
    }
    const options1 = [
        { value: 'Conservative', label: 'Conservative' },
        { value: 'Modern', label: 'Modern' },
        { value: 'Flat', label: 'Flat' }
    ]
    const options2 = [
        { value: 'All Brokers', label: 'All Brokers' },
        { value: 'Broker 01', label: 'Broker 01' },
        { value: 'Broker 02', label: 'Broker 02' }
    ]
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div
        id="page-container"
        className="sidebar-dark page-header-fixed main-content-narrow"
      >
        <Sidebar sidebarState={isOpen} togglerFunction={navbarToggler} />
        <Header togglerFunction={navbarToggler} />
  
        <main id="main-container">
          <div className="content">
            <PageTopbar title={"Trade Set Up"} />
            <div class="row">
                <div className='col-md-7 mb-4 mb-md-0'>

                    <div className="divTransaction">
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-6'>
                                <div class="fieldWrapper">
                                    <label>Risk Profile</label>
                                    <div className="fieldSet">
                                        <Select className="selectBox" options={options1} />
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div class="fieldWrapper">
                                    <label>Broker</label>
                                    <div className="fieldSet">
                                        <Select className="selectBox" options={options2} />
                                        <button type="submit">Add Broker</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="fieldWrapper">
                                    <label>My Broker</label>
                                    <ul class="buttonsAccount my-0">
                                        <li>
                                            <a href="javascript:;">IG (Live)</a>
                                            <div className="buttonsLinks">
                                                <a href="javascript:;">Credentials</a>
                                                <span>|</span>
                                                <a href="javascript:;">Delete</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">IG (Demo)</a>
                                            <div className="buttonsLinks">
                                                <a href="javascript:;">Credentials</a>
                                                <span>|</span>
                                                <a href="javascript:;">Delete</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Oanda (Live)</a>
                                            <div className="buttonsLinks">
                                                <a href="javascript:;">Credentials</a>
                                                <span>|</span>
                                                <a href="javascript:;">Delete</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Oanda (Demo)</a>
                                            <div className="buttonsLinks">
                                                <a href="javascript:;">Credentials</a>
                                                <span>|</span>
                                                <a href="javascript:;">Delete</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider
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

                        
                    <div className="rowSubhead">
                        <div className="searchWrap">
                            <input className="searchField" type="text" value="" placeholder="Search" />
                            <button className="searchButton" type="submit"><i className="fas fa-search"></i></button>
                        </div>
                        <a className="button" href="javascript:;">New Epic</a>
                    </div>

                    <div className="divergence-table table-responsive mb-0">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Epic</th>
                                    <th scope="col">Position Size</th>
                                    <th scope="col">Stop Loss</th>
                                    <th scope="col">Max Trades</th>
                                    <th scope="col">Auto Position Size</th>
                                    <th scope="col">Auto Stop Loss</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>NZD/USD</td>
                                    <td>16500000</td>
                                    <td>-</td>
                                    <td>1</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td class="action">
                                        <i class="fas fa-trash-alt"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div>
                    <BalancingProfitBg />
                    </div>

                </div>
                <div className='col-md-5'>
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
                                            <h3>I1</h3>
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
                                            <h3>I2</h3>
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
                                            <h3>I3</h3>
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
                                            <h3>I4</h3>
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
                                            <h3>I5</h3>
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
                                            <h3>I6</h3>
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
                                            <h3>I7</h3>
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
                                            <h3>I8</h3>
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
                                            <h3>C1</h3>
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
                                            <h3>C2</h3>
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
                                            <h3>C3</h3>
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
                                            <h3>C4</h3>
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
                                            <h3>C5</h3>
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
                                            <h3>C6</h3>
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
                                            <h3>C7</h3>
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
                                            <h3>C8</h3>
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
                </div>
            </div>
            <ul className='pagination'>
            <li><i class="fas fa-angle-left"></i></li>
            <li className='active'><span>1</span></li>
            <li><i class="fas fa-angle-right"></i></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
    );
}

export default TradeSetUp;