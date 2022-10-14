import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';
import Select from 'react-select';

const ZeroOneOptions = [
    { value: '0', label: '0'},
    { value: '1', label: '1'}
]

const CurrencyOptions = [
    { value: 'USD', label: 'USD'},
    { value: 'GBP', label: 'GBP'},
]

function RSIEMAROCTable() {
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
                        <td>Cluster</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>K</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>Gain</td>
                        <td><NumberFielder defaultvalue='0.5' /></td>
                        <td><NumberFielder defaultvalue='0.5' /></td>
                        <td><NumberFielder defaultvalue='0.5' /></td>
                    </tr>
                    <tr>
                        <td>ST</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>SLTP</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>Tele</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>SC (Spread check)</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>Spread</td>
                        <td><NumberFielder defaultvalue='120' /></td>
                        <td><NumberFielder defaultvalue='120' /></td>
                        <td><NumberFielder defaultvalue='120' /></td>
                    </tr>
                    <tr>
                        <td>STDlots</td>
                        <td><NumberFielder defaultvalue='65' /></td>
                        <td><NumberFielder defaultvalue='65' /></td>
                        <td><NumberFielder defaultvalue='65' /></td>
                    </tr>
                    <tr>
                        <td>Order</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={ZeroOneOptions} /></td>
                    </tr>
                    <tr>
                        <td>AccBalance</td>
                        <td><NumberFielder defaultvalue='100' /></td>
                        <td><NumberFielder defaultvalue='100' /></td>
                        <td><NumberFielder defaultvalue='100' /></td>
                    </tr>
                    <tr>
                        <td>Acc Currency</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={CurrencyOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={CurrencyOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={CurrencyOptions} /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default RSIEMAROCTable;