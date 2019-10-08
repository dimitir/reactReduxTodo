
export default class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }
  get clb() {
    return this._callbacks;
  }

  updatate(action) {
    console.log(this._updateState);
    console.log(this._state);
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach(callback => callback())
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback)
  }

}

/* const initialState = { count: 0 }

const store = new Store(updateState, initialState);

store.subscribe(() => console.log('subscribe', store.state));
const unsubscribe = store.subscribe(() => console.log('jjjjj', store.state));
console.log(store.clb); */

/* store.updatate(incrementAction);
unsubscribe();
store.updatate(incrementAction);
store.updatate({}); */




// export default store;