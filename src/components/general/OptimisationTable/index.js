import React from "react";
import NumberFielder from 'components/common/numberfielder';
import NumberFormat from 'react-number-format';

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
                    <tr>
                        <td>Fasts</td>
                        
                        <td><NumberFormat className='w100' name="" defaultValue='45' displayType={'input'}  /></td>
                        <td><NumberFormat className='w100' name="" defaultValue='60' displayType={'input'}  /></td>
                        <td><NumberFormat className='w100' name="" defaultValue='1' displayType={'input'}  /></td>
                    </tr>
                    <tr>
                        <td>Slows</td>
                        <td><NumberFormat className='w100' name="" defaultValue='189' displayType={'input'}  /></td>
                        <td><NumberFormat className='w100' name="" defaultValue='210' displayType={'input'}  /></td>
                        <td><NumberFormat className='w100' name="" defaultValue='1' displayType={'input'}  /></td>
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