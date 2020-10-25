import React, { useState, useEffect} from 'react'
import { Box, List, Text, Button  } from 'grommet';
import { FormEdit, Trash  } from 'grommet-icons';
import axios from 'axios';

function ListItem (props) {
    const message = "Message: " + props.datum.message
    const where = "Where is the meeting: " + props.datum.where
    const time = "What time is the meeting: " + props.datum.time
    const date = "What date is themetting: " + props.datum.date
    const number = "What number is the message sent to: " + props.datum.number

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

function Databank () {
    const [list, setList] = useState([""])
    const [didLoad, setDidLoad] = useState(false)

    function loadDB () {
        axios.get("/list")
        .then(function (response) {
          console.log(response.data);
          setList(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })

        setDidLoad(true)
    }

    useEffect(() => {
        if(didLoad !== true) loadDB()
    })

    return (
        <Box pad="small">
            <Text>Records</Text>
            <List data={list} pad="medium">
                {(datum, index) => (
                    <ListItem index={index} datum={datum} />
                )}
            </List>
        </Box>
    )
}

export default Databank