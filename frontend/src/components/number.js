import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
        display: 'flex',
        flexDirection: 'column',
    },
  }));
 

function Number (props){

    const classes = useStyles();

    const numberSelection = (val) => {  
        props.dispatch({type: 'NUMBERVALUE', value: val})
    }

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant="subtitle2" gutterBottom>
                    Please enter the number and the email and address.
                </Typography>
                <TextField 
                    id="filled-search" 
                    label="Phone Number"
                    type="Phone Number"
                    variant="filled" 
                    helperText="Format: +1XXXXXXXXX"
                    onChange={(e) => numberSelection(e.currentTarget.value)}
                />
            </form>
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        numberValue: currentReduxStoreState.numberValue,
    }
}

const ConnectedNumber = connect(mapStateToProps)(Number)

export default ConnectedNumber