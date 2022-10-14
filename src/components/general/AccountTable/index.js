import React from "react";
import Select from 'react-select';

const AccountOptions = [
    { value: 'SPREADBET', label: 'SPREADBET'}
]

function AccountTable() {
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
                        <td>Account Type</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AccountOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AccountOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AccountOptions} /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default AccountTable;