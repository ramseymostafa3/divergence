import Appstore from '../../assets/media/photos/appstore.png';
import Playstore from '../../assets/media/photos/googleplay.png';

function Footer () {
    return (
        <footer id="page-footer">
            <div className="content py-0">
              <div className="row font-size-sm align-items-center">
                <div className="col-sm-3 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right copyright">
                  &copy; <span data-toggle="year-copy"></span> Divergence Capital. All rights reserved.
                </div>
                <div className="col-sm-9 order-sm-1 text-center text-sm-left">
                  <div className="footer-text">
                    <span>Be the first to get the latest AI innovations in spread trading. <a href="javascript:;">Register for the App.</a></span>
                    <a href="javascript:;" className="downloadapp"><img src={Appstore} alt="App store" /></a>
                    <a href="javascript:;" className="downloadapp"><img src={Playstore} alt="Google Play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    )
}

export default Footer;