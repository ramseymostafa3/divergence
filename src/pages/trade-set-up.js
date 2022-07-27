import React, {useState} from "react";
import Select from 'react-select'

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
                                    <label>Risk Profile</label>
                                    <div className="fieldSet">
                                        <Select className="selectBox" options={options2} />
                                        <button type="submit">Add Broker</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="fieldWrapper">
                                    <label>Risk Profile</label>
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