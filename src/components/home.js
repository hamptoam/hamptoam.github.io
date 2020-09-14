import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       // textAlign: 'center',
        height: '100vh',
        fontFamily: 'Nunito',

    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color:'black',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    },
    goDown: {
        color:'black',
        fontSize: '2rem',
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
<Collapse in={checked} {...(checked ? {timeout: 1000 } : {})} collapsedHeight={50}>
<div className={classes.container}>
    <h1 className={classes.title}>
        Amelia Hampton<br />
         <span className={classes.colorText}>Full Stack Web and Software Developer</span>
    </h1>
    <IconButton>
        <ExpandMoreIcon className={classes.goDown} />
    </IconButton>
    </div>
    </Collapse>
    </div>
    )
};