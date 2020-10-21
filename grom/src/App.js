import React, { useContext, useState } from 'react';
import {
  Box,
  Grid,
  Grommet,
  ResponsiveContext,
  Form,
  FormField,
  Button,
  TextArea,
  MaskedInput,
} from 'grommet';
import { Banner } from "./components";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

function App() {
  const size = useContext(ResponsiveContext);
  const [message, setMessage] = useState("")
  const [number, setNumber] = useState("")
  const [time, setTime] = useState("")
  const [where, setWhere] = useState("")
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
            }}
            onSubmit={event => console.log('Submit', event.value, event.touched)}
          >
            <Grid 
              justifyContent="center"
              alignContent="center"
              columns={size !== 'small' ? 'small' : '100%'} gap="small"
            >
              
              <FormField label="What is the message?" name="message">
                <TextArea 
                  name="message" 
                  resize={false} 
                  value={message}
                  onChange={event => setMessage(event.target.value)}
                  />
              </FormField>
              <FormField label="Number to send message to:" name="number">
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
                  onChange={event => setNumber(event.target.value)}
                />
              </FormField>
              <FormField label="What time is the meeting?" name="time">
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
              <FormField label="Where is the meeting?" name="where">
                <TextArea 
                  name="where" 
                  resize={false} 
                  value={where}
                  onChange={event => setWhere(event.target.value)}
                  />
              </FormField>
            </Grid>
            <Box 
              gap="medium" 
              direction='row'
              align='center'
              justify='center'
            >
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
      </Box>
    </Grommet>
  );
}

export default App;

