import React from "react";
//import { Link } from "react-router-dom";
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = ({
    root: {
        flexGrow: 1,
        buffer: '50px',
        margin: 'auto',
        border: '2px solid white',
    },
    grid: {
        padding: '40px',
        width: '100%',
        margin: 'auto',
    },
    card: {
        width: '1200px',
        height: '600px',
        backgroundColor: 'black',
        margin: 'auto',
        opacity: '40%',
        border: '5px solid white',
        borderRadius: '25px',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        border: '5px solid white',
        margin: 'auto',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: '250px',
    },
});

function Home(props) {

    const { classes } = props;
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
            </Grid>
            <Grid item margin={'auto'}>
                <Card className={classes.card}>
                </Card>
            </Grid>
        </Grid>
        </div>
    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};

export default withStyles(styles)(Home);
