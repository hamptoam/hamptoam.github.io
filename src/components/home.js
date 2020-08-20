import React from "react";
//import { Link } from "react-router-dom";
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        border: '2px solid white',
    },
    grid: {
        padding: '50px',
        width: '100%',
        margin: 'auto',
    },
    card: {
        width: '1400px',
        height: '400px',
        backgroundColor: 'black',
        margin: '0',
        opacity: '50%',
        borderRadius: '25px',
        padding: '50px',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        border: '2px solid white',
        margin: '50px',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: '250px',
    },
}));

export default function Home() {

    const classes  = useStyles();
    return (
   <div style={{width: '100%', margin: 'auto'}}>
        <Grid container className={classes.grid} justify={'space-around'}>
            <Grid item>
                <Card className={classes.bubble} margin={'auto'}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                            image={require('../images/temppicture.jpg')}
                        /> 
                    </CardActionArea>
                </Card>
                <Grid>
                <Card className={classes.card}>
                </Card>
            </Grid>
            </Grid>  
        </Grid>
        </div>
    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};


