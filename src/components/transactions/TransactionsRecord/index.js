import React from 'react'

function TransactionsRecord() {
    return (
        <div className="divergence-table table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Epic</th>
                        <th scope="col">Size</th>
                        <th scope="col">Profit</th>
                        <th scope="col">Cumulative</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22-03-18 13:26</td>
                        <td>USD_JPY</td>
                        <td>-2500000.00</td>
                        <td>-</td>
                        <td>130589.96</td>
                    </tr>
                    <tr>
                        <td>22-03-18 09:42</td>
                        <td>USD_JPY</td>
                        <td>-2500000.00</td>
                        <td>-</td>
                        <td>130589.96</td>
                    </tr>
                    <tr>
                        <td>22-03-18 02:36</td>
                        <td>XAU_USD</td>
                        <td>850.00</td>
                        <td></td>
                        <td>130589.96</td>
                    </tr>
                    <tr>
                        <td>22-03-25 05:52</td>
                        <td>USD_JPY</td>
                        <td>-150000.00</td>
                        <td>-</td>
                        <td>130589.96</td>
                    </tr>
                    <tr>
                        <td>22-03-31 16:49</td>
                        <td>USD_JPY</td>
                        <td>-150000.00</td>
                        <td className="success-text">681.97</td>
                        <td>130589.96</td>
                    </tr>
                    <tr>
                        <td>22-04-04 07:33</td>
                        <td>XAU_USD</td>
                        <td>-850.00</td>
                        <td className="success-text">453.36</td>
                        <td>130589.96</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsRecord