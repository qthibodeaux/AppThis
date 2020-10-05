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

function Where (props){

    const classes = useStyles();

    const newSelection = (val) => {
        if(val !== "Message To Send" && props.submitted === true) {
            props.whereValidation.tf = false
            props.whereValidation.text = ""
        }
        props.dispatch({type: 'WHEREVALUE', value: val})
    }

    return(
        <div>
            <Typography variant="subtitle2" gutterBottom>
                Where is the event?
             </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                        id="filled-textarea"
                        label="Where is the event?"
                        placeholder="Where is the event?"
                        multiline
                        variant="filled"
                        onChange={(e) => newSelection(e.currentTarget.value)}
                        error={props.whereValidation.tf}
                        helperText={props.whereValidation.text}
                    />
            </form>
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        whereValue: currentReduxStoreState.whereValue,
        whereValidation: currentReduxStoreState.whereValidation,
        submitted: currentReduxStoreState.submitted,
    }
}

const ConnectedWhere = connect(mapStateToProps)(Where)

export default ConnectedWhere