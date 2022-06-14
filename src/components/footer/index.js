import React from 'react';
import Appstore from '../../assets/media/photos/appstore.png';
import Playstore from '../../assets/media/photos/googleplay.png';

function Footer () {
    return (
        <footer id="page-footer">
            <div className="content py-0">
              <div className="row font-size-sm align-items-center">
                <div className="col-lg-3 order-lg-2 mb-1 mb-lg-0 text-center text-lg-right copyright">
                  &copy; <span data-toggle="year-copy"></span> Divergence Capital. <span class="reserved">All rights reserved.</span>
                </div>
                <div className="col-lg-9 order-lg-1 text-center text-lg-left">
                  <div className="footer-text">
                    <span>Be the first to get the latest AI innovations in spread trading. <a href="javascript:;">Register for the App.</a></span>
                    <div>
                      <a href="javascript:;" className="downloadapp"><img src={Appstore} alt="App store" /></a>
                      <a href="javascript:;" className="downloadapp"><img src={Playstore} alt="Google Play" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    )
}

export default Footer;