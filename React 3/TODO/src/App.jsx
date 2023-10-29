import {useState} from 'react';
import './App.css'

const Todo = () =>{
  const [todo,setTodo] = useState('');
  const [todos,setTodos] = useState([]);

  const handleInputTodo = (e) =>{
    setTodo(e.target.value)
  }
  const handleAddTodo = ()=>{
   const newTodo = todo;
   const allTodos = [...todos,newTodo];
   setTodos(allTodos)
   setTodo('');
  }

  return (
    <>
      <div id="todoContainer">
         <h3>Todo App</h3>
         <div id="inputTitle">
         <input type="text" placeholder="Enter title.." onChange={handleInputTodo} value={todo}/><br />
         <button onClick={handleAddTodo}>ADD</button>
         </div>
         <div id="todos">
        {
          todos.map((ele)=>(
            <p>{ele}</p>
          ))
        }
         </div>

      </div>
    </>
  )
}

export default Todo;