import React, {useState} from "react";
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TradeForm() {
    const options1 = [
        { value: 'Conservative', label: 'Conservative' },
        { value: 'Moderate', label: 'Moderate' },
        { value: 'Aggressive', label: 'Aggressive' }
    ]
    const options2 = [
        { value: 'Oanda', label: 'Oanda' },
        { value: 'IG', label: 'IG' },
        { value: 'FXCM', label: 'FXCM' }
    ]

    const [selectedCategory, setSelectedCategory] = useState('iglive');

    const isIgLive      = selectedCategory === 'iglive';
    const isIgDemo      = selectedCategory === 'igdemo';
    const isOandaLive   = selectedCategory === 'oandalive';
    const isOandaDemo   = selectedCategory === 'oandademo';

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [lfShow1, setLFShow1] = useState(false);
    const [lfShow2, setLFShow2] = useState(false);
    const [lfShow3, setLFShow3] = useState(false);
    const [lfShow4, setLFShow4] = useState(false);

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
                                <a href="javascript:;" onClick={() => setSelectedCategory('iglive')} className={`categories ${isIgLive ? 'active' : ''}`}>IG (Live)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow1(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={() => setSelectedCategory('igdemo')} className={`categories ${isIgDemo ? 'active' : ''}`}>IG (Demo)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow2(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={() => setSelectedCategory('oandalive')} className={`categories ${isOandaLive ? 'active' : ''}`}>Oanda (Live)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow3(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={() => setSelectedCategory('oandademo')} className={`categories ${isOandaDemo ? 'active' : ''}`}>Oanda (Demo)</a>
                                <div className="buttonsLinks">
                                    <a href="javascript:;" onClick={() => setLFShow4(true)}>Credentials</a>
                                    <span>|</span>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                        </ul>
                        <Modal
                            show={lfShow1}
                            onHide={() => setLFShow1(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <Modal.Body>
                            <div className="modal-closebar">
                                <i className="fas fa-times" onClick={() => setLFShow1(false)}></i>
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
                                        <button type="submit" className="button orange">Live</button>
                                        <button type="submit" className="button">Demo</button>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button">Demo</button>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>
                        </Modal>

                        <Modal
                            show={lfShow2}
                            onHide={() => setLFShow2(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <Modal.Body>
                            <div className="modal-closebar">
                                <i className="fas fa-times" onClick={() => setLFShow2(false)}></i>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button orange">Demo</button>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button">Demo</button>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>
                        </Modal>

                        <Modal
                            show={lfShow3}
                            onHide={() => setLFShow3(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <Modal.Body>
                            <div className="modal-closebar">
                                <i className="fas fa-times" onClick={() => setLFShow3(false)}></i>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button">Demo</button>
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
                                        <button type="submit" className="button orange">Live</button>
                                        <button type="submit" className="button">Demo</button>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>
                        </Modal>

                        <Modal
                            show={lfShow4}
                            onHide={() => setLFShow4(false)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                        <Modal.Body>
                            <div className="modal-closebar">
                                <i className="fas fa-times" onClick={() => setLFShow4(false)}></i>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button">Demo</button>
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
                                        <button type="submit" className="button">Live</button>
                                        <button type="submit" className="button orange">Demo</button>
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