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
    const [numberError, setError] = useState(false)
    const [numberHelpText, setHelpText] = useState("Format: +1XXXXXXXXX")
    const [numberValidity, setValidity] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailHelpText, setEmailHelpText] = useState("")
    const [emailValidity, setEmailValidity] = useState(false)
    const [len, setlen] = useState(num.length)


    const numberSelection = (val) => {
        
        numberTest(val)

        lengthTest(num.length)

        props.dispatch({type: 'NUMBERVALUE', value: num, valid: numberValidity})
    }

    function numberTest (val) {
        const re = /^[0-9\b]+$/;
        if (val === '' || re.test(val)) {
            getNum(val)
         }
    }

    function lengthTest (val) {
        if(val !== 10) {
            
            setValidity(false)
            setError(true)
            setHelpText("Number must be 10 characters.")
        } else {
            setValidity(true)
            setError(false)
            setHelpText("Format: +1XXXXXXXXX")
        }
        setlen(val + " setval " + numberValidity.toString())
    }

    const emailSelection = (val) => {
        validateEmail(val)
        props.dispatch({type: 'EMAILVALUE', value: val, valid: emailValidity})
    }

    function validateEmail (mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
            setEmailError(false)
            setEmailHelpText("")
            setEmailValidity(true)
        } else {
            setEmailError(true)
            setEmailHelpText("Format: name@mail.com")
            setEmailValidity(false)
        }
        
        
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
                    helperText={numberHelpText}
                    value={num}
                    error={numberError}
                    onChange={(e) => numberSelection(e.currentTarget.value)}
                />
                <TextField
                    id="filled-search" 
                    label="Email Address"
                    type="Email Address"
                    variant="filled" 
                    helperText={emailHelpText}
                    error={emailError}
                    onChange={(e) => emailSelection(e.currentTarget.value)}
                />
                <div>
                    {len}
                </div>
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