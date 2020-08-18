import React from 'react';
import PropTypes from 'prop-types';
import { Button, Toolbar, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    toolbar: {
       // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        justifyContent: 'flex-end',
        display: 'flex',
        backgroundColor: 'black',
        opacity: "40%",
        height: '75px',
        padding: '15px',
        border: '5px solid white', 
        //borderRadius: '10%',
    },
    button: {
        //padding: '10px', 
        borderRadius: '15%',
        background: 'grey',
        border: '3px solid white',  
        height: '40px',
        width: 15,
        margin: '15px',
    },   
}));

export default function Navbar(props) {

    const classes  = useStyles();
    const {sections, title} = props;

    return (
        <Toolbar className={classes.toolbar}>
            <Grid item size="small">
                    <Button className={classes.button} href="./home">
                        Home
                    </Button>
                    <Button className={classes.button} href="./aboutme">
                        About Me
                    </Button>
                    <Button className={classes.button} href="./projects" >
                        Projects
                    </Button>
                    <Button className={classes.button} href="./resume">
                        Resume
                    </Button>
                    <Button className={classes.button} href="https://github.com/hamptoam" >
                        Github
                    </Button>
                    </Grid>
            </Toolbar>
    );    
}

Navbar.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
  };
