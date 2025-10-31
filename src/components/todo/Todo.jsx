import "./Todo.css";
import { EachTodo } from "./EachTodo";
import { useState } from "react";
export function Todo() {
  const todo = JSON.parse(localStorage.getItem("todo")) || [];

  const [todoRedux, setTodoRedux] = useState(todo);
  console.log(todoRedux);
  return (
    <div className="todo-container">
      <form>
        <input type="text" placeholder="Add new Todo List" />
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
