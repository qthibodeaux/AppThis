import React  from 'react'
import { Box, List, Text, Button  } from 'grommet';
import { FormEdit, Trash  } from 'grommet-icons';

function ListItem (props) {
    console.log(props)
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
            <div><Button  label={<FormEdit size="small"/>} /></div>
            <div><Button  label={<Trash size="small"/>} /></div>
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