import {useState,useEffect} from 'react';




function App(){
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec,setSec] = useState(0)

  useEffect(()=>{
    const t= setInterval(()=>{
      console.log("interval")
      Timer();
    },1000)

    return () => {
      clearInterval(t);
    };

  },[])

  function Timer(){
    setSec(sec+1)
  
    if(sec===60){
      setMin(min+1)
      setSec(0)
    }
  
  }
  return(
    <>
      <h1>{hour}:{min}:{sec}</h1>
    </>
  )
}

export default App;