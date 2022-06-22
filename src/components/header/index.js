import React, {useState} from 'react';
import UserImg from 'assets/media/user.jpg';
import Logo from 'assets/media/logo.png';

function Header (props) {
  return (
        <header id="page-header">
            <div className="content-header">
              
                <div className="headleft">
                  <div className="menuMob">
                    <button type="button" className="btn btn-dual" onClick={props.togglerFunction} data-toggle="layout" data-action="sidebar">
                      <i className="fa fa-fw fa-bars"></i>
                    </button>
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
                  
                  <p>Strategy: <span>Conservative</span></p>
                  <div className="headuser">
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