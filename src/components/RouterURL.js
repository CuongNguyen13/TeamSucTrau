import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.js";
import Search from "./Search.js";
import Contact from "./Contact/Contact.js";
import About from "./About.js";
// import component xem full bảng tin
import NewsFullView1 from "./Home/news/newsFullView/NewsFullView1.js";
import NewsFullView2 from "./Home/news/newsFullView/NewsFullView2.js";
import NewsFullView3 from "./Home/news/newsFullView/NewsFullView3.js";
import NewsFullView4 from "./Home/news/newsFullView/NewsFullView4.js";
import NewsFullView5 from "./Home/news/newsFullView/NewsFullView5.js";
import NewsFullView6 from "./Home/news/newsFullView/NewsFullView6.js";

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
        <Route exact path="/newfullview1" component={NewsFullView1} />
        <Route exact path="/newfullview2" component={NewsFullView2} />
        <Route exact path="/newfullview3" component={NewsFullView3} />
        <Route exact path="/newfullview4" component={NewsFullView4} />
        <Route exact path="/newfullview5" component={NewsFullView5} />
        <Route exact path="/newfullview6" component={NewsFullView6} />
      </div>
    );
  }
}

export default RouterURL;
