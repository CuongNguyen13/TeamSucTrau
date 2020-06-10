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
import "../../CSS/NewsFullView.css";

class NewsFullView extends Component {
  render() {
    return (
      <div className="container text-justify px-3 contentNewTopic">
        <div id="align-top"></div>
        <div className="borderNews px-4 py-4">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-12 d-flex justify-content-end">
              <h1 className="mt-2 text-center mb-5">{this.props.titleFullView}</h1>
            </div>
            <div className="row mb-3 mx-1 text-center">
              <div className="d-flex justify-content-between">
                {/* <div className="col-lg-4 col-sm-12 mb-12"> */}
                <div
                  className="fb-like mt-2 ml-2"
                  data-href={
                    "http://localhost:3000/" + this.props.partURL_plugin_fb
                  }
                  data-layout="button_count"
                  data-action="like"
                  data-size="large"
                  data-share="true"
                ></div>
                {/* </div> */}
                {/* <div className="col-lg-8 col-sm-12 mb-12 d-flex justify-content-end "> */}
                <div className="wv-button-placeholder ml-1"></div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-12 col-sm-12 mb-12  ">
              <img
                className="imgFullView text-justify text-center"
                src={this.props.imgFullView}
              ></img>
              <p className="mt-4">{this.props.contentFullView}</p>
            </div>
          </div>
        </div>

        <div className="row SwitchNews mt-3 mx-4">
          <div className="col-lg-12 col-sm-12 mb-12 ">
            <a
              href={this.props.previous}
              className="btn btn-success py-3 pt-4 btnSwitch  btnPrevious "
            >
              <h5>
                <i className="far fa-arrow-alt-circle-left"></i> Previous
              </h5>
            </a>

            <a
              href={this.props.next}
              className="btn btn-success  py-3 px-4 pt-4 btnSwitch btnNext"
            >
              <h5>
                Next <i className="far fa-arrow-alt-circle-right"></i>
              </h5>
            </a>
          </div>
        </div>
        <div className="row text-justify text-center mt-3">
          <div className="col-lg-12 col-sm-12 mb-12">
            <h4>Ý kiến của bạn</h4>
            <div
              className="fb-comments"
              data-href={
                "http://localhost:3000/" + this.props.partURL_plugin_fb
              }
              data-numposts="10"
              data-width="900"
              data-mobile="Auto-detected"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFullView;
