import React, {useState} from 'react';
import UserImg from '../../assets/media/photos/user.jpg';
import Logo from '../../assets/media/photos/logo.png';

function Header () {
  const [isOpen, setIsOpen] = useState(false);
  function navbarToggler() {
    setIsOpen(!isOpen);
  }
  return (
        <header id="page-header">
            <div className="content-header">
              
                <div className="headleft">
                  <div class="menuMob">
                    <a className="logoMob" href="javascript:void(0)">
                      <img src={Logo} alt="Divergence" />
                    </a>
                  </div>

                  
                  <div className="menuDesktop">
                    <h3><span>Unlock the Pro Version</span><i className="fa fa-lock"></i></h3>
                    <form className="headerSearch" action="" method="POST">
                        <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                        <button type="button" className="btn btn-dual" data-toggle="layout" data-action="header_search_on">
                          <i className="fa fa-search"></i>
                        </button>
                    </form>
                  </div>
                </div>
              
                <div className="headright">
                  <button type="button" class="btn btn-dual" onClick={navbarToggler} data-toggle="layout" data-action="sidebar">
                    <i class="fa fa-fw fa-bars"></i>
                  </button>
                  <p>Strategy: <span>Conservative</span></p>
                  <div class="headuser">
                    <h5>Grace Brown</h5>
                    <a className="img-link mr-1" href="javascript:;">
                      <img className="img-avatar" src={UserImg} alt="" />
                      <span className="status online"></span>
                    </a>
                  </div>
                </div>
              
            </div>
    
            <div id="page-header-loader" className="overlay-header bg-header-dark">
              <div className="bg-white-10">
                <div className="content-header">
                  <div className="w-100 text-center">
                    <i className="fa fa-fw fa-sun fa-spin text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </header>
    )
}

export default Header;