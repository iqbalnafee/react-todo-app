import React from 'react'
import Todo from './Todo'

export const Todolist = (props) => {
    const {todos,setTodos} = props;
    return (
        <div>
           <div className="todo-container">
            <ul className="todo-list">
                {todos.map(t => <Todo key={t.id} todo={t} text={t.text} todos={todos} setTodos={setTodos}/>)}
            </ul>
           </div> 
        </div>
    )
}
export default Todolist;
