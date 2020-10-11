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

  function disableThis () {
    if(props.messageValidation === true && props.whereValidation === true) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  useEffect(() =>  {
    generateText()
    disableThis()
  })

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={heyPost} disabled={isDisbled}>
        Primary
      </Button>
    </div>
  );
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    messageValidation: currentReduxStoreState.messageValidation,
    whereValidation: currentReduxStoreState.whereValidation,
  }
}

const ConnectedSubmitButton = connect(mapStateToProps)(SubmitButton)

export default ConnectedSubmitButton