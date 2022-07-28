import React, {useState} from "react";

function TradeTable() {
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
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td class="action">
                                <i class="fas fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>NZD/USD</td>
                            <td>16500000</td>
                            <td>-</td>
                            <td>1</td>
                            <td>Yes</td>
                            <td>Yes</td>
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