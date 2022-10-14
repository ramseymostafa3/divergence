import React from "react";
import NumberFielder from 'components/common/numberfielder';

function OptimisationTable() {
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
                        <td>Minimum weight for all assets</td>
                        <td><NumberFielder defaultvalue='0.05' /></td>
                        <td><NumberFielder defaultvalue='0.05' /></td>
                        <td><NumberFielder defaultvalue='0.05' /></td>
                    </tr>
                    <tr>
                        <td>Maximum weight for all assets</td>
                        <td><NumberFielder defaultvalue='0.1' /></td>
                        <td><NumberFielder defaultvalue='0.1' /></td>
                        <td><NumberFielder defaultvalue='0.1' /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default OptimisationTable;