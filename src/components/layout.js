
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, CssBaseline }  from '@material-ui/core';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';


const useStyles = makeStyles((theme) => ({
grid: {
  width: '100%',
  margin: 'auto',
},
  }));

export default function Layout() {
      const classes = useStyles();

      return (
          <React.Fragment>
              <CssBaseline />
              <Grid className={classes.grid}>
                 
                
                  <Header/>
                       <Main/>
                       <Footer/>
  
                
              </Grid>
          </React.Fragment>
      )
  }