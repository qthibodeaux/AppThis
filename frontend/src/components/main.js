import React from 'react';
import Message  from './message';
import Grid from '@material-ui/core/Grid';
import DateAndTime from './dateandtime';
import Where from './where';
import Number from './number';
import Paper from '@material-ui/core/Paper';
import Submit from './submit';

function Main () {
    return(
        <Grid 
            container 
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item>
                <Message />
            </Grid>
            <Grid item>
                <DateAndTime />
            </Grid>
            <Grid item>
                <Where />
            </Grid>
            <Grid item>
                <Number />
            </Grid>
        </Grid>
    )
}

export default Main