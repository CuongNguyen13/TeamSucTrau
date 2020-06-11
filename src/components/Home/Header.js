/* ################################################################################################################################                                                                                                                                #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



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
            src="media/videoBackground.mp4"
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
