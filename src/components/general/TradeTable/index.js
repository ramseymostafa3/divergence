import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';
import Select from 'react-select';

const TimeForceOptions = [
    { value: 'FOK', label: 'FOK'}
]

const OrderTypeOptions = [
    { value: 'MARKET', label: 'MARKET'}
]

const ExpireTypeOptions = [
    { value: 'DFB', label: 'DFB'}
]

function TradeTable() {
    return (
        <div className="divergence-table table-responsive mb-0">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className="mw-160">Parameter</th>
                        <th scope="col" className="mw-120">Conservative Strategy</th>
                        <th scope="col" className="mw-120">Moderate Strategy</th>
                        <th scope="col" className="mw-120">Aggressive Strategy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Time in force</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={TimeForceOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={TimeForceOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={TimeForceOptions} /></td>
                    </tr>
                    <tr>
                        <td>Order Type</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={OrderTypeOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={OrderTypeOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={OrderTypeOptions} /></td>
                    </tr>
                    <tr>
                        <td>Force Open</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Expire Type</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ExpireTypeOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ExpireTypeOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ExpireTypeOptions} /></td>
                    </tr>
                    <tr>
                        <td>Use RSI</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Trade Size</td>
                        <td><NumberFielder defaultvalue='2' /></td>
                        <td><NumberFielder defaultvalue='2' /></td>
                        <td><NumberFielder defaultvalue='2' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TradeTable;