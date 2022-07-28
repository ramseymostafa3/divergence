import React, {useState} from "react";

import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import PageTopbar from 'components/common/PageTopbar';
import TradeForm from 'components/trade-set-up/tradeform';
import TradeSlider from 'components/trade-set-up/tradeslider';
import TradeTable from 'components/trade-set-up/tradetable';
import BalancingProfitBg from 'components/transactions/TransactionsInfoSection/BalancingProfitBg';
import TradeCluster from 'components/trade-set-up/tradecluster';
import TradeReturn from 'components/trade-set-up/tradereturn';
import TradeVolatility from 'components/trade-set-up/tradevolatility';

function TradeSetUp() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarToggler = () => {
        setIsOpen(!isOpen);
    }
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
                        <div className='col-12 col-lg-7 mb-4 mb-md-0'>
                            <TradeForm />
                            <TradeSlider />
                            <TradeTable/>
                            <div>
                                <BalancingProfitBg />
                            </div>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <TradeCluster />
                            <TradeReturn />
                            <TradeVolatility />
                        </div>
                    </div>
                    <ul className='pagination'>
                        <li><i className="fas fa-angle-left"></i></li>
                        <li className='active'><span>1</span></li>
                        <li><i className="fas fa-angle-right"></i></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default TradeSetUp;