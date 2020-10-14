import React from 'react';
import { connect } from 'react-redux';
import { Box, DateInput, Paragraph } from 'grommet'


function DateAndTime(props) {

  const dateSelection = (val) => {
    props.dispatch({type: 'DATEVALUE', value: val})
  }

  const timeSelection = (val) => {
    props.dispatch({type: 'TIMEVALUE', value: val})
  }

  return (
    <Box>
        <Paragraph >
                What is the time and date of the appointment?
          </Paragraph>
         <DateInput
            format="mm/dd/yyyy"
            value={(new Date()).toISOString()}
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
    </Box>
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