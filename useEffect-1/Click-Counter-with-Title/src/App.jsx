import {useState,useEffect} from 'react';
import './App.css'

const TitleUpdaterCounter = () => {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title= `Clicked ${count} times`;
    console.log("sideEffect")
  },[count])

  function handleClick(){
    setCount(count+1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

function App(){
    
   
    return (
      <>
         <TitleUpdaterCounter />
      </>
    )

}

export default App;