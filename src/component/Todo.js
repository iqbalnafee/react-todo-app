import React from 'react'

const Todo = (props) => {
    const {text,todo,todos,setTodos} = props;

    const deleteHandler = () => {
        setTodos(todos.filter( (element) => element.id !== todo.id ));
    }

    const completeHandler = () => {
        setTodos(todos.map(element => {
            if(element.id===todo.id){
                return {...element, completed: !element.completed}
            }
            return element;
            
        } )
        
        
        )
        
    }

    return (
        <div className="todo">

            <li className={`todo-item ${todo.completed ? "completed":""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    )
}

export default Todo;
