import React from 'react';
import PropTypes from 'prop-types';
import Todo from './ToDo';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            comleted: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.isRequired
}

export default TodoList;