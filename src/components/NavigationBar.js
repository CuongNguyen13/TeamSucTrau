/* ################################################################################################################################                                                                                                                                #
#    _____ _               _   _                                      _                           ___   ___ ___   ___              #
#   / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
#  | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
#  | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
#  | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



import React, { Component } from "react";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="/">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/mediastorage0943.appspot.com/o/Giao%20Tiep%20Nguoi%20May%202020%2FProject%20Nhom%2Flogo.png?alt=media&token=b13069ce-ca90-4025-ba05-5180e87d8e58"
                      alt="real estate news"
                    />
                  </a>

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

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="/">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-home"></i> Home
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="/search">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-search"></i> Search
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="about">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                          <i className="far fa-address-card"></i> About
                          </span>
                        </li>
                      </a>

                      {/* activeClassName="current_content" */}
                      <a className="nav-link" href="more">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          <span>
                            <i className="fa fa-info-circle"></i> More
                          </span>
                        </li>
                      </a>
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
