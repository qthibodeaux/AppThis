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
              App To Text
            </Typography>
        </div>
    )
}

export default Banner