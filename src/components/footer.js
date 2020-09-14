import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Grid, Typography, Link } from '@material-ui/core';
 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '500',
  
    },
  footer: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
    
    flexDirection: 'row-reverse',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
     
    
    <Grid item xs={12} className={classes.footer}>
 <Toolbar>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
 
 
    
    </Toolbar>
    </Grid>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};