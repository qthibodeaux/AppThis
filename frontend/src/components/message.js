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
    },
  }));

function Message (props){
    const classes = useStyles();

    const newSelection = (val) => {
        if(val !== "Message To Send" && props.submitted === true) {
            props.messageValidation.tf = false
            props.messageValidation.text = ""
        }
        props.dispatch({type: 'MESSAGEVALUE', value: val})
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
                    error={props.messageValidation.tf}
                    helperText={props.messageValidation.text}
                />
            </form>
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        messageValue: currentReduxStoreState.messageValue,
        messageValidation: currentReduxStoreState.messageValidation,
        submitted: currentReduxStoreState.submitted,
    }
}

const ConnectedMessage = connect(mapStateToProps)(Message)

export default ConnectedMessage