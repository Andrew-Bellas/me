import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  timeline: {
    margin: 'auto'
  },
  paper: {
    padding: '0.5vw',
  },
  icon: {
    width: '20vw',
    height: '20vw',
    maxWidth: '50px',
    maxHeight: '50px',
  },
  connector: {
    height: '3vw'
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h4'>
        Education
      </Typography>

      <Timeline align="alternate" >
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textPrimary">
              Expected 2021
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <Avatar src='images/roo.svg' className={classes.icon} />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">
                University of Missouri-Kansas City
            </Typography>
              <Typography>Bachelor of Science in Computer Science</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textPrimary">
              2020
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Avatar src='images/jccc.png' className={classes.icon} />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Johnson County Community College
            </Typography>
              <Typography> Associate of Science, Associate of Arts </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textPrimary">
              2017
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <Avatar src='images/lshs.png' className={classes.icon} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Lee's Summit High School, Summit Technology Academy
            </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

