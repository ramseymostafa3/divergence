import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';

function RiskManagementTable() {
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
                        <td>Volatility Cap</td>
                        <td><NumberFielder defaultvalue='3' /></td>
                        <td><NumberFielder defaultvalue='1.9' /></td>
                        <td><NumberFielder defaultvalue='1.9' /></td>
                    </tr>
                    <tr>
                        <td>Use Margin Cap</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Use Spread Cap</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Spread Multiplier</td>
                        <td><NumberFielder defaultvalue='1.2' /></td>
                        <td><NumberFielder defaultvalue='1.2' /></td>
                        <td><NumberFielder defaultvalue='1.2' /></td>
                    </tr>
                    <tr>
                        <td>Limit Distance</td>
                        <td><NumberFielder defaultvalue='4' /></td>
                        <td><NumberFielder defaultvalue='4' /></td>
                        <td><NumberFielder defaultvalue='4' /></td>
                    </tr>
                    <tr>
                        <td>Margin Cap</td>
                        <td><NumberFielder defaultvalue='100' /></td>
                        <td><NumberFielder defaultvalue='100' /></td>
                        <td><NumberFielder defaultvalue='100' /></td>
                    </tr>
                    <tr>
                        <td>Guaranteed Stop</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Take Profit</td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                    </tr>
                    <tr>
                        <td>Stop Limit</td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='250' /></td>
                        <td><NumberFielder defaultvalue='250' /></td>
                    </tr>
                    <tr>
                        <td>Spread Cap</td>
                        <td><NumberFielder defaultvalue='-2' /></td>
                        <td><NumberFielder defaultvalue='-8' /></td>
                        <td><NumberFielder defaultvalue='-100' /></td>
                    </tr>
                    <tr>
                        <td>Stop Limit</td>
                        <td><NumberFielder defaultvalue='200' /></td>
                        <td><NumberFielder defaultvalue='250' /></td>
                        <td><NumberFielder defaultvalue='250' /></td>
                    </tr>
                    <tr>
                        <td>Volatility Floor</td>
                        <td><NumberFielder defaultvalue='0.15' /></td>
                        <td><NumberFielder defaultvalue='0.15' /></td>
                        <td><NumberFielder defaultvalue='0.48' /></td>
                    </tr>
                    <tr>
                        <td>Margin in use cap</td>
                        <td><NumberFielder defaultvalue='65' /></td>
                        <td><NumberFielder defaultvalue='65' /></td>
                        <td><NumberFielder defaultvalue='65' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RiskManagementTable;