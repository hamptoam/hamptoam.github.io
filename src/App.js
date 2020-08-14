import React, { Component } from "react";
import './App.css';
import Main from './components/main.js';
import Navbar from './components/nav.js';
//import { PropTypes } from 'prop-types';
//import { Grid } from '@material-ui/core';


class App extends Component {
    render() {
        return (
            <div class="starfield">
                <span></span>
                <span></span>
                <span></span>
                <span></span>


                <Navbar />
                <Main />
            </div >
        );
    }
}
export default App;
