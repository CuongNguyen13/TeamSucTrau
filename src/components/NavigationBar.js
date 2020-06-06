import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/baononglam.appspot.com/o/logo.png?alt=media&token=1d558644-819a-46ba-a53e-7fe78a40e920"
                      alt="bitexco tower Sai Gon logo"
                    />
                  </NavLink>

                  {/* menu button for mobile */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* ___________________________________________ */}
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <div
                        id="google_translate_element"
                        className="nav-link"
                      ></div>

                      <NavLink
                        activeClassName="current_content"
                        className="nav-link"
                        to="/home"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-home"></i> Home
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        activeClassName="current_content"
                        className="nav-link"
                        to="/search"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-search"></i> Search
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        activeClassName="current_content"
                        className="nav-link"
                        to="contact"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-address-card"></i> Contact
                          </span>
                        </li>
                      </NavLink>

                      <NavLink
                        activeClassName="current_content"
                        className="nav-link"
                        to="about"
                      >
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-info-circle"></i> About
                          </span>
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
