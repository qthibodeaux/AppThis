import React from 'react'
import { Box, List, Text  } from 'grommet';

function ListItem (props) {
    const message = "Message: " + props.datum.message
    const where = "Where is the meeting: " + props.datum.destination
    const time = "What time is the meeting: " + props.datum.time
    const date = "What date is themetting: " + props.datum.date
    const number = "What number is the message sent to: " + props.datum.phonenumber

    return (
        <Box
            key={props.index}
            direction="row-responsive"
            gap="small"
            size="xsmall"
            align="center"
        >
            <Box direction="column">
                <Text size="xsmall">{message}</Text>
                <Text size="xsmall">{where}</Text>
                <Text size="xsmall">{time}</Text>
                <Text size="xsmall">{date}</Text>
                <Text size="xsmall">{number}</Text>
            </Box>
        </Box>
    )
}

function Databank (props) {

    console.log("List props")
    console.log(props)

    return (
        <Box pad="small">
            <Text>Records</Text>
            <List data={props.data} pad="medium">
                {(datum, index) => (
                    <ListItem index={index} datum={datum} />
                )}
            </List>
        </Box>
    )
}

export default Databank