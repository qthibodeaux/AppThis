import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Paragraph ,TextArea } from 'grommet'

function Number (props) {
    const [value, setValue] = useState("")

    const newSelection = (val) => {
        setValue(val)
        props.dispatch({type: 'NUMBERVALUE', value: val})
    }

    return(
        <Box>
            <Paragraph margin="none">
                Enter the number to send the text to:
            </Paragraph>
            <TextArea 
                placeholder="Number to send"
                value={value}
                onChange={event => newSelection(event.target.value)}
            />
        </Box>
    )
}

const ConnectMessage = connect()(Number)

export default ConnectMessage