import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay" />

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/baononglam.appspot.com/o/videoBackground.mp4?alt=media&token=9b6a1566-2998-4c24-ad72-442fe2fa8fa3"
            type="video/mp4"
          />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 title_header">real estate news</h1>
              <p className="lead mb-0">
                Luôn cập nhật nhanh chóng tin tức mới nhất về thị trường bất
                động sản Việt Nam
              </p>
            </div>
          </div>
        </div>
        
      </header>
    );
  }
}

export default Header;
