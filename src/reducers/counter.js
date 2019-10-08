
const counterReducers = (state = 0, actions) => {
    switch (actions.name) {
        case 'INCREMENT':
            return state + 1;
        case 'DICREMENT':
            return state - 1;
        default:
            return state
    }
}

export default counterReducers;