import React from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleSidebar }) {
  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin5">
          <Link className="navbar-brand" to="/">
            <b className="logo-icon ps-2">SR</b>
            <span className="logo-text ms-2">SportRadar</span>
          </Link>
          <Link
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            to=""
            onClick={toggleSidebar}
          >
            <i className="ti-menu ti-close"></i>
          </Link>
        </div>

        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin5"
        >
          <ul className="navbar-nav float-start me-auto">
            <li className="nav-item d-none d-lg-block">
              <Link
                className="nav-link sidebartoggler waves-effect waves-light"
                to=""
                data-sidebartype="mini-sidebar"
                onClick={toggleSidebar}
              >
                <i className="mdi mdi-menu font-24"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
