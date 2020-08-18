import React, { Component } from "react";
import './App.css';
import Main from './components/main.js';
import Navbar from './components/nav.js';
import Footer from './components/footer.js';
//import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/ScopedCssBaseline';


class App extends Component {
    render() {
        return (
            <div class="skeleton">
              
                <Navbar />
                <Main />
                <Footer />
            </div >                   
        );
    }
}
export default App;
