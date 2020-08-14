import React from "react";
//import { Link } from "react-router-dom";
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Navbar from './nav';

const styles = ({
    root: {

    },
    card: {
        padding: '25px',
        buffer: '15px',
        display: 'flex',
        flexGrow: 1,
        position: 'fixed-center',
        top: 0,
        bottom: 0,
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: '1px solid white',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: 300,
    },
});

function Home(props) {

    const { classes } = props;
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                            image={require('../images/temppicture.jpg')}
                        /> 
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid>
                <Card>

                </Card>
            </Grid>
        </Grid>

    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};

export default withStyles(styles)(Home);
