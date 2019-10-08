import React from 'react';
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibileTodoList from './containers/VisibleTodoList'


const App = () => (
    <div>
<AppTodo />
<VisibileTodoList />
<Footer />
    </div>
)

export default App;