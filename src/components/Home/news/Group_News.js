import React, { Component } from "react";
import News_Block from "./News_Block.js";
import data from "../../../SIMULATION_DATABASE/data_BlockNews.json";
import QVdata from "../../../SIMULATION_DATABASE/data_NewsQuickView.json";
class Group_News extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="my-4 text-justify text-center">Tin mới cập nhật</h3>
        <div className="row">
          {data.map((value, index) => {
            return (
              <News_Block
                id={value.id}
                block_NavLinkFull={"/" + value.linkTopic}
                block_img_src={value.imgsrc}
                block_title={value.title}
                block_small_content={value.description}
                content_for_QuickView={QVdata[index].content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Group_News;
