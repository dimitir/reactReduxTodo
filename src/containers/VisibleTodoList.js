import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    console.log(todos);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
    return (
        {
            toggleTodo: id => dispatch(toggleTodo(id))
        }
    )
}




const VisibleTodoList = connect(
    mapStateProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;


// const mapStateProps = state => {
//     console.log(state);
//     return({
//         todos: 5
//     })
// }



