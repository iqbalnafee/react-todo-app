import React from 'react'
import PropTypes from "prop-types";

const Form = (props) => {

    const {setText,todos,setTodos,text} = props;

    const inputTextChange = (e) => {
        setText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([

            ...todos,{text:text,completed:false,id:Math.ceil(Math.random()*1000)}

        ]);
        setText('');
    }

    return(

        <form>
            <input type="text" value={text} className="todo-input" onChange={inputTextChange}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>


    );
}

Form.prototypes = {
    setText : PropTypes.func.isRequired,
    todos : PropTypes.object.isRequired,
    setTodos : PropTypes.func.isRequired,
    text : PropTypes.string.isRequired,

}

export default Form;