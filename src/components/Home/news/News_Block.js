import React, { Component } from "react";
import Button_Quick_view from "./Button_Quick_view.js";

class News_Block extends Component {
  render() {
    // các props ==> attribute Khi tạo một khối tin mới
    // 1 id ứng với mỗi modal-popup ( id phải dạng chữ )
    // 2/ block_img_src ( ảnh của mỗi khối tin)
    // 3/ block_title ( title của mỗi khối tin và title của chế độ xem nhanh)
    // 4/ block_small_content ( nội dung của khối tin)
    // 5/ content_for_QuickView nội dung hiển thị khi nhấn xem nhanh

    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card h-100 News_Block">
          <div href="#">
            <img
              className="card-img-top"
              src={this.props.block_img_src}
              alt="image from bất động sản Nông Lâm 2020"
            />
          </div>
          <div className="card-body News_Block_background">
            <h4 className="card-title">
              <div href="#">{this.props.block_title}</div>
            </h4>
            <p className="card-text">{this.props.block_small_content}</p>
            <div className="button_group">
              <Button_Quick_view
                id={this.props.id}
                QuickView_title={this.props.block_title}
                QuickView_content={this.props.content_for_QuickView}
                QuickView_to_Full_View={this.props.block_NavLinkFull}
              />

              <a
                href={this.props.block_NavLinkFull}
                className="btn btn-primary btnRight"
              >
                <i className="fa fa-newspaper-o"></i> Full view
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News_Block;
