import React, { useState } from 'react'
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
    },
  }));

function Message (props){
    const classes = useStyles();

    const [isError, setError] = useState(false)
    const [helpText, setHelpText] = useState("")
    const [validity, setValidity] = useState(false)

    const newSelection = (val) => {
        if(val !== "Message To Send") {
            setValidity(true)
        }

        valLength(val)

        props.dispatch({type: 'MESSAGEVALUE', value: val, valid: validity})
    }

    function valLength(val) {
        if(val.length < 4) {
            setError(true)
            setHelpText("Message must be longer than 5 characters.")
            setValidity(false)
        } else{
            setError(false)
            setHelpText("")
            setValidity(true)
        }
    }

    return(
        <div>
            <Typography variant="subtitle2" gutterBottom>
                What message would you like to send?
             </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="filled-textarea"
                    label="Message To Send"
                    placeholder="Message To Send"
                    multiline
                    variant="filled"
                    onChange={(e) => newSelection(e.currentTarget.value)}
                    error={isError}
                    helperText={helpText}
                />
            </form>
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        messageValue: currentReduxStoreState.messageValue,
    }
}

const ConnectedMessage = connect(mapStateToProps)(Message)

export default ConnectedMessage