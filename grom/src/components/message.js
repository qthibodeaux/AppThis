import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Paragraph ,TextArea } from 'grommet'

function Message (props) {
    const [value, setValue] = useState("")

    const newSelection = (val) => {
        setValue(val)
        props.dispatch({type: 'MESSAGEVALUE', value: val})
    }

    return(
        <Box>
            <Paragraph margin="none">
                What message would you like to send?
            </Paragraph>
            <TextArea 
                placeholder="Message to send"
                resize={false}
                plain={true}
                value={value}
                onChange={event => newSelection(event.target.value)}
            />
        </Box>
    )
}

const ConnectMessage = connect()(Message)

export default ConnectMessage