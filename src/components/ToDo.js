import React from 'react';
import PropTypes from 'prom-types';

const Todo = ({onClick, completed, text}) => (
    <li 
    onClick = {onClick}
    style={{
        textDecoration: completed ? 'line-through' : 'nome'
    }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.srting.isRequired
}

export default Todo;