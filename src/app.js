import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { store } from './store/configureStore';





  class App extends Component {
    render() {
       
        console.log(this.props);
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <p className="App-intro">Здесь будут мои самые залайканые фото</p>
                <p>Меня зовут: {this.props.user}</p> {/* добавлен вывод из props */}
            </div>
        )
    }
}

// приклеиваем данные из store
  const mapStateToProps = store => {
    // console.log(store); // посмотрим, что же у нас в store?
    return {
        user: store.user,
    }
}  

// в наш компонент App, с помощью connect(mapStateToProps)
  export default connect(mapStateToProps)(App);


/*
const initialState = { cnt: 0 };


function reducer(state = { cnt: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { cnt: state.cnt + action.amount };
        case 'decrement':
            return { cnt: state.cnt - action.amount };
        case 'reset':
            return { cnt: 0 };
        default: state;
    }
}

const incrementAction = { type: 'increment', amount: 1 };
const decrementAction = { type: 'decrement', amount: 1 };
const resetAction = { type: 'reset' };

const store = createStore(reducer, initialState);
console.log(store);
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }


    incrise = () => {
        store.dispatch(incrementAction);
    }

    dicrise = () => {
        store.dispatch(decrementAction);

    }
    reset = () => {
        store.dispatch(resetAction);
    }



    render() {
          let count = store.getState() ;
        console.log(store.getState());
        return (
            <div>
                <h1>Hello redux, glade to see you!</h1>
                <span>{ count }</span>
                <button onClick={this.incrise}>+</button>
                <button onClick={this.reset}>r</button>
                <button onClick={this.dicrise}>-</button>
            </div>
        )
    }

} */