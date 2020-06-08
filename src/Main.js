import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.js";
import RouterURL from './components/RouterURL.js';
import Footer from "./components/Footer.js";
import "./Main.css";
import "./NewsFullView.css";

class Main extends Component {
  render() {
    return (
     <Router >
       <NavigationBar/>
       <RouterURL />
       <Footer/>
     </Router>
    );
  }
}

export default Main;