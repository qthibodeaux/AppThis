import React from 'react';
import Message  from './message';
import Grid from '@material-ui/core/Grid';
import DateAndTime from './dateandtime';
import Where from './where';
import Number from './number'

function Main () {
    return(
        <Grid container>
            <Grid item>
                <Grid><Message /></Grid>
            </Grid>
            <Grid item>
                <Grid><DateAndTime /></Grid>
            </Grid>
            <Grid item>
                <Grid><Where /></Grid>
            </Grid>
            <Grid item>
                <Grid><Number /></Grid>
            </Grid>
        </Grid>
    )
}

export default Main