import './App.css';
import {useState} from 'react';

function App(){
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [isChecked,setIsChecked] = useState(false)
    
    
    const handleAdd = ()=>{
      if(todo){
        const newTodo = {
          title: todo,
          id: Math.floor(Math.random()*10+1)+todo,
          status: false,
      
      }
      const allTodos = [...todos,newTodo];
      setTodos(allTodos)  
      setTodo('')
      }
       
    }

    const handleDelete = (userId) =>{
      setTodos(
        todos.filter((ele)=>(
            userId != ele.id 
         ))
      ) 
      
    }

    const handleEdit = (userId)=>{
       
        todos.map((ele)=>{
            if(ele.id == userId){
                setTodo(ele.title)
            }
           }) 
       
    }
    
    const handleCheckbox = (id,event) =>{
     
     const updatedTodo= todos.map((ele)=>{
          if(ele.id === id){
            setIsChecked(event.target.checked);
            return({...ele, status: !ele.status})
        }else{
          return(ele)
        }
      })
      setTodos(updatedTodo);
    }
   
    
return(
<>
<div id="container">
  <div id="todoHeading">
    <p>Todo App</p>
  </div>
  <div id="inputTitle">
    <input type="text" placeholder="Enter Title" onChange={(e)=>setTodo(e.target.value)} value={todo} /><br />
    <button onClick={handleAdd}>ADD</button>
  </div>

    {
        todos.map((ele)=>(
          
          <>  
           <div id="todosContainer" key={ele.id} >
            <div >
              <input type="checkbox" onChange={(e)=>handleCheckbox(ele.id,e)} />
              <p>{ele.title} - {ele.status ? "complted" : "Not Completed"}</p>
            </div>
            <div>
              <i className="fa-solid fa-pen-to-square" onClick={()=>{handleEdit(ele.id)}} ></i>
              <i className="fa-solid fa-trash-can" onClick={()=>{handleDelete(ele.id)}}></i>
            </div>
            </div>
          </>
        ))
    }
    -
  
</div>
</>
)
}

export default App;