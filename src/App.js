import React, { Component } from "react";
import './App.css';
import Main from './components/main.js';
import Layout from './components/layout.js';
//import Navbar from './components/nav.js';
//import Footer from './components/footer.js';
//import {makeStyles} from '@material-ui/styles';
//import { PropTypes } from 'prop-types';
//import { Grid } from '@material-ui/core';
//import CssBaseline from '@material-ui/core/ScopedCssBaseline';


class App extends Component {

    render(props) {
        return (
            <div className="skeleton">           
                <Layout>
                <Main />
                </Layout>
            </div >                   
        );
    }
}
export default App;
