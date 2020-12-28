import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({
  avatar: {
    height: '30vw',
    width: '100%',
    margin: 'auto',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <img className={classes.avatar} src="images/kc-stock.jpg" alt="" />
  );
}
