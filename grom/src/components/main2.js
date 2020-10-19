import React from 'react';
import { Box } from 'grommet';
import Message from './message'
import Where from './where'
import Number from './number'
import ResponsiveGrid from './ResponsiveGrid'

function Main2 (props) {
    return(
        <ResponsiveGrid 
            columns={['25%','25%','25%','25%']}
            rows={['medium','medium','medium','medium']}
            areas={{
                small: [
                  { name: 'four', start: [0, 0], end: [1, 0] },
                  { name: 'one', start: [1, 0], end: [1, 1] },
                  { name: 'two', start: [2, 0], end: [1, 2] },
                  { name: 'three', start: [3, 0], end: [1, 3] },
                ],
                medium: [
                  { name: 'four', start: [0, 0], end: [3, 0] },
                  { name: 'one', start: [0, 1], end: [0, 1] },
                  { name: 'two', start: [1, 1], end: [2, 1] },
                  { name: 'three', start: [3, 1], end: [3, 1] },
                ],
              }}
        >
            <Box gridArea="four">
                <Message />
            </Box>
            <Box gridArea="one">
                DateAndTime
            </Box>
            <Box gridArea="two">
                <Where />
            </Box>
            <Box gridArea="three">
                <Number />
            </Box>
        </ResponsiveGrid>
    )
}

export default Main2