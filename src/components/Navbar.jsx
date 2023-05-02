import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav nav-pills bg-light col-lg-2 col-sm-12  col-md-2 d-md-block ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="../icomlogo.jpg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top "
          />
          icompass
          <h3>DashBoard</h3>
        </a>
        <br></br>
        <div className="sidebar-sticky  h-100" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-lg-0 flex-coloumn gap-3">
            <li className="navbar-item">
              <NavLink to="/UserProfile" className="nav-link p-2">
                User profile
              </NavLink>
            </li>
            <NavLink to="/Notification" className="nav-link p-2">
              Notification
            </NavLink>
            <li className="navbar-item ">
              <NavLink to="/Billing" className="nav-link p-2">
                Billing & Invoices
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/Plane" className="nav-link p-2">
                Plans & Addons
              </NavLink>
            </li>
            <li className="navbar-item "></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// col-lg-2 col-sm-12  col-md-2 d-none d-md-block
