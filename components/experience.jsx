import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '500px',
    maxWidth: '100vw',
    margin: '10px',
    background: theme.palette.secondary.main,
  },
  paper: {
    padding: '10px',
    margin: 'auto',
  },
}));

export default function Experience() {
  const theme = useTheme();
  const classes = useStyles(theme);

  function educationCard(title, company, date, description) {
    return (
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="h6">
            {company}
            {' '}
            •
            {' '}
            {date}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Typography variant="h4">
        Experience
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {
                    educationCard(
                      'Apprentice Software Engineer',
                      'Cerner Corporation',
                      'June 2020-Present',
                      'In June 2020, I was transferred to a team tasked with developing and maintaining a SDK for a web-based platform using Ruby-on-Rails and React.',
                    )
                }
        {' '}
        {
                    educationCard(
                      'Apprentice Support Engineer',
                      'Cerner Corporation',
                      'June 2017-May 2020',
                      'Following high school graduation, I took a part-time position on an application support team where I performed in-depth front-end and back-end troubleshooting investigations using internal logging tools and access to our client\'s applications and databases.',
                    )
                }
        {' '}
        {
                    educationCard(
                      'Cerner Scholar',
                      'Cerner Corporation',
                      'January 2017-May 2017',
                      'As a high school senior, I was selected to participate in a semester-long half-day program where I shadowed and participated in the day-to-day processes of a professional development team. This experience solidified my drive to pursue a career in technology.',
                    )
                }
      </Box>
    </>
  );
}
