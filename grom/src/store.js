import { createStore } from 'redux';

const initialState = {
    appLoad: false,
    data: {},
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

    if (type === 'LOADVALUE') {
        nextState.appLoad = action.value
    } else if (type === 'DATAVALUE')  {
        nextState.data = action.value
    }

    return nextState
}

const theStore = createStore(reducer)

export default theStore