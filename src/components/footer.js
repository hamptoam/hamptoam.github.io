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
    backgroundColor: 'black',
    opacity: "80%",
    flexDirection: 'row-reverse',
    alignContent: 'center',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <Grid item xs={12} className={classes.root}>
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