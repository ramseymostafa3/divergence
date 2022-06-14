import React from 'react';
import Logo from '../../assets/media/photos/logo.png';

function Sidebar () {
    return (

      <nav id="sidebar" aria-label="Main Navigation">
          <div className="bg-header-dark">
            <div className="content-header">
              <a className="font-w600 text-white tracking-wide" href="index.html">
                <img src={Logo} alt="Divergence" />
              </a>
              <div>
                <a className="d-lg-none text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                  <i className="fa fa-times-circle"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="js-sidebar-scroll">
            <div className="content-side">
              <ul className="nav-main">
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="index.html">
                    <i className="nav-main-link-icon fa fa-user-secret "></i>
                    <span className="nav-main-link-name">Traider</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-info-circle"></i>
                    <span className="nav-main-link-name">About</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-comment-dots"></i>
                    <span className="nav-main-link-name">Faq</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-hand-point-up"></i>
                    <span className="nav-main-link-name">Subscriptions</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-play-circle"></i>
                    <span className="nav-main-link-name">Get Started</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-calendar-alt"></i>
                    <span className="nav-main-link-name">Calendar</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-lightbulb"></i>
                    <span className="nav-main-link-name">Investment Ideas</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-search"></i>
                    <span className="nav-main-link-name">Research</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-mouse-pointer"></i>
                    <span className="nav-main-link-name">Selection</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fa fa-graduation-cap"></i>
                    <span className="nav-main-link-name">Education</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link" href="javascript:;">
                    <i className="nav-main-link-icon fab fa-twitter-square"></i>
                    <span className="nav-main-link-name">Social Impact</span>
                  </a>
                </li>
              </ul>
              
              <div className="nav-main-widget">
                <h2>New to trading?</h2>
                <a href="javascript:;">Find out more</a>
              </div>
    
              
  
            </div>
  
            <ul className="lowerMenu">
              <li><a href="javascript:;"><i className="fa fa-cog"></i></a></li>
              <li><a href="javascript:;"><i className="fa fa-question-circle"></i></a></li>
              <li><a href="javascript:;"><i className="fas fa-sign-out-alt"></i></a></li>
            </ul>
  
          </div>
      </nav>

    )
}

export default Sidebar;