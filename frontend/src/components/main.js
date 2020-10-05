import React from 'react';
import Message  from './message';
import Grid from '@material-ui/core/Grid';
import DateAndTime from './dateandtime';
import Where from './where';
import Number from './number';
import Paper from '@material-ui/core/Paper';

function Main () {
    return(
        <Grid container spacing={2}>
            <Grid item>
            <Paper elevation={3}><Message /></Paper>
            </Grid>
            <Grid item>
            <Paper elevation={3}><DateAndTime /></Paper>
            </Grid>
            <Grid item>
            <Paper elevation={3}><Where /></Paper>
            </Grid>
            <Grid item>
            <Paper elevation={3}><Number /></Paper>
            </Grid>
        </Grid>
    )
}

export default Main