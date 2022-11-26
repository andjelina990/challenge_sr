import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <aside className="left-sidebar" data-sidebarbg="skin5">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav" className="pt-4">
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/"
                aria-expanded="false"
              >
                <i className="mdi mdi-view-dashboard"></i>
                <span className="hide-menu">Overview</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link waves-effect waves-dark sidebar-link"
                to="/add-event"
                aria-expanded="false"
              >
                <i className="mdi mdi-chart-bar"></i>
                <span className="hide-menu">Add Event</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Navigation;
