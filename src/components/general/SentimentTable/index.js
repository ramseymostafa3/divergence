import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';

function SentimentTable() {
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
                        <td>Client Sentiment</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Client Sentiment Contrarian</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Client Sentiment value</td>
                        <td><NumberFielder defaultvalue='69' /></td>
                        <td><NumberFielder defaultvalue='69' /></td>
                        <td><NumberFielder defaultvalue='69' /></td>
                    </tr>
                    <tr>
                        <td>Sentiment Watermark</td>
                        <td><NumberFielder defaultvalue='40' /></td>
                        <td><NumberFielder defaultvalue='40' /></td>
                        <td><NumberFielder defaultvalue='40' /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default SentimentTable;