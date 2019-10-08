
export default function creactStore(reducer, initialState) {
    let state = initialState;
    let callbacks = [];

  let getState = () => state.cnt;


    // console.log(state);
    const dispatch = action => {
        state = reducer(state, action);
        callbacks.forEach((callback) => callback());
    }

  

    const subscribe = callback => {
        callbacks.push(callback);
        return callbacks.filter(cb => cb !== callback);
    }

      dispatch({});

    return { getState, dispatch, subscribe }
}