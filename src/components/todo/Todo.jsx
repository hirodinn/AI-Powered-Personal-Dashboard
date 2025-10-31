import "./Todo.css";
import { EachTodo } from "./EachTodo";
import { useState } from "react";
export function Todo() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [todoRedux, setTodoRedux] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  function addEntry(e) {
    e.preventDefault();
    const temp = [...todoRedux, { id: crypto.randomUUID(), title: inputValue }];
    setTodoRedux(temp);
    setTodo(temp);
    setInputValue("");
    localStorage.setItem("todo", JSON.stringify(temp));
  }
  return (
    <div className="todo-container">
      <form onSubmit={addEntry}>
        <input
          type="text"
          placeholder="Add new Todo List"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div className="todo-lists">
        {todoRedux.map((each, i) => {
          return <EachTodo todo={todo} each={each} key={i} />;
        })}
      </div>
    </div>
  );
}
