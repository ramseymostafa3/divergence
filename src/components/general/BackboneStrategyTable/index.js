import React from "react";
import NumberFielder from 'components/common/numberfielder';
import Select from 'react-select';

const GranularityOptions = [
    { value: 'MINUTE_15', label: 'MINUTE_15'},
    { value: 'HOUR', label: 'HOUR'},
    { value: 'DAY', label: 'DAY'}
]

function BackboneStrategyTable() {
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
                        <td>RSI Granularity</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                    </tr>
                    <tr>
                        <td>RSI Window</td>
                        <td><NumberFielder defaultvalue='15' /></td>
                        <td><NumberFielder defaultvalue='15' /></td>
                        <td><NumberFielder defaultvalue='15' /></td>
                    </tr>
                    <tr>
                        <td>Cond 1 Window</td>
                        <td><NumberFielder defaultvalue='21' /></td>
                        <td><NumberFielder defaultvalue='21' /></td>
                        <td><NumberFielder defaultvalue='21' /></td>
                    </tr>
                    <tr>
                        <td>OVERBOUGHT</td>
                        <td><NumberFielder defaultvalue='75' /></td>
                        <td><NumberFielder defaultvalue='75' /></td>
                        <td><NumberFielder defaultvalue='75' /></td>
                    </tr>
                    <tr>
                        <td>Cond 1 Granularity</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                    </tr>
                    <tr>
                        <td>Cond 2 Granularity</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                    </tr>
                    <tr>
                        <td>Pin Bar Granularity</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={GranularityOptions} /></td>
                    </tr>
                    <tr>
                        <td>Cond 2 Window</td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                    </tr>
                    <tr>
                        <td>Cond 1 Fast EMA</td>
                        <td><NumberFielder defaultvalue='8' /></td>
                        <td><NumberFielder defaultvalue='8' /></td>
                        <td><NumberFielder defaultvalue='8' /></td>
                    </tr>
                    <tr>
                        <td>Cond 2 Fast EMA</td>
                        <td><NumberFielder defaultvalue='50' /></td>
                        <td><NumberFielder defaultvalue='50' /></td>
                        <td><NumberFielder defaultvalue='50' /></td>
                    </tr>
                    <tr>
                        <td>Cond 1 Slow EMA</td>
                        <td><NumberFielder defaultvalue='21' /></td>
                        <td><NumberFielder defaultvalue='21' /></td>
                        <td><NumberFielder defaultvalue='21' /></td>
                    </tr>
                    <tr>
                        <td>Cond 2 Slow EMA</td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='200' /></td>
                    </tr>
                    <tr>
                        <td>RSI Period</td>
                        <td><NumberFielder defaultvalue='6' /></td>
                        <td><NumberFielder defaultvalue='6' /></td>
                        <td><NumberFielder defaultvalue='6' /></td>
                    </tr>
                    <tr>
                        <td>OVERSOLD</td>
                        <td><NumberFielder defaultvalue='20' /></td>
                        <td><NumberFielder defaultvalue='20' /></td>
                        <td><NumberFielder defaultvalue='20' /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default BackboneStrategyTable;