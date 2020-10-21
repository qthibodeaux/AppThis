import React, { useContext, useState } from 'react';
import {
  Box,
  Grid,
  Grommet,
  ResponsiveContext,
  Heading,
  Form,
  FormField,
  Button,
  TextArea,
  MaskedInput,
} from 'grommet';
import { Banner } from "./components";

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
});


// columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
const rows = {
  small: ['xsmall', 'xsmall', 'xsmall'],
  medium: ['xsmall', 'xsmall'],
  large: ['xsmall'],
  xlarge: ['xsmall'],
};


const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

// Let's say this is returned from an API
const animals = [
  'dog',
  'cat',
  'pig',
  'cow',
  'giraffe',
  'elephant',
  'dinosaur',
  'chicken',
  'duck',
  'tiger',
  'lion',
  'cheetah',
];

// Create box for each animal
const listAnimalsBoxes = animals.map(animalName => (
  <Box
    elevation="large"
    key={animalName}
    background="light-3"
    flex={false}
    justify="center"
    align="center"
  >
    <Heading level={2}>{animalName}</Heading>
  </Box>
));

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [0, 1], end: [0, 1] },
    { name: 'test1', start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: 'header', start: [0, 0], end: [1, 0] },
    { name: 'test', start: [0, 1], end: [0, 1] },
    { name: 'test1', start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [1, 0], end: [1, 0] },
    { name: 'test1', start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [1, 0], end: [1, 0] },
    { name: 'test1', start: [2, 0], end: [2, 0] },
  ],
};



function App () {
  return (
    <Grommet theme={customBreakpoints}>
    <Box>
      <Heading level={2}>Resize me.</Heading>
      <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="medium"
      >
        <Responsive gap="small" margin="medium" columns="medium" rows="xsmall">
          {listAnimalsBoxes}
        </Responsive>
      </Responsive>
    </Box>
  </Grommet>
  )
}










/*
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
*/
export default App;

