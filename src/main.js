import './main.css';
import './main.scss';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from "./reducers";
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancers);
// console.log(store);

 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);