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
        display: 'flex',
        flexDirection: 'column',
    },
  }));
 

function Number (props){

    const classes = useStyles();
    const [num, getNum] = useState("")


    const numberSelection = (val) => {
        const re = /^[0-9\b]+$/;
        console.log(re.test(val))
        if (val === '' || re.test(val)) {
            //props.dispatch({type: 'NUMBERVALUE', value: val})
            getNum(val)
         }
    }

    const emailSelection = (val) => {
        props.dispatch({type: 'EMAILVALUE', value: val})
    }

    function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
      console.log("true")
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
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
                    value={num}
                    onChange={(e) => numberSelection(e.currentTarget.value)}
                />
                <TextField
                    id="filled-search" 
                    label="Email Address"
                    type="Email Address"
                    variant="filled" 
                    helperText="Format: name@mail.com"
                    onChange={(e) => emailSelection(e.currentTarget.value)}
                />
            </form>
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