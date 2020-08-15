import React from "react";
//import { Link } from "react-router-dom";
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
//import styled from styled-components;
//import Navbar from './nav';

const styles = ({
    root: {
        flexGrow: 1,
        buffer: '50px',
        margin: 'auto',
    },
    grid: {
        padding: '50px',
        width: '100%',
        margin: '0px',
       
    },
    card: {
    width: '680px',
    height: '480px',
    backgroundColor: 'grey',
    
    },
    bubble: {
      justify: 'center',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: '1px solid white',
        margin: '0px',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: 250,
    },
});

function Home(props) {

    const { classes } = props;
    return (
   
        <Grid container className={classes.grid} justify={'space-around'}>
            <Grid item spacing={4}>
                <Card className={classes.bubble}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                            image={require('../images/temppicture.jpg')}
                        /> 
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item spacing={6}>
                <Card className={classes.card}>

                </Card>
            </Grid>
        </Grid>
 
    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};

export default withStyles(styles)(Home);
