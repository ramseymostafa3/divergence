import React from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumberFielder from 'components/common/numberfielder';
import Select from 'react-select';

const AlgorithmOptions = [
    { value: 'LinearRegression', label: 'LinearRegression'},
    { value: 'LSTM', label: 'LSTM'},
]

function PredictionTable() {
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
                        <td>High Resolution</td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                        <td><ToggleYesNo /></td>
                    </tr>
                    <tr>
                        <td>Algorithm</td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AlgorithmOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AlgorithmOptions} /></td>
                        <td><Select className="selectBoxTable" classNamePrefix="selectBoxStyle" options={AlgorithmOptions} /></td>
                    </tr>
                    <tr>
                        <td>Prediction Accuracy</td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                        <td><NumberFielder defaultvalue='0.9' /></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default PredictionTable;