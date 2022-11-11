import React from 'react';
import Logo from 'assets/media/logo.png';
import { Link } from "react-router-dom";
import { selectIsAdmin } from '../../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

function Sidebar(props) {
  const isAdmin = useSelector(selectIsAdmin);
  const logout = () => {
    console.log('logout');
    localStorage.removeItem('credentials');
    window.location.replace('/');
  }
  return (

    <nav id="sidebar" aria-label="Main Navigation" className={`${props.sidebarState === true ? 'menu-open' : ''}`}>
      <div className="bg-header-dark">
        <div className="content-header">
          <Link className="font-w600 text-white tracking-wide" to="/">
            <img src={Logo} alt="Divergence" />
          </Link>
          <div>
            <div className="text-white linkPointer" onClick={props.togglerFunction}>
              <i className="fa fa-times-circle"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="js-sidebar-scroll">
        <div className="content-side">
          <ul className="nav-main">
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/">
                <i className="nav-main-link-icon fa fa-user-secret "></i>
                <span className="nav-main-link-name">Traider</span>
              </Link>
            </li>
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/tradesetup">
                <i className="nav-main-link-icon fa fa-mouse-pointer"></i>
                <span className="nav-main-link-name">Trade Setup</span>
              </Link>
            </li>
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/">
                <i className="nav-main-link-icon fa fa-info-circle"></i>
                <span className="nav-main-link-name">About</span>
              </Link>
            </li>
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/">
                <i className="nav-main-link-icon fa fa-comment-dots"></i>
                <span className="nav-main-link-name">Faq</span>
              </Link>
            </li>
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/">
                  <i className="nav-main-link-icon fa fa-hand-point-up"></i>
                  <span className="nav-main-link-name">Subscriptions</span>
                </Link>
              </li>
            }
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/">
                <i className="nav-main-link-icon fa fa-play-circle"></i>
                <span className="nav-main-link-name">Get Started</span>
              </Link>
            </li>
            <li className="nav-main-item">
              <Link className="nav-main-link" to="/">
                <i className="nav-main-link-icon fa fa-calendar-alt"></i>
                <span className="nav-main-link-name">Calendar</span>
              </Link>
            </li>
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/">
                  <i className="nav-main-link-icon fa fa-lightbulb"></i>
                  <span className="nav-main-link-name">Investment Ideas</span>
                </Link>
              </li>
            }
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/">
                  <i className="nav-main-link-icon fa fa-search"></i>
                  <span className="nav-main-link-name">Research</span>
                </Link>
              </li>
            }
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/">
                  <i className="nav-main-link-icon fa fa-graduation-cap"></i>
                  <span className="nav-main-link-name">Education</span>
                </Link>
              </li>
            }
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/">
                  <i className="nav-main-link-icon fab fa-twitter-square"></i>
                  <span className="nav-main-link-name">Social Impact</span>
                </Link>
              </li>
            }
            {isAdmin &&

              <li className="nav-main-item">
                <Link className="nav-main-link" to="/general">
                  <i className="nav-main-link-icon fas fa-user-circle"></i>
                  <span className="nav-main-link-name">General</span>
                </Link>
              </li>
            }
            {isAdmin &&
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/admin">
                  <i className="nav-main-link-icon fas fa-solar-panel"></i>
                  <span className="nav-main-link-name">Admin Panel</span>
                </Link>
              </li>
            }
          </ul>

          <div className="nav-main-widget">
            <h2>New to trading?</h2>
            <Link to="/">Find out more</Link>
          </div>

        </div>

        <ul className="lowerMenu">
          <li><Link to="/"><i className="fa fa-cog"></i></Link></li>
          <li><Link to="/"><i className="fa fa-question-circle"></i></Link></li>
          <li><Link to="/" onClick={logout}><i className="fas fa-sign-out-alt"></i></Link></li>
        </ul>

      </div>
    </nav>

  )
}

export default Sidebar;