import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Toolbar, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
//import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    maxWidth: '500',
    },
    appbar: {
       // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        justifyContent: 'flex-end',
        display: 'flex',
        backgroundColor: 'black',
        opacity: "50%",
    }, 
}));

export default function Header(props) {

    const WhiteTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }}
        )(Typography);
        
    const classes  = useStyles();
    const {sections, title} = props;

    return (
        <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
            <Grid item xs={12}>
                    <Button className={classes.button} href="./home">
                        <WhiteTypography variant="h5">
                        Home
                        </WhiteTypography>
                    </Button>
                    <Button className={classes.button} href="./aboutme">
                    <WhiteTypography variant="h5">
                        About Me
                    </WhiteTypography>
                    </Button>
                    <Button className={classes.button} href="./projects">
                    <WhiteTypography variant="h5">
                        Projects
                    </WhiteTypography>
                    </Button>
                    <Button className={classes.button} href="./resume">
                    <WhiteTypography variant="h5">
                        Resume
                    </WhiteTypography>
                    </Button>
                    <Button className={classes.button} href="https://github.com/hamptoam" >
                    <WhiteTypography variant="h5">
                        Github
                    </WhiteTypography>
                    </Button>
                    </Grid>
            </Toolbar>
            </AppBar>
    );    
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
  };
