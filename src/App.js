import React from "react";
//import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import background from './components/dfCdbng.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
    },
}));

export default function App() {
    {
        const classes = useStyles();
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid className={classes.root}>
                    <Header />
                    <Main />
                    <Footer />
                </Grid>
            </React.Fragment>
        );
    }
}


