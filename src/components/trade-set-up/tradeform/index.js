import React, {useState} from "react";
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TradeForm() {
    const options1 = [
        { value: 'Conservative', label: 'Conservative' },
        { value: 'Modern', label: 'Modern' },
        { value: 'Flat', label: 'Flat' }
    ]
    const options2 = [
        { value: 'All Brokers', label: 'All Brokers' },
        { value: 'Broker 01', label: 'Broker 01' },
        { value: 'Broker 02', label: 'Broker 02' }
    ]
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [lfShow, setLFShow] = useState(false);

    return (
        <div className="divTransaction">
            <div className='row align-items-center'>
                <div className='col-12 col-lg-6'>
                    <div class="fieldWrapper">
                        <label>Risk Profile</label>
                        <div className="fieldSet">
                            <Select className="selectBox" options={options1} />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div class="fieldWrapper">
                        <label>Broker</label>
                        <div className="fieldSet">
                            <Select className="selectBox" options={options2} />
                            <button type="submit">Add Broker</button>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div class="fieldWrapper">
                        <label>My Broker</label>
                        <ul class="buttonsAccount my-0">
                            <li>
                                <a href="javascript:;">IG (Live)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;">IG (Demo)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;">Oanda (Live)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;">Oanda (Demo)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                        </ul>
                        <Modal
                            show={lfShow}
                            onHide={() => setLFShow(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <Modal.Body>
                            <div className="modal-closebar">
                                <i className="fas fa-times" onClick={() => setLFShow(false)}></i>
                            </div>
                            <div className="modal-header">
                                <h2 className="modal-title">Credentials</h2>
                                <a href="javascript:;" className="modal-link">Test Connection</a>
                            </div>
                            <div className="row dualformRow">
                                <div className="col-12 col-lg-6 border-right-side">

                                    <h2>IG</h2>

                                    <div className="formWrapperCS01">
                                        <div className="fieldWrapper">
                                            <label>User Name</label>
                                            <input type="text" className="form-control" placeholder="User Name" />
                                        </div>

                                        <div className="fieldWrapper">
                                            <label>API Key</label>
                                            <input type="text" className="form-control" placeholder="API Key" />
                                        </div>

                                        <div className="fieldWrapper">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>

                                    <div className="buttonGroup">
                                        <button type="submit" className="button orange" onClick={() => setLFShow(false)}>Live</button>
                                        <button type="submit" className="button" onClick={() => setLFShow(false)}>Demo</button>
                                    </div>

                                </div>
                                <div className="col-12 col-lg-6">

                                    <h2>Oanda</h2>

                                    <div className="formWrapperCS01">
                                        <div className="fieldWrapper">
                                            <label>Token</label>
                                            <input type="text" className="form-control" placeholder="Token" />
                                        </div>

                                        <div className="fieldWrapper">
                                            <label>Default Account</label>
                                            <input type="text" className="form-control" placeholder="Default Account" />
                                        </div>
                                    </div>
                                    
                                    <div className="buttonGroup">
                                        <button type="submit" className="button orange" onClick={() => setLFShow(false)}>Live</button>
                                        <button type="submit" className="button" onClick={() => setLFShow(false)}>Demo</button>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TradeForm;