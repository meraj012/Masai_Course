import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTodo(page);
  }, [page]);

  async function fetchTodo(page) {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
      );
      setTodos(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  async function addTodo() {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title: text,
      completed: true,
    });
    setTodos([...todos, res.data]);
    setText("");
    console.log("added");
  }

  async function toggleTodo(id) {
    try {
      const updatedTodo = todos.map((ele) =>
        ele.id === id ? { ...ele, completed: !ele.completed } : ele
      );
      setTodos(updatedTodo);
      // await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      //   completed: !ele.find((ele) => ele.id == id).completed,
      // });
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteTodo(id) {
    try {
      const updatedTodo = todos.filter((ele) => {
        return ele.id != id;
      });
      setTodos(updatedTodo);
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) return <h1>Loadding......</h1>;
  if (error) return <h1>Something is wrong refresh the page......</h1>;

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "auto",
          padding: "20px 50px 50px",
        }}
      >
        <div>
          <button onClick={() => setPage(page - 1)}>Previous</button>
          <span> {page} </span>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Type tittle...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTodo}>ADD</button>
        </div>
        {todos.map((ele) => (
          <tr key={ele.id}>
            <td>{ele.id}. </td>
            <td>{ele.title} - </td>
            <td>{ele.completed ? "Completed" : "Not Completed"}</td>
            <td>
              <button onClick={() => toggleTodo(ele.id)}>Toggle</button>
            </td>
            <td>
              <button onClick={() => deleteTodo(ele.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </div>
    </>
  );
}

export default App;
