import React, { Component } from "react";
import News_Block from "./News_Block.js";
import data from "../../../SIMULATION_DATABASE/data_BlockNews.json"

class Group_News extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="my-4 text-justify text-center">
          Tin mới cập nhật
        </h3>
        <div className="row">
          <News_Block id="a" block_NavLinkFull="/newfullview1" block_img_src={data[0].imgsrc} block_title={data[0].title} block_small_content={data[0].description} content_for_QuickView="dfojhgohkjdgfhonkgd" block_NavlinkFull="/newfullview1" />
          <News_Block id="b" block_NavLinkFull="/newfullview2" block_img_src="http://placehold.it/702x400" block_title="2titkfgp" block_small_content="hiopjoifhdgpfdghdfhgdfhg" />
          <News_Block id="c" block_NavLinkFull="/newfullview3" block_img_src="http://placehold.it/703x400" block_title="3titkfgp" block_small_content="3hiopjoifhdgpfdghdfhgdfhg" />
          <News_Block id="d" block_NavLinkFull="/newfullview4" block_img_src="http://placehold.it/700x400" block_title="4titkfgp" block_small_content="hiopjoifhdgpfdghdfhgdfhg" />
          <News_Block id="e" block_NavLinkFull="/newfullview5" block_img_src="http://placehold.it/700x400" block_title="5titkfgp" block_small_content="56hiopjoifhdgpfdghdfhgdfhg" />
          <News_Block id="f" block_NavLinkFull="/newfullview6" block_img_src="http://placehold.it/700x400" block_title="6titkfgp" block_small_content="hiopjoifhdgpfdghdfhgdfhg" />
          
        </div>
      </div>
    );
  }
}

export default Group_News;
