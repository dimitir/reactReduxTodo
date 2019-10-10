import React from 'react';
import PropTypes from 'prop-types';
import Todo from './ToDo';

const TodoList = ({ todos }) => (

  < ul >

    {
      todos.map(todo =>
        <Todo key={todo.id}
          {...todo}
          ll={todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )
    }
  </ul >
)


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;