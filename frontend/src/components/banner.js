import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      background: "darkblue",
      color: "white",
    },
  });

function Banner () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h2" gutterBottom>
            AppToSMS
            </Typography>
            <Typography variant="body2" gutterBottom>
            A simple application that sends a notification message to friends so that they do not forget your meeting!
            </Typography>
        </div>
    )
}

export default Banner