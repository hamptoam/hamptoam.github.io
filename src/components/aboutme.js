
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Container, Grid, Card, CardMedia, CardActions, CardContent, Typography, Button, CssBaseline } from '@material-ui/core';
import useWindowPosition from '../components/useWindowPosition';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
root: {
    spacing: 0,
    display: 'flex',
    justifyContent: 'flex',
    height: '100vh',
    fontFamily: 'Nunito',
    flexGrow: 1,
    alignItems: 'center',
    margin: 'auto',
},
grid: {
    padding: '50px',
    width: '100%',
},

});


export default function AboutMe() {
    const classes = useStyles();
    const checked = useWindowPosition('root');

    return (
            <Grid className={classes.root}>
            <Card variant="outlined" className={classes.aboutme} checked={checked} >
                <Typography gutterBottom vriant="h5" component="h2" classname={classes.title}>
                    About Me 
                </Typography>
            </Card>
           </Grid> 
    );
}

AboutMe.propTypes = {
    children: PropTypes.element.isRequired
};