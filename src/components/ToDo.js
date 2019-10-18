import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, removeTodo }) => (
    <li className='todoItem'>
        <span
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </span>

        <button className='remove-todo' onClick={removeTodo} >x</button>
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default Todo;

