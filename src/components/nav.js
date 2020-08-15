import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip, Toolbar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//import { shadows } from '@material-ui/system';
//import '../src/App.css';
import HomeIcon from '@material-ui/icons/Home';
import EmojiIcon from '@material-ui/icons/EmojiEmotions';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import ResumeIcon from '@material-ui/icons/ListAltTwoTone';

const styles = ({
    Root: {
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        justifyContent: 'flex-end',
        display: 'flex',
        backgroundColor: 'translucent',
        /*border: '2px solid white',*/
        borderRadius: '5px',
        height: '75px',
        padding: '15px',
        justifyContent: 'left',
    },
    Button: {
        padding: '10px', 
        borderRadius: '50%',
        background: 'white',
       border: '3px solid',  
        height: 15,
        width: 15,
        padding: '10px',
        margin: '15px',
    },   
});

function Navbar(props) {

    const { classes } = props;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Toolbar className={classes.Root}>
                <Tooltip title="Home">
                    <IconButton className={classes.Button} href="./home">
                        <HomeIcon className={classes.Icon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="About Me">
                    <IconButton className={classes.Button} href="./aboutme">
                        <EmojiIcon className={classes.Icon}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Projects">
                    <IconButton className={classes.Button} href="./projects" >
                        <CodeRoundedIcon className={classes.Icon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Resume">
                    <IconButton className={classes.Button} href="./resume">
                        <ResumeIcon className={classes.Icon}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Github">
                    <IconButton className={classes.Button} href="https://github.com/hamptoam" >
                        <GitHubIcon className={classes.Icon}/>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            </Grid>
        </Grid>
    );
}

Navbar.propTypes = {
    children: PropTypes.element.isRequired
};

export default withStyles(styles)(Navbar);