import React, { useState, useEffect } from 'react';
import Banner from './banner';
import Databank from './databank';
import TryAgain from './TryAgain';
import { Grommet, Box, Grid, FormField, MaskedInput, TextArea, Button, Form,  DateInput, Text } from 'grommet';
import { connect } from 'react-redux'
import axios from 'axios';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}



function App(props) {

  const [message, setMessage] = useState("")
  const [number, setNumber] = useState("")
  const [time, setTime] = useState("")
  const [where, setWhere] = useState("")
  const [date, setDate] = useState({ value: '' })
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [bigDate, setBigDate] = useState("")

  function loadDB () {
    axios.get("/list")
    .then(function (response) {
      props.dispatch({type: 'DATAVALUE', value: props.data})
    })
    .catch(function (error) {
      console.log(error);
    })

    props.dispatch({type: 'LOADVALUE', value: true})
    }

    useEffect(() => {
        if(props.appLoad !== true) loadDB()
    })

  function submit (data) {
    console.log(data)
    if(data.date !== undefined){
  
      axios.post("/addEntry", {
        where: data.where,
        message: data.message,
        number: data.number,
        date: data.date,
        time: data.time,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  const onChange = nextValue => {
    console.log('onChange', nextValue);
    setDate(nextValue);
  };

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <Box>
          <Banner>
            AppToSMS
          </Banner>
          <Form
            direction='row'
            align='center'
            justify='center'
            onChange={value => console.log('change', value)}
            onReset={() => {
              setNumber("")
              setWhere("")
              setTime("")
              setMessage("")
              setDate("")
            }}
            onSubmit={(event) => {
                submit(event.value)
            }}
          >
            
            <Grid 
              justifyContent="between"
              columns={{
                count: 5,
                size: 'auto',
              }}
              gap="small"
            >
              
              <Box pad="small">
                <FormField label="What is the message?" name="message" required>
                  <TextArea 
                    name="message" 
                    resize={false} 
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    />
                </FormField>
              </Box>

              <Box pad="small">
                <FormField label="Where is the meeting?" name="where" required>
                  <TextArea 
                    name="where" 
                    resize={false} 
                    value={where}
                    onChange={event => setWhere(event.target.value)}
                    />
                </FormField>
              </Box>

              <Box pad="small">
                <FormField label="What time is the meeting?" name="time" required>
                  <MaskedInput
                    mask={[
                      {
                        length: [1, 2],
                        options: [
                          '1',
                          '2',
                          '3',
                          '4',
                          '5',
                          '6',
                          '7',
                          '8',
                          '9',
                          '10',
                          '11',
                          '12',
                        ],
                        regexp: /^1[1-2]$|^[0-9]$/,
                        placeholder: 'hh',
                      },
                      { fixed: ':' },
                      {
                        length: 2,
                        options: ['00', '15', '30', '45'],
                        regexp: /^[0-5][0-9]$|^[0-9]$/,
                        placeholder: 'mm',
                      },
                      { fixed: ' ' },
                      {
                        length: 2,
                        options: ['am', 'pm'],
                        regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                        placeholder: 'ap',
                      },
                    ]}
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                  />
                </FormField>
              </Box>

              <Box pad="small">
                <FormField
                    label="What date is the meeting?"
                    name="date"
                    required
                  >
                    <DateInput 
                      name="date" 
                      format="mm/dd/yyyy"
                      value={date}
                      onChange={onChange}/>
                  </FormField>
              </Box>

              <Box pad="small">
                <FormField label="Number to send message to:" name="number" required>
                  <MaskedInput
                      mask={[
                        { fixed: '(' },
                        {
                          length: 3,
                          regexp: /^[0-9]{1,3}$/,
                          placeholder: 'xxx',
                        },
                        { fixed: ')' },
                        { fixed: ' ' },
                        {
                          length: 3,
                          regexp: /^[0-9]{1,3}$/,
                          placeholder: 'xxx',
                        },
                        { fixed: '-' },
                        {
                          length: 4,
                          regexp: /^[0-9]{1,4}$/,
                          placeholder: 'xxxx',
                        },
                      ]}
                      name="number"
                      value={number}
                      onChange={(event) => {
                        console.log(event.target.value)
                        setNumber(event.target.value)
                      }}
                    />
                </FormField>
              </Box>
            </Grid>

            <Box 
              gap="medium" 
              direction='row'
              align='center'
              justify='center'
            >
              <Button type="submit" primary label="Submit" onClick={submit}/>
              <Button type="reset" label="Reset" />
                    <Text>{date}</Text>
            </Box>
          </Form>
          <Databank />
      </Box>
    </Grommet>
  );
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    appLoad: currentReduxStoreState.appLoad,
    data: currentReduxStoreState.data,
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp;

