import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SubmitButton(props) {
  const classes = useStyles();
  const [nem, setNem] = useState([""])
  const [isDisbled, setDisable] = useState(true)

  const getBackend = () => {
    axios.get("/list").then(response => {
      setNem(response.data)
      console.log(nem)
      props.dispatch({type: 'DATABASEVALUE', value: nem})
    })
  }

  const testMessage = () => {
    axios({
      "method":"POST",
      "url":"https://messagebird-sms-gateway.p.rapidapi.com/sms",
      "headers":{
      "content-type":"application/x-www-form-urlencoded",
      "x-rapidapi-host":"messagebird-sms-gateway.p.rapidapi.com",
      "x-rapidapi-key":"4e2c95e741msh2dcad6ec2c193e1p113bd9jsn0a15ca6eca79",
      "useQueryString":true
      },"params":{
      "username":"qthibgit",
      "password":"F3XKEvr6cdf3wGm"
      },"data":{
      "type":"normal",
      "dlr_url":"http://www.example.com/dlr-messagebird.php",
      "timestamp":"201308020025",
      "reference":"268431687",
      "sender":"MessageBird",
      "destination":"2817348561",
      "body":"This is a gsm 7-bit test message."
      }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={testMessage} disabled={isDisbled}>
        Primary
      </Button>
      <div>
        <p>message value: {props.messageValue}</p>
        <p>message validity: {props.messageValidation.toString()}</p>
        <p>datevalue: {props.dateValue}</p>
        <p>timevalue: {props.timeValue}</p>
        <p>wherevalue: {props.whereValue}</p>
        <p>wherevalidation {props.whereValidation.toString()}</p>
        <p>numbervlaue: {props.numberValue}</p>
        <p>numbervalidation {props.numberValidation.toString()}</p>
        <p>emailvalue {props.emailValue}</p>
        <p>emailValidity {props.emailValidity.toString()}</p>
      </div>
    </div>
  );
}
/*
    messageValue: "Message To Send",
    messageValidation: false,
    dateValue: "2020-10-24",
    timeValue: "10:00",
    whereValue: "Meeting Room #1",
    whereValidation: false,
    numberValue: "",
    numberValidation: false,
    emailValue: "email@mail.com",
    emailValidity: false,

*/

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    messageValue: currentReduxStoreState.messageValue,
    messageValidation: currentReduxStoreState.messageValidation,
    dateValue: currentReduxStoreState.dateValue,
    timeValue: currentReduxStoreState.timeValue,
    whereValue: currentReduxStoreState.whereValue,
    whereValidation: currentReduxStoreState.whereValidation,
    numberValue: currentReduxStoreState.numberValue,
    numberValidation: currentReduxStoreState.numberValidation,
    emailValue: currentReduxStoreState.emailValue,
    emailValidity: currentReduxStoreState.emailValidity,
  }
}

const ConnectedSubmitButton = connect(mapStateToProps)(SubmitButton)

export default ConnectedSubmitButton