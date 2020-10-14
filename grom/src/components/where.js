import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Paragraph ,TextArea } from 'grommet'

function Where (props) {
    const [value, setValue] = useState("")

    const newSelection = (val) => {
        setValue(val)
        props.dispatch({type: 'WHEREVALUE', value: val})
    }

    return(
        <Box>
            <Paragraph margin="none">
                Where is the event?
            </Paragraph>
            <TextArea 
                placeholder="Where is the event?"
                value={value}
                onChange={event => newSelection(event.target.value)}
            />
        </Box>
    )
}

const ConnectMessage = connect()(Where)

export default ConnectMessage