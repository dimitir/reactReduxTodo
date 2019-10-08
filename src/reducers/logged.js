
const loggedReducer = (state = false, action) => {
    switch (action.name) {
        case 'SIGN_IN':
            return !state;
    }
}

export default loggedReducer;