/*import React,{useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Grid, Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';


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
        opacity: '80%',
        borderRadius: '25px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: '7px solid',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        border: '2px solid',
        margin: '50px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: '250px',
    },
}));

const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }


export default function Home(props) {

    const classes  = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
            
        },[])

    return (

     
        <Container className={classes.grid} justify={'space-around'}
        >
        <StyleRoot>
            <Grid style={styles.bounce}>
                <Card className={classes.bubble} margin={'auto'}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                            image={require('../images/temppicture.jpg')}
                        /> 
                    </CardActionArea>
                </Card>
            </Grid>
        </StyleRoot>
            <Grid item>
                <Card className={classes.card}/>
            </Grid>
            </Container>  
    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};


*/