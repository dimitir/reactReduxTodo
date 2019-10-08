import './main.css';
import App from './coponents/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { creactStore } from 'redux';

const store = creactStore(todoApp);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);