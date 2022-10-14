import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';
import Select from 'react-select';

const GranularityOptions = [
    { value: 'MINUTE', label: 'MINUTE'},
    { value: 'HOUR', label: 'HOUR'},
    { value: 'DAY', label: 'DAY'}
]

function TradeTimingTable() {
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
                        <td>EMA Long</td>
                        <td><NumberFielder defaultvalue='12' /></td>
                        <td><NumberFielder defaultvalue='12' /></td>
                        <td><NumberFielder defaultvalue='12' /></td>
                    </tr>
                    <tr>
                        <td>EMA Short</td>
                        <td><NumberFielder defaultvalue='26' /></td>
                        <td><NumberFielder defaultvalue='26' /></td>
                        <td><NumberFielder defaultvalue='26' /></td>
                    </tr>
                    <tr>
                        <td>Signal Line</td>
                        <td><NumberFielder defaultvalue='9' /></td>
                        <td><NumberFielder defaultvalue='9' /></td>
                        <td><NumberFielder defaultvalue='9' /></td>
                    </tr>
                    <tr>
                        <td>Trade Timing</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Count</td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                    </tr>
                    <tr>
                        <td>Oversold threshold (RSI)</td>
                        <td><NumberFielder defaultvalue='20' /></td>
                        <td><NumberFielder defaultvalue='20' /></td>
                        <td><NumberFielder defaultvalue='20' /></td>
                    </tr>
                    <tr>
                        <td>Period</td>
                        <td><NumberFielder defaultvalue='6' /></td>
                        <td><NumberFielder defaultvalue='6' /></td>
                        <td><NumberFielder defaultvalue='6' /></td>
                    </tr>
                    <tr>
                        <td>Overbought threshold (RSI)</td>
                        <td><NumberFielder defaultvalue='75' /></td>
                        <td><NumberFielder defaultvalue='75' /></td>
                        <td><NumberFielder defaultvalue='75' /></td>
                    </tr>
                    <tr>
                        <td>Granularity</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                    </tr>
                    <tr>
                        <td>Rolling Window</td>
                        <td><NumberFielder defaultvalue='30' /></td>
                        <td><NumberFielder defaultvalue='30' /></td>
                        <td><NumberFielder defaultvalue='30' /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default TradeTimingTable;