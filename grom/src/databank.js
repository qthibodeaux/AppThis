import React from 'react'
import { Box, List, Text, Button  } from 'grommet';
import { Trash  } from 'grommet-icons';
import axios from 'axios';

function ListItem (props) {
    const message = "Message: " + props.datum.message
    const where = "Where is the meeting: " + props.datum.destination
    const time = "What time is the meeting: " + props.datum.time
    const date = "What date is themetting: " + props.datum.date
    const number = "What number is the message sent to: " + props.datum.phonenumber

    console.log("List Item props")
    console.log(props)

    function deleteItem () {
        const id = props.datum.id
        axios.delete("deleteEntry/"+id)
            .then(function (response) {
                console.log("delete response")
                console.log(response)
                props.dispatch({type: 'STOREVALUE', value: response.data})
            })
            .catch(function (error) {
               console.log(error);
            })
    }

    return (
        <Box
            key={props.index}
            direction="row-responsive"
            gap="small"
            size="xsmall"
            align="center"
        >
            <div><Button  label={<Trash size="small"/>}  onClick={deleteItem}/></div>
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