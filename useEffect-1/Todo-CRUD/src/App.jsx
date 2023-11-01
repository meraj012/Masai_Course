import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);

  useEffect(()=>{
     fetchTodo();
  },[]);

  async function fetchTodo(){
    try{
     const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
     setTodos(res.data);
     console.log(todos)
     
   }catch(err){
     
   }
}


}

export default App;