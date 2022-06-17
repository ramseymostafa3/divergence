import React from 'react';
import Appstore from '../../assets/media/photos/appstore.png';
import Playstore from '../../assets/media/photos/googleplay.png';

function Footer () {
    return (
        <footer id="page-footer">
            <div className="content py-0">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="footer-text">
                    <span>Be the first to get the latest AI innovations in spread trading. <a href="javascript:;">Register for the App.</a></span>
                    <div className="footerButtons">
                      <a href="javascript:;" className="downloadapp"><img src={Appstore} alt="App store" /></a>
                      <a href="javascript:;" className="downloadapp"><img src={Playstore} alt="Google Play" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 copyright">
                  &copy; <span data-toggle="year-copy"></span> Divergence Capital. <span className="reserved">All rights reserved.</span>
                </div>
              </div>
            </div>
          </footer>
    )
}

export default Footer;