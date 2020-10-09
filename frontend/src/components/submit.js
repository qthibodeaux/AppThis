import React, { useState, useEffect  } from 'react';
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
  const [isDisbled, setDisable] = useState(false)
  const [text, setText] = useState("")

  function generateText () {
    const start = "Message: " + props.message + " / Date: " + props.date + " / Time: " + props.time + " / Place: " +  props.where
    setText(start)
  }

  const getBackend = () => {
    axios.get("/list").then(response => {
      setNem(response.data)
      console.log(nem)
      props.dispatch({type: 'DATABASEVALUE', value: nem})
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const heyPost = () => {
    axios.post("/hi", {
      text: {text},
      to: props.number,
      email: props.email
    }
      )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() =>  {
    generateText()
    console.log(text)
  })

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={heyPost} disabled={isDisbled}>
        Primary
      </Button>
      <div>
        <p>Total {text}</p>
        <p>message value: {props.message}</p>
        <p>message validity: {props.messageValidation.toString()}</p>
        <p>datevalue: {props.date}</p>
        <p>timevalue: {props.time}</p>
        <p>wherevalue: {props.where}</p>
        <p>wherevalidation {props.whereValidation.toString()}</p>
        <p>numbervlaue: {props.number}</p>
        <p>emailvalue {props.email}</p>
        <p>emailvalidation {props.emailValidation.toString()}</p>
      </div>
    </div>
  );
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    message: currentReduxStoreState.messageValue,
    messageValidation: currentReduxStoreState.messageValidation,
    date: currentReduxStoreState.dateValue,
    time: currentReduxStoreState.timeValue,
    where: currentReduxStoreState.whereValue,
    whereValidation: currentReduxStoreState.whereValidation,
    number: currentReduxStoreState.numberValue,
    email: currentReduxStoreState.emailValue,
    emailValidation: currentReduxStoreState.emailValidation,
  }
}

const ConnectedSubmitButton = connect(mapStateToProps)(SubmitButton)

export default ConnectedSubmitButton