import { useSelector } from "react-redux";
import "./Todo.css";
export function Todo() {
  const todo = useSelector((state) => state.userInfo.todo);
  return (
    <div className="todo-container">
      <form>
        <input type="text" placeholder="Add new Todo List" />
        <button>Submit</button>
      </form>
      <div className="todo-lists"></div>
    </div>
  );
}
