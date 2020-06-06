import React, { Component } from "react";
import "./ProfileLeader.css";

class Profile extends Component {
  render() {
    return (
      <div className="card h-100 BaoBao text-justify text-center">
        <div className="card-header">
          <div
            className="card-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")',
            }}
          ></div>
          <img
            className="card-avatar"
            src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="avatar"
          />
          <h1 className="card-fullname">William Rocheald</h1>
          <h2 className="card-jobtitle">UI Developer</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">
                Whatever tattooed stumptown art party sriracha gentrify hashtag
                intelligentsia readymade schlitz brooklyn disrupt.
              </p>
            </div>
            <div class="social-container">
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-link"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
