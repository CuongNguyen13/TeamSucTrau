import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="card text-justify text-center">
        <div className="card-header">
          <div
            className="card-cover"
            style={{
              background:
                "linear-gradient(to right, #17b439ea 20%, #05a3ff 100%)",
            }}
          ></div>
          <img
            className="card-avatar"
            src={this.props.avatar}
            alt="avatar"
          />
          <h1 className="card-fullname">{this.props.name}</h1>
          <h2 className="card-jobtitle">{this.props.MSSV}</h2>
        </div>
        <div className="card-main">
          <div className="card-section" id="about">
            <div className="card-content">
              <div className="card-subtitle">{this.props.chucVu}</div>
              <p className="card-desc text-justify">{this.props.moTa}</p>
            </div>
            <div class="social-container">
              <ul class="social-icons">
                <li>
                  <a href={this.props.webCaNhan}>
                    <i class="fa fa-link"></i>
                  </a>
                </li>
                <li>
                  <a href={this.props.twitter}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={this.props.github}>
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href={this.props.fb}>
                    <i className="fa fa-facebook" id="fb_icon"></i>
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
