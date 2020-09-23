import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Collapse, Container, Grid, Card, CardActionArea, CardMedia} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radium, {StyleRoot} from 'radium';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       // textAlign: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        flexGrow: 1,
        border: '2px solid white',
    

    },
    grid: {
    padding: '50px',
    width: '100%',
    margin: 'auto',
    },
    media: {
        borderRadius: '50%',
        backgroundImage: ("../images/temppicture.jpg"),
        height: '250px',
    },
    bubble: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        border: '2px solid white',
        margin: 'auto',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    icon: {
        fontSize: '2rem',
    },
    button: {
        color: 'white',
        fontFamily: 'Nunito',
    },
    colorText: {
        color:'black',
    },
    container: {
        textAlign: 'center',
        borderRadius: '25px',
        padding: '12px',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
      
    },
    goDown: {
        color:'white',
        fontSize: '2rem',
    },
    floating: {
        animation: '$floating 3000ms ${theme.transitions.easing.easeInOut}',
        animationName: 'floating',
        animationDuration: '3s',
        animationIterationCount: 'infinite',
        animationTimingFuntion: 'ease-in-out',
    },
    "@keyframes floating": { 
        "0%" : { opacity: 0, transform: "translateY(-200%)" }, 
        "50%": { opacity: 1, transform: "translateY(0)" }, 
        "100%":   { opacity: 2, transform: "translateY(0)" },     
    } 
});

export default function Home(props) {

    const classes  = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
            
        },[])

    return (
<div className={classes.root}>
        <Container className={classes.grid}
        >
        <StyleRoot>
            <Grid style={classes.bounce}>
                <Card className={classes.bubble} margin={'auto'}>
                    <CardActionArea>
                    <CardMedia className={classes.media}
                            image={require('../images/temppicture.jpg')}
                        /> 
                    </CardActionArea>
                </Card>
  
  
         
        

<Collapse in={checked} {...(checked ? {timeout: 1000 } : {})} collapsedHeight={50}>
<div className={classes.container}>
    <h1 className={classes.title}>
        Amelia Hampton<br />
         <span className={classes.colorText}>Full Stack Web and Software Developer</span>
    </h1>
    <IconButton>
     <h3 className={classes.button}>
        Follow Me 

         </h3> 
        <ExpandMoreIcon className={classes.goDown} />
    </IconButton>
    </div>
    </Collapse>
    </Grid>  
    </StyleRoot>
 
    </Container>  
    </div>
    
    )
};

Home.propTypes = {
    children: PropTypes.element.isRequired
};