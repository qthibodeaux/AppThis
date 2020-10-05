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
        display: 'flex',
        flexDirection: 'column',
    },
  }));

function Number (props){

    const classes = useStyles();

    const numberSelection = (val) => {
        props.dispatch({type: 'NUMBERVALUE', value: val})
    }

    const emailSelection = (val) => {
        props.dispatch({type: 'EMAILVALUE', value: val})
    }

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="filled-search" 
                    label="Search field"
                    type="search"
                    variant="filled" 
                    onChange={(e) => numberSelection(e.currentTarget.value)}
                />
                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                    onChange={(e) => emailSelection(e.currentTarget.value)}
                />
            </form>
        
            <p>{props.numberValue}</p>
            <p>{props.emailValue}</p>
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        numberValue: currentReduxStoreState.numberValue,
        emailValue: currentReduxStoreState.emailValue,
    }
}

const ConnectedNumber = connect(mapStateToProps)(Number)

export default ConnectedNumber