
const todos = (state = [], actions) => {
    switch (actions.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: actions.id,
                    text: actions.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === actions.id ? { ...todo, completed } : !todo.completed
            )
        default:
            return state
    }
}

export default todos;