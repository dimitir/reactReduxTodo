import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, ll }) => (
    <li
        onClick={onClick}
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
    text: PropTypes.string.isRequired
}

export default Todo;

/*
     */