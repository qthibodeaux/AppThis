import React from 'react';
import { Box } from 'grommet';
import Message from './message'
import Where from './where'
import Number from './number'

function Main (props) {
    return(
        <Box 
            direction='row'
            align='center'
            justify='between'
            background='light grey'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            style={{ zIndex: '1' }}
            {...props}
        >
            <Box>
                <Message />
            </Box>
            <Box>
                DateAndTime
            </Box>
            <Box>
                <Where />
            </Box>
            <Box>
                <Number />
            </Box>
        </Box>
    )
}

export default Main