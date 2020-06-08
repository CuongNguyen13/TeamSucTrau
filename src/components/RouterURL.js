import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Search from "./Search.js";
import Contact from "./Contact/Contact.js";
import About from "./About.js";
import data from "../SIMULATION_DATABASE/data_BlockNews.json";
import FVdata from "../SIMULATION_DATABASE/data_NewsFullView.json";
// import component xem full bảng tin
import NewsFullView from "./Home/news/NewsFullView.js";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

        {/* chuyển đến trang xem full bảng tin */}
        {data.map((value, index) => {
          return (
            <Route
              exact
              path={"/" + value.linkTopic}
              render={(props) => (
                <NewsFullView
                  titleFullView={FVdata[index].title}
                  imgFullView={FVdata[index].image}
                  contentFullView={FVdata[index].content}
                  partURL_plugin_fb={value.linkTopic}
                />
              )}
            />
          );
        })}
      </div>
    );
  }
}

export default RouterURL;
