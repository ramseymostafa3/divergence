import React, {useState} from "react";
import ToggleYesNo from 'components/common/ToggleYesNo';
import NumericField from 'components/common/NumericField';
import ThousandField from 'components/common/ThousandField';

function TradeTable() {
    const [isOff, setIsOff] = useState(true);
    const handleToggle = () => { setIsOff(!isOff);  };


    const min = 1;
    const max = 10;

    const [value, setValue] = useState(1);

    const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    };


    //setIsOff(prevCheck => !prevCheck);
    return (
        <div className="tradeTable">
            <div className="rowSubhead">
                <div className="searchWrap">
                    <input className="searchField" type="text" value="" placeholder="Search" />
                    <button className="searchButton" type="submit"><i className="fas fa-search"></i></button>
                </div>
                <a className="button" href="javascript:;">New Epic</a>
            </div>

            <div className="divergence-table table-responsive mb-0">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Epic</th>
                            <th scope="col">Position Size</th>
                            <th scope="col">Stop Loss</th>
                            <th scope="col">Max Trades</th>
                            <th scope="col">Auto Position Size</th>
                            <th scope="col">Auto Stop Loss</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'16500000'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'16000'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'15000'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'150'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'150050'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'10000'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td><ThousandField name={'positionsize'} value={'12000950'} /></td>
                            <td><NumericField name={'stoploss'} /></td>
                            <td><NumericField name={'maxtrades'} /></td>
                            <td><ToggleYesNo /></td>
                            <td><ToggleYesNo /></td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TradeTable;