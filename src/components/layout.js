
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, CssBaseline }  from '@material-ui/core';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
      //marginLeft: theme.spacing()
    },
  }));

export default function Layout() {
      const classes = useStyles();

      return (
          <React.Fragment>
              <CssBaseline />
              <Container maxWidth="100%">
                  <Header />
                  <Grid container spacing={4} className={classes.mainGrid}>
                       <Main/>
                  </Grid>
                  <Footer/>
              </Container>
          </React.Fragment>
      )
  }