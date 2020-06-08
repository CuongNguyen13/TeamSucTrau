import React, { Component } from "react";

class NewsFullView extends Component {
  render() {
    return (
      <div className="text-justify text-center ">
        <div id="align-top"></div>
        <div className="MainNewsFullView ">
          <h1 className="titleFullView">{this.props.titleFullView}</h1>
          <div
            className="fb-like"
            data-href={"http://localhost:3000/" + this.props.partURL_plugin_fb}
            data-layout="button_count"
            data-action="like"
            data-size="large"
            data-share="true"
          ></div>
          <img className="imgFullView" src={this.props.imgFullView}></img>
          <div className="contentFullView">{this.props.contentFullView}</div>
        </div>
        <div className="comment">
          <h4>Ý kiến của bạn</h4>
          <div
            className="fb-comments"
            data-href={"http://localhost:3000/" + this.props.partURL_plugin_fb}
            data-numposts="10"
            data-width="900"
          ></div>
        </div>
      </div>
    );
  }
}

export default NewsFullView;
