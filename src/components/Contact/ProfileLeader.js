import React, { Component } from "react";
import "./ProfileLeader.css";

class Profile extends Component {
  render() {
    return (
      <div className="card h-100 BaoBao text-justify text-center  ">
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
            src=""
            alt="avatar"
          />
          <h1 className="card-fullname">Trần Thanh Bảo</h1>
          <h2 className="card-jobtitle">18130017</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">CEO and Founder</div>
              <p className="card-desc text-justify">
                    Đối với nhà đầu tư việc kịp thời cập nhật tin tức về thị trường
                bất động sản luôn là yếu tố đặt lên hàng đầu, nhận thấy khó khăn
                đó, Trần Thanh Bảo cùng với đội ngũ của mình đã lập nên nền tảng
                số cung cấp những tin tức nhanh chóp kịp thời và sớm nhất của
                thị trường bất động sản cho nhà đầu tư để không bỏ lỡ cơ hội của
                mình. Bên cạnh đó, độ chính xác, tính minh bạch của nội dung và niềm tin của người dùng luôn được chúng tôi đặt lên hàng đầu.

              </p>
            </div>
            <div className="social-container">
              <ul className="social-icons">
                <li>
                  <a href="">
                    <i className="fa fa-link"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="">
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
