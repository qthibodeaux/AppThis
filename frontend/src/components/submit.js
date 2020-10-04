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

  const getBackend = () => {
    axios.get("/list").then(response => {
      setNem(response.data)
      console.log(nem)
      props.dispatch({type: 'DATABASEVALUE', value: nem})
    })
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={getBackend}>
        Primary
      </Button>
      <div>
        <ul>
          {props.databaseArray.map((element) => {
            return <li>
              {element.content}
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    databaseArray: currentReduxStoreState.databaseArray,
  }
}

const ConnectedSubmitButton = connect(mapStateToProps)(SubmitButton)

export default ConnectedSubmitButton