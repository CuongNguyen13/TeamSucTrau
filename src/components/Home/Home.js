import React, { Component } from 'react';
import Header from './Header';
import Group_News from './news/Group_News.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Group_News/>
            </div>
        );
    }
}

export default Home;