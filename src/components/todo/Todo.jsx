import "./Todo.css";
import { EachTodo } from "./EachTodo";
export function Todo() {
  const todo = JSON.parse(localStorage.getItem("todo")) || [];
  return (
    <div className="todo-container">
      <form>
        <input type="text" placeholder="Add new Todo List" />
        <button>Submit</button>
      </form>
      <div className="todo-lists">
        {todo.map((each, i) => {
          return <EachTodo todo={todo} each={each} key={i} />;
        })}
      </div>
    </div>
  );
}
