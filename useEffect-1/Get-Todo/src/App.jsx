import axios from 'axios';
import {useState,useEffect} from 'react';



function App(){

const [todos, setTodos] = useState([]);
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [totalPages, setTotalPages] = useState(1)

useEffect(()=>{
  getTodo(page);
},[page])
 
async function getTodo(page){
  setLoading(true)
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
    setTodos(res.data)
    setLoading(false)

    const totalCount = +res.headers.get("x-total-count")
    const totalPages = Math.ceil(totalCount / 10) // count/limit
    setTotalPages(totalPages)
  }
  catch(err){
    setError(true)
    setLoading(false)
  }
 
}

if(loading){
  return <h1>Loadding......</h1>
}

if(error){
  return <h1>Something is Wrong Refresh the page!</h1>
}

function Paggination(){
 
  return (
    <div>
      <button disabled={page === 1} onClick={()=>{setPage(page-1)}}>Previous</button>
      <p>{page}</p>
      <button disabled={page === totalPages} onClick={()=>{setPage(page+1)}}>Next</button>
    </div>
  )
}
return ( 
  <>
     <Paggination />
     {
       todos.map((ele)=>(
        <div id='todoItem' key={ele.id}>
         <p>{ele.id}. {ele.title} - {ele.completed?"Completed":"Not Completed"}</p>
        </div>
       ))
     }

  </>
 )

}

export default App;