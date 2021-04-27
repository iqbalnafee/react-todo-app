import React,{useState} from 'react'
import './App.css';
import Form from './component/Form';
import Todolist from './component/Todolist';

const App = () => {

  const [text,setText] = useState("");
  const [todos,setTodos] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>

      <Form todos={todos} text={text} setTodos={setTodos} setText={setText}/> 
      <Todolist />
    </div>
  );
}

export default App;
