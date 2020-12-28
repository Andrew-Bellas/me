import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  box: {
    marginLeft: '3vw',
  },
  icon: {
    height: '30vw',
    width: '30vw',
    maxHeight: '100px',
    maxWidth: '100px',
    margin: '5px',
    objectFit: 'fill',
  },
});

export default function Skills() {
  const classes = useStyles();

  function skillIcon(skill) {
    const src = `images/skills/${skill}.png`;
    return (
      <Tooltip title={skill}>
        <Avatar src={src} className={classes.icon} />
      </Tooltip>
    );
  }

  return (
    <>
      <Typography variant="h4">
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.box}>
        {skillIcon('ruby')}
        {skillIcon('rails')}
        {skillIcon('c++')}
        {skillIcon('java')}
        {skillIcon('javascript')}
        {skillIcon('react')}
        {skillIcon('mysql')}
        {skillIcon('github')}
      </Box>
    </>
  );
}
