import { createStore } from 'redux';

const initialState = {
    messageValue: "Message To Send",
    messageValidation: {
        tf: false,
        text: ""
    },
    dateValue: "2020-10-24",
    timeValue: "10:00",
    whereValue: "Meeting Room #1",
    numberValue: "281-555-5555",
    emailValue: "email@mail.com",
    databaseArray: [""],
    submitted: false
}


function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {
    // set the state to initialState if this is our first run
    if (!currentState) currentState = initialState

    let nextState = deepCopy(currentState)

    const type = action.type
    // sanity-check that the action.type is a string
    if (action && typeof type !== 'string') {
      console.error('[Developer Error] action.type is not a string:', action)
    }

    if (type === 'MESSAGEVALUE') {
        nextState.messageValue = action.value
    } else if (type === 'DATEVALUE') {
        nextState.dateValue = action.value
    } else if (type === 'TIMEVALUE') {
        nextState.timeValue = action.value
    } else if (type === 'WHEREVALUE') {
        nextState.whereValue = action.value
    } else if (type === 'NUMBERVALUE') {
        nextState.numberValue = action.value
    } else if (type === 'EMAILVALUE') {
        nextState.emailValue = action.value
    } else if (type === 'DATABASEVALUE') {
        nextState.databaseArray = action.value
    }

    return nextState
}

const theStore = createStore(reducer)

export default theStore