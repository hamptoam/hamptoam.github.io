import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Container, Grid, Card, CardMedia, CardActions, CardContent, Typography, Button, CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        spacing: 0,
        display: 'flex',
        justifyContent: 'flex',
        height: '100vh',
        fontFamily: 'Nunito',
        flexGrow: 1,
        alignItems: 'center',
        margin: 'auto',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),

    },
    card: {
        textAlign: 'center',
        height: 'auto',

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
  
    },
    cardContent: {
        flexGrow: 1,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    title: {
        color: 'white',
        variant: 'h3',
        fontFamily: 'Nunito',
        padding: theme.spacing(8, 0, 6),
    }
}));

const cards = [{title: "BetterComm", desc: "Web app designed to make phone calls for fundraising/development type companies. Has calling and texting capabilities.", lang: "C#, Javascript, HTML, SQL, TWILIO API, Stripe API"},];

export default function Projects(props) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <h3>{card.title}</h3>
                                        </Typography>
                                        <Typography>
                                            <h4>{card.lang}</h4>
                                        </Typography>             
                                        <Typography>
                                            <p>{card.desc}</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions></CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
        </div>
    );
}
//make this a carousel? 
//figure out typography and positioning it 
//Put in the rest of the projects and try to add flair to cards and page in general 

Projects.propTypes = {
    children: PropTypes.element.isRequired
};