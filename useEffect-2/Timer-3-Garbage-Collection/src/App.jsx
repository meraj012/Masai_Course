import { useState, useEffect } from "react";
import "./App.css";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((preValue) => preValue + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>Timer: {count} sec</h1>;
};

function App() {
  const [show, setShow] = useState(true);

  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={handleClick}>{show ? "Show" : "Hide"}</button>
      {!show ? <Timer /> : null}
    </>
  );
}

export default App;
