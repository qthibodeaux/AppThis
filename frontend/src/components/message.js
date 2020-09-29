import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        props.dispatch({type: 'MESSAGEVALUE', value: val})
    }

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue={props.messageValue}
                        variant="filled"
                        onChange={(e) => newSelection(e.currentTarget.value)}
                        />
            </form>
        
            <p>{props.messageValue}</p>
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