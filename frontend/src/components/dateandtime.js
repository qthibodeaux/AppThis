import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function DateAndTime(props) {
  const classes = useStyles();

  const dateSelection = (val) => {
    props.dispatch({type: 'DATEVALUE', value: val})
  }

  const timeSelection = (val) => {
    props.dispatch({type: 'TIMEVALUE', value: val})
  }

  return (
    <form className={classes.container} noValidate>
      <Typography variant="subtitle2" gutterBottom display={"inline"}>
                What is the time and date of the appointment?
             </Typography>
         <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={props.dateValue}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => dateSelection(e.currentTarget.value)}
          />
        <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue={props.timeValue}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => timeSelection(e.currentTarget.value)}
          />
    </form>
  );
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        dateValue: currentReduxStoreState.dateValue,
        timeValue: currentReduxStoreState.timeValue
    }
}

const ConnectedDateAndTime = connect(mapStateToProps)(DateAndTime)

export default ConnectedDateAndTime