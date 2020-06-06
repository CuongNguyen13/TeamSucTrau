import React, { Component } from "react";
import Profile from "./Profile.js";
import ProfileLeader from "./ProfileLeader.js";
import "./Profile.css";

class Contact extends Component {
  render() {
    return (
      <div className="container group_card_profile">
          <div id="align-top"></div>

          <div className="row">
            <div className="col-lg-4 ">
              <div className="row h-100 py-2">
              <div className="col-12 p-1 h-100">
                  <ProfileLeader/>
              </div>
            </div>
            </div>
            <div className="col-lg-8 col-12 h-50">
              <div className="row">
                <div className="col-lg-6 col-sm-6 h-50 py-2">
                  <Profile />
                </div>
                <div className="col-lg-6 col-sm-6 h-50 py-2">
                  <Profile />
                </div>
                <div className="col-lg-6 col-sm-6 h-50 py-2">
                  <Profile />
                </div>
                <div className="col-lg-6 col-sm-6  h-50 py-2">
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
