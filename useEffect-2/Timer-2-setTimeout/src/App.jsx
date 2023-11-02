import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount((preValue) => preValue + 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <>
      <h1>Timer: {count} sec</h1>
    </>
  );
}

export default App;
