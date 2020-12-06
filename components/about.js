import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      height: '30vw'
    },
    avatar: {
        height: '30vw',
        width: '100%',
        margin: 'auto'
    }
  }));
  
  export default function About() {
    const classes = useStyles();
  
    return (
        <img className={classes.avatar} src='images/kc-stock.jpg'/>
    );
  }
