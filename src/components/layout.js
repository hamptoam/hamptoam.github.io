
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, CssBaseline }  from '@material-ui/core';
import Navbar from './nav.js';
import Footer from './footer.js';
import Main from './main.js';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));


  export default function Layout() {
      const classes = useStyles();

      return (
          <React.Fragment>
              <CssBaseline />
              <Container maxWidth="lg">
                  <Navbar />
                  <Grid container spacing={5} className={classes.mainGrid}>
                       <Main/>
                  </Grid>
                  <Footer/>
              </Container>
          </React.Fragment>
      )
  }