import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Container, Grid, Card, Typography } from '@material-ui/core';
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
    },
    container: {
        borderRadius: '25px',
        height: 'auto',
        margin: 'auto',
        padding: '50px',
        width: '100%',
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.contrastText,
    },
    paragraph: {
        color: theme.palette.primary,
    },
    title: {
        color: 'black',
        fontSize: '3rem',
        padding: '10px',
    },
}));

export default function AboutMe(props) {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);

    }, [])

    return (
        <Grid className={classes.root}>
            <Container className={classes.container}>
                        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                            <Card className={classes.card}>
                                <Typography variant="body1" display="block" className={classes.paragraph}>       
                             
                                </Typography>
                            </Card>
                        </Collapse>
            </Container>
        </Grid>
    )
};


AboutMe.propTypes = {
    children: PropTypes.element.isRequired
};
