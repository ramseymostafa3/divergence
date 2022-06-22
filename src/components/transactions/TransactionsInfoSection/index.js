import React from 'react'

import BalancingProfitBg from './BalancingProfitBg';
import TradingAccount from 'components/home/HomeInfoSection/TradingAccount';

function TransactionsInfoSection() {
    return (
        <div className="transactions-info-section">
            <div className='row'>
                <div className='col-md-7 mb-4 mb-md-0'>
                    <BalancingProfitBg />
                </div>
                <div className='col-md-5'>
                    <div className='blockDivergent'>
                        <TradingAccount />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsInfoSection